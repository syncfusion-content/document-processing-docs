---
layout: post
title: Organize Pages in React PDF Viewer component | Syncfusion
description: Learn here all about Organize Pages in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Organize pages in React PDF Viewer component

The PDF Viewer enables efficient page management. Whether adding new pages, removing unwanted pages, rotating pages, rearranging pages within a document, or copying pages, the page organizer provides the required tools.

## Getting started

Open a PDF in the viewer and open the left vertical toolbar; select the `Organize Pages` option to begin.

![Organize pages toolbar](images/organize-page.png)

The organize pages dialog lets users rotate, rearrange, insert, copy, import, and delete pages.

### Rotating PDF pages

You can adjust the orientation of PDF pages to ensure proper alignment. The rotate icon offers the following options:

* `Rotate clockwise`: Rotate the selected pages 90 degrees clockwise.
* `Rotate counter-clockwise`: Rotate the selected pages 90 degrees counter-clockwise.

### Rearranging PDF pages

Change the page order by dragging a page thumbnail to the desired position.

* `Drag and drop`: Click and drag a thumbnail to a new position, then release to update the order.

![Rotate and rearrange pages animation](images/rotate-rearrange.gif)

### Inserting new pages

Effortlessly add new pages to your document with the following options:

* `Insert blank page left`: Insert a blank page to the left of the selected page using the respective icon.
* `Insert blank page right`: Insert a blank page to the right of the selected page using the corresponding icon.

### Deleting PDF pages

Remove unwanted pages from the document:

* `Select pages to delete`: Click the page thumbnails to select one or more pages.
* `Delete selected pages`: Use the delete action in the organize pages pane to remove the selected pages.

### Copying PDF pages

Duplicate pages within the PDF document:

* `Select pages to copy`: Select the page thumbnails to duplicate and use the copy action. Copies are inserted to the right of the selected page; multiple copies are supported.

![Insert, delete, and copy pages animation](images/insert-delete-copy.gif)

### Importing a PDF Document

Seamlessly import a PDF document into your existing document:

* `Import PDF document`: Click **Import Document** and select a PDF to import. If a single page is selected, the imported document’s thumbnails are inserted to the right of the selected page; if multiple or no pages are selected, the imported pages are added at the start. Use **Save** or **Save As** to merge and download the updated document. Imported pages can be repositioned, deleted, or have blank pages inserted around them.

![Import a PDF into the document](images/import.gif)

### Selecting all pages

Select all pages to perform actions across the entire document.

![Select all pages control](images/selectall.png)

### Zooming Page Thumbnails

Adjust thumbnail size within the organizer panel using the zoom slider:

* Increase or decrease thumbnail size for better visibility.
* Zoom in to inspect page details.
* Zoom out to view more pages at once.

This is useful for documents with complex layouts or small details.

![Zoom page thumbnails](./images/zoomOrganize.png)

### Real-time updates

Changes in the organizer are reflected immediately in the PDF Viewer. Click **Save** to persist modifications.

### SaveAs functionality

Use **Save As** to download the modified version of the PDF document.

## APIs supported

**enablePageOrganizer:** Enable or disable the page organizer feature. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        enablePageOrganizer={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        enablePageOrganizer={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

**isPageOrganizerOpen:** When `true`, the page organizer dialog opens automatically when a document loads. The default value is `false`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        isPageOrganizerOpen={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        isPageOrganizerOpen={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

**pageOrganizerSettings:** Configure page-management capabilities: enable or disable deleting, inserting, rotating, copying, importing, and rearranging pages, and set thumbnail zoom options. By default, these actions are enabled and default zoom settings apply.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        pageOrganizerSettings = {{canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        pageOrganizerSettings = {{canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

**openPageOrganizer:** Open the page organizer dialog programmatically.

```
<button onClick={openPageOrganizer}>Open PageOrganizer Pane</button>
```

```ts
 <script>
    function openPageOrganizer() {
      var viewer = document.getElementById('container').ej2_instances[0];
      // Open PageOrganizer Pane
      viewer.pageOrganizer.openPageOrganizer();
    }
  </script>
```

**closePageOrganizer:** Close the page organizer dialog programmatically.

```
<button onClick={closePageOrganizer}>Close PageOrganizer Pane</button>
```

```ts
 <script>
    function closePageOrganizer() {
      var viewer = document.getElementById('container').ej2_instances[0];
      // Close Page Organizer Pane
      viewer.pageOrganizer.closePageOrganizer();
    }
  </script>
```

## Keyboard shortcuts

The following keyboard shortcuts are available in the organize pages dialog:

* **Ctrl+Z**: Undo the last action.
* **Ctrl+Y**: Redo the last undone action.
* **Ctrl+Scroll**: Zoom page thumbnails.

![Undo and redo controls](images/undo-redo.png)

#### Conclusion

The Organize Pages feature provides a comprehensive set of tools to manage PDF pages: add content, adjust orientation, move pages, duplicate pages, and remove unwanted pages. Use these tools to streamline document management and save the modified document when finished.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Organize%20pdf)