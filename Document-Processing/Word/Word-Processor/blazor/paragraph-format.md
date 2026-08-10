---
layout: post
title: Paragraph Formatting in Blazor DOCX Editor Component | Syncfusion
description: Learn here all about working with paragraph formatting in Syncfusion Blazor Document Editor component and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Working with Paragraph Formatting in Blazor Document Editor Component

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) supports various paragraph formatting options such as text alignment, indentation, paragraph spacing, and more.

## Indentation

Indentation is used to adjust the distance between the paragraph and the page margins. The left or right indentation of selected paragraphs can be modified using the following sample code.

```csharp
await documentEditor.Selection.ParagraphFormat.SetLeftIndentAsync(24);
await documentEditor.Selection.ParagraphFormat.SetRightIndentAsync(24);
```

## Special indentation

A special indent for the first line of the paragraph can be defined using the following sample code.

```csharp
await documentEditor.Selection.ParagraphFormat.SetFirstLineIndentAsync(24);
```

## Increase indent

The left indent of selected paragraphs can be increased by 36 points using the following sample code.

```csharp
await documentEditor.Editor.IncreaseIndentAsync();
```

## Decrease indent

The left indent of selected paragraphs can be decreased by 36 points using the following sample code.

```csharp
await documentEditor.Editor.DecreaseIndentAsync();
```

## Text alignment

The text alignment of selected paragraphs can be retrieved or set using the following sample code.

```csharp
await documentEditor.Selection.ParagraphFormat.SetTextAlignmentAsync(TextAlignment.Center);
```

You can toggle the text alignment of selected paragraphs by passing a value using the following sample code.

```csharp
await documentEditor.Editor.ToggleTextAlignmentAsync(TextAlignment.Center);
```

## Line spacing and its type

You can define the line spacing and its type for selected paragraphs using the following sample code.

```csharp
// Set line spacing type
await documentEditor.Selection.ParagraphFormat.SetLineSpacingTypeAsync(LineSpacingType.AtLeast);
// Set line spacing value (supports both integer and float)
await documentEditor.Selection.ParagraphFormat.SetLineSpacingAsync(6);     // Integer value
await documentEditor.Selection.ParagraphFormat.SetLineSpacingAsync(6.5);   // Float value
```

## Paragraph spacing

You can define the spacing before or after the paragraph by using the following sample code.

```csharp
await documentEditor.Selection.ParagraphFormat.SetBeforeSpacingAsync(24);
await documentEditor.Selection.ParagraphFormat.SetAfterSpacingAsync(24);
```

## Show or hide paragraph marks

You can show or hide the hidden formatting symbols like spaces, tab, paragraph marks, and breaks in the Document Editor component. These marks help identify the start and end of paragraphs and all the hidden formatting symbols in a Word document.

The following example code illustrates how to show or hide paragraph marks.

```csharp
<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="settings">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { ShowHiddenMarks = true };
}
```

## Online demo

Explore how to apply paragraph formatting in Word documents using the Blazor Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/paragraph-format?theme=fluent2).