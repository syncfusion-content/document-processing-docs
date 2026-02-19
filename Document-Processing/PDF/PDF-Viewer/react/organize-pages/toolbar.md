---
layout: post
title: Organize Page Toolbar Customization in React | Syncfusion
description: Learn here all about Organize Page Toolbar Customization in Syncfusion React PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize page toolbar customization in React PDF Viewer control

The PDF Viewer lets applications customize the Organize Pages toolbar to show or hide tools according to project requirements. Use the `pageOrganizerSettings` API to control each tool's visibility and behavior.
## Show or hide the insert option

The `canInsert` property controls the insert tool visibility. Set it to `false` to hide the insert tool.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageOrganizerSettings={{ canInsert: false }}
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      serviceUrl='https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
      pageOrganizerSettings={{ canInsert: false }}
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Show or hide the delete option

The `canDelete` property controls the delete tool visibility. Set it to `false` to hide the delete tool.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageOrganizerSettings={{ canDelete: false }}
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      serviceUrl='https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      pageOrganizerSettings={{ canDelete: false }}
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Show or hide the rotate option

The `canRotate` property controls the rotate tool visibility. Set it to `false` to hide the rotate tool.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      pageOrganizerSettings={{ canRotate: false }}
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      serviceUrl='https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      pageOrganizerSettings={{ canRotate: false }}
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Show or hide the copy option

The `canCopy` property controls the copy tool visibility. Set it to `false` to hide the copy tool.

## Show or hide the import option

The `canImport` property controls the import tool visibility. Set it to `false` to hide the import tool.

## Show or hide the rearrange option

The `canRearrange` property controls whether pages can be rearranged. Set it to `false` to disable page reordering.