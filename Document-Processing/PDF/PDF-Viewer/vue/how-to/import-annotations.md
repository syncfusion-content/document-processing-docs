---
layout: post
title: Import annotations in Vue PDF Viewer | Syncfusion
description: Learn how to import annotations in the Syncfusion Vue PDF Viewer using the importAnnotations method.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import annotations in Vue PDF Viewer

Use the [`importAnnotations()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#importannotation) method to import annotations from a file or a string when loading a PDF document.

The following example shows how to import annotations during document load:

**Step 1:** Follow the steps in the [Get started with Vue PDF Viewer](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) guide to create a sample.

**Step 2:** Add the following code to import annotations when a PDF is loaded.

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
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
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://localhost:44391/',
    };
  },
  provide: {
    PdfViewer: [
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
      FormDesigner,
      FormFields,
      PageOrganizer,
    ],
  },
  mounted: function () {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    document.getElementById('importAnnot').addEventListener('click', () => {
      viewer.importAnnotation({
        pdfAnnotation: {
          d: [
            {
              ShapeAnnotationType: 'Square',
              Author: 'Guest',
              AnnotationSelectorSettings: {
                selectionBorderColor: '',
                resizerBorderColor: 'black',
                resizerFillColor: '#FF4081',
                resizerSize: 8,
                selectionBorderThickness: 1,
                resizerShape: 'Square',
                selectorLineDashArray: [],
                resizerLocation: 3,
                resizerCursorType: null,
              },
              ModifiedDate: '4/22/2021, 10:33:04 AM',
              Subject: 'Rectangle',
              Note: '',
              IsCommentLock: false,
              StrokeColor: 'rgba(255,0,0,1)',
              FillColor: 'rgba(255,255,255,0)',
              Opacity: 1,
              Bounds: {
                X: 124,
                Y: 76,
                Width: 202,
                Height: 154,
                Location: { X: 124, Y: 76 },
                Size: { IsEmpty: false, Width: 202, Height: 154 },
                Left: 124,
                Top: 76,
                Right: 326,
                Bottom: 230,
              },
              Thickness: 2,
              BorderStyle: 'Solid',
              BorderDashArray: 0,
              RotateAngle: 'RotateAngle0',
              IsCloudShape: false,
              CloudIntensity: 0,
              RectangleDifference: null,
              VertexPoints: null,
              LineHeadStart: null,
              LineHeadEnd: null,
              IsLocked: false,
              AnnotName: 'e9a14dbe-5d09-4226-329e-c6edab201284',
              Comments: null,
              State: '',
              StateModel: '',
              AnnotType: 'shape',
              EnableShapeLabel: false,
              LabelContent: null,
              LabelFillColor: null,
              LabelBorderColor: null,
              FontColor: null,
              FontSize: 0,
              CustomData: null,
              LabelBounds: {
                X: 0,
                Y: 0,
                Width: 0,
                Height: 0,
                Location: { X: 0, Y: 0 },
                Size: { IsEmpty: true, Width: 0, Height: 0 },
                Left: 0,
                Top: 0,
                Right: 0,
                Bottom: 0,
              },
              LabelSettings: null,
              AnnotationSettings: {
                minWidth: 0,
                maxWidth: 0,
                minHeight: 0,
                maxHeight: 0,
                isLock: false,
                isPrint: true,
              },
              AllowedInteractions: ['None'],
              IsPrint: true,
              ExistingCustomData: null,
            },
          ],
        },
      });
    });
    document.getElementById('import').addEventListener('click', function () {
      viewer.importAnnotation('F# Succinctly.xfdf');
    });
  },
};
</script>
```

In this example, the PDF Viewer loads a document and then imports annotations from a string. The imported annotations are added to the viewer and displayed along with the document.

Alternatively, annotations can be imported from a file in JSON or XFDF format.

```html
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
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
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://localhost:44391/',
    };
  },
  provide: {
    PdfViewer: [
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
      FormDesigner,
      FormFields,
      PageOrganizer,
    ],
  },
  mounted: function () {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    document.getElementById('import').addEventListener('click', function () {
      viewer.importAnnotation('F# Succinctly.xfdf');
    });
  },
};
</script>
```
