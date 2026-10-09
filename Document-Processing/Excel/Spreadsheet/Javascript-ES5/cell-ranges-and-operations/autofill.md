---
layout: post
title: Autofill in JavaScript Spreadsheet | Syncfusion
description: Learn about autofill in the Syncfusion JavaScript Spreadsheet and extend data patterns across rows, columns, and cell ranges.
platform: document-processing
control: Autofill
documentation: ug
---

# Autofill in JavaScript Spreadsheet

Auto Fill is used to fill cells with data based on adjacent cells. It also follows a pattern from adjacent cells if available. There is no need to enter repeated data manually. You can use the [`allowAutoFill`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowautofill) property to enable/disable auto fill support. You can also use the [`showFillOptions`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/autoFillSettings#showfilloptions) property to enable/disable the fill options and the [`fillType`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/autoFillSettings#filltype) property to change the default auto fill option, both of which are available in [`autoFillSettings`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#autofillsettings).

You can do this in one of the following ways:

* Using the AutoFillOptions menu, which opens when you drag the fill handle of a cell.
* Use the [`autoFill()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#autofill) method programmatically.

The available parameters in the `autoFill()` method are:

| Parameter | Type | Description |
|-----|------|----|
| fillRange | `string` | Specifies the fill range. |
| dataRange | `string` | Specifies the data range. |
| direction | `AutoFillDirection` | Specifies the direction (`Up`, `Right`, `Down`, `Left`) to be filled. |
| fillType | `AutoFillType` | Specifies the fill type (`CopyCells`, `FillSeries`, `FillFormattingOnly`, `FillWithoutFormatting`) for the auto fill action. |

In Auto Fill, we have the following options:

* Copy Cells
* Fill Series
* Fill Formatting Only
* Fill Without Formatting

> The default auto fill option is `FillSeries` which can be referred from `fillType` property.

## Copy Cells

To copy the selected cell content to adjacent cells, you can do this in one of the following ways:

* Use the fill handle to select the adjacent cell range and select the `Copy Cells` option in the AutoFillOptions menu to fill the adjacent cells.
* Use `CopyCells` as the fill type in the `autoFill` method to fill the adjacent cells.

## Fill Series

To fill a series of numbers, characters, or dates based on the selected cell content to the adjacent cells with their formats, you can do this in one of the following ways:

* Use the fill handle to select the adjacent cell range and select the `Fill Series` option in the AutoFillOptions menu to fill the adjacent cells.
* Use `FillSeries` as the fill type in the `autoFill` method to fill the adjacent cells.

## Fill Formatting Only

To fill the cell style and number formatting based on the selected cell content to the adjacent cells without their content, you can do this in one of the following ways:

* Use the fill handle to select the adjacent cell range and select the `Fill Formatting Only` option in the AutoFillOptions menu to fill the adjacent cells.
* Use `FillFormattingOnly` as the fill type in the `autoFill` method to fill the adjacent cells.

## Fill Without Formatting

To fill a series of numbers, characters, or dates based on the selected cells to the adjacent cells without their formats, you can do this in one of the following ways:

* Use the fill handle to select the adjacent cell range and select the `Fill Without Formatting` option in the AutoFillOptions menu to fill the adjacent cells.
* Use `FillWithoutFormatting` as the fill type in the `autoFill` method to fill the adjacent cells.

In the following sample, you can enable/disable the fill option on the button click event by using the `showFillOptions` property in `autoFillSettings`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/autofill-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/autofill-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/autofill-cs1" %}

## Limitations

The following features have some limitations in Autofill:

* Flash Fill option in Autofill feature.
* Fill with Conditional Formatting applied cells.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Cell Range](./cell-ranges-and-operations)
* [Merge Cells](./merge-cells)
* [Formatting](../formatting)
