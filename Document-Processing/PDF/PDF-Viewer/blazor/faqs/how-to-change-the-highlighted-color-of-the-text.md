---
layout: post
title: Change highlight color of text in Blazor PDF Viewer | Syncfusion
description: Learn how to change the highlight color of text markup highlights in the Syncfusion Blazor SfPdfViewer using the PdfViewerHighlightSettings.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Change the highlight color of the text in Blazor SfPdfViewer Component

Use the `Color` property of the [PdfViewerHighlightSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerHighlightSettings.html) class to set the default highlight color for the Highlight text markup annotation. This setting applies only to Highlight annotations. Other text markup types (such as Underline or Strikethrough) have their own settings.

The following code illustrates how to change the highlight color of the text.

```cshtml
@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.SfPdfViewer

<!--Render simple PDF Viewer with customized highlight options-->
<SfPdfViewer2 @ref="PDFViewer"
              DocumentPath="@DocumentPath">
    <PdfViewerHighlightSettings Color="@highlightColor">
    </PdfViewerHighlightSettings>
</SfPdfViewer2>

@code{
    SfPdfViewer2 PDFViewer;
    //Sets the PDF document path for initial loading.
    private string DocumentPath { get; set; } = "Data/PDF_Succinctly.pdf";

    //Defines the color for text markup annotations like highlight.
    private string highlightColor = "Green";

}
```

![Highlighted text in Blazor PDF Viewer](../../blazor-classic/images/highlighttext.png)

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Annotations/Text%20Markup/Customize%20highlight%20annotation).