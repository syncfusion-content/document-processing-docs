---
title: Use Syncfusion Document Processing in Python with a Local .NET Worker | Syncfusion
description: Learn how to run Syncfusion Document Processing from Python through a local .NET worker process with no extra Python packages.
platform: python
documentation: UG
---

# Use Syncfusion Document Processing in Python with a Local .NET Worker

Use the **Local .NET Worker** approach when you want Python to start a published .NET executable in a separate process. Python sends JSON requests over standard input and output, so you can generate documents without adding pythonnet or a web server.

## Prerequisites

Ensure the following prerequisites are installed:

* **[.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)** (LTS). Earlier LTS releases (8.0 and 9.0) are also supported.
* **[Python 3.9 or later](https://www.python.org/downloads/)** (CPython distribution recommended).
* **No additional pip packages** - the worker uses Python's built-in `subprocess` and `json` modules.
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available).

N> The Syncfusion&reg; license key is supplied through the `SYNCFUSION_LICENSE_KEY` environment variable. The `DocumentBridge` worker reads it once during process initialization.

## Step 1: Create the .NET Worker Project

Open a terminal and create a new .NET console project that will host the Syncfusion Document Processing libraries.

```bash
mkdir PythonDocumentApp
cd PythonDocumentApp
dotnet new console -n DocumentBridge -f net10.0
cd DocumentBridge
```

## Step 2: Add the Required NuGet Packages

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

## Step 3: Configure the .NET Project

Open `DocumentBridge.csproj` and ensure the project emits a runtime configuration file and copies dependency assemblies to the output directory. These settings are required for the worker to be invoked through subprocess.

Update `DocumentBridge.csproj` with the settings required for publishing:

* Use the .NET 10 target framework
* Generate the runtime configuration file
* Copy dependency assemblies to the output folder
* Set the project to build as an executable
* Use `DocumentBridge` as the assembly name and `DocumentInterop` as the root namespace

Add the Syncfusion document processing packages and the native rendering packages needed for PDF output.

Use `Program.cs` for request handling and `DocumentCreator.cs` for document generation.

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

    DocumentCreator.ConfigureLicense();

    
    switch (request.Operation)
    {
        // Word: build from a string.
        case "create-docx":
            RequireField(request.Text, "Text", "create-docx");
            DocumentCreator.CreateDocx(request.Text!, request.Output);
            break;
        case "create-pdf":
            RequireField(request.Text, "Text", "create-pdf");
            DocumentCreator.CreatePdf(request.Text!, request.Output);
            break;
        // Excel / PowerPoint: convert an existing file to PDF.
        case "excel-to-pdf":
            RequireField(request.Input, "Input", "excel-to-pdf");
            DocumentCreator.ExcelToPdf(request.Input!, request.Output);
            break;
        case "powerpoint-to-pdf":
            RequireField(request.Input, "Input", "powerpoint-to-pdf");
            DocumentCreator.PowerPointToPdf(request.Input!, request.Output);
            break;
        // PDF: overlay a diagonal text watermark on every page.
        case "watermark-pdf":
            RequireField(request.Input, "Input", "watermark-pdf");
            RequireField(request.Label, "Label", "watermark-pdf");
            DocumentCreator.WatermarkPdf(request.Input!, request.Output, request.Label!);
            break;
        // Sample input helpers used by the Python sample scripts.
        case "create-sample-xlsx":
            DocumentCreator.CreateSampleXlsx(request.Output);
            break;
        case "create-sample-pptx":
            DocumentCreator.CreateSamplePptx(request.Output);
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
    string? Label);

{% endhighlight %}
{% endtabs %}

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


## Step 4: Publish the .NET Worker

Publish the app to an `artifacts` folder. Choose the runtime identifier (RID) that matches the target operating system.

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

## Step 5: Create the Python Client Module

Create a file named `document_sdk.py` in the project root.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

"""Create Word, Excel, and PowerPoint documents and convert them to PDF with
a local .NET worker.
"""
import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path


class DocumentService:
    """Thin client for the .NET worker."""

    def __init__(self, executable: list[str], timeout: int = 300):
        self._executable = executable
        # Default timeout for larger conversions.
        self._timeout = timeout

    def _call(self, operation: str, output: Path, *,
              text: str | None = None, input: Path | None = None,
              label: str | None = None) -> None:
        request = {
            "Operation": operation,
            "Text": text,
            "Input": str(input.resolve()) if input is not None else None,
            "Output": str(output.resolve()),
            "Label": label,
        }
        # Pass JSON on stdin; do not use shell=True.
        try:
            result = subprocess.run(
                self._executable,
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

    def create_docx(self, text: str, output: Path) -> None:
        """Create and save a DOCX document."""
        self._call("create-docx", output, text=text)

    def create_pdf(self, text: str, output: Path) -> None:
        """Create and save a PDF document."""
        self._call("create-pdf", output, text=text)

    # ---- Excel / PowerPoint: convert an existing file to PDF -------------------------

    def excel_to_pdf(self, source: Path, output: Path) -> None:
        """Convert XLSX to PDF."""
        self._call("excel-to-pdf", output, input=source)

    def powerpoint_to_pdf(self, source: Path, output: Path) -> None:
        """Convert PPTX to PDF."""
        self._call("powerpoint-to-pdf", output, input=source)

    # ---- PDF: overlay a diagonal text watermark on every page -------------------------

    def watermark_pdf(self, source: Path, output: Path, label: str) -> None:
        """Watermark each PDF page."""
        self._call("watermark-pdf", output, input=source, label=label)

    # ---- Sample input helpers --------------------------------------------------------

    def create_sample_xlsx(self, output: Path) -> None:
        """Create a sample XLSX."""
        self._call("create-sample-xlsx", output)

    def create_sample_pptx(self, output: Path) -> None:
        """Create a sample PPTX."""
        self._call("create-sample-pptx", output)


def load_service(bundle: Path | None = None) -> DocumentService:
    """Load the published worker executable or DLL."""
    bundle = Path(bundle or Path(__file__).parent / "artifacts").resolve()
    apphost_name = "DocumentBridge.exe" if sys.platform.startswith("win") else "DocumentBridge"
    apphost = bundle / apphost_name
    dll = bundle / "DocumentBridge.dll"

    if apphost.is_file():
        return DocumentService([str(apphost)])

    config = bundle / "DocumentBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(f"Publish DocumentBridge into {bundle} first (see README).")

    dotnet = shutil.which("dotnet")
    if dotnet is None:
        raise RuntimeError("Install the .NET 10 runtime/SDK and put dotnet on PATH.")

    return DocumentService([dotnet, str(dll)])


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
    parser.add_argument("--bundle", type=Path, help="Folder containing the published worker.")
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

## Step 6: Generate a Sample Document

Create a file named `app.py` that uses `DocumentService` to generate DOCX and PDF documents.

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

    service.create_docx("Hello from the local .NET worker!", docx_path)
    service.create_pdf("Hello from the local .NET worker!", pdf_path)

    print("Saved:", docx_path)
    print("Saved:", pdf_path)


if __name__ == "__main__":
    main()

{% endhighlight %}
{% endtabs %}

## Step 7: Run the Application

Execute the script from the project root.

```bash
python app.py
```

The output directory will contain `Hello.docx` and `Hello.pdf`.

N> The first run may take a few seconds while the .NET runtime loads.

## Available Operations

| Operation | Description | Output |
|---|---|---|
| `create_docx` | Build a Word document from a string and save as DOCX. | `.docx` |
| `create_pdf` | Build a Word document in memory and render directly to PDF. | `.pdf` |
| `excel_to_pdf` | Convert an XLSX workbook to PDF using its print settings. | `.pdf` |
| `powerpoint_to_pdf` | Convert a PPTX presentation to PDF via the presentation renderer. | `.pdf` |
| `watermark_pdf` | Overlay a diagonal text watermark on every page of an existing PDF. | `.pdf` |

## Troubleshooting

* **`FileNotFoundError: Publish DocumentBridge into ... first.`** - The `artifacts` directory does not contain a published worker. Run the `dotnet publish` command from Step 4.
* **`RuntimeError: Worker timed out after ...s`** - The operation exceeded the default 300 second timeout. Pass a larger value to `DocumentService(timeout=...)` or restructure the workload to process fewer documents per call.
* **Output PDF contains an evaluation watermark** - The `SYNCFUSION_LICENSE_KEY` environment variable is empty or invalid. Set a valid license key and restart the worker.

## See Also

* [Syncfusion Document Processing .NET Documentation](https://help.syncfusion.com/document-processing/overview)
* [Python.NET Wrapper Integration](Use-Document-SDK-through-Python-NET.md)
* [Runnable sample on GitHub](https://github.com/SyncfusionExamples/python-syncfusion-document-sdk-samples)
* [Syncfusion Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
