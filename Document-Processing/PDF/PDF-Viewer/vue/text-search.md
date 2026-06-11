---
layout: post
title: Text search in Vue PDF Viewer component | Syncfusion
description: Learn how to configure text search, handle search events, and run programmatic searches in the Syncfusion Vue PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Text search in Vue PDF Viewer

The text search feature enables users to locate and highlight matching content within PDF documents. The Vue PDF Viewer provides both interactive toolbar-based search and programmatic search capabilities through the `TextSearch` module.

## Enable text search

To use text search functionality, ensure the `TextSearch` module is provided to the PDF Viewer component and set `enableTextSearch` to `true`:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableTextSearch="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch])
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableTextSearch="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
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
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :enableTextSearch="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch])
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :enableTextSearch="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Text search features

The PDF Viewer toolbar provides an intuitive search interface with the following capabilities:

### Real-time search suggestions
Typing in the search box immediately displays suggestions matching the entered text. The suggestions list updates with each keystroke, allowing users to quickly jump to results without completing the full term.

![Search suggestion popup](./images/SingleSearchPopup.png)

### Select results from suggestions
The suggestions popup displays relevant matches. Selecting a suggestion jumps directly to that occurrence in the PDF.

![Search results from popup](./images/SearchResultFromPopup.png)

### Case-sensitive search
Enable the **Match Case** checkbox to perform case-sensitive searches. Navigation controls step through exact matches only.

![Match case navigation](./images/SearchNavigationMatchCase.png)

### Case-insensitive search
Leave **Match Case** unchecked to highlight all occurrences regardless of capitalization.

![Search navigation without match case](./images/SearchNavigationNoMatchCase.png)

### Multi-word search with Match Any Word
Enable **Match Any Word** to split the search term into separate words and find matches for any of them throughout the document.

![Match any word search results](./images/MultiSearchPopup.png)

## Programmatic text search

Beyond the interactive toolbar, trigger searches programmatically using the `searchText` method with customizable options.

### Using `searchText` method

The `searchText` method initiates a search with optional filters for case sensitivity and whole-word matching. Call it on the PDF Viewer's `textSearch` instance:

**Parameters:**
- `text` (string): The term to search for
- `isMatchCase` (optional boolean): Enable case-sensitive matching
- `isMatchWholeWord` (optional boolean): Match only complete words

{% highlight html %}
<template>
  <div id="app">
    <div class="controls">
      <button @click="searchBasic">Search Text</button>
      <button @click="searchMatchCase">Match Case</button>
      <button @click="searchWholeWord">Match Whole Word</button>
    </div>
    <ejs-pdfviewer ref="pdfViewer" id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableTextSearch="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const pdfViewer = ref(null);
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch]);

function searchBasic() {
  pdfViewer.value.ej2Instances.textSearch.searchText('search text', false, false);
}

function searchMatchCase() {
  pdfViewer.value.ej2Instances.textSearch.searchText('PDF', true);
}

function searchWholeWord() {
  pdfViewer.value.ej2Instances.textSearch.searchText('pdf', false, true);
}
</script>
{% endhighlight %}

### Case-sensitive search

Set `isMatchCase` to `true` for case-sensitive searches:

```html
<template>
  <div id="app">
    <button v-on:click="matchCase">Match Case</button>
    <ejs-pdfviewer ref="pdfViewer" id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableTextSearch="true"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  },
  methods: {
    matchCase() {
      const viewer = this.$refs.pdfViewer.ej2Instances;
      viewer.textSearch.searchText('PDF', true);
    }
  }
};
</script>
```
### Whole-word search

Set `isMatchWholeWord` to `true` to match only complete words:

```html
<template>
  <div id="app">
    <button v-on:click="wholeWord">Match Whole Word</button>
    <ejs-pdfviewer ref="pdfViewer" id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableTextSearch="true"></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';

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
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  },
  methods: {
    wholeWord() {
      const viewer = this.$refs.pdfViewer.ej2Instances;
      viewer.textSearch.searchText('pdf', false, true);
    }
  }
};
</script>
```
> **Note**: The toolbar's **Match Any Word** option splits the search term into separate words and finds any of them. This differs from `isMatchWholeWord`, which matches the entire query as a single complete word.

### Available search methods

The `textSearch` module provides these methods for search navigation:

