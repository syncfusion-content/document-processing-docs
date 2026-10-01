---
title: Select a Chunking Mode in .NET Document Library | Syncfusion
description: Learn how to select an appropriate chunking mode for Excel, Word, PDF, PowerPoint, and Markdown documents using the Syncfusion® .NET Document Chunking Library.
platform: document-processing
control: Chunking
documentation: UG
---

# Which Chunking Mode Should Be Selected?

Select a chunking mode based on the source document format and the type of content to be processed.

Use Auto mode to process different content structures in a document. Use a format-specific mode to process a particular structure, such as tables, worksheets, paragraphs, sections, pages, slides, speaker notes, or headings.

The following table provides general guidance for selecting a chunking mode.

<table>
<tr>
<th>Requirement</th>
<th>Recommended Mode</th>
</tr>
<tr>
<td>Process different content structures in the document</td>
<td>Auto</td>
</tr>
<tr>
<td>Process tables</td>
<td>Table</td>
</tr>
<tr>
<td>Process individual Excel worksheets</td>
<td>Worksheet</td>
</tr>
<tr>
<td>Process Word document sections</td>
<td>Section</td>
</tr>
<tr>
<td>Process paragraphs in Word, PDF, or Markdown documents</td>
<td>Paragraph</td>
</tr>
<tr>
<td>Process individual PDF pages</td>
<td>Page</td>
</tr>
<tr>
<td>Process individual PowerPoint slides</td>
<td>Slide</td>
</tr>
<tr>
<td>Process PowerPoint speaker notes</td>
<td>Notes</td>
</tr>
<tr>
<td>Process Markdown content based on headings</td>
<td>Heading</td>
</tr>
</table>

The following code snippet shows how to chunk a Word document using Section mode.

{% tabs %}
{% highlight c# tabtitle="C#" %}

ChunkingService chunkingService = new ChunkingService();

using (FileStream fileStream = new FileStream(@"DocumentChunking-Sample.docx", FileMode.Open, FileAccess.Read))
{
    IChunkingResult result = chunkingService.Chunk(fileStream, "DocumentChunking-Sample.docx",
            new ChunkingOptions
            {
                MaxTokens = 500,
                OverlapTokens = 0,
                IncludeMetadata = true,
                IncludeCitation = true,
                SourceOptions =
                    new WordChunkingOptions
                    {
                        ChunkingMode = WordChunkingMode.Section
                    }
            });

    Console.WriteLine($"Chunk Count: {result.Chunks.Count}");

    foreach (IChunk chunk in result.Chunks)
    {
        Console.WriteLine($"Content:{Environment.NewLine}{chunk.Content}");
    }
}

{% endhighlight %}
{% endtabs %}

N> The available chunking modes vary depending on the source document format.