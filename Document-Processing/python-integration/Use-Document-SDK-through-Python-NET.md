---
title: Use Syncfusion .NET Libraries in Python via Python.NET | Syncfusion
description: Integrate Syncfusion .NET Document SDKs with Python using Python.NET to create, edit, convert, and process Word, PDF, Excel, and PowerPoint files.
platform: document-processing
control: Document SDK
Keywords: pythonnet, python syncfusion, .net document sdk, word to pdf python, python clr, syncfusion docio, syncfusion pdf, pythonnet wrapper
---

# Integrate Syncfusion .NET Document SDK into Python with Python.NET

The [Syncfusion .NET Document SDK](https://www.syncfusion.com/document-sdk) enables you to create, read, edit, and convert Word (`.docx`), PDF, Excel (`.xlsx`), and PowerPoint (`.pptx`) documents programmatically. With [Python.NET (pythonnet)](https://pythonnet.github.io/), you can load and call .NET assemblies directly from Python, enabling **in-process** document generation and conversion without launching a separate worker process.

This guide provides a step-by-step workflow for integrating Syncfusion Document SDKs into Python using Python.NET. It covers prerequisites, project structure, environment setup, dependency installation, .NET assembly publishing, Python.NET configuration, code implementation, execution, troubleshooting, and expected output. The sample covers Word creation and Word→PDF rendering, Excel→PDF and PowerPoint→PDF conversion, and PDF watermarking using the DocIO, XlsIO, Presentation, and PDF libraries.

## Choose the right integration pattern

Use this approach when you want to call .NET assemblies directly from Python in the same process. It is best suited for low-latency document generation and direct method calls from Python without a separate executable.

| Approach | Best for | Required Python dependency | Trade-off |
|---|---|---|---|
| Python.NET (this guide) | In-process calls, lower latency, direct method invocation | `pythonnet>=3.1.0` | Requires Python.NET and a compatible runtime |
| Local .NET worker | Isolated execution, batch jobs, CLI tools, strict Python environments | Standard library only (`subprocess`) | Adds a process boundary and JSON payload handling |

This sample follows the Python.NET pattern because it avoids a separate worker and calls the compiled .NET assembly directly from Python.

## License and trial mode

By default every operation runs in Syncfusion's **trial mode** — no license is required, and the produced documents carry a Syncfusion evaluation watermark. This is the supported way to evaluate the SDK without a purchased license.

For licensed production use, set the `SYNCFUSION_LICENSE_KEY` environment variable in the Python process before importing this module (Python.NET forwards process environment variables to the embedded CoreCLR). The .NET code reads the variable directly and registers it via `SyncfusionLicenseProvider.RegisterLicense(key)`; Python callers do not need to change.

```bash
# Windows PowerShell
$env:SYNCFUSION_LICENSE_KEY="YOUR_KEY_HERE"
python document_sdk.py create-docx

# Linux/macOS
export SYNCFUSION_LICENSE_KEY="YOUR_KEY_HERE"
python document_sdk.py create-docx
```

The key is never passed on the command line. When unset, every operation runs in Syncfusion's trial mode — register a key to remove the watermark.

## Project structure

A typical project layout for this approach is:

```text
pythonnet-wrapper/
├── DocumentBridge/
│   ├── DocumentBridge.csproj
│   └── DocumentCreator.cs
├── artifacts/
│   ├── DocumentBridge.dll
│   ├── DocumentBridge.runtimeconfig.json
│   └── DocumentBridge.deps.json
├── document_sdk.py
├── requirements.txt
├── NuGet.Config
├── samples/
│   ├── 01_hello_world.py
│   ├── 02_batch_invoices.py
│   ├── 03_custom_output_paths.py
│   ├── 04_excel_to_pdf.py
│   ├── 05_powerpoint_to_pdf.py
│   └── 06_watermark_pdf.py
├── output/
└── .venv/
```

## How the integration works

Python.NET loads the published .NET assembly (`DocumentBridge.dll`) and its runtime configuration into the Python process, bootstrapping CoreCLR in-process. Python can then call static C# methods (e.g., `DocumentCreator.CreateDocx`, `DocumentCreator.ExcelToPdf`) as if they were native Python functions. `document_sdk.py` wraps these calls in a `DocumentService` class whose shape mirrors the local .NET worker sample, so the same caller code works with either approach. All document generation and conversion happens in-process, with .NET exceptions surfaced as Python exceptions.

## Prerequisites

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later) — required to build the .NET assembly
* **Python 3.9 or later** (CPython)
* [`pythonnet>=3.1.0`](https://pypi.org/project/pythonnet/) (see `requirements.txt`)
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) to remove the evaluation watermark (a free 30-day trial is available; the worker runs in trial mode by default if the key is absent)
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

