---
layout: post
title: Retrieve filtered row data in ASP.NET Core Spreadsheet Control | Syncfusion
description: Learn here all about getting filtered row data in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Get filtered row data in ASP.NET Core Spreadsheet

Filtering in the Syncfusion Spreadsheet allows you to display only the rows that match your criteria, hiding all others. You can enable filtering by setting the [allowFiltering](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.spreadsheet.spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowFiltering) property, and apply filters either through the UI or programmatically using the [applyFilter](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#applyfilter) method. To identify which rows are filtered, iterate through the sheet's row collection and check the `isFiltered` property of each row object. This flag indicates whether a row is currently hidden due to filtering.

The following example shows how to get the filtered rows from the Spreadsheet:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/filter-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FilterController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/filter-cs2/filterController.cs %}
{% endhighlight %}
{% endtabs %}