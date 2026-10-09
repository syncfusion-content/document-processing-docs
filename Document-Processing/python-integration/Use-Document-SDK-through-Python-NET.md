---
title: Use Syncfusion Document Processing in Python with Python.NET
description: Learn how to use Syncfusion Document Processing libraries in-process from Python with Python.NET and the published DocumentBridge assembly.
platform: document-processing
documentation: UG
---

# Use Syncfusion Document Processing in Python with Python.NET

Use the **Python.NET** approach when you want direct in-process calls from Python into .NET. The published `DocumentBridge.dll` is loaded with [`pythonnet`](https://pypi.org/project/pythonnet/), so Python can call Syncfusion APIs without launching a separate worker process.

## Prerequisites

Ensure the following prerequisites are installed:

* **[.NET 10.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)** (LTS). Earlier LTS releases (8.0 and 9.0) are also supported.
* **[Python 3.9 or later](https://www.python.org/downloads/)** (CPython distribution recommended).
* **[pythonnet](https://pypi.org/project/pythonnet/)** installed in the active Python environment.
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available).

N> The Syncfusion&reg; license key is supplied through the `SYNCFUSION_LICENSE_KEY` environment variable. The `DocumentBridge` library reads it once when `DocumentService` is created.

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

Open `DocumentBridge.csproj` and configure it for in-process loading by Python.NET. Use the .NET 10 target framework, generate the runtime configuration file, copy dependency assemblies to the output folder, build the project as a class library, disable the app host, and keep `DocumentBridge` and `DocumentInterop` as the assembly name and root namespace.

Add the Syncfusion document processing packages and the native rendering packages needed for PDF output.

Add a `DocumentCreator.cs` file with the following implementation. Python calls the helper methods directly.

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

/// <summary>
/// Creates a Word document in memory and saves it either as DOCX or as PDF,
/// converts an existing XLSX/PPTX file to PDF, and overlays a text watermark
/// onto every page of an existing PDF. Each entry point is independent; PDF
/// operations never write an intermediate DOCX/PPTX.
/// </summary>
public static class DocumentCreator
{
    private static readonly object s_lock = new();
    private static bool s_licenseRegistered;

    static DocumentCreator()
    {
        ConfigureLicense();
    }

    public static void ConfigureLicense()
    {
        if (s_licenseRegistered) return;
        lock (s_lock)
        {
            if (s_licenseRegistered) return;
            string? key = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
            if (!string.IsNullOrWhiteSpace(key))
            {
                SyncfusionLicenseProvider.RegisterLicense(key);
                s_licenseRegistered = true;
            }
        }
    }

    // ---- Word: build from a string ----------------------------------------------------

    // Build a new Word document and save it directly as DOCX.
    public static void CreateDocx(string text, string outputPath)
    {
        using var document = CreateDocument(text);
        using var output = OpenOutput(outputPath);
        document.Save(output, Syncfusion.DocIO.FormatType.Docx);
    }

    // Build a new Word document and render it straight to PDF via DocIORenderer.
    public static void CreatePdf(string text, string outputPath)
    {
        using var document = CreateDocument(text);
        using var renderer = new DocIORenderer();
        using var pdf = renderer.ConvertToPDF(document);
        using var output = OpenOutput(outputPath);
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

    // ---- Excel: convert an existing XLSX file to PDF ----------------------------------

    // Convert an XLSX workbook to PDF using its own print settings.
    public static void ExcelToPdf(string inputPath, string outputPath)
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
            using var output = OpenOutput(outputPath);
            pdf.Save(output);
        }
        finally { book.Close(); }
    }

    // ---- PowerPoint: convert an existing PPTX file to PDF -----------------------------

    // Convert a PPTX presentation to PDF using Syncfusion's presentation renderer.
    public static void PowerPointToPdf(string inputPath, string outputPath)
    {
        if (!File.Exists(inputPath))
            throw new FileNotFoundException("Input presentation not found.", inputPath);
        using var stream = File.OpenRead(inputPath);
        using var deck = Presentation.Open(stream);
        using var pdf = PresentationToPdfConverter.Convert(deck);
        using var output = OpenOutput(outputPath);
        pdf.Save(output);
    }

    // ---- PDF: overlay a diagonal text watermark on every page -------------------------

    // Draw a translucent diagonal label on every page of an existing PDF.
    public static void WatermarkPdf(string inputPath, string outputPath, string label)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(label);
        if (!File.Exists(inputPath))
            throw new FileNotFoundException("Input PDF not found.", inputPath);
        using var stream = File.OpenRead(inputPath);
        using var document = new PdfLoadedDocument(stream);
        foreach (PdfPageBase page in document.Pages)
        {
            var graphics = page.Graphics;
            var size = graphics.ClientSize;
            // Measure with the largest allowed size, then auto-shrink to fit
            // the page width. Floor at 8pt so very long labels stay visible
            // instead of collapsing to ~1pt and disappearing.
            const float MaxFontSize = 28f;
            const float MinFontSize = 8f;
            var probeFont = new PdfStandardFont(PdfFontFamily.Helvetica, MaxFontSize);
            float measured = probeFont.MeasureString(label).Width;
            float fontSize = MaxFontSize * size.Width * 0.8f / Math.Max(1, measured);
            fontSize = Math.Clamp(fontSize, MinFontSize, MaxFontSize);
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, fontSize);
            var state = graphics.Save();
            try
            {
                graphics.SetTransparency(0.25f);
                graphics.TranslateTransform(size.Width / 2, size.Height / 2);
                graphics.RotateTransform(-30);
                graphics.DrawString(label, font, PdfBrushes.Gray,
                    new RectangleF(-size.Width / 2, -30, size.Width, 60),
                    new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle));
            }
            finally { graphics.Restore(state); }
        }
        using var output = OpenOutput(outputPath);
        document.Save(output);
    }

    // ---- Sample input helpers (used only by the sample scripts) -----------------------

    // Build a tiny XLSX with one cell of text. Lets the samples run end-to-end without
    // shipping a binary fixture in the repository.
    public static void CreateSampleXlsx(string outputPath)
    {
        using var engine = new ExcelEngine();
        engine.Excel.DefaultVersion = ExcelVersion.Xlsx;
        var book = engine.Excel.Workbooks.Create();
        try
        {
            var sheet = book.Worksheets[0];
            sheet.Range["A1"].Text = "Sample workbook";
            sheet.Range["A1"].CellStyle.Font.Bold = true;
            sheet.Range["A3"].Text = "Hello from Syncfusion Document SDK!";
            using var output = OpenOutput(outputPath);
            book.SaveAs(output);
        }
        finally { book.Close(); }
    }

    // Build a tiny PPTX with a single slide. Lets the samples run end-to-end without
    // shipping a binary fixture in the repository.
    public static void CreateSamplePptx(string outputPath)
    {
        var deck = Presentation.Create();
        var slide = deck.Slides.Add(SlideLayoutType.Blank);
        var shape = slide.Shapes.AddTextBox(40, 40, 600, 80);
        var paragraph = shape.TextBody.AddParagraph("Hello from Syncfusion Document SDK!");
        paragraph.Font.FontSize = 28;
        paragraph.Font.Bold = true;
        using var output = OpenOutput(outputPath);
        deck.Save(output);
    }

    // ---- Common helpers ---------------------------------------------------------------

    private static FileStream OpenOutput(string outputPath)
    {
        string path = Path.GetFullPath(outputPath);
        Directory.CreateDirectory(Path.GetDirectoryName(path)!);
        // FileMode.Create overwrites an existing file at the same path.
        return new FileStream(path, FileMode.Create, FileAccess.Write);
    }
}

