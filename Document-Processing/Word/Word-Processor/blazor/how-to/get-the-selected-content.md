---
layout: post
title: Get Selected Content in Blazor DOCX Editor Component | Syncfusion
description: Learn how to get the selected content from the Syncfusion Blazor Document Editor component as plain text or SFDT (rich text) and much more.
platform: document-processing
control: Document Editor
documentation: ug
---

# How to get the selected content in Blazor Document Editor component

You can get the selected content from the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component as plain text or SFDT (rich text).

## Get the selected content as plain text

You can use the [`GetTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetTextAsync) API to get the selected content as plain text from the Blazor Document Editor component.

The following example code illustrates how to add a "Search in Google" option to the context menu for the selected text.

```csharp
@using Syncfusion.Blazor.DocumentEditor
@inject Microsoft.AspNetCore.Components.NavigationManager UriHelper
@inject IJSRuntime JSRuntime;

<SfDocumentEditorContainer @ref="container" Height="590px">
    <DocumentEditorContainerEvents Created="OnCreated" ContextMenuItemSelected="OnContentMenuSelect"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public void OnCreated(object args)
    {
        SfDocumentEditor documentEditor = container.DocumentEditor;
        List<Syncfusion.Blazor.DocumentEditor.MenuItemModel> contentMenuItem = new List<Syncfusion.Blazor.DocumentEditor.MenuItemModel>
        {
           new Syncfusion.Blazor.DocumentEditor.MenuItemModel { Text="Search In Google", Id= "search_in_google", IconCss="e-icons e-de-ctnr-find" }
        };
        documentEditor.ContextMenu.AddCustomMenu(contentMenuItem, true, false);
    }

    public async Task OnContentMenuSelect(CustomContentMenuEventArgs args)
    {
        if (args.Id.EndsWith("search_in_google"))
        {
            // To get the selected content as plain text
            string selectedText = await container.DocumentEditor.Selection.GetTextAsync();
            string url = "http://google.com/search?q=" + selectedText;
            await JSRuntime.InvokeAsync<object>("open", new object[2] { url, "_blank" });
        }
    }
}
```

The following custom options can be added using this API:

* Save or export the selected text as a text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in the context menu and replace with the selected synonym using the setter method of the same API.

## Get the selected content as SFDT (rich text)

You can use the [`GetSfdtAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetSfdtAsync) API to get the selected content as SFDT (rich text) from the Blazor Document Editor component.

The following example code illustrates how to get the content of a bookmark and export it as SFDT.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true Height="590px">
    <DocumentEditorContainerEvents Created="OnLoad"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    string sfdtString;

    public async void OnLoad(object args)
    {
        // To insert text at the cursor position
        await container.DocumentEditor.Editor.InsertTextAsync("Document Editor");
        // To select all the content in the document
        await container.DocumentEditor.Selection.SelectAllAsync();
        // Insert bookmark to selected content
        await container.DocumentEditor.Editor.InsertBookmarkAsync("Bookmark1");
        // Select the bookmark
        await container.DocumentEditor.Selection.SelectBookmarkAsync("Bookmark1");
        // To get the selected content as SFDT
        string selectedContent = await container.DocumentEditor.Selection.GetSfdtAsync();
        // Insert the SFDT content at the cursor position using the PasteAsync API
        await container.DocumentEditor.Editor.PasteAsync(selectedContent);
    }
}
```

The following custom options can be added using this API:

* Save or export the selected content as an SFDT file.
* Get the content of a bookmark in a Word document as SFDT by selecting a bookmark using the [`SelectBookmarkAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectBookmarkAsync_System_String_) API.
* Create template content that can be inserted into multiple documents at the cursor position using the [`PasteAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_PasteAsync_System_String_System_Nullable_Syncfusion_Blazor_DocumentEditor_PasteOptions__) API.