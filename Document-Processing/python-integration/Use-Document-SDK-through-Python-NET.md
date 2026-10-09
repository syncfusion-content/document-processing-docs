---
title: Getting Started with Syncfusion Document Processing in Python using Python.NET | Syncfusion
description: Learn how to use Syncfusion Document Processing libraries in-process from Python using the Python.NET (pythonnet) wrapper.
platform: python
documentation: UG
---

# Getting Started with Syncfusion Document Processing in Python using Python.NET

The **Python.NET Wrapper** approach hosts the .NET runtime directly inside the Python process using the [`pythonnet`](https://pypi.org/project/pythonnet/) package. The published `DocumentBridge.dll` is loaded with `clr.AddReference` and its public methods are called natively from Python without spawning a separate process.

## Prerequisites

Ensure the following prerequisites are installed:

* **[.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)** (LTS). Earlier LTS releases (8.0 and 9.0) are also supported.
* **[Python 3.9 or later](https://www.python.org/downloads/)** (CPython distribution recommended).
* **[pythonnet](https://pypi.org/project/pythonnet/)** installed in the active Python environment.
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available).

N> The Syncfusion&reg; license key is supplied through the `SYNCFUSION_LICENSE_KEY` environment variable. The `DocumentBridge` worker reads it once during the first call.

## Step 1: Install pythonnet

Install the `pythonnet` package in your Python environment. Skip this step if `pythonnet` is already installed.

```bash
pip install pythonnet
```

## Step 2: Create the .NET Class Library Project

Open a terminal and create a new .NET class library project that will be hosted in the Python process.

```bash
mkdir PythonNetDocumentApp
cd PythonNetDocumentApp
dotnet new classlib -n DocumentBridge -f net10.0
cd DocumentBridge
```

## Step 3: Add the Required NuGet Packages

Install the Syncfusion Document Processing packages from NuGet.

```bash
dotnet add package Syncfusion.DocIORenderer.Net.Core
dotnet add package Syncfusion.XlsIORenderer.Net.Core
dotnet add package Syncfusion.PresentationRenderer.Net.Core
dotnet add package Syncfusion.Pdf.Net.Core
dotnet add package SkiaSharp.NativeAssets.Linux
dotnet add package HarfBuzzSharp.NativeAssets.Linux
```

N> The `SkiaSharp.NativeAssets.Linux` and `HarfBuzzSharp.NativeAssets.Linux` packages ship native rendering assets required for cross-platform PDF rendering. They are safe to include on Windows and macOS as well.

## Step 4: Configure the .NET Project

Open `DocumentBridge.csproj` and ensure the project emits a runtime configuration file. The runtime config is required by CoreCLR to start inside the Python process.

{% tabs %}
{% highlight xml tabtitle="DocumentBridge.csproj" %}

<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <GenerateRuntimeConfigurationFiles>true</GenerateRuntimeConfigurationFiles>
    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    <AssemblyName>DocumentBridge</AssemblyName>
    <RootNamespace>DocumentInterop</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Syncfusion.DocIORenderer.Net.Core" Version="*" />
    <PackageReference Include="Syncfusion.XlsIORenderer.Net.Core" Version="*" />
    <PackageReference Include="Syncfusion.PresentationRenderer.Net.Core" Version="*" />
    <PackageReference Include="Syncfusion.Pdf.Net.Core" Version="*" />
    <PackageReference Include="SkiaSharp.NativeAssets.Linux" Version="*" />
    <PackageReference Include="HarfBuzzSharp.NativeAssets.Linux" Version="*" />
  </ItemGroup>
</Project>

{% endhighlight %}
{% endtabs %}

Replace the contents of `Class1.cs` with the following class library implementation. Each public method on `DocumentCreator` is exposed to Python.

{% tabs %}
{% highlight c# tabtitle="DocumentCreator.cs" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Licensing;
using Syncfusion.Drawing;

namespace DocumentInterop;

public class DocumentCreator
{
    private static readonly object s_lock = new();
    private static bool s_licenseRegistered;

    public DocumentCreator()
    {
        ConfigureLicense();
    }

    private static void ConfigureLicense()
    {
        if (s_licenseRegistered) return;
        lock (s_lock)
        {
            if (s_licenseRegistered) return;
            string? key = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
            if (!string.IsNullOrWhiteSpace(key))
            {
                SyncfusionLicenseProvider.RegisterLicense(key);
            }
            s_licenseRegistered = true;
        }
    }

    // ---- Word: build from a string -------------------------------------------------

    public void CreateDocx(string text, string outputPath)
    {
        using var document = CreateDocument(text);
        using var output = File.Create(outputPath);
        document.Save(output, Syncfusion.DocIO.FormatType.Docx);
    }

    public void CreatePdf(string text, string outputPath)
    {
        using var document = CreateDocument(text);
        using var renderer = new DocIORenderer();
        using var pdf = renderer.ConvertToPDF(document);
        using var output = File.Create(outputPath);
        pdf.Save(output);
    }

    private static WordDocument CreateDocument(string text)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(text);
        var document = new WordDocument();
        var paragraph = document.AddSection().AddParagraph();
        var run = paragraph.AppendText(text);
        run.CharacterFormat.FontName = "Arial";
        run.CharacterFormat.FontSize = 12;
        return document;
    }

    // ---- Excel: convert an existing XLSX file to PDF --------------------------------

    public void ExcelToPdf(string inputPath, string outputPath)
    {
        if (!File.Exists(inputPath))
            throw new FileNotFoundException("Input workbook not found.", inputPath);
        using var engine = new ExcelEngine();
        engine.Excel.DefaultVersion = ExcelVersion.Xlsx;
        using var stream = File.OpenRead(inputPath);
        var book = engine.Excel.Workbooks.Open(stream);
        try
        {
            using var renderer = new XlsIORenderer();
            using var pdf = renderer.ConvertToPDF(book);
            using var output = File.Create(outputPath);
            pdf.Save(output);
        }
        finally { book.Close(); }
    }

    // ---- PowerPoint: convert an existing PPTX file to PDF ----------------------------

    public void PowerPointToPdf(string inputPath, string outputPath)
    {
        if (!File.Exists(inputPath))
            throw new FileNotFoundException("Input presentation not found.", inputPath);
        using var stream = File.OpenRead(inputPath);
        using var deck = Presentation.Open(stream);
        using var pdf = PresentationToPdfConverter.Convert(deck);
        using var output = File.Create(outputPath);
        pdf.Save(output);
    }

    // ---- PDF: overlay a diagonal text watermark on every page -----------------------

    public void WatermarkPdf(string inputPath, string outputPath, string label)
    {
        using var input = File.OpenRead(inputPath);
        using var loaded = new PdfLoadedDocument(input);
        using var graphics = new PdfGraphics(loaded.Pages[0].Graphics);
        var font = new PdfStandardFont(PdfFontFamily.Helvetica, 48f, PdfFontStyle.Bold);
        var brush = new PdfSolidBrush(new PdfColor(Color.FromArgb(64, 192, 192, 192)));
        var state = graphics.Save();
        graphics.TranslateTransform(loaded.Pages[0].Size.Width / 2, loaded.Pages[0].Size.Height / 2);
        graphics.RotateTransform(-45);
        graphics.DrawString(label, font, brush, new PointF(-200, 0));
        graphics.Restore(state);
        using var output = File.Create(outputPath);
        loaded.Save(output);
    }
}

{% endhighlight %}
{% endtabs %}

Rename `Class1.cs` to `DocumentCreator.cs` (or create a new file with the same name).

## Step 5: Publish the Class Library

Publish the class library to an `artifacts` folder. The Python wrapper loads the published DLL and its `DocumentBridge.runtimeconfig.json` at runtime.

{% tabs %}
{% highlight bash tabtitle="Windows" %}

dotnet publish DocumentBridge.csproj -c Release -r win-x64 --self-contained false -o ../artifacts

{% endhighlight %}
{% highlight bash tabtitle="Linux" %}

dotnet publish DocumentBridge.csproj -c Release -r linux-x64 --self-contained false -o ../artifacts

{% endhighlight %}
{% highlight bash tabtitle="macOS (Apple Silicon)" %}

dotnet publish DocumentBridge.csproj -c Release -r osx-arm64 --self-contained false -o ../artifacts

{% endhighlight %}
{% endtabs %}

Return to the project root after publishing:

```bash
cd ..
```

## Step 6: Create the Python Wrapper Module

Create a file named `document_sdk.py` in the project root. This module initializes CoreCLR with the published runtime configuration and exposes a `DocumentService` whose methods mirror the .NET class.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

import sys
from pathlib import Path


def _load_clr_bridge(bundle_path: Path) -> type:
    """Initialize CoreCLR with DocumentBridge's runtime configuration, then import DocumentCreator."""
    bundle = Path(bundle_path).resolve()
    dll = bundle / "DocumentBridge.dll"
    config = bundle / "DocumentBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(
            f"Publish DocumentBridge into '{bundle}' first (see README.md)."
        )

    # CoreCLR MUST be configured before importing `clr`.
    from pythonnet import load
    load("coreclr", runtime_config=str(config))

    # Add the assembly folder to sys.path so Python.NET's resolver finds dependencies.
    sys.path.insert(0, str(bundle))
    import clr  # noqa: E402
    clr.AddReference(str(dll))

    from DocumentInterop import DocumentCreator  # type: ignore  # noqa: E402
    return DocumentCreator


class DocumentService:
    """Thin client that hosts CoreCLR once and dispatches calls to DocumentCreator."""

    def __init__(self, creator: type):
        self._creator = creator

    def create_docx(self, text: str, output: Path) -> None:
        self._creator.CreateDocx(str(text), str(output.resolve()))

    def create_pdf(self, text: str, output: Path) -> None:
        self._creator.CreatePdf(str(text), str(output.resolve()))

    def excel_to_pdf(self, source: Path, output: Path) -> None:
        self._creator.ExcelToPdf(str(source.resolve()), str(output.resolve()))

    def powerpoint_to_pdf(self, source: Path, output: Path) -> None:
        self._creator.PowerPointToPdf(str(source.resolve()), str(output.resolve()))

    def watermark_pdf(self, source: Path, output: Path, label: str) -> None:
        self._creator.WatermarkPdf(str(source.resolve()), str(output.resolve()), str(label))


def load_service(bundle: Path | None = None) -> DocumentService:
    """Initialize the .NET bridge and return a configured DocumentService."""
    bundle_path = Path(bundle or Path(__file__).parent / "artifacts")
    creator = _load_clr_bridge(bundle_path)
    return DocumentService(creator)

{% endhighlight %}
{% endtabs %}

## Step 7: Generate Your First Document

Create a file named `app.py` that uses the `DocumentService` to generate a PDF document in-process.

{% tabs %}
{% highlight python tabtitle="app.py" %}

from pathlib import Path
from document_sdk import load_service


def main() -> None:
    service = load_service()
    output_dir = (Path(__file__).resolve().parent / "output").resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    docx_path = output_dir / "Hello.docx"
    pdf_path = output_dir / "Hello.pdf"

    service.create_docx("Hello from the Python.NET wrapper!", docx_path)
    service.create_pdf("Hello from the Python.NET wrapper!", pdf_path)

    print("Saved:", docx_path)
    print("Saved:", pdf_path)


if __name__ == "__main__":
    main()

{% endhighlight %}
{% endtabs %}

## Step 8: Run the Application

Execute the script from the project root.

```bash
python app.py
```

The output directory will contain a Word document (`Hello.docx`) and a PDF document (`Hello.pdf`) generated in-process through Python.NET.

N> The first call into the `DocumentService` takes a few seconds because CoreCLR is bootstrapped. Subsequent calls execute at in-process speed without process startup overhead.

## Available Operations

| Operation | Description | Output |
|---|---|---|
| `create_docx` | Build a Word document from a string and save as DOCX. | `.docx` |
| `create_pdf` | Build a Word document in memory and render directly to PDF. | `.pdf` |
| `excel_to_pdf` | Convert an XLSX workbook to PDF using its print settings. | `.pdf` |
| `powerpoint_to_pdf` | Convert a PPTX presentation to PDF via the presentation renderer. | `.pdf` |
| `watermark_pdf` | Overlay a diagonal text watermark on every page of an existing PDF. | `.pdf` |

## Performance Notes

* The in-process wrapper avoids per-call process startup, typically reducing the per-document overhead by 100-300 ms compared to the local .NET worker.
* Memory is shared between Python and .NET. Marshal large byte buffers through files or `bytearray` only when necessary.
* Synchronous calls block the Python thread. For very large workloads, use `concurrent.futures.ThreadPoolExecutor` because the .NET operations release the GIL.

## Troubleshooting

* **`FileNotFoundError: Publish DocumentBridge into ... first.`** - The `artifacts` directory is missing the published DLL or runtime config. Run the `dotnet publish` command from Step 5.
* **`ModuleNotFoundError: No module named 'pythonnet'`** - Install `pythonnet` with `pip install pythonnet` and ensure the active environment matches the interpreter that runs the script.
* **Output PDF contains an evaluation watermark** - The `SYNCFUSION_LICENSE_KEY` environment variable is empty or invalid. Set a valid license key and restart the script.

## See Also

* [Syncfusion Document Processing .NET Documentation](https://help.syncfusion.com/document-processing/overview)
* [Local .NET Worker Integration](Create-Document-in-Python-Local-Worker.md)
* [Syncfusion Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