{% endhighlight %}
{% endtabs %}


## Step 5: Publish the Class Library

Publish the class library to an `artifacts` folder. The Python wrapper loads the published DLL and the generated runtime configuration file at runtime.

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

Create a file named `document_sdk.py` in the project root. This module loads CoreCLR and exposes the sample methods through `DocumentService`.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

"""Create Word, Excel, and PowerPoint documents and convert them to PDF with
Python.NET.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path


def _load_clr_bridge(bundle: Path) -> type:
    """Load CoreCLR and import DocumentCreator."""
    bundle = Path(bundle).resolve()
    dll = bundle / "DocumentBridge.dll"
    config = bundle / "DocumentBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(
            f"Publish DocumentBridge into '{bundle}' first (see README.md)."
        )

    # Configure CoreCLR before importing `clr`.
    from pythonnet import load
    load("coreclr", runtime_config=str(config))

    # Add the assembly folder to sys.path so dependencies resolve.
    sys.path.insert(0, str(bundle))
    import clr  # noqa: E402
    clr.AddReference(str(dll))

    from DocumentInterop import DocumentCreator  # type: ignore  # noqa: E402
    return DocumentCreator


class DocumentService:
    """Thin client for in-process document generation."""

    def __init__(self, creator_cls: type):
        self._creator = creator_cls
        self._creator.ConfigureLicense()

    # ---- Word: build from a string -------------------------------------------------

    def create_docx(self, text: str, output: Path) -> None:
        """Create and save a DOCX document."""
        self._creator.CreateDocx(str(text), str(output))

    def create_pdf(self, text: str, output: Path) -> None:
        """Create and save a PDF document."""
        self._creator.CreatePdf(str(text), str(output))

    # ---- Excel / PowerPoint: convert an existing file to PDF -----------------------

    def excel_to_pdf(self, source: Path, output: Path) -> None:
        """Convert XLSX to PDF."""
        self._creator.ExcelToPdf(str(source), str(output))

    def powerpoint_to_pdf(self, source: Path, output: Path) -> None:
        """Convert PPTX to PDF."""
        self._creator.PowerPointToPdf(str(source), str(output))

    # ---- PDF: overlay a diagonal text watermark on every page ----------------------

    def watermark_pdf(self, source: Path, output: Path, label: str) -> None:
        """Watermark each PDF page."""
        self._creator.WatermarkPdf(str(source), str(output), str(label))

    # ---- Sample input helpers -------------------------------------------------------

    def create_sample_xlsx(self, output: Path) -> None:
        """Create a sample XLSX."""
        self._creator.CreateSampleXlsx(str(output))

    def create_sample_pptx(self, output: Path) -> None:
        """Create a sample PPTX."""
        self._creator.CreateSamplePptx(str(output))


def load_service(bundle: Path | None = None) -> DocumentService:
    """Load DocumentBridge and return a ready client."""
    bundle = Path(bundle or Path(__file__).parent / "artifacts").resolve()
    creator_cls = _load_clr_bridge(bundle)
    return DocumentService(creator_cls)


# Each CLI subcommand maps to one DocumentService method. Tuple shape:
# (method-name, input-extension-or-None, output-extension, needs-label).
_OPERATIONS: dict[str, tuple[str, str | None, str, bool]] = {
    "create-docx":        ("create_docx",        None,   ".docx", False),
    "create-pdf":         ("create_pdf",         None,   ".pdf",  False),
    "excel-to-pdf":       ("excel_to_pdf",       ".xlsx", ".pdf", False),
    "powerpoint-to-pdf":  ("powerpoint_to_pdf",  ".pptx", ".pdf", False),
    "watermark-pdf":      ("watermark_pdf",      ".pdf",  ".pdf", True),
    "create-sample-xlsx": ("create_sample_xlsx", None,   ".xlsx", False),
    "create-sample-pptx": ("create_sample_pptx", None,   ".pptx", False),
}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("operation", choices=list(_OPERATIONS))
    parser.add_argument("--input", type=Path, help="Input file (for convert/watermark operations).")
    parser.add_argument("--output", type=Path, help="Output file (default: ./output/Sample.<ext>).")
    parser.add_argument("--text", default="Hello from Python and Syncfusion DocIO!",
                        help="Text for create-docx / create-pdf.")
    parser.add_argument("--label", default="CONFIDENTIAL",
                        help="Label for watermark-pdf.")
    parser.add_argument("--bundle", type=Path, help="Folder containing the published DocumentBridge.")
    args = parser.parse_args()

    method_name, input_ext, output_ext, needs_label = _OPERATIONS[args.operation]
    folder = Path(__file__).resolve().parent
    output = (args.output or folder / "output" / f"Sample{output_ext}").resolve()
    if output.suffix.lower() != output_ext:
        parser.error(f"--output must have extension {output_ext}.")
    if input_ext is not None:
        if args.input is None:
            parser.error(f"--input is required for {args.operation}.")
        source = args.input.resolve()
        if source.suffix.lower() != input_ext:
            parser.error(f"--input must have extension {input_ext}.")
        if not source.is_file():
            parser.error(f"Input file does not exist: {source}")

    service = load_service(args.bundle)
    kwargs: dict = {"output": output}
    if input_ext is not None:
        kwargs["source"] = source
    if method_name in ("create_docx", "create_pdf"):
        kwargs["text"] = args.text
    if needs_label:
        kwargs["label"] = args.label
    getattr(service, method_name)(**kwargs)
    print("Saved:", output)


if __name__ == "__main__":
    main()

{% endhighlight %}
{% endtabs %}

## Step 7: Generate a Sample Document

Create a file named `app.py`.

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

    service.create_docx("Hello from Python.NET and DocIO!", docx_path)
    service.create_pdf("Hello from Python.NET and DocIO!", pdf_path)

    print("Saved:", docx_path)
    print("Saved:", pdf_path)


if __name__ == "__main__":
    main()

{% endhighlight %}
{% endtabs %}

## Step 8: Run the Application

Run the script from the project root.

```bash
python app.py
```

The output directory will contain `Hello.docx` and `Hello.pdf`.

N> The first call may take a few seconds while CoreCLR loads.

## Available Operations

| Operation | Description | Output |
|---|---|---|
| `create_docx` | Build a Word document from a string and save as DOCX. | `.docx` |
| `create_pdf` | Build a Word document in memory and render directly to PDF. | `.pdf` |
| `excel_to_pdf` | Convert an XLSX workbook to PDF using its print settings. | `.pdf` |
| `powerpoint_to_pdf` | Convert a PPTX presentation to PDF via the presentation renderer. | `.pdf` |
| `watermark_pdf` | Overlay a diagonal text watermark on every page of an existing PDF. | `.pdf` |

## Performance Notes

* In-process calls avoid process startup overhead.
* Share large data through files or `bytearray` when needed.
* For large workloads, use `concurrent.futures.ThreadPoolExecutor`.

## Troubleshooting

- **`pythonnet` not installed**: Install it with `pip install pythonnet`.
- **`DocumentBridge.dll` not found**: Publish the class library into the `artifacts` folder first.
- **Runtime config missing**: Confirm `DocumentBridge.runtimeconfig.json` is in the published output.
- **CoreCLR load errors**: Restart the Python process, then verify the .NET 10 runtime is installed.

## See Also

* [Syncfusion Document Processing .NET Documentation](https://help.syncfusion.com/document-processing)
* [Local .NET Worker Integration](Use-Document-SDK-through-Local-NET-Worker.md)
* [Runnable sample on GitHub](https://github.com/SyncfusionExamples/python-syncfusion-document-sdk-samples)
* [Syncfusion Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
