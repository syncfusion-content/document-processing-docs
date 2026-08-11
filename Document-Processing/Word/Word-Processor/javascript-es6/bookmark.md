---
layout: post
title: Bookmark in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about Bookmark in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Bookmark
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark in JavaScript (ES6) Document Editor control

Bookmark is a powerful tool that helps you mark a place in the document so you can find it again easily. You can add multiple bookmarks in the document and give each one a unique name to identify easily.

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides a built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using the built-in hyperlink dialog. You can also delete bookmarks from a document.

N> 1. Bookmark names must begin with a letter. They can include both numbers and letters, but not spaces. Use an underscore to separate the words.
N> 2. Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for a table of contents.

## Add bookmark

Using the [`insertBookmark`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#insertbookmark) method, a bookmark can be added to the selected text.

```ts
container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select a bookmark in the document using the [`selectBookmark`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#selectbookmark) method by providing the bookmark name to select as shown in the following code snippet.

```ts
container.documentEditor.selection.selectBookmark("Bookmark1", true);
```

N> The second parameter is optional and denotes whether to exclude the bookmark start and end from the selection. When true, the bookmark start and end are excluded from the selection.

## Delete Bookmark

You can delete a bookmark in the document using the [`deleteBookmark`](https://ej2.syncfusion.com/documentation/api/document-editor/editor#deletebookmark) method as shown in the following code snippet.

```ts
container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark from document

You can get all the bookmarks in the document using the [`getBookmarks`](https://ej2.syncfusion.com/documentation/api/document-editor#getbookmarks) method as shown in the following code snippet.

```ts
container.documentEditor.getBookmarks(false);
```

N> The parameter denotes whether to include hidden bookmarks. When false, hidden bookmarks are ignored.

## Get Bookmark from selection

You can get the bookmarks in the current selection in the document using the [`getBookmarks`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#getbookmarks) method as shown in the following code snippet.

```ts
container.documentEditor.selection.getBookmarks(false);
```

N> The parameter denotes whether to include hidden bookmarks. When false, hidden bookmarks are ignored.

## Replace bookmark content

You can replace a bookmark's content without removing the bookmark start and end for backtracking the bookmark content.

```ts
container.documentEditor.selection.selectBookmark("Bookmark1", true);
container.documentEditor.editor.insertText('Hello World');
```

You can replace content by removing the bookmark start and end, so the bookmark content can't be tracked in the future.

```ts
container.documentEditor.selection.selectBookmark("Bookmark1");
container.documentEditor.editor.insertText('Hello World');
```

## Show or Hide bookmark

You can show or hide square brackets around bookmarked items in the Document Editor component.

The following example code illustrates how to show or hide square brackets around bookmarked items.

```ts
container.documentEditorSettings.showBookmarks = true;
```

## Bookmark Dialog

The following example shows how to open the Bookmark dialog in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/dialog-cs1" %}

## Online Demo

Explore how to insert and manage bookmarks in Word documents using the JavaScript DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript/#/material3/document-editor/links-and-bookmarks.html).

## See Also

* [Feature modules](./feature-module)
* [Bookmark dialog](./dialog#bookmark-dialog)
