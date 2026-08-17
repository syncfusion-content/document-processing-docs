---
layout: post
title: Circle Annotation (Shape) in Vue PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Circle annotations in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Circle Annotation (Shape) in Vue PDF Viewer
Circle annotations let users highlight circular regions or draw emphasis bubbles on PDFs for reviews and markups. You can add circles from the toolbar, switch to circle mode programmatically, customize appearance, edit/delete them in the UI, and export them with the document.

![Circle overview](../../../javascript-es6/annotations/annotation-images/circle-annot.png)

## Enable Circle Annotation in the Viewer

To enable Circle annotations, inject the following modules into the Vue PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#annotation)
- [**Toolbar**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#toolbar)

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer
    id="container"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    style="height: 650px"
  >
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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

## Add Circle Annotation

### Apply Circle Annotation Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Circle**.
3. Click and drag on the PDF page to draw the circle (ellipse).

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Circle Mode

Switch the viewer into circle mode using `setAnnotationMode('Circle')`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="enableCircleMode">Enable Circle Mode</button>
  <ejs-pdfviewer ref="pdfviewer" id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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
    enableCircleMode() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.setAnnotationMode('Circle');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Circle Mode

Switch back to normal mode using:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="exitCircleMode">Exit Circle Mode</button>
  <ejs-pdfviewer ref="pdfviewer" id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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
    exitCircleMode() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.setAnnotationMode('None');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Circle Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#addannotation) API to draw a circle (ellipse) at a specific location.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="addCircle">Add Circle</button>
  <ejs-pdfviewer ref="pdfviewer" id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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
    addCircle() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation('Circle', {
        offset: { x: 200, y: 620 },
        pageNumber: 1,
        width: 90,
        height: 90
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Circle Appearance
Configure default circle appearance (fill color, stroke color, thickness, opacity) using the [`circleSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#circlesettings) property.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer
    id="container"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    :circleSettings="{ fillColor: '#ffa500', strokeColor: '#ff6a00', thickness: 2, opacity: 0.9 }"
    style="height: 650px"
  >
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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

## Manage Circle (Edit, Move, Resize, Delete)

### Edit Circle

#### Edit Circle (UI)

- Select a Circle to view resize handles.
- Drag any side/corner to resize; drag inside the shape to move it.
- Edit **fill**, **stroke**, **thickness**, and **opacity** using the annotation toolbar.

![Shape tools](../../images/shape_toolbar.png)

Use the annotation toolbar:
- **Edit fill Color** tool  
![Edit fill color](../../../javascript-es6/images/shape_fillColor.png)

- **Edit stroke Color** tool
![Edit stroke color](../../../javascript-es6/images/shape_strokecolor.png)

- **Edit Opacity** slider
![Edit opacity](../../../javascript-es6/images/shape_opacity.png)

- **Edit Thickness** slider
![Edit thickness](../../../javascript-es6/images/shape_thickness.png)

#### Edit Circle Programmatically

Modify an existing Circle programmatically using `editAnnotation()`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="editCircleProgrammatically">Edit Circle</button>
  <ejs-pdfviewer ref="pdfviewer" id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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
    editCircleProgrammatically() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      for (const annot of viewer.annotationCollection) {
        if (annot.subject === 'Circle') {
          annot.strokeColor = '#0000ff';
          annot.thickness = 2;
          annot.fillColor = '#ffff00';
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

### Delete Circle
The PDF Viewer supports deleting existing annotations through the UI and API.
See [**Delete Annotation**](../remove-annotations) for full behavior and workflows.

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to circle annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding Individual Annotation
Set properties for individual circle annotations by passing values directly during [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#addannotation).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="addMultipleCircles">Add Multiple Circles</button>
  <ejs-pdfviewer ref="pdfviewer" id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height: 650px"></ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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
    addMultipleCircles() {
      const viewer = this.$refs.pdfviewer.ej2Instances;

      // Circle 1
      viewer.annotation.addAnnotation('Circle', {
        offset: { x: 200, y: 620 },
        pageNumber: 1,
        width: 100,
        height: 100,
        opacity: 0.9,
        strokeColor: '#ff6a00',
        fillColor: '#ffa500',
        author: 'User 1'
      });

      // Circle 2
      viewer.annotation.addAnnotation('Circle', {
        offset: { x: 340, y: 620 },
        pageNumber: 1,
        width: 80,
        height: 80,
        opacity: 0.85,
        strokeColor: '#ff1010',
        fillColor: '#ffe600',
        author: 'User 2'
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Disable Circle Annotation
Disable shape annotations (Line, Arrow, Rectangle, Circle, Polygon) using the [`enableShapeAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enableshapeannotation) property.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer
    id="container"
    :enableShapeAnnotation="false"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    style="height: 650px"
  >
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Annotation
} from '@syncfusion/ej2-vue-pdfviewer';

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

## Handle Circle Events

The PDF viewer provides annotation life-cycle events that notify when Circle annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
