---
layout: post
title: Load PDF Viewer with Local Resources in React | Syncfusion
description: Learn how to configure the Syncfusion React PDF Viewer to load PDF documents and resources locally instead of from CDN.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Load PDF Viewer with Local Resources in React

This guide shows how to configure the PDF Viewer to load resources from your local application instead of a CDN.

## Prerequisites

Follow the [getting started guide](../getting-started) to create a basic React PDF Viewer application.

## Configuration Steps

### Step 1: Copy the Resource Files

Copy the `ej2-pdfviewer-lib` folder to `public/assets/` using the following command:

{% tabs %}
{% highlight bash tabtitle="Windows" %}

xcopy /E /I node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib public\assets\ej2-pdfviewer-lib

{% endhighlight %}
{% highlight bash tabtitle="Mac/Linux" %}

cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/assets/ej2-pdfviewer-lib

{% endhighlight %}
{% endtabs %}

### Step 2: Add Your PDF Document

Place your PDF file in the `public/assets/` folder.

**Your folder structure:**

```
public/
  └── assets/
      ├── ej2-pdfviewer-lib/
      │   ├── pdfium.js
      │   └── pdfium.wasm
      └── pdfsuccinctly.pdf
```

### Step 3: Update PDF Viewer Component

Configure the PDF Viewer to use local paths:

{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
        BookmarkView,ThumbnailView, Print, TextSelection, Annotation, TextSearch,
        FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        // Path to your PDF document in the assets folder
        documentPath={window.location.origin + "/assets/pdfsuccinctly.pdf"}
        // Path to the PDFium library files in the assets folder
        resourceUrl={window.location.origin + "/assets/ej2-pdfviewer-lib"}
        style={{ 'height': '640px' }}>

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView,ThumbnailView, Print, TextSelection, Annotation, TextSearch,
          FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        // Path to your PDF document in the assets folder
        documentPath={window.location.origin + "/assets/pdfsuccinctly.pdf"}
        // Path to the PDFium library files in the assets folder
        resourceUrl={window.location.origin + "/assets/ej2-pdfviewer-lib"}
        style={{ 'height': '640px' }}>

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}
const rootElement = document.getElementById('sample')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)