---
layout: post
title: Render JavaScript PDF Viewer in Blazor SfPdfViewer | Syncfusion
description: Learn how to render the EJ2 JavaScript PDF Viewer inside the Syncfusion Blazor SfPdfViewer using JavaScript interop, including setup and usage notes.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Render JS PDF Viewer inside Blazor SfPdfViewer Component

The Syncfusion&reg; Blazor SfPdfViewer component supports rendering the EJ2 JavaScript PDF Viewer inside a Blazor page using JavaScript interop.

The following steps show how to embed the JavaScript PDF Viewer in a Blazor component.

>Note: Ensure that the EJ2 PDF Viewer scripts and styles are referenced in the application, and that the serviceUrl points to a reachable EJ2 PDF Viewer web service endpoint.

**Step 1:** Add a JavaScript file to the application and reference it in the head element.

```cshtml

<head>
    <script src="sample.js" type="text/javascript"></script>
</head>

```

**Step 2:** Add the following code to the newly created JavaScript file to render the EJ2 PDF Viewer inside Blazor.

```javascript

window.renderJsPdfViewer = (id) => {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer({
        documentPath: "PDF_Succinctly.pdf",
        serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'
    });
    ej.pdfviewer.PdfViewer.Inject(
        ej.pdfviewer.Toolbar, 
        ej.pdfviewer.Magnification,
        ej.pdfviewer.BookmarkView, 
        ej.pdfviewer.ThumbnailView, 
        ej.pdfviewer.TextSelection,
        ej.pdfviewer.TextSearch, 
        ej.pdfviewer.Print, 
        ej.pdfviewer.Navigation,
        ej.pdfviewer.LinkAnnotation, 
        ej.pdfviewer.Annotation,
        ej.pdfviewer.FormFields, 
        ej.pdfviewer.FormDesigner);
    viewer.appendTo('#' + id);
};

```

**Step 3:** Add the following code to the Blazor component.

```cshtml

@inject IJSRuntime JS

<div id="pdfViewer" style="height:640px; width:100%;"></div>

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JS.InvokeVoidAsync("renderJsPdfViewer", "pdfViewer");
        }
    }
}

```

N> The PDF Viewer is rendered as a JavaScript component. C# APIs on SfPdfViewer are not available in this approach; use JavaScript interop to call the PDF Viewer APIs.

[View Sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Render%20JS%20PDF%20Viewer%20component%20in%20Blazor)