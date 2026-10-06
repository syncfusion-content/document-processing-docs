---
title: Use Syncfusion .NET Libraries in Python via Python.NET | Syncfusion
description: Integrate Syncfusion .NET Document SDKs with Python using Python.NET to create, edit, convert, and process Word, PDF, Excel, and PowerPoint files.
platform: document-processing
control: Document SDK
Keywords: pythonnet, python syncfusion, .net document sdk, word to pdf python, python clr, syncfusion docio, syncfusion pdf, pythonnet wrapper
---

# Integrate Syncfusion .NET Document SDK into Python with Python.NET

The [Syncfusion .NET Document SDK](https://www.syncfusion.com/document-sdk) enables you to create, read, and edit Word (`.docx`), PDF, Excel, and PowerPoint documents programmatically. With [Python.NET (pythonnet)](https://pythonnet.github.io/), you can load and call .NET assemblies directly from Python, enabling **in-process** document generation and conversion without launching a separate worker process.

This guide provides a comprehensive, step-by-step workflow for integrating Syncfusion Document SDKs into Python using Python.NET. It covers prerequisites, project structure, environment setup, dependency installation, .NET assembly publishing, Python.NET configuration, code implementation, execution, troubleshooting, and expected output. The pattern applies to all Syncfusion Document SDKs (DocIO, PDF, XlsIO, Presentation).

## How the integration works

Python.NET loads the published .NET assembly (`WordBridge.dll`) and its runtime configuration into the Python process. Python can then call static C# methods (e.g., `DocumentCreator.CreateDocx`) as if they were native Python functions. All document generation and conversion happens in-process, with .NET exceptions surfaced as Python exceptions.

## Prerequisites

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later) — required to build the .NET assembly
* **Python 3.9 or later** (CPython)
* [`pythonnet>=3.1.0`](https://pypi.org/project/pythonnet/) (see `requirements.txt`)
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available; use `--trial` to evaluate without a key)
* **Supported platforms:** Windows 10/11 x64, macOS Apple Silicon, Linux Ubuntu x64

## Environment setup

Step 1: Verify the .NET SDK is installed and on `PATH`.

{% tabs %}
{% highlight bash %}

dotnet --version

{% endhighlight %}
{% endtabs %}

Step 2: Verify Python is installed and on `PATH`.

{% tabs %}
{% highlight bash %}

python --version

{% endhighlight %}
{% endtabs %}

Step 3: Create and activate a Python virtual environment, then install dependencies.

{% tabs %}
{% highlight bash %}

python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/macOS
pip install -r requirements.txt

{% endhighlight %}
{% endtabs %}

## Dependency installation & .NET assembly publishing

Step 1: Restore the .NET packages defined in `WordBridge.csproj`.

{% tabs %}
{% highlight bash %}

dotnet restore WordBridge/WordBridge.csproj

{% endhighlight %}
{% endtabs %}

Step 2: Publish the .NET assembly. Use the Runtime Identifier (RID) that matches your platform. Replace `win-x64` with `osx-arm64` or `linux-x64` as needed. Output goes to `artifacts/`.

{% tabs %}
{% highlight bash tabtitle="Windows x64" %}

dotnet publish WordBridge/WordBridge.csproj -c Release -r win-x64 --self-contained false -o artifacts

{% endhighlight %}
{% highlight bash tabtitle="macOS Apple Silicon" %}

dotnet publish WordBridge/WordBridge.csproj -c Release -r osx-arm64 --self-contained false -o artifacts

{% endhighlight %}
{% highlight bash tabtitle="Linux x64" %}

dotnet publish WordBridge/WordBridge.csproj -c Release -r linux-x64 --self-contained false -o artifacts

{% endhighlight %}
{% endtabs %}

Step 3: Confirm the `artifacts/` folder contains:

```text
artifacts/
├── WordBridge.dll
├── WordBridge.runtimeconfig.json
└── WordBridge.deps.json
```

## .NET assembly configuration

The worker project (`WordBridge.csproj`) declares the Syncfusion Document SDK packages and the native rendering assets required on Linux hosts. It is a **class library** (not an executable), loaded in-process by Python.NET.

