---
layout: post
title: Add save button in Vue Pdfviewer component | Syncfusion
description: Learn here all about how to add save button in Toolbar in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add Save button in Built-In Toolbar

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Save button - `Save` button-item can defined by [**CustomToolbarItemModel**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/customToolbarItemModel/) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/) property. Newly added `save` button-item click action can be defined in [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - `Save` button-item can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  `Save` button-item can be enabled or disable using [`enabletoolbaritem`].(https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { provide, ref } from 'vue';

const pdfviewer = ref(null);

// Move the toolItem declaration inside the data function
let toolItem1 = {
  prefixIcon: 'e-icons e-save',
  id: 'download',
  text: 'Save',
  tooltipText: 'Save button',
  align: 'left'
};

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
const toolbarSettings = {
  toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

const toolbarClick = function (args) {
  if (args.item && args.item.id === 'download') {
    pdfviewer.value.ej2Instances.download();
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath"
      :resourceUrl="resourceUrl" :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch"
      :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    // Move the toolItem declaration inside the data function
    let toolItem1 = {
      prefixIcon: 'e-icons e-save',
      id: 'download',
      text: 'Save',
      tooltipText: 'Save button',
      align: 'left'
    };
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      toolbarSettings: {
        toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item && args.item.id === 'download') {
        this.$refs.pdfviewer.ej2Instances.download();
      }
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { provide, ref } from 'vue';

const pdfviewer = ref(null);

// Move the toolItem declaration inside the data function
let toolItem1 = {
  prefixIcon: 'e-icons e-save',
  id: 'download',
  text: 'Save',
  tooltipText: 'Save button',
  align: 'left'
};


const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const toolbarSettings = {
  toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

const toolbarClick = function (args) {
  if (args.item && args.item.id === 'download') {
    this.$refs.pdfviewer.ej2Instances.download();
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch"
      :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    // Move the toolItem declaration inside the data function
    let toolItem1 = {
      prefixIcon: 'e-icons e-save',
      id: 'download',
      text: 'Save',
      tooltipText: 'Save button',
      align: 'left'
    };

    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      toolbarSettings: {
        toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item && args.item.id === 'download') {
        this.$refs.pdfviewer.ej2Instances.download();
      }
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align Property

The align property is used to specify the alignment of a `save` button-item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a `save` button-item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a `save` button-item. It allows custom styling of the toolbar item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item.
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel` in the context of Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing `save` button-item, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)
