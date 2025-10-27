---
layout: post
title: Text selection in Vue PDF Viewer | Syncfusion
description: Learn how to configure text selection, react to selection events, and manage copy workflows in the Syncfusion Vue PDF Viewer component.
control: Text selection
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Text selection in Vue PDF Viewer

The TextSelection module lets users highlight and copy text from the loaded PDF. Selection is enabled by default and can be configured or monitored programmatically to match application workflows.

## Enable or disable text selection

Use the `enableTextSelection` property to enable or disable choosing text in the PDF Viewer.

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

## Text selection events

Monitor user interaction with selection events to coordinate downstream actions such as showing tooltips, enabling context menus, or storing analytics.

### textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionstartevent) event fires when a user begins selecting text. Use it to reset temporary UI, pause conflicting shortcuts, or capture the starting context.

- Event arguments: `TextSelectionStartEventArgs` supplies details such as `pageNumber`, `bounds`, and `selectionBehavior`.

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

The [textSelectionEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionendevent) event triggers after the selection is finalized. Use it to access the selected text, toggle contextual commands, or store telemetry.

- Event arguments: `TextSelectionEndEventArgs` includes `pageNumber`, `bounds`, `selectedText`, and `isSelectionCopied`.

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
