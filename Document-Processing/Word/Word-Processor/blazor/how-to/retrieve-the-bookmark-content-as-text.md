---
layout: post
title: Retrieve bookmark content in Blazor DocumentEditor | Syncfusion
description: Learn how to retrieve the whole document and bookmark content as text from the Syncfusion Blazor Document Editor and much more.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Retrieve the document and bookmark content in Blazor Document Editor

## How to retrieve the whole document and bookmark content as text in Blazor Document Editor

The Blazor Document Editor component allows retrieving bookmark or whole document content as plain text and SFDT (rich text).

## Get the bookmark content as plain text

Use the [`SelectBookmarkAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectBookmarkAsync_System_String_) API to navigate to the bookmark and use [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the bookmark content as plain text from Blazor Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text in cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To select all the content in document
        await container.DocumentEditor.Selection.SelectAllAsync();
        // Insert bookmark to selected content
        await container.DocumentEditor.Editor.InsertBookmarkAsync("Bookmark1");
        // Provide your bookmark name to navigate to specific bookmark
        await container.DocumentEditor.Selection.SelectBookmarkAsync("Bookmark1");
        // To get the selected content as text
        string selectedContent =await container.DocumentEditor.Selection.GetTextAsync();
    }
}
```

To get the bookmark content as SFDT (rich text), check this [`link`](./get-the-selected-content#get-the-selected-content-as-sfdt-rich-text).

## Get the whole document content as text

The [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API can be used to get the whole document content as plain text from Blazor Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text in cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To select all the content in document
        await container.DocumentEditor.Selection.SelectAllAsync();
        // To get the selected content as text
        string selectedContent = await container.DocumentEditor.Selection.GetTextAsync();
    }
}
```

## Get the whole document content as SFDT(rich text)

The [`SerializeAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_SerializeAsync) API is used to get the whole document content as an SFDT string from Blazor Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text in cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To get the content as SFDT
        string selectedContent = await container.DocumentEditor.SerializeAsync();
    }
}
```

## Get the header content as text

Use the [`GoToHeaderAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GoToHeaderAsync) API to navigate the selection to the header and then use the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        await container.DocumentEditor.Selection.GoToHeaderAsync();
        // To insert text in cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To select all the content in header
        await container.DocumentEditor.Selection.SelectAllAsync();
        // To get the selected content as text
        string selectedContent = await container.DocumentEditor.Selection.GetTextAsync();
    }
}
```

Similarly, the [`GoToFooterAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GoToFooterAsync) API can be used to navigate the selection to the footer, followed by the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the content as plain text.