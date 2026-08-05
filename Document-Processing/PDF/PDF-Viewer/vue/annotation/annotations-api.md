---
layout: post
title: Annotations API in Vue PDF Viewer | Syncfusion
description: Learn here all about how to read and configure annotations using APIs in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations API in Vue

The PDF Viewer provides APIs to read the loaded annotations and to configure global defaults for creating/editing annotations.

| API | Description |
|---|---|
| [annotationCollection](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotationcollection) | Gets the loaded document annotation collection. |
| [annotationDrawingOptions](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotationdrawingoptions) | Options to configure line-type annotation drawing behavior. |
| [annotationSelectorSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotationselectorsettings) | Configures the annotation selector (selection UI). |
| [annotationSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotationsettings) | Global defaults for all annotations. |
| [areaSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#areasettings) | Defaults for Area annotations. |
| [arrowSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#arrowsettings) | Defaults for Arrow annotations. |
| [circleSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#circlesettings) | Defaults for Circle annotations. |
| [customStamp](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#customstamp) | Defines custom stamp items. |
| [customStampSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#customstampsettings) | Defaults for Custom Stamp annotations. |
| [distanceSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#distancesettings) | Defaults for Distance annotations. |

## annotationCollection

Read the loaded document annotation collection from the viewer instance.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px;">
      <button @click="logAnnotations">Log Annotations</button>
    </div>
    <ejs-pdfviewer 
      id="pdfViewer" 
      ref="pdfviewer"
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      style="height: 650px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  },
  methods: {
    logAnnotations: function () {
      const annotations = this.$refs.pdfviewer.annotationCollection;
      console.log('annotations');
      if (annotations && annotations.length > 0) {
        annotations.forEach((annotation) => {
          console.log('Annotation ID: ' + annotation.id);
          console.log('Type: ' + annotation.type);
          console.log('Page Index: ' + annotation.pageIndex);
        });
      } else {
        console.log('No annotations found');
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

---

## annotationDrawingOptions

Configure line-type annotation drawing behavior.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :annotationDrawingOptions="annotationDrawingOptions"
      style="height: 650px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      annotationDrawingOptions: {
        enableLineAngleConstraints: true,
        restrictLineAngleTo: [0, 45, 90, 135]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## annotationSelectorSettings

Configure the annotation selector (selection UI).

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :annotationSelectorSettings="annotationSelectorSettings"
      style="height: 650px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      annotationSelectorSettings: {
        selectionBorderColor: 'blue',
        resizerBorderColor: 'red',
        resizerFillColor: '#4070ff',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Circle',
        selectorLineDashArray: [5, 6],
        resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
        resizerCursorType: CursorType.grab
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Create and Modify Annotation](./create-modify-annotation)
- [Annotation Toolbar](../toolbar-customization)
- [Customize Annotation](./customize-annotation)
- [Export and Import Annotation](../export-import)
- [Annotation Events](./annotation-event)
