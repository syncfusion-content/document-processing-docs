---
layout: post
title: Custom Toolbar in Vue PDF Viewer Component | Syncfusion
description: Learn here all about creating a custom toolbar in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar in Vue PDF Viewer

The PDF Viewer provides APIs for user interaction options available in its built-in toolbar. Using these, you can create your own custom user interface for toolbar actions at the application level by hiding the default toolbar.

Follow these steps to create a custom toolbar for the PDF Viewer:

**Step 1: Create a simple PDF Viewer sample.**

Follow the steps provided in the getting started guide to create a basic PDF Viewer sample:
- Vue Getting Started: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started

**Step 2: Add template markup for the custom toolbars.**

Add toolbar components and the PDF Viewer component to your Vue template. One toolbar handles primary actions, and another handles magnification actions.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div>
    <ejs-toolbar id="customToolbar" ref="toolbar">
      <e-items>
        <e-item prefixIcon='e-pv-open-document-icon' tooltipText='Open' :click="openClicked"></e-item>
        <e-item prefixIcon='e-pv-previous-page-navigation-icon' id="previousPage" tooltipText='Previous Page' align='Center' :click="previousClicked"></e-item>
        <e-item prefixIcon='e-pv-next-page-navigation-icon' id="nextPage" tooltipText='Next Page' align='Center' :click="nextClicked"></e-item>
        <e-item :template='pageNoTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item :template='pageTextTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item prefixIcon='e-pv-print-document-icon' tooltipText='Print' align='Right' :click="printClicked"></e-item>
        <e-item prefixIcon='e-pv-download-document-icon' tooltipText='Download' align='Right' :click="downloadClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <ejs-toolbar id="magnificationToolbar">
      <e-items>
        <e-item prefixIcon='e-pv-fit-page-icon' id="fitPage" tooltipText='Fit to page' :click="pageFitClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-in-icon' id="zoomIn" tooltipText='Zoom in' :click="zoomInClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-out-icon' id="zoomOut" tooltipText='Zoom out' :click="zoomOutClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <input type ="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;"></input>

    <div class="control-section">
      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :pageChange="pageChange"
        :documentLoad="documentLoad"
        :documentPath="documentPath"
        :enableToolbar="enableToolbar">
      </ejs-pdfviewer>
    </div>
  </div>
</template>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div>
    <ejs-toolbar id="customToolbar" ref="toolbar">
      <e-items>
        <e-item prefixIcon='e-pv-open-document-icon' tooltipText='Open' :click="openClicked"></e-item>
        <e-item prefixIcon='e-pv-previous-page-navigation-icon' id="previousPage" tooltipText='Previous Page' align='Center' :click="previousClicked"></e-item>
        <e-item prefixIcon='e-pv-next-page-navigation-icon' id="nextPage" tooltipText='Next Page' align='Center' :click="nextClicked"></e-item>
        <e-item :template='pageNoTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item :template='pageTextTemplate' tooltipText='Page Number' align='Center'></e-item>
        <e-item prefixIcon='e-pv-print-document-icon' tooltipText='Print' align='Right' :click="printClicked"></e-item>
        <e-item prefixIcon='e-pv-download-document-icon' tooltipText='Download' align='Right' :click="downloadClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <ejs-toolbar id="magnificationToolbar">
      <e-items>
        <e-item prefixIcon='e-pv-fit-page-icon' id="fitPage" tooltipText='Fit to page' :click="pageFitClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-in-icon' id="zoomIn" tooltipText='Zoom in' :click="zoomInClicked"></e-item>
        <e-item prefixIcon='e-pv-zoom-out-icon' id="zoomOut" tooltipText='Zoom out' :click="zoomOutClicked"></e-item>
      </e-items>
    </ejs-toolbar>

    <input type ="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;">

    <div class="control-section">
      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :pageChange="pageChange"
        :documentLoad="documentLoad"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :enableToolbar="enableToolbar">
      </ejs-pdfviewer>
    </div>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

**Step 3: Import and register modules.**

```ts
import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(CalendarPlugin);
Vue.use(PdfViewerPlugin);
Vue.use(ToolbarPlugin);
```

**Step 4: Hide the built-in toolbar.**

Use enableToolbar to hide the built-in toolbar and rely on the custom toolbar.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

