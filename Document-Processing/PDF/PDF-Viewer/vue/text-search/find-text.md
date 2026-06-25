---
layout: post
title: Find Text in Vue PDF Viewer component | Syncfusion
description: Learn how to configure text search using find text and run programmatic searches in the Syncfusion Vue PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Find Text in Vue PDF Viewer

## Find text method

Use the [`findText`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textsearch#findtext) method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

### Find and get the bounds of a text

Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter and returns matches from all pages in the document. The following code snippet shows how to get the bounds of the specified text:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <button @click="findText">Find Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: calc(100% - 40px)"
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
    findText() {
      const result = this.$refs.pdfViewer.ej2Instances.textSearch.findText('pdf', false);
      console.log(result);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on the desired page

Searches for the specified text within the document and returns the bounding rectangles of the matched text on a specific page. The search can be case-sensitive based on the provided parameter and returns matches only from the selected page. The following code snippet shows how to retrieve bounds for the specified text on a selected page:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <button @click="findText">Find Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: calc(100% - 40px)"
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
    findText() {
      const result = this.$refs.pdfViewer.ej2Instances.textSearch.findText('pdf', false, 7);
      console.log(result);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text

Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters and returns matches from all pages in the document where the strings were found.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <button @click="findText">Find Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: calc(100% - 40px)"
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
    findText() {
      const result = this.$refs.pdfViewer.ej2Instances.textSearch.findText(['adobe', 'pdf'], false);
      console.log(result);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text on desired page

Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <button @click="findText">Find Text Bounds</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: calc(100% - 40px)"
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
    findText() {
      const result = this.$refs.pdfViewer.ej2Instances.textSearch.findText(['adobe', 'pdf'], false, 7);
      console.log(result);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## Find text with findTextAsync

The [`findTextAsync`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textsearch#findtextasync) method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

### Find text with findTextAsync in Vue PDF Viewer

The [`findTextAsync`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textsearch#findtextasync) method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use [`findTextAsync`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textsearch#findtextasync):

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div style="height: 100vh">
    <button @click="findText">Find Text</button>
    <button @click="findTexts">Find Texts</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: calc(100% - 40px)"
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
    async findText() {
      const result = await this.$refs.pdfViewer.ej2Instances.textSearch.findTextAsync('pdf', false);
      console.log(result);
    },
    async findTexts() {
      const result = await this.$refs.pdfViewer.ej2Instances.textSearch.findTextAsync(['pdf', 'adobe'], false);
      console.log(result);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Parameters

**text (string | string[]):** The text or array of texts to search for in the document.

**matchCase (boolean):** Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.

**pageIndex (optional, number):** Zero-based page index to search. If omitted, searches all pages.

N> `pageIndex` is zero-based; specify `0` for the first page. Omit this parameter to search the entire document.

### Example workflow

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See Also

- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)
