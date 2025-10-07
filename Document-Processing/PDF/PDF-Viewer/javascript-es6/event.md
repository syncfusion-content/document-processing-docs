---
title: Events in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Events in Syncfusion Typescript Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer 
documentation: ug
publishingplatform: Typescript
domainurl: ##DomainURL##
---

# Events in Typescript Pdfviewer control

The PDF Viewer component triggers events for creation, page navigation, document lifecycle, context menu interactions, comments, bookmarks, downloads/exports, hyperlinks, import/export of annotations, keyboard commands, printing, signatures, text search, and text selection. Use these events to integrate custom logic into your application workflows.

The following table lists the commonly used events supported by the PDF Viewer control:

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

The [bookmarkClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#bookmarkclickevent) event triggers when a bookmark item is clicked in the bookmark panel.

- Event arguments: [BookmarkClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/bookmarkClickEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    bookmarkClick: function (args: any) {
        console.log(`Bookmark clicked: ${args.name}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## toolbarClick

The [toolbarClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#toolbarclickevent) event triggers when a toolbar item is clicked.

- Event arguments: `ClickEventArgs`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    toolbarClick: function (args: any) {
        console.log(`Toolbar item clicked: ${args.name}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## validateFormFields

The [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#validateformfieldsevent) event triggers when form field validation fails.

- Event arguments: [ValidateFormFieldsArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/validateFormFieldsArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
});
 viewer.validateFormFields = function (args) {
console.log(args);console.log("Form field validation triggered:", args);
}
viewer.appendTo('#pdfViewer');
```

## zoomChange

The [zoomChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#zoomchangeevent) event triggers when the magnification value changes.

- Event arguments: [ZoomChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/zoomChangeEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    zoomChange: function (args: any) {
        console.log(`Zoom changed to: ${args.newValue}%`);
    }
});
viewer.appendTo('#pdfViewer');
```

## buttonFieldClick

The [buttonFieldClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#buttonfieldclickevent) event triggers when a button form field is clicked.

- Event arguments: [ButtonFieldClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/buttonFieldClickEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    buttonFieldClick: function (args: any) {
        console.log(`Button field clicked. Name: ${args.name}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentAdd

The [commentAdd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#commentaddevent) event triggers when a comment is added in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    commentAdd: function (args: any) {
        console.log(`Comment added. Id: ${args.id}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentDelete

The [commentDelete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#commentdeleteevent) event triggers when a comment is deleted in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    commentDelete: function (args: any) {
        console.log(`Comment deleted. Id: ${args.id}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentEdit

The [commentEdit](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#commenteditevent) event triggers when a comment is edited in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    commentEdit: function (args: any) {
        console.log(`Comment edited. Id: ${args.id}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentSelect

The [commentSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#commentselectevent) event triggers when a comment is selected in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    commentSelect: function (args: any) {
        console.log(`Comment selected. Id: ${args.id}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## commentStatusChanged

The [commentStatusChanged](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#commentstatuschangedevent) event triggers when a comment status is changed in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/commentEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    commentStatusChanged: function (args: any) {
        console.log(`Comment status changed. Id: ${args.id}, Status: ${args.status}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## created

The [created](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#createdevent) event is triggered during the creation of the PDF Viewer component.

- Event arguments: `void`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    created: () => {
        console.log('PDF Viewer created');
    }
});
viewer.appendTo('#pdfViewer');
```

## customContextMenuBeforeOpen

The [customContextMenuBeforeOpen](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#customcontextmenubeforeopenevent) event fires before the custom context menu is opened.

- Event arguments: [CustomContextMenuBeforeOpenEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customContextMenuBeforeOpenEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    customContextMenuBeforeOpen: function (args: any) {
        // args.cancel = true; // prevent opening
        console.log(`Before open context menu at page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## customContextMenuSelect

The [customContextMenuSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#customcontextmenuselectevent) event fires when a custom context menu item is selected.

- Event arguments: [CustomContextMenuSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customContextMenuSelectEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    customContextMenuSelect: function (args: any) {
        console.log(`Context menu item selected: ${args.item.text}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## documentLoad

The [documentLoad](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#documentloadevent) event occurs when a document is successfully loaded.

- Event arguments: [LoadEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/loadEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    documentLoad: function (args: any) {
        console.log(`Document loaded: page count = ${args.pageData}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## documentLoadFailed

The [documentLoadFailed](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#documentloadfailedevent) event is triggered when loading a document fails.

- Event arguments: [LoadFailedEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/loadFailedEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/invalid.pdf',
    documentLoadFailed: function (args: any) {
        console.log(`Load failed. Error: ${args.documentName}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## documentUnload

The [documentUnload](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#documentunloadevent) event is triggered when closing the current document.

- Event arguments: [UnloadEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/unloadEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    documentUnload: () => {
        console.log('Document unloaded');
    }
});
viewer.appendTo('#pdfViewer');
```

## downloadEnd

The [downloadEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#downloadendevent) event is triggered after a document download completes.

- Event arguments: [DownloadEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/downloadEndEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    downloadEnd: function (args: any) {
        console.log(`Download finished. File name: ${args.fileName}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## downloadStart

The [downloadStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#downloadstartevent) event is triggered when the download operation is initiated.

- Event arguments: [DownloadStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/downloadStartEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    downloadStart: () => {
        console.log('Download started');
    }
});
viewer.appendTo('#pdfViewer');
```

## exportFailed

The [exportFailed](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#exportfailedevent) event is triggered when exporting annotations fails.

- Event arguments: [ExportFailureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportFailureEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    exportFailed: function (args: any) {
        console.log(`Export failed: ${args.message}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## exportStart

The [exportStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#exportstartevent) event is triggered when exporting annotations starts.

- Event arguments: [ExportStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportStartEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    exportStart: () => {
        console.log('Export started');
    }
});
viewer.appendTo('#pdfViewer');
```

## exportSuccess

The [exportSuccess](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#exportsuccessevent) event is triggered when annotations are exported successfully.

- Event arguments: [ExportSuccessEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/exportSuccessEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    exportSuccess: () => {
        console.log('Export success');
    }
});
viewer.appendTo('#pdfViewer');
```

## extractTextCompleted

The [extractTextCompleted](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#extracttextcompletedevent) event is triggered when text extraction completes.

- Event arguments: [ExtractTextCompletedEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/extractTextCompletedEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    extractTextCompleted: function (args: any) {
        console.log(`Extracted text length: ${(args.documentTextCollection || '').length}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## hyperlinkClick

The [hyperlinkClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#hyperlinkclickevent) event is triggered when a hyperlink is clicked.

- Event arguments: [HyperlinkClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/hyperlinkClickEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    hyperlinkClick: function (args: any) {
        console.log(`Hyperlink clicked: ${args.hyperlink}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## hyperlinkMouseOver

The [hyperlinkMouseOver](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#hyperlinkmouseoverevent) event is triggered when hovering over a hyperlink.

- Event arguments: HyperlinkMouseOverArgs.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    hyperlinkMouseOver: function (args: any) {
        console.log(`Hyperlink hover at page: ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## importFailed

The [importFailed](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#importfailedevent) event is triggered when importing annotations fails.

- Event arguments: [ImportFailureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importFailureEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    importFailed: function (args: any) {
        console.log(`Import failed: ${args.message}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## importStart

The [importStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#importstartevent) event is triggered when importing annotations starts.

- Event arguments: [ImportStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importStartEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    importStart: () => {
        console.log('Import started');
    }
});
viewer.appendTo('#pdfViewer');
```

## importSuccess

The [importSuccess](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#importsuccessevent) event is triggered when annotations are imported successfully.

- Event arguments: [ImportSuccessEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/importSuccessEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    importSuccess: () => {
        console.log('Import success');
    }
});
viewer.appendTo('#pdfViewer');
```

## keyboardCustomCommands

The [keyboardCustomCommands](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#keyboardcustomcommandsevent) event is triggered when customized keyboard command keys are pressed.

- Event arguments: [KeyboardCustomCommandsEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/keyboardCustomCommandsEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    keyboardCustomCommands: function (args: any) {
        console.log(`Key command: ${args.command}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## moveSignature

The [moveSignature](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#movesignatureevent) event triggers when a signature is moved across a page.

- Event arguments: `MoveSignatureEventArgs`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    moveSignature: function (args: any) {
        console.log(`Signature moved on page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageChange

The [pageChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#pagechangeevent) event triggers when the current page number changes.

- Event arguments: [PageChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageChangeEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageChange: function (args: any) {
        console.log(`Page changed from ${args.previousPageNumber} to ${args.currentPageNumber}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageClick

The [pageClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#pageclickevent) event triggers when a mouse click occurs on a page.

- Event arguments: [PageClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageClickEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageClick: function (args: any) {
        console.log(`Page ${args.pageIndex} clicked at (${args.position.x}, ${args.position.y})`);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageMouseover

The [pageMouseover](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#pagemouseoverevent) event triggers when moving the mouse over a page.

- Event arguments: `PageMouseoverEventArgs`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageMouseover: function (args: any) {
        console.log(`Mouse over page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageOrganizerSaveAs

The [pageOrganizerSaveAs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#pageorganizersaveasevent) event triggers when a `save as` action is performed in the page organizer.

- Event arguments: `PageOrganizerSaveAsEventArgs`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageOrganizerSaveAs: function (args: any) {
        console.log(`Page organizer save triggered. File name: ${args.fileName}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageRenderComplete

The [pageRenderComplete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#pagerendercompleteevent) event triggers after a page finishes rendering.

- Event arguments: [PageRenderCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageRenderCompleteEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageRenderComplete: function (args: any) {
        console.log(`Page ${args.pageIndex} rendering completed.`);
    }
});
viewer.appendTo('#pdfViewer');
```

## pageRenderInitiate

The [pageRenderInitiate](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#pagerenderinitiateevent) event triggers when page rendering begins.

- Event arguments: [PageRenderInitiateEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pageRenderInitiateEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageRenderInitiate: function (args: any) {
        console.log(`Page ${args.pageIndex} rendering initiated.`);
    }
});
viewer.appendTo('#pdfViewer');
```

## printEnd

The [printEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#printendevent) event triggers when a print action is completed.

- Event arguments: [PrintEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/printEndEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    printEnd: () => {
        console.log('Print action completed.');
    }
});
viewer.appendTo('#pdfViewer');
```

## printStart

The [printStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#printstartevent) event triggers when a print action is initiated.

- Event arguments: [PrintStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/printStartEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    printStart: () => {
        console.log('Print action initiated.');
    }
});
viewer.appendTo('#pdfViewer');
```

## removeSignature

The [removeSignature](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#removesignatureevent) event triggers when a signature is removed.

- Event arguments: [RemoveSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/removeSignatureEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    removeSignature: function (args: any) {
        console.log(`Signature removed from page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#resizesignatureevent) event triggers when a signature is resized.

- Event arguments: [ResizeSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/resizeSignatureEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resizeSignature: function (args: any) {
        console.log(`Signature resized on page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## resourcesLoaded

The [resourcesLoaded](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#resourcesloadedevent) event triggers after PDFium resources are loaded.

- Event arguments: `void`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourcesLoaded: () => {
        console.log('PDFium resources loaded.');
    }
});
viewer.appendTo('#pdfViewer');
```

## signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#signaturepropertieschangeevent) event triggers when signature properties are changed.

- Event arguments: [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    signaturePropertiesChange: function (args: any) {
        console.log(`Signature properties changed on page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#signatureselectevent) event triggers when a signature is selected.

- Event arguments: [SignatureSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureSelectEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    signatureSelect: function (args: any) {
        console.log(`Signature selected on page ${args.pageIndex}`);
    }
});
viewer.appendTo('#pdfViewer');
```

## signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#signatureunselectevent) event triggers when a signature is unselected.

- Event arguments: [SignatureUnselectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureUnselectEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    signatureUnselect: () => {
        console.log('Signature unselected.');
    }
});
viewer.appendTo('#pdfViewer');
```

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textsearchcompleteevent) event triggers when a text search is completed.

- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchCompleteEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSearchComplete: () => {
        console.log('Text search completed.');
    }
});
viewer.appendTo('#pdfViewer');
```

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textsearchhighlightevent) event triggers when the searched text is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchHighlightEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSearchHighlight: function (args: any) {
        console.log(`Search result ${args.bounds} highlighted.`);
    }
});
viewer.appendTo('#pdfViewer');
```

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textsearchstartevent) event triggers when a text search is initiated.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchStartEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSearchStart: function (args: any) {
        console.log(`Text search started for: "${args.searchText}"`);
    }
});
viewer.appendTo('#pdfViewer');
```

## textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionendevent) event triggers when text selection is complete.

- Event arguments: [TextSelectionEndEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSelectionEndEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSelectionEnd: function (args: any) {
        console.log(`Text selection ended on page ${args.pageIndex}.`);
    }
});
viewer.appendTo('#pdfViewer');
```

## textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionstartevent) event triggers when text selection is initiated.

- Event arguments: `TextSelectionStartEventArgs`.

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSelectionStart: function (args: any) {
        console.log(`Text selection started on page ${args.pageIndex}.`);
    }
});
viewer.appendTo('#pdfViewer');
```

## thumbnailClick

The [thumbnailClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#thumbnailclickevent) event triggers when a thumbnail is clicked.

- Event arguments: [ThumbnailClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/thumbnailClickEventArgs/).

Example:

```typescript
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, ValidateFormFieldsArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    thumbnailClick: function (args: any) {
        console.log(`Thumbnail clicked for page index ${args.pageIndex}.`);
    }
});
viewer.appendTo('#pdfViewer');
```

> Tip: For annotation and signature events, see the dedicated Annotations Events topic.
