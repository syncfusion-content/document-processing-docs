---
layout: post
title: Magnification in React PDF Viewer | Syncfusion
description: Learn about magnification controls in the Syncfusion React PDF Viewer component. Explore zoom and fit modes to enhance document viewing experience.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Magnification in React PDF Viewer

Magnification enables users to control how PDF content is displayed in the viewport. The PDF Viewer provides two primary approaches to magnification: **zoom** for precise scaling control and **fit modes** for viewport-optimized display.

![PDF Viewer magnification controls](../images/zoom.png)

## Overview

The magnification feature allows you to enhance the reading experience by scaling PDF pages to fit different viewing preferences. Whether you need precise zoom levels for detailed inspection or automatic fit modes for optimal viewport usage, the PDF Viewer provides comprehensive magnification capabilities.

### Key Features

- **Flexible Zoom Control** — Zoom in and out with manual or programmatic control
- **Fit Modes** — Automatically scale pages to fit the entire viewport or width
- **Default Zoom Modes** — Set initial zoom behavior on document load
- **Responsive Scaling** — Adapt to container and window resize events
- **Zoom Range** — Supported zoom range from 10% to 400%
- **Toolbar Integration** — Built-in toolbar controls for common magnification actions

## Magnification Controls

The following magnification controls are available in the default toolbar:

- [**Zoom In**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#zoomin): Increase the zoom level of the PDF pages incrementally.
- [**Zoom Out**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#zoomout): Decrease the zoom level of the PDF pages incrementally.
- [**Zoom To**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#zoomto): Set a specific zoom percentage for the PDF pages.
- [**Fit to Page**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#fittopage): Scale the entire page to fit within the available viewport.
- [**Fit to Width**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#fittowidth): Scale the page width to match the viewport width.

## Enable Magnification

To enable magnification features in the PDF Viewer, set the [enableMagnification](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enablemagnification) property to `true` and inject the [Magnification](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#magnification) service.

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
      {/* Render the PDF Viewer with magnification enabled */}
        <PdfViewerComponent
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
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer with magnification enabled */}
        <PdfViewerComponent
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

## Magnification Types

### Zoom
The zoom feature provides precise control over the display scale. Users can:
- Zoom in to view details more clearly
- Zoom out to see more of the page at once
- Set specific zoom percentages programmatically
- Initialize with a default zoom level

Learn more: [Zoom How-to Guide](./zoom)

### Fit Modes
Fit modes automatically scale pages to optimize the viewing experience. Users can:
- Fit entire pages to the viewport
- Fit page width to the viewport for horizontal scrolling
- Set initial fit mode on document load
- Toggle between different fit modes dynamically

Learn more: [Fit Modes How-to Guide](./fitmode)

## Zoom Range and Limits

The PDF Viewer supports zoom values from **10% to 400%** by default. All zoom operations are automatically clamped to this range:
- Values below 10% are adjusted to 10%
- Values above 400% are adjusted to 400%
- Both UI and programmatic zoom changes respect these limits

You can override the defaults using the [minZoom](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#minzoom) and [maxZoom](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#maxzoom) properties on the `PdfViewerComponent` (defaults: `minZoom = 10`, `maxZoom = 400`).

Learn more: [Zoom Range and Limits Guide](./zoom#zoom-range-and-limits)

## Common Use Cases

| Use Case | Solution |
|----------|----------|
| Set initial document zoom on load | Use [zoomMode](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/zoommode) property with "FitToWidth" or "FitToPage" |
| Allow users to zoom with buttons | Implement custom buttons with [zoomIn()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#zoomin), [zoomOut()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#zoomout) , [zoomTo()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/magnification#zoomto)  methods |
| Maintain zoom during page navigation | Zoom state is automatically preserved when navigating between pages |
| Respond to zoom level changes | Listen to the [zoomChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#zoomchange) event and update custom UI |
| Fit page to container resize | Implement debounced resize handler to reapply fit mode |

## Related Topics

- [Zoom How-to](./zoom) — Detailed guide on zoom functionality and programmatic control
- [Fit Modes How-to](./fitmode) — Detailed guide on fit modes and responsive scaling
- [Toolbar Items](../toolbar-customization/overview) — Customize toolbar magnification controls
- [Feature Modules](../feature-module) — Enable/disable specific PDF Viewer features
- [Navigation](../interactive-pdf-navigation/overview) — Navigate between pages while managing magnification