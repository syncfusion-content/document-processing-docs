---
title: How to Prevent ParseException in .NET Excel Library | Syncfusion
description: Prevent ParseException when modifying formulas with undefined named ranges using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to prevent ParseException in .NET Excel Library

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
