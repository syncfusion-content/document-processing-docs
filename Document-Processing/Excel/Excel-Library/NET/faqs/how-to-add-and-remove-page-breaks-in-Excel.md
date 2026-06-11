---
title: How to add and remove page breaks in a worksheet | Syncfusion
description: This page shows how to add and remove page breaks in a worksheet using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to add and remove page breaks in a worksheet?

Page breaks in Excel separate large datasets into different pages for better organization. You can add or remove horizontal page breaks using [HPageBreaks](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_HPageBreaks) and vertical page breaks using [VPageBreaks](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_VPageBreaks) with the IWorksheet interface.

The following code example illustrates how to add or remove page breaks in a worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Adding text to a worksheet range
    worksheet.Range["A1:J15"].Text = "Text";

    //Adding horizontal page breaks in the worksheet
    worksheet.HPageBreaks.Add(worksheet.Range["A5"]);
    worksheet.HPageBreaks.Add(worksheet.Range["C10"]);

    //Adding vertical page breaks in the worksheet
    worksheet.VPageBreaks.Add(worksheet.Range["B5"]);
    worksheet.VPageBreaks.Add(worksheet.Range["D10"]);

    //Removing vertical page break
    worksheet.VPageBreaks.Remove(worksheet.Range["D10"]);

    //Setting sheet view to see the page breaks
    worksheet.View = SheetView.PageBreakPreview;

    //Saving the workbook 
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    //Adding text to a worksheet range
    worksheet.Range["A1:J15"].Text = "Text";

    //Adding horizontal page breaks in the worksheet
    worksheet.HPageBreaks.Add(worksheet.Range["A5"]);
    worksheet.HPageBreaks.Add(worksheet.Range["C10"]);

    //Adding vertical page breaks in the worksheet
    worksheet.VPageBreaks.Add(worksheet.Range["B5"]);
    worksheet.VPageBreaks.Add(worksheet.Range["D10"]);

    //Removing vertical page break
    worksheet.VPageBreaks.Remove(worksheet.Range["D10"]);

    //Setting sheet view to see the page breaks
    worksheet.View = SheetView.PageBreakPreview;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Adding text to a worksheet range
    worksheet.Range("A1:J15").Text = "Text"

    'Adding horizontal page breaks in the worksheet
    worksheet.HPageBreaks.Add(worksheet.Range("A5"))
    worksheet.HPageBreaks.Add(worksheet.Range("C10"))

    'Adding vertical page breaks in the worksheet
    worksheet.VPageBreaks.Add(worksheet.Range("B5"))
    worksheet.VPageBreaks.Add(worksheet.Range("D10"))

    'Removing vertical page break
    worksheet.VPageBreaks.Remove(worksheet.Range("D10"))

    'Setting sheet view to see the page breaks
    worksheet.View = SheetView.PageBreakPreview

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}