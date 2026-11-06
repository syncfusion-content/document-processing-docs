---
layout: post
title: Merge Cells in TypeScript Spreadsheet | Syncfusion
description: Learn about merging cells in the Syncfusion TypeScript Spreadsheet control to combine multiple cells into a single cell.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Merge cells in TypeScript Spreadsheet

Merge cells allows users to span two or more cells in the same row or column into a single cell. When cells with multiple values are merged, top-left most cell data will be the data for the merged cell. By default, the merge cells option is enabled. Use [`allowMerge`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#allowmerge) property to enable or disable the merge cells option in spreadsheet.

You can merge the range of cells in the following ways,

* Set the `rowSpan` and `colSpan` property in `cell` to merge the number of cells at initial load.
* Select the range of cells and apply merge by selecting the desired option from ribbon toolbar.
* Use [`merge`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#merge) method to merge the range of cells, once the control is loaded.

The following merge options are available in the Spreadsheet:

| Type | Action |
|-------|---------|
| Merge All | Combines all the cells in a range into a single cell (default). |
| Merge Horizontally | Combines cells in a range across multiple columns (row-wise). |
| Merge Vertically | Combines cells in a range across multiple rows (column-wise). |
| UnMerge | Splits the merged cells into multiple cells. |

The following code example shows the merge cells operation in the Spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/merge-cells-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/merge-cells-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/merge-cells-cs1" %}

## Limitations

The following features have some limitations when using merged cells:

- Merge with filter.
- Merge with wrap text.
- Merge with border style.

