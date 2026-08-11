---
layout: post
title: View in Blazor DOCX Editor Component | Syncfusion
description: Learn here all about the view in the Syncfusion Blazor Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# View in Blazor Document Editor Component

This topic describes view-related options in the Document Editor, including layout type (Pages or Continuous), displaying the ruler, and enabling the heading navigation pane.

## Web Layout

[`Blazor DOCX Editor`](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) component (Document Editor) allows you to change the view to web layout or print layout using the [`layoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html).

```csharp
<SfDocumentEditorContainer @ref="editor" EnableToolbar="true" Height="590px" LayoutType="LayoutType.Continuous">
</SfDocumentEditorContainer>
```

N> The default value of [`LayoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html) in the DocumentEditorContainer component is [`Pages`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html#Syncfusion_Blazor_DocumentEditor_LayoutType_Pages).

### Online Demo

Explore how to view Word documents in web layout using the Blazor Document Editor in this live [Blazor Web Layout demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/web-layout?theme=fluent2).

## Show Ruler

The ruler helps you set margins, tab stops, and indentations to maintain consistent formatting in the Document Editor Container.

The following example illustrates how to enable the ruler in the Document Editor Container.

```csharp
<div>
    <SfDocumentEditorContainer @ref="container" EnableToolbar="true" Height="590px" DocumentEditorSettings="@settings">
    </SfDocumentEditorContainer>
</div>

@code {
    SfDocumentEditorContainer container;
    public DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ShowRuler = true };
}
```

### Online Demo

Explore how to use the ruler in the Blazor Document Editor for working with Word documents in this live [Blazor Ruler demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/ruler?theme=fluent2).

## Heading Navigation Pane

Using the heading navigation pane allows users to quickly navigate documents by heading.

The following example demonstrates how to enable the heading navigation pane in a Document Editor.

```csharp
<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="@settings">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ShowNavigationPane = true };
}
```

### Online Demo

Explore how to navigate through headings in Word documents using the Blazor Document Editor in this live [Blazor Heading Navigation demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/heading-navigation?theme=fluent2).
