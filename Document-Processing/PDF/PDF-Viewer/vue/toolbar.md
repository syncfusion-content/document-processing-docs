---
layout: post
title: Toolbar in Vue Pdfviewer component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Built-In Toolbar in Vue Pdfviewer component

The PDF Viewer comes with a powerful built-in toolbar to execute important actions such as page navigation, text search,view mode,download,print,bookmark, and thumbnails.

The following table shows built-in toolbar items and its actions:-

| Option | Description |
|---|---|
| OpenOption | This option provides an action to load the PDF documents to the PDF Viewer.|
| PageNavigationTool | This option provides an action to navigate the pages in the PDF Viewer. It contains GoToFirstPage,GoToLastPage,GotoPage,GoToNext, and GoToLast tools.|
| MagnificationTool |This option provides an action to magnify the pages either with predefined or user defined zoom factors in the PDF Viewer. Contains ZoomIn, ZoomOut, Zoom, FitPage and FitWidth tools|
| PanTool | This option provides an action for panning the pages in the PDF Viewer.|
| SelectionTool | This option provides an action to enable/disable the text selection in the PDF Viewer.|
| SearchOption | This option provides an action to search a word in the PDF documents.|
| PrintOption | This option provides an action to print the PDF document being loaded in the PDF Viewer.|
| DownloadOption |This Download option provides an action to download the PDF document that has been loaded in the PDF Viewer.|
| UndoRedoTool | This tool provides options to undo and redo the annotation actions performed in the PDF Viewer.|
| AnnotationEditTool | This tool provides options to enable or disable the edit mode of annotation in the PDF Viewer.|
| FormDesignerEditTool | This tool provides options to enable or disable the edit mode of form fields in the PDF Viewer.|

## Show/Hide the built-in toolbar

The PDF Viewer has an option to show or hide the complete built-in toolbar. You can achieve this by using following two ways.,

* **Show/Hide toolbar using enableToolbar API as in the following code snippet**

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
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

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
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib",
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

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/toolbar/toolbar-hide-cs1" %}

