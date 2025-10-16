---
layout: post
title: Configure minZoom and maxZoom in React PDF Viewer | Syncfusion
description: Learn how to configure minimum and maximum zoom levels using minZoom and maxZoom in the Syncfusion React PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Configure minZoom and maxZoom in the PDF Viewer

Control zoom levels in the PDF Viewer using the [minZoom](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#maxzoom) properties to ensure a consistent viewing experience.

### minZoom

Specifies the minimum zoom percentage allowed. Prevents zooming out beyond a set limit to maintain readability and performance.

### maxZoom

Defines the maximum zoom percentage allowed. Prevents excessive zooming that could affect performance and usability.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        style={{ 'height': '680px' }}
        // Change the maximum zoom value.
        maxZoom = {270}
        // Change the minimum zoom value.
        minZoom = {45}>
        <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                            ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '680px' }}
        // Change the maximum zoom value.
        maxZoom = {270}
        // Change the minimum zoom value.
        minZoom = {45}

      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

#### Restrict zoom percentage on mobile devices

You can easily restrict the zoom percentage on mobile devices using the `minZoom` and `maxZoom` properties. This feature allows you to set specific limits for zooming, ensuring smoother scrolling performance and efficient document loading on mobile devices. By controlling the zoom levels, you can provide a better user experience across different devices.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer Inject } from '@syncfusion/ej2-react-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';

function App() {
   function documentLoaded(){
    var viewer = document.getElementById('container').ej2_instances[0];
     if (Browser.isDevice && !viewer.enableDesktopMode) {
         viewer.maxZoom = 100;
         viewer.minZoom = 10;
      }
      else {
         viewer.zoomMode = 'Default';
      }
   }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        documentLoad={documentLoaded}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer Inject } from '@syncfusion/ej2-react-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';

function App() {
   function documentLoaded(){
    var viewer = document.getElementById('container').ej2_instances[0];
     if (Browser.isDevice && !viewer.enableDesktopMode) {
         viewer.maxZoom = 100;
         viewer.minZoom = 10;
      }
      else {
         viewer.zoomMode = 'Default';
      }
   }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        documentLoad={documentLoaded}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

This limits maximum zoom to 200% and minimum zoom to 10% on mobile devices, helping prevent performance issues from excessive zooming.