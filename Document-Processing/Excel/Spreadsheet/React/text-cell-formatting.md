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

Supported font options include `fontFamily`, `fontSize`, bold, italic, strike-through, underline, and `fontColor`. You can set fonts for a single cell or a range via data binding or at runtime using formatting methods such as `cellFormat`. `fontFamily` accepts common font names, `fontSize` accepts numeric values, and text decorations (bold/italic/underline/strike) can be combined to emphasize content.

## Text Alignment

Align text horizontally (`left`, `center`, `right`) and vertically (`top`, `middle`, `bottom`) using the `textAlign` and `verticalAlign` properties. These alignment settings are available through the ribbon and can be applied programmatically via the `style` property or `cellFormat` method.

## Indents

Adjust indentation with the `textIndent` property to visually offset cell content. Indentation can be applied incrementally from the ribbon (Increase/Decrease Indent) or set directly in a cell's `style` object.

## Fill color

Apply a background fill using the `backgroundColor` property to highlight cells or ranges. The fill can be applied via the ribbon's fill color picker or programmatically through the `style` property.

## Borders

Add borders to a cell or range to define tables, emphasize regions, or separate data. Borders support different sides, styles, widths, and colors. Use the ribbon border tools for common presets or apply fine-grained border settings programmatically via the `border` property. To know more about border, see [Borders](./cell-border).

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
