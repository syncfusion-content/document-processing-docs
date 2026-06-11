---
layout: post
title: Customize the redaction toolbar in React PDF Viewer | Syncfusion
description: Learn how to customize the redaction toolbar in the Syncfusion React PDF Viewer by showing or hiding default items.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the redaction toolbar in React PDF Viewer

This guide shows how to enable and control the redaction toolbar in the Syncfusion React PDF Viewer, including showing/hiding it from the primary toolbar programmatically. 

**Outcome**: a working viewer with the Redaction toolbar available and code to toggle it.

## Prerequisites

- EJ2 React PDF Viewer installed and imported. See [getting started guide](../getting-started)
- A public PDF or service endpoint (the examples use a CDN-hosted PDF and the Syncfusion resource URL).

## Steps

### Enable redaction toolbar

Enable the redaction toolbar by adding `RedactionEditTool` to [`toolbarSettings.toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems).

**Example code**:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields,
    FormDesigner, Inject, ToolbarItem
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const toolbarSettings = {
        toolbarItems: [
            'OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool',
            'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool',
            'RedactionEditTool', 'FormDesignerEditTool', 'SearchOption', 'PrintOption', 'DownloadOption'
        ] as ToolbarItem[]
    };

    return (
        <div style={{ height: '680px' }}>
            <PdfViewerComponent
                id="container"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib"
                toolbarSettings={toolbarSettings}
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result**: the primary toolbar contains the Redaction icon. Clicking it opens the redaction toolbar.

### Toggle redaction toolbar

- Toggle the redaction toolbar using the primary toolbar icon.

    - When `RedactionEditTool` is included, the viewer shows a redaction icon. Clicking it toggles the redaction toolbar without additional code.

- Show or hide the redaction toolbar programmatically.

   - Use the viewer reference and call [`toolbar.showRedactionToolbar(false)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar#showredactiontoolbar) to hide the redaction toolbar:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, Inject, ToolbarItem } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef = React.useRef(null);

    const toolbarSettings = {
        toolbarItems: [
            'OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool', 'RedactionEditTool', 'FormDesignerEditTool', 'SearchOption', 'PrintOption', 'DownloadOption'
        ] as ToolbarItem[]
    };

    const showRedactionToolbar = () => viewerRef.current && viewerRef.current.toolbar.showRedactionToolbar(true);
    const hideRedactionToolbar = () => viewerRef.current && viewerRef.current.toolbar.showRedactionToolbar(false);

    return (
        <div>
            <div style={{ margin: '8px 0', display: 'flex', gap: '8px' }}>
                <button type='button' onClick={showRedactionToolbar}>Show Redaction Toolbar</button>
                <button type='button' onClick={hideRedactionToolbar}>Hide Redaction Toolbar</button>
            </div>
            <PdfViewerComponent
                ref={viewerRef}
                id='container'
                resourceUrl='https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib'
                documentPath='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
                toolbarSettings={toolbarSettings}
                style={{ height: '640px' }}
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result**: the two buttons above the viewer show and hide the redaction toolbar on demand.

## Troubleshooting

- If redaction icon not visible, ensure if `'RedactionEditTool'` is added to [`toolbarSettings.toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems) and [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) is included in `<Inject services=[...] />`.

- If toolbar buttons have no effect, verify [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#resourceurl) points to a reachable `ej2-pdfviewer-lib` bundle appropriate for your viewer version.

- If viewer fails to load PDF, use a public PDF URL or configure a server-side service endpoint.

## Related topics

- [Adding the redaction annotation in PDF viewer](../redaction/overview)
- [Redaction UI interactions](./ui-interactions)
- [Programmatic support](./programmatic-support)
- [Mobile view](./mobile-view)
- [Search Text and Redact](./search-redact)