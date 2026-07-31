---
layout: post
title: Disable Optimized Text Measuring in Blazor DOCX Editor | Syncfusion
description: Learn how to disable optimized text measuring in Syncfusion Blazor Document Editor component and much more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Disable optimized text measuring in Blazor DOCX Editor component

Starting from v19.3.0.x, the accuracy of text size measurements in [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) is improved to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [`EnableOptimizedTextMeasuring`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_EnableOptimizedTextMeasuring) in Document Editor settings.  

If you want the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions, you can disable the optimized text measuring feature by setting `false` to the [`EnableOptimizedTextMeasuring`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_EnableOptimizedTextMeasuring) property of the Blazor Document Editor component.

## Disable optimized text measuring in Document Editor Container instance

The following example code illustrates how to disable the optimized text measuring feature in the [`Document Editor Container`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html) instance.

```csharp

@using Syncfusion.Blazor.DocumentEditor;

<SfDocumentEditorContainer @ref="container" EnableToolbar=true DocumentEditorSettings="settings"> 
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    // Disable optimized text measuring feature
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { EnableOptimizedTextMeasuring = false };
}
```

## Disable optimized text measuring in Document Editor instance

The following example code illustrates how to disable the optimized text measuring feature in the [`Document Editor`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html) instance.

```csharp

@using Syncfusion.Blazor.DocumentEditor;

<SfDocumentEditor IsReadOnly="false" DocumentEditorSettings="settings">
</SfDocumentEditor>

@code {
    // Disable optimized text measuring feature
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { EnableOptimizedTextMeasuring = false };
}
```