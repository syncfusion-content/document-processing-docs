---
layout: post
title: Cell range in EJ2 TypeScript Spreadsheet control | Syncfusion
description: Learn here all about Cell range in Syncfusion EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Cell range 
documentation: ug
---

# Cell range in EJ2 TypeScript Spreadsheet control

A group of cells in a sheet is known as cell range.

## Wrap text

Wrap text allows you to display large content as multiple lines in a single cell. By default, the wrap text support is enabled. Use the [`allowWrap`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowwrap) property to enable or disable the wrap text support in spreadsheet.

Wrap text can be applied or removed to a cell or range of cells in the following ways,

* Using the `wrap` property in `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect wrap button from ribbon toolbar to apply or remove the wrap text to the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#wrap) method, you can apply or remove the wrap text once the component is loaded.

The following code example shows the wrap text functionality in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/wrap-text-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/wrap-text-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/wrap-text-cs1" %}

### Limitations of Wrap text

The following features have some limitations in wrap text:

* Sorting with wrap text applied data.
* Merge with wrap text.

## Merge cells

Merge cells allows users to span two or more cells in the same row or column into a single cell. When cells with multiple values are merged, top-left most cell data will be the data for the merged cell. By default, the merge cells option is enabled. Use [`allowMerge`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowmerge) property to enable or disable the merge cells option in spreadsheet.

You can merge the range of cells in the following ways,

* Set the `rowSpan` and `colSpan` property in `cell` to merge the number of cells at initial load.
* Select the range of cells and apply merge by selecting the desired option from ribbon toolbar.

* Use [`merge`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#merge) method to merge the range of cells, once the component is loaded.

The available merge options in spreadsheet are,

| Type | Action |
|-------|---------|
| Merge All | Combines all the cells in a range in to a single cell (default). |
| Merge Horizontally | Combines cells in a range as row-wise. |
| Merge Vertically | Combines cells in a range as column-wise. |
| UnMerge | Splits the merged cells into multiple cells. |

The following code example shows the merge cells operation in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/merge-cells-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/merge-cells-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/merge-cells-cs1" %}

### Limitations of Merge

The following features have some limitations in Merge:

* Merge with filter.
* Merge with wrap text.

## Auto Fill

Auto Fill is used to fill the cells with data based on adjacent cells. It also follows a pattern from adjacent cells if available. There is no need to enter the repeated data manually. You can use `allowAutoFill` property to enable/disable the auto fill support. You can also use `showFillOptions` property to enable/disable the fill option and `fillType` property to change the default auto fill option which is available in `autoFillSettings`.

You can do this by one of the following ways,

* Using “AutoFillOptions” menu which is open, while drag and drop the cell using fill handle element.
* Use the autoFill() method programmatically.

The available parameters in `autoFill()` method are,

| Parameter | Type | Description |
|-----|------|----|
| fillRange | `string` | Specifies the fill range. |
| dataRange | `string` | Specifies the data range. |
| direction | `AutoFillDirection` | Specifies the direction("Up","Right","Down","Left")to be filled. |
| fillType | `AutoFillType` | Specifies the fill type("CopyCells","FillSeries","FillFormattingOnly","FillWithoutFormatting") for autofill action. |

In Auto Fill we have following options,

* Copy Cells
* Fill Series
* Fill Formatting Only
* Fill Without Formatting

>* The default auto fill option is “FillSeries” which can be referred from `fillType` property.

### Copy Cells

To copy the selected cell content to the adjacent cells. You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Copy Cells” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “CopyCells” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Series

To fill the series of numbers, characters, or dates based on selected cell content to the adjacent cells with their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Series” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillSeries” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Formatting Only

To fill the cell style and number formatting based on the selected cell content to the adjacent cells without their content.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Formatting Only” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillFormattingOnly” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Without Formatting

To fill series of numbers, characters, or dates based on the selected cells to the adjacent cells without their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Without Formatting” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillWithoutFormatting” as fill type in `autoFill` method to fill the adjacent cells.

In the following sample, you can enable/disable the fill option on the button click event by using the `showFillOptions` property in `autoFillSettings`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/autofill-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/autofill-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/autofill-cs1" %}

### Limitations of Autofill

The following features have some limitations in Autofill:

* Flash Fill option in Autofill feature.
* Fill with Conditional Formatting applied cells.

## Clear

Clear feature helps you to clear the cell contents (formulas and data), formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply clear all, both the contents and the formats will be cleared simultaneously.

### Apply Clear Feature

You can apply clear feature by using one of the following ways,

* Select the clear icon in the Ribbon toolbar under the Home Tab.
* Using the [`clear()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#clear) method to clear the values.
 
Clear has the following types in the spreadsheet,

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks.  |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

### Methods

Clear the cell contents and formats in the Spreadsheet document by using the [clear](https://ej2.syncfusion.com/documentation/api/spreadsheet/#clear) method. The [clear](https://ej2.syncfusion.com/documentation/api/spreadsheet/#clear) method has `type` and `range` as parameters. The following code example shows how to clear the cell contents and formats in the button click event.
 
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/clear-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/clear-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/clear-cs1" %}

## See Also

* [Rows and columns](./rows-and-columns)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
