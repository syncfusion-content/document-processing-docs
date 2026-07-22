---
layout: post
title: Searching in EJ2 ASP.NET MVC Syncfusion Spreadsheet Control
description: Learn here all about Searching in Syncfusion EJ2 ASP.NET MVC Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Searching
documentation: ug
---


# Find and Replace in ASP.NET MVC Spreadsheet Control

Find and Replace helps you to search for the target text and replace the found text with alternative text within the sheet or workbook. You can use the [`allowFindAndReplace`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowFindAndReplace) property to enable or disable the Find and Replace functionality.

N> * The default value for `allowFindAndReplace` property is `true`.

## Find

The Find feature selects cells containing content that matches the search value within the current worksheet or workbook. It is useful when working with large data sources.


To find a value:

1. Select the **Search** icon in the Ribbon or press `Ctrl + F` to open the Find dialog.
2. Enter the value to search for.
3. Select **Find Next** or **Find Previous** to navigate between matching cells.
4. Open the additional search options to configure the search scope, direction, case sensitivity, or exact-cell matching.

You can also use the `find()` method to perform the find operation programmatically.

N> The Find dialog provides the following options:
<br/> * `Search within`: Searches within the current worksheet or the entire workbook. The default scope is the current worksheet.
<br/> * `Search by`: Searches by rows or columns. The default direction is by rows.
<br/> * `Match case`: Finds values that match the capitalization of the search value.
<br/> * `Match exact cell contents`: Finds cells whose complete content exactly matches the search value.

## Replace

The Replace feature changes matching cell content within the current worksheet or workbook. The **Replace All** option changes all matching cells within the selected search scope.

To replace a value:

1. Press `Ctrl + H` to open the Find and Replace dialog.
2. Enter the value to find and the replacement value.
3. Select **Replace** to replace the current match.
4. Select **Replace All** to replace all matching cells within the selected worksheet or workbook scope.

You can also use the `replace()` method to perform Replace and Replace All operations programmatically.

## Go to

The Go To feature navigates to a specified cell address in a worksheet.

To navigate to a cell:

1. Press `Ctrl + G` to open the **Go To** dialog.
2. Enter the required cell address.
3. Confirm the operation to navigate to the specified cell.

You can also use the `goTo()` method to navigate to a cell programmatically.

The following example demonstrates how to find values in the Spreadsheet:

1. Open the **Home** tab in the Ribbon and select the **Search** icon.
2. Enter a value in the search box.
3. Select **Next** or **Previous** to navigate between matching cells.
4. Open the additional search options to customize the search.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/search/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SearchController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/search/searchController.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

* Undo/redo for Replace All is not supported in this feature.