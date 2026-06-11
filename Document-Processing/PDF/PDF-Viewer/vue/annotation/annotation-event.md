---
layout: post
title: Annotation Events in Vue PDF Viewer control | Syncfusion
description: Learn here all about Annotation Events in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Annotation Events
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer annotation events in Vue

The PDF Viewer control supports several annotation events that enable applications to respond to user interactions—adding, moving, resizing, selecting, and removing annotations. Examples in this article reference the resource URL shown in the code samples.

The annotation events supported by the PDF Viewer control are:

| Event                                                              | Description                                                                        |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [annotationAdd](#annotationadd)                      | Triggers when an annotation is added.                             |
| [annotationDoubleClick](#annotationdoubleclick)      | Triggers when an annotation is double-clicked.                    |
| [annotationMouseLeave](#annotationmouseleave)        | Triggers when the mouse cursor leaves an annotation.              |
| [annotationMouseover](#annotationmouseover)          | Triggers when the mouse cursor moves over an annotation.          |
| [annotationMove](#annotationmove)                    | Triggers when an annotation is moved.                             |
| [annotationMoving](#annotationmoving)                | Triggers while an annotation is being moved.                      |
| [annotationPropertiesChange](#annotationpropertieschange) | Triggers when an annotation's properties are changed.             |
| [annotationRemove](#annotationremove)                | Triggers when an annotation is removed.                           |
| [annotationResize](#annotationresize)                | Triggers when an annotation is resized.                           |
| [annotationSelect](#annotationselect)                | Triggers when an annotation is selected.                          |
| [annotationUnselect](#annotationunselect)            | Triggers when an annotation is unselected.                        |
| [beforeAddFreeText](#beforeaddfreetext)              | Triggers before adding free text.                                 |
| [addSignature](#addsignature)                        | Triggers when a signature is added.                               |
| [removeSignature](#removesignature)                  | Triggers when a signature is removed.                             |
| [resizeSignature](#resizesignature)                  | Triggers when a signature is resized.                             |
| [signaturePropertiesChange](#signaturepropertieschange) | Triggers when signature properties change.                        |
| [signatureSelect](#signatureselect)                  | Triggers when a signature is selected.                            |
| [signatureUnselect](#signatureunselect)              | Triggers when a signature is unselected.                          |            |

### annotationAdd

The [annotationAdd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationadd) event triggers when an annotation is added to a PDF document's page.

#### Event Arguments

For event data, see [AnnotationAddEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationAddEventArgs). It provides properties such as `annotationId`, `pageNumber`, `annotationType`, and `bounds`.

The following example illustrates how to handle the `annotationAdd` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationAdd="annotationAdded">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationAdded = function (args) {
      console.log('Annotation added with ID: ' + args.annotationId);
      console.log('Annotation type: ' + args.annotationType);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationAdd="annotationAdded">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationAdded: function (args) {
          console.log('Annotation added with ID: ' + args.annotationId);
          console.log('Annotation type: ' + args.annotationType);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationDoubleClick

The [annotationDoubleClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationdoubleclick) event triggers when an annotation is double-clicked.

#### Event Arguments

For event data, see [AnnotationDoubleClickEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationDoubleClickEventArgs).

The following example illustrates how to handle the `annotationDoubleClick` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationDoubleClick="annotationDoubleClicked">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationDoubleClicked = function (args) {
      console.log('Annotation double-clicked on page: ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationDoubleClick="annotationDoubleClicked">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationDoubleClicked: function (args) {
          console.log('Annotation double-clicked on page: ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMouseLeave

The [annotationMouseLeave](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationmouseleave) event triggers when the mouse cursor leaves an annotation.

#### Event Arguments

For event data, see [AnnotationMouseLeaveEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationMouseLeaveEventArgs).

The following example illustrates how to handle the `annotationMouseLeave` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMouseLeave="annotationMouseLeaved">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationMouseLeaved = function (args) {
      console.log('Annotation mouse leave event is triggered for annotation with ID: ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMouseLeave="annotationMouseLeaved">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationMouseLeaved: function (args) {
          console.log('Annotation mouse leave event is triggered for annotation with ID: ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMouseover

The [annotationMouseover](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationmouseover) event triggers when the mouse cursor moves over an annotation.

#### Event Arguments

For event data, see [AnnotationMouseOverEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationMouseOverEventArgs).

The following example illustrates how to handle the `annotationMouseover` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMouseover="annotationMouseovered">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationMouseovered = function (args) {
      console.log('Annotation mouse over event is triggered for annotation with ID: ' + args.annotationId);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMouseover="annotationMouseovered">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationMouseovered: function (args) {
          console.log('Annotation mouse over event is triggered for annotation with ID: ' + args.annotationId);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMove

The [annotationMove](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationmove) event triggers when an annotation is moved.

#### Event Arguments

For event data, see [AnnotationMoveEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationMoveEventArgs).

The following example illustrates how to handle the `annotationMove` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMove="annotationMoved">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationMoved = function (args) {
      console.log('Annotation moved. ID: ' + args.annotationId + ' on page ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMove="annotationMoved">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationMoved: function (args) {
          console.log('Annotation moved. ID: ' + args.annotationId + ' on page ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMoving

The [annotationMoving](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationmoving) event triggers while an annotation is being moved.

#### Event Arguments

For event data, see [AnnotationMovingEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationMovingEventArgs).

The following example illustrates how to handle the `annotationMoving` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMoving="annotationMovingd">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationMovingd = function (args) {
      console.log('Annotation is being moved. Current Action: ' + args.currentPosition);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationMoving="annotationMovingd">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationMovingd: function (args) {
          console.log('Annotation is being moved. Current Action: ' + args.currentPosition);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationPropertiesChange

The [annotationPropertiesChange](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationpropertieschange) event triggers when an annotation’s properties are changed.

#### Event Arguments

For event data, see [AnnotationPropertiesChangeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationPropertiesChangeEventArgs). It provides properties such as `annotationId`, `pageNumber`, and `action`.

The following example illustrates how to handle the `annotationPropertiesChange` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationPropertiesChange="annotationPropertiesChanged">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationPropertiesChanged = function (args) {
      console.log('Annotation properties changed for ID: ' + args.annotationId);
      console.log('isThicknessChanged: ' + args.isThicknessChanged);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationPropertiesChange="annotationPropertiesChanged">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationPropertiesChanged: function (args) {
          console.log('Annotation properties changed for ID: ' + args.annotationId);
          console.log('isThicknessChanged: ' + args.isThicknessChanged);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationRemove

The [annotationRemove](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationremove) event triggers when an annotation is removed.

#### Event Arguments

For event data, see [AnnotationRemoveEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationRemoveEventArgs). It provides properties such as `annotationId` and `pageNumber`.

The following example illustrates how to handle the `annotationRemove` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationRemove="annotationRemoved">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationRemoved = function (args) {
      console.log('Annotation removed with ID: ' + args.annotationId);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationRemove="annotationRemoved">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationRemoved: function (args) {
          console.log('Annotation removed with ID: ' + args.annotationId);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationResize

The [annotationResize](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationresize) event triggers when an annotation is resized.

#### Event Arguments

For event data, see [AnnotationResizeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationResizeEventArgs).

The following example illustrates how to handle the `annotationResize` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationResize="annotationResized">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationResized = function (args) {
      console.log('Annotation resized. ID: ' + args.annotationId);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationResize="annotationResized">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationResized: function (args) {
          console.log('Annotation resized. ID: ' + args.annotationId);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationSelect

The [annotationSelect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationselect) event triggers when an annotation is selected.

#### Event Arguments

For event data, see [AnnotationSelectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationSelectEventArgs).

The following example illustrates how to handle the `annotationSelect` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app"> 
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationSelect="annotationSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationSelected = function (args) {
      console.log('Annotation selected with ID: ' + args.annotationId);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationSelect="annotationSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationSelected: function (args) {
          console.log('Annotation selected with ID: ' + args.annotationId);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### annotationUnselect

The [annotationUnselect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotationunselect) event triggers when an annotation is unselected.

#### Event Arguments

For event data, see [AnnotationUnSelectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationUnSelectEventArgs).

The following example illustrates how to handle the `annotationUnselect` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationUnSelect="annotationUnSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const annotationUnSelected = function (args) {
      console.log('Annotation unselected with ID: ' + args.annotationId);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :annotationUnSelect="annotationUnSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      annotationUnSelected: function (args) {
          console.log('Annotation unselected with ID: ' + args.annotationId);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### beforeAddFreeText

The [beforeAddFreeText](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#beforeaddfreetext) event triggers before adding free text to the PDF Viewer.

#### Event Arguments

For event data, see [BeforeAddFreeTextEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/beforeAddFreeTextEventArgs).

The following example illustrates how to handle the `beforeAddFreeText` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :beforeAddFreeText="beforeAddFreeTexted">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const beforeAddFreeTexted = function (args) {
      console.log('Before adding free text on page: ' + args.pageIndex);
      // Set args.cancel to true to prevent adding the free text annotation
      // args.cancel = true;
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :beforeAddFreeText="beforeAddFreeTexted">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      beforeAddFreeTexted: function (args) {
          console.log('Before adding free text on page: ' + args.pageIndex);
          // Set args.cancel to true to prevent adding the free text annotation
          // args.cancel = true;
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

## Signature-related events

### addSignature

The [addSignature](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#addsignature) event triggers when a signature is added to the PDF Viewer.

#### Event Arguments

For event data, see [AddSignatureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/addSignatureEventArgs). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `addSignature` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :addSignature="signatureAdded">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const signatureAdded = function (args) {
      console.log('Signature added to page: ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :addSignature="signatureAdded">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      signatureAdded: function (args) {
          console.log('Signature added to page: ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### removeSignature

The [removeSignature](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#removesignature) event triggers when a signature is removed from the PDF Viewer.

#### Event Arguments

For event data, see [RemoveSignatureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/removeSignatureEventArgs). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `removeSignature` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :removeSignature="signatureRemoved">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const signatureRemoved = function (args) {
      console.log('Signature removed from page: ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :removeSignature="signatureRemoved">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      signatureRemoved: function (args) {
          console.log('Signature removed from page: ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resizesignature) event triggers when a signature is resized in the PDF Viewer.

#### Event Arguments

For event data, see [ResizeSignatureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/resizeSignatureEventArgs).

The following example illustrates how to handle the `resizeSignature` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :resizeSignature="signatureResized">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const signatureResized = function (args) {
      console.log('Signature resized on page ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :resizeSignature="signatureResized">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      signatureResized: function (args) {
          console.log('Signature resized on page ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#signaturepropertieschange) event triggers when signature properties are changed in the PDF Viewer.

#### Event Arguments

For event data, see [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs).

The following example illustrates how to handle the `signaturePropertiesChange` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :signaturePropertiesChange="signaturePropertiesChanged">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const signaturePropertiesChanged = function (args) {
      console.log('Signature properties changed on page ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :signaturePropertiesChange="signaturePropertiesChanged">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      signaturePropertiesChanged: function (args) {
          console.log('Signature properties changed on page ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#signatureselect) event triggers when a signature is selected in the PDF Viewer.

#### Event Arguments

For event data, see [SignatureSelectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/signatureSelectEventArgs).

The following example illustrates how to handle the `signatureSelect` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :signatureSelect="signatureSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const signatureSelected = function (args) {
      console.log('Signature selected on page ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :signatureSelect="signatureSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      signatureSelected: function (args) {
          console.log('Signature selected on page ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

### signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#signatureunselect) event triggers when a signature is unselected in the PDF Viewer.

#### Event Arguments

For event data, see [SignatureUnSelectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/signatureUnSelectEventArgs).

The following example illustrates how to handle the `signatureUnselect` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :signatureUnselect="signatureUnSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer])

  const signatureUnSelected = function (args) {
      console.log('Signature unselected on page ' + args.pageIndex);
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :signatureUnselect="signatureUnSelected">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      signatureUnSelected: function (args) {
          console.log('Signature unselected on page ' + args.pageIndex);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}
