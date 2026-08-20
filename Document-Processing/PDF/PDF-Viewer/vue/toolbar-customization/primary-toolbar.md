---
layout: post
title: Customize the Primary Toolbar in Vue PDF Viewer | Syncfusion
description: Learn how to show or hide, reorder, and add items to the primary toolbar in the Syncfusion EJ2 Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Primary Toolbar in Vue PDF Viewer

## Overview

This guide explains how to show or hide the primary toolbar, remove default items, and add custom toolbar items.

**Outcome**: Working Vue example customizing the primary toolbar.

## Prerequisites

- EJ2 Vue PDF Viewer installed and added in project. See [getting started guide](../getting-started)

## Steps

### 1. Show or hide primary toolbar at initialization

Set [`enableToolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pdfviewermodel#enabletoolbar) to `false` to hide the built-in toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :enableToolbar="false" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :enableToolbar="false" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
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
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### 2. Show or hide primary toolbar at runtime

Use the viewer's [`showToolbar()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar#showtoolbar) method to show or hide dynamically.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideToolbar">Hide Toolbar</button>
    <button @click="showToolbar">Show Toolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const hideToolbar = () => {
  pdfviewer.value.ej2Instances.toolbar.showToolbar(false);
}
const showToolbar = () => {
  pdfviewer.value.ej2Instances.toolbar.showToolbar(true);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideToolbar">Hide Toolbar</button>
    <button @click="showToolbar">Show Toolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
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
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    hideToolbar: function () {
      this.$refs.pdfviewer.ej2Instances.toolbar.showToolbar(false);
    },
    showToolbar: function (){
      this.$refs.pdfviewer.ej2Instances.toolbar.showToolbar(true);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### 3. Show or hide primary toolbar items

Provide the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#toolbaritems) array with the exact set and order of items you want to show. Any item omitted is hidden.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :toolbarSettings="toolbarSettings" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
const toolbarSettings = {
  toolbarItems: ['OpenOption', 'DownloadOption', 'PrintOption', 'MagnificationTool']
};

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :toolbarSettings="toolbarSettings" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
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
      toolbarSettings: {
        toolbarItems: ['OpenOption', 'DownloadOption', 'PrintOption', 'MagnificationTool']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### 4. Add a custom primary toolbar item

Add a custom item by including an object in [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#toolbaritems) and handling its action via [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#toolbarclick). The following example shows adding a simple custom button at initialization and wiring its `toolbarClick` handler.

**Complete example:**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <button @click="toggleToolbar">{{ showTool ? 'Hide' : 'Show' }} toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewerRef" :enableNavigationToolbar="false" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings" @toolbarClick="handleToolbarClick" style="height: 500px">
      <template></template>
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

const pdfviewerRef = ref(null);
const showTool = ref(true);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

const toolbarSettings = {
  toolbarItems: [
    'OpenOption',
    {
      id: 'custom_btn',
      text: 'Fit to Width',
      align: 'Center'
    },
    'DownloadOption'
  ]
};

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);

const toggleToolbar = () => {
  pdfviewerRef.value.ej2Instances.toolbar.showToolbar(showTool.value);
  showTool.value = !showTool.value;
};

const handleToolbarClick = (event) => {
  if (event.item.id === 'custom_btn') {
    handleFitToWidth();
  }
};

const handleFitToWidth = () => {
  pdfviewerRef.value.ej2Instances.magnification.fitToWidth();
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div>
    <button @click="toggleToolbar">{{ showTool ? 'Hide' : 'Show' }} toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewerRef" :enableNavigationToolbar="false" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings" @toolbarClick="handleToolbarClick" style="height: 500px">
      <template></template>
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
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
      showTool: true,
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          {
            id: 'custom_btn',
            text: 'Fit to Width',
            align: 'Center'
          },
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    toggleToolbar() {
      this.$refs.pdfviewerRef.ej2Instances.toolbar.showToolbar(this.showTool);
      this.showTool = !this.showTool;
    },
    handleToolbarClick(event) {
      if (event.item.id === 'custom_btn') {
        this.handleFitToWidth();
      }
    },
    handleFitToWidth() {
      this.$refs.pdfviewerRef.ej2Instances.magnification.fitToWidth();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Expected result

- The primary toolbar shows only the items you list in [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#toolbaritems).
- Clicking the toggle button calls [`showToolbar()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar#showtoolbar) and hides or shows the toolbar at runtime.
- Custom toolbar items respond to [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#toolbarclick) events.

## Troubleshooting

- Toolbar still shows all default items.
    - **Solution**: [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#toolbaritems) must be supplied exactly; verify names and that [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar) service is provided.

## Related topics

- [Annotation toolbar customization](./annotation-toolbar)
- [Form designer toolbar customization](./form-designer-toolbar)