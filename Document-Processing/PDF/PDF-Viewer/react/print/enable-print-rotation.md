---
layout: post
title: Enable Print Rotation in React PDF Viewer | Syncfusion
description: Learn how to enable print rotation for landscape documents in the Syncfusion React PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Enable print rotation in React PDF Viewer

This guide shows how to enable automatic rotation of landscape pages during printing so they match the paper orientation and reduce clipping. Use [`enablePrintRotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprintrotation) when printing documents that include landscape pages and you want them rotated to match the printer paper orientation.

## Prerequisites

- The [`Print`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print) module must be injected into [`PdfViewerComponent`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer).

## Steps to enable print rotation

1. Inject the required modules (including [`Print`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print)) into [`PdfViewerComponent`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer).
2. Set [`enablePrintRotation={true}`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprintrotation) in the PDF Viewer during initialization.

## Example

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
        <div style={{ height: '100vh' }}>
            <PdfViewerComponent
                id="PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
                enablePrintRotation={true}
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

![Print rotation demo showing landscape pages rotated for printing](../../javascript-es6/images/print-rotate.gif)

[View sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## Troubleshooting

- If you need to preserve original page orientation for archival printing, set [`enablePrintRotation: false`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprintrotation).
- Confirm that injected modules include [`Print`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print) or the property will have no effect.

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Print modes](./print-modes)
- [Print events](./events)