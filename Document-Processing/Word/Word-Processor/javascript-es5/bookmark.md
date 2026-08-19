---
layout: post
title: Bookmarks in JavaScript DOCX Editor | Syncfusion
description: The bookmark feature in JavaScript DOCX Editor lets users add, manage, and navigate bookmarks for quick access to specific document sections.
platform: document-processing
control: Bookmark 
documentation: ug
domainurl: ##DomainURL##
---

# Bookmarks in JavaScript DOCX Editor

Bookmark is a powerful tool that helps you to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using built-in hyperlink dialog. You can also delete bookmarks from a document.

>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore.
>Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add bookmark

Using [`insertBookmark`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#insertbookmark) method, Bookmark can be added to the selected text.

```javascript
this.container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using [`selectBookmark`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#selectbookmark) method by providing Bookmark name to select as shown in the following code snippet.

```javascript
this.container.documentEditor.selection.selectBookmark("Bookmark1", true);
```

N> Second parameter is optional parameter and it denotes is exclude bookmark start and end from selection. If true, excludes bookmark start and end from selection.

## Delete Bookmark

You can delete a bookmark in the document using [`deleteBookmark`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/editor#deletebookmark) method as shown in the following code snippet.

```javascript
this.container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark from document

You can get all the bookmarks in the document using the [`getBookmarks`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#getbookmarks) method on the `DocumentEditor` instance as shown in the following code snippet.

```javascript
this.container.documentEditor.getBookmarks(false);
```

N> The boolean parameter denotes whether to include hidden bookmarks. If false, hidden bookmarks are ignored.

## Get Bookmark from selection

You can get bookmarks in the current selection in the document using [`getBookmarks`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#getbookmarks) method on the `Selection` instance as shown in the following code snippet.

```javascript
this.container.documentEditor.selection.getBookmarks(false);
```

## Show or Hide bookmark

You can show or hide the bookmark indicators around bookmarked items in Document Editor component.

The following example code illustrates how to show or hide the bookmark indicators around bookmarked items.

```javascript
this.container.documentEditor.documentEditorSettings.showBookmarks = true;
```

## Replace bookmark content

### Preserve the bookmark while replacing content

When you pass `true` for the `excludeStartEnd` parameter in `selectBookmark`, the bookmark start and end markers are preserved. The subsequent `insertText` call replaces only the content between the markers, so the bookmark remains intact and can be tracked later.

```javascript
this.container.documentEditor.selection.selectBookmark("Bookmark1", true);
this.container.documentEditor.editor.insertText('Hello World');
```

### Remove the bookmark while replacing content

When you omit the `excludeStartEnd` parameter (or pass `false`), the bookmark start and end markers are included in the selection. The subsequent `insertText` call replaces both the content and the markers, so the bookmark is removed and cannot be tracked later.

```javascript
this.container.documentEditor.selection.selectBookmark("Bookmark1");
this.container.documentEditor.editor.insertText('Hello World');
```

## Bookmark Dialog

The following example shows how to open bookmark dialog in Document Editor.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/dialog-cs1" %}

## Online Demo

Explore how to insert and manage bookmarks in Word documents using the JavaScript (ES5) Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/tailwind3/document-editor/links-and-bookmarks.html).

## See Also

* [Feature modules](./feature-module)
* [Bookmark dialog](./dialog#bookmark-dialog)
