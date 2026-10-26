---
layout: post
title: How to Change Active Sheet in ASP.NET MVC Spreadsheet | Syncfusion
description: Change the active sheet index when importing a workbook in Syncfusion ASP.NET MVC Spreadsheet to display the required worksheet by default.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# How to Change Active Sheet in ASP.NET MVC Spreadsheet

You can change the active sheet of the imported file by updating the [`activeSheetIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActiveSheetIndex) property in the [`openComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_OpenComplete) event.

To change the active sheet after importing an Excel file:

1. Bind the `openComplete` event to the Spreadsheet.
2. In the event handler, set the `activeSheetIndex` property to the index of the sheet you want to activate.
3. Open an Excel file in the Spreadsheet.
4. After the file is loaded, the Spreadsheet displays the sheet specified by the `activeSheetIndex` property.

The following code example demonstrates how to change the active sheet after importing an Excel file.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/change-active-sheet/razor %}
{% endhighlight %}
{% highlight c# tabtitle="OpenController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/change-active-sheet/opencontroller.cs %}
{% endhighlight %}
{% endtabs %}
