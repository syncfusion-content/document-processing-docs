---
layout: post
title: Shape annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Shape annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Shape annotation
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Shape annotation in Vue Pdfviewer component

The PDF Viewer control provides the options to add, edit, and delete the shape annotations. The shape annotation types supported in the PDF Viewer control are:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

![ShapeAnnotation](../images/shape_annot.png)

## Adding a shape annotation to the PDF document

Shape annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Shape Annotation** drop-down button. A drop-down pop-up will appear and shows the shape annotations to be added.
* Select the shape types to be added to the page in the drop-down pop-up. It enables the selected shape annotation mode.
* You can add the shapes over the pages of the PDF document.

In the pan mode, if the shape annotation mode is entered, the PDF Viewer control will switch to text select mode.

![ShapeTool](../images/shape_toolbar.png)

Refer to the following code sample to switch to the circle annotation mode.


{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button id="set">Circle</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :resourceUrl="resourceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const documentLoad = () => {
  const viewer = pdfviewer.value.ej2Instances;
  document.getElementById('set').addEventListener('click', () => {
    viewer.annotation.setAnnotationMode('Circle');
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button id="set">Circle</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :resourceUrl="resourceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },

  methods: {
    documentLoad() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', () => {
        viewer.annotation.setAnnotationMode('Circle');
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button id="set">Circle</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const documentLoad = () => {
  const viewer = pdfviewer.value.ej2Instances;
  document.getElementById('set').addEventListener('click', () => {
    viewer.annotation.setAnnotationMode('Circle');
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button id="set">Circle</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    documentLoad() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', () => {
        viewer.annotation.setAnnotationMode('Circle');
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding a shape annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a shape annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation/#addannotation) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a shape annotation programmatically:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="addLineAnnotation">Add Line Annotation programatically</button>
    <button v-on:click="addArrowAnnotation">Add Arrow Annotation programatically</button>
    <button v-on:click="addRectangleAnnotation">Add Rectangle Annotation programatically</button>
    <button v-on:click="addCircleAnnotation">Add Circle Annotation programatically</button>
    <button v-on:click="addPolygonAnnotation">Add Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const addLineAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Line", {
    offset: { x: 200, y: 230 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
  });
}

const addArrowAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Arrow", {
    offset: { x: 200, y: 370 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
  });
}

const addRectangleAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Rectangle", {
    offset: { x: 200, y: 500 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
  });
}

const addCircleAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Circle", {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90
  });
}

const addPolygonAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Polygon", {
    offset: { x: 200, y: 800 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="addLineAnnotation">Add Line Annotation programatically</button>
    <button v-on:click="addArrowAnnotation">Add Arrow Annotation programatically</button>
    <button v-on:click="addRectangleAnnotation">Add Rectangle Annotation programatically</button>
    <button v-on:click="addCircleAnnotation">Add Circle Annotation programatically</button>
    <button v-on:click="addPolygonAnnotation">Add Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    addLineAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Line", {
        offset: { x: 200, y: 230 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
      });
    },
    addArrowAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Arrow", {
        offset: { x: 200, y: 370 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
      });
    },
    addRectangleAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Rectangle", {
        offset: { x: 200, y: 500 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
      });
    },
    addCircleAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Circle", {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90
      });
    },
    addPolygonAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Polygon", {
        offset: { x: 200, y: 800 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="addLineAnnotation">Add Line Annotation programatically</button>
    <button v-on:click="addArrowAnnotation">Add Arrow Annotation programatically</button>
    <button v-on:click="addRectangleAnnotation">Add Rectangle Annotation programatically</button>
    <button v-on:click="addCircleAnnotation">Add Circle Annotation programatically</button>
    <button v-on:click="addPolygonAnnotation">Add Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const addLineAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Line", {
    offset: { x: 200, y: 230 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
  });
}

const addArrowAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Arrow", {
    offset: { x: 200, y: 370 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
  });
}

const addRectangleAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Rectangle", {
    offset: { x: 200, y: 500 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
  });
}

const addCircleAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Circle", {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90
  });
}

const addPolygonAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotation.addAnnotation("Polygon", {
    offset: { x: 200, y: 800 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="addLineAnnotation">Add Line Annotation programatically</button>
    <button v-on:click="addArrowAnnotation">Add Arrow Annotation programatically</button>
    <button v-on:click="addRectangleAnnotation">Add Rectangle Annotation programatically</button>
    <button v-on:click="addCircleAnnotation">Add Circle Annotation programatically</button>
    <button v-on:click="addPolygonAnnotation">Add Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    addLineAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Line", {
        offset: { x: 200, y: 230 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
      });
    },
    addArrowAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Arrow", {
        offset: { x: 200, y: 370 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
      });
    },
    addRectangleAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Rectangle", {
        offset: { x: 200, y: 500 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
      });
    },
    addCircleAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Circle", {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90
      });
    },
    addPolygonAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Polygon", {
        offset: { x: 200, y: 800 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Edit the existing shape annotation programmatically

To modify existing shape annotation in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="editLineAnnotation">Edit Line Annotation programatically</button>
    <button v-on:click="editArrowAnnotation">Edit Arrow Annotation programatically</button>
    <button v-on:click="editRectangleAnnotation">Edit Rectangle Annotation programatically</button>
    <button v-on:click="editCircleAnnotation">Edit Circle Annotation programatically</button>
    <button v-on:click="editPolygonAnnotation">Edit Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const editLineAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Line") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editArrowAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Arrow") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editRectangleAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editCircleAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Circle") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editPolygonAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Polygon") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="editLineAnnotation">Edit Line Annotation programatically</button>
    <button v-on:click="editArrowAnnotation">Edit Arrow Annotation programatically</button>
    <button v-on:click="editRectangleAnnotation">Edit Rectangle Annotation programatically</button>
    <button v-on:click="editCircleAnnotation">Edit Circle Annotation programatically</button>
    <button v-on:click="editPolygonAnnotation">Edit Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    editLineAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Line") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editArrowAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Arrow") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editRectangleAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editCircleAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Circle") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editPolygonAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Polygon") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="editLineAnnotation">Edit Line Annotation programatically</button>
    <button v-on:click="editArrowAnnotation">Edit Arrow Annotation programatically</button>
    <button v-on:click="editRectangleAnnotation">Edit Rectangle Annotation programatically</button>
    <button v-on:click="editCircleAnnotation">Edit Circle Annotation programatically</button>
    <button v-on:click="editPolygonAnnotation">Edit Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const editLineAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Line") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editArrowAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Arrow") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editRectangleAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editCircleAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Circle") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}

const editPolygonAnnotation = function () {
  const pdfviewer = pdfviewer.value.ej2Instances;
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === "Polygon") {
      pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
      pdfviewer.annotationCollection[i].thickness = 2;
      pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
      pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="editLineAnnotation">Edit Line Annotation programatically</button>
    <button v-on:click="editArrowAnnotation">Edit Arrow Annotation programatically</button>
    <button v-on:click="editRectangleAnnotation">Edit Rectangle Annotation programatically</button>
    <button v-on:click="editCircleAnnotation">Edit Circle Annotation programatically</button>
    <button v-on:click="editPolygonAnnotation">Edit Polygon Annotation programatically</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';


export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    editLineAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Line") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editArrowAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Arrow") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editRectangleAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editCircleAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Circle") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    },
    editPolygonAnnotation: function () {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === "Polygon") {
          pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
          pdfviewer.annotationCollection[i].thickness = 2;
          pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
          pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Editing the properties of the shape annotation

The fill color, stroke color, thickness, and opacity of the shape annotation can be edited using the Edit color tool, Edit stroke color tool, Edit thickness tool, and Edit opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![ShapeFillColor](../images/shape_fillColor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![ShapeStrokeColor](../images/shape_strokecolor.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![ShapeThickness](../images/shape_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![ShapeOpacity](../images/shape_opacity.png)

### Editing the line properties

The properties of the line shapes such as line and arrow annotations can be edited using the Line Properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the line and arrow annotations.

Refer to the following code sample to set the default annotation settings.

![ShapeProperty](../images/shape_lineproperty.png)

## Setting default properties during the control initialization

The properties of the shape annotations can be set before creating the control using LineSettings, ArrowSettings, RectangleSettings, CircleSettings, and PolygonSettings.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :lineSettings="lineSettings"
      :arrowSettings="arrowSettings" :rectangleSettings="rectangleSettings" :circleSettings="circleSettings"
      :polygonSettings="polygonSettings" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';
const lineSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
const arrowSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
const rectangleSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
const circleSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
const polygonSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :lineSettings="lineSettings"
      :arrowSettings="arrowSettings" :rectangleSettings="rectangleSettings" :circleSettings="circleSettings"
      :polygonSettings="polygonSettings" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
      lineSettings: { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' },
      arrowSettings: { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' },
      rectangleSettings: { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' },
      circleSettings: { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' },
      polygonSettings: { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  },
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :lineSettings="lineSettings" :arrowSettings="arrowSettings" :rectangleSettings="rectangleSettings"
      :circleSettings="circleSettings" :polygonSettings="polygonSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const lineSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
const arrowSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
const rectangleSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
const circleSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
const polygonSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :lineSettings="lineSettings" :arrowSettings="arrowSettings" :rectangleSettings="rectangleSettings"
      :circleSettings="circleSettings" :polygonSettings="polygonSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      lineSettings: { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' },
      arrowSettings: { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' },
      rectangleSettings: { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' },
      circleSettings: { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' },
      polygonSettings: { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}