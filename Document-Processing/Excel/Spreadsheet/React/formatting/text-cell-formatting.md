---
layout: post
title: Text & Cell Formatting in React Spreadsheet Component | Syncfusion
description: Learn here all about Text and cell formatting in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formatting
platform: document-processing
documentation: ug
---

# Cell Styling and Text Formatting

Text and cell formatting improves the appearance of your spreadsheet and helps highlight specific cells or ranges. You can apply formats such as font size, font family, font color, text alignment, borders, and more. Use the [`allowCellFormatting`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowcellformatting) property to enable or disable text and cell formatting in the Spreadsheet.  

You can set formats in the following ways:  
* Use the [style](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cell#style) property to apply formats to each cell during the initial load.
* Use the [`cellFormat`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#cellformat) method to apply formats to a cell or range of cells dynamically.  
* Apply formatting directly by clicking the desired format option from the ribbon toolbar.

## Fonts

The React Spreadsheet Editor provides comprehensive font formatting options to customize text appearance in cells. These options help improve readability and establish a clear visual hierarchy in your data.

The Spreadsheet supports the following font formatting options:

| Format | Description |
|--------|-------------|
| [`fontFamily`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#fontfamily) | Specifies the typeface of the text (e.g., Arial, Calibri, Times New Roman, Verdana). |
| [`fontSize`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#fontsize) | Specifies the size of the text in points (e.g., 10pt, 12pt, 14pt). |
| [`fontWeight`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#fontweight) | Specifies the thickness of the text. Supports values such as normal, bold, and numeric weights (e.g., 100–900) to control the emphasis level of the text. |
| [`fontStyle`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#fontstyle) | Specifies the style of the text. Supports values such as normal, italic, and oblique to adjust the appearance and emphasis of the content. |
| [`textDecoration`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#textdecoration) | Specifies decorative styling applied to the text. Supports values such as underline, overline, and line-through (strikethrough) to highlight, cross out, or distinguish content within a cell. |
| [`color`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#color) | Specifies the color of the text. |

## Text Alignment

You can align text in cells using the following options:

| Alignment Type | Options | Description |
|----------------|---------|-------------|
| [`textAlign`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/textalign) | Left, Center, Right | Aligns text horizontally from left to right within the cell. |
| [`verticalAlign`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/verticalalign) | Top, Middle, Bottom | Aligns text from top to bottom within the cell. |

## Indents

Indentation helps enhance the visual appearance of text in cells by adding space before the text content. You can apply cell text indentation using the [`textIndent`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#textindent) property.

## Fill Color

Fill color (background color) is used to highlight cells or ranges of cells across the workbook. You can apply background colors to cells using the [`backgroundColor`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#backgroundcolor) property.

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

## Borders

The React Spreadsheet Editor allows you to apply borders to a cell or a range of cells. Borders help you separate sections, highlight data, or format tables clearly in your worksheet. You can apply borders in different styles, sizes, and colors based on your needs.

### Border Types

The following border types are supported. Each type adds a border to a specific side or area of the selected cells:

| Type | Description |
|------|-------------|
| **Top Border** | Specifies the top border of a cell or range of cells. |
| **Left Border** | Specifies the left border of a cell or range of cells. |
| **Right Border** | Specifies the right border of a cell or range of cells. |
| **Bottom Border** | Specifies the bottom border of a cell or range of cells. |
| **No Border** | Clears the border from a cell or range of cells. |
| **All Border** | Specifies all borders of a cell or range of cells. |
| **Horizontal Border** | Specifies the top and bottom borders of a cell or range of cells. |
| **Vertical Border** | Specifies the left and right borders of a cell or range of cells. |
| **Outside Border** | Specifies the outer perimeter of a range of cells. |
| **Inside Border** | Specifies the inside borders of a range of cells. |

### Customize Border Colors and Styles

You can change the appearance of a border by adjusting its size, style, and color. The Spreadsheet supports the following options:

| Style | Description |
|-------|-------------|
| **Thin** | Specifies the `1px` border size (default). |
| **Medium** | Specifies the `2px` border size. |
| **Thick** | Specifies the `3px` border size. |
| **Solid** | Creates a `solid` border (default). |
| **Dashed** | Creates a `dashed` border. |
| **Dotted** | Creates a `dotted` border. |
| **Double** | Creates a `double` border. |

Borders can be applied in the following ways:

- Using the `border`, `borderTop`, `borderLeft`, `borderRight`, `borderBottom` properties, you can set the desired border on each cell at initial load. The [border](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel#border) property is part of [CellStyleModel](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellstylemodel) and is applied via the cell's `style` object.
- Using the [setBorder](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setborder) method, you can set various border options on a cell or range of cells.
- Selecting the border options from the ribbon toolbar.

The following code sample shows how to apply different typed border, colors and styles in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/border-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/border-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/border-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/border-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/border-cs1" %} 

## Limitations of Formatting

The following features are not supported in Formatting:

* Insert row/column between the formatting applied cells.
* Formatting support for row/column.

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for feature highlights. You can also explore our [React Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/react/#/tailwind3/spreadsheet/cell-formatting) to learn how to present and manipulate data.

## See Also

* [Number Formatting](./number-formatting)
* [Conditional Formatting](./conditional-formatting)
* [Cell Range](./cell-range)
