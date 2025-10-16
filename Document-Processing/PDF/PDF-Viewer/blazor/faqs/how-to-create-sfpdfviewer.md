---
layout: post
title: Preview the Generated PDF Document | Syncfusion
description: Learn how to display a runtime-generated PDF in the Syncfusion Blazor SfPdfViewer using the Created event.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Preview the newly created PDF file

Use the Syncfusion&reg; Blazor PDF Viewer to display a PDF that is generated at runtime when the viewer initializes using the [**Created**](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_Created) event. The sample below targets the SfPdfViewer component and binds the generated document to the [**DocumentPath**](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_DocumentPath) property via a data URI.

The following example demonstrates generating a PDF in memory and rendering it as soon as the viewer is created.

```cshtml

<SfPdfViewer2 ID="pdfviewer" 
              @ref="@PdfViewer" 
              DocumentPath="@documentPath"
              Height="100%"
              Width="100%">
    <PdfViewerEvents Created="created"></PdfViewerEvents>
</SfPdfViewer2>

@code{

    public SfPdfViewer2 PdfViewer { get; set; }
    public string documentPath { get; set; }
    private void created()
    {
        var document = new PdfDocument();
        byte[] bytes;
        //Add a new page to the PDF document.
        PdfPage page = document.Pages.Add();
        //Create a textbox field and add the properties.
        PdfTextBoxField textBoxField = new PdfTextBoxField(page, "FirstName");
        textBoxField.Bounds = new RectangleF(0, 0, 100, 20);
        textBoxField.ToolTip = "First Name";
        //Add the form field to the document.
        document.Form.Fields.Add(textBoxField);
        var stream = new MemoryStream();
        //Save the document.
        document.Save(stream);
        bytes = stream.ToArray();
        string base64string = Convert.ToBase64String(bytes);
        documentPath = "data:application/pdf;base64," + base64string;
        //close the document
        document.Close(true);
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Create%20PDF%20using%20base%20library)

## See also

* [How to create SfPdfViewer Component in a Splitter Component](./how-to-create-sfpdfviewer-in-a-splitter-component)

* [How to create a SfPdfViewer within a popup window in Blazor](./how-to-create-sfpdfviewer-in-a-popup-window)

* [How to get PDF document's data](./how-to-get-data-from-sfpdfviewer)