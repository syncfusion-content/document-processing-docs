---
layout: post
title: Form filling in React PDF Viewer Control | Syncfusion
description: Learn to view, fill, export, and import PDF form fields in Syncfusion TS PDF Viewer, including disabling interaction and handling signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form filling in React PDF Viewer

The PDF Viewer displays existing form fields in a PDF and enables users to fill, validate, and download the filled data.

## Form Fields

Work with the runtime form fields present in a PDF Form.
- Render existing fields
- Fill fields.
- Import/Export form data as JSON, XFDF, FDF, or as a plain object
- Inject FormFields to enable form-filling features.

Use the following code-snippet to enable form-filling by injecting `FormFields` Module.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '680px' }} 
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

![FormFilling](../images/FormFill.png)

The PDF Viewer supports the following form field types:

* [Text box](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-textBox)
* [Password](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-password)
* [Check box](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-checkbox)
* [Radio button](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-radiobutton)
* [List box](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-listbox)
* [Dropdown](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-dropdown)
* [Signature field](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-signature-field)
* [Initial field](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-initial-field)

![Form filling in TypeScript PDF Viewer](../images/FormFields.gif)

## Disabling form fields

The PDF Viewer provides an option to disable interaction with form fields using `enableFormDesigner` API. Use the following configuration to disable form fields in the viewer.


{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" 
        enableFormDesigner={false} // Disable Form Designer interactions
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

## Access interactive form fields

You can access the collection of all interactive form fields in the loaded document using the `formFieldCollection` property. Fetch the collection after the document is loaded.

Use the following code-snippet to access interactive form fields collection:

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  const viewerRef = useRef(null);

  const fetchFields = () => {
    const fields = viewerRef.current?.formFieldCollection; // Gets all form fields
    console.log(fields); // Log the formField collection
  };
  return (<div>
    <div className='control-section'>
      <button onClick={fetchFields}>Fetch Form-Fields Collection</button>
      <PdfViewerComponent 
        ref={viewerRef}
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" 
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

## Add a handwritten signature to a signature field

Add a handwritten signature to a signature field by following these steps:

* Click the signature field in the PDF document to open the signature panel.

![Signature field in React PDF Viewer](../../javascript-es6/images/form-filling-signature.png)

* Draw the signature in the signature panel.

![Signature panel in React PDF Viewer](../../javascript-es6/images/form-filling-signature-dialog.png)

* Select **CREATE**. The drawn signature is added to the signature field.

![Signature added in React PDF Viewer](../../javascript-es6/images/form-filling-signature-signed.png)

## Delete a signature from a signature field

Delete a signature placed in a signature field by using the Delete option in the annotation toolbar.

![Deleting a signature in React PDF Viewer](../../javascript-es6/images/form-filling-signature-del.png)

## Export and import form fields

The PDF Viewer supports exporting and importing form field data using the `importFormFields`, `exportFormFields`, and `exportFormFieldsAsObject` methods. The following formats are supported:

* FDF
* XFDF
* JSON

For more information, see the [Form fields documentation](./import-export-formfields/export-formfields).

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./formfields-api)
