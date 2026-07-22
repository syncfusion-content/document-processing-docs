---
layout: post
title: Insert Worksheet in React Spreadsheet component | Syncfusion
description: Learn here all about how to insert a worksheet in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Worksheet 
platform: document-processing
documentation: ug
---

# Insert Worksheet in React Spreadsheet

In the React Spreadsheet component, you can insert new worksheets to organize and manage your data more effectively. Sheets can be added either through the user interface or programmatically, allowing you to expand your workbook as needed. You can choose to add a sheet next to the current sheet, at a specific position, or make the newly inserted sheet active.

## Ways to Insert a Worksheet

You can dynamically add or insert a sheet in one of the following ways:

* Click the `Add Sheet` button in the sheet tab. This will add a new empty sheet next to the current active sheet.
* Right-click on the sheet tab, and then select the `Insert` option from the context menu to insert a new empty sheet before the current active sheet.
* Using the [`insertSheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertsheet) method, you can insert one or more sheets at your desired index.

The following code example shows the insert sheet operation in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-sheet-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-sheet-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/insert-sheet-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/insert-sheet-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-sheet-cs1" %}

## Insert a sheet programmatically and make it the active sheet

A sheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data. Using [insertSheet](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertsheet) method, you can insert one or more sheets at the desired index. Then, you can make the inserted sheet as active sheet by focusing the start cell of that sheet using the [goTo](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#goto) method.

The following code example shows how to insert a sheet programmatically and make it the active sheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-sheet-change-active-sheet-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-sheet-change-active-sheet-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-sheet-change-active-sheet-cs1" %}