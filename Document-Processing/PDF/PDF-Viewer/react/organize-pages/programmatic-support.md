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

The PDF Viewer provides comprehensive programmatic support for organizing pages, allowing you to integrate and manage PDF functionalities directly within your application. This section details the available APIs to enable, control, and interact with the page organization features.

## Enable or disable the page organizer

The page organizer feature can be enabled or disabled using the `enablePageOrganizer` property. By default, this feature is enabled.

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

You can control whether the page organizer dialog opens automatically when a document is loaded using the `isPageOrganizerOpen` property. The default value is `false`.

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

The `pageOrganizerSettings` API allows you to customize the page management functionalities. You can enable or disable actions such as deleting, inserting, rotating, copying, importing, and rearranging pages, as well as configure thumbnail zoom settings. By default, all actions are enabled, and standard zoom settings are applied.

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
