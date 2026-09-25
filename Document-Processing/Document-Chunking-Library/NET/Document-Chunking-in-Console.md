---
title: Get Started with .NET Document Chunking | Syncfusion
description: Learn how to use the Syncfusion® .NET Document Chunking Library to chunk Excel, Word, PDF, PowerPoint, and Markdown documents in a console application.
platform: document-processing
control: Chunking
documentation: UG
---

# Get Started with .NET Document Chunking in a Console Application

The Syncfusion<sup>®</sup> .NET Document Chunking Library allows you to divide Excel, Word, PDF, PowerPoint, and Markdown documents into meaningful chunks in a console application.

This section explains how to create a console application, install the required NuGet package, and chunk a Word document using Table mode.

## Prerequisites

- Visual Studio 2022 (17.0 or later).
- .NET 8.0 SDK or later.
- A supported Excel, Word, PDF, PowerPoint, or Markdown document.

## Create a Console Application (.NET Core)

The following steps illustrate how to create a console application (.NET Core) and chunk a Word document.

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new **Console Application** project.  

Step 2: Install the `Syncfusion.DocumentChunking.Net.Core` NuGet package with the latest stable version as a reference to your console application from <a href="https://www.nuget.org" aria-label="NuGet">NuGet.org</a>.

Step 3: Include the following namespace in the `Program.cs` file.

{% capture codesnippet1 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.DocumentChunking;
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

Step 4:  Add the following code to the `Program.cs` file.

The following code snippet illustrates how to chunk a Word document using Table mode and display the generated content, citation details, and metadata.

{% capture codesnippet2 %}
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

ChunkingService chunkingService = new ChunkingService();
using (FileStream fileStream = new FileStream(@"Data/Sample.docx", FileMode.Open, FileAccess.Read))
{ 
    IChunkingResult result =
        chunkingService.Chunk(fileStream, "Sample.docx", new ChunkingOptions
        {
            MaxTokens = 50,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new WordChunkingOptions
                {
                    ChunkingMode = WordChunkingMode.Table
                }
        });

    Console.WriteLine($"Chunk Count: {result.Chunks.Count}");

    foreach (IChunk chunk in result.Chunks)
    {
        Console.WriteLine($"ChunkId: {chunk.ChunkId}");

        Console.WriteLine($"ChunkIndex: {chunk.ChunkIndex}");

        Console.WriteLine($"Content:{Environment.NewLine}{chunk.Content}");

        Console.WriteLine($"Citation: {chunk.Citation?.DisplayText}");

        Console.WriteLine("Citation Location Details");

        if (chunk.Citation?.LocationDetails != null)
        {
            foreach (KeyValuePair<string, object> item
                        in chunk.Citation.LocationDetails)
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
{{ codesnippet2 | OrderList_Indent_Level_1 }}

Step 5: Run the application.

The application chunks the Word document using Table mode and displays the generated content, citation details, and metadata in the console.

{% endtabcontent %}

{% endtabcontents %}

## Create a Console Application (.NET Framework)

The following steps illustrate how to create a console application (.NET Framework) and chunk a Word document.

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new **Console Application (.NET Framework)** project.

Step 2: Install the `Syncfusion.DocumentChunking.WinForms` NuGet package with the latest stable version as a reference to your console application from <a href="https://www.nuget.org" aria-label="NuGet">NuGet.org</a>.

Step 3: Include the following namespace in the `Program.cs` file.

{% capture codesnippet1 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.DocumentChunking;
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

Step 4:  Add the following code to the `Program.cs` file.

The following code snippet illustrates how to chunk a Word document using Table mode and display the generated content, citation details, and metadata.

{% capture codesnippet2 %}
{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

ChunkingService chunkingService = new ChunkingService();
using (FileStream fileStream = new FileStream(@"Data/Sample.docx", FileMode.Open, FileAccess.Read))
{ 
    IChunkingResult result =
        chunkingService.Chunk(fileStream, "Sample.docx", new ChunkingOptions
        {
            MaxTokens = 50,
            OverlapTokens = 0,
            IncludeMetadata = true,
            IncludeCitation = true,
            SourceOptions =
                new WordChunkingOptions
                {
                    ChunkingMode = WordChunkingMode.Table
                }
        });

    Console.WriteLine($"Chunk Count: {result.Chunks.Count}");

    foreach (IChunk chunk in result.Chunks)
    {
        Console.WriteLine($"ChunkId: {chunk.ChunkId}");

        Console.WriteLine($"ChunkIndex: {chunk.ChunkIndex}");

        Console.WriteLine($"Content:{Environment.NewLine}{chunk.Content}");

        Console.WriteLine($"Citation: {chunk.Citation?.DisplayText}");

        Console.WriteLine("Citation Location Details");

        if (chunk.Citation?.LocationDetails != null)
        {
            foreach (KeyValuePair<string, object> item
                        in chunk.Citation.LocationDetails)
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
{{ codesnippet2 | OrderList_Indent_Level_1 }}

Step 5: Run the application.

The application chunks the Word document using Table mode and displays the generated content, citation details, and metadata in the console.

{% endtabcontent %}

{% endtabcontents %}

N> The provided examples demonstrate how to chunk a Word document using Table mode. You can also chunk Excel, PDF, PowerPoint, and Markdown documents by using the corresponding format-specific chunking options and supported chunking modes. For more information, see <a href="https://help.syncfusion.com/document-processing/document-chunking-library/net/chunking-modes" aria-label="Document chunking modes">Chunking modes</a>.