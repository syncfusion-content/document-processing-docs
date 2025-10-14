---
layout: post
title: Searching in React Spreadsheet component | Syncfusion
description: Learn here all about Searching in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: document-processing
documentation: ug
---

# Searching in React Spreadsheet component

Find and Replace helps you to search for target text and replace the founded text with alternative text within the sheet or workbook. You can use the [`allowFindAndReplace`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#allowfindandreplace) property to enable or disable Find and Replace functionality.

> * The default value for `allowFindAndReplace` property is `true`.

## Find

Find is used to select the matched contents of a cell within sheet or workbook. It is extremely useful when working with large sets of data source.

**User Interface**:

Find can be done by any of the following ways:

* Select the Search icon in the Ribbon toolbar or using `Ctrl + F` key to open the Find dialog.
* Using find Next and find Previous buttons to search the given value in workbook.
* Select the option button in Find dialog to open the Find and Replace dialog then select the below          properties for enhanced searching.

> * `Search within`: To search the target in a sheet (default) or in an entire workbook.
> * `Search by`: It enhance the search, either By Rows (default), or By Columns.
> * `Match case`: To find the matched value with case sensitive.
> * `Match exact cell contents`: To find the exact matched cell value with entire match cases.

* Using [`find()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#find) method to perform find operation.

## Replace

Replace is used to change the find contents of a cell within sheet or workbook. Replace All is used to change all the matched contents of a cell within sheet or workbook.

**User Interface**:

Replace can be done by any of the following ways:

* Using `Ctrl + H` key to open the Find and Replace dialog.
* Using Replace button to change the found value in sheet or workbook.
* Using ReplaceAll button to change all the found value's in sheet or workbook.
* Using [`replace()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#replace) method to perform replace operation by passing the argument `args.replaceby` as `replace`.
* Using [`replace()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#replace) method to perform replace all operation by passing the argument `args.replaceby` as `replaceall`.

## Go to

Go to is used to navigate to a specific cell address in the sheet or workbook.

**User Interface**:

* Using `Ctrl + G` key to open the Go To dialog.
* Using [`goTo()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#goto) method to perform Go To operation.

In the following sample, searching can be done by following ways:

* Select the Home tab in the Ribbon toolbar, and then select the Search icon.
* Enter any value in the search textbox.
* Select the next (or) previous button to find the entered value in the spreadsheet.
* You can have more options to find values by selecting the more options in the search toolbar.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/searching-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/searching-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/searching-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/searching-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/searching-cs1" %}

## Limitations

* Undo/redo for Replace All is not supported in this feature.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.