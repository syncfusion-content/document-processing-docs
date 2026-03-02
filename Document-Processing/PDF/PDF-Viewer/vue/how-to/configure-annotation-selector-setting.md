---
layout: post
title: Configure annotation selector settings in Vue PDF Viewer | Syncfusion
description: Learn how to configure annotation selector settings in the Vue PDF Viewer using annotationSelectorSettings and related options.
control: AnnotationSelector Setting
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Configure annotation selector settings

AnnotationSelectorSettingsModel

Use the [annotationSelectorSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationSelectorSettings/) property to customize the appearance and interaction behavior of the annotation selector in the Vue PDF Viewer UI.

The [AnnotationSelectorSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationSelectorSettingsModel/) defines selector appearance and behavior settings—such as border colors, resizer appearance, and selector line style—providing fine-grained control over how annotations are displayed and manipulated.

### How to Configure Annotation Selector Settings

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:**	 Add the following code snippet to configure the annotation selector Settings in the PDF Viewer.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :annotation-selector-settings="annotationSelectorSettings">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner,
         PageOrganizer, AnnotationResizerLocation, CursorType} from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data () {
    return {
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      annotationSelectorSettings: {
        selectionBorderColor: 'blue',
        resizerBorderColor: 'red',
        resizerFillColor: '#4070ff',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Circle',
        selectorLineDashArray: [5, 6],
        resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
        resizerCursorType: CursorType.grab
      }
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},
}
</script>

{% endhighlight %}
{% endtabs %}

#### Key properties include:

- selectionBorderColor: Sets the color for the border around selected annotations.
- resizerBorderColor: Sets the color for the border of the resizer handles.
- resizerFillColor: Defines the fill color for the resizer handles.
- resizerSize: Determines the size of the resizer handles.
- selectionBorderThickness: Specifies the thickness of the selection border.
- resizerShape: Sets the shape of the resizer handles (for example, Circle or Square).
- selectorLineDashArray: Specifies the dash pattern for the selector line.
- resizerLocation: Determines where the resizers appear relative to the annotation (for example, Corners or Edges).
- resizerCursorType: Sets the cursor style when hovering over a resizer.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)
