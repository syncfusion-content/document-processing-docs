---
layout: post
title: Migrating from Apryse to Syncfusion React PDF Viewer | Syncfusion
description: Learn here all about how to migrate from Apryse WebViewer (PDFTron) to Syncfusion React PDF Viewer and Component
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from Apryse WebViewer to Syncfusion React PDF Viewer

This guide assists developers in migrating applications built with [Apryse WebViewer](https://docs.apryse.com/web/guides/get-started/react)(formerly PDFTron WebViewer) to the [Syncfusion React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started). It focuses on architectural differences, feature mapping, and required changes in a React environment.

## Overview

Apryse WebViewer is a feature-rich PDF SDK that relies on a modular JavaScript API.

Syncfusion React PDF Viewer provides a **native React component-based PDF viewing experience** with built-in UI, annotations, forms, and performance optimizations, using an optimized JavaScript rendering engine and without external runtime dependencies.

## Architecture notes

This guide focuses on replacing an Apryse WebViewer integration with a Syncfusion React PDF Viewer component. Key considerations when migrating include the integration pattern (imperative SDK mounts vs. a declarative React component), how UI/tooling is provided (hosted JS modules vs. injected services), and feature enablement and persistence for annotations and form fields. The instructions below are framed to help migrate code, event handlers, and persistence workflows to the `PdfViewerComponent`.

## Installation

### Apryse WebViewer

```bash
npm install @pdftron/webviewer
```

### Syncfusion React PDF Viewer

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

## Viewer Initialization Comparison

### Apryse WebViewer

```js
import { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

import './App.css';

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib/webviewer',
        licenseKey: 'YOUR_LICENSE_KEY',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      },
      viewer.current
    ).then((instance) => {
      // You can access the WebViewer instance here if needed
    });
  }, []);

  return (
    <div className="webviewer" ref={viewer}></div>
  );
}

export default App;
```

### Syncfusion React PDF Viewer

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}


## Feature checklist (Syncfusion)

- [Page Navigation](../interactive-pdf-navigation/overview)
- [Text Search](../text-search/overview)
- [Annotations](../annotation/overview)
- [Form Fields](../forms/overview)

## Event Handling

### Apryse

Check [Events Guide](https://docs.apryse.com/web/guides/realtime-collaboration-client) to know more about event handling in Apryse.

```js
documentViewer.addEventListener('documentLoaded', () => {
  console.log('Document loaded');
});
```

### Syncfusion

Check [Syncfusion Events Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/events#documentload) to know more about event handling in Syncfusion React PDF Viewer.

```js
<PdfViewerComponent
  documentLoad={() => console.log('Document loaded')}
/>
```

## Migration Checklist

- Remove WebViewer initialization and DOM-based mounting
- Replace Apryse APIs with PdfViewerComponent configuration
- Map annotation and form workflows to built-in services
- Re-validate licensing and feature availability

## Tutorial: quick migration recipe

Follow these concise steps to replace an Apryse WebViewer integration with `PdfViewerComponent`.

1) Prepare the project

- Keep a working branch and add simple checks for current behavior (open document, navigate pages, annotation toggle).
- Install Syncfusion React PDF Viewer:

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

2) Add required CSS and resources

Add the Syncfusion CSS imports to your global stylesheet (e.g., `src/index.css`) and decide whether to use the CDN `resourceUrl` or host `ej2-pdfviewer-lib` locally in `public/`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
```

To host local resources, copy:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/ej2-pdfviewer-lib
```

3) Replace initialization

- Apryse mounts a WebViewer instance into a DOM element; replace that mount with a React `PdfViewerComponent`. Move configuration options into `PdfViewerComponent` props and inject only required services.

4) Migrate features incrementally

- Start with basic viewing ([document load](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload), [page navigation](../interactive-pdf-navigation/overview)), then add search, [annotations](../annotation/overview), and [forms](../forms/overview).
- For each feature, map the Apryse API usage to the Syncfusion method/event (see API mapping below), update back-end persistence for annotations if needed, and run the smoke checks.

Minimal file difference (before → after)

This small, copy-paste difference shows a single-file replacement pattern: remove the WebViewer DOM mount and replace with a React component that uses `PdfViewerComponent`.

Before (e.g., `src/viewers/OldWebViewer.js`):

