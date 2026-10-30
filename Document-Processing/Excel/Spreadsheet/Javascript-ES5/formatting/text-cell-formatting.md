---
layout: post
title: Text and Cell Formatting in JavaScript Spreadsheet | Syncfusion
description: Learn about text and cell formatting in the Syncfusion JavaScript Spreadsheet to customize appearance with fonts, alignment, borders, and colors.
control: Formatting
platform: document-processing
documentation: ug
---

# Text and Cell Formatting in JavaScript Spreadsheet

Text and cell formatting enhances the look and feel of your cells. It helps to highlight a particular cell or range of cells from a whole workbook. You can apply formats like font size, font family, font color, text alignment, border, etc. to a cell or range of cells. Use the [`allowCellFormatting`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowcellformatting) property to enable or disable the text and cell formatting option in the Spreadsheet. You can set the formats in the following ways:

* Using the `style` property, you can set formats to each cell at initial load.
* Using the [`cellFormat`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#cellformat) method, you can set formats to a cell or range of cells.
* You can also apply by clicking the desired format option from the ribbon toolbar.

## Fonts

Various font formats supported in the spreadsheet are font-family, font-size, bold, italic, strike-through, underline, and font color.

## Text Alignment

You can align text in a cell either vertically or horizontally using the `textAlign` and `verticalAlign` properties.

## Indents

To enhance the appearance of text in a cell, you can change the indentation of a cell's content using the `textIndent` property.

## Fill Color

To highlight a cell or range of cells from the whole workbook, you can apply a background color for a cell using the `backgroundColor` property.

## Borders

You can add borders around a cell or range of cells to define a section of worksheet or a table. The different types of border options available in the spreadsheet are:

| Types | Actions |
|-------|---------|
| Top Border | Specifies the top border of a cell or range of cells.|
| Left Border | Specifies the left border of a cell or range of cells.|
| Right Border | Specifies the right border of a cell or range of cells.|
| Bottom Border | Specifies the bottom border of a cell or range of cells.|
| No Border | Used to clear the border from a cell or range of cells.|
| All Border | Specifies all borders of a cell or range of cells.|
| Horizontal Border | Specifies the top and bottom borders of a cell or range of cells.|
| Vertical Border | Specifies the left and right borders of a cell or range of cells.|
| Outside Border | Specifies the outside border of a range of cells.|
| Inside Border | Specifies the inside border of a range of cells.|

You can also change the color, size, and style of the border. The size and style supported in the spreadsheet are:

| Types | Actions |
|-------|---------|
| Thin | Specifies the `1px` border size (default).|
| Medium | Specifies the `2px` border size.|
| Thick | Specifies the `3px` border size.|
| Solid | Specifies the `solid` border (default).|
| Dashed | Specifies the `dashed` border.|
| Dotted | Specifies the `dotted` border.|
| Double | Specifies the `double` border.|

Borders can be applied in the following ways:

* Using the `border`, `borderTop`, `borderLeft`, `borderRight`, `borderBottom` properties, you can set the desired border to each cell at initial load.
* Using the [`setBorder`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#setborder) method, you can set various border options to a cell or range of cells.
* Selecting the border options from the ribbon toolbar.

The following code example shows the style formatting in text and cells of the spreadsheet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/format/cell-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/format/cell-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/format/cell-cs1" %}

## Text Overflow

When cell content exceeds the column width, the Spreadsheet automatically displays the overflowing text across adjacent empty cells. This preserves readability without altering the column width.

Text overflows only into adjacent empty cells. If a neighboring cell contains a value, formula, or merged range, the text is clipped at the cell boundary.

Text overflow is supported for plain text, rich text, hyperlinks, and RTL (right-to-left) layouts, and updates automatically whenever cell content, formatting, or column widths change.

The following code example demonstrates text overflow in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/text-overflow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/text-overflow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/text-overflow-cs1" %}

## Limitations

The following features are not supported in Formatting:

* Insert row/column between the formatting applied cells.
* Formatting support for row/column.
* Text overflow across freeze pane boundaries and for right-aligned cells.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Formatting Overview](../formatting-overview)
* [Number Formatting](./number-formatting)
* [Conditional Formatting](./conditional-formatting)
