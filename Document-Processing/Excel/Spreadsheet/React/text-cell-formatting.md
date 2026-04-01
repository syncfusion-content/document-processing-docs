---
layout: post
title: Text & Cell Formatting in React Spreadsheet component | Syncfusion
description: Learn here all about Text and cell formatting in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formatting
platform: document-processing
documentation: ug
---

# Text and cell formatting

Text and cell formatting enhances the look and feel of your cell. It helps to highlight a particular cell or range of cells from a whole workbook. You can apply formats like font size, font family, font color, text alignment, border etc. to a cell or range of cells. Use the [`allowCellFormatting`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowcellformatting) property to enable or disable the text and cell formatting option in Spreadsheet.

You can set formats in the following ways:

- Using the `style` property to set formats at initial load.
- Using the [`cellFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#cellformat) method to set formats to a cell or range.
- Using formatting options from the ribbon toolbar.

## Fonts

Supported font options: font-family, font-size, bold, italic, strike-through, underline and font color.

## Text Alignment

Align text in a cell either vertically or horizontally using the `textAlign` and `verticalAlign` properties.

## Indents

Change the indentation of cell content using the `textIndent` property.

## Fill color

Apply background color to highlight a cell or range using the `backgroundColor` property.

## Borders

You can add borders around a cell or range of cells to define a section of worksheet or a table. To know more about borders, see [Borders](./border).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/cellformat-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/cellformat-cs1" %}

## Limitations of Formatting

- Insert row/column between the formatting applied cells is not supported.
- Formatting support for row/column is limited.
