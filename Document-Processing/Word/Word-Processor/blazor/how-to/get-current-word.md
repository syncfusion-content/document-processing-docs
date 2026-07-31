---
layout: post
title: Get Word and Paragraph in Blazor DOCX Editor | Syncfusion
description: Learn how to select and retrieve the current word and paragraph in the Syncfusion Blazor Document Editor component and much more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Get word and paragraph in Blazor Document Editor

The [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component allows you to get the current word or paragraph content as plain text or SFDT (rich text).

## Select and get the word at the current cursor position

Use the [`SelectCurrentWordAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectCurrentWordAsync_System_Boolean_) API in the selection module to select the current word at the cursor position. Then, use the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the selected content as plain text from the Blazor Document Editor component.

The following example code illustrates how to select and get the current word as plain text.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document Editor");
        // To select the current word in the document
        await container.DocumentEditor.Selection.SelectCurrentWordAsync();
        // To get the selected content as text
        string selectedContent = await container.DocumentEditor.Selection.GetTextAsync();
    }
}
```

To get the bookmark content as SFDT (rich text), check this [`link`](./get-the-selected-content).

## Select and get the paragraph at the current cursor position

You can use the [`SelectParagraphAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectParagraphAsync) API in the selection module to select the current paragraph at the cursor position, and use the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API or the [`GetSfdtAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetSfdtAsync) API to get the selected content as plain text or SFDT from the Blazor Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document Editor");
        // To select the current paragraph in the document
        await container.DocumentEditor.Selection.SelectParagraphAsync();
        // To get the selected content as SFDT
        string selectedContent = await container.DocumentEditor.Selection.GetSfdtAsync();
    }
}
```