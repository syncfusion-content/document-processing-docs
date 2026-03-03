---
layout: post
title: Page navigation in Vue PDF Viewer | Syncfusion
description: Learn how to configure page navigation in the Syncfusion Vue PDF Viewer component using toolbar commands and custom UI.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Page navigation in PDF Viewer

The Vue PDF Viewer supports internal and external navigation methods.

## Toolbar page navigation options

The PDF Viewer default toolbar includes the following page navigation options:

* [**Go to page**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/navigation/#gotopage):- Navigates to a specified page in the PDF document.
* [**Show next page**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/navigation/#gotonextpage):- Navigates to the next page in the PDF document.
* [**Show previous page**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/navigation/#gotopreviouspage):- Navigates to the previous page in the PDF document.
* [**Show first page**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/navigation/#gotofirstpage):- Navigates to the first page of the PDF document.
* [**Show last page**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/navigation/#gotolastpage):- Navigates to the last page of the PDF document.

Enable or disable the page navigation option in the PDF Viewer using the following code snippet.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableNavigation="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection
]);
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableNavigation="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
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
      TextSelection
    ]
  }
};
</script>
{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :enableNavigation="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection
]);
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :enableNavigation="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
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
      TextSelection
    ]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

![PDF Viewer toolbar showing page navigation controls](../images/navigation.png)

## Programmatic page navigation

Trigger navigation methods from your own UI elements—like buttons or menu items—by using the `navigation` object exposed by the PDF Viewer instance.

The following examples show how to perform page navigation programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<template>
  <div id="app">
    <div class="navigation-buttons">
      <button @click="goToFirstPage">Go To First Page</button>
      <button @click="goToLastPage">Go To Last Page</button>
      <button @click="goToNextPage">Go To Next Page</button>
      <button @click="goToPage">Go To Page</button>
      <button @click="goToPreviousPage">Go To Previous Page</button>
    </div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
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
  FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfViewer = ref(null);
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [
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
  FormFields
]);

const callNavigation = (callback) => {
  const viewer = pdfViewer.value?.ej2Instances;
  if (viewer) {
    callback(viewer.navigation);
  }
};

const goToFirstPage = () => callNavigation((navigation) => navigation.goToFirstPage());
const goToLastPage = () => callNavigation((navigation) => navigation.goToLastPage());
const goToNextPage = () => callNavigation((navigation) => navigation.goToNextPage());
const goToPage = () => callNavigation((navigation) => navigation.goToPage(4));
const goToPreviousPage = () => callNavigation((navigation) => navigation.goToPreviousPage());
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}
<template>
  <div id="app">
    <div class="navigation-buttons">
      <button @click="goToFirstPage">Go To First Page</button>
      <button @click="goToLastPage">Go To Last Page</button>
      <button @click="goToNextPage">Go To Next Page</button>
      <button @click="goToPage">Go To Page</button>
      <button @click="goToPreviousPage">Go To Previous Page</button>
    </div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
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
  FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
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
      FormFields
    ]
  },
  methods: {
    callNavigation(callback) {
      const viewer = this.$refs.pdfViewer?.ej2Instances;
      if (viewer) {
        callback(viewer.navigation);
      }
    },
    goToFirstPage() {
      this.callNavigation((navigation) => navigation.goToFirstPage());
    },
    goToLastPage() {
      this.callNavigation((navigation) => navigation.goToLastPage());
    },
    goToNextPage() {
      this.callNavigation((navigation) => navigation.goToNextPage());
    },
    goToPage() {
      this.callNavigation((navigation) => navigation.goToPage(4));
    },
    goToPreviousPage() {
      this.callNavigation((navigation) => navigation.goToPreviousPage());
    }
  }
};
</script>
{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}
<template>
  <div id="app">
    <div class="navigation-buttons">
      <button @click="goToFirstPage">Go To First Page</button>
      <button @click="goToLastPage">Go To Last Page</button>
      <button @click="goToNextPage">Go To Next Page</button>
      <button @click="goToPage">Go To Page</button>
      <button @click="goToPreviousPage">Go To Previous Page</button>
    </div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
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
  FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfViewer = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

provide('PdfViewer', [
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
  FormFields
]);

const callNavigation = (callback) => {
  const viewer = pdfViewer.value?.ej2Instances;
  if (viewer) {
    callback(viewer.navigation);
  }
};

const goToFirstPage = () => callNavigation((navigation) => navigation.goToFirstPage());
const goToLastPage = () => callNavigation((navigation) => navigation.goToLastPage());
const goToNextPage = () => callNavigation((navigation) => navigation.goToNextPage());
const goToPage = () => callNavigation((navigation) => navigation.goToPage(4));
const goToPreviousPage = () => callNavigation((navigation) => navigation.goToPreviousPage());
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}
<template>
  <div id="app">
    <div class="navigation-buttons">
      <button @click="goToFirstPage">Go To First Page</button>
      <button @click="goToLastPage">Go To Last Page</button>
      <button @click="goToNextPage">Go To Next Page</button>
      <button @click="goToPage">Go To Page</button>
      <button @click="goToPreviousPage">Go To Previous Page</button>
    </div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
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
  FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
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
      FormFields
    ]
  },
  methods: {
    callNavigation(callback) {
      const viewer = this.$refs.pdfViewer?.ej2Instances;
      if (viewer) {
        callback(viewer.navigation);
      }
    },
    goToFirstPage() {
      this.callNavigation((navigation) => navigation.goToFirstPage());
    },
    goToLastPage() {
      this.callNavigation((navigation) => navigation.goToLastPage());
    },
    goToNextPage() {
      this.callNavigation((navigation) => navigation.goToNextPage());
    },
    goToPage() {
      this.callNavigation((navigation) => navigation.goToPage(4));
    },
    goToPreviousPage() {
      this.callNavigation((navigation) => navigation.goToPreviousPage());
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

For a runnable example, explore the [PDF Viewer page navigation sample](https://ej2.syncfusion.com/vue/demos/#/material/pdfviewer/default).

## See also

- [Bookmark navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/interactive-pdf-navigation/bookmark-navigation/)
- [Page navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/interactive-pdf-navigation/page-navigation/)
- [Page thumbnail navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/interactive-pdf-navigation/page-thumbnail-navigation/)

- [Feature modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/feature-module/)
