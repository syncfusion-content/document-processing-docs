---
layout: post
title: Worksheet in EJ2 Javascript Spreadsheet control | Syncfusion
description: Learn here all about Worksheet in Syncfusion EJ2 Javascript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Worksheet
documentation: ug
---

# Worksheet in EJ2 JavaScript Spreadsheet control

A worksheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data.

> Before working with worksheet APIs, you must have a Spreadsheet control initialized in your application. For setup details, refer to the [getting started](https://ej2.syncfusion.com/javascript/documentation/spreadsheet/getting-started) documentation.

## Add sheet

You can dynamically add or insert a sheet in one of the following ways:

* Click the `Add Sheet` button in the sheet tab. This adds a new empty sheet next to the current active sheet.
* Right-click on the sheet tab, and then select the `Insert` option from the context menu to insert a new empty sheet before the current active sheet.
* Use the [`insertSheet`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertsheet) method to insert one or more sheets at your desired index.

The following code example shows the insert sheet operation in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/insert/sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/insert/sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/insert/sheet-cs1" %}

### Insert a sheet programmatically and make it the active sheet

Using the [insertSheet](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertsheet) method, you can insert one or more sheets at the desired index. You can then make the inserted sheet the active sheet by focusing on the start cell of that sheet using the [goTo](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#goto) method.

The following code example shows how to insert a sheet programmatically and make it the active sheet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/insert-sheet-change-active-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/insert-sheet-change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/insert-sheet-change-active-sheet-cs1" %}

## Delete sheet

The Spreadsheet has support for removing an existing worksheet. You can dynamically delete a sheet in the following ways:

* Right-click on the sheet tab, and then select the `Delete` option from the context menu.
* Use the [`delete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#delete) method to delete sheets programmatically.

## Rename sheet

You can dynamically rename an existing worksheet in the following ways:

* Right-click on the sheet tab, and then select the `Rename` option from the context menu.

## Headers

By default, the row and column headers are visible in worksheets. You can dynamically show or hide worksheet headers in one of the following ways:

* Switch to the `View` tab, and then select the `Hide Headers` option to hide both the row and column headers.
* Set the [`showHeaders`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/sheetModel/#showheaders) property on a sheet in the `sheets` collection to `true` or `false` to show or hide the headers at initial load. By default, `showHeaders` is enabled in each worksheet.

> To toggle headers at runtime, update the `showHeaders` property on the target sheet model and call `spreadsheet.dataBind()` to reflect the change.

## Gridlines

Gridlines appear as cell borders and are used to distinguish cells on the worksheet. You can dynamically show or hide gridlines in one of the following ways:

* Switch to the `View` tab, and then select the `Hide Gridlines` option to hide the gridlines in the worksheet.
* Set the [`showGridLines`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/sheetModel/#showgridlines) property on a sheet in the `sheets` collection to `true` or `false` to show or hide the gridlines at initial load. By default, `showGridLines` is enabled in each worksheet.

> To toggle gridlines at runtime, update the `showGridLines` property on the target sheet model and call `spreadsheet.dataBind()` to reflect the change.

The following code example demonstrates hiding both headers and gridlines on a single sheet at initial load.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/headers-gridlines-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/headers-gridlines-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/headers-gridlines-cs1" %}

## Sheet visibility

Hiding a worksheet can help prevent unauthorized or accidental changes to your file.

There are three visibility states, similar to Microsoft Excel:

| State | Description |
|-------|---------|
| `Visible` | You can see the worksheet once the component is loaded. |
| `Hidden` | This worksheet is not visible, but you can unhide it by selecting the sheet from the `List All Sheets` dropdown menu in the sheet tab area. |
| `VeryHidden` | This worksheet is not visible and cannot be unhidden. Setting the `state` property to `Visible` is the only way to view this sheet. |

The following code example shows the three types of sheet visibility state.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/sheet-visibility-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/sheet-visibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/sheet-visibility-cs1" %}

## See Also

* [Sheet protection](./protect-sheet)
* [Rows and columns](./rows-and-columns)
* [Cell range](./cell-range)
* [Formatting](./formatting)
