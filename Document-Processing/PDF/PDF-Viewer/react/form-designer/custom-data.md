---
layout: post
title: Add custom data to form fields in React Pdf Viewer | Syncfusion
description: Learn how to attach, update, and read custom Data on PDF form fields using the Form Designer UI and APIs in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add custom data to form fields in React

You can associate arbitrary metadata with any form field using the customData property. This is useful for storing business IDs, validation hints, tags, or any app-specific information alongside the field. The data stays with the field object during the viewer session and can be accessed whenever you query or update fields.

N> customData is a free-form object. You control both its shape and how it is used in your application.

## Add custom data when creating fields (programmatically)

Pass a customData object in the second parameter of addFormField. You can include any serializable values.

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

N> To configure the server-backed PDF Viewer, set:
`viewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

## Set default custom data for UI-created fields

When users add fields via the Form Designer toolbar, you can predefine default customData using the per-field settings objects.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (
    <div>
      <div className='control-section'>
        <PdfViewerComponent
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ height: '680px' }}
          // Example: default custom data for all new Textbox fields added from the toolbar
          textFieldSettings={{
            name: 'Textbox',
            customData: { group: 'contact', createdBy: 'designer', requiredRole: 'user' }
          }}
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

You can do the same for other field types using passwordFieldSettings, checkBoxFieldSettings, radioButtonFieldSettings, listBoxFieldSettings, dropDownFieldSettings, signatureFieldSettings, and initialFieldSettings.

## Update or replace custom data on existing fields

Use updateFormField to set or modify the customData of any existing field (retrieved by object or ID).

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

Tip: You can merge new values with existing ones in your app code before calling updateFormField.

## Read custom data

You can read customData from any field at any time. Typical entry points:
- After document load
- On your own UI actions (save, validate, route, etc.)

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

## Notes and best practices

- Keep customData small and serializable (plain objects, arrays, numbers, strings, booleans).
- Treat customData as application metadata. Use it to drive business rules, validation, or routing in your app.
- When cloning or copying fields in your UI, also copy or adjust customData as needed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Group form fields](./group-formfields)
- [Form constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./formfields-api)