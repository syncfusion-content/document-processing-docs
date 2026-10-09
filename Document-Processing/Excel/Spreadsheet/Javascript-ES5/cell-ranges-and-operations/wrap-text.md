---
layout: post
title: Wrap Text in JavaScript Spreadsheet | Syncfusion
description: Learn how to wrap text in cells of the Syncfusion JavaScript Spreadsheet to display large content as multiple lines.
platform: document-processing
control: Wrap text
documentation: ug
---

# Wrap text in JavaScript Spreadsheet

Wrap text allows you to display large content as multiple lines in a single cell. By default, wrap text support is enabled. Use the [`allowWrap`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowwrap) property to enable or disable wrap text support in the Spreadsheet.

You can apply wrap text to or remove it from a cell or range of cells in one of the following ways:

* Using the `wrap` property in `cell`, you can enable or disable wrap text on a cell at initial load.
* Select or deselect the wrap button from the ribbon toolbar to apply wrap text to or remove it from the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#wrap) method, you can apply or remove wrap text once the component is loaded.

The following code example shows the wrap text functionality in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/wrap-text-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/wrap-text-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/wrap-text-cs1" %}

## Limitations

The following features have some limitations in wrap text:

* Sorting with wrap text applied data.
* Merge with wrap text.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Merge Cells](./merge-cells)
* [Cell Range](./cell-ranges-and-operations)
* [Formatting](../formatting)
