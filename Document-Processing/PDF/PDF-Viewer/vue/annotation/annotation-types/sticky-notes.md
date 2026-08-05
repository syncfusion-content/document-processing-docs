---
layout: post
title: Sticky Notes Annotation in Vue PDF Viewer | Syncfusion
description: Learn how to add, edit, and manage sticky note comments in the Syncfusion Vue PDF Viewer with threaded discussions.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Sticky Notes Annotation in Vue PDF Viewer

Sticky Notes annotations are popup comments placed on PDF pages. Users can click to open a popup, add notes, and engage in threaded discussions via the **Comments panel** for collaborative feedback and review workflows.

## Enable Sticky Notes in the Viewer

To enable Sticky Notes annotations, inject the following modules:

- [**Annotation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotation)
- [**Toolbar**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#toolbar)

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Add Sticky Note Annotation

### Add Sticky Note Using the Toolbar

1. Click the **Sticky Note** icon in the toolbar.
2. Click on any location on the PDF page to place a note marker.
3. A comment popup appears where you can type your note.

![Sticky Note Tool](../../../javascript-es6/annotations/annotation-images/sticky-note-tool.png)

### Add Sticky Note Using the Context Menu

Right-click on the PDF page → select **Add Sticky Note** (if enabled in context menu).

### Enable Sticky Note Mode

Switch to sticky note mode using `setAnnotationMode()`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="enableStickyNoteMode">Enable Sticky Note</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    enableStickyNoteMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('StickyNotes');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Sticky Note Programmatically

Use [`addAnnotation()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) to insert sticky notes at specific locations:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addStickyNoteProgrammatically">Add Sticky Note</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    addStickyNoteProgrammatically() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('StickyNotes', {
        x: 250,
        y: 250,
        pageNumber: 1,
        author: 'Guest User'
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Sticky Note Appearance

Configure default sticky note settings using [`stickyNotesSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#stickynotes):

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :stickyNotesSettings="stickyNotesSettings" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      stickyNotesSettings: {
        author: 'Guest User',
        opacity: 1
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Manage Sticky Notes (Edit, Delete, Lock)

### Edit Sticky Note

#### Edit Sticky Note in UI
- Click a sticky note icon to open the comment popup.
- Edit the comment text directly in the popup.
- Use the context menu for additional options like **Note Icon** selection.

![Sticky Note Edit](../../../javascript-es6/annotations/annotation-images/sticky-note-edit.png)

#### Edit Sticky Note Programmatically

Use `editAnnotation()` to modify sticky note properties:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="editStickyNote">Edit Sticky Note</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    editStickyNote() {
      const viewer = this.$refs.container.ej2_instances[0];
      const notes = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'StickyNotes');
      if (notes.length > 0) {
        notes[0].isLock = true;
        notes[0].opacity = 0.8;
        viewer.annotation.editAnnotation(notes[0]);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Delete Sticky Note

#### Delete in UI
- Right-click the sticky note → **Delete**
- Select the note and press the **Delete** key

#### Delete Programmatically

Use `deleteAnnotationById()` to remove a sticky note:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="deleteStickyNote">Delete Sticky Note</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    deleteStickyNote() {
      const viewer = this.$refs.container.ej2_instances[0];
      const notes = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'StickyNotes');
      if (notes.length > 0) {
        viewer.annotation.deleteAnnotationById(notes[0].annotationId);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Lock Sticky Note

Prevent editing of a sticky note by setting the `isLock` property to `true`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="lockStickyNote">Lock Sticky Note</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Annotation } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    lockStickyNote() {
      const viewer = this.$refs.container.ej2_instances[0];
      const notes = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'StickyNotes');
      if (notes.length > 0) {
        notes[0].isLock = true;
        viewer.annotation.editAnnotation(notes[0]);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Comments Panel

Sticky notes integrate with the [**Comments panel**](../comments) for threaded discussions. Users can:
- View all sticky notes for a document
- Add and reply to comments
- Track conversation threads
- Filter comments by annotation type or author

For detailed information on the Comments panel UI, workflows, and configuration, see [**Comments Panel**](../comments)

## Handle Sticky Note Events

The PDF viewer provides annotation life-cycle events for sticky notes. For a complete list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations, including sticky notes. For full details on export/import formats and procedures, see [**Export and Import Annotations**](../export-import-annotations)

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import Annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