export default Vue.extend({
  data: function () {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
      enableToolbar: false,
      pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
      pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
    }
  }
});

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

export default Vue.extend({
  data: function () {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
      enableToolbar: false,
      pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
      pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
    }
  }
});

{% endhighlight %}
{% endtabs %}

**Step 5: Styles for the custom toolbars.**

```css
<style>
  #pdfviewer { height: 640px; }
  .control-section { padding-top: 0px !important; }
  #magnificationToolbar {
    background: transparent;
    height: auto;
    min-height: 56px;
    width: auto;
    border: none;
    position: absolute;
    z-index: 900;
    top: calc(100% - 110px);
    left: calc(100% - 120px);
    transform: rotate(90deg);
  }
  div#magnificationToolbar.e-toolbar .e-toolbar-items { background: transparent; padding: 2px 3px 2px 2px; }
  #magnificationToolbar.e-toolbar .e-tbar-btn { border-radius: 50%; min-height: 30px; min-width: 30px; border: 1px solid #c8c8c8; }
  #customToolbar { top: 0px; z-index: 900; }
  .e-bookmark-popup { height: 300px; max-width: 300px; }
  .e-text-search-popup { height: 104px; max-width: 348px; }
  .e-custom-search-input { width: 234px; }
  .e-text-search-popup .e-footer-content, .e-bookmark-popup .e-footer-content { padding: 0; height: 0; }
  .search-button, .search-button:disabled, .search-button:focus, .search-button:hover { background: transparent; box-shadow: none; }
  #popup .e-dlg-content { padding-left: 0; padding-bottom: 0; }
  .e-pv-bookmarks { min-width: 234px; }
  .e-pv-current-page-number { width: 46px; height: 28px; text-align: center; }
  .material .e-pv-current-page-number { border-width: 1px; }
  .e-icons { font-family: "e-icons"; font-style: normal; font-variant: normal; font-weight: normal; line-height: 1; text-transform: none; }
  .e-pv-icon::before { font-family: 'e-icons'; }
  .e-pv-open-document-icon::before  { content: '\e91c'; }
  .e-pv-download-document-icon::before { content: '\e914'; }
  .e-pv-print-document-icon::before { content: '\e917'; }
  .e-pv-previous-page-navigation-icon::before { content: '\e910'; }
  .e-pv-next-page-navigation-icon::before { content: '\e911'; }
  .e-pv-zoom-out-icon::before { content: '\e912'; }
  .e-pv-zoom-in-icon::before { content: '\e91d'; }
  .e-pv-fit-page-icon::before { content: '\e91b'; }
  .e-btn-icon.e-pv-zoom-out-icon.e-icons { transform: rotate(90deg); }

  @font-face {
    font-family: "e-icons";
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj8wS0QAAAEoAAAAVmNtYXDSeNLMAAABuAAAAFZnbHlmok0NtwAAAjAAAAPkaGVhZBN3pEcAAADQAAAANmhoZWEHrwNhAAAArAAAACRobXR4NsgAAAAAAYAAAAA4bG9jYQdkBmQAAAIQAAAAHm1heHABHAAwAAABCAAAACBuYW1lD0oZXgAABhQAAALBcG9zdFG4mE4AAAjYAAAAyAABAAADUv9qAFoEAAAA/+gEAAABAAAAAAAAAAAAAAAAAAAADgABAAAAAQAAxsly1F8PPPUACwPoAAAAANgsr7EAAAAA2CyvsQAAAAAEAAQAAAAACAACAAAAAAAAAAEAAAAOACQABAAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPqAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6RDpHQNS/2oAWgQAAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAEIAAAAGAAQAAQAC6RLpHf//AADpEOkU//8AAAAAAAEABgAKAAAAAQACAAMABQAGAAcACAAJAAoACwAMAA0ABAAAAAAAAAAUACoAZACkAL4A7gEuAVwBcAGEAZ4ByAHyAAAAAQAAAAAD6gMuAAUAAAkBBwkBJwIAAet0/on+iXQDL/4VcwF3/olzAAEAAAAAA+oDLgAFAAATCQEXCQGJAXcBd3T+Ff4VAy/+iQF3c/4VAesAAAAAAwAAAAAEAAQAAAMADwAbAAABITUhBQ4BBy4BJz4BNx4BBRYAFzYANyYAJwYAAQACAP4AAoAE2aOj2QQE2aOj2fyEBgEh2dkBIQYG/t/Z2f7fAcCAQKPZBATZo6PZBATZo9n+3wYGASHZ2QEhBgb+3wAAAAADAAAAAAQABAAACwAXACMAAAEjFTMVMzUzNSM1IwEOAQcuASc+ATceAQUWABc2ADcmACcGAAHAwMCAwMCAAcAE2aOj2QQE2aOj2fyEBgEh2dkBIQYG/t/Z2f7fAkCAwMCAwP8Ao9kEBNmjo9kEBNmj2f7fBgYBIdnZASEGBv7fAAIAAAAAAwAEAAADAAoAADEhNSEBIQkBIREhAwD9AAEA/wABgAGA/wD/AIACAP6AAYABgAACAAAAAANABAAADgAaAAABMh4CFRElBRE0Nz4BMycGFRElBRE0JiMhIgKdCwwHBf7g/uAJBAwKdC8BoAGgX0T+BkQDgAYGCwr9YHZ2AqAOCQQGUS9D/KGrqwNfRlsAAAACAAAAAAP/BAAACwAjAAABDgEHLgEnPgE3HgEFHgEXMjY/ARcVATcBIyc3PgE1LgEnDgECgAOQbW2QAwOQbW2Q/YME2aNGfDIDJAEEYf78MyMCKi4E2aOj2QKAbZADA5BtbZADA5Bto9kELioDJDP+/GEBBCQDMnxGo9kEBNkAAA==) format('truetype');
  }
</style>
```

