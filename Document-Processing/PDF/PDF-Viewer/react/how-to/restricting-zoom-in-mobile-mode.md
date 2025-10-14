---
layout: post
title: Restrict Zoom Percentage in React PDF Viewer component | Syncfusion
description: Learn here all how to restrict zoom percentage in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Restrict Zoom Percentage on Mobile Devices

In Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, you can easily restrict the zoom percentage on mobile devices using the **maxZoom** and **minZoom** property. This feature allows you to set specific limits for zooming, ensuring smoother scrolling performance and efficient document loading, on mobile devices.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices)