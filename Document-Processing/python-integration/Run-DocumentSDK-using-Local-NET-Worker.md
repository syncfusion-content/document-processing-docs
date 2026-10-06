---
title: Use Syncfusion .NET Libraries in Python via Local Worker | Syncfusion
description: Learn how to generate Word and PDF documents from Python using Syncfusion Document SDK through a local worker, without Microsoft Office or pip packages.
platform: document-processing
control: Document SDK
documentation: UG
Keywords: python generate word, python generate pdf, local dotnet worker, syncfusion python integration, docio python, pdf renderer python, subprocess dotnet
---

# Use Syncfusion .NET Document SDK in Python via Local Worker

The [Syncfusion .NET Document SDK](https://www.syncfusion.com/document-sdk) lets you create, read, and edit Word (`.docx`), PDF, Excel, and PowerPoint documents programmatically without Microsoft Office or Adobe Acrobat. Because the libraries are written in .NET, Python applications communicate with them through a small out-of-process **local worker** — a console assembly built from the SDK that Python launches with the built-in `subprocess` module. No pip packages, Python.NET, or a web server are required.

This guide walks through the full workflow: prerequisites, project structure, environment setup, dependency installation, worker configuration, code implementation, execution, troubleshooting, and expected output. The same pattern applies to every Syncfusion Document SDK project — DocIO (Word), PDF, XlsIO (Excel), and Presentation (PowerPoint).

## How the integration works

Python serializes a JSON request to the worker's standard input, the worker builds the document with the Syncfusion libraries, writes the file to disk, and returns an exit code. Errors are reported on the standard error stream. The worker process exits after each call, so there is no long-running server to manage.

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

Step 1: Restore the .NET packages defined in `WordBridge.csproj`. The Syncfusion packages and the native Linux rendering assets are pulled from `nuget.org` via the pinned `NuGet.Config`.

{% tabs %}
{% highlight bash %}

dotnet restore WordBridge/WordBridge.csproj

{% endhighlight %}
{% endtabs %}

Step 2: Publish the Worker

{% tabs %}
{% highlight bash tabtitle="Windows x64" %}

dotnet publish WordBridge/WordBridge.csproj -c Release -r win-x64 --self-contained false -o artifacts

{% endhighlight %}

{% highlight bash tabtitle="Linux x64" %}

dotnet publish WordBridge/WordBridge.csproj -c Release -r linux-x64 --self-contained false -o artifacts

{% endhighlight %}

{% highlight bash tabtitle="macOS Apple Silicon" %}

dotnet publish WordBridge/WordBridge.csproj -c Release -r osx-arm64 --self-contained false -o artifacts

{% endhighlight %}
{% endtabs %}

Step 3: After publishing, the output folder should contain:

```text
artifacts/
├── WordBridge.dll
├── WordBridge.runtimeconfig.json
└── WordBridge.deps.json
```

## Local worker configuration

The worker project (`WordBridge.csproj`) declares the Syncfusion Document SDK packages and the native rendering assets required on Linux hosts.

{% tabs %}
{% highlight xml tabtitle="WordBridge.csproj" %}

<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <OutputType>Exe</OutputType>
    <UseAppHost>false</UseAppHost>
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

### Program.cs

This file reads the request from Python and routes it to the appropriate document-generation method.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using System.Text.Json;
using DocumentInterop;

try
{
    string requestJson = Console.In.ReadToEnd();
    var request = JsonSerializer.Deserialize<Request>(requestJson)
        ?? throw new ArgumentException("A JSON request is required.");

    switch (request.Format)
    {
        case "docx":
            DocumentCreator.CreateDocx(request.Text, request.Output, request.AllowTrial);
            break;
        case "pdf":
            DocumentCreator.CreatePdf(request.Text, request.Output, request.AllowTrial);
            break;
        default:
            throw new ArgumentException("Format must be 'docx' or 'pdf'.");
    }

    return 0;
}
catch (Exception error)
{
    Console.Error.WriteLine($"{error.GetType().Name}: {error.Message}");
    return 1;
}

internal sealed record Request(string Format, string Text, string Output, bool AllowTrial);

{% endhighlight %}
{% endtabs %}

### DocumentCreator.cs

This class creates Word documents and converts them to PDF using Syncfusion libraries.

{% tabs %}
{% highlight c# tabtitle="DocumentCreator.cs" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Licensing;

namespace DocumentInterop;

public static class DocumentCreator
{
    // Build a new Word document and save it directly as DOCX.
    public static void CreateDocx(string text, string outputPath, bool allowTrial)
    {
        ConfigureLicense(allowTrial);
        using var document = CreateDocument(text);
        using var output = OpenOutput(outputPath);
        document.Save(output, FormatType.Docx);
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

import argparse
import json
import shutil
import subprocess
from pathlib import Path


class DocumentService:
    """Thin client that starts the .NET worker once per operation."""

    def __init__(self, dll: Path, dotnet: str):
        self._dll = dll
        self._dotnet = dotnet

    def _call(self, fmt: str, text: str, output: Path, allow_trial: bool) -> None:
        request = {
            "Format": fmt,
            "Text": text,
            "Output": str(output.resolve()),
            "AllowTrial": allow_trial,
        }
        result = subprocess.run(
            [self._dotnet, str(self._dll)],
            input=json.dumps(request),
            text=True,
            encoding="utf-8",
            capture_output=True,
            check=False,
        )
        if result.returncode != 0:
            detail = result.stderr.strip() or f"Worker exited with code {result.returncode}"
            raise RuntimeError(detail)

    def create_docx(self, text: str, output: Path, allow_trial: bool = True) -> None:
        self._call("docx", text, output, allow_trial)

    def create_pdf(self, text: str, output: Path, allow_trial: bool = True) -> None:
        self._call("pdf", text, output, allow_trial)


def load_service(bundle: Path | None = None) -> DocumentService:
    bundle = Path(bundle or Path(__file__).parent / "artifacts").resolve()
    dll = bundle / "WordBridge.dll"
    config = bundle / "WordBridge.runtimeconfig.json"
    if not dll.is_file() or not config.is_file():
        raise FileNotFoundError(f"Publish WordBridge into {bundle} first (see README).")

    dotnet = shutil.which("dotnet")
    if dotnet is None:
        raise RuntimeError("Install the .NET 8 runtime/SDK and put dotnet on PATH.")
    return DocumentService(dll, dotnet)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--format", choices=["docx", "pdf"], default="docx")
    parser.add_argument("--output", type=Path)
    parser.add_argument("--text", default="Hello from Python and Syncfusion DocIO!")
    parser.add_argument("--trial", action="store_true")
    parser.add_argument("--bundle", type=Path)
    args = parser.parse_args()

    output = (args.output or Path(__file__).parent / "output" / f"Sample.{args.format}").resolve()
    if output.suffix.lower() != f".{args.format}":
        parser.error("The output extension must match --format.")

    service = load_service(args.bundle)
    if args.format == "docx":
        service.create_docx(args.text, output, args.trial)
    else:
        service.create_pdf(args.text, output, args.trial)

    print("Saved:", output)


if __name__ == "__main__":
    main()

{% endhighlight %}
{% endtabs %}

## Execution steps

Step 1: From the `local-dotnet-worker/` folder, restore and publish the worker (see the [Dependency installation](#dependency-installation) section). Confirm `artifacts/WordBridge.dll` exists.

Step 2: Generate a Word document. By default the output lands in `output/Sample.docx`.

{% tabs %}
{% highlight bash %}

python document_sdk.py --format docx --trial

{% endhighlight %}
{% endtabs %}


Step 3: Generate a PDF directly (no intermediate DOCX file is written to disk).

{% tabs %}
{% highlight bash %}

python document_sdk.py --format pdf --trial

{% endhighlight %}
{% endtabs %}

Step 4: Customize the body text and the output path. The extension must match `--format`.

{% tabs %}
{% highlight bash %}

python document_sdk.py --format pdf --text "Quarterly Sales Report - Q1" --output output/Report.pdf --trial

{% endhighlight %}
{% endtabs %}

Step 5: Run as a licensed user (no `--trial` flag). Set the environment variable first — see [Environment setup](#environment-setup).

{% tabs %}
{% highlight bash %}

python document_sdk.py --format docx

{% endhighlight %}
{% endtabs %}

## Expected output

A successful run prints the absolute path of the generated file and writes it to the `output/` folder.

```text
Saved: /repo/local-dotnet-worker/output/Sample.docx
```

* `--format docx` produces `output/Sample.docx`.
* `--format pdf` produces `output/Sample.pdf`.

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
FileNotFoundError: Publish WordBridge into .../artifacts first (see README).
```

Publish the worker before running Python. See [Dependency installation](#dependency-installation). If you publish to a custom folder, pass it with `--bundle`.

### `dotnet` is not on PATH

```
RuntimeError: Install the .NET 8 runtime/SDK and put dotnet on PATH.
```

Install the [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download) and reopen your terminal so `dotnet` is resolvable. Run `dotnet --info` to confirm.

### License error when not using `--trial`

```
InvalidOperationException: Set SYNCFUSION_LICENSE_KEY or pass AllowTrial=true...
```

Either export `SYNCFUSION_LICENSE_KEY` in the environment or add `--trial` to the Python command. The worker reads the variable itself; do **not** put the key on the command line.

### Output extension does not match `--format`

```
error: The output extension must match --format.
```

Pass `--output output/Report.pdf` together with `--format pdf` (and `.docx` with `docx`).
