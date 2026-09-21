---
layout: post
title: Add Area Measurement Annotations in Vue PDF Viewer | Syncfusion
description: Learn how to enable, draw, customize, and manage Area measurement annotations in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Area Measurement Annotations in Vue PDF Viewer
Area is a measurement annotation used to calculate the surface of a closed region on a PDF page—ideal for engineering, construction, or design reviews.

![Area overview](../../../javascript-es6/annotations/annotation-images/area-annot.png)

## Enable Area Measurement

To enable Area annotations, inject the following modules into the Vue PDF Viewer:

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

## Add Area Annotation

### Add Area Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Measurement** → **Area**.
3. Click points to define the polygon; double‑click to close and finalize the area.

![Measurement toolbar](../../images/calibrate_tool.png)

> **Tip:** If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Area Mode
Programmatically switch the viewer into Area mode.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="enableAreaMode">Enable Area Mode</button>
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
    enableAreaMode() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.setAnnotationMode('Area');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Area Mode
{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="exitAreaMode">Exit Area Mode</button>
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
    exitAreaMode() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.setAnnotationMode('None');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Area Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#addannotation) API to draw an area by providing **vertexPoints** for a closed region.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="addArea">Add Area</button>
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
    addArea() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation('Area', {
        offset: { x: 200, y: 500 },
        pageNumber: 1,
        vertexPoints: [
          { x: 200, y: 500 },
          { x: 288, y: 499 },
          { x: 289, y: 553 },
          { x: 200, y: 500 }
        ]
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Area Appearance
Configure default properties using the [`areaSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#areasettings) property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer
    id="container"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    :areaSettings="{ fillColor: 'yellow', strokeColor: 'orange', opacity: 0.6 }"
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

## Manage Area (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the polygon to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Area

#### Edit Area (UI)

- Edit the **fill color** using the Edit Color tool.  
  ![Fill color](../../images/calibrate_fillcolor.png)
- Edit the **stroke color** using the Edit Stroke Color tool.  
  ![Stroke color](../../images/calibrate_stroke.png)
- Edit the **border thickness** using the Edit Thickness tool.  
  ![Thickness](../../images/calibrate_thickness.png)
- Edit the **opacity** using the Edit Opacity tool.  
  ![Opacity](../../images/calibrate_opacity.png)
- Open **Right Click → Properties** for additional line‑based options.
  ![Line properties](../../images/calibrate_lineprop.png)


#### Edit Area Programmatically
Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="editAreaProgrammatically">Edit Area</button>
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
    editAreaProgrammatically() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      for (const ann of viewer.annotationCollection) {
        if (ann.subject === 'Area calculation') {
          ann.strokeColor = '#0000FF';
          ann.thickness = 2;
          ann.fillColor = '#FFFF00';
          viewer.annotation.editAnnotation(ann);
          break;
        }
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Delete Area Annotation
Delete Area Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Area using the [`areaSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#areasettings) property.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer
    id="container"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    :areaSettings="{ fillColor: 'yellow', strokeColor: 'orange', opacity: 0.6 }"
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

## Set Properties While Adding Individual Annotation
Pass per‑annotation values directly when calling [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#addannotation).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <button @click="addStyledArea">Add Styled Area</button>
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
    addStyledArea() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation('Area', {
        offset: { x: 210, y: 510 },
        pageNumber: 1,
        vertexPoints: [
          { x: 210, y: 510 },
          { x: 300, y: 510 },
          { x: 305, y: 560 },
          { x: 210, y: 510 }
        ],
        strokeColor: '#EA580C',
        fillColor: '#FEF3C7',
        thickness: 2,
        opacity: 0.85
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Scale Ratio and Units
- Use **Scale Ratio** from the context menu to set the actual‑to‑page scale.  
  ![Scale ratio](../../images/calibrate_scaleratio.png)
- Supported units include **Inch, Millimeter, Centimeter, Point, Pica, Feet**.  
  ![Scale dialog](../../images/calibrate_scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using [`measurementSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#measurementsettings).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer
    id="container"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    :measurementSettings="{ scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' }"
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

## Handle Area Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Area measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
