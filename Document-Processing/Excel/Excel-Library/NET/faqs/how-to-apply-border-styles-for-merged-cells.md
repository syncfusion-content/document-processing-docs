---
title: Apply border styles to merged cells in Excel | XlsIO
description: Learn how to apply border styles to merged cells in Excel using the Syncfusion .NET Excel (XlsIO) library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply border styles for merged cells?

As per the MS Excel UI Behavior, while applying the styles to the single cell in the merged region, then it will apply only to that single cell. So please use the **MergeArea** property to apply the styles to the entire merged region.

The following examples show how to apply border styles for merged cells in C# (cross-platform and Windows-specific) and VB.NET.

{% tabs %}                                          
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Border%20styles%20for%20merged%20cells/.NET/Borderstylesformergedcells/Borderstylesformergedcells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../../Data/Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    # region Creating a new style
    IStyle style = workbook.Styles.Add("NewStyle");

    style.Borders[ExcelBordersIndex.EdgeLeft].LineStyle = ExcelLineStyle.Thick;
    style.Borders[ExcelBordersIndex.EdgeRight].LineStyle = ExcelLineStyle.Thick;
    style.Borders[ExcelBordersIndex.EdgeTop].LineStyle = ExcelLineStyle.Thick;
    style.Borders[ExcelBordersIndex.EdgeBottom].LineStyle = ExcelLineStyle.Thick;
    style.Borders.Color = ExcelKnownColors.Red;

    style.Font.Bold = true;
    style.Font.Color = ExcelKnownColors.Green;
    style.Font.Size = 24;
    #endregion

    //Applying style for merged region
    worksheet.Range[2, 1].MergeArea.CellStyle = style;

    workbook.SaveAs("../../../Output/MergeArea_Style.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/Input.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    # region Creating a new style
    IStyle style = workbook.Styles.Add("NewStyle");
    
    style.Borders[ExcelBordersIndex.EdgeLeft].LineStyle = ExcelLineStyle.Thick;
    style.Borders[ExcelBordersIndex.EdgeRight].LineStyle = ExcelLineStyle.Thick;
    style.Borders[ExcelBordersIndex.EdgeTop].LineStyle = ExcelLineStyle.Thick;
    style.Borders[ExcelBordersIndex.EdgeBottom].LineStyle = ExcelLineStyle.Thick;
    style.Borders.Color = ExcelKnownColors.Red;

    style.Font.Bold = true;
    style.Font.Color = ExcelKnownColors.Green;
    style.Font.Size = 24;
    #endregion

    //Applying style for merged region
    worksheet.Range[2,1].MergeArea.CellStyle = style;
   
    workbook.SaveAs("../../Output/MergeArea_Style.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
 Using excelEngine As New ExcelEngine()
     Dim application As IApplication = excelEngine.Excel
     application.DefaultVersion = ExcelVersion.Xlsx

     Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/Input.xlsx")
     Dim worksheet As IWorksheet = workbook.Worksheets(0)

     ' Creating a new style
     Dim style As IStyle = workbook.Styles.Add("NewStyle")
     style.Borders(ExcelBordersIndex.EdgeLeft).LineStyle = ExcelLineStyle.Thick
     style.Borders(ExcelBordersIndex.EdgeRight).LineStyle = ExcelLineStyle.Thick
     style.Borders(ExcelBordersIndex.EdgeTop).LineStyle = ExcelLineStyle.Thick
     style.Borders(ExcelBordersIndex.EdgeBottom).LineStyle = ExcelLineStyle.Thick
     style.Borders.Color = ExcelKnownColors.Red
     style.Font.Bold = True
     style.Font.Color = ExcelKnownColors.Green
     style.Font.Size = 24

     ' Applying style for merged region
     worksheet.Range(2, 1).MergeArea.CellStyle = style

     workbook.SaveAs("../../Output/MergeArea_Style.xlsx")
 End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply border styles for merged cells using C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Border%20styles%20for%20merged%20cells/.NET/Borderstylesformergedcells">this GitHub page</a>.  
