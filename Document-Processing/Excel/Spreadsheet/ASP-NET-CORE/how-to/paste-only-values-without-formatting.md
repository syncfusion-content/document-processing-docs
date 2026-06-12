---
layout: post
title: Paste Without Formatting in EJ2 ASP.NET Core Spreadsheet component | Syncfusion
description: Learn here about Paste only values without formatting during copy and paste in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Paste Values Without Formatting and styles in ASP.NET Core Spreadsheet

In the Syncfusion ASP.NET Core Spreadsheet, you can make the paste action insert only the raw values into the cells, without bringing any formatting or styles from the copied content. This can be done by using the [actionBegin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ActionBegin) event, where the Spreadsheet provides the details of the action being performed. When the action is a clipboard operation, you can set the paste type to Values, ensuring that only plain values are pasted into the sheet.

The following example shows how to paste values without formatting.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/paste-values-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="pasteValuesController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/paste-values-cs1/pasteValuesController.cs %}
{% endhighlight %}
{% endtabs %}