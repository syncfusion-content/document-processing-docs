---
layout: post
title: Enable Print Rotation in JavaScript (ES5) PDF Viewer | Syncfusion
description: Enable print rotation in the JavaScript (ES5) PDF Viewer so landscape documents are printed in the correct orientation without manual adjustment.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Enable Print Rotation in JavaScript (ES5) PDF Viewer

Use the `enablePrintRotation` property to enable automatic rotation of landscape pages during printing so they match the paper orientation. Enable this setting to reduce clipping of landscape pages; disable it to preserve the document's original orientation. Ensure the `Print` module is injected before using this property — see the PdfViewer API reference: [PdfViewer API Reference](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default).

![Print rotation demo showing landscape pages rotated for printing](../../javascript-es6/images/print-rotate.gif)

{% tabs %}
{% highlight js tabtitle="Standalone" %}

// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    enablePrintRotation: true
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
    enablePrintRotation: true
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See Also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Print modes](./print-modes)
- [Print events](./events)