---
layout: post
title: Rendering event in React PDF Viewer component | Syncfusion
description: Learn here all about pageRenderInitiate and pageRenderComplete event in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# PageRenderInitiate and PageRenderComplete event

In Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, `pageRenderInitiate` and `pageRenderComplete` actions are events that occur during the rendering process of PDF documents.

**PageRenderInitiate**

The `pageRenderInitiate` event is triggered when the rendering of a page in the PDF document begins. This event provides developers with an opportunity to perform any necessary initialization or setup before the rendering of the page content commences. It can be utilized to prepare resources, set up rendering parameters, or execute any other actions required before the page rendering process starts.

**PageRenderComplete**

The `pageRenderComplete` event is triggered when the rendering of a page in the PDF document is completed. This event allows developers to perform cleanup tasks or finalize rendering-related processes after the rendering of the page content finishes. It can be used to release resources, finalize rendering settings, or handle any post-rendering tasks necessary for the application.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
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

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/PageRenderStarted%20and%20PageRenderCompleted%20event)