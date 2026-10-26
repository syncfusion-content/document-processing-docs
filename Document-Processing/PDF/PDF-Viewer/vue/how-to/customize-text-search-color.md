---
layout: post
title: How to Customize the Text Search Color in Vue PDF Viewer | Syncfusion
description: Customize the highlight color used for text search matches in the Vue PDF Viewer to match your application design.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize the Text Search Color in Vue PDF Viewer

Change the text search colors using the `textSearchColorSettings` properties. Set `searchColor` for matched text and `searchHighlightColor` for the active result. Both accept hexadecimal color values.

```ts
const viewer = this.$refs.viewer.ej2Instances;
viewer.textSearchColorSettings.searchColor = '#FF0000';
```

The above sets the match color to red. Use any valid hex color.

```ts
const viewer = this.$refs.viewer.ej2Instances;
viewer.textSearchColorSettings.searchHighlightColor = '#0000FF';
```

The above sets the active result highlight to blue.

- [searchColor](https://ej2.syncfusion.com/documentation/api/pdfviewer/textsearchcolorsettings#searchcolor)
- [searchHighlightColor](https://ej2.syncfusion.com/documentation/api/pdfviewer/textsearchcolorsettings#searchhighlightcolor)

The following example adds buttons to control the search flow:

```html
<template>
  <div>
    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :enableTextSearch="true">
    </ejs-pdfviewer>

    <button @click="search">SearchText</button>
    <button @click="searchNext">SearchNext</button>
    <button @click="searchPrevious">SearchPrevious</button>
    <button @click="cancelSearch">CancelSearch</button>
  </div>
</template>
```

```ts
import { PdfViewerComponent } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'TextSearchColors',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      viewerInstance: null
    };
  },
  mounted() {
    this.viewerInstance = this.$refs.viewer.ej2Instances;
    this.viewerInstance.enableTextSearch = true;
    // Customize the match color
    this.viewerInstance.textSearchColorSettings.searchColor = '#FF0000';
    // Customize the active result highlight color
    this.viewerInstance.textSearchColorSettings.searchHighlightColor = '#0000FF';
  },
  methods: {
    search() {
      this.viewerInstance.textSearchModule.searchText('pdf', false);
    },
    searchNext() {
      this.viewerInstance.textSearchModule.searchNext();
    },
    searchPrevious() {
      this.viewerInstance.textSearchModule.searchPrevious();
    },
    cancelSearch() {
      this.viewerInstance.textSearchModule.cancelTextSearch();
    }
  }
};
```

