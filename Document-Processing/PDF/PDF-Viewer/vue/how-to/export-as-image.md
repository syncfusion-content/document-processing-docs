---
layout: post
title: Export pages as images in Vue PDF Viewer | Syncfusion
description: Learn how to export pages as Base64-encoded images in the Vue PDF Viewer using exportAsImage and exportAsImages.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Export As Image in Vue PDF Viewer

Export a single page as a Base64-encoded image using `exportAsImage()` or export a range of pages using `exportAsImages()`.

Steps to export pages as images

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to export a specified page as a Base64-encoded image or a range of pages as Base64-encoded images.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImage">ExportAsImage</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

let pdfviewer = ref(null);
let resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
let documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

let exportAsImage = function () {
  let imageDetail;
  let pageIndex: number = 1;
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportAsImage(pageIndex).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImage">ExportAsImage</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  data() {
    return {
      resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    exportAsImage: function () {
        let imageDetail;
        let pageIndex: number = 1;
        const viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.exportAsImage(pageIndex).then(function (value) {
          imageDetail = value;
          console.log(imageDetail);
        });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Export a specified page as a Base64-encoded image with a custom size:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImageWithSize">ExportAsImageWithSize</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

let pdfviewer = ref(null);
let resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
let documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

let exportAsImageWithSize = function () {
  let imageDetail;
  let pageIndex: number = 1;
  let size = {width:200, height: 500};
  let viewer = pdfviewer.value.ej2Instances;
  viewer.exportAsImage(pageIndex,size).then(function (value) {
    imageDetail = value;
    console.log(imageDetail);
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImageWithSize">exportAsImageWithSize</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  data() {
    return {
      resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    exportAsImageWithSize: function () {
        let imageDetail;
        let pageIndex: number = 1;
        let size = {width:200, height: 500};
        let viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.exportAsImage(pageIndex,size).then(function (value) {
          imageDetail = value;
          console.log(imageDetail);
        });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Export a range of pages as Base64-encoded image strings:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImages">exportAsImages</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

let pdfviewer = ref(null);
let resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
let documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

let exportAsImages = function () {
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  let viewer = pdfviewer.value.ej2Instances;
  viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImages">exportAsImages</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
    name: "App",
    data() {
      return {
        resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
        documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      };
    },
    provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
    },
    methods: {
      exportAsImages: function () {
        let startPageIndex: number = 1;
        let endPageIndex: number = 5;
        let viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
            imageDetails = value;
            console.log(imageDetails);
        });
      }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Export a range of pages as Base64-encoded images with a custom size:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImageWithSize">exportAsImageWithSize</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

let pdfviewer = ref(null);
let resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
let documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

let exportAsImageWithSize = function () {
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  let size: Size = new Size(200,500);
  let viewer = pdfviewer.value.ej2Instances;
  viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAsImageWithSize">exportAsImageWithSize</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  data() {
    return {
      resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    exportAsImageWithSize: function () {
      let startPageIndex: number = 1;
      let endPageIndex: number = 5;
      let size: Size = new Size(200,500);
      let viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
          imageDetails = value;
          console.log(imageDetails);
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

By following these steps, you can successfully integrate and use the export as image API in the EJ2 PDF Viewer.