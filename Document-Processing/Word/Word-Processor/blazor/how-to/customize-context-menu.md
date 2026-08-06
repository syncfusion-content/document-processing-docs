---
layout: post
title: Customize Context Menu in Blazor DOCX Editor | Syncfusion
description: Learn how to customize the context menu in the Syncfusion Blazor Document Editor component, with real-time scenarios like creating a simple word processor.
platform: document-processing
control: Document Editor
documentation: ug
---

# Context Menu Customization in Blazor Document Editor Component

## How to customize the context menu in the Document Editor

The [`Blazor DOCX Editor`](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component allows you to customize added custom options and show or hide the default context menu. Use the [`AddCustomMenu()`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.ContextMenuModule.html#Syncfusion_Blazor_DocumentEditor_ContextMenuModule_AddCustomMenu_System_Collections_Generic_List_Syncfusion_Blazor_DocumentEditor_MenuItemModel__System_Boolean_System_Boolean_) method to add custom options, and define custom actions using the [`ContextMenuItemSelected`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorEvents.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorEvents_ContextMenuItemSelected) event.

### Add a custom option

The following code shows how to add a custom option in the context menu.

```csharp
@using Syncfusion.Blazor.DocumentEditor
@inject Microsoft.AspNetCore.Components.NavigationManager UriHelper
@inject IJSRuntime JSRuntime

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
            string selectedText = await container.DocumentEditor.Selection.GetTextAsync();
            string url = "http://google.com/search?q=" + selectedText;
            await JSRuntime.InvokeAsync<object>("open", new object[2] { url, "_blank" });
        }
    }
}
```

### Customize a custom option in the context menu

The Blazor Document Editor component allows you to customize added custom options and show or hide the default context menu.

#### Hide default context menu items

The following code shows how to hide the default context menu and add a custom option in the context menu.

```csharp
<SfDocumentEditorContainer @ref="container" Height="590px">
    <DocumentEditorContainerEvents Created="OnCreated"></DocumentEditorContainerEvents>
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
        documentEditor.ContextMenu.AddCustomMenu(contentMenuItem, false, false);
    }
}
```

## Online demo

Explore how to customize the context menu in the Blazor Document Editor for working with Word documents in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/custom-context-menu?theme=fluent2).