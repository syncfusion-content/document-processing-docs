---
layout: post
title: Form validation in the React PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate form fields in React PDF Viewer

The PDF Viewer Component can validate form fields during print, download or submit form. Use the [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property to turn on validation and handle the [validateFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/validateformfieldsargs) event to review which required fields are not filled.

When validation is enabled and the user attempts to print, download or submit form, the event fires with a list of non-filled fields in args.nonFillableFields. You can cancel the operation, show a message, or focus the first invalid field.

## Enable validation

Set `enableFormFieldsValidation` to true and wire the validateFormFields event.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function documentLoaded () {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }});
  }
  function validateFormFields(args){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.nonfilledFormFields = args.nonFillableFields
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        documentLoad={documentLoaded}
        enableFormFieldsValidation={true}
        ValidateFormFields= {validateFormFields}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function documentLoaded () {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 }});
  }
  function validateFormFields(args){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.nonfilledFormFields = args.nonFillableFields
  }
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        documentLoad={documentLoaded}
        enableFormFieldsValidation={true}
        ValidateFormFields= {validateFormFields}
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Mark a field as required and validate

The snippet below creates a required Textbox and demonstrates validation blocking print until the field is filled.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields
} from '@syncfusion/ej2-react-pdfviewer';

let pdfviewer;

function App() {
  function documentLoaded() {
    const viewer = document.getElementById('container').ej2_instances[0];
    // Add a required Textbox with tooltip
    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required'
    });
  }

  function validateFormFields(args) {
    // args.nonFillableFields: array of fields that are required but not filled
    if (args && args.nonFillableFields && args.nonFillableFields.length) {
      const missingNames = args.nonFillableFields.map(f => f.name).join(', ');
      alert('Please fill all required fields. Missing: ' + missingNames);
      // Optional: store for later use/debug
      const viewer = document.getElementById('container').ej2_instances[0];
      viewer.nonfilledFormFields = args.nonFillableFields;
      // Printing is automatically blocked by the viewer when validation fails
    }
  }

  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          documentLoad={documentLoaded}
          enableFormFieldsValidation={true}
          ValidateFormFields={validateFormFields}
          style={{ height: '640px' }}
        >
          <Inject services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
            ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields
          ]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields
} from '@syncfusion/ej2-react-pdfviewer';

let pdfviewer;

function App() {
  function documentLoaded() {
    const viewer = document.getElementById('container').ej2_instances[0];
    // Add a required Textbox with tooltip
    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required'
    });
  }

  function validateFormFields(args) {
    if (args && args.nonFillableFields && args.nonFillableFields.length) {
      const missingNames = args.nonFillableFields.map(f => f.name).join(', ');
      alert('Please fill all required fields. Missing: ' + missingNames);
      const viewer = document.getElementById('container').ej2_instances[0];
      viewer.nonfilledFormFields = args.nonFillableFields;
      // Printing stays blocked until required fields are filled
    }
  }

  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
          documentLoad={documentLoaded}
          enableFormFieldsValidation={true}
          ValidateFormFields={validateFormFields}
          style={{ height: '640px' }}
        >
          <Inject services={[
            Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
            ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields
          ]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Tips

- Use isRequired on individual fields to include them in the validation check.
- The event only fires when a print or download action is invoked.
- To perform custom checks (e.g., regex for email), iterate over pdfviewer.retrieveFormFields() and apply your own logic before triggering print or download.

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields API](./formfields-api)