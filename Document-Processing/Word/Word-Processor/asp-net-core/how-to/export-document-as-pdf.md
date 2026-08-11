---
layout: post
title: Export PDF in Syncfusion DOCX Editor Component | Syncfusion
description: Learn here all about exporting the document as PDF in the Syncfusion Document Editor component of Essential JS 2 and more.
platform: document-processing
control: Export Document As PDF
documentation: ug
---


# Export the document as PDF in ASP.NET Core Document Editor

This article explains how to export the document as a PDF. You can export the document as PDF in the following ways:

## Export the document as PDF on the client-side

Use the [`pdf export component`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export) at the application level to export the document as PDF using the `exportAsImage` API. Here, all pages will be converted to images and inserted as PDF pages (works like print as PDF).

N> 1. The [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) exports PDFs by converting pages into images on the client side, which may slightly increase the file size compared to text-based PDFs.
N> 2. Text search is not supported in the exported PDF, as the content is stored as images.
N> 3. You can install the PDF export packages from this [`link`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-pdf-client/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export-pdf-client.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-pdf-client/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Export document as PDF on the server-side using DocIO

With the help of [`Syncfusion DocIO`](https://help.syncfusion.com/file-formats/docio/word-to-pdf), you can export the document as PDF on the server-side. Here, you can search the text.

The following steps illustrate how to convert the document as PDF:

* Using the `serialize` API, convert the document as SFDT and send it to the server-side.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-pdf-server/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export-pdf-server.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/export-pdf-server/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



* Using the Save API on the server-side, you can convert the SFDT to a stream.
* Finally, convert the stream to a PDF using the `Syncfusion.DocIORenderer.Net.Core` library.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("ExportPdf")]
public void ExportPdf([FromBody]SaveParameter data)
{
    // Converts the sfdt to stream
    Stream document = WordDocument.Save(data.content, FormatType.Docx);
    Syncfusion.DocIO.DLS.WordDocument doc = new Syncfusion.DocIO.DLS.WordDocument(document, Syncfusion.DocIO.FormatType.Docx);
    //Instantiation of DocIORenderer for Word to PDF conversion
    DocIORenderer render = new DocIORenderer();
    //Converts Word document into PDF document
    PdfDocument pdfDocument = render.ConvertToPDF(doc);
    // Saves the document to server machine file system, you can customize here to save into databases or file servers based on requirement.
    FileStream fileStream = new FileStream("sample.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite);
    //Saves the PDF file
    pdfDocument.Save(fileStream);
    pdfDocument.Close();
    fileStream.Close();
    document.Close();
}

```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Export-document-as-PDF-in-Document-Editor/).