---
layout: post
title: Worksheet in EJ2 ASP.NET MVC Syncfusion Spreadsheet Control
description: Learn here all about Worksheet in Syncfusion EJ2 ASP.NET MVC Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Worksheet
documentation: ug
---


# Worksheet in ASP.NET MVC Spreadsheet control

Worksheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data.

## Add sheet

You can add or insert a worksheet in one of the following ways:

* Select **Add Sheet** on the sheet tab bar to add an empty worksheet next to the active worksheet.
* Right-click a sheet tab and choose **Insert** from the context menu to insert an empty worksheet before the active worksheet.
* Use the `insertSheet()` method to insert one or more worksheets at a specified index.

The following code example shows the insert sheet operation in spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-sheet/razor %}
{% endhighlight %}
{% highlight c# tabtitle="InsertSheetController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-sheet/insertSheetController.cs %}
{% endhighlight %}
{% endtabs %}

### Insert a sheet programmatically and make it active sheet

Use the `insertSheet()` method to insert one or more worksheets at the required index. After inserting a sheet, use the `goTo()` method to focus its first cell and make it the active worksheet.

The following code example shows how to insert a sheet programmatically and make it the active sheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-sheet-change-active-sheet/razor %}
{% endhighlight %}
{% highlight c# tabtitle="InsertSheetController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-sheet-change-active-sheet/insertSheetController.cs %}
{% endhighlight %}
{% endtabs %}


## Delete sheet

You can delete an existing worksheet in one of the following ways:

* Right-click the sheet tab and choose **Delete** from the context menu.
* Use the appropriate delete method to remove a worksheet programmatically.

## Rename sheet

* To rename a worksheet, right-click its sheet tab and choose **Rename** from the context menu.

## Headers

By default, the row and column headers are visible in worksheets. You can dynamically show or hide worksheet headers by using one of the following ways,

* Switch to `View` tab, and then select `Hide Headers` option to hide both the row and column headers.
* Set `showHeaders` property in `sheets` as `true` or `false` to show or hide the headers at initial load. By default, the `showHeaders` property is enabled in each worksheet.

N> The default value of the `showHeaders` property is `true`.

## Gridlines

Gridlines are visual separators that help distinguish cells in a worksheet.You can show or hide gridlines in one of the following ways:

* Switch to `View` tab, and then select `Hide Gridlines` option to hide the gridlines in worksheet.
* Set `showGridLines` property in `sheets` as `true` or `false` to show or hide the gridlines at initial load. By default, the `showGridLines` property is enabled in each worksheet.

N> The default value of the `showGridLines` property is `true`.

The following code example shows the headers and gridlines operation in spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/header-gridlines/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HeaderController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/header-gridlines/headerController.cs %}
{% endhighlight %}
{% endtabs %}

## Sheet visibility

Hiding a worksheet can help prevent unauthorized or accidental changes to your file.

There are three visibility state as like Microsoft Excel,

| State | Description |
|-------|---------|
| `Visible` | You can see the worksheet once the component is loaded. |
| `Hidden` | This worksheet is not visible, but you can unhide by selecting the sheet from `List All Sheets`
dropdown menu. |
| `VeryHidden` | This worksheet is not visible and cannot be unhidden. Changing the
state property to `Visible` is the only way to view this sheet. |

The following code example shows the three types of sheet visibility state.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/sheet-visiblity/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SheetVisiblityController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/sheet-visiblity/sheetVisiblityController.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Sheet protection](./protect-sheet)
* [Rows and columns](./rows-and-columns)
* [Cell range](./cell-range)
* [Formatting](./formatting)
