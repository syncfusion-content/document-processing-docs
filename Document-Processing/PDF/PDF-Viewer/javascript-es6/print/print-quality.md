---
layout: post
title: Customize Print Quality in TypeScript PDF Viewer | Syncfusion
description: Learn how to customize print quality in the Syncfusion TypeScript PDF Viewer component.
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
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
pdfviewer.printScaleFactor = 0.5;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
});
pdfviewer.printScaleFactor = 0.5;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Customization%20%20of%20Print%20Quality)