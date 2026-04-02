---
title: Preserve leading zeros in Excel | Syncfusion
description: Learn how to preserve leading zeros when converting CSV to Excel using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Preserve Leading Zeros

By default, Microsoft Excel preserves leading zeros in numbers that are enclosed in double quotes within a CSV document when it is saved as an XLSX document, treating them as text rather than converting them to numeric values.

To ensure leading zeros are preserved when converting a CSV file to Excel using XlsIO, utilize the **KeepLeadingZeros** property of the <a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html">IApplication</a> interface. Set this property to **true** before loading the CSV.

The following code example demonstrates how to use the **KeepLeadingZeros** property.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/CSV%20to%20Excel/Preserve%20Leading%20Zeros/.NET/PreserveLeadingZeros/PreserveLeadingZeros/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  application.PreserveCSVDataTypes = true;

  //Enable KeepLeadingZeros property 
  application.KeepLeadingZeros = true;

  IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.csv"), ",");

  //Save the workbook 
  workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  application.PreserveCSVDataTypes = true;

  //Enable KeepLeadingZeros property 
  application.KeepLeadingZeros = true;

  IWorkbook workbook = application.Workbooks.Open("Input.csv", ",");

  //Save the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  application.PreserveCSVDataTypes = True

  'Enable KeepLeadingZeros property 
  application.KeepLeadingZeros = True

  Dim workbook As IWorkbook = application.Workbooks.Open("Input.csv", ",")

  'Save the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}    
 
A complete working example to preserve leading zeros when converting CSV to Excel in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/CSV%20to%20Excel/Preserve%20Leading%20Zeros/.NET/PreserveLeadingZeros">this GitHub page</a>.