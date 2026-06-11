---
title: Retrieve the list of named ranges in an Excel workbook | Syncfusion
description: Code example to retrieve the list of named ranges in an Excel workbook using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to retrieve the list of named ranges in an Excel workbook?

The following code examples demonstrate retrieving the list of named ranges in an Excel workbook using C# (Cross-platform and Windows-specific) and VB.NET.

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Named%20Range/.NET/RetrieveNamedRanges/RetrieveNamedRanges/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Retrieving names defined in the workbook 
    IName[] names = new IName[workbook.Names.Count];
    for (int i = 0; i < workbook.Names.Count; i++)
    {
        names[i] = workbook.Names[i];
        Console.WriteLine(names[i].Name);
    }

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

    //Retrieving names defined in the workbook 
    IName[] names = new IName[workbook.Names.Count];
    for (int i = 0; i < workbook.Names.Count; i++)
    {
        names[i] = workbook.Names[i];
        Console.WriteLine(names[i].Name);
    }

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    ' Instantiate the Excel application object
    Dim application As IApplication = excelEngine.Excel

    ' Set the default application version
    application.DefaultVersion = ExcelVersion.Xlsx

    ' Load the existing Excel workbook into IWorkbook
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx")

    ' Get the first worksheet in the workbook into IWorksheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Retrieving names defined in the workbook
    Dim names(workbook.Names.Count - 1) As IName
    For i As Integer = 0 To workbook.Names.Count - 1
        names(i) = workbook.Names(i)
        Console.WriteLine(names(i).Name)
    Next

    ' Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Named%20Range/.NET/RetrieveNamedRanges">this GitHub page</a>.