---
title: Getting Started with Syncfusion Document Processing in Python using Local .NET Worker | Syncfusion
description: Learn how to use Syncfusion Document Processing libraries from Python through a local .NET worker process invoked via subprocess.
platform: python
documentation: UG
---

# Getting Started with Syncfusion Document Processing in Python using Local .NET Worker

The **Local .NET Worker** approach invokes the Syncfusion Document Processing libraries from Python by spawning a published .NET executable as a separate process. Python communicates with the worker through standard input/output using JSON requests, which means no `pip` packages are required beyond the Python standard library.

## Prerequisites

Ensure the following prerequisites are installed:

* **[.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)** (LTS). Earlier LTS releases (8.0 and 9.0) are also supported.
* **[Python 3.9 or later](https://www.python.org/downloads/)** (CPython distribution recommended).
* **No additional pip packages** - the worker uses Python's built-in `subprocess` and `json` modules.
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available).

N> The Syncfusion&reg; license key is supplied through the `SYNCFUSION_LICENSE_KEY` environment variable. The `DocumentBridge` worker reads it once during process initialization.

## Step 1: Create the .NET Worker Project

Open a terminal and create a new .NET class library project that will host the Syncfusion Document Processing libraries.

```bash
mkdir PythonDocumentApp
cd PythonDocumentApp
dotnet new classlib -n DocumentBridge -f net10.0
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

{% tabs %}
{% highlight xml tabtitle="DocumentBridge.csproj" %}

<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <GenerateRuntimeConfigurationFiles>true</GenerateRuntimeConfigurationFiles>
    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    <OutputType>Exe</OutputType>
    <UseAppHost>true</UseAppHost>
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

Replace the contents of `Class1.cs` with the following worker implementation:

{% tabs %}
{% highlight c# tabtitle="DocumentCreator.cs" %}

using System.Text.Json;
using DocumentInterop;

var requestJson = Console.In.ReadToEnd();
var request = JsonSerializer.Deserialize<DocumentRequest>(requestJson);

if (request is null)
{
    Console.Error.WriteLine("Invalid request payload.");
    return 1;
}

var creator = new DocumentCreator();

try
{
    switch (request.Operation)
    {
        case "create-docx":
            creator.CreateDocx(request.Text ?? string.Empty, request.Output);
            break;
        case "create-pdf":
            creator.CreatePdf(request.Text ?? string.Empty, request.Output);
            break;
        case "excel-to-pdf":
            creator.ExcelToPdf(request.Input, request.Output);
            break;
        case "powerpoint-to-pdf":
            creator.PowerPointToPdf(request.Input, request.Output);
            break;
        case "watermark-pdf":
            creator.WatermarkPdf(request.Input, request.Output, request.Label ?? string.Empty);
            break;
        default:
            Console.Error.WriteLine($"Unknown operation: {request.Operation}");
            return 2;
    }
    return 0;
}
catch (Exception ex)
{
    Console.Error.WriteLine(ex.Message);
    return 1;
}

public sealed record DocumentRequest(string Operation, string? Text, string? Input, string Output, string? Label);

{% endhighlight %}
{% endtabs %}

Rename `Class1.cs` to `DocumentCreator.cs` (or create a new file with the same name) so the worker class is the entry point of the executable.

## Step 4: Publish the .NET Worker

Publish the .NET worker to an `artifacts` folder. Choose the runtime identifier (RID) that matches the target operating system.

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

## Step 5: Create the Python Client

Create a file named `document_sdk.py` in the project root. This module launches the published worker and forwards document generation requests as JSON.

{% tabs %}
{% highlight python tabtitle="document_sdk.py" %}

import json
import subprocess
import sys
from pathlib import Path


class DocumentService:
    """Thin client that starts the .NET worker once per operation."""

    def __init__(self, executable: list[str], timeout: int = 300):
        self._executable = executable
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
        # No shell=True: the request is passed as JSON data on stdin, never
        # interpreted as a command line, so paths/text cannot inject commands.
        result = subprocess.run(
            self._executable,
            input=json.dumps(request),
            text=True,
            encoding="utf-8",
            capture_output=True,
            check=False,
            timeout=self._timeout,
        )
        if result.returncode != 0:
            detail = result.stderr.strip() or f"Worker exited with code {result.returncode}"
            raise RuntimeError(detail)

    def create_docx(self, text: str, output: Path) -> None:
        self._call("create-docx", output, text=text)

    def create_pdf(self, text: str, output: Path) -> None:
        self._call("create-pdf", output, text=text)

    def excel_to_pdf(self, source: Path, output: Path) -> None:
        self._call("excel-to-pdf", output, input=source)

    def powerpoint_to_pdf(self, source: Path, output: Path) -> None:
        self._call("powerpoint-to-pdf", output, input=source)

    def watermark_pdf(self, source: Path, output: Path, label: str) -> None:
        self._call("watermark-pdf", output, input=source, label=label)


def load_service(bundle: Path | None = None) -> DocumentService:
    """Locate the published worker and return a configured DocumentService."""
    bundle = Path(bundle or Path(__file__).parent / "artifacts").resolve()
    exe_name = "DocumentBridge.exe" if sys.platform.startswith("win") else "DocumentBridge"
    exe_path = bundle / exe_name
    if exe_path.is_file():
        return DocumentService([str(exe_path)])
    dll_path = bundle / "DocumentBridge.dll"
    if dll_path.is_file():
        return DocumentService(["dotnet", str(dll_path)])
    raise FileNotFoundError(f"Publish DocumentBridge into '{bundle}' first.")

{% endhighlight %}
{% endtabs %}

## Step 6: Generate Your First Document

Create a file named `app.py` that uses the `DocumentService` to generate a PDF document.

{% tabs %}
{% highlight python tabtitle="app.py" %}

import os
from pathlib import Path
from document_sdk import load_service

# Optional: set the Syncfusion license key (remove if not required).
os.environ["SYNCFUSION_LICENSE_KEY"] = "YOUR_LICENSE_KEY"


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

The output directory will contain a Word document (`Hello.docx`) and a PDF document (`Hello.pdf`) that includes the same text rendered through the Word-to-PDF pipeline.

N> The first execution of the script may take a few seconds because the .NET runtime is loaded on demand. Subsequent invocations benefit from the operating system's process cache.

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
* [Python.NET Wrapper Integration](Create-Document-in-Python-PythonNet.md)
* [Syncfusion Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
