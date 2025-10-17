---
layout: post
title: Add Save button to the built-in toolbar in Vue PDF Viewer | Syncfusion
description: Learn how to add, show, hide, enable, and disable a custom Save button in the built-in toolbar of the Vue PDF Viewer component.
control: Toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add a Save button to the built-in toolbar

PDF Viewer supports customizing toolbar items, including adding, showing, hiding, enabling, and disabling items.

- Save button: The Save button can be defined using [CustomToolbarItemModel](https://ej2.syncfusion.com/documentation/api/document-editor/customToolbarItemModel/) and included alongside existing items via [ToolbarSettings](https://ej2.syncfusion.com/documentation/api/file-manager/toolbarSettings/). Handle the click action using [`toolbarclick`](https://ej2.syncfusion.com/documentation/api/file-manager/toolbarClickEventArgs/).

- Show or hide: The Save button can be shown or hidden using [ToolbarSettings](https://ej2.syncfusion.com/documentation/api/file-manager/toolbarSettings/). Predefined items are listed under [`ToolbarItem`](https://ej2.syncfusion.com/documentation/api/chart/toolbarItems/).

- Enable or disable: The Save button can be enabled or disabled using [`enabletoolbaritem`](https://ej2.syncfusion.com/documentation/api/document-editor-container/toolbar/).

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

N> Default toolbar items: ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align Property

Specifies the alignment of the Save button within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

Sets the tooltip text for the Save button. The tooltip provides additional information on hover.

### CssClass Property

Applies custom CSS classes to the Save button for styling.

### Prefix Property

Sets the CSS class or icon to add as a prefix to the Save button content.

### ID Property

The id property within a CustomToolbarItemModel is required and uniquely identifies each toolbar item for configuration and interaction.

When defining or customizing toolbar items, assign a specific, descriptive id to each item. These properties are commonly used when defining custom toolbar items with `CustomToolbarItemModel` in the context of Syncfusion PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, include these properties to customize appearance and behavior.

N> When customizing the Save button, icons or text can be used based on design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)
