---
layout: post
title: Controlling File Downloadsl in React Pdfviewer component | Syncfusion
description: Learn here how to Controlling File Downloads in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open thumbnail
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Controlling File Downloads in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer

In the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, we've introduced a new feature that enables you to manage file downloads more effectively. This feature allows you to intercept and potentially skip the download process of a PDF document, providing enhanced control over user interactions within your application.

### Using the downloadStart Event

The key to this functionality lies in the downloadStart event, which offers a mechanism to intercept the initiation of the download process. Within the event handler, you can set the cancel argument to true to programmatically prevent the download action from proceeding.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
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

By default, the cancel argument is set to `false`, indicating that the download action will proceed unless explicitly canceled by your custom logic.

### Enhanced Flexibility

By leveraging the `downloadStart` event and its cancel argument, you gain the ability to implement custom logic to control and potentially prevent download actions based on your application's specific requirements. This enhancement provides greater flexibility in managing user interactions with PDF documents, empowering you to tailor the experience according to your needs.