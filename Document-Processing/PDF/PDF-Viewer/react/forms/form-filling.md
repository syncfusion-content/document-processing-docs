---
layout: post
title: Form filling in React PDF Viewer Control | Syncfusion
description: Learn to view, fill, export, and import PDF form fields in Syncfusion PDF Viewer, including disabling interaction and handling signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Filling PDF Forms in React PDF Viewer

The Syncfusion PDF Viewer supports three types of form-filling:

1.	[Filling Form Fields Programmatically](#fill-pdf-forms-programmatically)

    You can fill or update PDF form fields programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfieldsvalue) APIs. This approach is useful when form data needs to be set dynamically based on application logic.

2.	[Form Filling Through User Interface](#fill-pdf-forms-through-the-user-interface)

    Users can fill in PDF form fields directly through the PDF Viewer user interface by typing text, selecting options, or interacting with supported form elements.

3.	[Importing Form Field Data](#fill-pdf-forms-through-import-data)

    The PDF Viewer allows you to import form field data into an existing PDF document. This enables pre filled forms using external data sources.

## Fill PDF forms programmatically 

You can update the values of PDF form fields programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. This method allows you to set or modify form field values dynamically based on application logic, without user interaction.

The following example demonstrates how to update PDF form field values programmatically:

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
  TextSearch,
  Annotation,
  FormFields,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = React.useRef(null);

  const handleFillForm = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    // Retrieve form fields from the viewer
    const fields =
      (viewer.retrieveFormFields && viewer.retrieveFormFields()) ||
      viewer.formFieldCollection ||
      [];

    // Find by name or fallback to the first field
    const field = fields.find((f) => f && f.name === 'name') || fields[0];

    if (field) {
      field.value = 'John Doe';
      field.tooltip = 'First';
      // Push changes to viewer
      viewer.updateFormFieldsValue(field);
    } else {
      console.warn('No form fields available to update.');
    }
  };

  return (
    <div>
      <div className="control-section" style={{ marginBottom: 12 }}>
        <button id="updateBtn" onClick={handleFillForm}>
          Fill Form Fields
        </button>
      </div>

      <div className="control-section">
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          // Use a PDF that contains form fields
          documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
          // Match this with your installed ej2 version if needed
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px', width: '100%' }}
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
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Fill PDF forms through the User Interface

The Syncfusion PDF Viewer allows users to fill PDF form fields directly through the user interface without using code. Users can click on form fields and enter or select values based on the field type.

![Form Filling](../../javascript-es6/images/FormFields.gif)

The PDF Viewer supports common form fields such as text boxes, check boxes, radio buttons, drop-down lists, list boxes, and signature fields. Filled values can be edited at any time, and the entered data is retained during the viewing session.

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/prefilledforms-cs1" %}

## Fill PDF forms through Import Data 

The Syncfusion PDF Viewer allows you to import form field data into an existing PDF document using the [importFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importformfields) API. This feature enables you to pre-fill form fields using data from an external source without requiring manual user input.

Imported form field data is automatically mapped to the corresponding form fields in the PDF document based on the field names. Once the data is imported, the populated values are displayed in the PDF Viewer and can be edited through the user interface if required.

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
  Annotation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  FormFields,
  FormDesigner,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

// We import the enum from the core package (not the React wrapper)
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

function App() {
  const viewerRef = React.useRef(null);

  const handleImportJson = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    // NOTE:
    // The first parameter can be:
    //  - a file path/url (if accessible from the client),
    //  - or a File/Blob stream from an <input type="file"> in real apps.
    // Replace 'File' with your actual file or path as per your integration.
    viewer.importFormFields('File', FormFieldDataFormat.Json);
  };

  return (
    <div>
      <div className="control-section" style={{ marginBottom: 12 }}>
        <button id="importJson" onClick={handleImportJson}>
          Import JSON
        </button>
      </div>

      <div className="control-section">
        <PdfViewerComponent
          ref={viewerRef}
          id="pdfViewer"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          // Use the same version as in your TS snippet
          resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
          style={{ height: '640px', width: '100%' }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              ThumbnailView,
              BookmarkView,
              TextSelection,
              FormFields,
              FormDesigner
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

For more details, see [Import Form Data](./import-export-form-fields/import-form-fields).

## How to get the filled data and store it to a backing system

You can export the filled form field data from the PDF Viewer and store it in a backing system such as a database or file storage. The exported data can later be imported to restore the form state.

For more details, see [Export Form Data](./import-export-form-fields/export-form-fields).

## How to Validate Form Fields using `validateFormFields` Event

The [validateFormFields](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields) event in the Syncfusion PDF Viewer is triggered when a user tries to download or submit a form while validation is enabled. You can use the [retrieveFormFields()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#validateformfields) API to get all the form fields and check them one by one to see if any form fields values are empty.

This validation applies to all form field types in the PDF Viewer. A textbox is empty if no text is entered, a list box or dropdown is empty if no item is selected, a signature or initial field is empty if the user has not signed, and radio buttons or checkboxes are empty if none are chosen. 
By enabling [enableFormFieldsValidation](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) and wiring the event, you can go through each field and stop the action if required fields are not filled.

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
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewerRef = React.useRef(null);

  // Runs after the document is loaded into the viewer
  const handleDocumentLoad = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    // Add a required Email field
    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required',
    });

    // Add a required Phone field
    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'Phone',
      bounds: { X: 146, Y: 300, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Phone number is required',
    });
  };

  // Validates only the added fields on form submit/validate trigger
  const handleValidateFormFields = (args) => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const fields = viewer.retrieveFormFields ? viewer.retrieveFormFields() : [];

    fields.forEach((field) => {
      if ((field.name === 'Email' || field.name === 'Phone') && !field.value) {
        alert(field.name + ' field cannot be empty.');
        args.isFormSubmitCancelled = true;
      }
    });
  };

  return (
    <div className="control-section">
      <PdfViewerComponent
        ref={viewerRef}
        id="pdfViewer"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
        // Enable built-in validation flow
        enableFormFieldsValidation={true}
        // Hook events
        documentLoad={handleDocumentLoad}
        validateFormFields={handleValidateFormFields}
        style={{ height: '680px', width: '100%' }}
      >
        <Inject
          services={[
            Toolbar,
            Magnification,
            Navigation,
            LinkAnnotation,
            ThumbnailView,
            BookmarkView,
            TextSelection,
            Annotation,
            FormDesigner,
            FormFields,
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

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), [style](./manage-form-fields/customize-form-fields) and [remove](./manage-form-fields/remove-form-fields) form fields
- [Edit form fields](./manage-form-fields/edit-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)