---
layout: post
title: Customize Print Quality in React PDF Viewer | Syncfusion
description: Learn how to customize print quality for PDF Documents in the Syncfusion React PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Customize Print Quality in React PDF Viewer

This article shows a concise, task-oriented workflow to set and verify print quality for documents rendered by the React PDF Viewer by using the [`printScaleFactor`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printscalefactor) property.

**Goal:** Set a suitable [`printScaleFactor`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printscalefactor) to improve printed output sharpness while balancing performance and memory use.

## Steps to set `printScaleFactor`

### 1. Choose a target print quality.

- Valid [`printScaleFactor`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printscalefactor) values: **0.5 – 5**. Higher values increase image sharpness and resource use.
- Default value: **1**.

### 2. Set `printScaleFactor` during initialization

It is recommended that you set the [`printScaleFactor`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printscalefactor) in the viewer options during initialization.

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
                printScaleFactor={0.5}
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

### 3. Set `printScaleFactor` after instantiation

As an alternative option, the [`printScaleFactor`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printscalefactor) can be dynamically changed during runtime

{% highlight ts %}
// Update printScaleFactor at runtime
pdfviewer.printScaleFactor = 2; // increase print resolution for upcoming prints
{% endhighlight %}

### 4. Verify output

Use browser Print Preview or produce a printed/PDF copy to confirm sharpness and acceptable render time.

## Notes

- Values outside the supported range **0.5 – 5** will be ignored and fall back to the default (`1`).
- Increasing [`printScaleFactor`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printscalefactor) raises CPU, memory, and rendering time requirements. Test on target machines and documents before setting a higher factor.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Customization%20of%20print%20Quality)

## See Also

- [Overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)