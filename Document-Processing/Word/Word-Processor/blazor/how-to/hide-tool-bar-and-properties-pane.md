---
layout: post
title: Hide Toolbar and Properties Pane in Blazor DOCX Editor | Syncfusion
description: Hide the toolbar and properties pane in Syncfusion® Blazor DOCX Editor to create a custom user interface and streamline the document editing experience.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# How to Hide Toolbar and Properties Pane in Blazor DOCX Editor

**[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) container** provides the main document view area along with the built-in toolbar and properties pane.

**DOCX Editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. Use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, the Document Editor Container has a built-in properties pane that contains options for formatting text, tables, images, and headers and footers. You can use the [`ShowPropertiesPane`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_ShowPropertiesPane) API in the [`DocumentEditorContainer`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true ShowPropertiesPane="false">

</SfDocumentEditorContainer>
```

N> Positioning and customizing the properties pane in the Document Editor Container is not possible. Instead, you can hide the existing properties pane and create your own pane using public APIs.

## Hide the toolbar

Use the [`EnableToolbar`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_EnableToolbar) API in the [`DocumentEditorContainer`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=false ShowPropertiesPane="false">
</SfDocumentEditorContainer>
```

## See Also

* [How to customize the toolbar](./customize-tool-bar)