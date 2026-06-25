---
layout: post
title: Text selection API and events in Vue PDF Viewer | Syncfusion
description: Reference documentation for text selection properties, methods, and events in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---

# Text selection API and events in Vue PDF Viewer

This document provides the reference details for text selection APIs and events in the Syncfusion Vue PDF Viewer. It includes the available configuration property, programmatic methods, and event callbacks that allow applications to react to selection behavior.

## Methods

### selectTextRegion

Programmatically selects text within a specified page and bounds.

**Method signature:**

```ts
selectTextRegion(pageNumber: number, bounds: IRectangle[]): void
```

**Parameters:**

- pageNumber: number indicating the target page (1 based indexing)
- bounds: `IRectangle` array defining the selection region

**Example:**

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <button @click="selectText">Select Text</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl">
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
    selectText() {
      if (this.$refs.pdfviewer) {
        this.$refs.pdfviewer.ej2Instances.textSelection.selectTextRegion(3, [{
          "left": 121.07501220703125,
          "right": 146.43399047851562,
          "top": 414.9624938964844,
          "bottom": 430.1625061035156,
          "width": 25.358978271484375,
          "height": 15.20001220703125
        }]);
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

### copyText

Copies the currently selected text to the clipboard.

**Method signature:**

```ts
copyText(): void
```

**Example:**

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <button @click="copySelectedText">Copy Text</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl">
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
    copySelectedText() {
      if (this.$refs.pdfviewer) {
        this.$refs.pdfviewer.ej2Instances.textSelection.copyText();
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Events

### textSelectionStart

Triggered when the user begins selecting text. The [textSelectionStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#textselectionstart) event fires when a user begins selecting text. Use it to track selection initiation, disable conflicting UI controls, or log analytics about user interaction patterns.

Event arguments (`TextSelectionStartEventArgs`):
- `pageNumber`: Page where the selection started (1-based indexing)
- `bounds`: Bounding rectangle of the initial selection point
- `selectionBehavior`: Indicates whether the selection is new or continuing from a previous selection
- `name`: Event name identifier

**Example:**

{% tabs %}
{% highlight html tabtitle="App.vue" %}

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
      console.log('Selection started on page: ' + args.pageNumber);
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

### textSelectionEnd

Triggered when the selection operation completes. The [textSelectionEnd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#textselectionend) event triggers after the user completes a text selection. Use it to capture the selected text content, enable context-sensitive options, or send selection data to your application backend for processing.

Event arguments (`TextSelectionEndEventArgs`):
- `pageNumber`: Page where the selection ended (1-based indexing)
- `bounds`: Bounding rectangles defining the geometric region of the selected text
- `selectedText`: The full text extracted from the selection range
- `isSelectionCopied`: Boolean indicating whether the user copied the selection to clipboard
- `name`: Event name identifier

**Example:**

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <div v-if="selectedText" class="selection-display">
      <p><strong>Selected Text:</strong> {{ selectedText }}</p>
    </div>
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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      selectedText: ''
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
      this.selectedText = args.selectedText;
      console.log('Selected text: ' + args.selectedText);
      console.log('Text copied to clipboard: ' + args.isSelectionCopied);
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Toggle text selection](./toggle-text-selection)
- [Vue PDF Viewer events](../events)
