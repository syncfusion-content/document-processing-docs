---
layout: post
title: Import form data in the React PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into React PDF Viewer

The PDF Viewer imports values into interactive form fields in the currently loaded PDF. Supported formats:

- [FDF](#import-as-fdf)
- [XFDF](#import-xfdf)
- [JSON](#import-json)

## API to use
- [importFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format)

The `sourceOrObject` parameter accepts a file path/URL or a JavaScript object with field-value pairs when importing from an object.

N> For a server-backed viewer set the `serviceUrl` before importing so the control can forward requests to the server.

### Import FDF

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  FormFields,
  FormDesigner,
  Inject,
  FormFieldDataFormat
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const importFdf = () => {
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    viewerRef.current?.importFormFields('File', FormFieldDataFormat.Fdf);
  };

  return (
    <div>
      <button id="importFdf" onClick={importFdf}>Import FDF</button>
      <PdfViewerComponent
        id="container"
        style={{ height: '680px', width: '100%' }}
        ref={viewerRef}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        // serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/" // Server-backed
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

### Import XFDF

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  FormFields,
  FormDesigner,
  Inject,
  FormFieldDataFormat
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const importXfdf = () => {
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    viewerRef.current?.importFormFields('File', FormFieldDataFormat.Xfdf);
  };

  return (
    <div>
      <button id="importXfdf" onClick={importXfdf}>Import XFDF</button>
      <PdfViewerComponent
        id="container"
        style={{ height: '680px', width: '100%' }}
        ref={viewerRef}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        // serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/" // Server-backed
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

### Import JSON

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  FormFields,
  FormDesigner,
  Inject,
  FormFieldDataFormat
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const importJson = () => {
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    viewerRef.current?.importFormFields('File', FormFieldDataFormat.Json);
  };

  return (
    <div>
      <button id="importJson" onClick={importJson}>Import JSON</button>
      <PdfViewerComponent
        id="container"
        style={{ height: '680px', width: '100%' }}
        ref={viewerRef}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        // serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/" // Server-backed
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Pre-fill application forms from a database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress saved locally or on the server.
- Combine with validation to block print/download until required fields are completed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-form-fields)
- [Import Export Events](./import-export-events)
- [Create Edit form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)