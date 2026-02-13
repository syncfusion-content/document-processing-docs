---
title: Get maximum rows and columns in a worksheet | Syncfusion
description: Code example to get the maximum number of rows and columns supported in an Excel worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to get the maximum rows and columns in a worksheet using XlsIO?

The [MaxRowCount](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_MaxRowCount) and [MaxColumnCount](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_MaxColumnCount) properties of [IWorkbook](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html) return the maximum number of rows and columns supported in an Excel worksheet.

The following code examples demonstrate how to retrieve the maximum number of rows and columns supported in an Excel worksheet using C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Maximum%20number%20of%20rows%20and%20columns%20supported/.NET/MaximumNumberOfRowsColumns/MaximumNumberOfRowsColumns/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // To get the maximum supported rows and columns 
    int maxRow = workbook.MaxRowCount;  
    int maxColumns = workbook.MaxColumnCount;

    // Display the maximum number of rows and columns supported
    Console.WriteLine("Maximum number of rows supported: " + maxRow.ToString());
    Console.WriteLine("Maximum number of columns supported: " + maxColumns.ToString());  
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    // To get the maximum supported rows and columns 
    int maxRow = workbook.MaxRowCount;  
    int maxColumns = workbook.MaxColumnCount;

    // Display the maximum number of rows and columns supported
    Console.WriteLine("Maximum number of rows supported: " + maxRow.ToString());
    Console.WriteLine("Maximum number of columns supported: " + maxColumns.ToString());  
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' To get the maximum supported rows and columns 
    Dim maxRow As Integer = workbook.MaxRowCount
    Dim maxColumns As Integer = workbook.MaxColumnCount

    ' Display the maximum number of rows and columns supported
    Console.WriteLine("Maximum number of rows supported: " + maxRow.ToString())
    Console.WriteLine("Maximum number of columns supported: " + maxColumns.ToString())
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Maximum%20number%20of%20rows%20and%20columns%20supported/.NET/MaximumNumberOfRowsColumns">this GitHub page</a>.