* **Show/Hide toolbar using showToolbar as in the following code snippet**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="showToolbarClicked">showToolbarClicked</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
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
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib;;
provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])
const showToolbarClicked = function (args) {
  pdfviewer.value.ej2Instances.toolbar.showToolbar(false);
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
  <div id="app">
    <button v-on:click="showToolbarClicked">showToolbarClicked</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
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
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    showToolbarClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.toolbar.showToolbar(false);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/toolbar/toolbar-method-cs1" %}

## Show/Hide the built-in toolbaritem

The PDF Viewer has an option to show or hide these grouped items in the built-in toolbar.

* **Show/Hide toolbaritem using toolbarSettings as in the following code snippet.**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :enableTextSelection="false"
      :toolbarSettings="toolbarSettings" :resourceUrl="resourceUrl">
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
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
const toolbarSettings = { showTooltip: true, toolbarItems: ['OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool', 'FormDesignerEditTool', 'FreeTextAnnotationOption', 'InkAnnotationOption', 'ShapeAnnotationOption', 'StampAnnotation', 'SignatureOption', 'SearchOption', 'PrintOption', 'DownloadOption'], annotationToolbarItems: ['HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'StampAnnotationTool', 'HandWrittenSignatureTool', 'InkAnnotationTool', 'ShapeTool', 'CalibrateTool', 'StrokeColorEditTool', 'ThicknessEditTool', 'FreeTextAnnotationTool', 'FontFamilyAnnotationTool', 'FontSizeAnnotationTool', 'FontStylesAnnotationTool', 'FontAlignAnnotationTool', 'FontColorAnnotationTool', 'CommentPanelTool'], formDesignerToolbarItems: ['TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool', 'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'] };

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :enableTextSelection="false"
      :toolbarSettings="toolbarSettings" :resourceUrl="resourceUrl">
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
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib",
      toolbarSettings: { showTooltip: true, toolbarItems: ['OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool', 'FormDesignerEditTool', 'FreeTextAnnotationOption', 'InkAnnotationOption', 'ShapeAnnotationOption', 'StampAnnotation', 'SignatureOption', 'SearchOption', 'PrintOption', 'DownloadOption'], annotationToolbarItems: ['HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'StampAnnotationTool', 'HandWrittenSignatureTool', 'InkAnnotationTool', 'ShapeTool', 'CalibrateTool', 'StrokeColorEditTool', 'ThicknessEditTool', 'FreeTextAnnotationTool', 'FontFamilyAnnotationTool', 'FontSizeAnnotationTool', 'FontStylesAnnotationTool', 'FontAlignAnnotationTool', 'FontColorAnnotationTool', 'CommentPanelTool'], formDesignerToolbarItems: ['TextboxTool', 'PasswordTool', 'CheckBoxTool', 'RadioButtonTool', 'DropdownTool', 'ListboxTool', 'DrawSignatureTool', 'DeleteTool'] }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  }

}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/toolbar/toolbar-items-cs1" %}

* **Show/Hide toolbaritem using showToolbaritem as in the following code snippet**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="showToolbarClicked">ShowToolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
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
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const showToolbarClicked = function (args) {
  pdfviewer.ej2Instances.toolbar.showToolbarItem(["OpenOption"], false);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="showToolbarClicked">ShowToolbar</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
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
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    showToolbarClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.toolbar.showToolbarItem(["OpenOption"], false);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

  {% previewsample "/document-processing/code-snippet/pdfviewer/vue/toolbar/toolbar-items-method-cs1" %}


## Customize Built-In Toolbar

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [**CustomToolbarItemModel**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/customToolbarItemModel/) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

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
  prefixIcon: 'e-icons e-paste',
  id: 'print',
  tooltipText: 'Custom toolbar item',
  align: 'left'
};
let toolItem2 = {
  id: 'download',
  text: 'Save',
  tooltipText: 'Custom toolbar item',
  align: 'right'
};
let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
let toolItem3 = {
  type: 'Input',
  tooltipText: 'Language List',
  cssClass: 'percentage',
  align: 'Left',
  id: 'dropdown',
  template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
};
let toolItem4 = {
  type: 'Input',
  tooltipText: 'Text',
  align: 'Right',
  cssClass: 'find',
  id: 'textbox',
  template: new TextBox({ width: 125, placeholder: 'Type Here' })
}

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
const toolbarSettings = {
  toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

const toolbarClick = function (args) {
  if (args.item && args.item.id === 'print') {
    pdfviewer.value.ej2Instances.printModule.print();
  }
  else if (args.item && args.item.id === 'download') {
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
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
    };
    let toolItem2 = {
      id: 'download',
      text: 'Save',
      tooltipText: 'Custom toolbar item',
      align: 'right'
    };
    let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
    let toolItem3 = {
      type: 'Input',
      tooltipText: 'Language List',
      cssClass: 'percentage',
      align: 'Left',
      id: 'dropdown',
      template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
    };
    let toolItem4 = {
      type: 'Input',
      tooltipText: 'Text',
      align: 'Right',
      cssClass: 'find',
      id: 'textbox',
      template: new TextBox({ width: 125, placeholder: 'Type Here' })
    }
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      toolbarSettings: {
        toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item && args.item.id === 'print') {
        this.$refs.pdfviewer.ej2Instances.printModule.print();
      }
      else if (args.item && args.item.id === 'download') {
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
  prefixIcon: 'e-icons e-paste',
  id: 'print',
  tooltipText: 'Custom toolbar item',
  align: 'left'
};
let toolItem2 = {
  id: 'download',
  text: 'Save',
  tooltipText: 'Custom toolbar item',
  align: 'right'
};
let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
let toolItem3 = {
  type: 'Input',
  tooltipText: 'Language List',
  cssClass: 'percentage',
  align: 'Left',
  id: 'dropdown',
  template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
};
let toolItem4 = {
  type: 'Input',
  tooltipText: 'Text',
  align: 'Right',
  cssClass: 'find',
  id: 'textbox',
  template: new TextBox({ width: 125, placeholder: 'Type Here' })
}

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const toolbarSettings = {
  toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

const toolbarClick = function (args) {
  if (args.item && args.item.id === 'print') {
    this.$refs.pdfviewer.ej2Instances.printModule.print();
  }
  else if (args.item && args.item.id === 'download') {
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
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
    };
    let toolItem2 = {
      id: 'download',
      text: 'Save',
      tooltipText: 'Custom toolbar item',
      align: 'right'
    };
    let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
    let toolItem3 = {
      type: 'Input',
      tooltipText: 'Language List',
      cssClass: 'percentage',
      align: 'Left',
      id: 'dropdown',
      template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
    };
    let toolItem4 = {
      type: 'Input',
      tooltipText: 'Text',
      align: 'Right',
      cssClass: 'find',
      id: 'textbox',
      template: new TextBox({ width: 125, placeholder: 'Type Here' })
    }
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      toolbarSettings: {
        toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item && args.item.id === 'print') {
        this.$refs.pdfviewer.ej2Instances.printModule.print();
      }
      else if (args.item && args.item.id === 'download') {
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

The align property is used to specify the alignment of a toolbar item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a toolbar item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a toolbar item. It allows custom styling of the toolbar item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item.
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel` in the context of Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing toolbar items, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)

## Custom Toolbar

The PDF Viewer provides API for user interactions options provided in it's built-in toolbar. Using this we can create our own User Interface for toolbar actions in application level by hiding the built-in toolbar. The following steps are used to create the custom toolbar for PDF Viewer,

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create simple PDF Viewer sample.

**Step 2:** Now, add an HTML div element in template to act as the custom toolbar PDF Viewer using the following code.


{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div>
    <ejs-toolbar id="customToolbar" ref="toolbar">
      <e-items>
        <e-item prefixIcon='e-pv-open-document-icon' tooltipText='Open' :click="openClicked"></e-item>
        <e-item prefixIcon='e-pv-previous-page-navigation-icon' id="previousPage" tooltipText='Previous Page' align='Center' :click="previousClicked"></e-item>
        <e-item prefixIcon='e-pv-next-page-navigation-icon' id="nextPage" tooltipText='Next Page' align='Center' :click="nextClicked"></e-item>
        <e-item :template='pageNoTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item :template='pageTextTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item prefixIcon='e-pv-print-document-icon' tooltipText='Print' align='Right' :click="printClicked"></e-item>
        <e-item prefixIcon='e-pv-download-document-icon' tooltipText='Download' align='Right' :click="downloadClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <ejs-toolbar id="magnificationToolbar">
      <e-items>
        <e-item prefixIcon='e-pv-fit-page-icon' id="fitPage" tooltipText='Fit to page' :click="pageFitClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-in-icon' id="zoomIn" tooltipText='Zoom in' :click="zoomInClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-out-icon' id="zoomOut" tooltipText='Zoom out' :click="zoomOutClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <input type ="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;"></input>

    <div class="control-section">
      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :pageChange="pageChange"
        :documentLoad="documentLoad"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :enableToolbar="enableToolbar">
      </ejs-pdfviewer>
    </div>
  </div>
</template>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div>
    <ejs-toolbar id="customToolbar" ref="toolbar">
      <e-items>
        <e-item prefixIcon='e-pv-open-document-icon' tooltipText='Open' :click="openClicked"></e-item>
        <e-item prefixIcon='e-pv-previous-page-navigation-icon' id="previousPage" tooltipText='Previous Page' align='Center' :click="previousClicked"></e-item>
        <e-item prefixIcon='e-pv-next-page-navigation-icon' id="nextPage" tooltipText='Next Page' align='Center' :click="nextClicked"></e-item>
        <e-item :template='pageNoTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item :template='pageTextTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item prefixIcon='e-pv-print-document-icon' tooltipText='Print' align='Right' :click="printClicked"></e-item>
        <e-item prefixIcon='e-pv-download-document-icon' tooltipText='Download' align='Right' :click="downloadClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <ejs-toolbar id="magnificationToolbar">
      <e-items>
        <e-item prefixIcon='e-pv-fit-page-icon' id="fitPage" tooltipText='Fit to page' :click="pageFitClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-in-icon' id="zoomIn" tooltipText='Zoom in' :click="zoomInClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-out-icon' id="zoomOut" tooltipText='Zoom out' :click="zoomOutClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <input type ="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;"></input>

    <div class="control-section">
      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :pageChange="pageChange"
        :documentLoad="documentLoad"
        :documentPath="documentPath"
        :enableToolbar="enableToolbar">
      </ejs-pdfviewer>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

**Step 3:** Import and inject the modules used for the custom toolbar,

```ts

    import Vue from "vue";
    import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
             LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
             Print, TextSelection, TextSearch, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
    import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
    import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
    Vue.use(CalendarPlugin);
    Vue.use(PdfViewerPlugin);
    Vue.use(ToolbarPlugin);

```

**Step 4:** Hide the built-in toolbar of PDF Viewer using below code snippet,


{% tabs %}
{% highlight js tabtitle="Standalone" %}

export default Vue.extend({
    data: function () {
        return {
            documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
            enableToolbar: false,
            pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
            pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
        }
    })
};
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

export default Vue.extend({
    data: function () {
        return {
            serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
            documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
            enableToolbar: false,
            pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
            pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
        }
    })
};

{% endhighlight %}
{% endtabs %}

**Step 7:** Add the following style to achieve the custom toolbar styling,

```
<style>
   #pdfviewer {
        height: 640px;
    }
    .control-section {
        padding-top: 0px !important;
    }
    #magnificationToolbar {
        background: transparent;
        height: auto;
        min-height: 56px;
        width: auto;
        border: none;
        position: absolute;
        z-index: 900;
        top: calc(100% - 110px);
        left: calc(100% - 120px);
        transform: rotate(90deg);
    }
    div#magnificationToolbar.e-toolbar .e-toolbar-items {
        background: transparent;
        padding: 2px 3px 2px 2px;
    }
    #magnificationToolbar.e-toolbar .e-tbar-btn {
        border-radius: 50%;
        min-height: 30px;
        min-width: 30px;
        border: 1px solid #c8c8c8;
    }
    #customToolbar {
        top: 0px;
        z-index: 900;
    }
    .e-bookmark-popup {
        height: 300px;
        max-width: 300px;
    }
    .e-text-search-popup {
        height: 104px;
        max-width: 348px;
    }
    .e-custom-search-input {
        width: 234px;
    }
    .e-text-search-popup .e-footer-content, .e-bookmark-popup .e-footer-content {
        padding: 0;
        height: 0;
    }
    .search-button, .search-button:disabled, .search-button:focus, .search-button:hover {
        background: transparent;
        box-shadow: none;
    }
    #popup .e-dlg-content {
        padding-left: 0;
        padding-bottom: 0;
    }
    .e-pv-bookmarks {
        min-width: 234px;
    }
    .e-pv-current-page-number {
        width: 46px;
        height: 28px;
        text-align: center;
    }
    .material .e-pv-current-page-number {
        border-width: 1px;
    }
    .e-icons {
        font-family: "e-icons";
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        line-height: 1;
        text-transform: none;
    }
    .e-pv-icon::before {
        font-family: 'e-icons';
    }
    .e-pv-open-document-icon::before  {
        content: '\e91c';
    }
    .e-pv-download-document-icon::before {
        content: '\e914';
    }
    .e-pv-print-document-icon::before {
        content: '\e917';
    }
    .e-pv-previous-page-navigation-icon::before {
        content: '\e910';
    }
    .e-pv-next-page-navigation-icon::before {
        content: '\e911';
    }
    .e-pv-zoom-out-icon::before {
        content: '\e912';
    }
    .e-pv-zoom-in-icon::before {
        content: '\e91d';
    }
    .e-pv-fit-page-icon::before {
        content: '\e91b';
    }
    .e-btn-icon.e-pv-zoom-out-icon.e-icons {
        transform: rotate(90deg);
    }
    @font-face {
        font-family: "e-icons";
        font-style: normal;
        font-weight: normal;
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
    }
</style>
```

>The icons are embedded in the font file used in above code snippet.
**Step 8:** Add the following scripts for performing user interaction in PDF Viewer in code behind


{% tabs %}
{% highlight js tabtitle="Standalone" %}

    import Vue from "vue";
    import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
    import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
    import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
    Vue.use(CalendarPlugin);
    Vue.use(PdfViewerPlugin);
    Vue.use(ToolbarPlugin);
    var toolbar;
    var viewer;
    var fileName;
    var currentPageBox;

    function updatePageNavigation() {
        if (viewer.currentPageNumber === 1) {
            toolbar.enableItems(document.getElementById('previousPage'), false);
            toolbar.enableItems(document.getElementById('nextPage'), true);
        }
        else if (viewer.currentPageNumber === viewer.pageCount) {
            toolbar.enableItems(document.getElementById('previousPage'), true);
            toolbar.enableItems(document.getElementById('nextPage'), false);
        }
        else {
            toolbar.enableItems(document.getElementById('previousPage'), true);
            toolbar.enableItems(document.getElementById('nextPage'), true);
        }
    }

    function onCurrentPageBoxKeypress(event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
            event.preventDefault();
            return false;
        }
        else {
            var currentPageNumber = parseInt(currentPageBox.value);
            if (event.which === 13) {
                if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                    viewer.navigation.goToPage(currentPageNumber);
                }
                else {
                    currentPageBox.value = viewer.currentPageNumber.toString();
                }
            }
            return true;
        }
    }

    function onCurrentPageBoxClicked() {
        currentPageBox.select();
    }

    function readFile(args) {
        // tslint:disable-next-line
        let upoadedFiles = args.target.files;
        if (args.target.files[0] !== null) {
            let uploadedFile = upoadedFiles[0];
            fileName = uploadedFile.name;
            if (uploadedFile) {
                let reader = new FileReader();
                reader.readAsDataURL(uploadedFile);
                // tslint:disable-next-line
                reader.onload = function (e) {
                    let uploadedFileUrl = e.currentTarget.result;
                    viewer.load(uploadedFileUrl, null);
                    viewer.fileName = fileName;
                };
            }
        }
    };

    export default Vue.extend({
        data: function () {
            return {
                documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
                enableToolbar: false,
                pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
                pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
            }
        },

        PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                     ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

        methods: {
            openClicked: function (args) {
                document.getElementById('fileUpload').click();
            },
            previousClicked: function (args) {
                viewer.navigation.goToPreviousPage();
            },
            nextClicked: function (args) {
                viewer.navigation.goToNextPage();
            },
            printClicked: function (args) {
                viewer.print.print();
            },
            downloadClicked: function (args) {
                viewer.download();
            },
            pageFitClicked: function (args) {
                viewer.magnification.fitToPage();
            },
            zoomInClicked: function (args) {
                viewer.magnification.zoomIn();
            },
            zoomOutClicked: function (args) {
                viewer.magnification.zoomOut();
            },
            pageChange: function (args) {
                currentPageBox = document.getElementById('currentPage');
                currentPageBox.value = viewer.currentPageNumber.toString();
                updatePageNavigation();
            },
            documentLoad: function (args) {
                viewer = this.$refs.pdfviewer.ej2Instances;
                toolbar = this.$refs.toolbar.ej2Instances;
                currentPageBox = document.getElementById('currentPage');
                currentPageBox.value = '1';
                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
                currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
                currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
                document.getElementById('fileUpload').addEventListener('change', readFile, false);
                updatePageNavigation();
            }
        }
    });

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

    import Vue from "vue";
    import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
    import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
    import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
    Vue.use(CalendarPlugin);
    Vue.use(PdfViewerPlugin);
    Vue.use(ToolbarPlugin);
    var toolbar;
    var viewer;
    var fileName;
    var currentPageBox;

    function updatePageNavigation() {
        if (viewer.currentPageNumber === 1) {
            toolbar.enableItems(document.getElementById('previousPage'), false);
            toolbar.enableItems(document.getElementById('nextPage'), true);
        }
        else if (viewer.currentPageNumber === viewer.pageCount) {
            toolbar.enableItems(document.getElementById('previousPage'), true);
            toolbar.enableItems(document.getElementById('nextPage'), false);
        }
        else {
            toolbar.enableItems(document.getElementById('previousPage'), true);
            toolbar.enableItems(document.getElementById('nextPage'), true);
        }
    }

    function onCurrentPageBoxKeypress(event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
            event.preventDefault();
            return false;
        }
        else {
            var currentPageNumber = parseInt(currentPageBox.value);
            if (event.which === 13) {
                if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                    viewer.navigation.goToPage(currentPageNumber);
                }
                else {
                    currentPageBox.value = viewer.currentPageNumber.toString();
                }
            }
            return true;
        }
    }

    function onCurrentPageBoxClicked() {
        currentPageBox.select();
    }

    function readFile(args) {
        // tslint:disable-next-line
        let upoadedFiles = args.target.files;
        if (args.target.files[0] !== null) {
            let uploadedFile = upoadedFiles[0];
            fileName = uploadedFile.name;
            if (uploadedFile) {
                let reader = new FileReader();
                reader.readAsDataURL(uploadedFile);
                // tslint:disable-next-line
                reader.onload = function (e) {
                    let uploadedFileUrl = e.currentTarget.result;
                    viewer.load(uploadedFileUrl, null);
                    viewer.fileName = fileName;
                };
            }
        }
    };

    export default Vue.extend({
        data: function () {
            return {
                serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
                enableToolbar: false,
                pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
                pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
            }
        },

        PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                     ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

        methods: {
            openClicked: function (args) {
                document.getElementById('fileUpload').click();
            },
            previousClicked: function (args) {
                viewer.navigation.goToPreviousPage();
            },
            nextClicked: function (args) {
                viewer.navigation.goToNextPage();
            },
            printClicked: function (args) {
                viewer.print.print();
            },
            downloadClicked: function (args) {
                viewer.download();
            },
            pageFitClicked: function (args) {
                viewer.magnification.fitToPage();
            },
            zoomInClicked: function (args) {
                viewer.magnification.zoomIn();
            },
            zoomOutClicked: function (args) {
                viewer.magnification.zoomOut();
            },
            pageChange: function (args) {
                currentPageBox = document.getElementById('currentPage');
                currentPageBox.value = viewer.currentPageNumber.toString();
                updatePageNavigation();
            },
            documentLoad: function (args) {
                viewer = this.$refs.pdfviewer.ej2Instances;
                toolbar = this.$refs.toolbar.ej2Instances;
                currentPageBox = document.getElementById('currentPage');
                currentPageBox.value = '1';
                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
                currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
                currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
                document.getElementById('fileUpload').addEventListener('change', readFile, false);
                updatePageNavigation();
            }
        }
    });

{% endhighlight %}
{% endtabs %}

Sample :
[https://document.syncfusion.com/demos/pdf-viewer/vue/#/tailwind3/pdfviewer/custom-toolbar.html](https://document.syncfusion.com/demos/pdf-viewer/vue/#/tailwind3/pdfviewer/custom-toolbar.html)

## See also

* [Toolbar customization](./how-to/toolbar-customization)
* [Feature Modules](./feature-module)