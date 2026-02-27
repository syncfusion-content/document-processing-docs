---
layout: post
title: Add custom data to form fields in React Pdf Viewer | Syncfusion
description: Learn how to attach, update, and read custom Data on PDF form fields using the Form Designer UI and APIs in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add Custom Data to PDF Form Fields in React PDF Viewer

The **Syncfusion React PDF Viewer** allows you to attach **custom application-specific data** to form fields by using the customData property. This enables you to associate business identifiers, tags, validation hints, or workflow metadata with form fields.

Custom data remains associated with the form field for the duration of the viewer session and can be accessed or updated whenever the field is queried or modified.

This article explains how to:
- [Add custom data when creating form fields](#add-custom-data-while-creating-pdf-form-fields)
- [Define default custom data for fields created using the UI](#set-default-custom-data-for-pdf-form-fields-added-using-ui)
- [Update or replace custom data for existing fields](#update-or-replace-pdf-form-field-custom-data)
- [Read custom data from form fields](#read-custom-data-from-pdf-form-fields)
- [Apply best practices when using custom data](#best-practices)

**Key Points**
- customData is a **free form object**; you control its structure.
- Use only **serializable values** such as objects, arrays, strings, numbers, and booleans.
- Custom data does not affect the field appearance or behavior unless consumed by your application logic.

## Add Custom Data While Creating PDF Form Fields

Attach custom data at field creation by passing a `customData` object in the settings parameter of `addFormField()`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const meta = { businessId: 'C-1024', tags: ['profile', 'kiosk'], requiredRole: 'admin' };
    viewerRef.current?.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 229, Width: 200, Height: 24 },
      // Attach any custom metadata your app needs
      customData: meta
    });
  };

  return (
    <div>
      <div className='control-section'>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
          documentLoad={onDocumentLoad}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
            Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}


## Set Default Custom Data for PDF Form Fields Added Using UI

When form fields are added via the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar), define default `customData` so newly created fields inherit it. Default custom data is configured using per-field settings objects such as:

- [textFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#textfieldsettings)
- [passwordFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#passwordfieldsettings)
- [checkBoxFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#checkboxfieldsettings)
- [radioButtonFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#radiobuttonfieldsettings)
- [listBoxFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#listboxfieldsettings)
- [dropDownFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#dropdownfieldsettings)
- [signatureFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#signaturefieldsettings)
- [initialFieldSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#initialfieldsettings)

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const defaultTextFieldSettings = {
    name: 'Textbox',
    customData: { group: 'contact', createdBy: 'designer', requiredRole: 'user' }
  };
  const defaultCheckBoxFieldSettings = {
    name: 'Checkbox',
    customData: { consentType: 'marketing', defaultChecked: false }
  };
  return (
    <div>
      <div className='control-section'>
        <PdfViewerComponent
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
          // Example: default custom data for all new Textbox fields added from the toolbar
          textFieldSettings={defaultTextFieldSettings}
          checkBoxFieldSettings={defaultCheckBoxFieldSettings}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
            Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Update or Replace PDF Form Field Custom Data

Modify an existing field's `customData` by using the [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) method. The field may be identified by its object reference or field ID.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const updateFirstField = () => {
    const fields = viewerRef.current?.formFieldCollection || [];
    if (!fields.length) { return; }
    const target = fields[0];
    viewerRef.current?.formDesignerModule.updateFormField(target, {
      customData: { group: 'profile', flags: ['pii', 'masked'], updatedAt: Date.now() }
    });
  };

  return (
    <div>
      <div className='control-section'>
        <button onClick={updateFirstField}>Update First Field Custom Data</button>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
            Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

**Tip:**
Merge new values into the existing `customData` object before calling [updateFormField()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#updateformfields) to avoid unintentionally overwriting existing metadata.

## Read Custom Data from PDF Form Fields

Access the `customData` property from any form field at any point in the application flow, for example:
- after the document is loaded
- during save or submit operations
- while performing validation or conditional routing

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = () => {
    const fields = viewerRef.current?.formFieldCollection || [];
    fields.forEach((f) => {
      console.log('Field', f.name, 'customData:', f.customData);
    });
  };

  return (
    <div>
      <div className='control-section'>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
          documentLoad={onDocumentLoad}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
            Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

## Best Practices

- Treat customData as application metadata, not display data.
- Use it to drive business rules, validation logic, and workflow decisions.
- Keep the data minimal and structured for easy processing.
- When cloning or copying form fields, ensure customData is copied or updated as required.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form flags](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)