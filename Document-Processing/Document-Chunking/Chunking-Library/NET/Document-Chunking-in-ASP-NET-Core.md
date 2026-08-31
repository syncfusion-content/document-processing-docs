---
title: Get Started with .NET Document Chunking Library in ASP.NET Core | Syncfusion
description: Learn how to use the Syncfusion® .NET Document Chunking Library to chunk Excel, Word, PDF, PowerPoint, and Markdown documents in an ASP.NET Core application.
platform: document-processing
control: Chunking
documentation: UG
---

# Get Started with .NET Document Chunking Library in ASP.NET Core

The Syncfusion<sup>®</sup> .NET Document Chunking Library allows you to divide Excel, Word, PDF, PowerPoint, and Markdown documents into meaningful chunks in an ASP.NET Core application.

This section explains how to create an ASP.NET Core application, install the required NuGet package, upload a supported document, and generate chunks using a format-specific chunking mode.

## Prerequisites

- Visual Studio 2022 with the **ASP.NET and web development** workload installed.
- .NET 8.0 SDK or later.
- A supported Excel, Word, PDF, PowerPoint, or Markdown document.
- Access to the Syncfusion Nexus Repository containing the `Syncfusion.DocumentChunking` package.

## Create an ASP.NET Core Application

The following steps illustrate how to create an ASP.NET Core application and chunk a supported document.

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new **ASP.NET Core Web App (Model-View-Controller)** project.

Step 2: Select **.NET 8.0** or a later framework version, and create the project.

Step 3: Configure the Syncfusion Nexus Repository as a package source and install the `Syncfusion.DocumentChunking` NuGet package in the application.

```powershell
Install-Package Syncfusion.DocumentChunking
```

Step 4: Add the following namespace to the `HomeController.cs` file.

{% capture codesnippet1 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.DocumentChunking;
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

Step 5: Open `Views/Home/Index.cshtml` and add the following form to upload a supported document.

{% capture codesnippet2 %}
{% tabs %}
{% highlight CSHTML %}
@{
    ViewData["Title"] = "Document Chunking";
}

<h1>Document Chunking</h1>

<form asp-controller="Home"
      asp-action="ChunkDocument"
      method="post"
      enctype="multipart/form-data">

    <div>
        <label for="document">Select a document</label>

        <input id="document"
               name="document"
               type="file"
               accept=".xlsx,.xls,.xlsm,.xltx,.xltm,.csv,.tsv,.docx,.doc,.dotx,.dotm,.rtf,.pdf,.pptx,.md"
               required />
    </div>
    <br />
    <button type="submit">Chunk Document</button>
</form>

{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet2 | OrderList_Indent_Level_1 }}

Step 6: Add the following `ChunkDocument` action and helper methods to `HomeController.cs`.

The following code snippet illustrates how to chunk Excel, Word, PDF, PowerPoint, and Markdown documents. The example selects the appropriate source options and chunking mode based on the uploaded document format.

{% capture codesnippet3 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
public IActionResult ChunkDocument(IFormFile document)
{
    if (document == null || document.Length == 0)
    {
        return BadRequest("Select a document to chunk.");
    }

    string fileName = document.FileName;
    string extension = Path.GetExtension(fileName).ToLowerInvariant();

    ChunkingService chunkingService = new ChunkingService();

    using Stream fileStream =  document.OpenReadStream();

    ChunkingOptions options =
        new ChunkingOptions
        {
            MaxTokens = 500,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true
        };

    switch (extension)
    {
        case ".xlsx":
        case ".xls":
        case ".xlsm":
        case ".xltx":
        case ".xltm":
        case ".csv":
        case ".tsv":
            options.MaxTokens = 50;
            options.SourceOptions =
                new ExcelChunkingOptions
                {
                    ChunkingMode =
                        ExcelChunkingMode.Auto
                };
            break;

        case ".docx":
        case ".doc":
        case ".dotx":
        case ".dotm":
        case ".rtf":
            options.SourceOptions =
                new WordChunkingOptions
                {
                    ChunkingMode =
                        WordChunkingMode.Section
                };
            break;

        case ".pdf":
            options.SourceOptions =
                new PdfChunkingOptions
                {
                    ChunkingMode =
                        PdfChunkingMode.Auto
                };
            break;

        case ".pptx":
            options.SourceOptions =
                new PowerPointChunkingOptions
                {
                    ChunkingMode =
                        PowerPointChunkingMode.Auto
                };
            break;

        case ".md":
            options.SourceOptions =
                new MarkdownChunkingOptions
                {
                    ChunkingMode =
                        MarkdownChunkingMode.Table
                };
            break;

        default:
            return BadRequest(
                $"The file format '{extension}' is not supported.");
    }

    IChunkingResult result =  chunkingService.Chunk(fileStream, fileName, options);

    DisplayChunkingResult(result);

    return Content("The document was chunked successfully. " + "See the application console for the chunking results.");
}

private static void DisplayChunkingResult( IChunkingResult result)
{
    Console.WriteLine( $"Chunk Count: {result.Chunks.Count}");

    foreach (IChunk chunk in result.Chunks)
    {
        Console.WriteLine("================================");

        Console.WriteLine($"ChunkId: {chunk.ChunkId}");

        Console.WriteLine($"ChunkIndex: {chunk.ChunkIndex}");

        Console.WriteLine($"Content:{Environment.NewLine}{chunk.Content}");

        Console.WriteLine($"Citation: {chunk.Citation?.DisplayText}");

        Console.WriteLine("Citation Location Details");

        if (chunk.Citation?.LocationDetails != null)
        {
            foreach (KeyValuePair<string, object> item in chunk.Citation.LocationDetails)
            {
                Console.WriteLine($"Location Key: {item.Key}, " + $"Location Value: {item.Value}");
            }
        }

        Console.WriteLine($"Metadata: {chunk.Metadata}");

        Console.WriteLine($"Metadata SourceDocumentId: " + $"{chunk.Metadata?.SourceDocumentId}");

        Console.WriteLine($"Metadata File Name: " + $"{chunk.Metadata?.FileName}");

        Console.WriteLine($"Metadata File Type: " + $"{chunk.Metadata?.FileType}");

        Console.WriteLine($"Metadata Token Count: " + $"{chunk.Metadata?.TokenCount}");

        Console.WriteLine($"Metadata Character Count: " + $"{chunk.Metadata?.CharacterCount}");

        Console.WriteLine("Metadata Attributes");

        if (chunk.Metadata?.Attributes != null)
        {
            foreach (KeyValuePair<string, object> item in chunk.Metadata.Attributes)
            {
                Console.WriteLine($"Attribute Key: {item.Key}, " + $"Attribute Value: {item.Value}");
            }
        }
    }
}
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet3 | OrderList_Indent_Level_1 }}

Step 7: Run the application, select a supported document, and click **Chunk Document**.

The application selects a source option and chunking mode based on the uploaded document format. The generated chunk content, metadata, and citation details are displayed in the application console.

N> To use a different chunking mode, replace the format-specific `ChunkingMode` value in the `switch` statement. For more information about the supported modes, see [Chunking modes](https://help.syncfusion.com/document-processing/document-chunking/chunking-library/net/chunking-modes).