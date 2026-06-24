---
layout: post
title: Annotation Toolbar  in Vue PDF Viewer component | Syncfusion
description: Learn how to customize the annotation toolbar in the Syncfusion Vue PDF Viewer component. Show/hide the toolbar and choose which tools to display and in what order.
platform: document-processing
control: Annotation Toolbar Customization
publishingplatform: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation Toolbar Customization in Vue

The annotation toolbar can be customized by showing or hiding default items and by controlling the order in which they appear.

For details about the built-in toolbar and common toolbar options, see the Toolbar article: ../toolbar.md

## Show or hide the annotation toolbar

Show or hide the annotation toolbar programmatically during initialization or at runtime.

Use the enableAnnotationToolbar property or the showAnnotationToolbar method to toggle visibility.

- enableAnnotationToolbar API: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#enableannotationtoolbar
- showAnnotationToolbar method: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar/#showannotationtoolbar

The following example shows how to show or hide the annotation toolbar using the `showAnnotationToolbar` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="toggleAnnoToolbar">Toggle Annotation Toolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);

const toggleAnnoToolbar = () => {
  const toolbar = pdfviewer.value?.ej2Instances?.toolbar;
  if (toolbar) {
    // Pass false to hide, true to show
    toolbar.showAnnotationToolbar(false);
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="toggleAnnoToolbar">Toggle Annotation Toolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
      ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    toggleAnnoToolbar() {
      this.$refs.pdfviewer.ej2Instances.toolbar.showAnnotationToolbar(false);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the server-backed PDF Viewer, add the following serviceUrl in your component and bind it to the PDF Viewer using :serviceUrl="serviceUrl".
serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"

{% tabs %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="toggleAnnoToolbar">Toggle Annotation Toolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);

const toggleAnnoToolbar = () => {
  pdfviewer.value.ej2Instances.toolbar.showAnnotationToolbar(false);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="toggleAnnoToolbar">Toggle Annotation Toolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
      ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    toggleAnnoToolbar() {
      this.$refs.pdfviewer.ej2Instances.toolbar.showAnnotationToolbar(false);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## How to customize the annotation toolbar

Choose which tools appear and control their order in the annotation toolbar.

Use ToolbarSettings with the annotationToolbarItems property to choose which tools are displayed in the annotation toolbar. The property accepts a list of AnnotationToolbarItem values. Only the items included in this list are shown; any item not listed is hidden. The rendered order follows the sequence of items in the list.

- ToolbarSettings: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/
- annotationToolbarItems: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/#annotationtoolbaritems
- AnnotationToolbarItem: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationToolbarItem/

The annotation toolbar is presented when entering annotation mode in the PDF Viewer and adapts responsively based on the available width. Include the Close tool to allow users to exit the annotation toolbar when needed.

The following example demonstrates how to customize the annotation toolbar by specifying a selected set of tools using AnnotationToolbarItem.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
const toolbarSettings = {
  annotationToolbarItems: [
    'HighlightTool',
    'UnderlineTool',
    'StrikethroughTool',
    'ColorEditTool',
    'OpacityEditTool',
    'AnnotationDeleteTool',
    'StampAnnotationTool',
    'HandWrittenSignatureTool',
    'InkAnnotationTool',
    'ShapeTool',
    'CalibrateTool',
    'StrokeColorEditTool',
    'ThicknessEditTool',
    'FreeTextAnnotationTool',
    'FontFamilyAnnotationTool',
    'FontSizeAnnotationTool',
    'FontStylesAnnotationTool',
    'FontAlignAnnotationTool',
    'FontColorAnnotationTool',
    'CommentPanelTool'
  ]
};

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        annotationToolbarItems: [
          'HighlightTool',
          'UnderlineTool',
          'StrikethroughTool',
          'ColorEditTool',
          'OpacityEditTool',
          'AnnotationDeleteTool',
          'StampAnnotationTool',
          'HandWrittenSignatureTool',
          'InkAnnotationTool',
          'ShapeTool',
          'CalibrateTool',
          'StrokeColorEditTool',
          'ThicknessEditTool',
          'FreeTextAnnotationTool',
          'FontFamilyAnnotationTool',
          'FontSizeAnnotationTool',
          'FontStylesAnnotationTool',
          'FontAlignAnnotationTool',
          'FontColorAnnotationTool',
          'CommentPanelTool'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
      ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the server-backed PDF Viewer, add the following serviceUrl in the component and bind it using :serviceUrl="serviceUrl".
serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"

{% tabs %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
const toolbarSettings = {
  annotationToolbarItems: [
    'HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool',
    'AnnotationDeleteTool', 'StampAnnotationTool', 'HandWrittenSignatureTool', 'InkAnnotationTool',
    'ShapeTool', 'CalibrateTool', 'StrokeColorEditTool', 'ThicknessEditTool', 'FreeTextAnnotationTool',
    'FontFamilyAnnotationTool', 'FontSizeAnnotationTool', 'FontStylesAnnotationTool', 'FontAlignAnnotationTool',
    'FontColorAnnotationTool', 'CommentPanelTool'
  ]
};

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
      toolbarSettings: {
        annotationToolbarItems: [
          'HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool',
          'AnnotationDeleteTool', 'StampAnnotationTool', 'HandWrittenSignatureTool', 'InkAnnotationTool',
          'ShapeTool', 'CalibrateTool', 'StrokeColorEditTool', 'ThicknessEditTool', 'FreeTextAnnotationTool',
          'FontFamilyAnnotationTool', 'FontSizeAnnotationTool', 'FontStylesAnnotationTool', 'FontAlignAnnotationTool',
          'FontColorAnnotationTool', 'CommentPanelTool'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
      ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Primary toolbar customization](./toolbar-customization/primary-toolbar-customization)
* [Custom toolbar](./toolbar-customization/custom-toolbar)
* [Annotation toolbar customization](./toolbar-customization/annotation-toolbar-customization)
* [Form designer toolbar customization](./toolbar-customization/form-designer-toolbar-customization)
* [Mobile toolbar](./toolbar-customization/mobile-toolbar)
* [Toolbar customization](./how-to/toolbar-customization)
* [Feature Modules](./feature-module)
