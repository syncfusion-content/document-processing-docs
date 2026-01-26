---
layout: post
title: Handle pageRenderInitiate and pageRenderComplete | Syncfusion
description: Learn how to use the pageRenderInitiate and pageRenderComplete events in the Syncfusion React PDF Viewer during page rendering.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Handle pageRenderInitiate and pageRenderComplete events

In the Syncfusion PDF Viewer, the [pageRenderInitiate](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#pagerenderinitiate) and [pageRenderComplete](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#pagerendercomplete) events occur during page rendering.

**pageRenderInitiate**

Triggered when page rendering begins. Use this event to initialize or set up resources before rendering starts.

**PageRenderComplete**

Triggered when page rendering completes. Use this event to perform cleanup or finalize rendering-related tasks.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

    function pageRenderInitiate(args){
        // This method is called when the page rendering starts
        console.log('Rendering of pages started');
        console.log(args);
    };
    function pageRenderComplete(args){
      // This method is called when the page rendering completes
     console.log('Rendering of pages completed');
     console.log(args);
    };
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        pageRenderInitiate={pageRenderInitiate}
        pageRenderComplete={pageRenderComplete}
        style={{ 'height': '640px' }}>
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
let pdfviewer;

function App() {

    function pageRenderInitiate(args){
        // This method is called when the page rendering starts
        console.log('Rendering of pages started');
        console.log(args);
    };
    function pageRenderComplete(args){
      // This method is called when the page rendering completes
     console.log('Rendering of pages completed');
     console.log(args);
    };
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        pageRenderInitiate={pageRenderInitiate}
        pageRenderComplete={pageRenderComplete}
        style={{ 'height': '640px' }}>
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

The provided code demonstrates how to subscribe to the `pageRenderStart` and `pageRenderComplete` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.

The following code demonstrates how to subscribe to these events in the Syncfusion PDF Viewer component.