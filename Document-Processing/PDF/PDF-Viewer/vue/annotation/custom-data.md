---
layout: post
title: Custom Data in annotations in Vue PDF Viewer | Syncfusion
description: Learn here all about how to use add custom Data in annotation in Syncfusion Vue PDF Viewer Component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom data in annotations in Vue

Annotations can include custom key–value data via the `customData` property. This is supported at two levels:

- Default level via `annotationSettings`: applies to all annotations created through the UI.
- Per-annotation-type level: provide `customData` inside specific annotation-type settings (for example, `highlightSettings`, `rectangleSettings`).

The `customData` value can be any JSON-serializable object. It is preserved during annotation export/import and is available at runtime on the annotation object.

## Default custom data (annotationSettings)

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :annotationSettings="annotationSettings"
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
      annotationSettings: {
        customData: {
          userId: "user123",
          department: "Engineering"
        }
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

## Custom data for Individual Annotation

Provide customData inside individual annotation-type settings when you want specific payloads for different tools.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :highlightSettings="highlightSettings"
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
      highlightSettings: {
        customData: {
          annotationType: "highlight",
          priority: "high"
        }
      },
      rectangleSettings: {
        customData: {
          annotationType: "rectangle",
          severity: "medium"
        }
      },
      circleSettings: {
        customData: {
          annotationType: "circle",
          reviewed: false
        }
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

## Retrieve custom data at runtime

You can access the customData for any annotation through the viewer's annotationCollection. For example, wire a button click to iterate all annotations and read their custom payloads.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px;">
      <button @click="showCustomData">Show Custom Data</button>
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
    showCustomData: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const annotations = viewer.annotationCollection;
      if (annotations && annotations.length > 0) {
        annotations.forEach((annotation) => {
          if (annotation.customData) {
            console.log('Annotation ID: ' + annotation.id);
            console.log('Custom Data: ', annotation.customData);
          }
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

## Note

- `customData` can be any JSON-serializable object and is stored with the annotation.
- Custom data persists during export and import operations.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
