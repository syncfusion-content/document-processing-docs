---
layout: post
title: extractTextCompleted event in TypeScript PDF Viewer | Syncfusion
description: Learn how to use the extractTextCompleted event and isExtractText property in the Syncfusion TypeScript PDF Viewer to extract text and bounds.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Use extractTextCompleted to extract text in TypeScript PDF Viewer

Use the [isExtractText] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#isextracttext) property together with the [extractTextCompleted] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#extracttextcompleted) event to extract page text and its positional bounds from a loaded PDF document.

The following example shows how to enable text extraction and handle the completion event:

```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#PdfViewer');

viewer.isExtractText = true;
viewer.extractTextCompleted = args => {
    //Extract the Complete text of load document
    console.log(args);
    console.log(args.documentTextCollection[1]);
    //Extract the Text data.
    console.log(args.documentTextCollection[1][1].textData);
    //Extract Text in the Page.
    console.log(args.documentTextCollection[1][1].pageText);
    //Extracts the first text of the PDF document along with its bounds
    console.log(args.documentTextCollection[1][1].textData[0].Bounds);
};
```

Find the sample: [How to extract text](https://stackblitz.com/edit/3xmbg6-m3ff47?devtoolsheight=33&file=index.ts)
