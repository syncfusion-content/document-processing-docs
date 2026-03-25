---
layout: post
title: Fit Modes in React PDF Viewer | How-to Guide | Syncfusion
description: Learn how to implement fit modes (Fit Page and Fit Width) in the Syncfusion React PDF Viewer component. Control initial view, toggle fit modes, and handle container resize.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Fit Modes in React PDF Viewer

This how-to guide demonstrates how to work with fit modes in the React PDF Viewer component. Learn how to fit pages to the viewport, set initial fit modes, toggle between modes, and handle responsive resizing.

## Fit the entire page to the viewport

Use the [fitToPage()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#fittopage) method to scale the PDF so the entire page fits within the available viewport size.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const pdfViewerRef = React.useRef(null);

  const handleFitPage = () => {
    // Fit entire page to viewport
    pdfViewerRef.current.magnification.fitToPage();
  };

  return (<div>
    <div className='button-container' style={{ marginBottom: '10px' }}>
      <button onClick={handleFitPage}>Fit to Page</button>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableMagnification={true}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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
  const pdfViewerRef = React.useRef(null);

  const handleFitPage = () => {
    // Fit entire page to viewport
    pdfViewerRef.current.magnification.fitToPage();
  };

  return (<div>
    <div className='button-container' style={{ marginBottom: '10px' }}>
      <button onClick={handleFitPage}>Fit to Page</button>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableMagnification={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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

## Fit page width to the viewport

Use the [fitToWidth()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#fittowidth) method to scale the PDF so the page width matches the viewport width. The height may extend beyond the visible area.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const pdfViewerRef = React.useRef(null);

  const handleFitWidth = () => {
    // Fit page width to viewport
    pdfViewerRef.current.magnification.fitToWidth();
  };

  return (<div>
    <div className='button-container' style={{ marginBottom: '10px' }}>
      <button onClick={handleFitWidth}>Fit to Width</button>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableMagnification={true}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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
  const pdfViewerRef = React.useRef(null);

  const handleFitWidth = () => {
    // Fit page width to viewport
    pdfViewerRef.current.magnification.fitToWidth();
  };

  return (<div>
    <div className='button-container' style={{ marginBottom: '10px' }}>
      <button onClick={handleFitWidth}>Fit to Width</button>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableMagnification={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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

## Set a default fit mode on load (initial view)

Set an initial fit mode when the PDF Viewer is rendered by using the [zoomMode](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/zoommode) property. The available zoom modes are:
- [Default](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/zoommode): Default zoom mode.
- [FitToWidth](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/zoommode): Fit page width to viewport.
- [FitToPage](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/zoommode): Fit entire page to viewport.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const pdfViewerRef = React.useRef(null);

  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableMagnification={true}
        zoomMode="FitToWidth"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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
  const pdfViewerRef = React.useRef(null);

  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableMagnification={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        zoomMode="FitToWidth"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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

## Toggle Fit Page / Fit Width from a custom toolbar

Create custom toolbar buttons to toggle between fit modes. This gives users control over how the PDF is displayed.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const pdfViewerRef = React.useRef(null);
  const [currentFitMode, setCurrentFitMode] = React.useState('width');

  const handleFitPage = () => {
    pdfViewerRef.current.magnification.fitToPage();
    setCurrentFitMode('page');
  };

  const handleFitWidth = () => {
    pdfViewerRef.current.magnification.fitToWidth();
    setCurrentFitMode('width');
  };

  return (<div>
    <div className='custom-toolbar' style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <button 
        onClick={handleFitPage}
        style={{ fontWeight: currentFitMode === 'page' ? 'bold' : 'normal' }}
      >
        Fit Page
      </button>
      <button 
        onClick={handleFitWidth}
        style={{ fontWeight: currentFitMode === 'width' ? 'bold' : 'normal' }}
      >
        Fit Width
      </button>
      <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>
        Current mode: {currentFitMode === 'page' ? 'Fit Page' : 'Fit Width'}
      </p>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableMagnification={true}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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
  const pdfViewerRef = React.useRef(null);
  const [currentFitMode, setCurrentFitMode] = React.useState('width');

  const handleFitPage = () => {
    pdfViewerRef.current.magnification.fitToPage();
    setCurrentFitMode('page');
  };

  const handleFitWidth = () => {
    pdfViewerRef.current.magnification.fitToWidth();
    setCurrentFitMode('width');
  };

  return (<div>
    <div className='custom-toolbar' style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <button 
        onClick={handleFitPage}
        style={{ fontWeight: currentFitMode === 'page' ? 'bold' : 'normal' }}
      >
        Fit Page
      </button>
      <button 
        onClick={handleFitWidth}
        style={{ fontWeight: currentFitMode === 'width' ? 'bold' : 'normal' }}
      >
        Fit Width
      </button>
      <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>
        Current mode: {currentFitMode === 'page' ? 'Fit Page' : 'Fit Width'}
      </p>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableMagnification={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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

## Combine fit mode with user zoom (when to override vs respect last zoom)

When combining fit modes with manual zoom, decide whether fit actions should override the last zoom level or be combined. A common pattern is to reset to fit mode when explicitly called, while respecting manual zoom for programmatic zoom changes.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const pdfViewerRef = React.useRef(null);
  const [lastZoom, setLastZoom] = React.useState(100);

  const handleFitPage = () => {
    // Fit mode overrides last zoom
    pdfViewerRef.current.magnification.fitToPage();
  };

  const handleFitWidth = () => {
    // Fit mode overrides last zoom
    pdfViewerRef.current.magnification.fitToWidth();
  };

  const handleRestoreZoom = () => {
    // Restore previously saved zoom level
    pdfViewerRef.current.magnification.zoomTo(lastZoom);
  };

  const onZoomChange = (args) => {
    // Capture user's manual zoom level
    setLastZoom(Math.round(args.previousZoomValue));
  };

  return (<div>
    <div className='toolbar' style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <button onClick={handleFitPage}>Fit Page</button>
      <button onClick={handleFitWidth}>Fit Width</button>
      <button onClick={handleRestoreZoom}>Restore Zoom ({lastZoom}%)</button>
      <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>
        Fit modes override zoom. Use Restore to return to last manual zoom.
      </p>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableMagnification={true}
        onZoomChange={onZoomChange}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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
  const pdfViewerRef = React.useRef(null);
  const [lastZoom, setLastZoom] = React.useState(100);

  const handleFitPage = () => {
    // Fit mode overrides last zoom
    pdfViewerRef.current.magnification.fitToPage();
  };

  const handleFitWidth = () => {
    // Fit mode overrides last zoom
    pdfViewerRef.current.magnification.fitToWidth();
  };

  const handleRestoreZoom = () => {
    // Restore previously saved zoom level
    pdfViewerRef.current.magnification.zoomTo(lastZoom);
  };

  const onZoomChange = (args) => {
    // Capture user's manual zoom level
    setLastZoom(Math.round(args.previousZoomValue));
  };

  return (<div>
    <div className='toolbar' style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <button onClick={handleFitPage}>Fit Page</button>
      <button onClick={handleFitWidth}>Fit Width</button>
      <button onClick={handleRestoreZoom}>Restore Zoom ({lastZoom}%)</button>
      <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>
        Fit modes override zoom. Use Restore to return to last manual zoom.
      </p>
    </div>
    <div className='control-section'>
      <PdfViewerComponent
        ref={pdfViewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableMagnification={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        onZoomChange={onZoomChange}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
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

## Fit mode behavior and calculation

- **Fit to Page:** Scales the PDF page to fit within the available viewport (both width and height constrained).
- **Fit to Width:** Scales the PDF to match the viewport width (height may extend beyond visible area).
- **Fit calculations:** Consider the page box, page rotation, DPI/render scale, and container dimensions.
- **Multi-page layouts:** Fit modes apply to the currently visible page; they work the same in continuous and single-page views.

N> Fit modes automatically recalculate based on the current page dimensions and container size. If you change container size, fit mode dimensions are recomputed accordingly.

## See also

- [Magnification overview](./magnification)
- [Zoom how-to](./zoom)
- [Toolbar items](./toolbar)
- [Feature Modules](./feature-module)
