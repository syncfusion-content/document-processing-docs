---
layout: post
title: Stamp Annotation in Vue PDF Viewer | Syncfusion
description: Learn how to add, customize, and manage stamp annotations in the Syncfusion Vue PDF Viewer with various stamp types.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Stamp Annotation in Vue PDF Viewer

Stamp annotations display predefined or custom stamps in PDF documents. The Vue PDF Viewer supports several stamp types: **Sign Here**, **Witness**, **Approved**, **AsIs**, **Expired**, **NotApproved**, **NotForPublicRelease**, **Confidential**, **TopSecret**, **ForComment**, **Recommended**, and **Custom stamps**.

## Enable Stamp in the Viewer

To enable Stamp annotations, inject the following modules:

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

## Add Stamp Annotation

### Add Stamp Using the Toolbar

1. Click the **Stamp** tool in the toolbar.
2. Select a stamp type from the dropdown.
3. Click on the PDF page to place the stamp.

![Stamp Tool](../../../javascript-es6/images/stamp_tool.png)

### Add Stamp Using the Context Menu

Right-click on the PDF page → select **Stamp** → choose a stamp type.

### Enable Stamp Mode

Switch the viewer to stamp mode using `setAnnotationMode()`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="enableStampMode">Enable Stamp</button>
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
    enableStampMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('Stamp', 'Approved');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Stamp Programmatically

Use [`addAnnotation()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) to insert stamps at specific locations.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addStampProgrammatically">Add Stamp</button>
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
    addStampProgrammatically() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Stamp', {
        customStampName: 'Approved',
        x: 300,
        y: 300,
        pageNumber: 1,
        width: 100,
        height: 100
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Add Custom Stamp

### Add Custom Stamp

Create custom stamps with base64-encoded images. Set up the custom stamp array via [`stampSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#stampsettings):

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addCustomStamp">Add Custom Stamp</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :stampSettings="stampSettings" style="height: 650px"></ejs-pdfviewer>
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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      stampSettings: {
        customStamps: [
          {
            customStampName: 'SignatureStamp',
            customStampImageSource: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // Base64 image data
          }
        ]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    addCustomStamp() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Stamp', {
        customStampName: 'SignatureStamp',
        x: 300,
        y: 400,
        pageNumber: 1,
        width: 100,
        height: 50
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

N> Supported image format for custom stamps: **JPEG**. Only the base64-encoded image source is supported; local file paths are not supported.

## Customize Stamp Appearance

Configure default stamp settings using [`stampSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#stampsettings):

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :stampSettings="stampSettings" style="height: 650px"></ejs-pdfviewer>
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
      stampSettings: {
        opacity: 0.8,
        isLock: false
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

## Manage Stamp (Edit, Delete)

### Edit Stamp

#### Edit Stamp in UI
- Select a stamp and drag to move it.
- Resize by dragging the corner handles.
- Use the right-click context menu for additional options.

#### Edit Stamp Programmatically

Modify an existing stamp using `editAnnotation()`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="editStamp">Edit Stamp</button>
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
    editStamp() {
      const viewer = this.$refs.container.ej2_instances[0];
      const stamps = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'Stamp');
      if (stamps.length > 0) {
        stamps[0].opacity = 0.5;
        stamps[0].isLock = true;
        viewer.annotation.editAnnotation(stamps[0]);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Delete Stamp

#### Delete in UI
- Right-click the stamp → **Delete**
- Press the **Delete** key while the stamp is selected

#### Delete Programmatically

Use `deleteAnnotationById()` to remove a stamp:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="deleteStamp">Delete Stamp</button>
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
    deleteStamp() {
      const viewer = this.$refs.container.ej2_instances[0];
      const stamps = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'Stamp');
      if (stamps.length > 0) {
        viewer.annotation.deleteAnnotationById(stamps[0].annotationId);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Handle Stamp Events

The PDF viewer provides annotation life-cycle events for stamps. For a complete list of events and details, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations, including stamps. For full details on export/import formats and procedures, see [**Export and Import Annotations**](../export-import-annotations)

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Annotation Events](../annotation-event)
- [Export and Import Annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
