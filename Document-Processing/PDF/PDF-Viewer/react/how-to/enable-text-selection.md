---
layout: post
title: Enable or disable text selection in React PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the React PDF Viewer using the enableTextSelection property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in React PDF Viewer

This guide explains how to enable or disable text selection in the Syncfusion React PDF Viewer using both initialization-time settings and runtime toggling.

**Outcome:** By the end of this guide, you will be able to control whether users can select text in the PDF Viewer.

## Steps to toggle text selection

### 1. Disable text selection at initialization

Follow one of these steps to disable text selection when the viewer first loads:

**Remove the text selection module**

Remove the [`TextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textselection) module in the services array to disable text selection during initialization.

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    ref={viewerRef}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    style={{ height: '100%' }}
>
    <Inject
        services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
            ThumbnailView, Print, TextSearch, FormFields, FormDesigner, PageOrganizer
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

**Set `enableTextSelection` to false**

Use the [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) during initialization to disable or enable text selection. The following example disables the text selection during initialization

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    ref={viewerRef}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    style={{ height: '100%' }}
    enableTextSelection={false}
>
    <Inject
        services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
            ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

### 2. Toggle text selection at runtime

The [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) property can also be used to toggle the text selection at runtime.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef, RefObject } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const enableTextSelection = () => {
        if (viewerRef.current) {
            viewerRef.current.enableTextSelection = true;
        }
    }
    const disableTextSelection = () => {
        if (viewerRef.current) {
            viewerRef.current.enableTextSelection = false;
        }
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={enableTextSelection}>Enable Text Selection</button>
            <button onClick={disableTextSelection}>Disable Text Selection</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> When text selection is disabled, the viewer automatically switches to pan mode.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

N> Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

## Troubleshooting

If text selection remains active, ensure that the [`TextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textselection) is removed in `Inject` or [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) is set to `false`.

## See also

- [Text Selection API reference](../text-selection/reference)
- [React PDF Viewer events](../events)