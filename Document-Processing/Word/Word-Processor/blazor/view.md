---
layout: post
title: View in Blazor DOCX Editor | Syncfusion
description: View in Blazor DOCX Editor enables web layout, ruler display, and heading navigation to enhance document readability and navigation.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# View in Blazor DOCX Editor

This topic describes view-related options in the DOCX Editor, including layout type (Pages or Continuous), displaying the ruler, and enabling the heading navigation pane.

## Web layout

[`Blazor DOCX Editor`](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) component (Document Editor) allows you to change the view to web layout or print layout using the [`layoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html).

```csharp
<SfDocumentEditorContainer @ref="editor" EnableToolbar="true" Height="590px" LayoutType="LayoutType.Continuous">
</SfDocumentEditorContainer>
```

N> The default value of [`LayoutType`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html) in the DocumentEditorContainer component is [`Pages`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.LayoutType.html#Syncfusion_Blazor_DocumentEditor_LayoutType_Pages).

### Online demo

Explore how to view Word documents in web layout using the Blazor DOCX Editor in this live [Blazor Web Layout demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/web-layout?theme=fluent2).

## Show ruler

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

### Online demo

Explore how to use the ruler in the Blazor DOCX Editor for working with Word documents in this live [Blazor Ruler demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/ruler?theme=fluent2).

## Heading navigation pane

Using the heading navigation pane allows users to quickly navigate documents by heading.

The following example demonstrates how to enable the heading navigation pane in a DOCX Editor.

```csharp
<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="@settings">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ShowNavigationPane = true };
}
```

### Online demo

Explore how to navigate through headings in Word documents using the Blazor DOCX Editor in this live [Blazor Heading Navigation demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/heading-navigation?theme=fluent2).
