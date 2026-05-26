---
layout: post
title: Clear in React Spreadsheet component | Syncfusion
description: Learn here how to apply clear feature for a range of cells in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Clear in React Spreadsheet

The **Clear** feature allows you to remove cell contents (formulas and data) and formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply **Clear All**, both the contents and the formats are removed simultaneously.

## Apply Clear Feature

You can apply clear feature by using one of the following ways,

* Select the clear icon in the Ribbon toolbar under the `Home` Tab.
* Using the [`clear`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#clear) method to clear the values.

Clear has the following types in the spreadsheet,

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks.  |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

## Methods

You can clear cell contents and formats in the Spreadsheet by using the [`clear`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#clear) method. The `clear` method accepts two parameters:  
* `type` – specifies the type of clear operation (`Clear All`, `Clear Formats`, `Clear Contents`, or `Clear Hyperlinks`).  
* `range` – specifies the cell or range of cells to clear.  

The following code example demonstrates how to clear cell contents and formats in a button click event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clear-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/clear-cs1" %}
