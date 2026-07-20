---
layout: post
title: Create a PDF document in the SfPdfViewer Created event | Syncfusion
description: Learn how to create a PDF document in the Created event of the Blazor SfPdfViewer component and load it into the viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Create a PDF in the Created event of SfPdfViewer

A PDF document can be created during the SfPdfViewer [`Created`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_Created) event and loaded in the viewer by converting it to a Base64 data URL and assigning it to the [`DocumentPath`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_DocumentPath) property.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Pdf;
@using Syncfusion.Pdf.Interactive;
@using System.IO;
@using Syncfusion.Drawing;

<SfPdfViewer2 @ref="PdfViewer" DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents Created="created"></PdfViewerEvents>
</SfPdfViewer2>


@code{

    private SfPdfViewer2 PdfViewer { get; set; }

    //Sets the PDF document path after the viewer is created.
    private string DocumentPath { get; set; }

    //This event triggers when the SfPdfViewer is created.
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
        //Sets the document path as base64 string.
        DocumentPath = "data:application/pdf;base64," + base64string;
        //Close the document
        document.Close(true);
    }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Create%20PDF%20using%20base%20library)

## See also

* [How to create SfPdfViewer Component in a Splitter Component](./how-to-create-sfpdfviewer-in-a-splitter-component)
* [How to create a SfPdfViewer within a popup window in Blazor](./how-to-create-sfpdfviewer-in-a-popup-window)
* [How to get PDF document's data](./how-to-get-data-from-sfpdfviewer)
* [Events of SfPdfViewer Component](../events)
