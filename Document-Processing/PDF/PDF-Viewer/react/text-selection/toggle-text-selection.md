---
layout: post
title: Enable or disable text selection in React PDF Viewer | Syncfusion
description: Learn how to enable or disable the text selection actions in the Syncfusion React PDF Viewer component.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in React PDF Viewer

This guide explains how to perform common tasks involving text selection in the Syncfusion React PDF Viewer, including enabling or disabling selection.

## Steps to toggle text selection

### 1. Disable text selection at initialization

- Remove the [`TextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textselection) module in the services array to disable text selection during initialization.

{% tabs %}
{% highlight ts %}
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

- Use the [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) during initialization to disable or enable text selection. The following example disables the text selection during initialization

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

N> Disabling text selection, automatically switches to pan mode

## Troubleshooting

If text is still selectable, ensure that the [`TextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textselection) is removed in `Inject` or [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) is set to `false`.

## See also

- [Text Selection API reference](./reference)
- [React PDF Viewer events](../events)