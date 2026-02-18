---
layout: post
title: Magnification in React Pdfviewer component | Syncfusion
description: Learn here all about Magnification in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Magnification in React Pdfviewer component

The PDF Viewer includes built-in magnification tools: ZoomIn, ZoomOut, Zoom, FitPage, and FitWidth. These tools appear in the default toolbar and can be shown or hidden as needed.

The following code snippet shows how to enable magnification in the PDF Viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          enableMagnification={true}
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]} />
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          enableMagnification={true}
          serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer" style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]} />
        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

The following magnification options are available in the default toolbar of PDF Viewer,
The following magnification options are available in the default toolbar of the PDF Viewer:

- [**ZoomIn**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification/#zoomin): Zoom in from the current zoom value of the PDF pages.
- [**ZoomOut**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification/#zoomout): Zoom out from the current zoom value of the PDF pages.
- [**Zoom**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification/#zoomto): Zoom to a specific zoom value for the PDF pages.
- [**FitPage**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification/#fittopage): Fit the page to the available viewport size.
- [**FitWidth**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification/#fittowidth): Fit the page width to the viewport based on page content size.

![PDF Viewer magnification toolbar](./images/zoom.png)

N> The PDF Viewer supports zoom values from 10–400%.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)