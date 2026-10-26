---
title: How to Resolve Workbook Stream Errors in .NET Excel | Syncfusion
description: Resolve the file does not contain workbook stream error when opening Excel files using Syncfusion .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to resolve workbook stream errors in .NET Excel Library

XlsIO does not support files generated prior to 97-2003 version. Hence the exception "File does not contain workbook stream" occurs. This can be checked in prior with the below code snippet. 

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;

//To check whether the file is supported
var isSupported = application.IsSupported("Sample.xls");
excelEngine.Dispose();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;

//To check whether the file is supported
var isSupported = application.IsSupported("Sample.xls");
excelEngine.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim excelEngine As New ExcelEngine()
Dim application As IApplication = excelEngine.Excel

'To check whether the file is supported
Dim isSupported = application.IsSupported("Sample.xls")
excelEngine.Dispose()
{% endhighlight %}
{% endtabs %}  

N> This method is available from 12.4 version onwards.

## See Also

* [How to resolve Excel cannot open the file filename.xlsx... error?](how-to-resolve-excel-cannot-open-the-file-because-the-file-format-for-the-file-extension-is-not-valid)
* [What are the known exceptions of XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/known-exceptions)
* [How to open an Excel file from stream?](how-to-open-an-excel-file-from-stream)
* [How to save a file to stream?](how-to-save-a-file-to-stream)
