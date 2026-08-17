---
layout: post
title: Bookmark in ASP.NET MVC DOCX Editor Component | Syncfusion
description: Learn here all about Bookmark in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Bookmark
documentation: ug
---


# Bookmarks in ASP.NET MVC Document Editor Component

A bookmark is a powerful tool that helps to mark a place in the document that can be found again easily. You can enter many bookmarks in the document and give each one a unique name to identify them easily.

[ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) provides a built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using the built-in hyperlink dialog. You can also delete bookmarks from a document.

N>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore. Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for the table of contents.

## Add a bookmark

Using the [`insertBookmark`] method, a bookmark can be added to the selected text.

```csharp
container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select a bookmark

You can select the bookmark in the document using the [`selectBookmark`] method by providing the bookmark name to select as shown in the following code snippet.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1", true);
```

N> The second parameter is optional and it denotes whether to exclude the bookmark start and end from the selection. If true, excludes the bookmark start and end from the selection.

## Delete a bookmark

You can delete a bookmark in the document using the [`deleteBookmark`] method as shown in the following code snippet.

```csharp
container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get bookmarks from document

You can get all the bookmarks in the document using the [`getBookmarks`] method as shown in the following code snippet.

```csharp
container.documentEditor.getBookmarks(false);
```

N> The parameter denotes whether to include hidden bookmarks. If false, it ignores hidden bookmarks.

## Get bookmarks from selection

You can get bookmarks in the current selection in the document using the [`getBookmarks`] method as shown in the following code snippet.

```csharp
container.documentEditor.selection.getBookmarks(false);
```

## Replace bookmark content

You can replace bookmark content without removing the bookmark start and end for backtracking the bookmark content.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1", true);
container.documentEditor.editor.insertText('Hello World')
```

You can replace content by removing the bookmark start and end, thus the bookmark content can't be tracked in the future.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1");
container.documentEditor.editor.insertText('Hello World')
```

## Show or hide bookmark

You can show or hide the square brackets around bookmarked items in the Document Editor component.

The following example code illustrates how to show or hide square brackets around bookmarked items.

```csharp
container.documentEditorSettings.showBookmarks = true;
```

## Bookmark dialog

The following example shows how to open the bookmark dialog in the Document Editor.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/bookmark-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/bookmark-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Online Demo

Explore how to insert and manage bookmarks in Word documents using the ASP.NET MVC Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/hyperlinksandbookmarks#/tailwind3).

## See Also

* [Feature modules](./feature-module)
* [Bookmark dialog](./dialog#bookmark-dialog)
