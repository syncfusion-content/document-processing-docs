---
layout: post
title: Custom annotation tools in Vue PDF Viewer | Syncfusion
description: Learn how to build a custom toolbar for Syncfusion Vue PDF Viewer and switch annotation tools programmatically using setAnnotationMode.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom annotation tools in Vue PDF Viewer

The PDF Viewer supports adding a custom toolbar and toggling annotation tools programmatically using the `setAnnotationMode` method. The viewer can enable tools such as Highlight, Underline, Rectangle, Circle, Arrow, Free Text, Ink, and measurement annotations (Distance, Perimeter, Area, Radius).

Follow these steps to build a minimal custom annotation toolbar.

## Step 1: Start from a basic PDF Viewer sample

Refer to the [Getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic sample.

## Step 2: Add a lightweight custom toolbar with Vue buttons

Add buttons for the tools to expose. The sample below uses plain Vue buttons for simplicity; replace with a Syncfusion ToolbarComponent for a richer UI if desired.

## Step 3: Import and inject modules

Ensure the `Annotation` module is injected. Include text selection and search modules if those capabilities are required.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px; display: flex; gap: 8px;">
      <button @click="setMode('Highlight')">Highlight</button>
      <button @click="setMode('Underline')">Underline</button>
      <button @click="setMode('Rectangle')">Rectangle</button>
      <button @click="setMode('Circle')">Circle</button>
      <button @click="setMode('Arrow')">Arrow</button>
      <button @click="setMode('FreeText')">FreeText</button>
      <button @click="setMode('Ink')">Ink</button>
      <button @click="setMode('Distance')">Distance</button>
    </div>
    <ejs-pdfviewer 
      id="pdfViewer" 
      ref="pdfviewer"
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      style="height: 650px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  },
  methods: {
    setMode: function (mode) {
      this.$refs.pdfviewer.ej2Instances.annotation.setAnnotationMode(mode);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Custom tools using Syncfusion Toolbar for a richer UI

Replace the plain buttons with a Syncfusion `ToolbarComponent` and icons for a richer UI. Add the `@syncfusion/ej2-vue-navigations` package and wire each item's `clicked` handler to `setAnnotationMode`.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div id="app">
  <ejs-toolbar :clicked="onToolbarClick">
    <e-items>
      <e-item text="Highlight" id="highlight"></e-item>
      <e-item text="Underline" id="underline"></e-item>
      <e-item text="Rectangle" id="rectangle"></e-item>
      <e-item text="Circle" id="circle"></e-item>
      <e-item text="Arrow" id="arrow"></e-item>
      <e-item text="FreeText" id="freetext"></e-item>
      <e-item text="Ink" id="ink"></e-item>
      <e-item text="Distance" id="distance"></e-item>
    </e-items>
  </ejs-toolbar>
  <ejs-pdfviewer 
    id="pdfViewer" 
    ref="pdfviewer"
    :documentPath="documentPath" 
    :resourceUrl="resourceUrl"
    style="height: 600px;">
  </ejs-pdfviewer>
</div>
</template>

<script>
import {
PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-vue-navigations';

export default {
name: "App",
components: {
  "ejs-pdfviewer": PdfViewerComponent,
  "ejs-toolbar": ToolbarComponent,
  "e-items": ItemsDirective,
  "e-item": ItemDirective
},
data() {
  return {
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  };
},
provide: {
  PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
    ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
    FormDesigner, PageOrganizer]
},
methods: {
  onToolbarClick: function (args) {
      console.log('triggered');
    const modeMap = {
      'highlight': 'Highlight',
      'underline': 'Underline',
      'rectangle': 'Rectangle',
      'circle': 'Circle',
      'arrow': 'Arrow',
      'freetext': 'FreeText',
      'ink': 'Ink',
      'distance': 'Distance'
    };
    const mode = modeMap[args.item.id];
    console.log(mode);
    if (mode) {
      this.$refs.pdfviewer.ej2Instances.annotation.setAnnotationMode(mode);
    }
  }
}
}
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Annotation Toolbar](../toolbar-customization)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
