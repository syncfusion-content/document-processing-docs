---
layout: post
title: Custom annotation tools in React PDF Viewer | Syncfusion
description: Learn how to build a custom toolbar for Syncfusion React PDF Viewer and switch annotation tools programmatically using setAnnotationMode.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom annotation tools in React PDF Viewer

The PDF Viewer supports adding a custom toolbar and toggling annotation tools programmatically using the `setAnnotationMode` method. The viewer can enable tools such as Highlight, Underline, Rectangle, Circle, Arrow, Free Text, Ink, and measurement annotations (Distance, Perimeter, Area, Radius)  

Follow these steps to build a minimal custom annotation toolbar.

Step 1: Start from a basic PDF Viewer sample

Refer to the [Getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a basic sample.

Step 2: Add a lightweight custom toolbar with React buttons

Add buttons for the tools to expose. The sample below uses plain React buttons for simplicity; replace with a Syncfusion ToolbarComponent for a richer UI if desired.

Step 3: Import and inject modules

Ensure the `Annotation` module is injected. Include text selection and search modules if those capabilities are required.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-react-pdfviewer';

function getViewer() { return document.getElementById('container').ej2_instances[0]; }

function setMode(mode) { getViewer().annotation.setAnnotationMode(mode); }

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
        <button onClick={() => setMode('Highlight')}>Highlight</button>
        <button onClick={() => setMode('Underline')}>Underline</button>
        <button onClick={() => setMode('Strikethrough')}>Strikethrough</button>
        <button onClick={() => setMode('Rectangle')}>Rectangle</button>
        <button onClick={() => setMode('Circle')}>Circle</button>
        <button onClick={() => setMode('Line')}>Line</button>
        <button onClick={() => setMode('Arrow')}>Arrow</button>
        <button onClick={() => setMode('Polygon')}>Polygon</button>
        <button onClick={() => setMode('FreeText')}>Free Text</button>
        <button onClick={() => setMode('Ink')}>Ink</button>
        <button onClick={() => setMode('StickyNotes')}>Sticky Note</button>
        <button onClick={() => setMode('Distance')}>Distance</button>
        <button onClick={() => setMode('Perimeter')}>Perimeter</button>
        <button onClick={() => setMode('Area')}>Area</button>
        <button onClick={() => setMode('Radius')}>Radius</button>
        <button onClick={() => setMode('None')}>Exit</button>
      </div>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '640px' }}
      >
        <Inject services={[Toolbar, Annotation, TextSelection]} />
      </PdfViewerComponent>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Custom tools using Syncfusion Toolbar for a richer UI

Replace the plain buttons with a Syncfusion `ToolbarComponent` and icons for a richer UI. Add the `@syncfusion/ej2-react-navigations` package and wire each item's `clicked` handler to `setAnnotationMode`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-react-pdfviewer';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';

function getViewer() { return document.getElementById('container').ej2_instances[0]; }

function onToolbarClick(args) {
  const modeMap = {
    annHighlight: 'Highlight',
    annUnderline: 'Underline',
    annStrike: 'Strikethrough',
    annRect: 'Rectangle',
    annCircle: 'Circle',
    annLine: 'Line',
    annArrow: 'Arrow',
    annPolygon: 'Polygon',
    annFreeText: 'FreeText',
    annInk: 'Ink',
    annSticky: 'StickyNotes',
    annDistance: 'Distance',
    annPerimeter: 'Perimeter',
    annArea: 'Area',
    annRadius: 'Radius',
    annNone: 'None'
  };
  const mode = modeMap[args.item.id];
  if (mode) { getViewer().annotation.setAnnotationMode(mode); }
}

function App() {
  return (
    <>
      <ToolbarComponent overflowMode="Scrollable" clicked={onToolbarClick}>
        <ItemsDirective>
          <ItemDirective id="annHighlight" text="Highlight" tooltipText="Highlight" prefixIcon="e-pv-highlight-icon" />
          <ItemDirective id="annUnderline" text="Underline" tooltipText="Underline" prefixIcon="e-pv-underline-icon" />
          <ItemDirective id="annStrike" text="Strike" tooltipText="Strikethrough" prefixIcon="e-pv-strikethrough-icon" />
          <ItemDirective type="Separator" />
          <ItemDirective id="annRect" text="Rect" tooltipText="Rectangle" prefixIcon="e-pv-shape-rectangle-icon" />
          <ItemDirective id="annCircle" text="Circle" tooltipText="Circle" prefixIcon="e-pv-shape-circle-icon" />
          <ItemDirective id="annLine" text="Line" tooltipText="Line" prefixIcon="e-pv-shape-line-icon" />
          <ItemDirective id="annArrow" text="Arrow" tooltipText="Arrow" prefixIcon="e-pv-shape-arrow-icon" />
          <ItemDirective id="annPolygon" text="Polygon" tooltipText="Polygon" prefixIcon="e-pv-shape-pentagon" />
          <ItemDirective type="Separator" />
          <ItemDirective id="annFreeText" text="Free Text" tooltipText="Free Text" prefixIcon="e-pv-freetext-icon" />
          <ItemDirective id="annInk" text="Ink" tooltipText="Ink" prefixIcon="e-pv-inkannotation-icon" />
          <ItemDirective id="annSticky" text="Note" tooltipText="Sticky Note" prefixIcon="e-pv-sticky-notes" />
          <ItemDirective type="Separator" />
          <ItemDirective id="annDistance" text="Distance" tooltipText="Distance" prefixIcon="e-pv-calibrate-distance-icon" />
          <ItemDirective id="annPerimeter" text="Perimeter" tooltipText="Perimeter" prefixIcon="e-pv-calibrate-perimeter-icon" />
          <ItemDirective id="annArea" text="Area" tooltipText="Area" prefixIcon="e-pv-calibrate-area-icon" />
          <ItemDirective id="annRadius" text="Radius" tooltipText="Radius" prefixIcon="e-pv-calibrate-radius-icon" />
          <ItemDirective type="Separator" />
          <ItemDirective id="annNone" text="Exit" tooltipText="Exit drawing" align="Right" />
        </ItemsDirective>
      </ToolbarComponent>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '600px' }}
      >
        <Inject services={[Toolbar, Annotation, TextSelection]} />
      </PdfViewerComponent>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

Note

- `setAnnotationMode` accepts the annotation type name. Common values include: `Highlight`, `Underline`, `Strikethrough`, `StickyNotes`, `FreeText`, `Ink`, `Rectangle`, `Circle`, `Line`, `Arrow`, `Polygon`, `Polyline`, `Distance`, `Perimeter`, `Area`, `Radius`, and `None` to exit.
- Default annotation styles can be predefined using the corresponding settings properties (for example, `areaSettings`).

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
