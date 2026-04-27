---
layout: post
title: Load N number of pages on initial loading | Syncfusion
description: Learn how to Load N number of pages on initial loading in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Load N number of pages on initial loading
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load N pages initially

Control the number of pages the PDF Viewer renders on the initial load to improve perceived performance and reduce initial memory usage. Additional pages are rendered dynamically as the user scrolls through the document, allowing quick access to early pages without loading the entire file.

Set the [initialRenderPages](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#initialrenderpages) property to specify how many pages to render initially. For large documents, avoid high values for `initialRenderPages` because rendering many pages at once increases memory use and may slow loading. Typical ranges of 10–20 pages work well for most documents; adjust based on document size and client capabilities.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}
        initialRenderPages = {10}>
              <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation,
                                  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}
        initialRenderPages = {10}>
              <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation,
                                  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

Find the sample [how to load n number of pages on initial loading](https://stackblitz.com/edit/react-6bubav?file=src%2Findex.js)