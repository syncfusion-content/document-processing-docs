---
layout: post
title: Remove form fields in the React PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Remove PDF Form Fields from a PDF in React

The PDF Viewer supports removing form fields using the Form Designer UI or programmatically via the API.

## Remove form fields using the UI
**Steps:**
1. Enable **Form Designer** mode.
2. Select the form field.
3. Click **Delete** in the toolbar or press the **Delete** key.

![Form Designer toolbar showing Delete form field icon](../../../javascript-es6/images/ui-del-formfields.png)

## Remove form fields programmatically
Use `deleteFormField()` with a field reference or the field `id`. The method accepts either a field object returned by `retrieveFormFields()` or a numeric/string id. Example usage is shown in the code sample below.

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

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)