---
layout: post
title: Change Active Sheet in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn here all about changing active sheet index when import a file in Syncfusion EJ2 ASP.NET MVC Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Changing the active sheet in ASP.NET MVC Spreadsheet control

You can change the active sheet of an imported file by updating the [`activeSheetIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActiveSheetIndex) property in the [`openComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_OpenComplete) event handler.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/change-active-sheet/razor %}
{% endhighlight %}
{% highlight c# tabtitle="OpenController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/change-active-sheet/opencontroller.cs %}
{% endhighlight %}
{% endtabs %}
