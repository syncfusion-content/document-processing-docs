---
layout: post
title: Rich Text Formatting in React Spreadsheet | Syncfusion
description: Learn about rich text formatting in the Syncfusion React Spreadsheet component and apply multiple text styles within cells.
control: Formatting
platform: document-processing
documentation: ug
---

# Rich Text Formatting in React Spreadsheet

Rich text formatting allows you to apply different styles to specific portions of text within a single cell to improve readability and presentation. Each text segment can have its own formatting, enabling you to combine multiple styles within a single cell.

The Spreadsheet supports rich text formatting options such as font family, font size, font weight, font style, text decoration, font color, subscript, and superscript.

In the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component, rich text formatting is supported through the [`richText`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#richtext) property of the cell model. This property lets you define multiple text segments inside a cell, where each segment can have its own style.

Each `richText` segment contains:

- `text` – Specifies the content of the segment  
- `style` – Defines formatting using the [`CellStyleModel`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel)

Rich text formatting supports the following style options through the `style` property of each `richText` segment:

## Font Family

You can change the font family of individual rich text segments using the `fontFamily` property. This allows different portions of text within the same cell to be displayed using different typefaces such as `Calibri`, `Arial`, and `Georgia`.

## Font Size

You can customize the size of individual rich text segments using the `fontSize` property to emphasize specific content within a cell.

## Font Weight

You can apply font weight formatting using the `fontWeight` property. This is typically used to display specific text segments in bold.

## Font Style

You can apply font style formatting using the `fontStyle` property. This property supports values such as `normal` and `italic`.

## Text Decoration

You can apply text decorations to individual rich text segments using the `textDecoration` property. Supported decorations include `underline` and `line-through`.

## Font Color

You can customize the color of specific text segments using the `color` property to improve visibility or highlight important information.

## Subscript and Superscript

You can apply subscript and superscript formatting to individual text segments using the `verticalAlign` property.

- Use `verticalAlign: 'sub'` to display text as subscript.
- Use `verticalAlign: 'super'` to display text as superscript.

## How to Apply Rich Text Formatting

You can apply rich text formatting in following ways:

1. Select the desired portion of text within a cell, then use the available formatting options in the ribbon such as font family, font size, bold, italic, underline, strikethrough, font color, subscript, or superscript.

![Rich text formatting in Spreadsheet](../images/spreadsheet_richtext.gif)

2. You can define the [`richText`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#richtext) property directly while initializing the Spreadsheet. This is useful when you want the formatting to be applied when the data is loaded.

```javascript
    cells: [
        {
            value: 'Annual Sales Report 2026 Highlights (Draft)',
            richText: [
                { text: 'Annual Sales Report ', style: { fontWeight: 'bold' } },
                { text: '2026', style: { color: '#0078D4' } },
                { text: ' Highlights', style: { textDecoration: 'underline' } },
                { text: ' (Draft)', style: { fontStyle: 'italic' } }
            ]
        }
    ]
```

3. You can also apply formatting dynamically using the [`updateCell`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#updatecell) method.

```javascript
    spreadsheet.updateCell({
        richText: [
            { text: 'Premium Membership ', style: { fontWeight: 'bold', color: '#2E7D32' } },
            { text: 'valid until ', style: { fontStyle: 'italic' } },
            { text: '31', style: { textDecoration: 'underline' } },
            { text: 'st', style: { verticalAlign: 'super' } },
            { text: ' Dec 2026' }
        ]
    }, 'A5');
```

The following code example shows how to apply multiple rich text formats in cells of the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/richtext-format-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/richtext-format-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/richtext-format-cs1" %}

## Limitations
* **Edit mode requirement:** Formatting can be applied only while the cell is in edit mode. Selecting text outside of edit mode does not support subscript or superscript formatting.