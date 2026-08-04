---
layout: post
title: Page Numbers and Navigation in Blazor DOCX Editor | Syncfusion
description: Learn how to insert page numbers and navigate to a specific page from the Syncfusion Blazor Document Editor component and much more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Insert page number and navigate to page in Blazor Document Editor

You can insert a page number and navigate to a specific page in the [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component in the following ways.

## Insert page number

The [`InsertFieldAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_InsertFieldAsync_System_String_System_String_) API in the Editor module is used to insert the page number at the current position. By default, the page number will be inserted in Arabic number style.

N> Currently, the Document Editor has an option to insert a page number at the current cursor position.

The following example code illustrates how to insert a page number in the header.

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
        // To move the selection to the header
        await container.DocumentEditor.Selection.GoToHeaderAsync();
        // Insert page number at the current cursor position
        await container.DocumentEditor.Editor.InsertFieldAsync("PAGE \\* MERGEFORMAT", "1");
    }
}
```

## Get page count

The [`GetPageCountAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_GetPageCountAsync) API is used to get the total number of pages in the document.

The following example code illustrates how to get the number of pages in the document.

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
        // To get the total number of pages
        int pageCount = await container.DocumentEditor.GetPageCountAsync();
    }
}
```

## Navigate to a specific page

Use the [`GoToPageAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GoToPageAsync_System_Double_) API in the Selection module to move the selection to the start of the specified page number.

The following example code illustrates how to move the selection to a specific page.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public async void OnCreated(object args)
    {
        // To move the selection to page number 2
        await container.DocumentEditor.Selection.GoToPageAsync(2);
    }
}
```