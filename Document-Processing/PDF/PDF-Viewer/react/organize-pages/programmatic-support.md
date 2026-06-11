---
layout: post
title: Programmatic Support for Organize Pages in React PDF Viewer control | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion React PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Support for Organize Pages in React PDF Viewer control

The PDF Viewer exposes programmatic APIs for organizing pages so applications can integrate page-management workflows (for example: enable/disable organizer, open/close the organizer, and customize behavior). This section documents the available properties, methods, and settings used to control the Organize Pages experience.

## Enable or disable the page organizer

The page organizer feature can be enabled or disabled using the `enablePageOrganizer` property. By default, the page organizer is enabled.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  return (
    <PdfViewerComponent
      id="PdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      enablePageOrganizer={true}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  return (
    <PdfViewerComponent
      id="PdfViewer"
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      enablePageOrganizer={true}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

Use the `isPageOrganizerOpen` property to control whether the page organizer opens automatically when a document loads. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  return (
    <PdfViewerComponent
      id="PdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      isPageOrganizerOpen={true}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  return (
    <PdfViewerComponent
      id="PdfViewer"
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      isPageOrganizerOpen={true}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

The `pageOrganizerSettings` API customizes page-management capabilities. Use it to enable or disable actions (delete, insert, rotate, copy, import, rearrange) and to configure thumbnail zoom settings. By default, actions are enabled and standard zoom settings apply.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  const pageOrganizerSettings = { canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5 };
  return (
    <PdfViewerComponent
      id="PdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageOrganizerSettings={pageOrganizerSettings}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
  const pageOrganizerSettings = { canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5 };
  return (
    <PdfViewerComponent
      id="PdfViewer"
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      pageOrganizerSettings={pageOrganizerSettings}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

{% endhighlight %}
{% endtabs %}

## Open the page organizer dialog

The `openPageOrganizer` method programmatically opens the page organizer dialog, providing access to page management tools.

```ts
import React from 'react';
import { PdfViewerComponent, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

let viewer: PdfViewerComponent | null;

export default function App() {
  return (
    <div>
      <button id="openPageOrganizer" onClick={() => viewer && (viewer as any).pageOrganizer.openPageOrganizer()}>
        Open PageOrganizer Pane
      </button>
      <PdfViewerComponent id="PdfViewer" ref={(scope) => { viewer = scope; }}>
        {/* other props and Inject as shown above */}
      </PdfViewerComponent>
    </div>
  );
}
```

## Close the page organizer dialog

The `closePageOrganizer` method programmatically closes the page organizer dialog.

```ts
import React from 'react';
import { PdfViewerComponent } from '@syncfusion/ej2-react-pdfviewer';

let viewer: PdfViewerComponent | null;

export default function App() {
  return (
    <div>
      <button id="closePageOrganizer" onClick={() => viewer && (viewer as any).pageOrganizer.closePageOrganizer()}>
        Close PageOrganizer Pane
      </button>
      <PdfViewerComponent id="PdfViewer" ref={(scope) => { viewer = scope; }}>
        {/* other props and Inject as shown above */}
      </PdfViewerComponent>
    </div>
  );
}
```