> The icons are embedded in the font file used in the above code snippet.

**Step 6: Add the script logic for user interactions.**

Hook up toolbar button clicks and wire up PDF Viewer APIs.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(PdfViewerPlugin);
Vue.use(ToolbarPlugin);
var toolbar;
var viewer;
var currentPageBox;

function updatePageNavigation() {
  if (viewer.currentPageNumber === 1) {
    toolbar.enableItems(document.getElementById('previousPage'), false);
    toolbar.enableItems(document.getElementById('nextPage'), true);
  } else if (viewer.currentPageNumber === viewer.pageCount) {
    toolbar.enableItems(document.getElementById('previousPage'), true);
    toolbar.enableItems(document.getElementById('nextPage'), false);
  } else {
    toolbar.enableItems(document.getElementById('previousPage'), true);
    toolbar.enableItems(document.getElementById('nextPage'), true);
  }
}

function onCurrentPageBoxKeypress(event) {
  if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
    event.preventDefault();
    return false;
  } else {
    var currentPageNumber = parseInt(currentPageBox.value);
    if (event.which === 13) {
      if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
        viewer.navigation.goToPage(currentPageNumber);
      } else {
        currentPageBox.value = viewer.currentPageNumber.toString();
      }
    }
    return true;
  }
}

function onCurrentPageBoxClicked() { currentPageBox.select(); }

function readFile(args) {
  let upoadedFiles = args.target.files;
  if (args.target.files[0] !== null) {
    let uploadedFile = upoadedFiles[0];
    if (uploadedFile) {
      let reader = new FileReader();
      let fileName = upoadedFiles[0].name;
      reader.readAsDataURL(uploadedFile);
      reader.onload = function (e) {
        let uploadedFileUrl = e.currentTarget.result;
        viewer.load(uploadedFileUrl, null);
        viewer.fileName = fileName;
      };
    }
  }
};

export default Vue.extend({
  data: function () {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
      enableToolbar: false,
      pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
      pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
    }
  },
  PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
               ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ],
  methods: {
    openClicked: function () { document.getElementById('fileUpload').click(); },
    previousClicked: function () { viewer.navigation.goToPreviousPage(); },
    nextClicked: function () { viewer.navigation.goToNextPage(); },
    printClicked: function () { viewer.print.print(); },
    downloadClicked: function () { viewer.download(); },
    pageFitClicked: function () { viewer.magnification.fitToPage(); },
    zoomInClicked: function () { viewer.magnification.zoomIn(); },
    zoomOutClicked: function () { viewer.magnification.zoomOut(); },
    pageChange: function () {
      currentPageBox = document.getElementById('currentPage');
      currentPageBox.value = viewer.currentPageNumber.toString();
      updatePageNavigation();
    },
    documentLoad: function () {
      viewer = this.$refs.pdfviewer.ej2Instances;
      toolbar = this.$refs.toolbar.ej2Instances;
      currentPageBox = document.getElementById('currentPage');
      currentPageBox.value = '1';
      document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
      currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
      currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
      document.getElementById('fileUpload').addEventListener('change', readFile, false);
      updatePageNavigation();
    }
  }
});

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(PdfViewerPlugin);
Vue.use(ToolbarPlugin);
var toolbar;
var viewer;
var currentPageBox;

