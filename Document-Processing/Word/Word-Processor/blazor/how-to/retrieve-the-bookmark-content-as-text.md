---
layout: post
title: Retrieve Bookmark Content in Blazor DOCX Editor Component | Syncfusion
description: Learn how to retrieve document and bookmark content as text in the Syncfusion Blazor Document Editor component.
platform: document-processing
control: Document Editor
documentation: ug
---

# Retrieve the Document and Bookmark Content in Blazor Document Editor

The [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component allows retrieving the bookmark or whole document content as plain text and SFDT (rich text).

The [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component allows retrieving bookmark or whole document content as plain text and SFDT (rich text).

## Get the bookmark content as plain text

Use the [`SelectBookmarkAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectBookmarkAsync_System_String_) API to navigate to the bookmark and use [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the bookmark content as plain text from Blazor Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To select all the content in the document
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

To get the bookmark content as SFDT (rich text), see [Get the selected content as SFDT](./get-the-selected-content#get-the-selected-content-as-sfdt-rich-text).

## Get the Whole Document Content as Text

The [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API can be used to get the whole document content as plain text from the Blazor Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To select all the content in the document
        await container.DocumentEditor.Selection.SelectAllAsync();
        // To get the selected content as text
        string selectedContent = await container.DocumentEditor.Selection.GetTextAsync();
    }
}
```

## Get the Whole Document Content as SFDT (Rich Text)

The [`SerializeAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_SerializeAsync) API is used to get the whole document content as an SFDT string from the Blazor Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To get the content as SFDT
        string selectedContent = await container.DocumentEditor.SerializeAsync();
    }
}
```

## Get the Header Content as Text

Use the [`GoToHeaderAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GoToHeaderAsync) API to navigate the selection to the header and then use the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the content as plain text from the Blazor Document Editor component.

The following example code illustrates how to get the header content as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        await container.DocumentEditor.Selection.GoToHeaderAsync();
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document editor");
        // To select all the content in the header
        await container.DocumentEditor.Selection.SelectAllAsync();
        // To get the selected content as text
        string selectedContent = await container.DocumentEditor.Selection.GetTextAsync();
    }
}
```

Similarly, the [`GoToFooterAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GoToFooterAsync) API can be used to navigate the selection to the footer, followed by the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the content as plain text from the Blazor Document Editor component.