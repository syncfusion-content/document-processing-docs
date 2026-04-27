---
layout: post
title: Manage local storage in TypeScript PDF Viewer | Syncfusion
description: Learn how to control session-specific data storage in the TypeScript PDF Viewer using the enableLocalStorage property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Manage local storage in PDF Viewer

Set `enableLocalStorage` to manage storage behavior. When `true`, session-specific data is kept in memory; when `false` (default), session storage is used.

### Use enableLocalStorage

Set `enableLocalStorage` to manage storage behavior. When `true`, data is kept in memory; otherwise, session storage is used.

```ts
import { pdf } from '@syncfusion/ej2';
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
});
// Enable local storage
pdfviewer.enableLocalStorage = true;
pdfviewer.appendTo('#PdfViewer');
```

### Considerations

- Memory usage can increase when using in-memory storage with large documents or many interactive elements.
- Dispose of the PDF Viewer instance when no longer needed to avoid memory leaks.
- Default: `enableLocalStorage` is `false`, so session storage is used unless changed.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)