Step 1: Restore the .NET packages defined in `DocumentBridge.csproj`.

{% tabs %}
{% highlight bash %}

dotnet restore DocumentBridge/DocumentBridge.csproj

{% endhighlight %}
{% endtabs %}

Step 2: Publish the .NET assembly. Use the Runtime Identifier (RID) that matches your platform. Replace `win-x64` with `osx-arm64`, `osx-x64`, or `linux-x64` as needed. Output goes to `artifacts/`.

{% tabs %}
{% highlight bash tabtitle="Windows x64" %}

dotnet publish DocumentBridge/DocumentBridge.csproj -c Release -r win-x64 --self-contained false -o artifacts

{% endhighlight %}
{% highlight bash tabtitle="macOS Apple Silicon" %}

dotnet publish DocumentBridge/DocumentBridge.csproj -c Release -r osx-arm64 --self-contained false -o artifacts

{% endhighlight %}
{% highlight bash tabtitle="Linux x64" %}

dotnet publish DocumentBridge/DocumentBridge.csproj -c Release -r linux-x64 --self-contained false -o artifacts

{% endhighlight %}
{% endtabs %}

Step 3: Confirm the `artifacts/` folder contains:

```text
artifacts/
├── DocumentBridge.dll
├── DocumentBridge.runtimeconfig.json
└── DocumentBridge.deps.json
```

## .NET assembly configuration

The bridge project lives at `DocumentBridge/DocumentBridge.csproj`. It is a small .NET 8 **class library** with the following responsibilities:

* Targets `net8.0` and `<OutputType>Library</OutputType>`.
* Sets `<UseAppHost>false</UseAppHost>` to prevent `dotnet publish` from emitting a platform apphost executable alongside `DocumentBridge.dll` — the assembly is loaded in-process by Python.NET, never run as a standalone executable.
* Pins the assembly name to `DocumentBridge` so the published `artifacts/` folder contains `DocumentBridge.dll` and `DocumentBridge.runtimeconfig.json`.
* Declares the Syncfusion Document SDK NuGet packages and the native Linux rendering assets.

### Reference packages

| Package | Purpose |
|---|---|
| `Syncfusion.DocIORenderer.Net.Core` | Word generation (`.docx`) and Word → PDF rendering. |
| `Syncfusion.XlsIORenderer.Net.Core` | Excel → PDF conversion. |
| `Syncfusion.PresentationRenderer.Net.Core` | PowerPoint → PDF conversion. |
| `Syncfusion.Pdf.Net.Core` | PDF loading and graphics (used by the watermark operation). |
| `SkiaSharp.NativeAssets.Linux` | Native rendering assets required on Linux hosts. Harmless on Windows/macOS. |
| `HarfBuzzSharp.NativeAssets.Linux` | Text shaping assets required on Linux hosts. Harmless on Windows/macOS. |

