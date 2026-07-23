---
title: Wrap Text in Excel | Syncfusion
description: Explains with an example on how to apply wrap text in Excel that allows to fit a long text in a single cell using Interop and XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply Wrap Text in Excel

When text is too long for the width of a cell, the lengthy text will spill over into the cell to its right when that cell is empty. If the cell to the right is occupied, only a portion of the lengthy text appears. Wrapping text in Excel is a key feature that allows you to fit long text in a single cell.

The following code shows the comparison of some lengthy text in a cell with and without wrapping using Interop and XlsIO for .NET.

## Interop

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void WrapText()
{
    //Instantiate the application object
    var excelApp = new Microsoft.Office.Interop.Excel.Application();

    //Add a workbook
    Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

    //Get the first sheet
    Worksheet sheet = (Worksheet)workbook.Sheets["Sheet1"];

    //Place some text in cell A1 without wrapping
    Microsoft.Office.Interop.Excel.Range cellA1 = sheet.Cells.get_Range("A1");
    cellA1.Value = "Sample Text Unwrapped";

    //Place some text in cell A2 with wrapping
    Microsoft.Office.Interop.Excel.Range cellA2 = sheet.Cells.get_Range("A2");
    cellA2.Value = "Sample Text Wrapped";
    cellA2.WrapText = true;

    //Save the Excel file
    workbook.SaveCopyAs("InteropOutput_WrapText.xlsx");

    //Quit the application
    excelApp.Quit();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void WrapText()
{
  //Instantiate the application object
  var excelApp = new Microsoft.Office.Interop.Excel.Application();

  //Add a workbook
  Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

  //Get the first sheet
  Worksheet sheet = workbook.Sheets["Sheet1"];

  //Place some text in cell A1 without wrapping
  Microsoft.Office.Interop.Excel.Range cellA1 = sheet.Cells.get_Range("A1");
  cellA1.Value = "Sample Text Unwrapped";

  //Place some text in cell A2 with wrapping
  Microsoft.Office.Interop.Excel.Range cellA2 = sheet.Cells.get_Range("A2");
  cellA2.Value = "Sample Text Wrapped";
  cellA2.WrapText = true;

  //Save the Excel file
  workbook.SaveCopyAs("InteropOutput_WrapText.xlsx");

  //Quit the application
  excelApp.Quit();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub WrapText()
  'Instantiate the application object
  Dim excelApp = New Microsoft.Office.Interop.Excel.Application()

  'Add a workbook
  Dim workbook As Workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value)

  'Get the first sheet
  Dim sheet As Worksheet = workbook.Sheets("Sheet1")

  'Place some text in cell A1 without wrapping
  Dim cellA1 As Microsoft.Office.Interop.Excel.Range = sheet.Cells.Range("A1")
  cellA1.Value = "Sample Text Unwrapped"

  'Place some text in cell A2 with wrapping
  Dim cellA2 As Microsoft.Office.Interop.Excel.Range = sheet.Cells.Range("A2")
  cellA2.Value = "Sample Text Wrapped"
  cellA2.WrapText = True

  'Save the Excel file
  workbook.SaveCopyAs("InteropOutput_WrapText.xlsx")

  'Quit the application
  excelApp.Quit()
End Sub
{% endhighlight %}
{% endtabs %}

## XlsIO

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void WrapText()
{
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
        //Instantiate the application object
        IApplication application = excelEngine.Excel;

        //Create a workbook
        IWorkbook workbook = application.Workbooks.Create(1);

        //Get the first sheet
        IWorksheet worksheet = workbook.Worksheets[0];

        //Place some text in cell A1 without wrapping
        worksheet.SetValue(1, 1, "Sample Text Unwrapped");

        //Place some text in cell A2 with wrapping
        worksheet.SetValue(2, 1, "Sample Text Wrapped");
        worksheet[2, 1].WrapText = true;

        //Save the workbook
        workbook.SaveAs("XlsIOOutput_WrapText.xlsx");
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void WrapText()
{
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
        //Instantiate the application object
        IApplication application = excelEngine.Excel;

        //Create a workbook
        IWorkbook workbook = application.Workbooks.Create(1);

        //Get the first sheet
        IWorksheet worksheet = workbook.Worksheets[0];

        //Place some text in cell A1 without wrapping
        worksheet.SetValue(1, 1, "Sample Text Unwrapped");

        //Place some text in cell A2 with wrapping
        worksheet.SetValue(2, 1, "Sample Text Wrapped");
        worksheet[2, 1].WrapText = true;

        //Save the workbook
        workbook.SaveAs("XlsIOOutput_WrapText.xlsx");
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub WrapText()
  Using excelEngine As ExcelEngine = New ExcelEngine()
    'Instantiate the application object
    Dim application As IApplication = excelEngine.Excel

    'Create a workbook
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    'Get the first sheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Place some text in cell A1 without wrapping
    worksheet.SetValue(1, 1, "Sample Text Unwrapped")

    'Place some text in cell A2 with wrapping
    worksheet.SetValue(2, 1, "Sample Text Wrapped")
    worksheet(2,1).WrapText = True

    'Save as Excel file
    workbook.SaveAs("XlsIOOutput_WrapText.xlsx")
  End Using
End Sub
{% endhighlight %}
{% endtabs %}

## See also

- [Wrap text in XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-formatting#wrap-text)
- [Syncfusion XlsIO overview](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview)
- [Licensing requirements](https://help.syncfusion.com/document-processing/licensing/overview)
