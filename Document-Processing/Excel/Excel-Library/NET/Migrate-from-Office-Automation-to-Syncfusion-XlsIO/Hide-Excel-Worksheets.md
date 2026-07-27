---
title: Hide Excel Worksheets | Syncfusion
description: This documentation explains with an example on how to hide Excel worksheets programmatically using Interop and XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Hide Excel Worksheets

You can hide any sheet in a workbook so that users cannot see it when they open the workbook. However, you must always leave at least one sheet visible.
A sheet can be visible, hidden, or very hidden.

* A visible sheet's tab appears at the bottom of the Excel window, allowing users to click the tab to navigate to the sheet. By default, all new sheets are visible.
* If a sheet is hidden, the sheet's tab will disappear. Formulas can still retrieve values stored on a hidden sheet; it simply disappears from the user interface.
* The difference between a hidden sheet and a very hidden sheet is that very hidden sheets do not appear in the **Unhide** dialog box.

The following code shows how to hide Excel worksheets with Interop and XlsIO for .NET.

## Interop

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void HideWorksheet()
{
    //Instantiate the application object
    var excelApp = new Microsoft.Office.Interop.Excel.Application();

    //Add a workbook
    Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

    //Add a worksheet to the workbook
    Worksheet newWorksheet = (Worksheet)excelApp.Worksheets.Add(Missing.Value, Missing.Value, Missing.Value, Missing.Value);

    //Get the first sheet
    Worksheet worksheet = (Worksheet)workbook.Sheets["Sheet1"];

    //Hide the worksheet
    worksheet.Visible = XlSheetVisibility.xlSheetHidden;

    //Save the file
    workbook.SaveAs("InteropOutput_HiddenWorksheet.xlsx");

    //Quit the application
    excelApp.Quit();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void HideWorksheet()
{
  //Instantiate the application object
  var excelApp = new Microsoft.Office.Interop.Excel.Application();

  //Add a workbook
  Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

  //Add a worksheet to the workbook
  Worksheet newWorksheet = excelApp.Worksheets.Add(Missing.Value, Missing.Value, Missing.Value, Missing.Value);

  //Get the first sheet
  Worksheet worksheet = (Worksheet)workbook.Sheets["Sheet1"];

  //Hide the worksheet
  worksheet.Visible = XlSheetVisibility.xlSheetHidden;

  //Save the file
  workbook.SaveAs("InteropOutput_HiddenWorksheet.xlsx");

  //Quit the application
  excelApp.Quit();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub HideWorksheet()
  'Instantiate the application object
  Dim excelApp = New Microsoft.Office.Interop.Excel.Application()

  'Add a workbook
  Dim workbook As Workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value)

  'Add a worksheet to the workbook
  Dim newWorksheet As Worksheet = excelApp.Worksheets.Add(Missing.Value, Missing.Value, Missing.Value, Missing.Value)

  'Get the first sheet
  Dim worksheet As Worksheet = workbook.Sheets("Sheet1")

  'Hide the worksheet
  worksheet.Visible = XlSheetVisibility.xlSheetHidden

  'Save the file
  workbook.SaveAs("InteropOutput_HiddenWorksheet.xlsx")

  'Quit the application
  excelApp.Quit()
End Sub
{% endhighlight %}
{% endtabs %}

## XlsIO

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void HideWorksheet()
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    //Instantiate the application object
    IApplication application = excelEngine.Excel;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);

    //Add a worksheet to the workbook
    IWorksheet newWorksheet = workbook.Worksheets.Create();

    //Get the first sheet
    IWorksheet worksheet = workbook.Worksheets[0];

    //Hide the worksheet
    worksheet.Visibility = WorksheetVisibility.Hidden;

    //Save the workbook
    workbook.SaveAs("XlsIOOutput_HiddenWorksheet.xlsx");
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void HideWorksheet()
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    //Instantiate the application object
    IApplication application = excelEngine.Excel;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);

    //Add a worksheet to the workbook
    IWorksheet newWorksheet = workbook.Worksheets.Create();

    //Get the first sheet
    IWorksheet worksheet = workbook.Worksheets[0];

    //Hide the worksheet
    worksheet.Visibility = WorksheetVisibility.Hidden;

    //Save the workbook
    workbook.SaveAs("XlsIOOutput_HiddenWorksheet.xlsx");
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub HideWorksheet()
  Using excelEngine As ExcelEngine = New ExcelEngine()
    'Instantiate the application object
    Dim application As IApplication = excelEngine.Excel

    'Create a workbook
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    'Add a worksheet to the workbook
    Dim newWorksheet As IWorksheet = workbook.Worksheets.Create()

    'Get the first sheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Hide the worksheet
    worksheet.Visibility = WorksheetVisibility.Hidden

    'Save the workbook
    workbook.SaveAs("XlsIOOutput_HiddenWorksheet.xlsx")
  End Using
End Sub
{% endhighlight %}
{% endtabs %}
