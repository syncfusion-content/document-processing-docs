---
layout: post
title: Customize annotations in Vue PDF Viewer | Syncfusion
description: Learn how to customize PDF annotations in Syncfusion Vue PDF Viewer using UI tools and programmatic settings (defaults and runtime edits).
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize annotations in Vue

Annotation appearance and behavior (for example color, stroke color, thickness, and opacity) can be customized using the built‑in UI or programmatically. This page summarizes common customization patterns and shows how to set defaults per annotation type.

## Customize via UI

Use the annotation toolbar after selecting an annotation:
- Edit color: changes the annotation fill/text color
![Edit color](../images/edit_color.png)
- Edit stroke color: changes border or line color for shapes and lines types.
![Edit stroke color](../images/shape_strokecolor.png)
- Edit thickness: adjusts border or line thickness
![Edit thickness](../images/shape_thickness.png)
- Edit opacity: adjusts transparency
![Edit opacity](../images/shape_opacity.png)

Type‑specific options (for example, Line properties) are available from the context menu (right‑click > Properties) where supported.

## Set default properties during initialization

Set defaults for specific annotation types when creating the `PdfViewer` instance. Configure properties such as author, subject, color, and opacity using annotation settings. The examples below reference settings used on the annotation type pages.

Text markup annotations:

- Highlight: Set default properties before creating the control using [`highlightSettings`](../annotation-types/highlight-annotation)
- Strikethrough: Use [`strikethroughSettings`](../annotation-types/strikethrough-annotation)
- Underline: Use [`underlineSettings`](../annotation-types/underline-annotation)
- Squiggly: Use [`squigglySettings`](../annotation-types/squiggly-annotation)

Shape annotations:

- Line: Use [`lineSettings`](../annotation-types/line-annotation)
- Arrow: Use [`arrowSettings`](../annotation-types/arrow-annotation)
- Rectangle: Use [`rectangleSettings`](../annotation-types/rectangle-annotation)
- Circle: Use [`circleSettings`](../annotation-types/circle-annotation)
- Polygon: Use [`polygonSettings`](../annotation-types/polygon-annotation)

Measurement annotations:

- Distance: Use [`distanceSettings`](../annotation-types/distance-annotation)
- Perimeter: Use [`perimeterSettings`](../annotation-types/perimeter-annotation)
- Area: Use [`areaSettings`](../annotation-types/area-annotation)
- Radius: Use [`radiusSettings`](../annotation-types/radius-annotation)
- Volume: Use [`volumeSettings`](../annotation-types/volume-annotation)

Other annotations:

- Free Text: Use [`freeTextSettings`](../annotation-types/free-text-annotation)
- Ink: Use [`inkSettings`](../annotation-types/ink-annotation)
- Stamp: Use [`stampSettings`](../annotation-types/stamp-annotation)
- Sticky Notes: Use [`stickyNotesSettings`](../annotation-types/sticky-notes-annotation)
- Redaction: Use [`redactionSettings`](../annotation-types/redaction-annotation)

### Example: Set highlight defaults

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :highlightSettings="highlightSettings"
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
      highlightSettings: {
        author: "Document Reviewer",
        subject: "Important Text",
        color: "yellow",
        opacity: 0.5
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

### Example: Set shape defaults (Rectangle and Circle)

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :rectangleSettings="rectangleSettings"
      :circleSettings="circleSettings"
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
      rectangleSettings: {
        fillColor: "transparent",
        strokeColor: "red",
        thickness: 2,
        opacity: 0.8
      },
      circleSettings: {
        fillColor: "transparent",
        strokeColor: "blue",
        thickness: 3,
        opacity: 0.8
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

### Example: Set measurement annotation defaults

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :distanceSettings="distanceSettings"
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
      distanceSettings: {
        fillColor: "white",
        strokeColor: "green",
        thickness: 2,
        opacity: 0.8,
        fontSize: 12
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

## Modify annotation at runtime

Annotations can be modified programmatically after they are created. Retrieve an annotation from the collection, update its properties, and apply the changes using `editAnnotation()`.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px;">
      <button @click="modifyAnnotation">Modify Selected Annotation</button>
    </div>
    <ejs-pdfviewer 
      id="pdfViewer" 
      ref="pdfviewer"
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      style="height: 600px;">
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
    modifyAnnotation: function () {
      const viewer = this.$refs.pdfviewer;
      const annotation = viewer.selectedAnnotation;
      if (annotation) {
        annotation.fillColor = "red";
        annotation.opacity = 0.6;
        viewer.annotation.editAnnotation(annotation);
      }
    }
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
- [Delete Annotation](./delete-annotation)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
