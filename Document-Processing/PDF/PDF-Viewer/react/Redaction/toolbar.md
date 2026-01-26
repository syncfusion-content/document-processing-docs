---
layout: post
title: Customize the redaction toolbar in React PDF Viewer | Syncfusion
description: Learn how to customize the redaction toolbar in the Syncfusion React PDF Viewer by showing or hiding default items.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Redaction toolbar customization in React

The redaction toolbar in the Syncfusion React PDF Viewer can be customized by rearranging existing items, hiding default items, or adding new ones. You can also place custom items at specific index positions among the existing toolbar items.

## Enable the redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  // includes RedactionEditTool
  const toolbarSettings = {
    toolbarItems: [
      'OpenOption',
      'UndoRedoTool',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'CommentTool',
      'SubmitForm',
      'AnnotationEditTool',
      'RedactionEditTool', // Redaction entry in the primary toolbar
      'FormDesignerEditTool',
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl= "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        toolbarSettings={toolbarSettings}
        
        style={{ 'height': '680px' }} 
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
  
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

Refer to the following image for the toolbar view:

![Enable redaction toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

## Show or hide the redaction toolbar

You can toggle the redaction toolbar either using the built‑in toolbar icon or programmatically with the `showRedactionToolbar` method.

### Display the redaction toolbar using the toolbar icon

When **RedactionEditTool** is included in the toolbar settings, clicking the redaction icon in the primary toolbar will show or hide the redaction toolbar.

![Show redaction toolbar from the primary toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

### Display the redaction toolbar programmatically

You can also control visibility through code by calling `viewer.toolbar.showRedactionToolbar(true/false)`.

The following example demonstrates toggling the redaction toolbar programmatically:

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = React.useRef(null);

  const toolbarSettings = {
    toolbarItems: [
      'OpenOption',
      'UndoRedoTool',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'CommentTool',
      'SubmitForm',
      'AnnotationEditTool',
      'RedactionEditTool',
      'FormDesignerEditTool',
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  const showRedactionToolbar = () => {
    if (!viewerRef.current) return;
    viewerRef.current.toolbar.showRedactionToolbar(true);
  };

  const hideRedactionToolbar = () => {
    if (!viewerRef.current) return;
    viewerRef.current.toolbar.showRedactionToolbar(false);
  };

  return (
    <div className='content-wrapper'>
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
        <button type='button' onClick={showRedactionToolbar}>Show Redaction Toolbar</button>
        <button type='button' onClick={hideRedactionToolbar}>Hide Redaction Toolbar</button>
      </div>
      <PdfViewerComponent
        ref={viewerRef}
        id='container'
        resourceUrl='https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
        documentPath='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
        toolbarSettings={toolbarSettings}
        style={{ height: '640px', display: 'block' }}
      >
        <Inject services={[
          Toolbar,
          Magnification,
          Navigation,
          Annotation,
          LinkAnnotation,
          BookmarkView,
          ThumbnailView,
          Print,
          TextSelection,
          TextSearch,
          FormFields,
          FormDesigner
        ]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

Refer to the following image for details:

![Programmatically show the Redaction toolbar](../redaction/redaction-annotations-images/show-redaction-toolbar.png)

## See also

* [Adding the redaction annotation in PDF viewer](../redaction/overview)
* [UI interactions](./ui-interaction)
* [Programmatic support](./programmatic-support)
* [Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)