---
layout: post
title: How to Customize Toolbar in Blazor DOCX Editor | Syncfusion
description: Customize the toolbar in Syncfusion® Blazor DOCX Editor by adding, removing, showing, hiding, enabling, and disabling toolbar items.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# How to Customize Toolbar in Blazor DOCX Editor

## Customize the existing toolbar in the Document Editor Container

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component allows you to customize (add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can be defined by the [`CustomToolbarItemModel`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.CustomToolbarItemModel.html) and with existing items in the [`ToolbarItems`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_ToolbarItems) property. The click action for newly added items can be defined in the [`OnToolbarClick`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorContainerEvents.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorContainerEvents_OnToolbarClick) event.
* Show, Hide - Existing items can be shown or hidden using the [`ToolbarItems`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_ToolbarItems) property. Pre-defined toolbar items are available with the [`ToolbarItem`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.ToolbarItem.html).
* Enable, Disable - Toolbar items can be enabled or disabled using the [`EnableItemAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.ToolbarModule.html#Syncfusion_Blazor_DocumentEditor_ToolbarModule_EnableItemAsync_System_Int32_System_Boolean_).

```csharp
<SfDocumentEditorContainer @ref="container" EnableToolbar=true ToolbarItems="@Items">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    string[] Items = new string[4] { "New", "Undo", "Redo", "Comments" };
}
```

### How to add a new custom toolbar item in the Document Editor Container

The following code example illustrates how to add a new custom toolbar item in the Document Editor Container.

```csharp
<SfDocumentEditorContainer @ref="container" EnableToolbar=true ToolbarItems="@Items">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    List<Object> Items = new List<Object> { new CustomToolbarItemModel() { Id = "save", Text = "Save" }, "New", "Undo", "Redo", "Separator", "Image", "Table", "Hyperlink", "Bookmark", "TableOfContents", "Separator", "Header", "Footer", "PageSetup", "PageNumber", "Break", "InsertFootnote", "InsertEndnote", "Separator", "Find", "Separator", "Comments", "TrackChanges", "Separator", "LocalClipboard", "RestrictEditing", "Separator", "FormFields", "UpdateFields" };
}
```

N> The default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields']`.

## Online Demo

Explore how to customize the toolbar in the Blazor DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/toolbar-customization?theme=fluent2).
