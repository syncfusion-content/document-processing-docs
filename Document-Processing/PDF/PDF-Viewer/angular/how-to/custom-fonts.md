---
layout: post
title: Add Custom Fonts to the PDF Viewer Using the PDF Document | Syncfusion
description: Learn how to add custom fonts using the PDF document in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom fonts to the PDF Viewer used in the PDF document

To use custom fonts in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer within a PDF document, add the custom TTF font files to the resource URL directory and configure the viewer to load these fonts. Custom font names can be specified using the **customFonts** property, which accepts an array of font names.

The following steps customize the selection border:

**Step 1:** Add the custom TTF font files to the resource URL path referenced in the application. For example, place the custom TTF files in the `ej2-pdfviewer-lib` folder, which serves as the resource URL path.

**Step 2:** The following code snippet shows how to add custom fonts to the PDF Viewer.

```typescript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.customFonts = ["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"];
    viewer.appendTo("#pdfViewer");

```

By following these steps, custom fonts can be successfully integrated and used in PDF documents displayed in the EJ2 PDF Viewer.
