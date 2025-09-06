---
layout: post
title: AnnotationSelector Setting in Vue Pdfviewer component | Syncfusion
description: Learn here all about AnnotationSelector Setting in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: AnnotationSelector Setting
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Configure Annotation Selector Settings

### Annotation Selector Settings

The [**annotationSelectorSettings**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationSelectorSettings/) property allows you to customize the appearance and behavior of the annotation selector in the UI.

The [**AnnotationSelectorSettingsModel**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationSelectorSettingsModel/) defines the settings for the annotation selector, including border colors, sizes, and shapes. It provides fine-grained control over how annotations are displayed and interacted with.

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
      resourceUrl:"https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib",
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

* **selectionBorderColor**: Sets the color for the border around selected annotations.

* **resizerBorderColor**: Sets the color for the border of the resizer handles.

* **resizerFillColor**: Defines the fill color for the resizer handles.

* **resizerSize**: Determines the size of the resizer handles.

* **selectionBorderThickness**: Specifies how thick the selection border should be.

* **resizerShape**: Allows you to choose the shape of the resizer handles (e.g., Circle or Square).

* **selectorLineDashArray**: Specifies the dash pattern for the selector line to enhance visual cues.

* **resizerLocation**: Determines where the resizer appear in relation to the annotation (e.g., Corners or Edges).

* **resizerCursorType**: Sets the cursor style when hovering over the resizer, improving user interaction.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)
