---
layout: post
title: Redaction Programmatic support in React PDF Viewer | Syncfusion
description: Learn how to add, delete, update, and apply redaction annotations programmatically in the Syncfusion React PDF Viewer.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Programmatic support for redaction in React PdfViewer

The Syncfusion React PDF Viewer provides APIs to add, update, delete, and apply redaction annotations programmatically. You can also redact entire pages, configure default properties, and work with the redaction property panel.

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

## Add redaction annotations programmatically

You can add redaction annotations to a PDF document using the `addAnnotation` method of the `annotation` module. You can listen to the `annotationAdd` event to track when annotations are added.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {
  PdfViewerComponent,
  LinkAnnotation,
  BookmarkView,
  Magnification,
  ThumbnailView,
  Toolbar,
  Navigation,
  Annotation,
  TextSearch,
  TextSelection,
  Print,
  FormFields,
  FormDesigner,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = React.useRef(null);

  const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

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

  const addRedaction = () => {
    if (!viewerRef.current) return;
    const viewer = viewerRef.current;
    viewer.annotation.addAnnotation('Redaction', {
      bound: { x: 200, y: 480, width: 150, height: 75 },
      pageNumber: 1,
      markerFillColor: '#0000FF',
      markerBorderColor: 'white',
      fillColor: 'red',
      overlayText: 'Confidential',
      fontColor: 'yellow',
      fontFamily: 'Times New Roman',
      fontSize: 8,
      beforeRedactionsApplied: false
    });
  };

  const onAnnotationAdd = (args) => {
    console.log('Annotation added:', args);
  };

  return (
    <div className="content-wrapper">
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button id="addRedactAnnot" type="button" onClick={addRedaction}>
          Add Redaction Annotation
        </button>
      </div>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath={documentPath}
        resourceUrl={resourceUrl}
        toolbarSettings={toolbarSettings}
        style={{ height: '640px', display: 'block' }}
        annotationAdd={onAnnotationAdd}
      >
        <Inject
          services={[
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
          ]}
        />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## Delete redaction annotations programmatically

Redaction annotations can be removed using the `deleteAnnotationById` event or by selecting and deleting them through code.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
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

function App() {
  const viewerRef = React.useRef(null);

  const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

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

  const deleteAnnotationById = () => {
    if (!viewerRef.current) return;
    const id = (viewerRef.current).annotationCollection?.[0]?.annotationId;
    if (id) {
      viewerRef.current.annotationModule.deleteAnnotationById(id);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <button onClick={deleteAnnotationById}>Delete Annotation By Id</button>
      </div>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath={documentPath}
        resourceUrl={resourceUrl}
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


Alternatively, you can remove annotations by selecting them in the UI and pressing the **Delete** key.

## Update redaction annotation properties programmatically

You can update properties of an existing redaction annotation using the `editAnnotation` API. For example, to change overlay text or fill color:

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
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

function App() {
  const viewerRef = React.useRef(null);

  const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

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

  const editRedactAnnotation = () => {
    if (!viewerRef.current) return;
    const collection = viewerRef.current.annotationCollection || [];
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].subject === 'Redaction') {
        collection[i].overlayText = 'EditedAnnotation';
        collection[i].markerFillColor = '#22FF00';
        collection[i].markerBorderColor = '#000000';
        collection[i].isRepeat = true;
        collection[i].fillColor = '#F8F8F8';
        collection[i].fontColor = '#333333';
        collection[i].fontSize = 14;
        collection[i].fontFamily = 'Symbol';
        collection[i].textAlign = 'Right';
        collection[i].beforeRedactionsApplied = false;
        viewerRef.current.annotation.editAnnotation(collection[i]);
      }
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
        <button id="editRedactAnnotation" onClick={editRedactAnnotation}>
          Edit Redact Annotation
        </button>
      </div>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath={documentPath}
        resourceUrl={resourceUrl}
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

## Add page redactions programmatically

Entire pages can be marked for redaction using the `addPageRedactions` method:

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
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

function App() {
  const viewerRef = React.useRef(null);

  const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

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

  const addPageRedactions = () => {
    if (!viewerRef.current) return;
    viewerRef.current.annotation.addPageRedactions([1, 3, 5, 7]);
  };

  return (
    <div>
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button id="addPageRedactions" type="button" onClick={addPageRedactions}>
          Add Page Redaction
        </button>
      </div>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath={documentPath}
        resourceUrl={resourceUrl}
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

## Apply redaction programmatically

Once annotations are added, you can permanently apply them to the document using the `redact` method:

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
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

function App() {
  const viewerRef = React.useRef(null);

  const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

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

  const applyRedaction = () => {
    if (!viewerRef.current) return;
    viewerRef.current.annotation.redact();
  };

  return (
    <div>
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button id="redact" type="button" onClick={applyRedaction}>
          Apply Redaction
        </button>
      </div>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath={documentPath}
        resourceUrl={resourceUrl}
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

N> Applying redaction is irreversible. Once applied, the original content cannot be recovered.

## Configure default redaction annotation properties

You can configure default properties for redaction annotations (such as fill color, overlay text, and font) when adding them programmatically:

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
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

function App() {
  const viewerRef = React.useRef(null);

  const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

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

  React.useEffect(() => {
    if (!viewerRef.current) return;
    viewerRef.current.redactionSettings = {
      overlayText: 'Confidential',
      markerFillColor: '#FF0000',
      markerBorderColor: '#000000',
      isRepeat: false,
      fillColor: '#F8F8F8',
      fontColor: '#333333',
      fontSize: 14,
      fontFamily: 'Symbol',
      textAlign: 'Right'
    };
  }, []);

  return (
    <div>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath={documentPath}
        resourceUrl={resourceUrl}
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

## Redaction property panel

The redaction property panel allows users to update annotation properties through the UI. Programmatically, you can invoke the property panel by selecting an annotation and calling the relevant APIs. Properties such as overlay text, font style, and fill color can be updated directly in the panel.

![Redaction Property Panel](../redaction/redaction-annotations-images/redaction-property-panel-icon.png)

## See also

* [Overview of Redaction](./overview)
* [Redaction UI interactions](./ui-interaction)
* [Redaction Toolbar](./toolbar)
* [Reaction in Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)