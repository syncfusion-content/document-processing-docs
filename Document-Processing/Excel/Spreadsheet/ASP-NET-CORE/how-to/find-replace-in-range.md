---
layout: post
title: Find and replace in range in EJ2 ASP.NET Core Spreadsheet component | Syncfusion
description: Learn here all about performing find and replace limited to the range in Syncfusion ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Find and replace text in selected range (ASP.NET Core)

In Syncfusion Spreadsheet, the "Replace All" action by default searches and replaces a text throughout the entire sheet, regardless of the selected range. To limit "Replace All" to only the selected range, you can customize the addressCollection based on the selectedRange in the [actionBegin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event when the action is `beforeReplaceAll`.

The following sample demonstrates how to limit the "Replace All" operation to the currently selected range.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/find-and-replace-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FindReplaceController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/find-and-replace-cs1/findReplaceController.cs %}
{% endhighlight %}
{% endtabs %}
