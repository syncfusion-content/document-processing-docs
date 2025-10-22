---
layout: post
title: Organize Pages Events in Vue PDF Viewer component | Syncfusion
description: Learn how to handle Organize Pages events in the Vue PDF Viewer, including save-as and zoom-changed events for the page organizer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize Pages Events in Vue PDF Viewer

The PDF Viewer provides events to track and respond to actions within the page organizer, allowing you to customize page manipulation workflows.

## pageOrganizerSaveAs

The `pageOrganizerSaveAs` event is triggered when a save action is performed in the page organizer.

- Occurs when the Save as button in the page organizer toolbar is clicked after modifying the document structure.

Event arguments:

- `fileName`: Name of the currently loaded PDF document.
- `downloadDocument`: Base64 string of the modified PDF document data.
- `cancel`: Set to `true` to prevent the default save-as action.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer"
                   ref="pdfviewer"
                   :documentPath="documentPath"
                   :resourceUrl="resourceUrl"
                   :pageOrganizerSaveAs="onSaveAs">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]);

  const onSaveAs = function(args) {
    console.log('File Name is ' + args.fileName);
    console.log('Document data ' + args.downloadDocument);
    // args.cancel = true; // Uncomment to prevent default Save As
  };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer"
                   ref="pdfviewer"
                   :documentPath="documentPath"
                   :resourceUrl="resourceUrl"
                   :pageOrganizerSaveAs="onSaveAs">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

  export default {
    name: 'App',
    components: { 'ejs-pdfviewer': PdfViewerComponent },
    data() {
      return {
        documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
      };
    },
    provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      onSaveAs(args) {
        console.log('File Name is ' + args.fileName);
        console.log('Document data ' + args.downloadDocument);
        // args.cancel = true; // Uncomment to prevent default Save As
      }
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

## pageOrganizerZoomChanged

The `pageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer changes.

- Fired when the user interacts with the zoom slider in the page organizer. Ensure `showImageZoomingSlider` is set to `true` in `pageOrganizerSettings`.

Event arguments:

- `previousZoomValue`: Previous zoom value.
- `currentZoomValue`: Current zoom value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer"
                   ref="pdfviewer"
                   :documentPath="documentPath"
                   :resourceUrl="resourceUrl"
                   :pageOrganizerZoomChanged="onZoomChanged"
                   :pageOrganizerSettings="pageOrganizerSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
  import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { provide, ref } from 'vue';

  const pdfviewer = ref(null);
  const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
  const resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
  const pageOrganizerSettings = { showImageZoomingSlider: true };

  provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]);

  const onZoomChanged = function(args) {
    console.log('Previous Zoom Value is ' + args.previousZoomValue);
    console.log('Current Zoom Value is ' + args.currentZoomValue);
  };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer"
                   ref="pdfviewer"
                   :documentPath="documentPath"
                   :resourceUrl="resourceUrl"
                   :pageOrganizerZoomChanged="onZoomChanged"
                   :pageOrganizerSettings="pageOrganizerSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

  export default {
    name: 'App',
    components: { 'ejs-pdfviewer': PdfViewerComponent },
    data() {
      return {
        documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
        pageOrganizerSettings: { showImageZoomingSlider: true }
      };
    },
    provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
        TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
    },
    methods: {
      onZoomChanged(args) {
        console.log('Previous Zoom Value is ' + args.previousZoomValue);
        console.log('Current Zoom Value is ' + args.currentZoomValue);
      }
    }
  };
</script>

{% endhighlight %}
{% endtabs %}

## Related event documentation

- Annotation events: [Annotation events](../annotation/annotation-event.md)
- Form designer events: [Form field events](../form-designer/form-field-events.md)
