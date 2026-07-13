---
layout: post
title: Print Modes in TypeScript PDF Viewer | Syncfusion
description: Learn how to configure print modes for PDF Documents in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print Modes in the TypeScript PDF Viewer

The `printMode` property specifies how the PDF Viewer prints documents.

The `printMode` property accepts the following string values:
-   `Default`: Prints the document from the same browser window. Use this when printing should remain in the current browsing context.
-   `NewWindow`: Prints the document from a new window or tab. Use this to avoid interference with the current page; note that some browsers may block pop-ups.

![Print in New Window](../images/print-newwindow.gif)

N> Browser pop-up blockers must allow new windows or tabs when using `pdfviewer.printMode = "NewWindow"`.

The following examples show how to set the `printMode` property. It can be specified in the viewer options during initialization or assigned to the `pdfviewer.printMode` property after instantiation.
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageOrganizer, PrintMode } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageOrganizer);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
pdfviewer.printMode ="NewWindow";
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageOrganizer, PrintMode } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageOrganizer);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
});
pdfviewer.printMode ="NewWindow";
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See Also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print events](./events)