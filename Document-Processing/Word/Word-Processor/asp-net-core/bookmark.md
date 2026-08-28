---
layout: post
title: Bookmarks in ASP.NET CoreDOCX Editor | Syncfusion
description: The bookmark feature in ASP.NET Core DOCX Editor lets users add, manage, and navigate bookmarks for quick access to specific document sections.
platform: document-processing
control: Bookmark
documentation: ug
---


# Bookmarks in ASP.NET Core DOCX Editor

Bookmark is a powerful tool that helps to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides a built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using the built-in hyperlink dialog. You can also delete bookmarks from a document.

N>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore. Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add bookmark

Using the [`insertBookmark`] method, bookmark can be added to the selected text.

```csharp
container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using the [`selectBookmark`] method by providing the bookmark name to select as shown in the following code snippet.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1", true);
```

N> The second parameter is optional and it denotes whether to exclude the bookmark start and end from the selection. If true, excludes bookmark start and end from selection.

## Delete Bookmark

You can delete the bookmark in the document using the [`deleteBookmark`] method as shown in the following code snippet.

```csharp
container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark from Document

You can get all the bookmarks in the document using the [`getBookmarks`] method on the `DocumentEditor` instance as shown in the following code snippet.

```csharp
container.documentEditor.getBookmarks(false);
```

N> The boolean parameter denotes whether to include hidden bookmarks. If false, hidden bookmarks are ignored.

## Get Bookmark from Selection

You can get bookmarks in the current selection in the document using the [`getBookmarks`] method on the `Selection` instance as shown in the following code snippet.

```csharp
container.documentEditor.selection.getBookmarks(false);
```

## Show or Hide Bookmark

You can show or hide the bookmark indicators around bookmarked items in DOCX Editor component.

The following example code illustrates how to show or hide the bookmark indicators around bookmarked items.

```csharp
container.documentEditor.documentEditorSettings.showBookmarks = true;
```

## Replace Bookmark Content

### Preserve the Bookmark While Replacing Content

When you pass `true` for the `excludeStartEnd` parameter in `selectBookmark`, the bookmark start and end markers are preserved. The subsequent `insertText` call replaces only the content between the markers, so the bookmark remains intact and can be tracked later.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1", true);
container.documentEditor.editor.insertText("Hello World");
```

### Remove the Bookmark While Replacing Content

When you omit the `excludeStartEnd` parameter (or pass `false`), the bookmark start and end markers are included in the selection. The subsequent `insertText` call replaces both the content and the markers, so the bookmark is removed and cannot be tracked later.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1");
container.documentEditor.editor.insertText("Hello World");
```

## Bookmark Dialog

The following example shows how to open the bookmark dialog in DOCX Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/bookmark-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/bookmark-dialog/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to insert and manage bookmarks in Word documents using the ASP.NET Core DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/hyperlinksandbookmarks#/tailwind3).

## See Also

* [Feature modules](../asp-net-core/feature-module)
* [Bookmark dialog](../asp-net-core/dialog#bookmark-dialog)
