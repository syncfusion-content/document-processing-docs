---
title: How to Open Encoded Files in .NET Excel Library | Syncfusion
description: Open an Excel file with encoding using the Syncfusion .NET Excel Library for loading encoded files.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open encoded Excel files in .NET Excel Library

XlsIO do not have direct support to open an Excel file with encoding in .NET Core. But this can be acheived through below workaround.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  System.Text.UnicodeEncoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
  IWorkbook workbook = application.Workbooks.Open("Sample.csv", System.Text.UnicodeEncoding.GetEncoding("big5"));

  workbook.SaveAs("Output.csv", ",");
}

{% endhighlight %}
{% endtabs %}
