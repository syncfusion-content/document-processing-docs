---
layout: post
title: Events in Blazor SfPdfViewer Component | Syncfusion
description: Explore all events available in the Syncfusion Blazor SfPdfViewer component, including lifecycle, navigation, annotation, search, and printing events.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Events in Blazor SfPdfViewer Component

The following events are available in the SfPdfViewer component.

|Name|Description|
|---|---|
|AddSignature|Triggers when a signature is added to a page in the PDF document.|
|AjaxRequestFailed|Triggers when an AJAX request fails.|
|AnnotationAdded|Triggers when an annotation is added to a page in the PDF document.|
|AnnotationMouseover|Triggers when the mouse pointer moves over an annotation object.|
|AnnotationMoved|Triggers when an annotation is moved on a page in the PDF document.|
|AnnotationPropertiesChanged|Triggers when annotation properties are modified on a PDF page.|
|AnnotationRemoved|Triggers when an annotation is removed from a page in the PDF document.|
|AnnotationResized|Triggers when an annotation is resized on a page in the PDF document.|
|AnnotationSelected|Triggers when an annotation is selected on a page in the PDF document.|
|AnnotationUnselected|Triggers when an annotation is unselected on a page in the PDF document.|
|Created|Triggers when the PDF Viewer component is created.|
|DocumentEdited|Triggers when the PDF document is edited in the SfPdfViewer.|
|DocumentLoaded|Triggers when a document is loaded into the PDF Viewer.|
|DocumentLoadFailed|Triggers when loading a document into the PDF Viewer fails.|
|DcoumentUnloaded|Triggers when the document is closed.|
|DownloadEnd|Triggers when a download action is completed.|
|DownloadStart|Triggers when a download action starts.|
|ExportFailed|Triggers when exporting annotations fails in the SfPdfViewer.|
|ExportStarted|Triggers when exporting annotations starts in the SfPdfViewer.|
|ExportSucceed|Triggers when exporting annotations succeeds in the SfPdfViewer.|
|ExtractTextCompleted|Triggers when text extraction is completed in the SfPdfViewer.|
|ImportFailed|Triggers when importing annotations fails in the PDF document.|
|ImportStarted|Triggers when importing annotations starts in the PDF document.|
|ImportSucceed|Triggers when importing annotations succeeds in the PDF document.|
|MoveSignature|Triggers when a signature is moved on a page in the PDF document.|
|OnAnnotationDoubleClick|Triggers when an annotation is double-clicked.|
|OnHyperlinkClick|Triggers when a hyperlink in the PDF document is clicked.|
|OnHyperlinkMouseOver|Triggers when a hyperlink in the PDF document is hovered.|
|OnPageClick|Triggers when a mouse click is performed on a page in the PDF document.|
|OnTextSearchComplete|Triggers when a text search is completed.|
|OnTextSearchHighlight|Triggers when searched text is highlighted.|
|OnTextSearchStart|Triggers when a text search starts.|
|OnTextSelectionEnd|Triggers when text selection ends.|
|OnTextSelectionStart|Triggers when text selection starts.|
|OnThumbnailClick|Triggers when a thumbnail is clicked in the thumbnail panel of the SfPdfViewer.|
|PageChanged|Triggers when the current page number changes.|
|PageMouseover|Triggers when the mouse pointer moves over a page.|
|PrintEnd|Triggers when a print action is completed.|
|PrintStart|Triggers when a print action starts.|
|RemoveSignature|Triggers when a signature is removed from a page in the PDF document.|
|ResizeSignature|Triggers when a signature is resized on a page in the PDF document.|
|SignaturePropertiesChange|Triggers when the properties of a signature are changed on a page in the PDF document.|
|SignatureSelected|Triggers when a signature is selected on a page in the PDF document.|
|SignatureUnselected|Triggers when a signature is unselected on a page in the PDF document.|
|ZoomChanged|Triggers when the magnification value changes.|

## Adding SfPdfViewer events to Blazor component

Wrap the SfPdfViewer events inside the [PdfViewerEvents](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html) tag.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents DocumentLoaded="DocumentLoaded"></PdfViewerEvents>
</SfPdfViewer2>

@code{
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private void DocumentLoaded(LoadEventArgs args)
    {
        object PageData = args.PageData;
    }
}

```

## Created event

The Created event Triggers when the PDF Viewer component is rendered.

The following example illustrates how to load a PDF document in the Created event.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2  DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents Created="created"></PdfViewerEvents>
</SfPdfViewer2>

@code 
{
    public string DocumentPath { get; set; }

    //Triggers when the PDFViewer component is created.
    public void created()
    {
        string Link = "http://infolab.stanford.edu/pub/papers/google.pdf";
        System.Net.WebClient webClient = new System.Net.WebClient();
        //Returns the byte array containing the downloaded PDF file.
        byte[] byteArray = webClient.DownloadData(Link);
        //Converting the byte array to Base64 string and sets the document path.
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(byteArray);
    }  
}

```

## DocumentEdited Event

The DocumentEdited event Triggers when the PDF document is edited. 

The following example illustrates how to handle the DocumentEdited event. In this example, [EditingAction](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.EditingAction.html) provides information related to the edit operation. 

```cshtml

@using Syncfusion.Blazor.SfPdfViewer 

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%"> 
    <PdfViewerEvents DocumentEdited="@DocumentEdited"></PdfViewerEvents>
</SfPdfViewer2>

@code{ 
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succintly.pdf"; 
    public async Task DocumentEdited(DocumentEditedEventArgs args) 
    {
        Console.WriteLine(args.EditingAction);
    }	 
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20a%20PDF%20document%20using%20created%20event)