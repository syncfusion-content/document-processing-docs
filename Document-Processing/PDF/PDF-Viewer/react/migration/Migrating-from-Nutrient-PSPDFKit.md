---
layout: post
title: Migrating from Nutrient.io (PSPDFKit) to React PDF Viewer | Syncfusion
description: Learn here all about how to migrate from Nutrient.io (PSPDFKit) to Syncfusion React PDF Viewer and Component
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Migrating from Nutrient Web SDK (PSPDFKit) to Syncfusion React PDF Viewer

This guide helps you migrate applications built using [Nutrient Web SDK](https://www.nutrient.io/sdk/web/getting-started/react-vite/) (formerly PSPDFKit Web SDK) to the [Syncfusion React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started). It outlines architectural differences, feature mapping, and required changes in a React-based application.

## Overview

Nutrient Web SDK (PSPDFKit) provides a powerful Web SDK for PDF viewing and editing, typically integrated via an SDK initialization model.

Syncfusion React PDF Viewer offers a **declarative React component** with built-in UI, annotations, form handling, and optimized performance, without requiring external runtime dependencies or cloud services.

## Architecture notes

This guide focuses on replacing a Nutrient/PSPDFKit SDK integration with a Syncfusion React PDF Viewer component. Important migration considerations include the integration pattern (imperative SDK mounts vs. declarative React component), how UI/tooling is provided (SDK-provided UI vs. injected services), and how annotations and form workflows are persisted and handled. The step-by-step instructions below are designed to help migrate code, event handlers, and persistence workflows to the `PdfViewerComponent`.

## Installation

### Nutrient Web SDK (PSPDFKit / Nutrient)

The Nutrient Web SDK can be used via CDN or installed as a package. The CDN exposes `window.NutrientViewer` and is a quick way to try the SDK; for production you may prefer the package manager installation.

```bash
# CDN: add the script tag to `index.html` (example version shown)
<!-- <script src="https://cdn.cloud.nutrient.io/pspdfkit-web@1.13.0/nutrient-viewer.js"></script> -->

# or install the package for local use
npm install @nutrient-sdk/viewer
```

### Syncfusion React PDF Viewer

```bash
npm install @syncfusion/ej2-react-pdfviewer
```

## Viewer Initialization Comparison

### Nutrient Web SDK (CDN example)

{% tabs %}
{% highlight js tabtitle="Nutrient" %}
{% raw %}
import { useEffect, useRef } from 'react';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { NutrientViewer } = window;
    if (container && NutrientViewer) {
      NutrientViewer.load({
        container,
        // document can be a URL or a file in `public/`
        document: 'https://www.nutrient.io/downloads/nutrient-web-demo.pdf',
      });
    }

    return () => {
      NutrientViewer?.unload(container);
    };
  }, []);

  return (
    // Ensure explicit width/height on the container
    <div ref={containerRef} style={{ height: '100vh', width: '100vw' }} />
  );
}

export default App;
{% endraw %}
{% endhighlight %}
{% endtabs %}


### Syncfusion React PDF Viewer

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSearch,
  FormFields,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          Navigation,
          Annotation,
          TextSearch,
          FormFields,
        ]}
      />
    </PdfViewerComponent>
  );
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

### Nutrient Web SDK

Check [Events Guide](https://www.nutrient.io/guides/web/events/) to know more about event handling in Apryse.

```js
instance.addEventListener('documentLoaded', () => {
  console.log('Document loaded');
});
```

### Syncfusion Viewer

Check [Syncfusion Events Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/events#documentload) to know more about event handling in Syncfusion React PDF Viewer.

```js
<PdfViewerComponent
  documentLoad={() => console.log('Document loaded')}
  pageChange={(args) => console.log(args.currentPage)}
/>
```

## Migration Checklist

- Remove PSPDFKit SDK initialization logic
- Replace DOM-based SDK mounting with PdfViewerComponent
- Map annotation and form workflows to injected services
- Verify feature parity and licensing requirements

## How-to: minimal migration steps

Follow these concise steps to migrate a Nutrient integration to `PdfViewerComponent`.

- Ensure the Nutrient container has explicit dimensions before replacing it.
- Replace the `NutrientViewer.load()` mount with a React `PdfViewerComponent` as shown below.

Minimal file difference (before → after)

Before (e.g., `src/viewers/NutrientViewer.js`):

```js
// CDN usage or package: mounting into a DOM node
import { useEffect, useRef } from 'react';

function OldViewer() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const { NutrientViewer } = window;
    NutrientViewer?.load({ container, document: '/sample.pdf' });
    return () => NutrientViewer?.unload(container);
  }, []);
  return <div ref={containerRef} style={{ height: 600 }} />;
}
```

After (e.g., `src/components/PdfViewer.js`):

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSearch,
  FormFields,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          Navigation,
          Annotation,
          TextSearch,
          FormFields,
        ]}
      />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## API mapping: Nutrient → Syncfusion

| Nutrient Web SDK | Syncfusion React PDF Viewer |
|---|---|
| `NutrientViewer.load({ container, document })` | Use `<PdfViewerComponent documentPath="..." />` or `load()` for programmatic loads. |
| `NutrientViewer.unload(container)` | `unload()` / component unmount; call `viewerRef.current.unload()` if using ref API. |
| Viewer-level events (document loaded, page change) | `documentLoad`, `pageChange`, `pageRenderComplete` events on `PdfViewerComponent`. |
| Annotations API (add/serialize) | `addAnnotation()`, `importAnnotation()`, `exportAnnotation()`, `exportAnnotationsAsBase64String()`. |
| Search API | Enable `enableTextSearch` or use `extractText()` for programmatic extraction. |

## Reference: key Syncfusion `PdfViewerComponent` methods & events

- [PdfViewerComponent API index](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default)
- [load(document: string | Uint8Array, password?: string)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#load) — programmatically load a PDF.
- [download()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#download) — trigger download of current document.
- [addAnnotation(annotation: any)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#addannotation) — add an annotation programmatically.
- [exportAnnotation(annotationDataFormat)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportannotation) / [exportAnnotationsAsBase64String()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportannotationsasbase64string):   — export annotations for persistence.
- [extractText(pageIndex: number, options?: any)](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#extracttext): — extract text and coordinates.
- Events: documentLoad, pageRenderComplete, pageChange, annotationAdd, annotationRemove, toolbarClick — see event anchors on the API index above (for example: https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload).

## See Also

- [Nutrient Web SDK (PSPDFKit) getting started](https://www.nutrient.io/sdk/web/getting-started/react-vite)
- [Syncfusion React PDF Viewer overview & getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started-overview)
