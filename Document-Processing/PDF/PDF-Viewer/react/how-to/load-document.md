---
layout: post
title: Load documents dynamically in React PDF Viewer | Syncfusion
description: Learn how to load or switch PDF documents dynamically in the Syncfusion React PDF Viewer using the load method.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Load documents dynamically in React PDF Viewer

Load or switch PDF documents dynamically after the initial load. Use the [load](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#load) method to load a PDF by Base64 string or file name.

The following steps are used to load the PDF document dynamically.

**Step 1:** Follow the steps in the [Get started with React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) guide to create a sample.

**Step 2:** Use the following code to load a PDF using a Base64 string.

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

**Step 3:** Use the following code to load a PDF by document name.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
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