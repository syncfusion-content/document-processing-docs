---
layout: post
title: Redaction Programmatic support in Vue PDF Viewer | Syncfusion
description: Learn how to add, delete, update, and apply redaction annotations programmatically in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Programmatic support for redaction in Vue PdfViewer

The Syncfusion Vue PDF Viewer provides APIs to add, update, delete, and apply redaction annotations programmatically. You can also redact entire pages, configure default properties, and work with the redaction property panel.

## Enable the redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div class="control-section">
      <ejs-pdfviewer
        id="container"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :toolbarSettings="toolbarSettings"
        style="height: 680px"
      />
    </div>
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Add redaction annotations programmatically

You can add redaction annotations to a PDF document using the `addAnnotation` method of the `annotation` module. You can listen to the `annotationAdd` event to track when annotations are added.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div class="content-wrapper">
    <div style="margin-bottom: 8px; display: flex; gap: 8px; align-items: center;">
      <button id="addRedactAnnot" type="button" @click="addRedaction">
        Add Redaction Annotation
      </button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
      :annotationAdd="onAnnotationAdd"
    />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  },
  methods: {
    addRedaction() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      inst.annotation.addAnnotation('Redaction', {
        bound: { x: 200, y: 480, width: 150, height: 75 },
        pageNumber: 1,
        markerFillColor: '#0000FF',
        markerBorderColor: 'white',
        fillColor: 'red',
        overlayText: 'Confidential',
        fontColor: 'yellow',
        fontFamily: 'Times New Roman',
        fontSize: 8,
        beforeRedactionsApplied: false
      });
    },
    onAnnotationAdd(args) {
      console.log('Annotation added:', args);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Delete redaction annotations programmatically

Redaction annotations can be removed using the `deleteAnnotationById` event or by selecting and deleting them through code.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div style="margin-bottom: 8px;">
      <button @click="deleteAnnotationById">Delete Annotation By Id</button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
    />
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  },
  methods: {
    deleteAnnotationById() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      const id = inst.annotationCollection?.[0]?.annotationId;
      if (id) {
        inst.annotationModule.deleteAnnotationById(id);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}


Alternatively, you can remove annotations by selecting them in the UI and pressing the **Delete** key.

## Update redaction annotation properties programmatically

You can update properties of an existing redaction annotation using the `editAnnotation` API. For example, to change overlay text or fill color:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div style="margin-bottom: 8px; display: flex; gap: 8px;">
      <button id="editRedactAnnotation" @click="editRedactAnnotation">
        Edit Redact Annotation
      </button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
    />
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  },
  methods: {
    editRedactAnnotation() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      const collection = inst.annotationCollection || [];
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].subject === 'Redaction') {
          collection[i].overlayText = 'EditedAnnotation';
          collection[i].markerFillColor = '#22FF00';
          collection[i].markerBorderColor = '#000000';
          collection[i].isRepeat = true;
          collection[i].fillColor = '#F8F8F8';
          collection[i].fontColor = '#333333';
          collection[i].fontSize = 14;
          collection[i].fontFamily = 'Symbol';
          collection[i].textAlign = 'Right';
          collection[i].beforeRedactionsApplied = false;
          inst.annotation.editAnnotation(collection[i]);
        }
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Add page redactions programmatically

Entire pages can be marked for redaction using the `addPageRedactions` method:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div style="margin-bottom: 8px; display: flex; gap: 8px; align-items: center;">
      <button id="addPageRedactions" type="button" @click="addPageRedactions">
        Add Page Redaction
      </button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
    />
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  },
  methods: {
    addPageRedactions() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      inst.annotation.addPageRedactions([1, 3, 5, 7]);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Apply redaction programmatically

Once annotations are added, you can permanently apply them to the document using the `redact` method:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div style="margin-bottom: 8px; display: flex; gap: 8px; align-items: center;">
      <button id="redact" type="button" @click="applyRedaction">
        Apply Redaction
      </button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
    />
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  },
  methods: {
    applyRedaction() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      inst.annotation.redact();
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

N> Applying redaction is irreversible. Once applied, the original content cannot be recovered.

## Configure default redaction annotation properties

You can configure default properties for redaction annotations (such as fill color, overlay text, and font) when adding them programmatically:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
    />
  </div>
</template>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  },
  mounted() {
    const inst = this.$refs.pdfviewer?.ej2Instances;
    if (!inst) return;
    inst.redactionSettings = {
      overlayText: 'Confidential',
      markerFillColor: '#FF0000',
      markerBorderColor: '#000000',
      isRepeat: false,
      fillColor: '#F8F8F8',
      fontColor: '#333333',
      fontSize: 14,
      fontFamily: 'Symbol',
      textAlign: 'Right'
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## Redaction property panel

The redaction property panel allows users to update annotation properties through the UI. Programmatically, you can invoke the property panel by selecting an annotation and calling the relevant APIs. Properties such as overlay text, font style, and fill color can be updated directly in the panel.

![Redaction Property Panel](../redaction/redaction-annotations-images/redaction-property-panel-icon.png)

## See also

* [Overview of Redaction](./overview)
* [Redaction UI interactions](./ui-interaction)
* [Redaction Toolbar](./toolbar)
* [Reaction in Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)