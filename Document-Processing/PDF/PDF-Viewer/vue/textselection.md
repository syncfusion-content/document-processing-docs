---
layout: post
title: Text selection in Vue PDF Viewer | Syncfusion
description: Learn how to configure text selection, react to selection events, and manage copy workflows in the Syncfusion Vue PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Text selection in Vue PDF Viewer

The text selection feature allows users to highlight and copy content from PDF documents directly in the viewer interface. The TextSelection module is enabled by default, enabling interactive selection and copy operations. You can also programmatically control selection behavior and respond to selection events to customize the user experience.

## Enable or disable text selection

Control text selection behavior with the `enableTextSelection` property. By default, text selection is enabled allowing users to select and copy text. Set to `false` to restrict user interactions:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button @click="disableSelection">Disable text selection</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableTextSelection="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const pdfviewer = ref(null);
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
]);

const disableSelection = () => {
  if (pdfviewer.value) {
    pdfviewer.value.ej2Instances.enableTextSelection = false;
  }
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button @click="disableSelection">Disable text selection</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableTextSelection="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
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
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      ThumbnailView,
      BookmarkView,
      TextSelection
    ]
  },
  methods: {
    disableSelection() {
      this.$refs.pdfviewer.ej2Instances.enableTextSelection = false;
    }
  }
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :enableTextSelection="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :enableTextSelection="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      ThumbnailView,
      BookmarkView,
      TextSelection
    ]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Respond to text selection events

The PDF Viewer fires selection events at key moments during the user's interaction with text, enabling you to build responsive workflows such as showing copy confirmations, tracking selections for audit trails, or updating related UI elements.

### textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textselectionstart) event fires when a user begins selecting text. Use it to track selection initiation, disable conflicting UI controls, or log analytics about user interaction patterns.

Event arguments (`TextSelectionStartEventArgs`):
- `pageNumber`: Zero-indexed page where selection started
- `bounds`: Bounding rectangle of the initial selection point
- `selectionBehavior`: Indicates whether the selection is new or continuing from a previous selection
- `name`: Event name ("textSelectionStart")

{% tabs %}
{% highlight html tabtitle="Composition API" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @textSelectionStart="handleSelectionStart">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
]);

const handleSelectionStart = (args) => {
  console.log('Selection started', args);
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @textSelectionStart="handleSelectionStart">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
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
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      ThumbnailView,
      BookmarkView,
      TextSelection
    ]
  },
  methods: {
    handleSelectionStart(args) {
      console.log('Selection started', args);
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

### textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textselectionend) event triggers after the user completes a text selection. Use it to capture the selected text content, enable context-sensitive options (e.g., "Add to notes" button), or send selection data to your application backend for processing.

Event arguments (`TextSelectionEndEventArgs`):
- `pageNumber`: Zero-indexed page where selection ended
- `bounds`: Bounding rectangle(s) of the completed selection
- `selectedText`: The actual text content that was selected (plain text string)
- `isSelectionCopied`: Boolean indicating whether the user copied the selection to clipboard
- `name`: Event name ("textSelectionEnd")

{% tabs %}
{% highlight html tabtitle="Composition API" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @textSelectionEnd="handleSelectionEnd">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
]);

const handleSelectionEnd = (args) => {
  console.log('Selection ended', args);
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @textSelectionEnd="handleSelectionEnd">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection
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
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      ThumbnailView,
      BookmarkView,
      TextSelection
    ]
  },
  methods: {
    handleSelectionEnd(args) {
      console.log('Selection ended', args);
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Text search](./text-search)
- [Interaction modes](./interaction-mode)
- [Toolbar items](./toolbar)
