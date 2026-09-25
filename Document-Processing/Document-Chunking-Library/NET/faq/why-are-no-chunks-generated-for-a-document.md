---
title: Why Are No Document Chunks Generated in .NET | Syncfusion
description: Learn why a document may produce no chunks and how to handle an empty result using the Syncfusion® .NET Document Chunking Library.
platform: document-processing
control: Chunking
documentation: UG
---

# Why Are No Chunks Generated for a Document?

A chunking result can contain no chunks when the source document does not contain content that matches the selected chunking mode.

This can occur in the following situations:

- Table mode is used for a document that does not contain a detectable table.
- Notes mode is used for a PowerPoint presentation that does not contain speaker notes.
- The source document is empty.
- The source document does not contain extractable content.
- The selected mode does not match the structure of the source document.

The following code snippet checks whether a PDF document produces chunks in Table mode.

{% tabs %}
{% highlight c# tabtitle="C#" %}

ChunkingService chunkingService =
    new ChunkingService();

using (FileStream fileStream = new FileStream(@"DocumentChunking-Sample.pdf", FileMode.Open, FileAccess.Read))
{
    IChunkingResult result = chunkingService.Chunk(fileStream, "DocumentChunking-Sample.pdf",
            new ChunkingOptions
            {
                MaxTokens = 500,
                OverlapTokens = 0,
                IncludeMetadata = true,
                IncludeCitation = true,
                SourceOptions =
                    new PdfChunkingOptions
                    {
                        ChunkingMode =
                            PdfChunkingMode.Table
                    }
            });

    if (result.Chunks.Count == 0)
    {
        Console.WriteLine("No content matching the selected chunking mode.");
    }
    else
    {
        Console.WriteLine($"Chunk Count: {result.Chunks.Count}");

        foreach (IChunk chunk in result.Chunks)
        {
            Console.WriteLine($"Content:{Environment.NewLine}" + $"{chunk.Content}");
        }
    }
}

{% endhighlight %}
{% endtabs %}

If no chunks are generated, verify the source document content and select another supported mode. For example, use Auto, Paragraph, or Page mode when the PDF document does not contain a detectable table.

N> An empty chunking result does not always indicate an error. It can indicate that the document does not contain content matching the selected chunking mode.