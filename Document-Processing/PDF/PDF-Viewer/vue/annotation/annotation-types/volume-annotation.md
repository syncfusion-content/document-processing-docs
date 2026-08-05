---
layout: post
title: Volume Annotation in Vue PDF Viewer | Syncfusion
description: Learn to add and customize volume measurement annotations in the Syncfusion Vue PDF Viewer for cubic and volumetric calculations.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Volume Annotation in Vue PDF Viewer

Volume annotations calculate the volume of cubic shapes for technical drawings and architectural plans. They measure circular regions using width and height properties, with scale ratio configuration and unit conversion support.

![Volume overview](../../../javascript-es6/annotations/annotation-images/volume-annot.png)

## Enable Volume Annotation

To enable Volume annotations, inject the following modules:

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

## Add Volume Annotation

### Add Volume Using the Toolbar

1. Click the **Volume** tool in the measurement toolbar.
2. Click and drag on the PDF to define the cubic region (width and height).
3. The volume is automatically calculated and displayed.

### Enable Volume Mode

Switch the viewer to volume mode using `setAnnotationMode()`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="enableVolumeMode">Enable Volume</button>
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
    enableVolumeMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('Volume');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Volume Programmatically

Use [`addAnnotation()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) to insert volume measurements at specific locations:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addVolumeProgrammatically">Add Volume</button>
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
    addVolumeProgrammatically() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Volume', {
        bound: { x: 200, y: 300, width: 100, height: 100 },
        pageNumber: 1
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Volume Appearance

Configure default volume settings such as **color**, **opacity**, and **thickness** using [`volumeSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#volumesettings):

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :volumeSettings="volumeSettings" :measurementSettings="measurementSettings" style="height: 650px"></ejs-pdfviewer>
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
      volumeSettings: {
        fillColor: '#0000ff',
        opacity: 0.6,
        strokeColor: '#000080',
        thickness: 2
      },
      measurementSettings: {
        conversionUnit: 'Inch',
        displayUnit: 'Inch'
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

## Scale Ratio Configuration

Set a scale ratio to adjust measurement calculations for the PDF's drawing scale. Access via the **Scale Ratio dialog** (double-click a volume annotation):

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="configureScaleRatio">Configure Scale Ratio</button>
    <ejs-pdfviewer id="container" ref="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :measurementSettings="measurementSettings" style="height: 650px"></ejs-pdfviewer>
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
      measurementSettings: {
        conversionUnit: 'Inch',
        displayUnit: 'Inch',
        scaleRatio: 2.0
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation]
  },
  methods: {
    configureScaleRatio() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.measurement.measurementSettings.scaleRatio = 1.5;
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Manage Volume (Edit, Delete)

### Edit Volume

#### Edit Volume in UI
- Select a volume annotation and drag to move it.
- Resize by dragging corner/edge handles.
- Double-click to open the Scale Ratio dialog.
- Use the context menu for additional options.

#### Edit Volume Programmatically

Modify an existing volume using `editAnnotation()`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="editVolume">Edit Volume</button>
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
    editVolume() {
      const viewer = this.$refs.container.ej2_instances[0];
      const volumes = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'Volume');
      if (volumes.length > 0) {
        volumes[0].fillColor = '#ff0000';
        volumes[0].opacity = 0.5;
        volumes[0].thickness = 3;
        viewer.annotation.editAnnotation(volumes[0]);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Delete Volume

#### Delete in UI
- Right-click the volume annotation → **Delete**
- Select the annotation and press the **Delete** key

#### Delete Programmatically

Use `deleteAnnotationById()` to remove a volume:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="deleteVolume">Delete Volume</button>
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
    deleteVolume() {
      const viewer = this.$refs.container.ej2_instances[0];
      const volumes = (viewer.annotationCollection || []).filter(a => a.shapeAnnotationType === 'Volume');
      if (volumes.length > 0) {
        viewer.annotation.deleteAnnotationById(volumes[0].annotationId);
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Measurement Units

Volume measurements support multiple unit conversions. Configure via [`measurementSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#measurementsettings):

**Supported Units:**
- Inch (in)
- Millimeter (mm)
- Centimeter (cm)
- Point (pt)
- Pica (pc)
- Feet (ft)

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :measurementSettings="measurementSettings" style="height: 650px"></ejs-pdfviewer>
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
      measurementSettings: {
        conversionUnit: 'Centimeter',
        displayUnit: 'Centimeter'
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

## Handle Volume Events

The PDF viewer provides annotation life-cycle events for volume measurements. For a complete list of events and details, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations, including volume measurements. For full details on export/import formats and procedures, see [**Export and Import Annotations**](../export-import-annotations)

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Distance Annotation](distance-annotation)
- [Radius Annotation](radius-annotation)
- [Annotation Events](../annotation-event)
- [Export and Import Annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
