---
layout: post
title: Rich Text Formatting in React Spreadsheet Component | Syncfusion
description: Learn how to apply rich text formatting in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formatting
platform: document-processing
documentation: ug
---

# Rich Text Formatting

Rich text formatting allows you to apply different styles to specific portions of text within a single cell to improve readability and presentation. Currently, subscript and superscript formatting are supported, and other rich text font styles are not supported.

In the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component, rich text formatting is supported through the [`richText`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#richtext) property of the cell model. This property lets you define multiple text segments inside a cell, where each segment can have its own style.

Each `richText` segment contains:

- `text` – Specifies the content of the segment  
- `style` – Defines formatting using the [`CellStyleModel`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel)

## Subscript and Superscript

Subscript and superscript formatting are supported as part of rich text formatting and can be applied to specific portions of text within a cell.

To apply these formats, use the `verticalAlign` property within the style of a rich text segment:

Set `verticalAlign: 'super'` for superscript and `verticalAlign: 'sub'` for subscript.

#### How to Apply Subscript and Superscript

You can apply subscript and superscript formatting in following ways:

1. Select the desired portion of text within a cell, then click the Subscript or Superscript option in the ribbon to apply the formatting.

![Subscript and superscript in Spreadsheet](./images/spreadsheet_richtext.gif)

2. You can define the [`richText`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#richtext) property directly while initializing the Spreadsheet. This is useful when you want the formatting to be applied when the data is loaded.

```javascript
cells: [
    {
        value: 'H2O',
        richText: [
            { text: 'H' },
            { text: '2', style: { verticalAlign: 'sub' } },
            { text: 'O' }
        ]
    }
]
```

3. You can also apply subscript and superscript dynamically using the [`updateCell`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#updatecell) method.

```javascript
spreadsheet.updateCell({
    value: 'X2',
    richText: [
        { text: 'X' },
        { text: '2', style: { verticalAlign: 'super' } }
    ]
}, 'A5');
```

The following code example shows subscript and superscript formatting in cells of the Spreadsheet.

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
* **Limited formatting support:** Only subscript and superscript formatting are supported within rich text. Other formatting options such as font size, font color, and font weight are not supported.
* **Edit mode requirement:** Formatting can be applied only while the cell is in edit mode. Selecting text outside of edit mode does not support subscript or superscript formatting.