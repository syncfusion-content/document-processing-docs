---
layout: post
title: Text & Cell Formatting in React Spreadsheet component | Syncfusion
description: Learn here all about Text and cell formatting in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formatting
platform: document-processing
documentation: ug
---

## Cell Styling and Text Formatting

Text and cell formatting improves the appearance of your spreadsheet and helps highlight specific cells or ranges. You can apply formats such as font size, font family, font color, text alignment, borders, and more. Use the [`allowCellFormatting`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowcellformatting) property to enable or disable text and cell formatting in the Spreadsheet.  

You can set formats in the following ways:  
* Use the [style](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cell#style) property to apply formats to each cell during the initial load.
* Use the [`cellFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#cellformat) method to apply formats to a cell or range of cells dynamically.  
* Apply formatting directly by clicking the desired format option from the ribbon toolbar.

### Fonts

Various font formats supported in the spreadsheet are font-family, font-size, bold, italic, strike-through, underline and font color.

### Text Alignment

You can align text in a cell either vertically or horizontally using the  [`textAlign`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/textalign) and [verticalAlign](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/verticalalign) property.

### Indents

To enhance the appearance of text in a cell, you can change the indentation of a cell content using [textIndent](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#textindent) property.

### Fill color

To highlight cell or range of cells from whole workbook you can apply background color for a cell using [backgroundColor](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#backgroundcolor) property.

### Borders

You can add borders around a cell or range of cells to define a section of worksheet or a table. The different types of border options available in the spreadsheet are,

| Types | Actions |
|-------|---------|
| **Top Border** | Specifies the top border of a cell or range of cells.|
| **Left Border** | Specifies the left border of a cell or range of cells.|
| **Right Border** | Specifies the right border of a cell or range of cells.|
| **Bottom Border** | Specifies the bottom border of a cell or range of cells.|
| **No Border** | Used to clear the border from a cell or range of cells.|
| **All Border** | Specifies all border of a cell or range of cells.|
| **Horizontal Border** | Specifies the top and bottom border of a cell or range of cells.|
| **Vertical Border** | Specifies the left and right border of a cell or range of cells.|
| **Outside Border** | Specifies the outside border of a range of cells.|
| **Inside Border** | Specifies the inside border of a range of cells.|

You can also change the color, size, and style of the border. The size and style supported in the spreadsheet are,

| Types | Actions |
|-------|---------|
| **Thin** | Specifies the `1px` border size (default).|
| **Medium** | Specifies the `2px` border size.|
| **Thick** | Specifies the `3px` border size.|
| **Solid** | Used to create the `solid` border (default).|
| **Dashed** | Used to create the `dashed` border.|
| **Dotted** | Used to create the `dotted` border.|
| **Double** | Used to create the `double` border.|

Borders can be applied in the following ways,
* Using the  `border`, `borderLeft`, `borderRight`, `borderBottom` properties, you can set the desired border to each cell at initial load.
* Using the [setBorder](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setborder) method, you can set various border options to a cell or range of cells.
* Selecting the border options from ribbon toolbar.

The following code example shows the style formatting in text and cells of the spreadsheet.

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

### Limitations of Formatting

The following features are not supported in Formatting:

* Insert row/column between the formatting applied cells.
* Formatting support for row/column.