```js
import WebViewer from '@pdftron/webviewer';

WebViewer({
  path: '/lib',
  initialDoc: 'sample.pdf'
}, document.getElementById('viewer'))
.then(instance => {
  const { documentViewer, annotationManager } = instance.Core;
  // existing custom wiring
});
```

After (e.g., `src/components/PdfViewer.jsx`):

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import React from 'react';
import { PdfViewerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function PdfViewer() {
  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="/assets/sample.pdf"
      resourceUrl="/assets/ej2-pdfviewer-lib"
      style={{ height: '700px' }}
    >
      <Inject services={[Toolbar]} />
    </PdfViewerComponent>
  );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}


## API mapping: Apryse WebViewer → Syncfusion equivalents

| Apryse WebViewer | Syncfusion React PDF Viewer |
|---|---|
| `WebViewer({ path, initialDoc }, element)` | Use `<PdfViewerComponent documentPath="..." resourceUrl="..." />` and [load()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#load) for programmatic loads. |
| `instance.Core.documentViewer` (page events) | [pageRenderInitiate](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#pagerenderinitiate), [pageRenderComplete](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#pagerendercomplete), [pageChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#pagechange), [documentLoad](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload) events. |
| `annotationManager` (add/serialize annotations) | [addAnnotation()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation), [importAnnotation()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importannotation), [exportAnnotation()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportannotation), [exportAnnotationsAsBase64String()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportannotationsasbase64string) methods and [annotationAdd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationadd) event. |
| `documentViewer.getAnnotationManager()` | Use `PdfViewerComponent` methods for annotations and [annotation](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotation) events. |
| Custom UI modules | Use the [Toolbar](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#toolbar) service or `ToolbarComponent` for custom toolbar items and handle `toolbarClick`. |
| Text search APIs | Enable [enableTextSearch](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enabletextsearch) or call `extractText()` for programmatic text extraction. |
| Form field APIs | Use `formField*` events: `formFieldClick`, [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields), [retrieveFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#retrieveformfields), [exportFormFieldsAsObject](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfieldsasobject). |
| Print / Export modules | [download()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#download) and Print service. |

## Expanded Migration Checklist (concrete actions)

- Create a migration branch and add simple smoke tests for: document load, page navigation, text search, add annotation, and download.
- Remove `@pdftron/webviewer` initialization and related DOM-manipulation code.
- Install and import `@syncfusion/ej2-react-pdfviewer` and required CSS.
- Replace the DOM mount with a React component: create `PdfViewer.jsx` / `PdfViewer.tsx` and update app routes.
- Add `resourceUrl` configuration or copy `ej2-pdfviewer-lib` into `public/` for local hosting.
- Inject only necessary services (e.g., `Toolbar`, `Annotation`, `FormFields`, `TextSearch`) to limit bundle size.
- Migrate event handlers:
  - Apryse `documentLoaded` → Syncfusion `documentLoad`.
  - Apryse page render callbacks → `pageRenderComplete` and `pageRenderInitiate`.
  - Apryse annotation events → Syncfusion `annotationAdd`, `annotationRemove`, etc.
- Migrate annotation persistence: adapt serialization format or use Syncfusion export/import helpers.
- Migrate form workflows to Syncfusion `formField` events and verify validation hooks.
- Replace any WebViewer-specific custom UI with Syncfusion toolbar/custom toolbar items and `toolbarClick` handling.
- Test thoroughly on supported browsers and performance with large PDFs.
- Remove obsolete tests and code paths tied to Apryse.

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- [PdfViewerComponent API index](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default)
- [load(document: string | Uint8Array, password?: string)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#load) — programmatically load a PDF.
- [download()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#download) — trigger download of current document.
- [addAnnotation(annotation: any)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation) — add an annotation programmatically.
- [exportAnnotation(annotationDataFormat)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportannotation) / [exportAnnotationsAsBase64String()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportannotationsasbase64string):   — export annotations for persistence.
- [extractText(pageIndex: number, options?: any)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#extracttext): — extract text and coordinates.
- Events: documentLoad, pageRenderComplete, pageChange, annotationAdd, annotationRemove, toolbarClick — see event anchors on the API index above (for example: https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload).

## See Also

- [Apryse WebViewer Getting Started](https://docs.apryse.com/web)
- [Syncfusion React PDF Viewer Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)