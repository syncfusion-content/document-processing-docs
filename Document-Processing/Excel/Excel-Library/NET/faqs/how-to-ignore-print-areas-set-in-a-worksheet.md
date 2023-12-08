---
title: How to ignore print areas set in a worksheet | XlsIO | Syncfusion
description: This page shows how to ignore print areas set in a worksheet using Syncfusion .NET Excel library (XlsIO).
platform: file-formats
control: XlsIO
documentation: UG
---

# How to ignore print areas set in a worksheet?

You can set the print area to null or empty to ignore the print areas in a worksheet as below. Setting the [PrintArea](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IPageSetup.html#Syncfusion_XlsIO_IPageSetup_PrintArea) property will impact the process of exporting to PDF. If the print area is set, the export to PDF includes only the print area.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
worksheet.PageSetup.PrintArea = string.Empty;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
worksheet.PageSetup.PrintArea = string.Empty;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
worksheet.PageSetup.PrintArea = string.Empty
{% endhighlight %}
{% endtabs %}

## See Also

* [How to set print titles?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-set-print-titles)
* [How to print Excel document?](https://help.syncfusion.com/file-formats/xlsio/excel-to-pdf-conversion#print-excel-document)
* [What are page setup settings?](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#page-setup-settings)
* [How to ignore the green error marker in worksheets?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-ignore-the-green-error-marker-in-worksheets)
