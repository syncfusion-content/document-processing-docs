---
layout: post
title: Import annotations in React PDF Viewer | Syncfusion
description: Learn how to import annotations in Syncfusion React PDF Viewer using UI options and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import annotations in React PDF Viewer

Annotations can be imported into the PDF Viewer using the built-in UI or programmatically. The UI accepts JSON and XFDF files from the Comments panel; programmatic import accepts an annotation object previously exported by the viewer.

## Import using the UI (Comments panel)

The Comments panel provides import options in its overflow menu:

- Import annotations from JSON file
- Import annotations from XFDF file

Steps:
1. Open the Comments panel in the PDF Viewer.
2. Click the overflow menu (three dots) at the top of the panel.
3. Choose the appropriate import option and select the file.

All annotations in the selected file are applied to the current document.

![Import Annotation](../../../javascript-es6/annotations/annotation-images/import-annot.png)

## Import programmatically (from object)  

Import annotations from an object previously exported using `exportAnnotationsAsObject()`. Only objects produced by the viewer can be re-imported with the [`importAnnotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importannotation) API.

Example: export annotations as an object and import them back into the viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-react-pdfviewer';

function getViewer() { return document.getElementById('container').ej2_instances[0]; }

// Hold the exported annotation object between calls
let exportedObject = null;

function exportAsObject() {
  getViewer().exportAnnotationsAsObject().then((value) => {
    // Persist or transmit the object as needed (DB/API). Keep for future import.
    console.log('Exported annotation object:', value);
    exportedObject = value;
  });
}

function importFromObject() {
  if (exportedObject) {
    getViewer().importAnnotation(JSON.parse(exportedObject));
  }
}

function App() {
  return (
    <>
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
        <button onClick={exportAsObject}>Export as Object</button>
        <button onClick={importFromObject}>Import from Object</button>
      </div>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '650px' }}
      >
        <Inject services={[Toolbar, Annotation, TextSelection]} />
      </PdfViewerComponent>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> Only objects produced by the viewer (for example, by `exportAnnotationsAsObject()`) are compatible with `importAnnotation`. Persist exported objects in a safe storage location (database or API) and validate them before import.

## Common use cases

- Restore annotations saved earlier (for example, from a database or API)
- Apply reviewer annotations shared as JSON/XFDF files via the Comments panel
- Migrate or merge annotations between documents or sessions
- Support collaborative workflows by reloading team annotations

[View sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../../overview)
- [Annotation Types](../../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export Annotation](../export-import/export-annotation)
- [Import Export Events](../export-import/export-import-events)
- [Annotation Permission](../../annotations/annotation-permission)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)