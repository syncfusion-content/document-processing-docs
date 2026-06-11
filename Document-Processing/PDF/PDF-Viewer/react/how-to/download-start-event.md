---
layout: post
title: Control file downloads in React PDF Viewer | Syncfusion
description: Learn how to intercept and control file downloads in the React PDF Viewer using the downloadStart event.
control: Open thumbnail
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Control file downloads in PDF Viewer

The PDF Viewer exposes a `downloadStart` event that enables interception of a document download before it begins. Use this event to apply custom logic and, if needed, cancel the download by setting the event's `cancel` flag.

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

   function downloadStart(args){
        // Custom logic
        args.cancel = true; // Prevent download action
   };
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        downloadStart={downloadStart}
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

   function downloadStart(args){
        // Your custom logic here
        args.cancel = true; // Prevent download action
   };
   return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        downloadStart={downloadStart}
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

By default, the `cancel` argument is `false`, so the download proceeds unless the handler explicitly sets `args.cancel = true`.

### Flexibility

Using the [downloadStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/downloadStartEventArgs/) event enables conditional control over downloads—for example, to enforce authentication, restrict downloads for certain documents, or prompt users for confirmation. When using server-backed viewers, confirm whether server-side behavior requires additional handling; canceling the client-side event prevents the local download but may not affect server workflows.
