---
layout: post
title: Text Format in Blazor DOCX Editor | Syncfusion
description: Text format properties in Blazor DOCX Editor enables customizing text appearance with font styles, colors, highlighting, and character formatting options.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# Text Format in Blazor DOCX Editor

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be retrieved or set by using the following sample code.

```csharp
//Gets the value for bold formatting of the selected text.
bool bold = await documentEditor.Selection.CharacterFormat.GetBoldAsync();
//Sets bold formatting for the selected text.
await documentEditor.Selection.CharacterFormat.SetBoldAsync(true);
```

You can toggle the bold formatting based on the existing value at the selection. Refer to the following sample code.

```csharp
await documentEditor.Editor.ToggleBoldAsync();
```

## Italic

The italic formatting for selected text can be retrieved or set by using the following sample code.

```csharp
//Gets the value for italic formatting of the selected text.
bool italic = await documentEditor.Selection.CharacterFormat.GetItalicAsync();
//Sets italic formatting for the selected text.
await documentEditor.Selection.CharacterFormat.SetItalicAsync(true);
```

You can toggle the italic formatting based on the existing value at the selection. Refer to the following sample code.

```csharp
await documentEditor.Editor.ToggleItalicAsync();
```

## Underline property

The underline style for selected text can be retrieved or set by using the following sample code.

```csharp
//Gets the value for underline formatting of the selected text.
Underline underline = await documentEditor.Selection.CharacterFormat.GetUnderlineAsync();
//Sets underline formatting for the selected text.
await documentEditor.Selection.CharacterFormat.SetUnderlineAsync(Underline.Single);
```

You can toggle the underline style of the selected text based on the existing value at the selection by specifying a value. Refer to the following sample code.

```csharp
await documentEditor.Editor.ToggleUnderlineAsync(Underline.Single);
```

## Strikethrough property

The strikethrough style for selected text can be retrieved or set by using the following sample code.

```csharp
//Gets the value for strikethrough formatting of the selected text.
Strikethrough strikethrough = await documentEditor.Selection.CharacterFormat.GetStrikethroughAsync();
//Sets strikethrough formatting for the selected text.
await documentEditor.Selection.CharacterFormat.SetStrikethroughAsync(Strikethrough.SingleStrike);
```

You can toggle the strikethrough style of the selected text based on the existing value at the selection by specifying a value. Refer to the following sample code.

```csharp
await documentEditor.Editor.ToggleStrikethroughAsync(Strikethrough.SingleStrike);
```

## Superscript property

The selected text can be made superscript by using the following sample code.

```csharp
//Gets the value for baseline alignment formatting of the selected text.
BaselineAlignment baselineAlignment = await documentEditor.Selection.CharacterFormat.GetBaselineAlignmentAsync();
//Sets baseline alignment formatting for the selected text.
await documentEditor.Selection.CharacterFormat.SetBaselineAlignmentAsync(BaselineAlignment.Superscript);
```

You can toggle the selected text as superscript or normal using the following sample code.

```csharp
await documentEditor.Editor.ToggleSuperscriptAsync();
```

## Subscript property

The selected text can be made subscript by using the following sample code.

```csharp
await documentEditor.Selection.CharacterFormat.SetBaselineAlignmentAsync(BaselineAlignment.Subscript);
```

You can toggle the selected text as subscript or normal using the following sample code.

```csharp
await documentEditor.Editor.ToggleSubscriptAsync();
```

You can reset subscript or superscript text to normal using the following code.

```csharp
await documentEditor.Selection.CharacterFormat.SetBaselineAlignmentAsync(BaselineAlignment.Normal);
```

## Size

The size of the selected text can be retrieved or set using the following code.

```csharp
await documentEditor.Selection.CharacterFormat.SetFontSizeAsync(32);
```

## Color

### Change Font Color by UI Option

In the DOCX Editor, the Text Properties pane features two icons for managing text color within the user interface (UI):

* **Colored Box:** This icon visually represents the **current color** applied to the selected text.
* **Text (A) Icon:** Clicking this icon allows users **to modify the color** of the selected text by choosing a new color from the available options.

This Font Color option appears as follows.

![Font Color](images/fontColor.PNG)

### Change Font Color by Code

The color of the selected text can be retrieved or set using the following code.

```csharp
await documentEditor.Selection.CharacterFormat.SetFontColorAsync("Pink");
await documentEditor.Selection.CharacterFormat.SetFontColorAsync("FFC0CB");
```

## Font

The font family of the selected text can be retrieved or set using the following sample code.

```csharp
await documentEditor.Selection.CharacterFormat.SetFontFamilyAsync("Arial");
```

## Highlight color

The highlight color of the selected text can be retrieved or set using the following sample code.

```csharp
await documentEditor.Selection.CharacterFormat.SetHighlightColorAsync(HighlightColor.Pink);
```

## Online Demo

Explore how to apply text formatting in Word documents using the Blazor DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/character-format?theme=fluent2).
