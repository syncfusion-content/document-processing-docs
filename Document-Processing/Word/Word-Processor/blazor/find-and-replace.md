---
layout: post
title: Find and Replace in Blazor DocumentEditor Component | Syncfusion
description: Checkout and learn here all about Find and Replace in Syncfusion Blazor DocumentEditor component and more.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Find and Replace in Blazor DocumentEditor Component

In long documents, it may be necessary to search for specific text and replace it with the desired content. This Word processor (DocumentEditor) provides a built-in navigation pane like Microsoft Word on the left of the editor.

The search box at the top of the navigation pane can be used to find all instances of a specific word or phrase. Entering a word in the search box and performing a search highlights all occurrences in the document, which are then displayed in the pane. Clicking a search result moves the cursor directly to that location in the document.

The navigation pane can be opened using the `Ctrl+F` shortcut key and closed using the `ESC` key.

## Show or hide navigation pane

The visibility of the navigation pane can be toggled programmatically using the `ShowOptionsPane()` method.

```cshtml
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="OpenOptionsPane">OpenOptionsPane</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar=true></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected void OpenOptionsPane(object args)
    {
        container.DocumentEditor.OpenOptionsPane();
    }
}
```

## Search

You can invoke the search or find text functionality programmatically using the `FindAll()` method. Also, you can customize the search operation with options such as “**match case**” and “**whole words only**”. The following code example explains how to perform text search without any search options.

```cshtml
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="FindAll">Find All</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar=true></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void FindAll(object args)
    {
        await container.DocumentEditor.Search.FindAllAsync("Some text", FindOption.None);
    }
}
```

You can refer to our [Blazor Word Processor](https://www.syncfusion.com/blazor-components/blazor-word-processor) feature tour page for its groundbreaking feature representations. You can also explore our [Blazor Word Processor example](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities) to know how to render and configure the document editor.
