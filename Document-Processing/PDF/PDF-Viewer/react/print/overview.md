---
layout: post
title: Print PDF in React PDF Viewer | Syncfusion
description: Enable and customize printing, configure print events, cancel print, and monitor printing in the Syncfusion React PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print PDF in React PDF Viewer

The React PDF Viewer includes built-in printing via the toolbar and APIs so users can control how documents are printed and monitor the process.

Select **Print** in the built-in toolbar to open the browser print dialog.

![Browser print dialog from PDF Viewer](../../javascript-es6/images/print.gif)

## Enable or Disable Print in React PDF Viewer

The Syncfusion React PDF Viewer component lets users print a loaded PDF document through the built-in toolbar or programmatic calls. Control whether printing is available by setting the [`enablePrint`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprint) property (`true` enables printing; `false` disables it).

The following React examples render the PDF Viewer with printing disabled.

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
                enablePrint={false}
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

## Print programmatically in React PDF Viewer

To start printing from code, call the [`pdfviewer.print.print()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print#print-1) method after the document is fully loaded. This approach is useful when wiring up custom UI or initiating printing automatically; calling print before the document finishes loading can result in no output or an empty print dialog.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { RefObject, useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);
    const printPdf = () => {
        viewerRef.current.print.print();
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={printPdf}>Print</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
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

## Key capabilities

- Enable or disable printing with the [`enablePrint`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enableprint) property
- Start printing from UI (toolbar Print) or programmatically using [`print.print()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print#print-1).
- Control output quality with the [`printScaleFactor`](./print-quality) property (0.5–5)
- Auto‑rotate pages during print using [`enablePrintRotation`](./enable-print-rotation)
- Choose where printing happens with [`printMode`](./print-modes) (Default or NewWindow)
- Track the life cycle with [`printStart` and `printEnd` events](./events)

## Troubleshooting

- Ensure the [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) value matches the deployed `ej2-pdfviewer-lib` version.
- Calling [`print()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print#print-1) launches the browser print dialog; behavior varies by browser and may be affected by popup blockers or browser settings.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See Also

- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)
