---
title: Apply custom filtering to string data types using XlsIO | Syncfusion
description: Code example to apply custom filtering to string data types using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply custom filtering to string data types using XlsIO?

The following code snippets illustrate how to apply custom filtering to string data types in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}                                                                                       
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Filtering/.NET/Custom%20Filter%20String%20Type/CustomFilterStringType/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Creating an AutoFilter 
    worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];
    IAutoFilter filter = worksheet.AutoFilters[0];

    //Specifying first condition
    IAutoFilterCondition firstCondition = filter.FirstCondition;
    firstCondition.ConditionOperator = ExcelFilterCondition.DoesNotContain;
    firstCondition.String = "1000.00";

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

    //Creating an AutoFilter
    worksheet.AutoFilters.FilterRange = worksheet.Range["A1:A11"];
    IAutoFilter filter = worksheet.AutoFilters[0];

    //Specifying first condition
    IAutoFilterCondition firstCondition = filter.FirstCondition;
    firstCondition.ConditionOperator = ExcelFilterCondition.DoesNotContain;
    firstCondition.String = "1000.00";

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Creating an AutoFilter 
    sheet.AutoFilters.FilterRange = sheet.Range("A1:A11")
    Dim filter As IAutoFilter = sheet.AutoFilters(0)

    'Specifying first condition
    Dim firstCondition As IAutoFilterCondition = filter.FirstCondition
    firstCondition.ConditionOperator = ExcelFilterCondition.DoesNotContain
    firstCondition.String = 1000.0

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply custom filtering to string data types using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Filtering/.NET/Custom%20Filter%20String%20Type">this GitHub page</a>.  