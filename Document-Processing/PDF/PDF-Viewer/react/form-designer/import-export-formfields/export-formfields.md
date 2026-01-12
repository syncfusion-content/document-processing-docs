---
layout: post
title: Export form data in the React PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export form data from PDF in React

The PDF Viewer component supports exporting and importing form field data using the importFormFields, exportFormFields, and exportFormFieldsAsObject methods in the following formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)

## Export as FDF

Using the `exportFormFields` method, the form field data can be exported in the specified data format. This method accepts two parameters:

* The first one must be the destination path for the exported data. If the path is not specified, it will ask for the location while exporting.
* The second parameter should be the format type of the form data.

The following example exports and imports form field data as FDF.

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

## Export as XFDF

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

## Export as JSON

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

## Export as Object

Export the form data to a JavaScript object for custom persistence (database, API, or client storage). 
The following example exports and imports form field data as Object.

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

## Common use cases

- Persist user-entered data to your server without modifying the original PDF.
- Export as JSON for easy integration with REST APIs.
- Export as FDF/XFDF for interoperability with other PDF tools.
- Export as object to combine with your app state and store securely.
- Automate exports after [validation](../form-validation) using validateFormFields.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-formfields)
- [Import Export Events](./import-export-events)
- [Create form fields](../Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](../Create-edit-Style-del-formFields//edit-formfields)
- [Remove form fields](../Create-edit-Style-del-formFields//remove-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)