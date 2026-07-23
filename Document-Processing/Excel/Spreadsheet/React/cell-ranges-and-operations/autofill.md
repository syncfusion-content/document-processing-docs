---
layout: post
title: Autofill in React Spreadsheet component | Syncfusion
description: Learn here how to apply autofill to a range of cells in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Autofill in React Spreadsheet

Autofill is used to fill the cells with data based on adjacent cells. It also follows a pattern from adjacent cells if available. There is no need to enter the repeated data manually. You can use `allowAutoFill` property to enable/disable the autofill support. You can also use `showFillOptions` property to enable/disable the fill option and `fillType` property to change the default autofill option which is available in `autoFillSettings`.

You can do this by one of the following ways,

* Using “AutoFillOptions” menu which is open, while drag and drop the cell using fill handle element.
* Use the autoFill method programmatically.

The available parameters in `autoFill` method are,

| Parameter | Type | Description |
|-----|------|----|
| fillRange | `string` | Specifies the fill range. |
| dataRange | `string` | Specifies the data range. |
| direction | `AutoFillDirection` | Specifies the direction("Up","Right","Down","Left")to be filled. |
| fillType | `AutoFillType` | Specifies the fill type("CopyCells","FillSeries","FillFormattingOnly","FillWithoutFormatting") for autofill action. |

In autofill we have following options,

* Copy Cells
* Fill Series
* Fill Formatting Only
* Fill Without Formatting

> The default autofill option is `FillSeries`, which can be referred from `fillType` property.

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
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/autofill-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/autofill-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/autofill-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/autofill-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/autofill-cs1" %}

### Limitations

- The Flash Fill feature is not supported in the autofill workflow.
- When conditional formatting is applied to a range, autofill may not carry the conditional formatting rules to the filled cells. Review the conditional formatting rules on the target range after autofill.
