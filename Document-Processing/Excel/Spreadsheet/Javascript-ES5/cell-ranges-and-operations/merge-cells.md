---
layout: post
title: Merge Cells in JavaScript Spreadsheet | Syncfusion
description: Learn how to merge cells in the Syncfusion JavaScript Spreadsheet to combine multiple cells into a single cell.
platform: document-processing
control: Merge cells
documentation: ug
---

# Merge cells in JavaScript Spreadsheet

Merging cells allows users to span two or more cells in the same row or column into a single cell. When cells with multiple values are merged, the top-leftmost cell data becomes the data for the merged cell. By default, the merge cells option is enabled. Use the [`allowMerge`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowmerge) property to enable or disable the merge cells option in the Spreadsheet.

You can merge a range of cells in the following ways:

* Set the `rowSpan` and `colSpan` properties in `cell` to merge a specified number of cells at initial load.
* Select the range of cells and apply merge by selecting the desired option from the ribbon toolbar.
* Use the [`merge`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#merge) method to merge the range of cells once the component is loaded.

The available merge options in spreadsheet are:

| Type | Action |
|-------|---------|
| Merge All | Combines all the cells in a range in to a single cell (default). |
| Merge Horizontally | Combines cells in a range as row-wise. |
| Merge Vertically | Combines cells in a range as column-wise. |
| UnMerge | Splits the merged cells into multiple cells. |

The following code example shows the merge cells operation in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/merge-cells-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/merge-cells-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/merge-cells-cs1" %}

## Limitations

The following features have limitations in Merge:

* Merge with filter.
* Merge with wrap text.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Wrap Text](./wrap-text)
* [Cell Range](./cell-ranges-and-operations)
* [Formatting](../formatting)
