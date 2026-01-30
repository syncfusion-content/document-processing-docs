---
layout: post
title: Move and Resize form fields in the React PDF Viewer | Syncfusion
description: Learn how to move and resize PDF form fields using the UI and programmatically with APIs in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Move and Resize PDF Form Fields in React
- **Move**: Drag the form field to reposition it.
- **Resize**: Use the resize handles to change width and height.

![Moveing and Resizing a form field](../../../javascript-es6/images/move-resize-forms.gif)

## Move and Resize Fields Programmatically (API)
You can set absolute bounds or move fields by a delta.

**Set absolute bounds**

{% tabs %}
{% highlight js tabtitle="index.js" %}
import * as ReactDOM from 'react-dom/client';
import React, { useRef, useCallback } from 'react';
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
  Annotation,
  TextSearch,
  FormDesigner,
  FormFields,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = useRef(null);

  const onDocumentLoad = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.formDesignerModule.addFormField('Textbox', {
      name: 'First Name',
      bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
    });

    viewer.formDesignerModule.addFormField('Password', {
      name: 'Password',
      bounds: { X: 338, Y: 229, Width: 150, Height: 24 },
    });

    viewer.formDesignerModule.addFormField('SignatureField', {
      name: 'Sign Here',
      bounds: { X: 146, Y: 280, Width: 200, Height: 43 },
    });
  }, []);

  const resizeAndMove = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const fields = (viewer.retrieveFormFields?.() || viewer.formFieldCollection || []);
    if (!fields.length) return;

    const field = fields.find(f => f.name === 'First Name') || fields[0];
    if (!field) return;

    viewer.formDesignerModule.updateFormField(field, {
      bounds: { X: 140, Y: 210, Width: 220, Height: 24 },
    });
  }, []);

  return (
    <div>
      <div className="control-section">
        <div style={{ marginBottom: 8, display: 'flex', gap: 8 }}>
          <button onClick={resizeAndMove}>Resize and Move “First Name”</button>
        </div>

        <PdfViewerComponent
          ref={viewerRef}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          documentLoad={onDocumentLoad}
          style={{ height: '680px' }}
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
              FormDesigner,
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


## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)