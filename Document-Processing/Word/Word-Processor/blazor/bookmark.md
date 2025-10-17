---
layout: post
title: Bookmarks in Blazor DocumentEditor Component | Syncfusion
description: Learn how to add, navigate, and manage bookmarks in the Syncfusion Blazor Document Editor component both through the UI and programmatically.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Bookmarks in Blazor DocumentEditor Component

A bookmark is a powerful tool that marks a specific place in a document so you can easily find it again. You can insert multiple bookmarks in a document and give each one a unique name for easy identification.

The [Blazor Word Processor](https://www.syncfusion.com/blazor-components/blazor-word-processor) (Document Editor) provides two ways to manage bookmarks: through a built-in dialog or programmatically using API methods. Once a bookmark is added, you can jump to its location or create hyperlinks to it.

N>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore. Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

The bookmark dialog can be opened using the Bookmark option in the toolbar. For more details on bookmark functionality, refer to the [`Blazor Word Processor - Bookmark`](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/hyperlinks-and-bookmarks) example.


## Add a bookmark

Use the [`InsertBookmarkAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_InsertBookmarkAsync_System_String_) method to add a bookmark to the currently selected text.

```csharp
await container.DocumentEditor.Editor.InsertBookmarkAsync("Bookmark1");
```

## Navigate to a bookmark

Use the [`SelectBookmarkAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectBookmarkAsync_System_String_) method to navigate to and select a bookmark by its name.

```csharp
await container.DocumentEditor.Selection.SelectBookmarkAsync("Bookmark1");
```

## Delete a Bookmark

Use the [`DeleteBookmarkAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_DeleteBookmarkAsync_System_String_) method to delete a bookmark by its name.

```csharp
await container.DocumentEditor.Editor.DeleteBookmarkAsync("Bookmark1");
```

## Get all bookmarks

Use the [`GetBookmarksAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetBookmarksAsync_System_Boolean_) method to retrieve a list of all bookmarks in the document.

```csharp
// Get all bookmarks, including hidden ones.
await container.DocumentEditor.Selection.GetBookmarksAsync(true);
```

N> The boolean parameter of `GetBookmarksAsync` specifies whether to include hidden bookmarks in the result. If `false`, hidden bookmarks are excluded.