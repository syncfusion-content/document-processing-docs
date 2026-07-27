---
layout: post
title: Print Modes in React PDF Viewer | Syncfusion
description: Learn how to configure print modes for PDF documents in the Syncfusion React PDF Viewer to control printing behavior and optimize output quality.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print Modes in React PDF Viewer

This guide shows how to set the PDF Viewer [`printMode`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printmode) so PDFs print from the current window or from a new window/tab.

## Prerequisites

- A React app with the PDF Viewer and [`Print`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print) module injected.

## Steps to set print mode

**Step 1:** The [`printMode`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printmode) property accepts the following values:
   - `Default` — print from the same browser window. This is the default value when `printMode` is not set.
   - `NewWindow` — print from a new window or tab (may be blocked by pop-up blockers).

**Step 2:** Set [`printMode`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printmode) during viewer initialization (recommended):

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner, FormFields,
    PageOrganizer, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
        <div style={{ height: '100vh' }}>
            <PdfViewerComponent
                id="PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                printMode="NewWindow"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

![Print in New Window](../../javascript-es6/images/print-newwindow.gif)

**Step 3:** Print mode can also be changed at runtime after the viewer is created:

```ts
// switch to NewWindow at runtime
pdfviewer.printMode = 'NewWindow';
```

## Quick reference

- `Default`: Print from the same window (default).
- `NewWindow`: Print from a new window or tab.

N> Browser pop-up blockers must allow new windows or tabs when using `pdfviewer.printMode = 'NewWindow'`.

[View live examples and samples on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print events](./events)