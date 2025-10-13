---
layout: post
title: Change active sheet in EJ2 ASP.NET CORE Spreadsheet control | Syncfusion
description: Learn here all about changing active sheet index when import a file in Syncfusion EJ2 ASP.NET CORE Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Changing the active sheet in ASP.NET Core Spreadsheet control

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActiveSheetIndex) property on the [`openComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_OpenComplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/change-active-sheet/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="OpenController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/change-active-sheet/opencontroller.cs %}
{% endhighlight %}
{% endtabs %}
