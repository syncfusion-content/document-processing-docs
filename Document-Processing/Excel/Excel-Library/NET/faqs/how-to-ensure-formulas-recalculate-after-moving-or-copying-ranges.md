---
title: Formulas recalculate after moving or copying ranges | Syncfusion
description: Explains why formulas may not recalculate after moving or copying in XlsIO and how clearing the CalcEngine formula info table forces recalculation.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to ensure formulas recalculate after moving or copying ranges?

When moving or copying a range containing formulas, the formula text may remain unchanged even though dependent cell values change. Since the formula cell itself is not modified, XlsIO's CalcEngine does not automatically recalculate and instead returns the previously stored calculated value.

To force recalculation after move or copy operations, clear the `FormulaInfoTable` from `CalcEngine`. This ensures formulas are reevaluated when their calculated value is accessed.

The following code example demonstrates the required workaround.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Set up sample data
    worksheet["A1"].Value2 = 10;
    worksheet["A2"].Value2 = 20;
    worksheet["A3"].Value2 = 30;

    // Create formulas
    worksheet["B1"].Formula = "=A1*2";
    worksheet["B2"].Formula = "=A2*2";
    worksheet["B3"].Formula = "=A3*2";

    // Move range B1:B3 to C1:C3
    worksheet["B1:B3"].MoveTo(worksheet["C1:C3"]);

    // Clear the formula info table to ensure dependent formulas recalculate
    worksheet.CalcEngine.FormulaInfoTable.Clear();

    // Now the formulas will recalculate correctly when their values are accessed
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016;
    IWorkbook workbook = excelEngine.Excel.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    worksheet["A1"].Value2 = 10;
    worksheet["A2"].Value2 = 20;
    worksheet["A3"].Value2 = 30;

    worksheet["B1"].Formula = "=A1*2";
    worksheet["B2"].Formula = "=A2*2";
    worksheet["B3"].Formula = "=A3*2";

    worksheet.EnableSheetCalculations();
    // Move the range
    worksheet["B1:B3"].MoveTo(worksheet["C1:C3"]);

    // Clear formula cache to force recalculation
    worksheet.CalcEngine.FormulaInfoTable.Clear();

    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    excelEngine.Excel.DefaultVersion = ExcelVersion.Excel2016
    Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    worksheet("A1").Value2 = 10
    worksheet("A2").Value2 = 20
    worksheet("A3").Value2 = 30

    worksheet("B1").Formula = "=A1*2"
    worksheet("B2").Formula = "=A2*2"
    worksheet("B3").Formula = "=A3*2"

    worksheet.EnableSheetCalculations()
    ' Move the range
    worksheet("B1:B3").MoveTo(worksheet("C1:C3"))

    ' Clear formula cache to force recalculation
    worksheet.CalcEngine.FormulaInfoTable.Clear()

    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/1017887-Recalculation/FAQ/Formula%20Recalculation/.NET/Formula%20Recalculation">this GitHub page</a>.
