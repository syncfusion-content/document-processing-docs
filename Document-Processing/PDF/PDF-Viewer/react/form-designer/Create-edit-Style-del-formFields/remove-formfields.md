---
layout: post
title: Remove form fields in the React PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove form fields in React PDF Viewer control

The PDF Viewer component allows users to remove PDF form fields using the Form Designer UI and programmatically.

## Remove form fields using the UI

You can remove designed form fields directly from the Form Designer toolbar.

Steps:

- Select the target form field on the page.
- Click the Delete Form Field icon on the Form Designer toolbar.
- Alternatively, press the `Delete key` after selecting one or more fields.

![Form Designer toolbar with Delete icon](../../../javascript-es6/images/ui-del-formfields.png)

## Remove form fields programmatically

Use the `deleteFormField` method to remove form fields programmatically. Retrieve the target field from the `formFieldCollections` property (by object or ID) and pass it to `deleteFormField`.

The following example adds three fields on document load (Textbox, Password, and Signature) and shows two ways to remove them using buttons.

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef, useCallback } from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormDesigner, FormFields, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'First Name',
      bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
    });

    viewer.formDesignerModule.addFormField('Password', {
      name: 'Password',
      bounds: { X: 338, Y: 229, Width: 150, Height: 24 }
    });

    viewer.formDesignerModule.addFormField('SignatureField', {
      name: 'Sign Here',
      bounds: { X: 146, Y: 280, Width: 200, Height: 43 }
    });
  }, []);

  const deleteAll = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer || !viewer.formFieldCollection) return;
    const fields = [...viewer.formFieldCollection]; // clone to avoid mutation issues
    fields.forEach(field => viewer.formDesignerModule.deleteFormField(field));
  }, []);

  const deleteById = useCallback(() => {
    const viewer = viewerRef.current;
    const list = viewer?.formFieldCollection || [];
    if (list.length > 0) {
      const id = list[0].id;
      if (id) viewer.formDesignerModule.deleteFormField(id);
    }
  }, []);

  return (
    <div>
      <div className='control-section'>
        <div style={{ marginBottom: 8 }}>
          <button onClick={deleteAll}>Delete Form Fields</button>
          <button onClick={deleteById} style={{ marginLeft: 8 }}>Delete First Field By ID</button>
        </div>
        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          // serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/" // Optional server-backed
          documentLoad={onDocumentLoad}
          style={{ height: '680px' }}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
        </PdfViewerComponent>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

N> To configure the server-backed PDF Viewer, add the following `serviceUrl` as a prop in the `index.js` file:
`serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"`

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-formfields)
- [Edit form fields](./edit-formfields)
- [Style form fields](./style-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)