---
layout: post
title: Export form data in the React PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from React PDF Viewer

The PDF Viewer allows you to export form field data in multiple formats for easy storage or integration. Supported formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)
- [JavaScript Object](#export-as-object) (for custom persistence)

## Available methods

- [exportFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfields)(destination?, format) — Exports data to a file in the specified format.
- [exportFormFieldsAsObject](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfieldsasobject)(format) — Exports data as a JavaScript object for custom handling.
- [importFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format) — Import data back into the PDF.

## How to export

Use [exportFormFields()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfields) with an optional destination path and the format type.

### Export as FDF
The following example exports form field data as FDF.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, Annotation, FormFields, FormDesigner, Inject, FormFieldDataFormat } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const onExportFdf = () => {
    // Data must be the desired path or file name for the exported document.
    viewerRef.current?.exportFormFields('ExportedData', FormFieldDataFormat.Fdf);
  };

  return (
    <div className='control-section'>
      <button onClick={onExportFdf} id="exportFdf">Export FDF</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

### Export as XFDF
The following example exports form field data as XFDF.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, Annotation, FormFields, FormDesigner, Inject, FormFieldDataFormat } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const onExportXfdf = () => {
    // Data must be the desired path or file name for the exported document.
    viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
  };

  return (
    <div className='control-section'>
      <button onClick={onExportXfdf} id="exportXfdf">Export XFDF</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

### Export as JSON
The following example exports form field data as JSON.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, Annotation, FormFields, FormDesigner, Inject, FormFieldDataFormat } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const onExportJson = () => {
    // Data must be the desired path or file name for the exported document.
    viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Json);
  };

  return (
    <div className='control-section'>
      <button onClick={onExportJson} id="exportJson">Export JSON</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

### Export as Object

Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to obtain form data as a JavaScript object for database or API integration.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, Annotation, FormFields, FormDesigner, Inject, FormFieldDataFormat } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = useRef(null);

  const onExportObject = async () => {
    const data = await viewerRef.current?.exportFormFieldsAsObject(FormFieldDataFormat.Fdf);
    // Save or send to server
    console.log('Exported object:', data);

    // Alternative formats:
    // await viewerRef.current?.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf);
    // await viewerRef.current?.exportFormFieldsAsObject(FormFieldDataFormat.Json);
  };

  return (
    <div className='control-section'>
      <button onClick={onExportObject} id="exportObj">Export Object</button>
      <PdfViewerComponent
        ref={viewerRef}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Save user-entered data to your server without altering the original PDF.
- Export as JSON for REST API integration.
- Export as FDF/XFDF for compatibility with other PDF tools.
- Export as Object to merge with app state or store securely.
- Automate exports after [validation](../form-validation) using [validateFormFields()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields)

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-form-fields)
- [Import Export Events](./import-export-events)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)