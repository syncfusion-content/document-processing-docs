---
layout: post
title: Navigation in React Pdfviewer control | Syncfusion
description: Learn here all about Navigation in Syncfusion React Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark navigation in React PDF Viewer

Bookmarks embedded in a PDF are loaded and presented for easy navigation. Enable bookmark navigation using the snippet below.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  Annotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      enableBookmark={true}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[
        Toolbar,
        Magnification,
        Navigation,
        Annotation,
        LinkAnnotation,
        ThumbnailView,
        BookmarkView,
        TextSelection
      ]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  Annotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  let pdfviewer;
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={(scope) => { pdfviewer = scope; }}
      enableBookmark={true}
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[
        Toolbar,
        Magnification,
        Navigation,
        Annotation,
        LinkAnnotation,
        ThumbnailView,
        BookmarkView,
        TextSelection
      ]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

![Bookmarks panel in the PDF Viewer](../images/bookmark.png)

To perform bookmark navigation, use the `goToBookmark` method. The method throws an error if the specified bookmark does not exist in the document.

Here is an example of how to use the `goToBookmark` method:

```
  <button id="gotobookmark">Specfic Page</button>
```

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, BookmarkView, Inject } from '@syncfusion/ej2-react-pdfviewer';

let pdfviewer;

function App() {
  const onGoToBookmark = () => {
    // x - pageIndex, y - Y coordinate
    pdfviewer && pdfviewer.bookmark.goToBookmark(x, y);
  };

  return (
    <div>
      <button id="gotobookmark" onClick={onGoToBookmark}>Specfic Page</button>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }} style={{ height: '500px', width: '100%' }}>
        <Inject services={[BookmarkView]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);
```

x — the zero-based page index to navigate to.

y — the vertical Y coordinate on the target page to position the viewport.

Also, you can use the **getBookmarks** method to retrieve a list of all the bookmarks in a PDF document. This method returns a List of Bookmark objects, which contain information about each bookmark.

Here is an example of how to use the getBookmarks method:

```
  <button id="getBookmarks">retrieve bookmark</button>
```

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, BookmarkView, Inject } from '@syncfusion/ej2-react-pdfviewer';

let pdfviewer;

function App() {
  const onGetBookmarks = () => {
    var getBookmarks = pdfviewer && pdfviewer.bookmark.getBookmarks();
    console.log(getBookmarks);
  };

  return (
    <div>
      <button id="getBookmarks" onClick={onGetBookmarks}>retrieve bookmark</button>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }} style={{ height: '500px', width: '100%' }}>
        <Inject services={[BookmarkView]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);
```

## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/toolbar/)
* [Feature Modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/feature-module/)