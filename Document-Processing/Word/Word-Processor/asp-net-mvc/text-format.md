---
layout: post
title: Text Format in ASP.NET MVC DOCX Editor | Syncfusion
description: Text format properties in ASP.NET MVC DOCX Editor enables customizing text appearance with font styles, colors, highlighting, and character formatting options.
platform: document-processing
control: Text Format
documentation: ug
---


# Text Format in ASP.NET MVC DOCX Editor

DOCX Editor supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be retrieved or set by using the following sample code.

```typescript
//Gets the value for bold formatting of selected text.
let bold : boolean = documenteditor.selection.characterFormat.bold;
//Sets bold formatting for selected text.
documenteditor.selection.characterFormat.bold = true;
```

You can toggle the bold formatting based on the existing value at the selection.

```typescript
documenteditor.editor.toggleBold();
```

## Italic

The Italic formatting for selected text can be retrieved or set by using the following sample code.

```typescript
documenteditor.selection.characterFormat.italic = true | false;
```

You can toggle the italic formatting based on the existing value at the selection.

```typescript
documenteditor.editor.toggleItalic();
```

## Underline property

The underline style for selected text can be retrieved or set by using the following sample code.

```typescript
documenteditor.selection.characterFormat.underline = 'Single' | 'None';
```

You can toggle the underline style of selected text based on the existing value at the selection by specifying a value.

```typescript
documenteditor.editor.toggleUnderline('Single');
```

## Strikethrough property

The strikethrough style for selected text can be retrieved or set by using the following sample code.

```typescript
documenteditor.selection.characterFormat.strikethrough = 'Single' | 'Normal';
```

You can toggle the strikethrough style of selected text based on the existing value at the selection by specifying a value.

```typescript
documenteditor.editor.toggleStrikethrough();
```

## Superscript property

The selected text can be made superscript by using the following sample code.

```typescript
documenteditor.selection.characterFormat.baselineAlignment='Superscript';
```

Toggle the selected text as superscript or normal using the following sample code.

```typescript
documenteditor.editor.toggleSuperscript();
```

## Subscript property

The selected text can be made subscript by using the following sample code.

```typescript
documenteditor.selection.characterFormat.baselineAlignment='Subscript';
```

Toggle the selected text as subscript or normal using the following sample code.

```typescript
documenteditor.editor.toggleSubscript();
```

You can make a subscript or superscript text as normal using the following code.

```typescript
documenteditor.selection.characterFormat.baselineAlignment='Normal';
```

## Change case

You can apply different case formatting based on the selected text. Refer to the following sample code.

```typescript
documenteditor.editor.changeCase('Uppercase'|'Lowercase'|'SentenceCase'|'ToggleCase'|'CapitalizeEachWord');
```

## Size

The size of selected text can be retrieved or set using the following code.

```typescript
documenteditor.selection.characterFormat.fontSize = 32;
```

## Color

### Change font color by UI option

In the DOCX Editor, the Text Properties pane contains two icons for managing text color within the user interface (UI):

* **Colored Box:** This icon visually represents the **current color** applied to the selected text.
* **Text (A) Icon:** Clicking this icon allows users to **change the** color of the selected text **using the color picker**.

This Font Color option appears as follows.

![Font Color](images/fontColor.PNG)

### Change font color by code

The color of selected text can be retrieved or set using the following code.

```typescript
documenteditor.selection.characterFormat.fontColor = 'Pink';
documenteditor.selection.characterFormat.fontColor = '#FFC0CB';
```

## Font

The font style of selected text can be retrieved or set using the following sample code.

```typescript
documenteditor.selection.characterFormat.fontFamily = 'Arial';
```

## Highlight color

The highlight color of the selected text can be retrieved or set using the following sample code.

```typescript
documenteditor.selection.characterFormat.highlightColor = 'Pink';
```

## Bidirectional

The bidi property controls whether selected text is displayed as right-to-left (RTL) or left-to-right (LTR) for proper multilingual formatting. You can get or set this property using the following code example.

```typescript
// Get Bidi value of selected text
var bidi = documenteditor.selection.characterFormat.bidi;
 
// Set Bidi for selected text
documenteditor.selection.characterFormat.bidi = true;
```

## Toolbar with options for text formatting


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/text-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Text-format.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/text-format/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online demo

Explore how to apply text formatting in Word documents using the ASP.NET MVC DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/characterformatting#/tailwind3).

## See also

* [Feature modules](./feature-module)
* [Font dialog](./dialog#font-dialog)
* [Keyboard shortcuts](./keyboard-shortcut)