| Method | Purpose |
|--------|---------|
| [**searchText()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#searchtext) | Search for text and highlight all occurrences in the document |
| [**searchNext()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#searchnext) | Navigate to the next occurrence of the current search term |
| [**searchPrevious()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#searchprevious) | Navigate to the previous occurrence of the current search term |
| [**cancelTextSearch()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#canceltextsearch) | Cancel the current search and clear all highlights |

![Text search interface](./images/search.png)

## Find text method

Use the `findText` method to retrieve bounding coordinates of text matches. This is useful for programmatically locating text and accessing its position data for custom rendering or layout calculations.

**Parameters:**
- `text` (string | string[]): Text or array of text to find
- `isMatchCase` (boolean): Enable case-sensitive matching
- `pageNumber` (optional number): Limit search to a specific page

**Returns:** Bounding rectangles for all matches

### Find text on all pages

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText('pdf', false);
  }
 }
}
</script>
```

{% endhighlight %}
{% highlight html tabtitle="Server-backed" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText('pdf', false);
  }
 }
}
</script>
```

{% endhighlight %}
{% endtabs %}

### Find text on a specific page

Limit the search to a specific page by passing the page number as the third parameter:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText('pdf', false, 7);
  }
 }
}
</script>
```

{% endhighlight %}
{% highlight html tabtitle="Server-backed" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText('pdf', false, 7);
  }
 }
}
</script>
```

{% endhighlight %}
{% endtabs %}

### Find multiple text strings

Search for multiple terms by passing an array of strings:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText(['pdf', 'adobe'], false);
  }
 }
}
</script>
```

{% endhighlight %}
{% highlight html tabtitle="Server-backed" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText(['pdf', 'adobe'], false);
  }
 }
}
</script>
```

{% endhighlight %}
{% endtabs %}

### Find multiple text strings on a specific page

Search for multiple terms on a specific page by providing the page number as the third parameter:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText(['pdf', 'adobe'], false, 7);
  }
 }
}
</script>
```

{% endhighlight %}
{% highlight html tabtitle="Server-backed" %}

```html
<template>
  <div id="app">
    <button v-on:click="textBounds">Form Fields Collection</button>
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
  textBounds: function() {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];
    viewer.textSearch.findText(['pdf', 'adobe'], false, 7);
  }
 }
}
</script>
```

{% endhighlight %}
{% endtabs %}

## Text search events

The PDF Viewer triggers events during text search operations, allowing you to customize behavior and respond to different stages of the search process.

### textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textsearchstartevent) event fires as soon as a search begins from the toolbar interface or through the `textSearch.searchText` method. Use it to reset UI state, log analytics, or cancel the default search flow before results are processed.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchStartEventArgs/) exposes:
  - `searchText`: the term being searched.
  - `matchCase`: indicates whether case-sensitive search is enabled.
- `isMatchWholeWord`: indicates whether whole-word matching is enabled.
- `name`: event name.
- `cancel`: set to `true` to stop the default search.

{% highlight html %}
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :textSearchStart="handleTextSearchStart"></ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch]);

function handleTextSearchStart(args) {
  console.log(`Text search started for: "${args.searchText}"`);
}
</script>
{% endhighlight %}

### textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textsearchhighlightevent) event triggers whenever a search result is brought into view, including navigation between matches. Use it to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchHighlightEventArgs/) exposes:
  - `bounds`: `RectangleBoundsModel | RectangleBoundsModel[]` representing the highlighted match.
  - `pageNumber`: page index where the match is highlighted.
  - `searchText`: the active search term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

{% highlight html %}
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :textSearchHighlight="handleTextSearchHighlight"></ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch]);

function handleTextSearchHighlight(args) {
  console.log('Highlighted match bounds:', args.bounds);
}
</script>
{% endhighlight %}

### textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textsearchcompleteevent) event runs after the search engine finishes scanning the document for the current query. Use it to update match counts, toggle navigation controls, or notify users when no results were found.

- Typical uses:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators or show a "no results" message if none were found.
  - Record analytics for search effectiveness.
- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchCompleteEventArgs/) exposes:
  - `totalMatches`: total number of occurrences found.
  - `isMatchFound`: indicates whether at least one match was found.
  - `searchText`: the searched term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

{% highlight html %}
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :textSearchComplete="handleTextSearchComplete"></ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch]);

function handleTextSearchComplete(args) {
  console.log('Text search completed.', args);
}
</script>
{% endhighlight %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/TextSearch)

## See also

* [Toolbar items](./toolbar)
* [Feature modules](./feature-module)
