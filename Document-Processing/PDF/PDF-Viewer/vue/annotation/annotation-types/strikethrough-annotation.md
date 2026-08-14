---
layout: post
title: Strikethrough Annotation (Text Markup) in Vue PDF Viewer | Syncfusion
description: Learn how to apply, customize, and manage strikethrough text markup annotations in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Strikethrough Annotation (Text Markup) in Vue PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Strikethrough* text markup annotations in the Syncfusion **Vue PDF Viewer**.
You can draw strikethrough lines through text from the toolbar or context menu, programmatically invoke strikethrough mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Strikethrough in the Viewer

To enable Strikethrough annotations, inject the following modules into the Vue PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotation)
- [**TextSelection**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#textselection)
- [**Toolbar**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#toolbar)

This minimal setup enables UI interactions like text selection and strikethrough markup.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Add Strikethrough Annotation

### Add Strikethrough Using the Toolbar

1. Select the text you want to annotate.
2. Click the **Strikethrough** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Strikethrough tool](../../../javascript-es6/annotations/annotation-images/strikethrough-tool.gif)

### Add Strikethrough Using the Context Menu

Right-click a selected text region → select **Strikethrough**.
![Strikethrough context](../../../javascript-es6/annotations/annotation-images/strikethrough-context.gif)
To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Strikethrough Mode

Switch the viewer into strikethrough mode using `setAnnotationMode('Strikethrough')`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="enableStrikethrough">Enable Strikethrough</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  },
  methods: {
    enableStrikethrough() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('Strikethrough');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Strikethrough Mode

Switch back to normal mode using:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="disableStrikethroughMode">Disable Strikethrough</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  },
  methods: {
    disableStrikethroughMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('None');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Strikethrough Programmatically

Use [`addAnnotation()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) to insert a strikethrough at a specific location.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addStrikethrough">Add Strikethrough</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  },
  methods: {
    addStrikethrough() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Strikethrough', {
        bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
        pageNumber: 1
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Strikethrough Appearance

Configure default strikethrough settings such as **color**, **opacity**, and **author** using [`strikethroughSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#strikethroughsettings).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :strikethroughSettings="strikethroughSettings" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      strikethroughSettings: {
        author: 'Guest User',
        subject: 'Strikethrough',
        color: '#ff0000',
        opacity: 0.9
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation, TextSelection]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Manage Strikethrough (Edit, Delete, Comment)

### Edit Strikethrough

#### Edit Strikethrough Appearance (UI)

Use the annotation toolbar:
![Edit color](../../../javascript-es6/images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../../javascript-es6/images/edit_opacity.png)

#### Edit Strikethrough Programmatically

Modify an existing strikethrough programmatically using `editAnnotation()`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="editStrikethroughProgrammatically">Edit Strikethrough</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  },
  methods: {
    editStrikethroughProgrammatically() {
      const viewer = this.$refs.container.ej2_instances[0];
      for (let annot of viewer.annotationCollection) {
        if (annot.textMarkupAnnotationType === 'Strikethrough') {
          annot.color = '#00ff00';
          annot.opacity = 0.8;
          viewer.annotation.editAnnotation(annot);
          break;
        }
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Delete Strikethrough

The PDF Viewer supports deleting existing annotations through both the UI and API.
For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../remove-annotations)

### Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to strikethrough annotations.
It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation‑related notes within the PDF Viewer.

## Set properties while adding Individual Annotation

Set properties for individual strikethrough annotations at the time of creation using the [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) API.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addMultipleStrikethroughs">Add Multiple Strikethroughs</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  },
  methods: {
    addMultipleStrikethroughs() {
      const viewer = this.$refs.container.ej2_instances[0];
      // Strikethrough 1
      viewer.annotation.addAnnotation('Strikethrough', {
        bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
        pageNumber: 1,
        author: 'User 1',
        color: '#ff0000',
        opacity: 0.9
      });
      // Strikethrough 2
      viewer.annotation.addAnnotation('Strikethrough', {
        bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
        pageNumber: 1,
        author: 'User 2',
        color: '#00ff00',
        opacity: 0.9
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Disable TextMarkup Annotation

Disable text markup annotations (including strikethrough) using the [`enableTextMarkupAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enabletextmarkupannotation) property.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableTextMarkupAnnotation="false" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation, TextSelection]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Handle Strikethrough Events

The PDF viewer provides annotation life-cycle events that notify when strikethrough annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer.
For full details on supported formats and steps to export or import annotations, see [**Export and Import annotations**](../export-import-annotations)

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
