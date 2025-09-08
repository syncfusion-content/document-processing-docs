---
layout: post
title: Load document in React Pdfviewer component | Syncfusion
description: Learn here all about Load document in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Load document
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load document in React Pdfviewer component

The PDF Viewer library allows to switch or load PDF documents dynamically after the initial load operation. To achieve this, load the PDF document as a base64 string or the file name into the PDF Viewer control using the  [**Load()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#load) method dynamically.

The following steps are used to load the PDF document dynamically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to load the PDF document using a base64 string.

```
  <button id='load1'>LoadDocumentFromBase64</button>

  <script>
    // Load PDF document from Base64 string
  function load_1(){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.load('data:application/pdf;base64,'+ AddBase64String, null);
  }
  </script>
```

**Step 3:** Use the following code snippet to the load PDF document the using document name.

```
  <button id='load2'>LoadDocument</button>

  <script>
  // Load PDF document using file name
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

Find the sample [how to load PDF documents using documentPath](https://stackblitz.com/edit/react-nszkto?file=src%2Findex.js)