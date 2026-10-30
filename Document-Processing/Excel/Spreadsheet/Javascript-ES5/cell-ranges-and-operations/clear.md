---
layout: post
title: Clear Cell Contents or Formats in JavaScript Spreadsheet | Syncfusion
description: Learn about clearing cell contents or formats in the Syncfusion JavaScript Spreadsheet to reset data and formatting.
platform: document-processing
control: Clear
documentation: ug
---

# Clear Cell Contents or Formats in JavaScript Spreadsheet

Clear feature helps you to clear the cell contents (formulas and data), formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply clear all, both the contents and the formats will be cleared simultaneously.

## Applying the Clear feature

You can apply the clear feature in one of the following ways:

* Select the clear icon in the ribbon toolbar under the Home tab.
* Use the [`clear()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#clear) method to clear the values.

Clear has the following types in the Spreadsheet:

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks. |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

## Methods

Clear the cell contents and formats in the Spreadsheet document by using the [clear](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#clear) method. The [clear](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#clear) method has `type` and `range` as parameters. The following code example shows how to clear the cell contents and formats in the button click event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/clear-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/clear-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/clear-cs1" %}

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Cell Range](./cell-ranges-and-operations)
* [Editing](./editing)
* [Merge Cells](./merge-cells)
