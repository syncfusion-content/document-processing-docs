---
layout: post
title: Import form data in the React PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import form data into PDF in React

The PDF Viewer provides APIs to import interactive form field values into the currently loaded PDF. You can import from the following formats:

- FDF
- XFDF
- JSON

Supported API:
- importFormFields(sourceOrObject, format)

Note: When using the server-backed viewer, set serviceUrl before importing.

## Import as FDF

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

## Import as XFDF

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

## Import as JSON

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

## Import as Object

Import data previously exported with exportFormFieldsAsObject. Useful for client-side roundtrips without writing a file.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef, useState } from 'react';
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
  const [exportedData, setExportedData] = useState(null);

  const exportDataAsObject = async () => {
    if (viewerRef.current) {
      const data = await viewerRef.current.exportFormFieldsAsObject(FormFieldDataFormat.Fdf);
      setExportedData(data);
    }
  };

  const importData = () => {
    if (viewerRef.current && exportedData) {
      // Import the previously exported object data
      viewerRef.current.importFormFields(exportedData, FormFieldDataFormat.Fdf);
      // Alternatives:
      // viewerRef.current.importFormFields(exportedData, FormFieldDataFormat.Xfdf);
      // viewerRef.current.importFormFields(exportedData, FormFieldDataFormat.Json);
    }
  };

  return (
    <div>
      <button id="exportDataAsObject" onClick={exportDataAsObject}>Export Object</button>
      <button id="importData" onClick={importData}>Import Data</button>
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

## Common use cases

- Pre-fill application forms from your database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress stored locally or on the server using object import.
- Combine with validation to block print/download until required fields are filled.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-formfields)
- [Import Export Events](./import-export-events)
- [Create form fields](../Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](../Create-edit-Style-del-formFields//edit-formfields)
- [Remove form fields](../Create-edit-Style-del-formFields//remove-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)