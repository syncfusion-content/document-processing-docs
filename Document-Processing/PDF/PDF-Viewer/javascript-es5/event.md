---
layout: post
title: Event in JavaScript (ES5) PDF Viewer | Syncfusion
description: A complete list of events in the JavaScript (ES5) PDF Viewer, with descriptions, arguments, and examples to integrate custom logic into PDF interactions.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Events in JavaScript (ES5) PDF Viewer

The PDF Viewer component triggers events for creation, page navigation, document lifecycle, context menu interactions, comments, bookmarks, download and export, hyperlinks, annotation import/export, custom keyboard commands, printing, signatures, text search, and text selection. Use these events to integrate custom logic into application workflows.

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

The [bookmarkClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#bookmarkclickevent) event triggers when a bookmark item is clicked in the bookmark panel.

'- Event arguments: [BookmarkClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/bookmarkclickeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    bookmarkClick: function (args) {
        console.log('Bookmark clicked: ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## toolbarClick

The [toolbarClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#toolbarclickevent) event triggers when a toolbar item is clicked. Use it to handle actions based on the clicked item's id or name.

- Event arguments: `ClickEventArgs`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    toolbarClick: function (args) {
        console.log('Toolbar item clicked: ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## validateFormFields

The [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#validateformfieldsevent) event triggers when form field validation fails, typically before a download or submit action proceeds. Use this event to inspect which required fields are empty and show custom messages or block application logic if needed.

'- Event arguments: [ValidateFormFieldsArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/validateformfieldsargs)
  - name: Event name
  - documentName: Current document name
  - formField: The last interacted field’s data (if applicable)
  - nonFillableFields: Array detailing required/invalid fields

When it triggers
- Add a form field and mark it Required (UI: right‑click field > Properties > Required).
- Leave the field empty and click Download. The event fires and provides the list of fields that failed validation.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});

viewer.enableFormFieldsValidation = true;
viewer.validateFormFields = function (args) {
    console.log('form field event name: ' + args.name);
    console.log('form field document name: ' + args.documentName);
    console.log('form field data: ' + args.formField);
    console.log('non fillable form field details: ', + args.nonFillableFields);
};

viewer.appendTo('#pdfViewer');
```

Tip
- To require a field programmatically, set isRequired: true when creating or editing the field via Form Designer APIs.

## zoomChange

The [zoomChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#zoomchangeevent) event triggers when the magnification value changes.

'- Event arguments: [ZoomChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/zoomchangeeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    zoomChange: function (args) {
        console.log('Zoom changed to: ' + args.zoomValue + '%');
    }
});
viewer.appendTo('#pdfViewer');
```

## buttonFieldClick

The [buttonFieldClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#buttonfieldclickevent) event triggers when a button form field is clicked.

'- Event arguments: [ButtonFieldClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/buttonfieldclickeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    buttonFieldClick: function (args) {
        console.log('Button field clicked. Name: ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentAdd

The [commentAdd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#commentaddevent) event triggers when a comment is added in the comment panel.

'- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commenteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    commentAdd: function (args) {
        console.log('Comment added. Id: ' + args.id);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentDelete

The [commentDelete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#commentdeleteevent) event triggers when a comment is deleted in the comment panel.

'- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commenteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    commentDelete: function (args) {
        console.log('Comment deleted. Id: ' + args.id);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentEdit

The [commentEdit](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#commenteditevent) event triggers when a comment is edited in the comment panel.

'- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commenteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    commentEdit: function (args) {
        console.log('Comment edited. Id: ' + args.id);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentSelect

The [commentSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#commentselectevent) event triggers when a comment is selected in the comment panel.

'- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commenteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    commentSelect: function (args) {
        console.log('Comment selected. Id: ' + args.id );
    }
});
viewer.appendTo('#pdfViewer');
```

## commentStatusChanged

The [commentStatusChanged](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#commentstatuschangedevent) event triggers when a comment status is changed in the comment panel.

'- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commenteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    commentStatusChanged: function (args) {
        console.log('Comment status changed. Id: ' + args.id + ', Status: ' + args.status );
    }
});
viewer.appendTo('#pdfViewer');
```

## created

The [created](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#createdevent) event is triggered during the creation of the PDF Viewer component.

- Event arguments: `void`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    created: function (args) {
        console.log('PDF Viewer created');
    }
});
viewer.appendTo('#pdfViewer');
```

## customContextMenuBeforeOpen

The [customContextMenuBeforeOpen](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#customcontextmenubeforeopenevent) event fires just before the context menu is shown. Use it to show or hide items based on the current state (for example, only show search items when text is selected).

'- Event arguments: [CustomContextMenuBeforeOpenEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customcontextmenubeforeopeneventArgs)
  - name: Event name
  - ids: Array of menu item ids that will be shown; remove ids to hide items for this open

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    customContextMenuBeforeOpen: function (args) {
        console.log('Before open context menu at page ' + args.name);
    }
});
var menuItems = [
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
];

   viewer.appendTo("#pdfViewer");
   viewer.documentLoad = function (args) {
       viewer.addCustomMenu(menuItems, false, false);
   };
```

## customContextMenuSelect

The [customContextMenuSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#customcontextmenuselectevent) event fires when a custom menu item is clicked. Use it to branch logic by the clicked item's id.

'- Event arguments: [CustomContextMenuSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customcontextmenuselecteventargs).

- name: Event name
- id: The id of the clicked menu item

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    customContextMenuSelect: function (args) {
        console.log('Context menu item selected: ' + args.name);
    }
});
var menuItems = [
    {
        text: 'SEARCH_ON_WEB',
        id: 'web_search',
        iconCss: 'e-icons e-search',
        items: [
            { text: 'SEARCH_IN_GOOGLE_IMAGE', id: 'web_search_images' },
            { text: 'SEARCH_IN_WIKIPEDIA', id: 'web_search_wikipedia' },
            { text: 'SEARCH_IN_YOUTUBE', id: 'web_search_youtube' },
            { text: 'SEARCH_GOOGLE', id: 'web_search_google' }
        ]
    },
    { id: 'web_search_separator', separator: true }
];

viewer.appendTo('#pdfViewer');
viewer.documentLoad = function (args) {
    viewer.addCustomMenu(menuItems, false, false);
};

```

## documentLoad

The [documentLoad](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#documentloadevent) event occurs after a document is successfully loaded and parsed.

'- Event arguments: [LoadEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/loadeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    textSelectionStart: function (args) {
        console.log('Text selection started on page ' + args.pageIndex + '.');
    }
});
viewer.appendTo('#pdfViewer');
```

## documentLoadFailed

The [documentLoadFailed](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#documentloadfailedevent) event triggers when loading a document fails.

'- Event arguments: [LoadFailedEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/loadfailedeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/invalid.pdf'
});
viewer.appendTo('#pdfViewer');
viewer.documentLoadFailed = function (args) {
    console.log('Load failed. Error: ' + args.documentName);
};
```

## documentUnload

The [documentUnload](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#documentunloadevent) event triggers when closing the current document.

'- Event arguments: [UnloadEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/unloadeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');
viewer.documentUnload = function (args) {
    console.log('Document unloaded');
};
```

## downloadEnd

The [downloadEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#downloadendevent) event triggers after a document download completes.

'- Event arguments: [DownloadEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/downloadendeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    downloadEnd: function (args) {
        console.log('Download finished. File name: ' + args.fileName);
    }
});
viewer.appendTo('#pdfViewer');
```

## downloadStart

The [downloadStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#downloadstartevent) event triggers when the download operation is initiated.

'- Event arguments: [DownloadStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/downloadstarteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    downloadStart: function (args) {
        console.log('Download started');
    }
});
viewer.appendTo('#pdfViewer');
```

## exportFailed

The [exportFailed](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportfailedevent) event triggers when exporting annotations fails.

'- Event arguments: [ExportFailureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportfailureeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    exportFailed: function (args) {
        console.log('Export failed: ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## exportStart

The [exportStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportstartevent) event triggers when exporting annotations starts.

'- Event arguments: [ExportStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportstarteventargs).

Example:

```javascript
// ES5 example: exportStart
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    exportStart: function (args) {
        console.log('Export started');
    }
});
viewer.appendTo('#pdfViewer');
```

## exportSuccess

The [exportSuccess](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportsuccessevent) event triggers when annotations are exported successfully.

'- Event arguments: [ExportSuccessEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportsuccesseventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    exportSuccess: function (args) {
        console.log('Export success');
    }
});
viewer.appendTo('#pdfViewer');
```

## extractTextCompleted

The [extractTextCompleted](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#extracttextcompletedevent) event triggers when text extraction completes.

'- Event arguments: [ExtractTextCompletedEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/extracttextcompletedeventArgs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    extractTextCompleted: function (args) {
        var text = (args.documentTextCollection || '');
        console.log('Extracted text length: ' + text.length);
    }
});
viewer.appendTo('#pdfViewer');
```

