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
|[AddSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AddSignature)|Triggers when a signature is added to a page in the PDF document.|
|[AnnotationAdded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationAdded)|Triggers when an annotation is added to a page in the PDF document.|
|[AnnotationMouseover](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMouseover)|Triggers when the mouse pointer moves over an annotation object.|
|[AnnotationMoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationMoved)|Triggers when an annotation is moved on a page in the PDF document.|
|[AnnotationPropertiesChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationPropertiesChanged)|Triggers when annotation properties are modified on a PDF page.|
|[AnnotationRemoved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationRemoved)|Triggers when an annotation is removed from a page in the PDF document.|
|[AnnotationResized](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationResized)|Triggers when an annotation is resized on a page in the PDF document.|
|[AnnotationSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationSelected)|Triggers when an annotation is selected on a page in the PDF document.|
|[AnnotationUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_AnnotationUnselected)|Triggers when an annotation is unselected on a page in the PDF document.|
|[CommandExecuted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_CommandExecuted)|Triggers when the designated command is invoked.|
|[Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_Created)|Triggers when the PDF Viewer component is created.|
|[DocumentEdited](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentEdited)|Triggers when the PDF document is edited in the SfPdfViewer.|
|[DocumentLoaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoaded)|Triggers when a document is loaded into the PDF Viewer.|
|[DocumentLoadFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentLoadFailed)|Triggers when loading a document into the PDF Viewer fails.|
|[DcoumentUnloaded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DocumentUnloaded)|Triggers when the document is closed.|
|[DownloadEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DownloadEnd)|Triggers when a download action is completed.|
|[DownloadStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_DownloadStart)|Triggers when a download action starts.|
|[ExportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportFailed)|Triggers when exporting annotations fails in the SfPdfViewer.|
|[ExportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportStarted)|Triggers when exporting annotations starts in the SfPdfViewer.|
|[ExportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExportSucceed)|Triggers when exporting annotations succeeds in the SfPdfViewer.|
|[ExtractTextCompleted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ExtractTextCompleted)|Triggers when text extraction is completed in the SfPdfViewer.|
|[FormFieldAdded](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldAdded)|Triggered when a form field is added to the PDF document.|
|[FormFieldAdding](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldAdding)|Triggered before a new form field is added, allowing validation before insertion.|
|[FormFieldClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldClick)|Triggered when a user clicks on a form field while designer mode is off.|
|[FormFieldDeleted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldDeleted)|Triggered when a form field is removed from the document.|
|[FormFieldDoubleClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldDoubleClick)|Triggered when a form field is double-clicked.|
|[FormFieldFocusIn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldFocusIn)|Triggered when focus enters a form field.|
|[FormFieldFocusOut](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldFocusOut)|Triggered when focus leaves a form field.|
|[FormFieldMouseEnter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldMouseEnter)|Triggered when the mouse hovers over a form field.|
|[FormFieldMouseLeave](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldMouseLeave)|Triggered when the mouse leaves a form field.|
|[FormFieldPropertyChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldPropertyChanged)|Triggered when a form field's properties are modified.|
|[FormFieldResized](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldResized)|Triggered when a form field is resized.|
|[FormFieldSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldSelected)|Triggered when a form field is selected.|
|[FormFieldsExported](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldsExported)|Triggered when form fields are successfully exported.|
|[FormFieldsExportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldsExportFailed)|Triggered when form fields export operation fails.|
|[FormFieldsExporting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldsExporting)|Triggered before form fields are exported, allowing customization of the export process.|
|[FormFieldsImported](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldsImported)|Triggered when form fields are successfully imported.|
|[FormFieldsImportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldsImportFailed)|Triggered when form fields import operation fails.|
|[FormFieldsImporting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldsImporting)|Triggered before form fields are imported, allowing validation or modifications.|
|[FormFieldUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_FormFieldUnselected)|Triggered when a form field is unselected.|
|[ImportFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportFailed)|Triggers when importing annotations fails in the PDF document.|
|[ImportStarted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportStarted)|Triggers when importing annotations starts in the PDF document.|
|[ImportSucceed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ImportSucceed)|Triggers when importing annotations succeeds in the PDF document.|
|[MoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_MoveSignature)|Triggers when a signature is moved on a page in the PDF document.|
|[OnAnnotationDoubleClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnAnnotationDoubleClick)|Triggers when an annotation is double-clicked.|
|[OnHyperlinkClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnHyperlinkClick)|Triggers when a hyperlink in the PDF document is clicked.|
|[OnHyperlinkMouseOver](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnHyperlinkMouseOver)|Triggers when a hyperlink in the PDF document is hovered.|
|[OnPageClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnPageClick)|Triggers when a mouse click is performed on a page in the PDF document.|
|[OnTextSearchComplete](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchComplete)|Triggers when a text search is completed.|
|[OnTextSearchHighlight](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchHighlight)|Triggers when searched text is highlighted.|
|[OnTextSearchStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchStart)|Triggers when a text search starts.|
|[OnTextSelectionEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSelectionEnd)|Triggers when text selection ends.|
|[OnTextSelectionStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSelectionStart)|Triggers when text selection starts.|
|[OnThumbnailClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnThumbnailClick)|Triggers when a thumbnail is clicked in the thumbnail panel of the SfPdfViewer.|
|[PageChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PageChanged)|Triggers when the current page number changes.|
|[PageMouseover](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PageMouseover)|Triggers when the mouse pointer moves over a page.|
|[PrintEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintEnd)|Triggers when a print action is completed.|
|[PrintStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_PrintStart)|Triggers when a print action starts.|
|[RemoveSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_RemoveSignature)|Triggers when a signature is removed from a page in the PDF document.|
|[ResizeSignature](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ResizeSignature)|Triggers when a signature is resized on a page in the PDF document.|
|[SignaturePropertiesChange](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignaturePropertiesChange)|Triggers when the properties of a signature are changed on a page in the PDF document.|
|[SignatureSelected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureSelected)|Triggers when a signature is selected on a page in the PDF document.|
|[SignatureUnselected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_SignatureUnselected)|Triggers when a signature is unselected on a page in the PDF document.|
|[ToolbarClicked](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ToolbarClicked)|Triggers an event when a Custom Toolbar Item is clicked in the Toolbar.|
|[ValidateFormFields](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ValidateFormFields)|Triggered when form fields are validated.|
|[ZoomChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_ZoomChanged)|Triggers when the magnification value changes.|

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

## See Also

* [Annotation Events in Blazor PDF Viewer](./annotation/events)
* [Form Designer Events in Blazor PDF Viewer](./form-designer/events)