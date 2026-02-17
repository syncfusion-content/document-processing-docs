---
layout: post
title: Load Password Protected PDFs in React PDF Viewer | Syncfusion
description: Learn how to open password-protected PDF files in the Syncfusion React PDF Viewer by providing the password in the documentPath object.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load Password Protected PDFs in React PDF Viewer

This article explains how to load and display password-protected PDF files in the Syncfusion React PDF Viewer. The viewer can automatically decrypt and display the file when the correct password is provided.

---

## Tutorial: Open a Password-Protected PDF

To open a password-protected PDF, provide the password as part of the `documentPath` object. The viewer will use this password to decrypt and display the file.

---

## How-to Guide: Minimal Example

```tsx
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

function Default() {
  let viewer;
  const resourcesLoaded = () => {
    //pass PDF URL and passwod here as string
    viewer.load(
      'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      'Password'
    );
  };
  return (
    <div>
      <div className="control-section">
        {/* Render the PDF Viewer */}
        <PdfViewerComponent
          ref={(scope) => {
            viewer = scope;
          }}
          id="container"
          resourcesLoaded={resourcesLoaded}
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

```

---

## Explanation

When a password-protected PDF is loaded, the Syncfusion React PDF Viewer automatically uses the provided password to decrypt the file. If the password is incorrect or missing, the viewer will prompt for the password or display an error.

---

## Reference

- [React PDF Viewer API Reference](https://ej2.syncfusion.com/react/documentation/api/pdfviewer)
- [PDF Viewer Features](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started)

---

## See Also

- [Load PDF from URL (GitHub Sample)](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)
