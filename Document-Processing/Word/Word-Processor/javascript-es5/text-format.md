---
layout: post
title: Text format in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Text format in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Text format 
documentation: ug
domainurl: ##DomainURL##
---

# Text format in JavaScript (ES5) Document editor control

Document Editor supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be get or set by using the following sample code.

```ts

//Gets the value for bold formatting of selected text.
let bold : boolean = documenteditor.selection.characterFormat.bold;
//Sets bold formatting for selected text.
documenteditor.selection.characterFormat.bold = true;

```

You can toggle the bold formatting based on existing value at selection. Refer to the following sample code.

```ts
documenteditor.editor.toggleBold();
```

## Italic

The Italic formatting for selected text can be get or set by using the following sample code.

```ts
//Gets the value for italic formatting of selected text.
let italic : boolean = documenteditor.selection.characterFormat.italic;
//Sets italic formatting for selected text.
documenteditor.selection.characterFormat.italic = true|false;
```

You can toggle the Italic formatting based on existing value at selection. Refer to the following sample code.

```ts
documenteditor.editor.toggleItalic();
```

## Underline property

The underline style for selected text can be get or set by using the following sample code.

```ts
//Gets the value for underline formatting of selected text.
let underline : Underline = documenteditor.selection.characterFormat.underline;
//Sets underline formatting for selected text.
documenteditor.selection.characterFormat.underline = 'Single' | 'None';
```

You can toggle the underline style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```ts
documenteditor.editor.toggleUnderline('Single');
```

## Strikethrough property

The strikethrough style for selected text can be get or set by using the following sample code.

```ts
//Gets the value for strikethrough formatting of selected text.
let strikethrough : Strikethrough = documenteditor.selection.characterFormat.strikethrough;
//Sets strikethrough formatting for selected text.
documenteditor.selection.characterFormat.strikethrough = 'Single' | 'Normal';
```

You can toggle the strikethrough style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```ts
documenteditor.editor.toggleStrikethrough();
```

## Superscript property

The selected text can be made superscript by using the following sample code.

```ts
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
documenteditor.selection.characterFormat.baselineAlignment = 'Superscript';
```

Toggle the selected text as superscript or normal using the following sample code.

```ts
documenteditor.editor.toggleSuperscript();
```

## Subscript property

The selected text can be made subscript by using the following sample code.

```ts
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
documenteditor.selection.characterFormat.baselineAlignment = 'Subscript';
```

Toggle the selected text as subscript or normal using the following sample code.

```ts
documenteditor.editor.toggleSubscript();
```

You can make a subscript or superscript text as normal using the following code.

```ts
documenteditor.selection.characterFormat.baselineAlignment = 'Normal';
```

## Change case

You can apply different case formatting based on the selected text. Refer to the following sample code.

```ts
documenteditor.editor.changeCase('Uppercase'|'Lowercase'|'SentenceCase'|'ToggleCase'|'CapitalizeEachWord');
```

## Size

The size of selected text can be get or set using the following code.

```ts
//Gets the value for fontSize formatting of selected text.
let fontSize : number = documenteditor.selection.characterFormat.fontSize;
//Sets fontSize formatting for selected text.
documenteditor.selection.characterFormat.fontSize = 32;
```

## Color

### Change Font Color by UI Option

In the Document Editor, the Text Properties pane features two icons for managing text color within the user interface (UI):

* **Colored Box:** This icon visually represents the **current color** applied to the selected text.
* **Text (A) Icon:** Clicking this icon allows users **to modify the color** of the selected text by choosing a new color from the available options.

This Font Color option appear as follows.

![Font Color](images/fontColor.PNG)

### Change Font Color by Code

The color of selected text can be get or set using the following code.

```ts
//Gets the value for fontColor formatting of selected text.
let fontColor : string = documenteditor.selection.characterFormat.fontColor;
//Sets fontColor formatting for selected text.
documenteditor.selection.characterFormat.fontColor = 'Pink';
documenteditor.selection.characterFormat.fontColor = '#FFC0CB';
```

## Font

The font style of selected text can be get or set using the following sample code.

```ts
//Gets the value for fontFamily formatting of selected text.
let baselineAlignment : string = documenteditor.selection.characterFormat.fontFamily;
//Sets fontFamily formatting for selected text.
documenteditor.selection.characterFormat.fontFamily = 'Arial';
```

## Highlight color

The highlight color of the selected text can be get or set using the following sample code.

```ts
//Gets the value for highlightColor formatting of selected text.
let highlightColor : HighlightColor = documenteditor.selection.characterFormat.highlightColor;
//Sets highlightColor formatting for selected text.
documenteditor.selection.characterFormat.highlightColor = 'Pink';
```

N> 1. Character scaling and spacing present in the input Word document will be preserved in the exported Word document. N> 2. Scaling is implemented using the letterSpacing property, which may present compatibility problems. For more information, please refer to this [link](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/letterSpacing#browser_compatibility)

## Toolbar with options for text formatting

Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/text-format-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/text-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/text-format-cs1" %}

## See Also

* [Feature modules](./feature-module)
* [Font dialog](./dialog#font-dialog)
* [Keyboard shortcuts](./keyboard-shortcut#text-formatting)