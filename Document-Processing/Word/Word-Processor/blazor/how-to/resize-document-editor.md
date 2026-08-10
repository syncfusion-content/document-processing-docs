---
layout: post
title: Resizing the Blazor DOCX Editor Component | Syncfusion
description: Learn how to change the height and width of Syncfusion Blazor Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# How to Change the Height and Width of Blazor Document Editor Component

In this article, we are going to see how to change the height and width of the Document Editor.

## Change height of Document Editor

[`Blazor Document Editor`](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) component initially renders with a default height. You can change the height of the Document Editor using the [`Height`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_Height) property; the value is in pixels.

The following example code illustrates how to change the height of the Document Editor.

```csharp
<SfDocumentEditorContainer @ref="container" EnableToolbar="true" Height="590px">
</SfDocumentEditorContainer>
```

Similarly, you can use the [`Height`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_Height) property for the Document Editor also.

## Change width of Document Editor

Blazor Document Editor initially renders with a default width. You can change the width of the Document Editor using the [`Width`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_Width) property; the value is in percent.

The following example code illustrates how to change the width of the Document Editor.

```csharp
<SfDocumentEditorContainer @ref="container" EnableToolbar="true" Height="590px" Width="80%">
</SfDocumentEditorContainer>
```

Similarly, you can use the [`Width`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_Width) property for the Document Editor also.

## Resize Document Editor

Using the [`ResizeAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_ResizeAsync_System_Nullable_System_Double__System_Nullable_System_Double__) method, you can change the height and width of the Document Editor.