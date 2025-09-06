---
layout: post
title: Download in React Pdfviewer component | Syncfusion
description: Learn here all about Download in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Download
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Download in React Pdfviewer component

The PDF Viewer supports downloading the loaded PDF file. You can enable/disable the download using the following code snippet.

![Alt text](./images/download.png)

You can invoke download action using following code snippet.,

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
  function downloadClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.download();
  }
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
     <button onClick={downloadClicked}>Download</button>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
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
  function downloadClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.download();
  }
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
     <button onClick={downloadClicked}>Download</button>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
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

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)