---
layout: post
title: Customize the Annotation Toolbar in React PDF Viewer | Syncfusion
description: Show or hide and customize the annotation toolbar in the EJ2 React PDF Viewer with runnable examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Annotation Toolbar in React PDF Viewer

## Overview

This guide shows how to show or hide the annotation toolbar and how to choose which tools appear and their order.

**Outcome:** A working React example that toggles the annotation toolbar and uses [`annotationToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#annotationtoolbaritems) to customize the toolbar.

## Prerequisites

- EJ2 React PDF Viewer installed and added in your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) or [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) for viewer assets when running locally

## Steps

**Step 1:** Show or hide the annotation toolbar

   - Use the [`showAnnotationToolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar#showannotationtoolbar) method on the viewer toolbar to control visibility.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
const viewer: RefObject<PdfViewerComponent> = useRef(null);
const [show, setShow] = useState(true);
const hideToolbar = () => {
    viewer.current.toolbar.showAnnotationToolbar(show);
    setShow(!show);
};
return (
    <div>
        <button onClick={hideToolbar}>Hide Annotation Toolbar</button>
        <PdfViewerComponent
            id="PdfViewer"
            ref={viewer}
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            height="600px"
            width="100%" >
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
        </PdfViewerComponent>
    </div>
);
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 2:** Customize which tools appear

   - Use [`annotationToolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#annotationtoolbaritems) with a list of [`AnnotationToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationtoolbaritem) values. The toolbar shows only items in this list.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
const annotationToolbarItems: AnnotationToolbarItem[] = [
    'HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'CommentPanelTool'
];
<PdfViewerComponent
    id="PdfViewer"
    ref={viewer}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    toolbarSettings={{ annotationToolbarItems }}
    width="100%" >
    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Complete example**

The following is a complete, runnable example. It wires a toggle button and a viewer with a custom annotation toolbar list.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { useRef, RefObject, useState } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,
    AnnotationToolbarItem, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
const annotationToolbarItems: AnnotationToolbarItem[] = [
    'HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'CommentPanelTool'
];
export default function App() {
    const viewer: RefObject<PdfViewerComponent> = useRef(null);
    const [show, setShow] = useState(true);
    const hideToolbar = () => {
        viewer.current.toolbar.showAnnotationToolbar(show);
        setShow(!show);
    };
    return (
        <div>
            <button onClick={hideToolbar}>Hide Annotation Toolbar</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewer}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                toolbarSettings={{ annotationToolbarItems }}
                height="600px"
                width="100%" >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
            </PdfViewerComponent>
        </div>
    );
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- Annotation toolbar tools do not appear.
    - **Cause**: The items are not valid [`AnnotationToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationtoolbaritem) strings or the viewer is not injected with [`Annotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation) / [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) modules.
    - **Solution**: Confirm services in `Inject` includes [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) and [`Annotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation) and use valid item names.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [customize primary toolbar](./primary-toolbar)