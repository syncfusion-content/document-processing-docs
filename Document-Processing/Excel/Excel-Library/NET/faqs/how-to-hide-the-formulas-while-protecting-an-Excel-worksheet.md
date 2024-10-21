---
title: How to hide the formulas while protecting an Excel worksheet | Syncfusion
description: This page shows how to hide the formulas while protecting an Excel worksheet using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to hide the formulas while protecting an Excel worksheet?

Any important formulas in a worksheet can be hidden when protecting the worksheet. In XlsIO, formulas hiding can be achieved by setting the [FormulaHidden](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_FormulaHidden) property of the [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) interface to true. Once this property is enabled and the worksheet is protected, the formulas in the specified cells will not be visible in the formula bar.

The following code illustrates how to hide a formulas while protecting the worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Set data to worksheet
    sheet.Range["A1"].Text = "Product";
    sheet.Range["B1"].Text = "Rate";
    sheet.Range["C1"].Text = "Quantity";
    sheet.Range["D1"].Text = "Amount";

    sheet.Range["A2"].Text = "Item1";
    sheet.Range["A3"].Text = "Item2";
    sheet.Range["A4"].Text = "Item3";
    sheet.Range["A5"].Text = "Item4";

    sheet.Range["B2"].Number = 70;
    sheet.Range["B3"].Number = 100;
    sheet.Range["B4"].Number = 50;
    sheet.Range["B5"].Number = 80;

    sheet.Range["C2"].Number = 8;
    sheet.Range["C3"].Number = 5;
    sheet.Range["C4"].Number = 12;
    sheet.Range["C5"].Number = 9;

    //Enabling sheet calculations
    sheet.EnableSheetCalculations();

    //Set formulas to calculate amount
    sheet.Range["D2"].Formula = "=(B2*C2)";
    sheet.Range["D3"].Formula = "=(B3*C3)";
    sheet.Range["D4"].Formula = "=(B4*C4)";
    sheet.Range["D5"].Formula = "=(B5*C5)";
    sheet.Range["A6"].Text = "Total";
    sheet.Range["D6"].Formula = "=SUM(D2:D5)";

    //Disabling sheet calculations
    sheet.DisableSheetCalculations();

    //Protect the worksheet with a password
    sheet.Protect("password");

    //Hide formulas in protected worksheet
    sheet.UsedRange.FormulaHidden = true;

    //Saving the workbook as stream
    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.ReadWrite);
    workbook.SaveAs(outputStream);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet sheet = workbook.Worksheets[0];

    //Set data to worksheet
    sheet.Range["A1"].Text = "Product";
    sheet.Range["B1"].Text = "Rate";
    sheet.Range["C1"].Text = "Quantity";
    sheet.Range["D1"].Text = "Amount";

    sheet.Range["A2"].Text = "Item1";
    sheet.Range["A3"].Text = "Item2";
    sheet.Range["A4"].Text = "Item3";
    sheet.Range["A5"].Text = "Item4";

    sheet.Range["B2"].Number = 70;
    sheet.Range["B3"].Number = 100;
    sheet.Range["B4"].Number = 50;
    sheet.Range["B5"].Number = 80;

    sheet.Range["C2"].Number = 8;
    sheet.Range["C3"].Number = 5;
    sheet.Range["C4"].Number = 12;
    sheet.Range["C5"].Number = 9;

    //Enabling sheet calculations
    sheet.EnableSheetCalculations();

    //Set formulas to calculate amount
    sheet.Range["D2"].Formula = "=(B2*C2)";
    sheet.Range["D3"].Formula = "=(B3*C3)";
    sheet.Range["D4"].Formula = "=(B4*C4)";
    sheet.Range["D5"].Formula = "=(B5*C5)";
    sheet.Range["A6"].Text = "Total";
    sheet.Range["D6"].Formula = "=SUM(D2:D5)";

    //Disabling sheet calculations
    sheet.DisableSheetCalculations();

    //Protect the worksheet with a password
    sheet.Protect("password");

    //Hide formulas in protected worksheet
    sheet.UsedRange.FormulaHidden = true;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim sheet As IWorksheet = workbook.Worksheets(0)

    'Set data to worksheet
    sheet.Range("A1").Text = "Product"
    sheet.Range("B1").Text = "Rate"
    sheet.Range("C1").Text = "Quantity"
    sheet.Range("D1").Text = "Amount"

    sheet.Range("A2").Text = "Item1"
    sheet.Range("A3").Text = "Item2"
    sheet.Range("A4").Text = "Item3"
    sheet.Range("A5").Text = "Item4"

    sheet.Range("B2").Number = 70
    sheet.Range("B3").Number = 100
    sheet.Range("B4").Number = 50
    sheet.Range("B5").Number = 80

    sheet.Range("C2").Number = 8
    sheet.Range("C3").Number = 5
    sheet.Range("C4").Number = 12
    sheet.Range("C5").Number = 9

    'Enabling sheet calculations
    sheet.EnableSheetCalculations()

    'Set formulas to calculate amount
    sheet.Range("D2").Formula = "=(B2*C2)"
    sheet.Range("D3").Formula = "=(B3*C3)"
    sheet.Range("D4").Formula = "=(B4*C4)"
    sheet.Range("D5").Formula = "=(B5*C5)"
    sheet.Range("A6").Text = "Total"
    sheet.Range("D6").Formula = "=SUM(D2:D5)"

    'Disabling sheet calculations
    sheet.DisableSheetCalculations()

    'Protect the worksheet with a password
    sheet.Protect("password")

    'Hide formulas in protected worksheet
    sheet.UsedRange.FormulaHidden = True

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}