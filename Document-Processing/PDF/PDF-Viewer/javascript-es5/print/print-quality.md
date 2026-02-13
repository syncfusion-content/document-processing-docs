---
layout: post
title: Customize Print Quality in JavaScript PDF Viewer | Syncfusion
description: Learn how to customize print quality for PDF Documents in the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Customize print quality using the printScaleFactor API

The PDF Viewer allows you to adjust the print rendering quality by setting the [printScaleFactor](https://ej2.syncfusion.com/documentation/api/pdfviewer#printScaleFactor) property. Valid values range from 0.5 to 5. Higher values produce sharper output but also increase rendering time.

By default, `printScaleFactor` is set to 1.

N> Values outside the 0.5–5 range revert to the standard print quality (value 1).

The following example demonstrates how to update the scale factor before printing.
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
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.printScaleFactor = 0.5;
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
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
});
pdfviewer.printScaleFactor = 0.5;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See Also

- [Overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)