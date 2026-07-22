---
layout: post
title: Bookmark in React Document editor component | Syncfusion
description: Learn here all about Bookmark in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Bookmark
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark in React Document editor component

Bookmark is a powerful tool that helps you to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using built-in hyperlink dialog. You can also delete bookmarks from a document.

>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore.
>Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add a Bookmark

Use the [`insertBookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#insertbookmark) method to add a bookmark to the selected text.

>The following code snippet assumes that `container` is a reference to the `DocumentEditorContainerComponent` instance declared in your React component.

```typescript
this.container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using [`selectBookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#selectbookmark) method by providing the bookmark name to select as shown in the following code snippet.

```typescript
this.container.documentEditor.selection.selectBookmark("Bookmark1", true);
```

>Note: The second parameter is optional and it denotes whether to exclude the bookmark start and end from the selection. If true, excludes bookmark start and end from selection.

## Delete Bookmark

You can delete a bookmark in the document using [`deleteBookmark`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#deletebookmark) method as shown in the following code snippet.

```typescript
this.container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark from Document

You can get all the bookmarks in the document using the [`getBookmarks`](https://ej2.syncfusion.com/react/documentation/api/document-editor#getbookmarks) method on the `DocumentEditor` instance as shown in the following code snippet.

```typescript
this.container.documentEditor.getBookmarks(false);
```

>Note: The boolean parameter denotes whether to include hidden bookmarks. If false, hidden bookmarks are ignored.

## Get Bookmark from Selection

You can get bookmarks in the current selection in the document using the [`getBookmarks`](https://ej2.syncfusion.com/react/documentation/api/selection#getbookmarks) method on the `Selection` instance as shown in the following code snippet.

```typescript
this.container.documentEditor.selection.getBookmarks(false);
```

## Show or Hide Bookmark

You can show or hide square brackets around bookmarked items in Document editor component.

The following example code illustrates how to show or hide square brackets around bookmarked items.

```typescript
this.container.documentEditor.documentEditorSettings.showBookmarks = true;
```

## Replace Bookmark Content

### Preserve the Bookmark While Replacing Content

When you pass `true` for the `excludeStartEnd` parameter in `selectBookmark`, the bookmark start and end markers are preserved. The subsequent `insertText` call replaces only the content between the markers, so the bookmark remains intact and can be tracked later.

```typescript
this.container.documentEditor.selection.selectBookmark("Bookmark1", true);
this.container.documentEditor.editor.insertText('Hello World');
```

### Remove the Bookmark While Replacing Content

When you omit the `excludeStartEnd` parameter (or pass `false`), the bookmark start and end markers are included in the selection. The subsequent `insertText` call replaces both the content and the markers, so the bookmark is removed and cannot be tracked later.

```typescript
this.container.documentEditor.selection.selectBookmark("Bookmark1");
this.container.documentEditor.editor.insertText('Hello World');
```

## Bookmark Dialog

The following example shows how to open the bookmark dialog in document editor.

Before you start, install the [`@syncfusion/ej2-react-documenteditor`](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor) package.

The following example shows how to open bookmark dialog in document editor.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  SfdtExport,
  Selection,
  Editor,
  BookmarkDialog,
} from '@syncfusion/ej2-react-documenteditor';
import { createRoot } from 'react-dom/client';

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, BookmarkDialog);
let documenteditor;
function App() {
  return (
    <div>
      <button onClick={showBookmarkDialog}>Dialog</button>
      <DocumentEditorComponent
        id="container"
        height={'330px'}
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enableSelection={true}
        enableEditor={true}
        enableSfdtExport={true}
        enableBookmarkDialog={true}
      />
    </div>
  );
  function showBookmarkDialog() {
    //Open Bookmark dialog.
    documenteditor.documentEditor.showDialog('Bookmark');
  }
}
export default App;
const root = createRoot(document.getElementById('sample')!);
root.render(<App />);
```

## Online Demo

Explore how to insert and manage bookmarks in Word documents using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/links-and-bookmarks).

## See Also

* [Feature modules](./feature-module)
* [Bookmark dialog](./dialog#bookmark-dialog)
