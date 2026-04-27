---
layout: post
title: Print Overview in TypeScript PDF Viewer | Syncfusion
description: Enable and customize printing, configure print events, cancel print, and monitor printing in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print Overview in TypeScript PDF Viewer Control

The JavaScript PDF Viewer includes built-in printing via the toolbar and APIs so users can control how documents are printed and monitor the process.

Select **Print** in the built-in toolbar to open the browser print dialog.

![Browser print dialog from PDF Viewer](../../javascript-es6/images/print.gif)

## Enable or Disable Print in TypeScript PDF Viewer

The Syncfusion JavaScript PDF Viewer component lets users print a loaded PDF document through the built-in toolbar or programmatic calls. Control whether printing is available by setting the `enablePrint` property (`true` enables printing; `false` disables it).

The following TypeScript examples render the PDF Viewer with printing enabled in standalone and server-backed applications.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enablePrint: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enablePrint: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'});
pdfviewer.appendTo('#PdfViewer');

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enablePrint: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});

pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Print programmatically in Typescript PDF Viewer

To start printing from code, call the `pdfviewer.print.print()` method after the document is fully loaded. This approach is useful when wiring up custom UI or initiating printing automatically; calling print before the document finishes loading can result in no output or an empty print dialog.

```html
<button id="print">Print PDF</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');
//print on button click
const printButton = document.getElementById('print');
if (printButton) {
    printButton.onclick = function () {
        pdfviewer.print.print();
    }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
});
pdfviewer.appendTo('#PdfViewer');
//print on button click
const printButton = document.getElementById('print');
if (printButton) {
    printButton.onclick = function () {
        pdfviewer.print.print();
    }
}

{% endhighlight %}
{% endtabs %}

## Key capabilities

- Enable or disable printing with the enablePrint property
- Start printing from UI (toolbar Print) or programmatically using print.print()
- Control output quality with the printScaleFactor property (0.5–5)
- Auto‑rotate pages during print using enablePrintRotation
- Choose where printing happens with printMode (Default or NewWindow)
- Track the lifecycle with printStart and printEnd events

N> Ensure the `resourceUrl` value matches the deployed `ej2-pdfviewer-lib` version. Calling `print()` launches the browser print dialog; behavior varies by browser and may be affected by popup blockers or browser settings.

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See Also

- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)
