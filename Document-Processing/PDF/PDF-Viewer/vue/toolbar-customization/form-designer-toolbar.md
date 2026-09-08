---
layout: post
title: Customize the Form Designer Toolbar in Vue PDF Viewer | Syncfusion
description: Learn how to show or hide and customize the Form Designer toolbar in the Syncfusion EJ2 Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Form Designer Toolbar in Vue PDF Viewer

## Overview

This guide shows how to show or hide the form designer toolbar, and how to configure which tools appear and their order.

**Outcome**: a working Vue example customizing the form designer toolbar.

## Prerequisites

- EJ2 Vue PDF Viewer installed and added in project. See [getting started guide](../getting-started)
- If using standalone WASM mode, provide [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) or a [`serviceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) for server mode.

## Steps

### 1. Show or hide Form Designer toolbar at initialization

Set the [`isFormDesignerToolbarVisible`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#isformdesignertoolbarvisible) property to `true` or `false` to control initial visibility.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewer" :isFormDesignerToolbarVisible="true" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 500px; width: 100%">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewer" :isFormDesignerToolbarVisible="true" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 500px; width: 100%">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### 2. Show or hide form designer toolbar at runtime

Use the [`isFormDesignerToolbarVisible`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#isformdesignertoolbarvisible) property on the viewer's instance to toggle form designer visibility at runtime.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideFormDesignerToolbar">Hide Form Designer Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewer" :isFormDesignerToolbarVisible="show" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 500px; width: 100%">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

const pdfviewer = ref(null);
const show = ref(true);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);

const hideFormDesignerToolbar = () => {
  show.value = !show.value;
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideFormDesignerToolbar">Hide Form Designer Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewer" :isFormDesignerToolbarVisible="show" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 500px; width: 100%">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      show: true,
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    hideFormDesignerToolbar() {
      this.show = !this.show;
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### 3. Show or hide form designer toolbar items

Use [`formDesignerToolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#formdesignertoolbaritems) and supply an ordered array of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formdesignertoolbaritem) names.

**Complete example:**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <button @click="hideFormDesignerToolbar">Hide Form Designer Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewer" :isFormDesignerToolbarVisible="show" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings" style="height: 500px; width: 100%">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

const pdfviewer = ref(null);
const show = ref(true);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
const toolbarSettings = {
  formDesignerToolbarItems: [
    'TextboxTool', 'RadioButtonTool', 'CheckBoxTool',
    'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
  ]
};

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);

const hideFormDesignerToolbar = () => {
  show.value = !show.value;
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div>
    <button @click="hideFormDesignerToolbar">Hide Form Designer Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="pdfviewer" :isFormDesignerToolbarVisible="show" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings" style="height: 500px; width: 100%">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      show: true,
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      toolbarSettings: {
        formDesignerToolbarItems: [
          'TextboxTool', 'RadioButtonTool', 'CheckBoxTool',
          'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    hideFormDesignerToolbar() {
      this.show = !this.show;
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Expected result

- The form designer toolbar appears (or is hidden) according to [`isFormDesignerToolbarVisible`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#isformdesignertoolbarvisible).
- Only the listed tools appear.

## Troubleshooting

- Toolbar or form designer tools do not appear.
    - **Cause**: [`FormDesigner`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formdesigner) or [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar) service not provided.
    - **Solution**: ensure [`FormDesigner`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formdesigner) and [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar) services are provided to PDF Viewer.

## Related topics

- [Primary toolbar customization](./primary-toolbar)
- [Annotation toolbar customization](./annotation-toolbar)