## hyperlinkClick

The [hyperlinkClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#hyperlinkclickevent) event triggers when a hyperlink is clicked.

'- Event arguments: [HyperlinkClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/hyperlinkclickeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    hyperlinkClick: function (args) {
        console.log('Hyperlink clicked: ' + args.hyperlink);
    }
});
viewer.appendTo('#pdfViewer');
```

## hyperlinkMouseOver

The [hyperlinkMouseOver](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#hyperlinkmouseoverevent) event triggers when hovering over a hyperlink.

- Event arguments: HyperlinkMouseOverArgs.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    hyperlinkMouseOver: function (args) {
        console.log('Hyperlink hover at page: ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## importFailed

The [importFailed](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importfailedevent) event triggers when importing annotations fails.

'- Event arguments: [ImportFailureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importfailureeventargs).

Example:

```javascript
// ES5 example: importFailed
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    importFailed: function (args) {
        console.log('Import failed: ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## importStart

The [importStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importstartevent) event triggers when importing annotations starts.

'- Event arguments: [ImportStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importstarteventargs).

Example:

```javascript
// ES5 example: importStart
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    importStart: function (args) {
        console.log('Import started');
    }
});
viewer.appendTo('#pdfViewer');
```

## importSuccess

The [importSuccess](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importsuccessevent) event triggers when annotations are imported successfully.

'- Event arguments: [ImportSuccessEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importsuccesseventargs).

Example:

```javascript
// ES5 example: importSuccess
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    importSuccess: function (args) {
        console.log('Import success');
    }
});
viewer.appendTo('#pdfViewer');
```

## keyboardCustomCommands

The [keyboardCustomCommands](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#keyboardcustomcommandsevent) event triggers when customized keyboard command keys are pressed.

'- Event arguments: [KeyboardCustomCommandsEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/keyboardcustomcommandseventargs).

  - name: Event name
  - keyboardCommand: The command metadata raised by Command Manager
  
When it triggers
- After registering gestures in commandManager.keyboardCommand. For example, pressing Shift + Alt + G or Shift + Alt + H triggers the event. Use this to handle custom keyboard shortcuts.

Refer to [Keyboard interaction](./accessibility#keyboard-interaction) for details about adding and handling custom shortcut keys.
Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
        documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
viewer.commandManager = {
    keyboardCommand: [
        { name: 'customCopy', gesture: { pdfKeys: ej.pdfviewer.PdfKeys.G, modifierKeys: ej.pdfviewer.ModifierKeys.Shift | ej.pdfviewer.ModifierKeys.Alt } },
        { name: 'customPaste', gesture: { pdfKeys: ej.pdfviewer.PdfKeys.H, modifierKeys: ej.pdfviewer.ModifierKeys.Shift | ej.pdfviewer.ModifierKeys.Alt } },
        { name: 'customCut', gesture: { pdfKeys: ej.pdfviewer.PdfKeys.Z, modifierKeys: ej.pdfviewer.ModifierKeys.Control } },
        { name: 'customSelectAll', gesture: { pdfKeys: ej.pdfviewer.PdfKeys.E, modifierKeys: ej.pdfviewer.ModifierKeys.Control } }
    ]
};
viewer.appendTo('#pdfViewer');
viewer.keyboardCustomCommands = function (args) {
    console.log('Custom command triggered:', args);
};
```

## moveSignature

The [moveSignature](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#movesignatureevent) event triggers when a signature is moved across the page.

- Event arguments: `MoveSignatureEventArgs`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    moveSignature: function (args) {
        console.log('Signature moved on page ' + args.id);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageChange

The [pageChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#pagechangeevent) event triggers when the current page number changes (for example, via scrolling or navigation controls).

'- Event arguments: [PageChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pagechangeeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    pageChange: function (args) {
        console.log('Page changed from ' + args.previousPageNumber + ' to ' + args.currentPageNumber);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageClick

The [pageClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#pageclickevent) event triggers when a mouse click occurs on a page.

'- Event arguments: [PageClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageclickeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    pageClick: function (args) {
        console.log('Page ' + args.pageNumber + ' clicked at (' + args.x + ', ' + args.y + ')');
    }
});
viewer.appendTo('#pdfViewer');
```

## pageMouseover

The [pageMouseover](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#pagemouseoverevent) event triggers when the mouse moves over a page.

- Event arguments: `PageMouseoverEventArgs`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    pageMouseover: function (args) {
        console.log('Mouse over page ' + args.name);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageOrganizerSaveAs

The [pageOrganizerSaveAs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#pageorganizersaveasevent) event triggers when a Save As action is performed in the page organizer.

- Event arguments: `PageOrganizerSaveAsEventArgs`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    pageOrganizerSaveAs: function (args) {
        console.log('Page organizer save triggered. File name: ' + args.downloadDocument);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageRenderComplete

The [pageRenderComplete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#pagerendercompleteevent) event triggers after a page finishes rendering.

'- Event arguments: [PageRenderCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pagerendercompleteeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    pageRenderComplete: function (args) {
        console.log('Page ' + args.data + ' rendering completed.');
    }
});
viewer.appendTo('#pdfViewer');
```

## pageRenderInitiate

The [pageRenderInitiate](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#pagerenderinitiateevent) event triggers when page rendering begins.

'- Event arguments: [PageRenderInitiateEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pagerenderinitiateeventArgs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    pageRenderInitiate: function (args) {
        console.log('Page ' + args.jsonData + ' rendering initiated.');
    }
});
viewer.appendTo('#pdfViewer');
```

## printEnd

The [printEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#printendevent) event triggers when a print action completes.

'- Event arguments: [PrintEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/printendeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    printEnd: function (args) {
        console.log('Print action completed.');
    }
});
viewer.appendTo('#pdfViewer');
```

## printStart

The [printStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#printstartevent) event triggers when a print action is initiated.

'- Event arguments: [PrintStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/printstarteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    printStart: function () {
        console.log('Print action initiated.');
    }
});
viewer.appendTo('#pdfViewer');
```

## removeSignature

The [removeSignature](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#removesignatureevent) event triggers when a signature is removed.

'- Event arguments: [RemoveSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/removesignatureeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    removeSignature: function (args) {
        console.log('Signature removed from page ' + args.bounds);
    }
});
viewer.appendTo('#pdfViewer');
```

## resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#resizesignatureevent) event triggers when a signature is resized.

'- Event arguments: [ResizeSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/resizesignatureeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    resizeSignature: function (args) {
        console.log('Signature resized on page ' + args.currentPosition );
    }
});
viewer.appendTo('#pdfViewer');
```

## resourcesLoaded

The [resourcesLoaded](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#resourcesloadedevent) event triggers after the viewer's required resources are loaded.

- Event arguments: `void`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    resourcesLoaded: function (args) {
        console.log('PDFium resources loaded.');
    }
});
viewer.appendTo('#pdfViewer');
```

## signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#signaturepropertieschangeevent) event triggers when signature properties change.

'- Event arguments: [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signaturepropertieschangeeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    signaturePropertiesChange: function (args) {
        console.log('Signature properties changed on page ' + args.type );
    }
});
viewer.appendTo('#pdfViewer');
```

## signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#signatureselectevent) event triggers when a signature is selected.

'- Event arguments: [SignatureSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureselecteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    signatureSelect: function (args) {
        console.log('Signature selected on page ' + args.signature );
    }
});
viewer.appendTo('#pdfViewer');
```

## signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#signatureunselectevent) event triggers when a signature is unselected.

'- Event arguments: [SignatureUnselectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureunselecteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    signatureUnselect: function (args) {
        console.log('Signature unselected ' + args.signature );
    }
});
viewer.appendTo('#pdfViewer');
```

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#textsearchcompleteevent) event triggers when a text search completes.

'- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textsearchcompleteeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    textSearchComplete: function (args) {
        console.log('Text search completed.');
    }
});
viewer.appendTo('#pdfViewer');
```

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#textsearchhighlightevent) event triggers when searched text is highlighted.

'- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textsearchhighlighteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    textSearchHighlight: function (args) {
        console.log('Search result ' + args.bounds + ' highlighted.');
    }
});
viewer.appendTo('#pdfViewer');
```

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#textsearchstartevent) event triggers when a text search is initiated.

'- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchstarteventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    textSearchStart: function (args) {
        console.log('Text search started for: "' + args.searchText + '"');
    }
});
viewer.appendTo('#pdfViewer');
```

## textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#textselectionendevent) event triggers when text selection is complete.

'- Event arguments: [TextSelectionEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSelectionendeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    textSelectionEnd: function (args) {
        console.log('Text selection ended on page ' + args.pageIndex );
    }
});
viewer.appendTo('#pdfViewer');
```

## textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#textselectionstartevent) event triggers when text selection is initiated.

- Event arguments: `TextSelectionStartEventArgs`.

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    textSelectionStart: function (args) {
        console.log('Text selection started on page ' + args.pageIndex);
    }
});
viewer.appendTo('#pdfViewer');
```

## thumbnailClick

The [thumbnailClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#thumbnailclickevent) event triggers when a thumbnail is clicked.

'- Event arguments: [ThumbnailClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/thumbnailclickeventargs).

Example:

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);
var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    thumbnailClick: function (args) {
        console.log('Thumbnail clicked for page index ' + args.pageNumber + '.');
    }
});
viewer.appendTo('#pdfViewer');
```

> Tip: For annotation and signature-specific events and arguments, see the dedicated Annotations Events topic.

## See also

- [Annotation events](./annotations/annotation-event)
- [Form field events](./form-designer/form-field-events)
- [Organize PDF events](./organize-pdf/organize-pdf-events)