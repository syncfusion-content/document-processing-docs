---
layout: post
title: Load documents dynamically in React PDF Viewer | Syncfusion
description: Learn how to load or switch PDF documents dynamically in the Syncfusion React PDF Viewer using the load method.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Load documents dynamically in React PDF Viewer

The PDF Viewer supports loading or switching PDF documents at runtime after the initial viewer initialization. Use the [load](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#load) method to open a document from a URL or a Base64 string.

The following steps show common approaches for loading documents dynamically.

**Step 1:** Follow the getting started guide to create a basic React PDF Viewer sample: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started

**Step 2:** Use the following code snippet to load the document from a Base64 string.

```
  <button id='load1'>LoadDocumentFromBase64</button>

  <script>
    // Load PDF document from a Base64 string
  function load_1(){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.load('data:application/pdf;base64,'+ AddBase64String, null);
  }
  </script>
```

**Step 3:** Use the following code snippet to load a PDF document from a URL (document name).

```
  <button id='load2'>LoadDocument</button>

  <script>
  // Load PDF document using a file name
  function load_2(){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
  }
  </script>
```

Find the sample [how to load PDF documents dynamically](https://stackblitz.com/edit/react-qtjtbo?file=public%2Findex.html)

**Step 4:** Use the following code snippet to the load PDF document the using documentPath.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;
function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch ]}/>
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
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;
function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch ]}/>
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

Find the sample: [Load PDF documents dynamically](https://stackblitz.com/edit/react-nszkto?file=src%2Findex.js)