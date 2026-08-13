---
layout: post
title: Add save button in Blazor DOCX Editor Component | Syncfusion
description: Learn how to add a custom save button to the toolbar in the Syncfusion Blazor Document Editor component and much more.
platform: document-processing
control: Document Editor
documentation: ug
---
# Add save button in Blazor Document Editor toolbar

## Add a save button to the existing toolbar in the Document Editor Container

The [`Blazor DOCX Editor`](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.CustomToolbarItemModel.html) along with existing items in the [`ToolbarItems`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_ToolbarItems) property. The click action for the newly added item can be defined in the [`OnToolbarClick`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorContainerEvents.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorContainerEvents_OnToolbarClick) event.

```csharp
<SfDocumentEditorContainer @ref="container" EnableToolbar="true" ToolbarItems="@Items">
    <DocumentEditorContainerEvents OnToolbarClick="ToolbarClick"></DocumentEditorContainerEvents> 
</SfDocumentEditorContainer> 
 
@code { 
    SfDocumentEditorContainer container; 
    List<Object> Items = new List<Object> { "New","Open", new CustomToolbarItemModel() { Id = "save", Text = "Save", PrefixIcon = "e-save icon", TooltipText = "Save the Document" }, "Separator", "Undo", "Redo", "Separator", "Image", "Table", "Hyperlink", "Bookmark", "TableOfContents", "Separator", "Header", "Footer", "PageSetup", "PageNumber", "Break", "InsertFootnote", "InsertEndnote", "Separator", "Find", "Separator", "Comments", "TrackChanges", "Separator", "LocalClipboard", "RestrictEditing", "Separator", "FormFields", "UpdateFields" }; 

    private void ToolbarClick(ClickEventArgs args)
    {
        if (args.Item.Id == "save")
        {
            container.DocumentEditor.SaveAsync("sample", FormatType.Docx);
        }
    }
}
```

N> Default value of `ToolbarItems` is `["New", "Open", "Separator", "Undo", "Redo", "Separator", "Image", "Table", "Hyperlink", "Bookmark", "TableOfContents", "Separator", "Header", "Footer", "PageSetup", "PageNumber", "Break", "InsertFootnote", "InsertEndnote", "Separator", "Find", "Separator", "Comments", "TrackChanges", "Separator", "LocalClipboard", "RestrictEditing", "Separator", "FormFields", "UpdateFields"]`.
