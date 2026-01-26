---
layout: post
title: Restrict zoom percentage on mobile devices | Syncfusion
description: Learn how to restrict zoom percentage on mobile devices using minZoom and maxZoom in the Syncfusion React PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Restrict zoom percentage on mobile devices

Restrict zoom on mobile devices using the `maxZoom` and `minZoom` properties. This improves scrolling performance and document loading on mobile.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices)