---
title: How to apply TimePeriod conditional formatting in Excel | Syncfusion 
description: Code example to apply TimePeriod-based conditional formatting in an Excel document using Syncfusion .NET Excel library (XlsIO). 
platform: document-processing 
control: XlsIO 
documentation: UG
---

# How to apply TimePeriod conditional formatting in Excel using C#?

You can apply TimePeriod-based conditional formatting in an Excel worksheet using the IConditionalFormats interface. 

The following examples show how to highlight cells that match specific time periods in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Conditional%20Formatting/.NET/Time%20period/Time%20period/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine()) 
{ 
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];

    //Apply conditional format for specific time period
    IConditionalFormats conditionalFormats = worksheet.UsedRange.ConditionalFormats;
    IConditionalFormat conditionalFormat = conditionalFormats.AddCondition();

    //Set the format type to 'TimePeriod' to apply time-based conditional formatting
    conditionalFormat.FormatType = ExcelCFType.TimePeriod;
    conditionalFormat.TimePeriodType = CFTimePeriods.Today;

    //Set the background color of the matching cells 
    conditionalFormat.BackColor = ExcelKnownColors.Sky_blue;

    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
} 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine()) 
{ 
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("Input.xlsx"); 
    IWorksheet worksheet = workbook.Worksheets[0];

    //Apply conditional format for specific time period
    IConditionalFormats conditionalFormats = worksheet.UsedRange.ConditionalFormats;
    IConditionalFormat conditionalFormat = conditionalFormats.AddCondition();

    //Set the format type to 'TimePeriod' to apply time-based conditional formatting
    conditionalFormat.FormatType = ExcelCFType.TimePeriod;
    conditionalFormat.TimePeriodType = CFTimePeriods.Today;

    //Set the background color of the matching cells
    conditionalFormat.BackColor = ExcelKnownColors.Sky_blue;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
} 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %} 
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("Input.xlsx") 
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Apply conditional format for specific time period
    Dim conditionalFormats As IConditionalFormats = worksheet.UsedRange.ConditionalFormats
    Dim conditionalFormat As IConditionalFormat = conditionalFormats.AddCondition()

    'Set the format type to 'TimePeriod' to apply time-based conditional formatting
    conditionalFormat.FormatType = ExcelCFType.TimePeriod
    conditionalFormat.TimePeriodType = CFTimePeriods.Today

    'Set the background color of the matching cells
    conditionalFormat.BackColor = ExcelKnownColors.Sky_blue

    'Save the workbook
    workbook.SaveAs("Output.xlsx")
End Using 
{% endhighlight %} 
{% endtabs %}

A complete working example to apply TimePeriod conditional formatting in an Excel is available on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Conditional%20Formatting/.NET/Time%20period).
