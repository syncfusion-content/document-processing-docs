---
layout: post
title: Flatten Annotations Before Saving the PDF | Syncfusion
description: Learn how all about how to flatten annotations and formfields before saving a PDF in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten Annotations Before Saving the PDF in React
Flattening annotations permanently merges them into the PDF content. Once flattened:
- Annotations are **no longer editable** in any PDF viewer.
- Useful for **secure sharing**, preventing modifications.
- Ideal when **finalizing markup** before distribution.

## How to Flatten Annotations

To flatten documents when they are uploaded/loaded into the viewer, see [Flatten on Load](../document-handling/preprocess-pdf#flatten-on-load).  

Use the example below to flatten at export time (on download).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
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
  FormDesigner,
  PageOrganizer,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
import {
  PdfDocument
} from '@syncfusion/ej2-pdf';

function Default() {
  let viewer;

  const flattenPdf = () => {
    viewer.saveAsBlob().then((value) => {
      const reader = new FileReader();
      reader.onloadend = function () {
        const arrayBuffer = reader.result;
        const byteArray = new Uint8Array(arrayBuffer);
        const document = new PdfDocument(byteArray);
        // Flatten all annotations and form fields
        document.flatten = true;
        document.save('flattened.pdf');
      };
      reader.readAsArrayBuffer(value);
    });
  };

  return (
    <div>
      <div className="control-section">
        <button onClick={flattenPdf}>Flatten and download PDF</button>

        <PdfViewerComponent
          ref={(scope) => { viewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
          style={{ height: '640px' }}
        >
          <Inject
            services={[
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
              FormDesigner,
              PageOrganizer,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
{% endraw %}
{% endhighlight %}
{% endtabs %}


## Notes

- Flattening applies to **all annotation types**: text markup, shapes, stamps, notes, ink, and form fields.
- Once flattened, annotations **cannot be edited or removed**.
- Use flattening **only at export time**, not during regular document interactions.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)