For the full source of `DocumentBridge.csproj`, see [`pythonnet-wrapper/DocumentBridge/DocumentBridge.csproj`](https://github.com/SyncfusionExamples/python-syncfusion-document-sdk-samples/blob/master/pythonnet-wrapper/DocumentBridge/DocumentBridge.csproj) in the companion GitHub sample.

## Code implementation

### The .NET class library — document logic

`DocumentCreator.cs` exposes static methods for document creation, conversion, and PDF watermarking. These are called directly from Python via Python.NET.

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
// SizeF/RectangleF/PdfFont etc. live in Syncfusion.Drawing and are used by
// PdfGraphics. Importing it resolves `RectangleF` in the watermark code below.
using Syncfusion.Drawing;

namespace DocumentInterop;

/// <summary>
/// Exposed to Python via Python.NET (pythonnet). The methods are static and
/// can be invoked directly from Python:
///     from DocumentInterop import DocumentCreator
///     DocumentCreator.CreateDocx(text, path)
///     DocumentCreator.ExcelToPdf(input, output)
///     DocumentCreator.PowerPointToPdf(input, output)
///     DocumentCreator.WatermarkPdf(input, output, label)
///
/// License registration is driven entirely by the ``SYNCFUSION_LICENSE_KEY``
/// environment variable; when unset, every operation runs in Syncfusion's
/// trial mode (evaluation watermarks may be added to the output).
/// </summary>
public static class DocumentCreator
{
    // ---- Word: build from a string ----------------------------------------------------

    // Build a new Word document and save it directly as DOCX.
    public static void CreateDocx(string text, string outputPath)
    {
        ConfigureLicense();
        using var document = CreateDocument(text);
        using var output = OpenOutput(outputPath);
        document.Save(output, Syncfusion.DocIO.FormatType.Docx);
    }

    // Build a new Word document and render it straight to PDF via DocIORenderer.
    public static void CreatePdf(string text, string outputPath)
    {
        ConfigureLicense();
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
        ConfigureLicense();
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
        ConfigureLicense();
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
        ConfigureLicense();
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
        ConfigureLicense();
        using var engine = new ExcelEngine();
        engine.Excel.DefaultVersion = ExcelVersion.Xlsx;
        var book = engine.Excel.Workbooks.Create();
        try
        {
            var sheet = book.Worksheets[0];
            sheet.Range["A1"].Text = "Sample workbook";
            sheet.Range["A1"].CellStyle.Font.Bold = true;
            sheet.Range["A3"].Text = "Hello from the local .NET worker!";
            using var output = OpenOutput(outputPath);
            book.SaveAs(output);
        }
        finally { book.Close(); }
    }

    // Build a tiny PPTX with a single slide. Lets the samples run end-to-end without
    // shipping a binary fixture in the repository.
    public static void CreateSamplePptx(string outputPath)
    {
        ConfigureLicense();
        var deck = Presentation.Create();
        var slide = deck.Slides.Add(SlideLayoutType.Blank);
        var shape = slide.Shapes.AddTextBox(40, 40, 600, 80);
        var paragraph = shape.TextBody.AddParagraph("Hello from the local .NET worker!");
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
        return new FileStream(path, FileMode.Create, FileAccess.Write);
    }

    // License registration is process-global. Cache the result so high-volume
    // callers (e.g. batch conversions) don't re-read the env variable and
    // re-register on every operation. The cache flag is only set once a key
    // has actually been registered successfully; if no key is configured, the
    // worker stays in trial mode and we keep the flag false so a key added
    // later (e.g. via the process environment) can still take effect.
    private static bool s_licenseRegistered;

    private static void ConfigureLicense()
    {
        if (s_licenseRegistered) return;
        string? key = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
        if (string.IsNullOrWhiteSpace(key))
        {
            // No key: continue in trial mode. Syncfusion will add evaluation
            // watermarks to the output documents. Leave s_licenseRegistered
            // false so a key set later can still be picked up.
            return;
        }
        SyncfusionLicenseProvider.RegisterLicense(key);
        s_licenseRegistered = true;
    }
}

{% endhighlight %}
{% endtabs %}

### The Python client — Python.NET bridge

`document_sdk.py` loads the published .NET assembly and runtime config, initializes CoreCLR, and exposes a `DocumentService` class (plus a `load_service()` convenience function and a CLI) that dispatches to the C# methods.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

"""Create Word, Excel, and PowerPoint documents and convert them to PDF using
Python.NET (pythonnet).

This module uses Python.NET to host CoreCLR inside the Python process and load
the published DocumentBridge.dll directly. Python can then call DocumentCreator's
C# static methods natively without spawning separate processes.

The public API mirrors the local .NET worker sample (``DocumentService``) so
that the same caller code can be used with either approach.

By default every operation runs in Syncfusion's **trial mode** (no license
required). To use a real license, set the ``SYNCFUSION_LICENSE_KEY`` environment
variable before importing this module; the C# worker picks it up automatically.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path


def _load_clr_bridge(bundle: Path) -> type:
    """Initialize CoreCLR with DocumentBridge's runtime configuration, then import DocumentCreator.

    Raises ``FileNotFoundError`` if the worker has not been published yet, and
    re-raises ``ModuleNotFoundError`` if ``pythonnet`` is not installed in the
    active environment.
    """
    bundle = Path(bundle).resolve()
    dll = bundle / "DocumentBridge.dll"
    config = bundle / "DocumentBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(
            f"Publish DocumentBridge into '{bundle}' first (see README.md)."
        )

    # CoreCLR MUST be configured before importing `clr`.
    from pythonnet import load
    load("coreclr", runtime_config=str(config))

    # Add the assembly folder to sys.path so Python.NET's assembly resolver finds dependencies.
    sys.path.insert(0, str(bundle))
    import clr  # noqa: E402
    clr.AddReference(str(dll))

    from DocumentInterop import DocumentCreator  # type: ignore  # noqa: E402
    return DocumentCreator


class DocumentService:
    """Thin client that hosts CoreCLR once and dispatches calls to DocumentCreator.

    The shape of this class deliberately matches ``local-dotnet-worker.DocumentService``
    so callers can swap between the two approaches without changing their code.
    """

    def __init__(self, creator: type):
        self._creator = creator

    # ---- Word: build from a string -------------------------------------------------

    def create_docx(self, text: str, output: Path) -> None:
        """Create a new Word document and save it as DOCX."""
        self._creator.CreateDocx(str(text), str(output))

    def create_pdf(self, text: str, output: Path) -> None:
        """Create a new Word document in memory and render it directly to PDF."""
        self._creator.CreatePdf(str(text), str(output))

    # ---- Excel / PowerPoint: convert an existing file to PDF -----------------------

    def excel_to_pdf(self, source: Path, output: Path) -> None:
        """Convert an XLSX workbook to PDF using its own print settings."""
        self._creator.ExcelToPdf(str(source), str(output))

    def powerpoint_to_pdf(self, source: Path, output: Path) -> None:
        """Convert a PPTX presentation to PDF via Syncfusion's presentation renderer."""
        self._creator.PowerPointToPdf(str(source), str(output))

    # ---- PDF: overlay a diagonal text watermark on every page ----------------------

    def watermark_pdf(self, source: Path, output: Path, label: str) -> None:
        """Draw a translucent diagonal label on every page of an existing PDF."""
        self._creator.WatermarkPdf(str(source), str(output), str(label))

    # ---- Sample input helpers -------------------------------------------------------

    def create_sample_xlsx(self, output: Path) -> None:
        """Build a tiny XLSX so the samples run end-to-end without a binary fixture."""
        self._creator.CreateSampleXlsx(str(output))

    def create_sample_pptx(self, output: Path) -> None:
        """Build a tiny PPTX so the samples run end-to-end without a binary fixture."""
        self._creator.CreateSamplePptx(str(output))


def load_service(bundle: Path | None = None) -> DocumentService:
    """Load DocumentBridge into the current Python process and return a ready client.

    The first call initializes CoreCLR. A second call with a different
    ``runtime_config`` is not supported by Python.NET — restart the process.
    """
    bundle = Path(bundle or Path(__file__).parent / "artifacts").resolve()
    creator = _load_clr_bridge(bundle)
    return DocumentService(creator)


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

To use the module from your own Python code, call `load_service()` and dispatch to any method:

```python
from pathlib import Path
import document_sdk

service = document_sdk.load_service()
service.create_docx("Hello from Python.NET and DocIO!", Path("output/Hello.docx"))
service.create_pdf("Quarterly Sales Report", Path("output/Report.pdf"))
```

## Execution steps

Step 1: From the `pythonnet-wrapper/` folder, restore and publish the .NET assembly (see [Dependency installation](#dependency-installation--net-assembly-publishing)). Confirm `artifacts/DocumentBridge.dll` exists.

Step 2: Create and activate a Python virtual environment, then install dependencies.

{% tabs %}
{% highlight bash %}

python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/macOS
pip install -r requirements.txt

{% endhighlight %}
{% endtabs %}

Step 3: Create a Word document, or create a PDF directly (no intermediate DOCX file is written to disk). By default the output lands in `output/Sample.docx` / `output/Sample.pdf`.

{% tabs %}
{% highlight bash %}

python document_sdk.py create-docx
python document_sdk.py create-pdf

{% endhighlight %}
{% endtabs %}

> Both commands run in Syncfusion's trial mode by default. No flag or argument is required to evaluate the SDK — an evaluation watermark will appear in the output until you export `SYNCFUSION_LICENSE_KEY`.

Step 4: Convert an existing Excel workbook or PowerPoint presentation to PDF. `--input` is required for conversion operations.

{% tabs %}
{% highlight bash %}

python document_sdk.py excel-to-pdf      --input documents/input.xlsx --output output/workbook.pdf
python document_sdk.py powerpoint-to-pdf --input documents/input.pptx --output output/slides.pdf

{% endhighlight %}
{% endtabs %}

Step 5: Watermark an existing PDF with a translucent diagonal label.

{% tabs %}
{% highlight bash %}

python document_sdk.py watermark-pdf --input output/workbook.pdf --output output/watermarked.pdf --label CONFIDENTIAL

{% endhighlight %}
{% endtabs %}

Step 6: Customize the body text and the output path. The extension must match the operation's output format.

{% tabs %}
{% highlight bash %}

python document_sdk.py create-pdf --text "Quarterly Sales Report - Q1" --output output/Report.pdf

{% endhighlight %}
{% endtabs %}

Step 7: Run as a licensed user. Set `SYNCFUSION_LICENSE_KEY` first — see [License and trial mode](#license-and-trial-mode).

{% tabs %}
{% highlight bash %}

python document_sdk.py create-docx

{% endhighlight %}
{% endtabs %}

## Running the sample scripts

The repository also ships runnable sample scripts in `pythonnet-wrapper/samples/` that build on `document_sdk.load_service()`:

| Sample | What it does |
|---|---|
| `01_hello_world.py` | Minimal end-to-end call: produce one DOCX and one PDF. |
| `02_batch_invoices.py` | Loop over a list of records and emit a DOCX per record. |
| `03_custom_output_paths.py` | Use a custom output directory and a non-default bundle. |
| `04_excel_to_pdf.py` | Convert an XLSX workbook to PDF (auto-generates a sample workbook if needed). |
| `05_powerpoint_to_pdf.py` | Convert a PPTX presentation to PDF (auto-generates a sample deck if needed). |
| `06_watermark_pdf.py` | Overlay a diagonal text watermark on every page of an existing PDF. |

Run the modules from the approach's root folder using a Python environment where pythonnet is installed:

{% tabs %}
{% highlight bash %}

cd pythonnet-wrapper
python -m samples.01_hello_world

{% endhighlight %}
{% endtabs %}

> Run samples as modules (`python -m samples.XX`) so the parent folder containing `document_sdk.py` is on `sys.path`. A bare `python samples/XX.py` would fail with `ModuleNotFoundError: No module named 'document_sdk'`.

## Expected output

A successful run prints the absolute path of the generated file and writes it to the `output/` folder.

```text
Saved: /repo/pythonnet-wrapper/output/Sample.docx
```

* `create-docx` produces `output/Sample.docx`.
* `create-pdf` produces `output/Sample.pdf`.
* `excel-to-pdf` / `powerpoint-to-pdf` / `watermark-pdf` produce the PDF you pass via `--output`.

Open `Sample.docx` in Microsoft Word or any compatible editor; open `Sample.pdf` in any PDF reader. When running without `SYNCFUSION_LICENSE_KEY`, the worker falls back to Syncfusion's trial mode and the generated document carries an **evaluation watermark** at the top. Register a license key to remove it.

## GitHub sample

A complete working sample demonstrating Syncfusion .NET Document SDK integration with Python using Python.NET is available on GitHub. For more details, see the [GitHub sample](https://github.com/SyncfusionExamples/python-syncfusion-document-sdk-samples).

## Extending the Integration to Other Syncfusion Document Libraries

To use a different Syncfusion document library, swap the package reference in `DocumentBridge.csproj` and add the corresponding build logic to `DocumentCreator.cs` (this sample already references DocIO, XlsIO, Presentation, and PDF together):

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
FileNotFoundError: Publish DocumentBridge into 'artifacts' first (see README.md).
```

Publish the .NET assembly before running Python. If you publish to a custom folder, pass it with `--bundle`.

### `pythonnet` is not installed or fails to load CoreCLR

```
ModuleNotFoundError: No module named 'pythonnet'
```

Install pythonnet with `pip install -r requirements.txt`.

### Samples fail with `ModuleNotFoundError: No module named 'document_sdk'`

Run the sample scripts as modules from the approach's root folder, not as bare files:

```bash
cd pythonnet-wrapper
python -m samples.01_hello_world
```

Also ensure that the Python virtual environment where `pythonnet` is installed is activated.

### Evaluation watermark appears in the output

The document renders correctly but shows a red Syncfusion watermark. Register a valid license key via `SYNCFUSION_LICENSE_KEY` (export it before importing `document_sdk`) and re-run to remove it. Because CoreCLR is only initialized once per process, restart the Python process after exporting the variable.

### Output extension does not match the operation

```
error: --output must have extension .pdf.
```

Each subcommand expects a fixed output extension, e.g. pass `--output output/Report.pdf` with `create-pdf` (`.docx` with `create-docx`). Conversion operations also validate `--input` (`.xlsx` for `excel-to-pdf`, `.pptx` for `powerpoint-to-pdf`, `.pdf` for `watermark-pdf`).

### Encoding issues with non-ASCII text

Python.NET and the .NET SDK both support UTF-8. If you see `?` characters, ensure your shell and Python environment use UTF-8 encoding.

### Native asset or font errors on Linux

Install the standard font and graphics packages on the host:

{% tabs %}
{% highlight bash %}

sudo apt-get install -y libfontconfig1 libfreetype6 fonts-liberation

{% endhighlight %}
{% endtabs %}
