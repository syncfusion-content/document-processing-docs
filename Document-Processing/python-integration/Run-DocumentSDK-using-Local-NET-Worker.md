---
title: Use Syncfusion .NET Libraries in Python via Local Worker | Syncfusion
description: Learn how to generate Word and PDF documents from Python using Syncfusion Document SDK through a local worker, without Microsoft Office or pip packages.
platform: document-processing
control: Document SDK
documentation: UG
Keywords: python generate word, python generate pdf, local dotnet worker, syncfusion python integration, docio python, pdf renderer python, subprocess dotnet
---

# Use Syncfusion .NET Document SDK in Python via Local Worker

The [Syncfusion .NET Document SDK](https://www.syncfusion.com/document-sdk) lets you create, read, edit, and convert Word (`.docx`), PDF, Excel (`.xlsx`), and PowerPoint (`.pptx`) documents programmatically without Microsoft Office or Adobe Acrobat. Because the libraries are written in .NET, Python applications communicate with them through a small out-of-process **local worker** — a console assembly built from the SDK that Python launches with the built-in `subprocess` module. No pip packages, Python.NET, or a web server are required.

This guide walks through the full workflow: prerequisites, project structure, environment setup, dependency installation, worker configuration, code implementation, execution, troubleshooting, and expected output. The sample covers Word creation and Word→PDF rendering, Excel→PDF and PowerPoint→PDF conversion, and PDF watermarking using the DocIO, XlsIO, Presentation, and PDF libraries. The same pattern applies to every Syncfusion Document SDK project — DocIO (Word), PDF, XlsIO (Excel), and Presentation (PowerPoint).

## Choose the right integration pattern

Use the local .NET worker when you want an isolated execution model without installing `pythonnet` and without loading the CLR directly inside Python. This approach is a good fit for CLI tools, batch generation, and controlled Python environments.

| Approach | Best for | Required Python dependency | Trade-off |
|---|---|---|---|
| Local .NET worker (this guide) | CLI tools, batch jobs, isolated execution, minimal Python dependency surface | Standard library only (`subprocess`) | Adds a small process boundary and JSON serialization |
| Python.NET wrapper | Lower-latency in-process calls and direct .NET method invocation | `pythonnet>=3.1.0` | Requires Python.NET and a compatible runtime |

This specific sample uses a local worker to keep the Python side simple and avoid direct CLR hosting inside the script.

## License and trial mode

The CLI flag `--trial` is the same idea as the .NET parameter `allowTrial=true`. It enables Syncfusion evaluation mode when no valid license key is set. It is not a bypass; it is the supported way to evaluate the SDK without a purchased license.

For licensed production use, set the `SYNCFUSION_LICENSE_KEY` environment variable and run without `--trial`.

```bash
# Windows PowerShell
$env:SYNCFUSION_LICENSE_KEY="YOUR_KEY_HERE"
python document_sdk.py create-docx

# Linux/macOS
export SYNCFUSION_LICENSE_KEY="YOUR_KEY_HERE"
python document_sdk.py create-docx
```

The .NET worker reads the variable itself and registers the key via `SyncfusionLicenseProvider.RegisterLicense(key)`. Do not put the license key in the command line arguments.

## Project structure

A typical layout for this approach is:

```text
local-dotnet-worker/
├── DocumentBridge/
│   ├── DocumentBridge.csproj
│   ├── Program.cs
│   └── DocumentCreator.cs
├── artifacts/
│   ├── DocumentBridge.dll
│   ├── DocumentBridge.runtimeconfig.json
│   └── DocumentBridge.deps.json
├── document_sdk.py
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

Python serializes a JSON request to the worker's standard input, the worker dispatches the requested operation (`create-docx`, `excel-to-pdf`, `watermark-pdf`, ...) to the corresponding Syncfusion document method, writes the file to disk, and returns an exit code. Errors are reported on the standard error stream. The worker process exits after each call, so there is no long-running server to manage. Each operation runs in a fresh `dotnet` subprocess with a default per-operation timeout of 300 seconds (override with `--timeout`).

## Prerequisites

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later) — required to build the worker
* **Python 3.9 or later** (standard CPython; `python --version` should report 3.9+)
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

## Install Dependencies

Step 1: Restore the .NET packages defined in `DocumentBridge.csproj`. The Syncfusion packages and the native Linux rendering assets are pulled from `nuget.org` via the pinned `NuGet.Config`.

{% tabs %}
{% highlight bash %}

dotnet restore DocumentBridge/DocumentBridge.csproj

{% endhighlight %}
{% endtabs %}

Step 2: Publish the Worker

{% tabs %}
{% highlight bash tabtitle="Windows x64" %}

dotnet publish DocumentBridge/DocumentBridge.csproj -c Release -r win-x64 --self-contained false -o artifacts

{% endhighlight %}

{% highlight bash tabtitle="Linux x64" %}

dotnet publish DocumentBridge/DocumentBridge.csproj -c Release -r linux-x64 --self-contained false -o artifacts

{% endhighlight %}

{% highlight bash tabtitle="macOS Apple Silicon" %}

dotnet publish DocumentBridge/DocumentBridge.csproj -c Release -r osx-arm64 --self-contained false -o artifacts

{% endhighlight %}
{% endtabs %}

Step 3: After publishing, the output folder should contain:

```text
artifacts/
├── DocumentBridge.dll
├── DocumentBridge.runtimeconfig.json
└── DocumentBridge.deps.json
```

## Local worker configuration

The worker project (`DocumentBridge.csproj`) declares the Syncfusion Document SDK packages and the native rendering assets required on Linux hosts. It is an **executable** run via `dotnet DocumentBridge.dll`; `UseAppHost=false` prevents the publish step from emitting a platform-specific apphost binary, and the assembly name matches the project folder so the artifacts are easy to locate.

{% tabs %}
{% highlight xml tabtitle="DocumentBridge.csproj" %}

<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <GenerateRuntimeConfigurationFiles>true</GenerateRuntimeConfigurationFiles>
    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    <OutputType>Exe</OutputType>
    <UseAppHost>false</UseAppHost>
    <!-- Force the assembly name to match the project folder so the published
         artifacts/ folder contains DocumentBridge.dll / .runtimeconfig.json. -->
    <AssemblyName>DocumentBridge</AssemblyName>
    <RootNamespace>DocumentInterop</RootNamespace>
  </PropertyGroup>
  <ItemGroup>
    <!-- DocIO + DocIORenderer: Word generation and Word -> PDF. -->
    <PackageReference Include="Syncfusion.DocIORenderer.Net.Core" Version="34.2.5" />
    <!-- XlsIO + XlsIORenderer: Excel -> PDF. -->
    <PackageReference Include="Syncfusion.XlsIORenderer.Net.Core" Version="34.2.5" />
    <!-- Presentation + PresentationRenderer: PowerPoint -> PDF. -->
    <PackageReference Include="Syncfusion.PresentationRenderer.Net.Core" Version="34.2.5" />
    <!-- PDF (loaded document, graphics): used by the WatermarkPdf operation. -->
    <PackageReference Include="Syncfusion.Pdf.Net.Core" Version="34.2.5" />
    <!-- Native rendering assets required on Linux hosts. Harmless to include on Windows/macOS. -->
    <PackageReference Include="SkiaSharp.NativeAssets.Linux" Version="3.119.1" />
    <PackageReference Include="HarfBuzzSharp.NativeAssets.Linux" Version="8.3.1.2" />
  </ItemGroup>
</Project>

{% endhighlight %}
{% endtabs %}

## Code implementation

### Program.cs

This file reads the request from Python and routes it to the appropriate document-generation method.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using System.Text;
using System.Text.Json;
using DocumentInterop;

// Reads a single JSON request from standard input, runs the requested Word/Excel/
// PowerPoint/PDF operation, and returns a nonzero exit code with an error message
// on stderr if anything fails. Python communicates with this worker purely through
// stdin/stdout/exit-code - no HTTP server, no shared memory.
try
{
    // Match the Python side, which encodes the request as UTF-8. Console.In
    // would otherwise default to the system code page (e.g. CP1252 on Windows)
    // and mangle any non-ASCII text passed via --text.
    using var stdin = new StreamReader(Console.OpenStandardInput(), Encoding.UTF8);
    string requestJson = stdin.ReadToEnd();
    var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
    var request = JsonSerializer.Deserialize<Request>(requestJson, options)
        ?? throw new ArgumentException("A JSON request is required.");
    if (string.IsNullOrWhiteSpace(request.Operation))
        throw new ArgumentException("Request is missing 'Operation'.");
    if (string.IsNullOrWhiteSpace(request.Output))
        throw new ArgumentException("Request is missing 'Output'.");

    switch (request.Operation)
    {
        // Word: build from a string.
        case "create-docx":
            RequireField(request.Text, "Text", "create-docx");
            DocumentCreator.CreateDocx(request.Text!, request.Output, request.AllowTrial);
            break;
        case "create-pdf":
            RequireField(request.Text, "Text", "create-pdf");
            DocumentCreator.CreatePdf(request.Text!, request.Output, request.AllowTrial);
            break;
        // Excel / PowerPoint: convert an existing file to PDF.
        case "excel-to-pdf":
            RequireField(request.Input, "Input", "excel-to-pdf");
            DocumentCreator.ExcelToPdf(request.Input!, request.Output, request.AllowTrial);
            break;
        case "powerpoint-to-pdf":
            RequireField(request.Input, "Input", "powerpoint-to-pdf");
            DocumentCreator.PowerPointToPdf(request.Input!, request.Output, request.AllowTrial);
            break;
        // PDF: overlay a diagonal text watermark on every page.
        case "watermark-pdf":
            RequireField(request.Input, "Input", "watermark-pdf");
            RequireField(request.Label, "Label", "watermark-pdf");
            DocumentCreator.WatermarkPdf(request.Input!, request.Output, request.Label!, request.AllowTrial);
            break;
        // Sample input helpers used by the Python sample scripts.
        case "create-sample-xlsx":
            DocumentCreator.CreateSampleXlsx(request.Output, request.AllowTrial);
            break;
        case "create-sample-pptx":
            DocumentCreator.CreateSamplePptx(request.Output, request.AllowTrial);
            break;
        default:
            throw new ArgumentException("Unknown operation: " + request.Operation);
    }

    return 0;
}
catch (Exception error)
{
    Console.Error.WriteLine($"{error.GetType().Name}: {error.Message}");
    Console.Error.WriteLine(error.StackTrace);
    return 1;
}

static void RequireField(string? value, string name, string operation)
{
    if (string.IsNullOrWhiteSpace(value))
        throw new ArgumentException($"Operation '{operation}' requires a non-empty '{name}' field.");
}

// Shape of the JSON payload sent by document_sdk.py over standard input.
// `Operation` selects the C# entry point. `Input` is required for file -> file
// operations; `Text` is required for create-* operations; `Label` is required
// for watermark-pdf.
internal sealed record Request(
    string Operation,
    string? Text,
    string? Input,
    string Output,
    string? Label,
    bool AllowTrial);

{% endhighlight %}
{% endtabs %}

### DocumentCreator.cs

This class creates Word documents and converts them to PDF using Syncfusion libraries.

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
    // ---- Word: build from a string ----------------------------------------------------

    // Build a new Word document and save it directly as DOCX.
    public static void CreateDocx(string text, string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
        using var document = CreateDocument(text);
        using var output = OpenOutput(outputPath);
        document.Save(output, Syncfusion.DocIO.FormatType.Docx);
    }

    // Build a new Word document and render it straight to PDF via DocIORenderer.
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

    // ---- Excel: convert an existing XLSX file to PDF ----------------------------------

    // Convert an XLSX workbook to PDF using its own print settings.
    public static void ExcelToPdf(string inputPath, string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
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
    public static void PowerPointToPdf(string inputPath, string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
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
    public static void WatermarkPdf(string inputPath, string outputPath, string label, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
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
    public static void CreateSampleXlsx(string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
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
    public static void CreateSamplePptx(string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
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
        // FileMode.Create overwrites an existing file at the same path.
        return new FileStream(path, FileMode.Create, FileAccess.Write);
    }

    // License registration is process-global and idempotent. Cache the result
    // so high-volume callers (e.g. batch conversions) don't re-read the env
    // variable and re-register on every operation.
    private static bool s_licenseRegistered;

    private static void ConfigureLicense(bool allowTrial)
    {
        if (s_licenseRegistered) return;
        s_licenseRegistered = true;
        string? key = Environment.GetEnvironmentVariable("SYNCFUSION_LICENSE_KEY");
        if (!string.IsNullOrWhiteSpace(key))
        {
            SyncfusionLicenseProvider.RegisterLicense(key);
        }
        else if (!allowTrial)
        {
            // Reset the flag so a subsequent retry with allowTrial=true still works.
            s_licenseRegistered = false;
            throw new InvalidOperationException(
                "Set SYNCFUSION_LICENSE_KEY or pass AllowTrial=true to evaluate without a license.");
        }
        // Running without a key (trial mode) may add Syncfusion evaluation watermarks to output.
    }
}

{% endhighlight %}
{% endtabs %}

### The Python client — subprocess bridge

The Python script invokes the worker using subprocess.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

"""Create Word, Excel, and PowerPoint documents and convert them to PDF using a
local .NET worker.

This module launches the published DocumentBridge.dll as a separate process via
Python's built-in `subprocess` module. No pip packages, Python.NET, or a web
server are required. Works with plain Python 3.9+ on any platform that has
the .NET 8 runtime installed.
"""
import argparse
import json
import shutil
import subprocess
from pathlib import Path


class DocumentService:
    """Thin client that starts the .NET worker once per operation."""

    def __init__(self, dll: Path, dotnet: str, timeout: int = 300):
        self._dll = dll
        self._dotnet = dotnet
        # Default is generous because large PPTX/XLSX -> PDF conversions can
        # easily exceed a minute. Callers can override per-instance.
        self._timeout = timeout

    def _call(self, operation: str, output: Path, *,
              text: str | None = None, input: Path | None = None,
              label: str | None = None, allow_trial: bool = True) -> None:
        request = {
            "Operation": operation,
            "Text": text,
            "Input": str(input.resolve()) if input is not None else None,
            "Output": str(output.resolve()),
            "Label": label,
            "AllowTrial": allow_trial,
        }
        # No shell=True: the request is passed as JSON data on stdin, never
        # interpreted as a command line, so paths/text cannot inject commands.
        try:
            result = subprocess.run(
                [self._dotnet, str(self._dll)],
                input=json.dumps(request),
                text=True,
                encoding="utf-8",
                capture_output=True,
                check=False,
                timeout=self._timeout,
            )
        except subprocess.TimeoutExpired as exc:
            raise RuntimeError(
                f"Worker timed out after {self._timeout}s on operation '{operation}'."
            ) from exc
        if result.returncode != 0:
            detail = result.stderr.strip() or f"Worker exited with code {result.returncode}"
            raise RuntimeError(detail)

    # ---- Word: build from a string ----------------------------------------------------

    def create_docx(self, text: str, output: Path, allow_trial: bool = True) -> None:
        """Create a new Word document and save it as DOCX."""
        self._call("create-docx", output, text=text, allow_trial=allow_trial)

    def create_pdf(self, text: str, output: Path, allow_trial: bool = True) -> None:
        """Create a new Word document in memory and render it directly to PDF."""
        self._call("create-pdf", output, text=text, allow_trial=allow_trial)

    # ---- Excel / PowerPoint: convert an existing file to PDF -------------------------

    def excel_to_pdf(self, source: Path, output: Path, allow_trial: bool = True) -> None:
        """Convert an XLSX workbook to PDF using its own print settings."""
        self._call("excel-to-pdf", output, input=source, allow_trial=allow_trial)

    def powerpoint_to_pdf(self, source: Path, output: Path, allow_trial: bool = True) -> None:
        """Convert a PPTX presentation to PDF via Syncfusion's presentation renderer."""
        self._call("powerpoint-to-pdf", output, input=source, allow_trial=allow_trial)

    # ---- PDF: overlay a diagonal text watermark on every page -------------------------

    def watermark_pdf(self, source: Path, output: Path, label: str, allow_trial: bool = True) -> None:
        """Draw a translucent diagonal label on every page of an existing PDF."""
        self._call("watermark-pdf", output, input=source, label=label, allow_trial=allow_trial)

    # ---- Sample input helpers --------------------------------------------------------

    def create_sample_xlsx(self, output: Path, allow_trial: bool = True) -> None:
        """Build a tiny XLSX so the samples run end-to-end without a binary fixture."""
        self._call("create-sample-xlsx", output, allow_trial=allow_trial)

    def create_sample_pptx(self, output: Path, allow_trial: bool = True) -> None:
        """Build a tiny PPTX so the samples run end-to-end without a binary fixture."""
        self._call("create-sample-pptx", output, allow_trial=allow_trial)


def load_service(bundle: Path | None = None) -> DocumentService:
    """Locate the published worker and the dotnet executable.

    The worker inherits SYNCFUSION_LICENSE_KEY from the current environment;
    the key is never passed as a command-line argument.
    """
    bundle = Path(bundle or Path(__file__).parent / "artifacts").resolve()
    dll = bundle / "DocumentBridge.dll"
    config = bundle / "DocumentBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(f"Publish DocumentBridge into {bundle} first (see README).")

    dotnet = shutil.which("dotnet")
    if dotnet is None:
        raise RuntimeError("Install the .NET 8 runtime/SDK and put dotnet on PATH.")

    return DocumentService(dll, dotnet)


# Each CLI subcommand maps to one DocumentService method. Tuple shape:
# (method-name, input-extension-or-None, output-extension, needs-label).
_OPERATIONS: dict[str, tuple[str, str | None, str, bool]] = {
    "create-docx":       ("create_docx",       None, ".docx", False),
    "create-pdf":        ("create_pdf",        None, ".pdf",  False),
    "excel-to-pdf":      ("excel_to_pdf",      ".xlsx", ".pdf", False),
    "powerpoint-to-pdf": ("powerpoint_to_pdf", ".pptx", ".pdf", False),
    "watermark-pdf":     ("watermark_pdf",     ".pdf",  ".pdf", True),
    "create-sample-xlsx":("create_sample_xlsx",None,   ".xlsx", False),
    "create-sample-pptx":("create_sample_pptx",None,   ".pptx", False),
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
    parser.add_argument("--trial", action="store_true", help="Evaluate without a license key.")
    parser.add_argument("--bundle", type=Path, help="Folder containing the published worker.")
    parser.add_argument("--timeout", type=int, default=300,
                        help="Per-operation subprocess timeout in seconds (default: 300).")
    args = parser.parse_args()

    method_name, input_ext, output_ext, needs_label = _OPERATIONS[args.operation]
    output = (args.output or Path(__file__).parent / "output" / f"Sample{output_ext}").resolve()
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
    kwargs: dict = {"output": output, "allow_trial": args.trial}
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
service.create_docx("Hello from the local worker!", Path("output/Hello.docx"), allow_trial=True)
service.create_pdf("Quarterly Sales Report", Path("output/Report.pdf"), allow_trial=True)
```

## Execution steps

Step 1: From the `local-dotnet-worker/` folder, restore and publish the worker (see the [Install Dependencies](#install-dependencies) section). Confirm `artifacts/DocumentBridge.dll` exists.

Step 2: Create a Word document, or create a PDF directly (no intermediate DOCX file is written to disk). By default the output lands in `output/Sample.docx` / `output/Sample.pdf`.

{% tabs %}
{% highlight bash %}

python document_sdk.py create-docx --trial
python document_sdk.py create-pdf  --trial

{% endhighlight %}
{% endtabs %}

Step 3: Convert an existing Excel workbook or PowerPoint presentation to PDF. `--input` is required for conversion operations.

{% tabs %}
{% highlight bash %}

python document_sdk.py excel-to-pdf      --input documents/input.xlsx --output output/workbook.pdf --trial
python document_sdk.py powerpoint-to-pdf --input documents/input.pptx --output output/slides.pdf  --trial

{% endhighlight %}
{% endtabs %}

Step 4: Watermark an existing PDF with a translucent diagonal label.

{% tabs %}
{% highlight bash %}

python document_sdk.py watermark-pdf --input output/workbook.pdf --output output/watermarked.pdf --label CONFIDENTIAL --trial

{% endhighlight %}
{% endtabs %}

Step 5: Customize the body text and the output path. The extension must match the operation's output format.

{% tabs %}
{% highlight bash %}

python document_sdk.py create-pdf --text "Quarterly Sales Report - Q1" --output output/Report.pdf --trial

{% endhighlight %}
{% endtabs %}

Step 6: Run as a licensed user (no `--trial` flag). Set the environment variable first — see [Environment setup](#environment-setup).

{% tabs %}
{% highlight bash %}

python document_sdk.py create-docx

{% endhighlight %}
{% endtabs %}

> Each operation runs in a fresh `dotnet` subprocess with a default per-operation timeout of **300 seconds**. Override with `--timeout <seconds>` on any subcommand for large PPTX/XLSX conversions.

## Running the sample scripts

The repository also ships runnable sample scripts in `local-dotnet-worker/samples/` that build on `document_sdk.load_service()`:

| Sample | What it does |
|---|---|
| `01_hello_world.py` | Minimal end-to-end call: produce one DOCX and one PDF. |
| `02_batch_invoices.py` | Loop over a list of records and emit a DOCX per record. |
| `03_custom_output_paths.py` | Use a custom output directory and a non-default bundle. |
| `04_excel_to_pdf.py` | Convert an XLSX workbook to PDF (auto-generates a sample workbook if needed). |
| `05_powerpoint_to_pdf.py` | Convert a PPTX presentation to PDF (auto-generates a sample deck if needed). |
| `06_watermark_pdf.py` | Overlay a diagonal text watermark on every page of an existing PDF. |

Run them as modules from the approach's root folder:

{% tabs %}
{% highlight bash %}

cd local-dotnet-worker
python -m samples.01_hello_world

{% endhighlight %}
{% endtabs %}

> Run samples as modules (`python -m samples.XX`) so the parent folder containing `document_sdk.py` is on `sys.path`. A bare `python samples/XX.py` would fail with `ModuleNotFoundError: No module named 'document_sdk'`.

## Expected output

A successful run prints the absolute path of the generated file and writes it to the `output/` folder.

```text
Saved: /repo/local-dotnet-worker/output/Sample.docx
```

* `create-docx` produces `output/Sample.docx`.
* `create-pdf` produces `output/Sample.pdf`.
* `excel-to-pdf` / `powerpoint-to-pdf` / `watermark-pdf` produce the PDF you pass via `--output`.

When running in trial mode (`--trial`), an **evaluation watermark** may appear at the top of the generated document. Register a license key to remove it.

## GitHub sample

A complete working sample demonstrating Syncfusion .NET Document SDK integration with Python using a local .NET worker is available on GitHub. For more details, see the [GitHub sample](https://github.com/SyncfusionExamples/python-syncfusion-document-sdk-samples).

## Extending the Integration to Other Syncfusion Document Libraries

| Use case | Package | Build API |
|---|---|---|
| Word (.docx) | `Syncfusion.DocIO.Net.Core` | `WordDocument`, `FormatType.Docx` |
| Word → PDF | `Syncfusion.DocIORenderer.Net.Core` | `DocIORenderer.ConvertToPDF` |
| PDF create/edit | `Syncfusion.Pdf.Net.Core` | `PdfDocument`, `PdfPage` |
| Excel (.xlsx) | `Syncfusion.XlsIO.Net.Core` | `ExcelEngine`, `IWorkbook` |
| PowerPoint (.pptx) | `Syncfusion.Presentation.Net.Core` | `IPresentation` |

Only the document-specific implementation in the .NET worker needs to be updated. The Python client, request structure, and communication pattern can remain the same, making it easy to switch between Word, PDF, Excel, and PowerPoint document generation scenarios.

## Troubleshooting

### The worker DLL cannot be found

```
FileNotFoundError: Publish DocumentBridge into .../artifacts first (see README).
```

Publish the worker before running Python. See [Install Dependencies](#install-dependencies). If you publish to a custom folder, pass it with `--bundle`.

### `dotnet` is not on PATH

```
RuntimeError: Install the .NET 8 runtime/SDK and put dotnet on PATH.
```

Install the [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download) and reopen your terminal so `dotnet` is resolvable. Run `dotnet --info` to confirm.

### Worker times out on a large conversion

```
RuntimeError: Worker timed out after 300s on operation 'powerpoint-to-pdf'.
```

Large PPTX/XLSX → PDF conversions can exceed the default timeout. Raise the limit with `--timeout <seconds>` on the subcommand, or pass a higher `timeout` when constructing `DocumentService`.

### License error when not using `--trial`

```
InvalidOperationException: Set SYNCFUSION_LICENSE_KEY or pass AllowTrial=true...
```

Either export `SYNCFUSION_LICENSE_KEY` in the environment or add `--trial` to the Python command. The worker reads the variable itself; do **not** put the key on the command line.

### Output extension does not match the operation

```
error: --output must have extension .pdf.
```

Each subcommand expects a fixed output extension, e.g. pass `--output output/Report.pdf` with `create-pdf` (`.docx` with `create-docx`). Conversion operations also validate `--input` (`.xlsx` for `excel-to-pdf`, `.pptx` for `powerpoint-to-pdf`, `.pdf` for `watermark-pdf`).

### Samples fail with `ModuleNotFoundError: No module named 'document_sdk'`

Run the sample scripts as modules from the approach's root folder, not as bare files:

```bash
cd local-dotnet-worker
python -m samples.01_hello_world
```