function updatePageNavigation() {
  if (viewer.currentPageNumber === 1) {
    toolbar.enableItems(document.getElementById('previousPage'), false);
    toolbar.enableItems(document.getElementById('nextPage'), true);
  } else if (viewer.currentPageNumber === viewer.pageCount) {
    toolbar.enableItems(document.getElementById('previousPage'), true);
    toolbar.enableItems(document.getElementById('nextPage'), false);
  } else {
    toolbar.enableItems(document.getElementById('previousPage'), true);
    toolbar.enableItems(document.getElementById('nextPage'), true);
  }
}

function onCurrentPageBoxKeypress(event) {
  if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
    event.preventDefault();
    return false;
  } else {
    var currentPageNumber = parseInt(currentPageBox.value);
    if (event.which === 13) {
      if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
        viewer.navigation.goToPage(currentPageNumber);
      } else {
        currentPageBox.value = viewer.currentPageNumber.toString();
      }
    }
    return true;
  }
}

function onCurrentPageBoxClicked() { currentPageBox.select(); }

function readFile(args) {
  let upoadedFiles = args.target.files;
  if (args.target.files[0] !== null) {
    let uploadedFile = upoadedFiles[0];
    if (uploadedFile) {
      let reader = new FileReader();
      let fileName = upoadedFiles[0].name;
      reader.readAsDataURL(uploadedFile);
      reader.onload = function (e) {
        let uploadedFileUrl = e.currentTarget.result;
        viewer.load(uploadedFileUrl, null);
        viewer.fileName = fileName;
      };
    }
  }
};

export default Vue.extend({
  data: function () {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
      enableToolbar: false,
      pageNoTemplate: '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>',
      pageTextTemplate: '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>'
    }
  },
  PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
               ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ],
  methods: {
    openClicked: function () { document.getElementById('fileUpload').click(); },
    previousClicked: function () { viewer.navigation.goToPreviousPage(); },
    nextClicked: function () { viewer.navigation.goToNextPage(); },
    printClicked: function () { viewer.print.print(); },
    downloadClicked: function () { viewer.download(); },
    pageFitClicked: function () { viewer.magnification.fitToPage(); },
    zoomInClicked: function () { viewer.magnification.zoomIn(); },
    zoomOutClicked: function () { viewer.magnification.zoomOut(); },
    pageChange: function () {
      currentPageBox = document.getElementById('currentPage');
      currentPageBox.value = viewer.currentPageNumber.toString();
      updatePageNavigation();
    },
    documentLoad: function () {
      viewer = this.$refs.pdfviewer.ej2Instances;
      toolbar = this.$refs.toolbar.ej2Instances;
      currentPageBox = document.getElementById('currentPage');
      currentPageBox.value = '1';
      document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
      currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
      currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
      document.getElementById('fileUpload').addEventListener('change', readFile, false);
      updatePageNavigation();
    }
  }
});

{% endhighlight %}
{% endtabs %}

Sample:
[https://document.syncfusion.com/demos/pdf-viewer/vue/#/tailwind3/pdfviewer/custom-toolbar.html](https://document.syncfusion.com/demos/pdf-viewer/vue/#/tailwind3/pdfviewer/custom-toolbar.html)

## See also

* [Primary toolbar customization](./toolbar-customization/primary-toolbar-customization)
* [Custom toolbar](./toolbar-customization/custom-toolbar)
* [Annotation toolbar customization](./toolbar-customization/annotation-toolbar-customization)
* [Form designer toolbar customization](./toolbar-customization/form-designer-toolbar-customization)
* [Mobile toolbar](./toolbar-customization/mobile-toolbar)
* [Toolbar customization](./how-to/toolbar-customization)
* [Feature Modules](./feature-module)
