---
layout: post
title: Redaction Programmatic support in React PDF Viewer | Syncfusion
description: Learn how to add, delete, update, and apply redaction annotations programmatically in the Syncfusion React PDF Viewer.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Programmatic support for redaction in React PDF Viewer

## Overview

This guide shows how to add, edit, delete, mark full pages, and apply redaction annotations programmatically in the Syncfusion React PDF Viewer. 

**Outcome**: You will have working code to control redactions from UI buttons and to set default redaction properties.

## Prerequisites

- EJ2 React PDF Viewer installed and configured in your project. See [getting started guide](../getting-started).
- A [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) or service endpoint if using remote viewer assets (examples below use Syncfusion CDN). Ensure browser access to the CDN.

## Steps

1. Enable the Redaction toolbar entry so the UI exposes redaction controls.
2. Add redaction annotations programmatically with [`addAnnotation('Redaction', ...)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#addannotation).
3. Delete annotations by id via `deleteAnnotationById(id)` or by selecting and deleting in the UI.
4. Update existing redaction properties with [`editAnnotation(annotationObject)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#editannotation).
5. Mark entire pages using [`addPageRedactions([pageNumbers])`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#addpageredactions).
6. Permanently apply redactions with [`redact()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#redact) (irreversible — back up originals).
7. Configure [`redactionSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/redactionsettings) on the viewer for defaults used when creating redactions.

## Quick example (individual operations)

- To enable the Redaction toolbar item, add `RedactionEditTool` to [`toolbarSettings.toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems).

- Add a redaction:

```ts
viewerRef.current.annotation.addAnnotation('Redaction', {
  bound: { x: 200, y: 480, width: 150, height: 75 },
  pageNumber: 1,
  overlayText: 'Confidential',
  fillColor: '#000000'
} as RedactionSettings);
```

- Delete a redaction by id:

```js
const id = viewerRef.current.annotationCollection?.[0]?.annotationId;
viewerRef.current.annotationModule.deleteAnnotationById(id);
```

- Edit a redaction (modify object then call edit):

```ts
const annot: any = viewerRef.current.annotationCollection.find(a => a.subject === 'Redaction');
annot.overlayText = 'Edited';
viewerRef.current.annotation.editAnnotation(annot);
```

- Mark full pages:

```ts
viewerRef.current.annotation.addPageRedactions([1,3]);
```

- Apply redactions (permanent):

```ts
viewerRef.current.annotation.redact();
```

## Complete example

The following example shows a PdfViewer and buttons for Add / Delete / Edit / Page Redact / Apply Redaction and sets default redaction properties.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { useRef, useEffect, RefObject } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields,
    FormDesigner, Inject, ToolbarItem, RedactionSettings, ToolbarSettingsModel
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);
    const documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    const resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

    const toolbarSettings: ToolbarSettingsModel = {
        toolbarItems: [
            'OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool',
            'SelectionTool', 'CommentTool', 'AnnotationEditTool', 'RedactionEditTool', 'SearchOption',
            'PrintOption', 'DownloadOption'
        ] as ToolbarItem[]
    };

    useEffect(() => {
        if (!viewerRef.current) return;
        // Set default redaction properties
        viewerRef.current.redactionSettings = {
            overlayText: 'Confidential',
            markerFillColor: '#FF0000',
            markerBorderColor: '#000000',
            isRepeat: false,
            fillColor: '#000000',
            fontColor: '#FFFFFF',
            fontSize: 12,
            fontFamily: 'Helvetica',
            textAlignment: 'Center'
        };
    }, []);

    const addRedaction = (): void => {
        const viewer = viewerRef.current as PdfViewerComponent;
        if (!viewer) return;
        viewer.annotation.addAnnotation('Redaction', {
            bound: { x: 150, y: 400, width: 200, height: 40 },
            pageNumber: 1,
            overlayText: 'Confidential',
            fillColor: '#000000',
            fontColor: '#FFFFFF'
        } as RedactionSettings);
    };

    const deleteFirstAnnotation = (): void => {
        const viewer = viewerRef.current;
        const id = viewer?.annotationCollection?.[0]?.annotationId;
        if (id) viewer.annotationModule.deleteAnnotationById(id);
    };

    const editRedaction = (): void => {
        const viewer = viewerRef.current;
        const collection = viewer?.annotationCollection || [];
        const annot = collection.find(a => a.subject === 'Redaction');
        if (annot) {
            annot.overlayText = 'Edited';
            annot.fillColor = '#333333';
            annot.fontSize = 14;
            viewer.annotation.editAnnotation(annot);
        }
    };

    const addPageRedactions = (): void => {
        viewerRef.current.annotation.addPageRedactions([1]);
    };

    const applyRedactions = (): void => {
        // WARNING: irreversible
        viewerRef.current.annotation.redact();
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <button onClick={addRedaction}>Add Redaction</button>
                <button onClick={deleteFirstAnnotation}>Delete First Annotation</button>
                <button onClick={editRedaction}>Edit Redaction</button>
                <button onClick={addPageRedactions}>Mark Page Redaction</button>
                <button onClick={applyRedactions}>Apply Redactions (Permanent)</button>
            </div>

            <PdfViewerComponent
                id="container"
                ref={viewerRef}
                documentPath={documentPath}
                resourceUrl={resourceUrl}
                toolbarSettings={toolbarSettings}
                style={{ height: '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result**: The viewer loads the sample PDF. Clicking the buttons will add, delete, edit, mark pages for redaction, or permanently apply redactions.

## Troubleshooting

- No viewer assets / missing icons: confirm [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) is reachable from the browser and points to a compatible ej2-pdfviewer-lib version.
- `viewerRef.current` is undefined: ensure the `PdfViewerComponent` renders before calling APIs (wrap API calls in event handlers or use `useEffect` after mount).
- Applying redactions fails: ensure the viewer has finished loading the document and that any server-side redaction workflows (if used) are available. Always backup originals before applying.

## Related topics

- [Overview of Redaction](./overview)
- [Redaction UI interactions](./ui-interactions)
- [Redaction Toolbar](./toolbar)
- [Redaction in Mobile view](./mobile-view)
- [Search Text and Redact](./search-redact)