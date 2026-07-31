---
title: How to apply TimePeriod conditional formatting in Excel | Syncfusion 
description: Code example to apply TimePeriod-based conditional formatting in an Excel document using .NET Excel Library. 
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply TimePeriod conditional formatting in Excel using C#?

You can apply TimePeriod-based conditional formatting in an Excel worksheet using the IConditionalFormats interface. 

The following examples show how to highlight cells that match specific time periods in C# (cross-platform and Windows-specific) and VB.NET.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;` and (for the cross-platform sample) `using System.IO;` (or `Imports Syncfusion.XlsIO` in VB.NET).
- The cross-platform C# sample expects the input file at `Data/Input.xlsx` relative to the working directory and writes the output to `Output/Output.xlsx`.
- The Windows-specific C# and VB.NET samples read `Input.xlsx` from and write `Output.xlsx` to the current working directory.

## Code example

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

A complete working example to apply TimePeriod conditional formatting in an Excel workbook is available on [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Conditional%20Formatting/.NET/Time%20period).

## See also

- [How to set traffic-light icons in Excel conditional formatting using C#](how-to-set-traffic-lights-icon-in-Excel-conditional-formatting.md)
- [Does XlsIO support changing the colors of built-in icon sets](does-xlsio-support-changing-the-colors-of-built-in-icon-sets.md)
- [How to convert text-formatted date values to DateTime in Excel](how-to-convert-text-formatted-date-values-to-datetime-in-excel.md)
