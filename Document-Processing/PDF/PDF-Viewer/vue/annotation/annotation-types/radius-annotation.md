---
layout: post
title: Add Radius Measurement Annotations in Vue PDF Viewer | Syncfusion
description: Learn how to enable, draw, customize, and manage Radius measurement annotations in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Radius Measurement Annotations in Vue PDF Viewer
Radius measurement annotations allow users to draw circular regions and calculate the radius visually.

![Radius overview](../../../javascript-es6/annotations/annotation-images/radius-annot.png)

## Enable Radius Measurement

To enable Radius annotations, inject the following modules into the Vue PDF Viewer:

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

## Add Radius Annotation

### Add Radius Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Measurement → Radius**.
3. Click and drag on the page to draw the radius.

![Measurement toolbar](../../../javascript-es6/images/calibrate_tool.png)

N> If Pan mode is active, selecting the Radius tool automatically switches interaction mode.

### Enable Radius Mode
Programmatically switch the viewer into Radius mode.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="enableRadiusMode">Enable Radius Mode</button>
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
    enableRadiusMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('Radius');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Radius Mode
{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="exitRadiusMode">Exit Radius Mode</button>
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
    exitRadiusMode() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.setAnnotationMode('None');
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Add Radius Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation) API to insert a Radius measurement at a specific location by providing **width** and **height**.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addRadius">Add Radius</button>
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
    addRadius() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Radius', {
        offset: { x: 200, y: 630 },
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

## Customize Radius Appearance
Configure default properties using the [`Radius Settings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#radiussettings) property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :radiusSettings="radiusSettings" style="height: 650px"></ejs-pdfviewer>
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
      radiusSettings: { fillColor: 'yellow', strokeColor: 'orange', opacity: 0.6 }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Manage Radius (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the polygon to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Radius Annotation

#### Edit Radius (UI)

- Edit the **fill color** using the Edit Color tool.  
  ![Fill color](../../../javascript-es6/images/calibrate_fillcolor.png)
- Edit the **stroke color** using the Edit Stroke Color tool.  
  ![Stroke color](../../../javascript-es6/images/calibrate_stroke.png)
- Edit the **border thickness** using the Edit Thickness tool.  
  ![Thickness](../../../javascript-es6/images/calibrate_thickness.png)
- Edit the **opacity** using the Edit Opacity tool.  
  ![Opacity](../../../javascript-es6/images/calibrate_opacity.png)
- Open **Right Click → Properties** for additional line‑based options.
  ![Line properties](../../../javascript-es6/images/calibrate_lineprop.png)

#### Edit Radius Programmatically

Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="editRadiusProgrammatically">Edit Radius</button>
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
    editRadiusProgrammatically() {
      const viewer = this.$refs.container.ej2_instances[0];
      for (const ann of viewer.annotationCollection) {
        if (ann.subject === 'Radius calculation') {
          ann.strokeColor = '#0000FF';
          ann.thickness = 2;
          ann.opacity = 0.8;
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

### Delete Radius Annotation

Delete Radius Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Radius using the [`radiusSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#radiussettings) property.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-pdfviewer id="container" :documentPath="documentPath" :resourceUrl="resourceUrl" :radiusSettings="radiusSettings" style="height: 650px"></ejs-pdfviewer>
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
      radiusSettings: { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' }
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
Pass per-annotation values directly when calling [`addAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <button @click="addStyledRadius">Add Styled Radius</button>
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
    addStyledRadius() {
      const viewer = this.$refs.container.ej2_instances[0];
      viewer.annotation.addAnnotation('Radius', {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90,
        fillColor: 'orange',
        opacity: 0.6,
        strokeColor: 'pink'
      });
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Scale Ratio & Units
- Use **Scale Ratio** from the context menu.  
  ![Scale ratio](../../../javascript-es6/images/calibrate_scaleratio.png)
- Supported units: Inch, Millimeter, Centimeter, Point, Pica, Feet.  
  ![Scale dialog](../../../javascript-es6/images/calibrate_scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using [`measurementSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#measurementsettings).

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
      measurementSettings: { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Annotation]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Handle Radius Events
Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Radius measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
