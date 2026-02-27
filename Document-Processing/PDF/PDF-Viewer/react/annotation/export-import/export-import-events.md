---
layout: post
title: Import/Export events in React PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF Annotations in the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import/Export events in React PDF Viewer

Import/export events let developers monitor and control annotation data as it flows into and out of the PDF Viewer. These events enable validation, progress reporting, audit logging, and conditional blocking of import/export operations.

Common use cases:
- Progress UI and user feedback
- Validation and sanitization of imported annotation data
- Audit logging and telemetry
- Blocking or altering operations based on business rules

Each event exposes typed event-args: `ImportStartEventArgs`, `ImportSuccessEventArgs`, `ImportFailureEventArgs`, `ExportStartEventArgs`, `ExportSuccessEventArgs`, and `ExportFailureEventArgs` that describe the operation context.

## Import events
- [`importStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importstart): Triggers when an import operation starts.
- [`importSuccess`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importsuccess): Triggers when annotations are successfully imported.
- [`importFailed`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#importfailed): Triggers when importing annotations fails.

## Handle import events
Example: handle import events by wiring event props on `PdfViewerComponent`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}
      importStart={(args) => { console.log('Import started', args); }}
      importSuccess={(args) => { console.log('Import success', args); }}
      importFailed={(args) => { console.error('Import failed', args); }}
    >
      <Inject services={[Toolbar, Annotation, TextSelection]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Export events
- [`exportStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportstart): Triggers when an export operation starts.
- [`exportSuccess`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportsuccess): Triggers when annotations are successfully exported.
- [`exportFailed`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#exportfailed): Triggers when exporting annotations fails.

## Handle export events

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}
      exportStart={(args) => { console.log('Export started', args); }}
      exportSuccess={(args) => { console.log('Export success', args); }}
      exportFailed={(args) => { console.error('Export failed', args); }}
    >
      <Inject services={[Toolbar, Annotation, TextSelection]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> `importStart`, `importSuccess`, and `importFailed` cover the lifecycle of annotation imports; `exportStart`, `exportSuccess`, and `exportFailed` cover the lifecycle of annotation exports.

## See also

- [Annotation Overview](../../overview)
- [Annotation Types](../../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export Annotation](../export-import/export-annotation)
- [Import Annotation](../export-import/import-annotation)
- [Annotation Permission](../../annotations/annotation-permission)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)