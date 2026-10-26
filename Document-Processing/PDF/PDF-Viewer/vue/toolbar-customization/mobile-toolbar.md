---
layout: post
title: Mobile Toolbar in Vue PDF Viewer | Syncfusion
description: Customize the mobile toolbar in the Vue PDF Viewer to ensure smooth touch interactions and a tailored experience on small screens.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Mobile Toolbar in Vue PDF Viewer

The Mobile PDF Viewer provides features for viewing, searching, annotating, and managing PDF documents on mobile devices. It exposes core tools such as search, download, bookmarking, annotation, and page organization. The desktop toolbar can also be enabled in mobile mode to expose additional actions when required.

## Mobile Mode Toolbar Configuration

In mobile mode, the toolbar is optimized for small screens and presents the most common actions for interacting with a PDF document. The following key features are available in mobile mode:

![Mobile toolbar with primary PDF interaction options](../images/mobileToolbar.png)

### Main Toolbar Options

- OpenOption: Tap to load a PDF document.
- SearchOption: Access the search bar to find text within the document.

![Search bar displayed for finding text within a PDF](../images/searchOption.png)

- UndoRedoTool: Quickly undo or redo any annotations made.
- OrganizePagesTool: Enable or disable page organization features to modify document pages.

![Page organization interface for modifying PDF pages](../images/organizePages.png)

- AnnotationEditTool: Activate or deactivate annotation editing to add or modify annotations.

![Annotation editing toolbar allowing users to add, edit, or delete annotations on a PDF](../images/editAnnotation.png)

N> In mobile mode, the annotation toolbar is displayed at the bottom of the viewer.

### More Options Menu
When you open the more options menu, you will see additional actions such as:

- DownloadOption: Download the currently opened PDF document.
- BookmarkOption: View bookmarks within the document.

![More options menu showing additional actions like download and bookmark](../images/more-options.png)

## Enable Desktop Mode in Mobile

The desktop toolbar can be enabled on mobile devices by setting the `enableDesktopMode` option. Enabling this option exposes desktop-style toolbar actions in the mobile PDF Viewer.

### Steps to Enable Desktop Mode

**Step 1:** Set `enableDesktopMode` to true in the component configuration.
**Step 2:** The viewer will use the desktop toolbar layout, granting access to additional actions and controls.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableDesktopMode="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
  TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableDesktopMode="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :enableDesktopMode="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
  TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :enableDesktopMode="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Enable Scrolling in Desktop Mode with Touch Gestures

To ensure smooth touch scrolling of documents on mobile devices when the desktop toolbar is enabled, set the `enableTextSelection` option to **false**. This disables text-selection interactions that can interfere with touch-based scrolling.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableDesktopMode="true" :enableTextSelection="false">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
  TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableDesktopMode="true" :enableTextSelection="false">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :enableDesktopMode="true" :enableTextSelection="false">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
  TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :enableDesktopMode="true" :enableTextSelection="false">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Print Option Not Available in Mobile Mode

The Print option is not available in mobile mode by default. Enabling the desktop toolbar on mobile via `enableDesktopMode` makes the Print option available.

### How to Use Print on Mobile:

- Set `enableDesktopMode` to true to load the desktop toolbar on mobile.
- After enabling desktop mode, the Print option appears in the toolbar and can be used to print the document from the mobile device.

N> Print functionality remains unavailable in the default mobile toolbar unless desktop mode is enabled.

## See also

* [Primary toolbar customization](./primary-toolbar)
* [Custom toolbar](./custom-toolbar)
* [Annotation toolbar customization](./annotation-toolbar)
* [Form designer toolbar customization](./form-designer-toolbar)
* [Toolbar customization](../toolbar)
* [Feature Modules](../feature-module)