{% tabs %}
{% highlight xml tabtitle="WordBridge.csproj" %}

<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <GenerateRuntimeConfigurationFiles>true</GenerateRuntimeConfigurationFiles>
    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Syncfusion.DocIORenderer.Net.Core" Version="34.2.5" />
    <PackageReference Include="SkiaSharp.NativeAssets.Linux" Version="3.119.1" />
    <PackageReference Include="HarfBuzzSharp.NativeAssets.Linux" Version="8.3.1.2" />
  </ItemGroup>
</Project>

{% endhighlight %}
{% endtabs %}

## Code implementation

### The .NET class library — document logic

`DocumentCreator.cs` exposes static methods for document creation and conversion. These are called directly from Python via Python.NET.

{% tabs %}
{% highlight c# tabtitle="DocumentCreator.cs" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Licensing;

namespace DocumentInterop;

public static class DocumentCreator
{
    public static void CreateDocx(string text, string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
        using var document = CreateDocument(text);
        using var output = OpenOutput(outputPath);
        document.Save(output, FormatType.Docx);
    }

    public static void CreatePdf(string text, string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
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

    private static FileStream OpenOutput(string outputPath)
    {
        string path = Path.GetFullPath(outputPath);
        Directory.CreateDirectory(Path.GetDirectoryName(path)!);
        return new FileStream(path, FileMode.Create, FileAccess.Write);
    }

    private static void ConfigureLicense(bool allowTrial)
    {
        string? key = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
        if (!string.IsNullOrWhiteSpace(key))
        {
            SyncfusionLicenseProvider.RegisterLicense(key);
        }
        else if (!allowTrial)
        {
            throw new InvalidOperationException(
                "Set SYNCFUSION_LICENSE_KEY or pass allowTrial=true to evaluate without a license.");
        }
    }
}

{% endhighlight %}
{% endtabs %}

### The Python client — Python.NET bridge

`document_sdk.py` loads the published .NET assembly and runtime config, initializes CoreCLR, and calls the C# methods directly.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

import argparse
from pathlib import Path
import sys

def _load_clr_bridge(bundle: Path) -> type:
    dll = bundle / "WordBridge.dll"
    config = bundle / "WordBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(
            f"Publish WordBridge into '{bundle}' first (see README.md)."
        )
    from pythonnet import load
    load("coreclr", runtime_config=str(config))
    sys.path.insert(0, str(bundle))
    import clr
    clr.AddReference(str(dll))
    from DocumentInterop import DocumentCreator
    return DocumentCreator

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--format", choices=["docx", "pdf"], default="docx")
    parser.add_argument("--output", type=Path)
    parser.add_argument("--text", default="Hello from Python and Syncfusion DocIO (Python.NET)!")
    parser.add_argument("--trial", action="store_true", help="Evaluate without a license key.")
    parser.add_argument("--bundle", type=Path, help="Folder containing the published WordBridge.")
    args = parser.parse_args()

    folder = Path(__file__).resolve().parent
    bundle = (args.bundle or folder / "artifacts").resolve()
    output = (args.output or folder / "output" / f"Sample.{args.format}").resolve()
    if output.suffix.lower() != f".{args.format}":
        parser.error("The output extension must match --format.")

    creator = _load_clr_bridge(bundle)
    if args.format == "docx":
        creator.CreateDocx(args.text, str(output), args.trial)
    else:
        creator.CreatePdf(args.text, str(output), args.trial)
    print("Saved:", output)

if __name__ == "__main__":
    main()

{% endhighlight %}
{% endtabs %}

## Execution steps

Step 1: From the `pythonnet-wrapper/` folder, restore and publish the .NET assembly (see [Dependency installation](#dependency-installation)). Confirm `artifacts/WordBridge.dll` exists.

Step 2: Create and activate a Python virtual environment, then install dependencies.

{% tabs %}
{% highlight bash %}

python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/macOS
pip install -r requirements.txt

{% endhighlight %}
{% endtabs %}

Step 3: Generate a Word document. By default the output lands in `output/Sample.docx`.

{% tabs %}
{% highlight bash %}

python document_sdk.py --format docx --trial

{% endhighlight %}
{% endtabs %}

Step 4: Generate a PDF directly (no intermediate DOCX file is written to disk).

{% tabs %}
{% highlight bash %}

python document_sdk.py --format pdf --trial

{% endhighlight %}
{% endtabs %}

Step 5: Customize the body text and the output path. The extension must match `--format`.

{% tabs %}
{% highlight bash %}

python document_sdk.py --format pdf --text "Quarterly Sales Report - Q1" --output output/Report.pdf --trial

{% endhighlight %}
{% endtabs %}

Step 6: Run as a licensed user (no `--trial` flag). Set the environment variable first — see [Environment setup](#environment-setup).

{% tabs %}
{% highlight bash %}

python document_sdk.py --format docx

{% endhighlight %}
{% endtabs %}

## Expected output

A successful run prints the absolute path of the generated file and writes it to the `output/` folder.

```text
Saved: /repo/pythonnet-wrapper/output/Sample.docx
```

* `--format docx` produces `output/Sample.docx`.
* `--format pdf` produces `output/Sample.pdf`.

Open `Sample.docx` in Microsoft Word or any compatible editor; open `Sample.pdf` in any PDF reader. When running in trial mode (`--trial`), an **evaluation watermark** may appear at the top of the document. Register a license key to remove it.

## GitHub sample

A complete working sample demonstrating Syncfusion .NET Document SDK integration with Python using Python.NET is available on GitHub. For more details, see the [GitHub sample](https://github.com/SyncfusionExamples/python-syncfusion-document-sdk-samples).

## Extending the Integration to Other Syncfusion Document Libraries

To use a different Syncfusion document library, swap the package reference in `WordBridge.csproj` and add the corresponding build logic to `DocumentCreator.cs`:

| Use case | Package | Build API |
|---|---|---|
| Word (.docx) | `Syncfusion.DocIO.Net.Core` | `WordDocument`, `FormatType.Docx` |
| Word → PDF | `Syncfusion.DocIORenderer.Net.Core` | `DocIORenderer.ConvertToPDF` |
| PDF create/edit | `Syncfusion.Pdf.Net.Core` | `PdfDocument`, `PdfPage` |
| Excel (.xlsx) | `Syncfusion.XlsIO.Net.Core` | `ExcelEngine`, `IWorkbook` |
| PowerPoint (.pptx) | `Syncfusion.Presentation.Net.Core` | `IPresentation` |

Only the Python bridge and the C# document logic need to change — keep the request contract and method signatures consistent for easy swapping.

## Troubleshooting

### The .NET assembly or config cannot be found

```
FileNotFoundError: Publish WordBridge into 'artifacts' first (see README.md).
```

Publish the .NET assembly before running Python. If you publish to a custom folder, pass it with `--bundle`.

### `pythonnet` is not installed or fails to load CoreCLR

```
ModuleNotFoundError: No module named 'pythonnet'
```

Install pythonnet with `pip install -r requirements.txt`. If you see errors about CoreCLR, ensure the .NET runtime is installed and the correct `runtimeconfig.json` is present.

### License error when not using `--trial`

```
InvalidOperationException: Set SYNCFUSION_LICENSE_KEY or pass allowTrial=true...
```

Either export `SYNCFUSION_LICENSE_KEY` in the environment or add `--trial` to the Python command. The .NET code reads the variable itself; do **not** put the key on the command line.

### Output extension does not match `--format`

```
error: The output extension must match --format.
```

Pass `--output output/Report.pdf` together with `--format pdf` (and `.docx` with `docx`).

### Evaluation watermark appears in the output

The document renders correctly but shows a red Syncfusion watermark. Register a valid license key via `SYNCFUSION_LICENSE_KEY` and drop `--trial` to remove it.

### Encoding issues with non-ASCII text

Python.NET and the .NET SDK both support UTF-8. If you see `?` characters, ensure your shell and Python environment use UTF-8 encoding.

### Native asset or font errors on Linux

Install the standard font and graphics packages on the host:

{% tabs %}
{% highlight bash %}

sudo apt-get install -y libfontconfig1 libfreetype6 fonts-liberation

{% endhighlight %}
{% endtabs %}
