---
layout: post
title: Events in Angular PDF Viewer | Syncfusion
description: Comprehensive list of events in the Syncfusion Angular PDF Viewer with descriptions, event arguments, and usage examples to integrate custom logic.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular PDF Viewer

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

The [bookmarkClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#bookmarkclick) event triggers when a bookmark item is clicked in the bookmark panel.

- Event arguments: [BookmarkClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/bookmarkClickEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onBookmarkClick(args: any): void {
    console.log(`Bookmark clicked: ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (bookmarkClick)="onBookmarkClick($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## toolbarClick

The [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#toolbarclickevent) event triggers when a toolbar item is clicked. Use it to handle actions based on the clicked item's id or name.

- Event arguments: `ClickEventArgs`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onToolbarClick(args: any): void {
    console.log(`Toolbar item clicked: ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (toolbarClick)="onToolbarClick($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## validateFormFields

The [validateFormFields](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#validateformfields) event triggers when form field validation fails, typically before a download or submit action proceeds. Use this event to inspect which required fields are empty and show custom messages or block application logic if needed.

- Event arguments: [ValidateFormFieldsArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/validateFormFieldsArgs)
  - name: Event name
  - documentName: Current document name
  - formField: The last interacted field’s data (if applicable)
  - nonFillableFields: Array detailing required/invalid fields

When it triggers
- Add a form field and mark it Required (UI: right‑click field > Properties > Required).
- Leave the field empty and click Download. The event fires and provides the list of fields that failed validation.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  public enableFormFieldsValidation = true;

  public onValidateFormFields(args: any): void {
    console.log('form field event name:', args.name);
    console.log('form field document name:', args.documentName);
    console.log('form field data:', args.formField);
    console.log('non fillable form field details:', args.nonFillableFields);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  [enableFormFieldsValidation]="enableFormFieldsValidation"
  (validateFormFields)="onValidateFormFields($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

Tip
- To require a field programmatically, set isRequired: true when creating or editing the field via Form Designer APIs.

## zoomChange

The [zoomChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#zoomchange) event triggers when the magnification value changes.

- Event arguments: [ZoomChangeEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/zoomChangeEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onZoomChange(args: any): void {
    console.log(`Zoom changed to: ${args.zoomValue}%`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (zoomChange)="onZoomChange($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## buttonFieldClick

The [buttonFieldClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#buttonfieldclick) event triggers when a button form field is clicked.

- Event arguments: [ButtonFieldClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/buttonFieldClickEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onButtonFieldClick(args: any): void {
    console.log(`Button field clicked. Name: ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (buttonFieldClick)="onButtonFieldClick($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## commentAdd

The [commentAdd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#commentadd) event triggers when a comment is added in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/commentEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCommentAdd(args: any): void {
    console.log(`Comment added. Id: ${args.id}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (commentAdd)="onCommentAdd($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## commentDelete

The [commentDelete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#commentdelete) event triggers when a comment is deleted in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/commentEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCommentDelete(args: any): void {
    console.log(`Comment deleted. Id: ${args.id}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (commentDelete)="onCommentDelete($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## commentEdit

The [commentEdit](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#commentedit) event triggers when a comment is edited in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/commentEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCommentEdit(args: any): void {
    console.log(`Comment edited. Id: ${args.id}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (commentEdit)="onCommentEdit($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## commentSelect

The [commentSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#commentselect) event triggers when a comment is selected in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/commentEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCommentSelect(args: any): void {
    console.log(`Comment selected. Id: ${args.id}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (commentSelect)="onCommentSelect($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## commentStatusChanged

The [commentStatusChanged](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#commentstatuschanged) event triggers when a comment status is changed in the comment panel.

- Event arguments: [CommentEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/commentEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCommentStatusChanged(args: any): void {
    console.log(`Comment status changed. Id: ${args.id}, Status: ${args.status}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (commentStatusChanged)="onCommentStatusChanged($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## created

The [created](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#created) event is triggered during the creation of the PDF Viewer component.

- Event arguments: `void`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCreated(): void {
    console.log('PDF Viewer created');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (created)="onCreated()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## customContextMenuBeforeOpen

The [customContextMenuBeforeOpen](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#customcontextmenubeforeopen) event fires just before the context menu is shown. Use it to show or hide items based on the current state (for example, only show search items when text is selected).

- Event arguments: [CustomContextMenuBeforeOpenEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/customContextMenuBeforeOpenEventArgs)
  - name: Event name
  - ids: Array of menu item ids that will be shown; remove ids to hide items for this open

Example:

```ts
// app.ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) pdfViewer!: PdfViewerComponent;

  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public menuItems: any[] = [
    {
      text: 'SEARCH_ON_WEB',
      id: 'web_search',
      iconCss: 'e-icons e-search',
      items: [
        { text: 'SEARCH_IN_GOOGLE_IMAGE', id: 'web_search_images' },
        { text: 'SEARCH_IN_WIKIPEDIA', id: 'web_search_wikipedia' },
        { text: 'SEARCH_IN_YOUTUBE', id: 'web_search_youtube' },
        { text: 'SEARCH_GOOGLE', id: 'web_search_google' },
      ],
    },
    { id: 'web_search_separator', separator: true },
  ];

  public onCustomContextMenuBeforeOpen(args: any): void {
    console.log(`Before open context menu at page ${args.name}`);
  }

  public onDocumentLoad(): void {
    if (this.pdfViewer) {
      this.pdfViewer.addCustomMenu(this.menuItems, false, false);
    }
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  #pdfViewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (customContextMenuBeforeOpen)="onCustomContextMenuBeforeOpen($event)"
  (documentLoad)="onDocumentLoad()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## customContextMenuSelect

The [customContextMenuSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#customcontextmenuselect) event fires when a custom menu item is clicked. Use it to branch logic by the clicked item's id.

- Event arguments: [CustomContextMenuSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/customContextMenuSelectEventArgs).

- name: Event name
- id: The id of the clicked menu item

Example:

```ts
// app.ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) pdfViewer!: PdfViewerComponent;

  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public menuItems: any[] = [
    {
      text: 'SEARCH_ON_WEB',
      id: 'web_search',
      iconCss: 'e-icons e-search',
      items: [
        { text: 'SEARCH_IN_GOOGLE_IMAGE', id: 'web_search_images' },
        { text: 'SEARCH_IN_WIKIPEDIA', id: 'web_search_wikipedia' },
        { text: 'SEARCH_IN_YOUTUBE', id: 'web_search_youtube' },
        { text: 'SEARCH_GOOGLE', id: 'web_search_google' },
      ],
    },
    { id: 'web_search_separator', separator: true },
  ];

  public onCustomContextMenuSelect(args: any): void {
    console.log(`Context menu item selected: ${args.name}`);
  }

  public onDocumentLoad(): void {
    if (this.pdfViewer) {
      this.pdfViewer.addCustomMenu(this.menuItems, false, false);
    }
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  #pdfViewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (customContextMenuSelect)="onCustomContextMenuSelect($event)"
  (documentLoad)="onDocumentLoad()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## documentLoad

The [documentLoad](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#documentload) event occurs after a document is successfully loaded and parsed.

- Event arguments: [LoadEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/loadEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onDocumentLoad(args: any): void {
    console.log(`Document loaded: page count = ${args.pageData}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (documentLoad)="onDocumentLoad($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## documentLoadFailed

The [documentLoadFailed](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#documentloadfailed) event triggers when loading a document fails.

- Event arguments: [LoadFailedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/loadFailedEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/invalid.pdf';

  public onDocumentLoadFailed(args: any): void {
    console.log(`Load failed. Error: ${args.documentName}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  (documentLoadFailed)="onDocumentLoadFailed($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## documentUnload

The [documentUnload](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#documentunload) event triggers when closing the current document.

- Event arguments: [UnloadEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/unloadEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onDocumentUnload(): void {
    console.log('Document unloaded');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (documentUnload)="onDocumentUnload()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## downloadEnd

The [downloadEnd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#downloadend) event triggers after a document download completes.

- Event arguments: [DownloadEndEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/downloadEndEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onDownloadEnd(args: any): void {
    console.log(`Download finished. File name: ${args.fileName}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (downloadEnd)="onDownloadEnd($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## downloadStart

The [downloadStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#downloadstart) event triggers when the download operation is initiated.

- Event arguments: [DownloadStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/downloadStartEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onDownloadStart(): void {
    console.log('Download started');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (downloadStart)="onDownloadStart()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## exportFailed

The [exportFailed](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportfailed) event triggers when exporting annotations fails.

- Event arguments: [ExportFailureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportFailureEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onExportFailed(args: any): void {
    console.log(`Export failed: ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (exportFailed)="onExportFailed($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## exportStart

The [exportStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportstart) event triggers when exporting annotations starts.

- Event arguments: [ExportStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportStartEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onExportStart(): void {
    console.log('Export started');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (exportStart)="onExportStart()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## exportSuccess

The [exportSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#exportsuccess) event triggers when annotations are exported successfully.

- Event arguments: [ExportSuccessEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/exportSuccessEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import { ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onExportSuccess(): void {
    console.log('Export success');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (exportSuccess)="onExportSuccess()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## extractTextCompleted

The [extractTextCompleted](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#extracttextcompleted) event triggers when text extraction completes.

- Event arguments: [ExtractTextCompletedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/extractTextCompletedEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onExtractTextCompleted(args: any): void {
    console.log(`Extracted text length: ${(args.documentTextCollection || '').length}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (extractTextCompleted)="onExtractTextCompleted($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## hyperlinkClick

The [hyperlinkClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#hyperlinkclick) event triggers when a hyperlink is clicked.

- Event arguments: [HyperlinkClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/hyperlinkClickEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onHyperlinkClick(args: any): void {
    console.log(`Hyperlink clicked: ${args.hyperlink}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (hyperlinkClick)="onHyperlinkClick($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## hyperlinkMouseOver

The [hyperlinkMouseOver](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#hyperlinkmouseover) event triggers when hovering over a hyperlink.

- Event arguments: HyperlinkMouseOverArgs.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onHyperlinkMouseOver(args: any): void {
    console.log(`Hyperlink hover at page: ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (hyperlinkMouseOver)="onHyperlinkMouseOver($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## importFailed

The [importFailed](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#importfailed) event triggers when importing annotations fails.

- Event arguments: [ImportFailureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/importFailureEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onImportFailed(args: any): void {
    console.log(`Import failed: ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (importFailed)="onImportFailed($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## importStart

The [importStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#importstart) event triggers when importing annotations starts.

- Event arguments: [ImportStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/importStartEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onImportStart(): void {
    console.log('Import started');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (importStart)="onImportStart()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## importSuccess

The [importSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#importsuccess) event triggers when annotations are imported successfully.

- Event arguments: [ImportSuccessEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/importSuccessEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onImportSuccess(): void {
    console.log('Import success');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (importSuccess)="onImportSuccess()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## keyboardCustomCommands

The [keyboardCustomCommands](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#keyboardcustomcommands) event triggers when customized keyboard command keys are pressed.

- Event arguments: [KeyboardCustomCommandsEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/keyboardCustomCommandsEventArgs).

  - name: Event name
  - keyboardCommand: The command metadata raised by Command Manager
  
When it triggers
- After registering gestures in commandManager.keyboardCommand. For example, pressing Shift + Alt + G or Shift + Alt + H triggers the event. Use this to handle custom keyboard shortcuts.

Refer to [Keyboard interaction](./accessibility#keyboard-interaction) for details about adding and handling custom shortcut keys.
Example:

```ts
// app.ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent, ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) pdfViewer!: PdfViewerComponent;

  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onCreated(): void {
    if (this.pdfViewer) {
      const PdfKeys: any = (window as any).PdfKeys || {};
      const ModifierKeys: any = (window as any).ModifierKeys || {};
      (this.pdfViewer as any).commandManager = {
        keyboardCommand: [
          { name: 'customCopy', gesture: { pdfKeys: PdfKeys.G, modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt } },
          { name: 'customPaste', gesture: { pdfKeys: PdfKeys.H, modifierKeys: ModifierKeys.Shift | ModifierKeys.Alt } },
          { name: 'customCut', gesture: { pdfKeys: PdfKeys.Z, modifierKeys: ModifierKeys.Control } },
          { name: 'customSelectAll', gesture: { pdfKeys: PdfKeys.E, modifierKeys: ModifierKeys.Control } },
        ],
      };
    }
  }

  public onKeyboardCustomCommands(args: any): void {
    console.log('Custom command triggered:', args);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  #pdfViewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (created)="onCreated()"
  (keyboardCustomCommands)="onKeyboardCustomCommands($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## moveSignature

The [moveSignature](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#movesignature) event triggers when a signature is moved across the page.

- Event arguments: `MoveSignatureEventArgs`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onMoveSignature(args: any): void {
    console.log(`Signature moved on page ${args.id}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (moveSignature)="onMoveSignature($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## pageChange

The [pageChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#pagechange) event triggers when the current page number changes (for example, via scrolling or navigation controls).

- Event arguments: [PageChangeEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageChangeEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPageChange(args: any): void {
    console.log(`Page changed from ${args.previousPageNumber} to ${args.currentPageNumber}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (pageChange)="onPageChange($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## pageClick

The [pageClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#pageclick) event triggers when a mouse click occurs on a page.

- Event arguments: [PageClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageClickEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPageClick(args: any): void {
    console.log(`Page ${args.pageNumber} clicked at (${args.x}, ${args.y})`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (pageClick)="onPageClick($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## pageMouseover

The [pageMouseover](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#pagemouseover) event triggers when the mouse moves over a page.

- Event arguments: `PageMouseoverEventArgs`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPageMouseover(args: any): void {
    console.log(`Mouse over page ${args.name}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (pageMouseover)="onPageMouseover($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## pageOrganizerSaveAs

The [pageOrganizerSaveAs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#pageorganizersaveas) event triggers when a Save As action is performed in the page organizer.

- Event arguments: `PageOrganizerSaveAsEventArgs`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPageOrganizerSaveAs(args: any): void {
    console.log(`Page organizer save triggered. File name: ${args.downloadDocument}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (pageOrganizerSaveAs)="onPageOrganizerSaveAs($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## pageRenderComplete

The [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#pagerendercomplete) event triggers after a page finishes rendering.

- Event arguments: [PageRenderCompleteEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderCompleteEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPageRenderComplete(args: any): void {
    console.log(`Page ${args.data} rendering completed.`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (pageRenderComplete)="onPageRenderComplete($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## pageRenderInitiate

The [pageRenderInitiate](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#pagerenderinitiate) event triggers when page rendering begins.

- Event arguments: [PageRenderInitiateEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderInitiateEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPageRenderInitiate(args: any): void {
    console.log(`Page ${args.jsonData} rendering initiated.`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (pageRenderInitiate)="onPageRenderInitiate($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## printEnd

The [printEnd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printend) event triggers when a print action completes.

- Event arguments: [PrintEndEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/printEndEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPrintEnd(): void {
    console.log('Print action completed.');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (printEnd)="onPrintEnd()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## printStart

The [printStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#printstart) event triggers when a print action is initiated.

- Event arguments: [PrintStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/printStartEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onPrintStart(): void {
    console.log('Print action initiated.');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (printStart)="onPrintStart()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## removeSignature

The [removeSignature](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#removesignature) event triggers when a signature is removed.

- Event arguments: [RemoveSignatureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/removeSignatureEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onRemoveSignature(args: any): void {
    console.log(`Signature removed from page ${args.bounds}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (removeSignature)="onRemoveSignature($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#resizesignature) event triggers when a signature is resized.

- Event arguments: [ResizeSignatureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/resizeSignatureEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onResizeSignature(args: any): void {
    console.log(`Signature resized on page ${args.currentPosition}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (resizeSignature)="onResizeSignature($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## resourcesLoaded

The [resourcesLoaded](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#resourcesloaded) event triggers after the viewer's required resources are loaded.

- Event arguments: `void`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onResourcesLoaded(): void {
    console.log('PDFium resources loaded.');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (resourcesLoaded)="onResourcesLoaded()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#signaturepropertieschange) event triggers when signature properties change.

- Event arguments: [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onSignaturePropertiesChange(args: any): void {
    console.log(`Signature properties changed on page ${args.type}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (signaturePropertiesChange)="onSignaturePropertiesChange($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#signatureselect) event triggers when a signature is selected.

- Event arguments: [SignatureSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onSignatureSelect(args: any): void {
    console.log(`Signature selected on page ${args.signature}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (signatureSelect)="onSignatureSelect($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#signatureunselect) event triggers when a signature is unselected.

- Event arguments: [SignatureUnselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onSignatureUnselect(args: any): void {
    console.log(`Signature unselected ${args.signature}`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (signatureUnselect)="onSignatureUnselect($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textsearchcomplete) event triggers when a text search completes.

- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSearchCompleteEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onTextSearchComplete(): void {
    console.log('Text search completed.');
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (textSearchComplete)="onTextSearchComplete()"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textsearchhighlight) event triggers when searched text is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSearchHighlightEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onTextSearchHighlight(args: any): void {
    console.log(`Search result ${args.bounds} highlighted.`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (textSearchHighlight)="onTextSearchHighlight($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textsearchstart) event triggers when a text search is initiated.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSearchStartEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onTextSearchStart(args: any): void {
    console.log(`Text search started for: "${args.searchText}"`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (textSearchStart)="onTextSearchStart($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textselectionend) event triggers when text selection is complete.

- Event arguments: [TextSelectionEndEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/textSelectionEndEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onTextSelectionEnd(args: any): void {
    console.log(`Text selection ended on page ${args.pageIndex}.`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (textSelectionEnd)="onTextSelectionEnd($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#textselectionstart) event triggers when text selection is initiated.

- Event arguments: `TextSelectionStartEventArgs`.

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onTextSelectionStart(args: any): void {
    console.log(`Text selection started on page ${args.pageIndex}.`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (textSelectionStart)="onTextSelectionStart($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

## thumbnailClick

The [thumbnailClick](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#thumbnailclick) event triggers when a thumbnail is clicked.

- Event arguments: [ThumbnailClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/thumbnailClickEventArgs).

Example:

```ts
// app.ts
import { Component } from '@angular/core';
import {
  ToolbarService,
  MagnificationService,
  NavigationService,
  LinkAnnotationService,
  ThumbnailViewService,
  BookmarkViewService,
  TextSelectionService,
  AnnotationService,
  FormDesignerService,
  FormFieldsService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  providers: [
    ToolbarService,
    MagnificationService,
    NavigationService,
    LinkAnnotationService,
    ThumbnailViewService,
    BookmarkViewService,
    TextSelectionService,
    AnnotationService,
    FormDesignerService,
    FormFieldsService,
    PageOrganizerService
  ]
})
export class AppComponent {
  public documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public onThumbnailClick(args: any): void {
    console.log(`Thumbnail clicked for page index ${args.pageNumber}.`);
  }
}
```

```html
<!-- app.html -->
<ejs-pdfviewer
  id="pdfViewer"
  [documentPath]="documentPath"
  [resourceUrl]="resourceUrl"
  (thumbnailClick)="onThumbnailClick($event)"
  style="height: 600px"
>
</ejs-pdfviewer>
```

> Tip: For annotation and signature-specific events and arguments, see the dedicated Annotations Events topic.

See also:

- [Annotation events](./annotation/annotation-event)
- [Form field events](./form-designer/form-field-events)
- [Organize PDF events](./organize-pdf/organize-pdf-events)
