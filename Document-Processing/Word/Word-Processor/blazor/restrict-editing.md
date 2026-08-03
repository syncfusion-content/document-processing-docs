---
layout: post
title: Restrict editing in Blazor DOCX Editor Component | Syncfusion
description: Learn how to restrict editing and protect documents in the Syncfusion Blazor Document Editor component.
platform: document-processing
control: Document Editor
documentation: ug
---

# Restrict editing in Blazor Document Editor Component

This [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) provides 2 types of restriction for editing:
* Read-only: Allows all the users to view the document contents but not make changes to it.
* Allows changes to certain portion of the document: Allows the users to edit to certain portion of the document.

## Read only

The following code example shows how to restrict or protect editing for the entire content, making it read-only.

```cshtml
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="ReadOnly">Read Only</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar="true"></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    public void ReadOnly(object args)
    {
        container.RestrictEditing = true;
    }
}
```

## Protect document with editable region

Users can select a specific section and mark it as an editable region, allowing modification only in that part. The rest of the document remains protected from any changes.

### Insert editable region

Use the [`InsertEditingRegionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_InsertEditingRegionAsync) method to mark specific paragraphs as editable. This allows you to control editing by granting access to all users.

The following example shows how to insert an editable region.

```cshtml

container.DocumentEditor.Editor.InsertEditingRegionAsync();
 
```
 
### Highlight color for editable region
 
The [`UserColor`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_UserColor) property can be used to highlight the editable region of the current user.
 
The following code example demonstrates how to set the `UserColor`.
 
```cshtml
 
<SfDocumentEditorContainer UserColor="#FFFF00"></SfDocumentEditorContainer>
 
```
 
### Enable or disable editable region highlighting
 
The [`HighlightEditableRanges`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_HighlightEditableRanges) property can be used to toggle the highlighting of editable regions.
 
The following code example demonstrates how to enable or disable editable region highlighting.
 
```cshtml

<SfDocumentEditorContainer DocumentEditorSettings="@settings"></SfDocumentEditorContainer>

@code {

  DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { HighlightEditableRanges = false };  
} 
 
```

## Online Demo

Explore how to restrict editing and protect Word documents using the Blazor Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/document-protection?theme=fluent2).
