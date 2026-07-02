---
layout: post
title: Insert Worksheet in Angular Spreadsheet component | Syncfusion
description: Learn here all about how to insert a worksheet in Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Worksheet 
platform: document-processing
documentation: ug
---

# Insert Worksheet in Angular Spreadsheet

In the Angular Spreadsheet component, you can insert new worksheets to organize and manage your data more effectively. Sheets can be added either through the user interface or programmatically, allowing you to expand your workbook as needed. You can choose to add a sheet next to the current sheet, at a specific position, or make the newly inserted sheet active.

## Ways to Insert a Worksheet

You can dynamically add or insert a sheet by one of the following ways,

* Click the `Add Sheet` button in the sheet tab. This will add a new empty sheet next to current active sheet.
* Right-click on the sheet tab, and then select `Insert` option from the context menu to insert a new empty sheet before the current active sheet.
* Using [`insertSheet`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#insertsheet) method, you can insert one or more sheets at your desired index.

The following code example shows the insert sheet operation in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/insert/sheet-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/insert/sheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/insert/sheet-cs1" %}

## Insert a sheet programmatically and make it active sheet

A sheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data. Using [insertSheet](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#insertsheet) method, you can insert one or more sheets at the desired index. Then, you can make the inserted sheet as active sheet by focusing the start cell of that sheet using the [goTo](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#goto) method.

The following code example shows how to insert a sheet programmatically and make it the active sheet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/insert-sheet-change-active-sheet-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/insert-sheet-change-active-sheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/insert-sheet-change-active-sheet-cs1" %}
