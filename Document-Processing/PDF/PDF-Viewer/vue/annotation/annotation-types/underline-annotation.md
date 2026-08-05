---
layout: post
title: Underline Annotation (Text Markup) in Vue PDF Viewer | Syncfusion
description: Learn how to apply, customize, and manage underline text markup annotations in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Underline Annotation (Text Markup) in Vue PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Underline* text markup annotations in the Syncfusion **Vue PDF Viewer**.
You can apply underlines to text from the toolbar or context menu, programmatically invoke underline mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Underline in the Viewer

To enable Underline annotations, inject the following modules into the Vue PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotation)
- [**TextSelection**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#textselection)
- [**Toolbar**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#toolbar)

This minimal setup enables UI interactions like text selection and underline markup.

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

## Add Underline Annotation

### Add Underline Using the Toolbar

1. Select the text you want to annotate.
2. Click the **Underline** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Underline tool](../../../javascript-es6/annotations/annotation-images/underline-tool.gif)

### Add Underline Using the Context Menu

Right-click a selected text region → select **Underline**.
![Underline context](../../../javascript-es6/annotations/annotation-images/underline-context.gif)
To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Underline Mode

Switch the viewer into underline mode using `setAnnotationMode('Underline')`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="enableUnderline">Enable Underline</button>
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
    enableUnderline() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('Underline');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Underline Mode

Switch back to normal mode using:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="disableUnderlineMode">Disable Underline</button>
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
    disableUnderlineMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('None');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Underline Programmatically

Use [`addAnnotation()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) to insert an underline at a specific location.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addUnderline">Add Underline</button>
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
    addUnderline() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Underline', {
        bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
        pageNumber: 1
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Underline Appearance

Configure default underline settings such as **color**, **opacity**, and **author** using [`underlineSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#underlinesettings).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :underlineSettings="underlineSettings" style="height: 650px"></ejs-pdfviewer>
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
      underlineSettings: {
        author: 'Guest User',
        subject: 'Underline',
        color: '#0000ff',
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

## Manage Underline (Edit, Delete, Comment)

### Edit Underline

#### Edit Underline Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../../javascript-es6/annotations/annotation-images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../../javascript-es6/annotations/annotation-images/edit_opacity.png)

#### Edit Underline Programmatically

Modify an existing underline programmatically using `editAnnotation()`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="editUnderlineProgrammatically">Edit Underline</button>
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
    editUnderlineProgrammatically() {
      const viewer = this.$refs.container.ej2_instances[0];
      for (let annot of viewer.annotationCollection) {
        if (annot.textMarkupAnnotationType === 'Underline') {
          annot.color = '#ffff00';
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

### Delete Underline

The PDF Viewer supports deleting existing annotations through both the UI and API.
For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../remove-annotations)

### Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to underline annotations.
It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation‑related notes within the PDF Viewer.

## Set properties while adding Individual Annotation

Set properties for individual underline annotations at the time of creation using the [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) API.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addMultipleUnderlines">Add Multiple Underlines</button>
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
    addMultipleUnderlines() {
      const viewer = this.$refs.container.ej2_instances[0];
      // Underline 1
      viewer.annotation.addAnnotation('Underline', {
        bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
        pageNumber: 1,
        author: 'User 1',
        color: '#0000ff',
        opacity: 0.9
      });
      // Underline 2
      viewer.annotation.addAnnotation('Underline', {
        bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
        pageNumber: 1,
        author: 'User 2',
        color: '#ff0000',
        opacity: 0.9
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Disable TextMarkup Annotation

Disable text markup annotations (including underline) using the [`enableTextMarkupAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enabletextmarkupannotation) property.

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

## Handle Underline Events

The PDF viewer provides annotation life-cycle events that notify when underline annotations are added, modified, selected, or removed.
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
