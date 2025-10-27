---
layout: post
title: Design form fields in the React PDF Viewer component | Syncfusion
description: Learn how to add, drag, resize, edit, and manage form fields using the UI in the Syncfusion React PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Create with user interface interaction for React

The PDF Viewer component supports interactive form field design, including drawing, dragging, and resizing fields directly on the page. Click the Form Field icon on the toolbar to add a field and place it on the document. Supported form field types include:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Enable or Disable form designer toolbar

Inject the FormDesigner module and set enableFormDesignerToolbar to true to display the Form Designer icon on the toolbar. The default value is true. Use the following code to enable the toolbar option.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        ref={(scope) => { pdfviewer = scope; }}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        enableFormDesignerToolbar={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        ref={(scope) => { pdfviewer = scope; }}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        enableFormDesignerToolbar={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Add the form field dynamically

Click the Form Field icon on the toolbar, then click on the PDF to draw a form field. See the following GIF for reference.

![Add a form field using the toolbar](../images/addformfield.gif)

## Drag the form field

Drag the selected form field to reposition it within the PDF document. See the following GIF for reference.

![Drag a selected form field in the PDF Viewer](../images/dragformfield.gif)

## Resize the form field

Resize the selected form field using the resize handles on the field boundary. See the following GIF for reference.

![Resize a selected form field in the PDF Viewer](../images/resizeformfield.gif)

## Edit or Update the form field dynamically

Edit form field properties using the Form Field Properties dialog. Open it by right-clicking a form field and selecting Properties from the context menu. The following images show examples of available settings.

![Form field general properties dialog](../images/generalproperties.png)

![Form field appearance properties dialog](../images/appearanceproperties.png)

![DropDown field properties dialog](../images/dropdownproperties.png)

## Clipboard operation with form field

The PDF Viewer supports clipboard operations such as cut, copy, and paste for form fields. Right-click a form field to open the context menu and choose the desired clipboard action. The following image shows the available options.

![Clipboard options for a form field in the context menu](../images/clipboardformfield.png)

## Undo and Redo

Undo and redo actions are supported for runtime changes made to form fields. Use the following code to perform undo and redo operations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function undoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.undo();
  }
  function redoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.redo();
  }
  return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
    <button onClick={undoClicked}>Undo</button>
    <button onClick={redoClicked}>Redo</button>
    <PdfViewerComponent
      id="container"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function undoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.undo();
  }
  function redoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.redo();
  }
  return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
    <button onClick={undoClicked}>Undo</button>
    <button onClick={redoClicked}>Redo</button>
    <PdfViewerComponent
      id="container"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
      style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
    </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}