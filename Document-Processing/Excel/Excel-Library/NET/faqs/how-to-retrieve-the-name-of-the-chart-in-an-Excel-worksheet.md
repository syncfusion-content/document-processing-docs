---
title: Retrieve the name of the chart in an Excel worksheet | Syncfusion
description: Code example to retrieve the name of the chart in an Excel worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve the name of the chart in an Excel worksheet?

The following code examples demonstrate retrieving the name of the chart in an Excel worksheet using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Chart/.NET/ChartNameInWorksheet/ChartNameInWorksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the chart name 
    string chartName = worksheet.Charts[0].Name;
    //Display the chart name 
    Console.WriteLine("The name of the chart is: " + chartName);

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Get the chart name 
    string chartName = worksheet.Charts[0].Name;
    //Display the chart name 
    Console.WriteLine("The name of the chart is: " + chartName);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Access the IApplication instance
    Dim application As IApplication = excelEngine.Excel

    ' Set the default version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Open the input workbook
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")

    ' Get the first worksheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Get the chart name
    Dim chartName As String = worksheet.Charts(0).Name

    ' Display the chart name
    Console.WriteLine("The name of the chart is: " & chartName)

    ' Save the workbook to output
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Chart/.NET/ChartNameInWorksheet">this GitHub page</a>.