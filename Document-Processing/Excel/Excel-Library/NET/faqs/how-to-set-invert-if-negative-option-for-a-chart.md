---
title: Setting Invert If negative option in Chart properties | Syncfusion
description: This page tells how to set invert if negative option for a chart using Syncfusion XlsIO in C# (Cross-platform and Windows-specific) and VB.NET.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set invert if negative option for a chart using XlsIO?


The following code samples demonstrate how to set the "Invert if negative" option for a chart using C# (Cross-platform and Windows-specific) and VB.NET for XLSX files. For XLS (binary) file format, see the section below.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook Initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    IChart chart = worksheet.Charts[0];

    //Used to invert series color if the value is negative
    (chart.Series[0] as ChartSerieImpl).InvertIfNegative = true;

    #region Save
    //Saving the workbook
    workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
    #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook Initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    IChart chart = worksheet.Charts[0];

    //Used to invert series color if the value is negative
    (chart.Series[0] as ChartSerieImpl).InvertIfNegative = true;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim chart As IChart = worksheet.Charts(0)

    'Used to invert series color if the value is negative
    DirectCast(chart.Series(0), ChartSerieImpl).InvertIfNegative = True

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1007137-ChartInvert/FAQ/Chart/.NET/ChartInvertIfNegative">this GitHub page</a>.

# How to set invert if negative option for a chart in XLS (binary) file format?

In case of binary file format (XLS), kindly use the following code snippet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Excel97to2003;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xls");
    IWorksheet worksheet = workbook.Worksheets[0];

    IChart chart = worksheet.Charts[0];

    // Used to invert series color if the value is negative in XLS (binary) format
    chart.Series[0].SerieFormat.Interior.SwapColorsOnNegative = true;

    // Saving the workbook
    workbook.SaveAs("Output.xls");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    #region Workbook Initialization
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplatexlsx.xls");
    IWorksheet worksheet = workbook.Worksheets[0];
    #endregion

    IChart chart = worksheet.Charts[0];

    // Used to invert series color if the value is negative in XLS (binary) format
    chart.Series[0].SerieFormat.Interior.SwapColorsOnNegative = true;

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xls");
    #endregion
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Excel97to2003
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xls")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim chart As IChart = worksheet.Charts(0)

    ' Used to invert series color if the value is negative in XLS (binary) format
    chart.Series(0).SerieFormat.Interior.SwapColorsOnNegative = True

    ' Saving the workbook
    workbook.SaveAs("Output.xls")
End Using
{% endhighlight %}
{% endtabs %}