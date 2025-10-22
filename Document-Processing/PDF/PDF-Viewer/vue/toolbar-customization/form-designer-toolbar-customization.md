---
layout: post
title: Form Designer Toolbar Customization in Vue PDF Viewer component | Syncfusion
description: Learn how to customize the form designer toolbar in the Syncfusion Vue PDF Viewer. Show/hide the toolbar and choose which tools to display and in what order.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Designer Toolbar Customization

The form designer toolbar can be customized by showing or hiding default items and by controlling the order in which the items appear.

For details about the built-in toolbar and common toolbar options, see the Toolbar article: ../toolbar.md

## Show or hide the form designer toolbar

Show or hide the form designer toolbar programmatically during initialization or at runtime.

Use the enableFormDesigner property or the showFormDesignerToolbar method to toggle visibility.

- enableFormDesigner API: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#enableformdesigner
- showFormDesignerToolbar method: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar/#showformdesignertoolbar

The following code snippet explains how to show or hide the toolbar using the showFormDesignerToolbar method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="toggleFDToolbar">Toggle Form Designer Toolbar</button>
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
const documentPath = "https://cdn.syncfusion.com/content/pdf/formdesigner.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);

const toggleFDToolbar = () => {
  const toolbar = pdfviewer.value?.ej2Instances?.toolbar;
  if (toolbar) {
    // Pass false to hide, true to show
    toolbar.showFormDesignerToolbar(false);
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="toggleFDToolbar">Toggle Form Designer Toolbar</button>
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
      ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    toggleFDToolbar() {
      this.$refs.pdfviewer.ej2Instances.toolbar.showFormDesignerToolbar(false);
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
    <button v-on:click="toggleFDToolbar">Toggle Form Designer Toolbar</button>
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
const documentPath = "https://cdn.syncfusion.com/content/pdf/formdesigner.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]);

const toggleFDToolbar = () => {
  pdfviewer.value.ej2Instances.toolbar.showFormDesignerToolbar(false);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="toggleFDToolbar">Toggle Form Designer Toolbar</button>
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
      ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    toggleFDToolbar() {
      this.$refs.pdfviewer.ej2Instances.toolbar.showFormDesignerToolbar(false);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## How to customize the form designer toolbar

Choose which tools appear and control their order in the form designer toolbar.

Use ToolbarSettings with the formDesignerToolbarItems property to choose which form design tools are available. The property accepts a list of FormDesignerToolbarItem values. The items you include are both displayed and rendered in the order listed; any items you omit are hidden.

- ToolbarSettings: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/
- formDesignerToolbarItems: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/#formdesignertoolbaritems
- FormDesignerToolbarItem: https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formDesignerToolbarItem/

The following example demonstrates how to customize the form designer toolbar by configuring specific tools using FormDesignerToolbarItem.

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

const documentPath = 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib';
const toolbarSettings = {
  formDesignerToolbarItems: [
    'TextboxTool',
    'PasswordTool',
    'CheckBoxTool',
    'RadioButtonTool',
    'DropdownTool',
    'ListboxTool',
    'DrawSignatureTool',
    'DeleteTool'
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        formDesignerToolbarItems: [
          'TextboxTool',
          'PasswordTool',
          'CheckBoxTool',
          'RadioButtonTool',
          'DropdownTool',
          'ListboxTool',
          'DrawSignatureTool',
          'DeleteTool'
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

const documentPath = 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf';
const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
const toolbarSettings = {
  formDesignerToolbarItems: [
    'TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool', 'DropdownTool',
    'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
      toolbarSettings: {
        formDesignerToolbarItems: [
          'TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool', 'DropdownTool',
          'ListboxTool', 'DrawSignatureTool', 'DeleteTool'
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
