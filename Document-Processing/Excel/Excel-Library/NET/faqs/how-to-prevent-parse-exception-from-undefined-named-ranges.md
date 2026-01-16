---
title: Prevent ParseException when updating formulas | Syncfusion
description: This page explains how to prevent ParseException when modifying formulas with undefined named ranges in Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to prevent ParseException from undefined named ranges?  

To prevent a ParseException when modifying formulas that reference undefined named ranges, set the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_ThrowOnUnknownNames">ThrowOnUnknownNames</a> property to **false** before updating the formula.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
workbook.ThrowOnUnknownNames = false;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
workbook.ThrowOnUnknownNames = false;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
workbook.ThrowOnUnknownNames = False
{% endhighlight %}
{% endtabs %}

This ensures that formulas with undefined named ranges won't trigger errors during assignment or modification.