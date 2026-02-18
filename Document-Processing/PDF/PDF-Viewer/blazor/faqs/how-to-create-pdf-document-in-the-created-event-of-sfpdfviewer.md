---
layout: post
title: Create a PDF document in the SfPdfViewer Created event | Syncfusion
description: Learn how to create a PDF document in the Created event of the Syncfusion Blazor SfPdfViewer component and load it into the viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Create a PDF in the Created event of SfPdfViewer

A PDF document can be created during the SfPdfViewer `Created` event and immediately loaded in the viewer.

The following example creates a PDF in memory using the Syncfusion PDF library, converts it to a Base64 data URL, and assigns it to `DocumentPath` to load it in the SfPdfViewer.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Pdf;
@using Syncfusion.Pdf.Interactive;
@using System.IO;
@using Syncfusion.Drawing;

<SfPdfViewer2 DocumentPath="@DocumentPath" Height="100%" Width="100%">
    <PdfViewerEvents Created="created"></PdfViewerEvents>
</SfPdfViewer2>


@code{

    public SfPdfViewer2 PdfViewer { get; set; }

    //Sets the PDF document path for initial loading.
    public string DocumentPath { get; set; }

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
        //close the document
        document.Close(true);
    }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Create%20PDF%20using%20base%20library).

## See also

* [Events in Blazor SfPdfViewer Component](../events)