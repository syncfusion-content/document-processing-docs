---
layout: post
title: Events in Vue PDF Viewer | Syncfusion
description: Comprehensive list of events in the Syncfusion Vue PDF Viewer with descriptions, event arguments, and usage examples to integrate custom logic.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue PDF Viewer

The PDF Viewer component triggers events for creation, page navigation, document life cycle, context menu interactions, comments, bookmarks, download and export, hyperlinks, annotation import/export, custom keyboard commands, printing, signatures, text search, and text selection. Use these events to integrate custom logic into application workflows.

The following table lists commonly used events supported by the PDF Viewer component:

| Event | Description |
| ----- | ----------- |
| [`bookmarkClick`](#bookmarkclick) | Triggers when a bookmark item is clicked in the bookmark panel. |
| [`buttonFieldClick`](#buttonfieldclick) | Triggers when a button form field is clicked. |
| [`commentAdd`](#commentadd) | Triggers when a comment is added to the comment panel. |
| [`commentDelete`](#commentdelete) | Triggers when a comment is deleted from the comment panel. |
| [`commentEdit`](#commentedit) | Triggers when a comment is edited in the comment panel. |
| [`commentSelect`](#commentselect) | Triggers when a comment is selected in the comment panel. |
| [`commentStatusChanged`](#commentstatuschanged) | Triggers when a comment’s status changes in the comment panel. |
| [`created`](#created) | Triggers during the creation of the PDF Viewer component. |
| [`customContextMenuBeforeOpen`](#customcontextmenubeforeopen) | Fires before the custom context menu opens. |
| [`customContextMenuSelect`](#customcontextmenuselect) | Fires when a custom context menu item is selected. |
| [`documentLoad`](#documentload) | Triggers while loading a document into the PDF Viewer. |
| [`documentLoadFailed`](#documentloadfailed) | Triggers when document loading fails. |
| [`documentUnload`](#documentunload) | Triggers when the document is closed. |
| [`downloadEnd`](#downloadend) | Triggers after a document is downloaded. |
| [`downloadStart`](#downloadstart) | Triggers when the download action is initiated. |
| [`exportFailed`](#exportfailed) | Triggers when exporting annotations fails. |
| [`exportStart`](#exportstart) | Triggers when exporting annotations starts. |
| [`exportSuccess`](#exportsuccess) | Triggers when annotations are exported successfully. |
| [`extractTextCompleted`](#extracttextcompleted) | Triggers when text extraction is completed. |
| [`hyperlinkClick`](#hyperlinkclick) | Triggers when a hyperlink is clicked. |
| [`hyperlinkMouseOver`](#hyperlinkmouseover) | Triggers when hovering over a hyperlink. |
| [`importFailed`](#importfailed) | Triggers when importing annotations fails. |
| [`importStart`](#importstart) | Triggers when importing annotations starts. |
| [`importSuccess`](#importsuccess) | Triggers when annotations are imported successfully. |
| [`keyboardCustomCommands`](#keyboardcustomcommands) | Triggers when customized keyboard command keys are pressed. |
| [`moveSignature`](#movesignature) | Triggers when a signature is moved across the page. |
| [`pageChange`](#pagechange) | Triggers when the current page number changes. |
| [`pageClick`](#pageclick) | Triggers when a mouse click occurs on a page. |
| [`pageMouseover`](#pagemouseover) | Triggers when moving the mouse over a page. |
| [`pageOrganizerSaveAs`](#pageorganizersaveas) | Triggers when a `save as` action is performed in the page organizer. |
| [`pageRenderComplete`](#pagerendercomplete) | Triggers after a page finishes rendering. |
| [`pageRenderInitiate`](#pagerenderinitiate) | Triggers when page rendering begins. |
| [`printEnd`](#printend) | Triggers when a print action is completed. |
| [`printStart`](#printstart) | Triggers when a print action is initiated. |
| [`removeSignature`](#removesignature) | Triggers when a signature is removed. |
| [`resizeSignature`](#resizesignature) | Triggers when a signature is resized. |
| [`resourcesLoaded`](#resourcesloaded) | Triggers after PDFium resources are loaded. |
| [`signaturePropertiesChange`](#signaturepropertieschange) | Triggers when signature properties are changed. |
| [`signatureSelect`](#signatureselect) | Triggers when a signature is selected. |
| [`signatureUnselect`](#signatureunselect) | Triggers when a signature is unselected. |
| [`textSearchComplete`](#textsearchcomplete) | Triggers when a text search is completed. |
| [`textSearchHighlight`](#textsearchhighlight) | Triggers when the searched text is highlighted. |
| [`textSearchStart`](#textsearchstart) | Triggers when a text search is initiated. |
| [`textSelectionEnd`](#textselectionend) | Triggers when text selection is complete. |
| [`textSelectionStart`](#textselectionstart) | Triggers when text selection is initiated. |
| [`thumbnailClick`](#thumbnailclick) | Triggers when a thumbnail is clicked. |
| [`toolbarClick`](#toolbarclick) | Triggers when a toolbar item is clicked. |
| [`validateFormFields`](#validateformfields) | Triggers when form field validation fails. |
| [`zoomChange`](#zoomchange) | Triggers when the magnification value changes. |

Note: For annotation and signature events, see the dedicated Annotations Events topic.

## bookmarkClick

The [bookmarkClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#bookmarkclick) event triggers when a bookmark item is clicked in the bookmark panel.

- Event arguments: [BookmarkClickEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/bookmarkClickEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :bookmarkClick="bookmarkClick"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    bookmarkClick: function (args) {
      console.log(`Bookmark clicked: ${args.name}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## toolbarClick

The [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#toolbarclick) event triggers when a toolbar item is clicked. Use it to handle actions based on the clicked item's id or name.

- Event arguments: `ClickEventArgs`.

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarClick="toolbarClick"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    toolbarClick: function (args) {
      console.log(`Toolbar item clicked: ${args.name}`);
    },
  },
};
</script>
<style>
/* Add any necessary styles here */
</style>
```

## validateFormFields

The [validateFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#validateformfields) event triggers when form field validation fails, typically before a download or submit action proceeds. Use this event to inspect which required fields are empty and show custom messages or block application logic if needed.

- Event arguments: [ValidateFormFieldsArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/validateFormFieldsArgs/)
  - name: Event name
  - documentName: Current document name
  - formField: The last interacted field’s data (if applicable)
  - nonFillableFields: Array detailing required/invalid fields

When it triggers
- Add a form field and mark it Required (UI: right‑click field > Properties > Required).
- Leave the field empty and click Download. The event fires and provides the list of fields that failed validation.

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :validateFormFields="validateFormFields"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    validateFormFields: function (args) {
      console.log('form field event name:', args.name);
      console.log('form field document name:', args.documentName);
      console.log('form field data:', args.formField);
      console.log('non fillable form field details:', args.nonFillableFields);
    },
  },
};
</script>

```

Tip
- To require a field programmatically, set isRequired: true when creating or editing the field via Form Designer APIs.

## zoomChange

The [zoomChange](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#zoomchange) event triggers when the magnification value changes.

- Event arguments: [ZoomChangeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/zoomChangeEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :zoomChange="zoomChange"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    zoomChange: function (args) {
      console.log(`Zoom changed to: ${args.zoomValue}%`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## buttonFieldClick

The [buttonFieldClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#buttonfieldclick) event triggers when a button form field is clicked.

- Event arguments: [ButtonFieldClickEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/buttonFieldClickEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :buttonFieldClick="buttonFieldClick"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    buttonFieldClick: function (args) {
      console.log(`Button field clicked. Name: ${args.name}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## commentAdd

The [commentAdd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#commentadd) event triggers when a comment is added in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/commentEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :commentAdd="commentAdd"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    commentAdd: function (args) {
      console.log(`Comment added. Id: ${args.id}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## commentDelete

The [commentDelete](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#commentdelete) event triggers when a comment is deleted in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/commentEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :commentDelete="commentDelete"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
   commentDelete: function (args) {
      console.log(`Comment deleted. Id: ${args.id}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## commentEdit

The [commentEdit](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#commentedit) event triggers when a comment is edited in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/commentEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :commentEdit="commentEdit"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
     commentEdit: function (args) {
      console.log(`Comment edited. Id: ${args.id}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## commentSelect

The [commentSelect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#commentselect) event triggers when a comment is selected in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/commentEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :commentSelect="commentSelect"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
   commentSelect: function (args) {
      console.log(`Comment selected. Id: ${args.id}`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## commentStatusChanged

The [commentStatusChanged](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#commentstatuschanged) event triggers when a comment status is changed in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/commentEventArgs/).

Example:

```html
<template>
    <div>  
            <ejs-pdfviewer 
                id="pdfviewer" 
                ref="pdfviewer" 
                :documentPath="documentPath"
                :resourceUrl="resourceUrl"
                :commentStatusChanged="commentStatusChanged">
            </ejs-pdfviewer>
    </div>
</template>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";


export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'}
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {
       commentStatusChanged: function (args) {
      console.log(`Comment status changed. Id: ${args.id}, Status: ${args.status}`);
    },
      },
};
</script>


<style>
/* Add any necessary styles here */
</style>
```

## created

The [created](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#created) event is triggered during the creation of the PDF Viewer component.

- Event arguments: `void`.

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :created="created"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    created: function () {
      console.log('PDF Viewer created');
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## customContextMenuBeforeOpen

The [customContextMenuBeforeOpen](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#customcontextmenubeforeopen) event fires just before the context menu is shown. Use it to show or hide items based on the current state (for example, only show search items when text is selected).

- Event arguments: [CustomContextMenuBeforeOpenEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/customContextMenuBeforeOpenEventArgs/)
  - name: Event name
  - ids: Array of menu item ids that will be shown; remove ids to hide items for this open

Example:

```html

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :customContextMenuBeforeOpen="customContextMenuBeforeOpen"
      :documentLoad="documentLoad"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
      menuItems: [
        {
          text: 'SEARCH_ON_WEB',
          id: 'web_search',
          iconCss: 'e-icons e-search',
          items: [
            {
              text: 'SEARCH_IN_GOOGLE_IMAGE',
              id: 'web_search_images',
            },
            {
              text: 'SEARCH_IN_WIKIPEDIA',
              id: 'web_search_wikipedia',
            },
            {
              text: 'SEARCH_IN_YOUTUBE',
              id: 'web_search_youtube',
            },
            {
              text: 'SEARCH_GOOGLE',
              id: 'web_search_google',
            },
          ],
        },
        {
          id: 'web_search_separator',
          separator: true,
        },
      ],
    };
  },
  methods: {
    customContextMenuBeforeOpen: function (args) {
      console.log(`Before open context menu at page ${args.name}`);
    },
    documentLoad: function (args) {
      this.$refs.pdfViewer.addCustomMenu(this.menuItems, false, false);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## customContextMenuSelect

The [customContextMenuSelect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#customcontextmenuselect) event fires when a custom menu item is clicked. Use it to branch logic by the clicked item's id.

- Event arguments: [CustomContextMenuSelectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/customContextMenuSelectEventArgs/).

- name: Event name
- id: The id of the clicked menu item

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :customContextMenuSelect="customContextMenuSelect"
      :documentLoad="documentLoad"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
      menuItems: [
        {
          text: 'SEARCH_ON_WEB',
          id: 'web_search',
          iconCss: 'e-icons e-search',
          items: [
            {
              text: 'SEARCH_IN_GOOGLE_IMAGE',
              id: 'web_search_images',
            },
            {
              text: 'SEARCH_IN_WIKIPEDIA',
              id: 'web_search_wikipedia',
            },
            {
              text: 'SEARCH_IN_YOUTUBE',
              id: 'web_search_youtube',
            },
            {
              text: 'SEARCH_GOOGLE',
              id: 'web_search_google',
            },
          ],
        },
        {
          id: 'web_search_separator',
          separator: true,
        },
      ],
    };
  },
  methods: {
    customContextMenuSelect: function (args) {
      console.log(`Context menu item selected: ${args.name}`);
    },
    documentLoad: function (args) {
      this.$refs.pdfViewer.addCustomMenu(this.menuItems, false, false);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## documentLoad

The [documentLoad](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#documentload) event occurs after a document is successfully loaded and parsed.

- Event arguments: [LoadEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/loadEventArgs/).

Example:

```html
<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :documentLoad="documentLoad"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    documentLoad: function (args) {
      console.log(`Document loaded: page count = ${args.pageData}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## documentLoadFailed

The [documentLoadFailed](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#documentloadfailed) event triggers when loading a document fails.

- Event arguments: [LoadFailedEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/loadFailedEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :documentLoadFailed="documentLoadFailed"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    documentLoadFailed: function (args) {
      console.log(`Load failed. Error: ${args.documentName}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## documentUnload

The [documentUnload](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#documentunload) event triggers when closing the current document.

- Event arguments: [UnloadEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/unloadEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :documentUnload="documentUnload"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    documentUnload: function () {
      console.log('Document unloaded');
    },
  },
};
</script>


<style>
/* Add any necessary styles here */
</style>
```

## downloadEnd

The [downloadEnd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#downloadend) event triggers after a document download completes.

- Event arguments: [DownloadEndEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/downloadEndEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :downloadEnd="downloadEnd"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
   downloadEnd: function (args) {
      console.log(`Download finished. File name: ${args.fileName}`);
    },
  },
};
</script>


<style>
/* Add any necessary styles here */
</style>
```

## downloadStart

The [downloadStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#downloadstart) event triggers when the download operation is initiated.

- Event arguments: [DownloadStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/downloadStartEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :downloadStart="downloadStart"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    downloadStart: function () {
      console.log('Download started');
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## exportFailed

The [exportFailed](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#exportfailed) event triggers when exporting annotations fails.

- Event arguments: [ExportFailureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/exportFailureEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :exportFailed="exportFailed"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    exportFailed: function (args) {
      console.log(`Export failed: ${args.name}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## exportStart

The [exportStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#exportstart) event triggers when exporting annotations starts.

- Event arguments: [ExportStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/exportStartEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :exportStart="exportStart"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    exportStart: function () {
      console.log('Export started');
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## exportSuccess

The [exportSuccess](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#exportsuccess) event triggers when annotations are exported successfully.

- Event arguments: [ExportSuccessEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/exportSuccessEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :exportSuccess="exportSuccess"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    exportSuccess: function () {
      console.log('Export success');
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## extractTextCompleted

The [extractTextCompleted](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#extracttextcompleted) event triggers when text extraction completes.

- Event arguments: [ExtractTextCompletedEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/extractTextCompletedEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :extractTextCompleted="extractTextCompleted"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    extractTextCompleted: function (args) {
      console.log(`Extracted text length: ${(args.documentTextCollection || '').length}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## hyperlinkClick

The [hyperlinkClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#hyperlinkclick) event triggers when a hyperlink is clicked.

- Event arguments: [HyperlinkClickEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/hyperlinkClickEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :hyperlinkClick="hyperlinkClick"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    hyperlinkClick: function (args) {
      console.log(`Hyperlink clicked: ${args.hyperlink}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## hyperlinkMouseOver

The [hyperlinkMouseOver](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#hyperlinkmouseover) event triggers when hovering over a hyperlink.

- Event arguments: HyperlinkMouseOverArgs.

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :hyperlinkMouseOver="hyperlinkMouseOver"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    hyperlinkMouseOver: function (args) {
      console.log(`Hyperlink hover at page: ${args.name}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## importFailed

The [importFailed](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#importfailed) event triggers when importing annotations fails.

- Event arguments: [ImportFailureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/importFailureEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :importFailed="importFailed"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    importFailed: function (args) {
      console.log(`Import failed: ${args.name}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## importStart

The [importStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#importstart) event triggers when importing annotations starts.

- Event arguments: [ImportStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/importStartEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :importStart="importStart"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    importStart: function () {
      console.log('Import started');
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## importSuccess

The [importSuccess](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#importsuccess) event triggers when annotations are imported successfully.

- Event arguments: [ImportSuccessEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/importSuccessEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :importSuccess="importSuccess"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    importSuccess: function () {
      console.log('Import success');
    },
  },
};
</script>


<style>
/* Add any necessary styles here */
</style>
```

## keyboardCustomCommands

The [keyboardCustomCommands](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#keyboardcustomcommands) event triggers when customized keyboard command keys are pressed.

- Event arguments: [KeyboardCustomCommandsEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/keyboardCustomCommandsEventArgs/).

  - name: Event name
  - keyboardCommand: The command metadata raised by Command Manager
  
When it triggers
- After registering gestures in commandManager.keyboardCommand. For example, pressing Shift + Alt + G or Shift + Alt + H triggers the event. Use this to handle custom keyboard shortcuts.

Refer to [Keyboard interaction](./accessibility.md#keyboard-interaction) for details about adding and handling custom shortcut keys.
Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :commandManager="commandManager"
      :keyboardCustomCommands="keyboardCustomCommands"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
      commandManager: {
        keyboardCommand: [
          {
            name: 'customCopy',
            gesture: {
              pdfKeys: PdfKeys.G,
              modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt,
            },
          },
          {
            name: 'customPaste',
            gesture: {
              pdfKeys: PdfKeys.H,
              modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt,
            },
          },
          {
            name: 'customCut',
            gesture: {
              pdfKeys: PdfKeys.Z,
              modifierKeys: ModifierKeys.Control,
            },
          },
          {
            name: 'customSelectAll',
            gesture: {
              pdfKeys: PdfKeys.E,
              modifierKeys: ModifierKeys.Control,
            },
          },
        ],
      },  
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    keyboardCustomCommands: function (args) {
      console.log('Custom command triggered:', args);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## moveSignature

The [moveSignature](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#movesignature) event triggers when a signature is moved across the page.

- Event arguments: `MoveSignatureEventArgs`.

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :moveSignature="moveSignature"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    moveSignature: function (args) {
      console.log(`Signature moved on page ${args.id}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## pageChange

The [pageChange](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#pagechange) event triggers when the current page number changes (for example, via scrolling or navigation controls).

- Event arguments: [PageChangeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pageChangeEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageChange="pageChange"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    pageChange: function (args) {
      console.log(`Page changed from ${args.previousPageNumber} to ${args.currentPageNumber}`);
    },
  },
};
</script>


<style>
/* Add any necessary styles here */
</style>
```

## pageClick

The [pageClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#pageclick) event triggers when a mouse click occurs on a page.

- Event arguments: [PageClickEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pageClickEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageClick="pageClick"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    pageClick: function (args) {
      console.log(`Page ${args.pageNumber} clicked at (${args.x}, ${args.y})`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## pageMouseover

The [pageMouseover](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#pagemouseover) event triggers when the mouse moves over a page.

- Event arguments: PageMouseoverEventArgs.

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageMouseover="pageMouseover"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    pageMouseover: function (args) {
      console.log(`Mouse over page ${args.name}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## pageOrganizerSaveAs

The [pageOrganizerSaveAs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#pageorganizersaveas) event triggers when a Save As action is performed in the page organizer.

- Event arguments: `PageOrganizerSaveAsEventArgs`.

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageOrganizerSaveAs="pageOrganizerSaveAs"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    pageOrganizerSaveAs: function (args) {
      console.log(`Page organizer save triggered. File name: ${args.downloadDocument}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## pageRenderComplete

The [pageRenderComplete](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#pagerendercomplete) event triggers after a page finishes rendering.

- Event arguments: [PageRenderCompleteEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pageRenderCompleteEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageRenderComplete="pageRenderComplete"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    pageRenderComplete: function (args) {
      console.log(`Page ${args.data} rendering completed.`);
    },
  },
};
</script>


<style>
/* Add any necessary styles here */
</style>
```

## pageRenderInitiate

The [pageRenderInitiate](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#pagerenderinitiate) event triggers when page rendering begins.

- Event arguments: [PageRenderInitiateEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pageRenderInitiateEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageRenderInitiate="pageRenderInitiate"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    pageRenderInitiate: function (args) {
      console.log(`Page ${args.jsonData} rendering initiated.`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## printEnd

The [printEnd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#printend) event triggers when a print action completes.

- Event arguments: [PrintEndEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/printEndEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :printEnd="printEnd"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    printEnd: function () {
      console.log('Print action completed.');
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## printStart

The [printStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#printstart) event triggers when a print action is initiated.

- Event arguments: [PrintStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/printStartEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :printStart="printStart"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    printStart: function () {
      console.log('Print action initiated.');
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## removeSignature

The [removeSignature](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#removesignature) event triggers when a signature is removed.

- Event arguments: [RemoveSignatureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/removeSignatureEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :removeSignature="removeSignature"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    removeSignature: function (args) {
      console.log(`Signature removed from page ${args.bounds}`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#resizesignature) event triggers when a signature is resized.

- Event arguments: [ResizeSignatureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/resizeSignatureEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :resizeSignature="resizeSignature"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    resizeSignature: function (args) {
      console.log(`Signature resized on page ${args.currentPosition}`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## resourcesLoaded

The [resourcesLoaded](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#resourcesLoaded) event triggers after the viewer's required resources are loaded.

- Event arguments: `void`.

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :resourcesLoaded="resourcesLoaded"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    resourcesLoaded: function () {
      console.log('PDFium resources loaded.');
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#signaturepropertieschange) event triggers when signature properties change.

- Event arguments: [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs/).

Example:

```html

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :signaturePropertiesChange="signaturePropertiesChange"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    signaturePropertiesChange: function (args) {
      console.log(`Signature properties changed on page ${args.type}`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#signatureselect) event triggers when a signature is selected.

- Event arguments: [SignatureSelectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/signatureSelectEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :signatureSelect="signatureSelect"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    signatureSelect: function (args) {
      console.log(`Signature selected on page ${args.signature}`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#signatureunselect) event triggers when a signature is unselected.

- Event arguments: [SignatureUnselectEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/signatureUnselectEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :signatureUnselect="signatureUnselect"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    signatureUnselect: function (args) {
      console.log(`Signature unselected ${args.signature}`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textsearchcomplete) event triggers when a text search completes.

- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchCompleteEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :textSearchComplete="textSearchComplete"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    textSearchComplete: function () {
      console.log('Text search completed.');
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textsearchhighlight) event triggers when searched text is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchHighlightEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :textSearchHighlight="textSearchHighlight"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    textSearchHighlight: function (args) {
      console.log(`Search result ${args.bounds} highlighted.`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textsearchstart) event triggers when a text search is initiated.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearchStartEventArgs/).

Example:

```html

<template>
  <div>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :textSearchStart="textSearchStart"
    >
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
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data: function () {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    textSearchStart: function (args) {
      console.log(`Text search started for: "${args.searchText}"`);
    },
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textselectionend) event triggers when text selection is complete.

- Event arguments: [TextSelectionEndEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSelectionEndEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :textSelectionEnd="textSelectionEnd"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    textSelectionEnd: function (args) {
      console.log(`Text selection ended on page ${args.pageIndex}.`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#textselectionstart) event triggers when text selection is initiated.

- Event arguments: `TextSelectionStartEventArgs`.

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :textSelectionStart="textSelectionStart"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    textSelectionStart: function (args) {
      console.log(`Text selection started on page ${args.pageIndex}.`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

## thumbnailClick

The [thumbnailClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#thumbnailclick) event triggers when a thumbnail is clicked.

- Event arguments: [ThumbnailClickEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/thumbnailClickEventArgs/).

Example:

```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :thumbnailClick="thumbnailClick"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  PdfViewerPlugin,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    thumbnailClick: function (args) {
      console.log(`Thumbnail clicked for page index ${args.pageNumber}.`);
    },
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer],
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>
```

> Tip: For annotation and signature-specific events and arguments, see the dedicated Annotations Events topic.

## See also

- [Annotation events](./annotations/annotation-event.md)
- [Form field events](./form-designer/form-field-events.md)
- [Organize PDF events](./organize-pdf/organize-pdf-events.md)
