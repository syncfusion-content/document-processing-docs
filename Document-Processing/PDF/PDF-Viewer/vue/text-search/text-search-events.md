---
layout: post
title: Text search Events in Vue PDF Viewer component | Syncfusion
description: Learn how to handle text search events, and run programmatic searches in the Syncfusion Vue PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Text Search Events in Vue PDF Viewer

The Vue PDF Viewer triggers events during text search operations, allowing you to customize behavior and respond to different stages of the search process.

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#textsearchstart) event fires as soon as a search begins from the toolbar interface or through the [`textSearch.searchText`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textsearch#searchtext) method. Use to reset UI state, log analytics, or cancel the default search flow before results are processed.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchStartEventArgs) exposes:
  - `searchText`: the term being searched.
  - `matchCase`: indicates whether case-sensitive search is enabled.
  - `name`: event name.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 100%"
      @textSearchStart="handleTextSearchStart"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
  FormFields, PageOrganizer, TextSelection, TextSearch, Print
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
      TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
      Annotation, FormDesigner, FormFields, PageOrganizer
    ]
  },
  methods: {
    handleTextSearchStart(args) {
      console.log(`Text search started for: "${args.searchText}"`);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#textsearchhighlight) event triggers whenever a search result is brought into view, including navigation between matches. Use to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchHighlightEventArgs) exposes:
  - `bounds`: `RectangleBoundsModel` representing the highlighted match.
  - `pageNumber`: page index where the match is highlighted.
  - `searchText`: the active search term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 100%"
      @textSearchHighlight="handleTextSearchHighlight"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
  FormFields, PageOrganizer, TextSelection, TextSearch, Print
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
      TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
      Annotation, FormDesigner, FormFields, PageOrganizer
    ]
  },
  methods: {
    handleTextSearchHighlight(args) {
      console.log('Highlighted match bounds:', args.bounds);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#textsearchcomplete) event runs after the search engine finishes scanning the document for the current query. Use to update match counts, toggle navigation controls, or notify users when no results were found.

- **Typical uses**:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators or show a "no results" message if none were found.
  - Record analytics for search effectiveness.
- **Event arguments**: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchCompleteEventArgs) exposes:
  - `searchText`: the searched term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 100%"
      @textSearchComplete="handleTextSearchComplete"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
  FormFields, PageOrganizer, TextSelection, TextSearch, Print
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
      TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
      Annotation, FormDesigner, FormFields, PageOrganizer
    ]
  },
  methods: {
    handleTextSearchComplete(args) {
      console.log('Text search completed.', args);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See Also

- [Text Search Features](./text-search-features)
- [Find Text](./find-text)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)
