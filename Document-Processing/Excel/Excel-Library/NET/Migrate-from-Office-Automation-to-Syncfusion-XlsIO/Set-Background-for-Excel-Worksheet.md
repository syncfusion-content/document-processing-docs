---
title: Set Background for Excel Worksheet | Syncfusion
description: Explains with an example on how to set background for Excel Worksheet with a single image to be tiled to fill the whole screen using Interop and XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Set Background for Excel Worksheet

Adding a picture to the background, either as a watermark of a company's logo or as a relevant image, improves the appearance of the document. When you set a background picture on a worksheet, the picture is tiled to fill the worksheet area.

The following code shows how to set an Excel worksheet background image with Interop and XlsIO for .NET. Ensure the picture you want to use as the background is available on your computer before running this code.

## Interop

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void SetWorksheetBackground()
{
  //Instantiate the application object
  var excelApp = new Microsoft.Office.Interop.Excel.Application();

  //Add a workbook
  Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

  //Get the first sheet
  Worksheet worksheet = (Worksheet)workbook.Sheets["Sheet1"];

  //Set a background picture for the sheet
  worksheet.SetBackgroundPicture("Syncfusion.png");

  //Save the Excel file
  workbook.SaveCopyAs("InteropOutput_BackgroundPicture.xlsx");

  //Quit the application
  excelApp.Quit();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void SetWorksheetBackground()
{
  //Instantiate the application object
  var excelApp = new Microsoft.Office.Interop.Excel.Application();

  //Add a workbook
  Workbook workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value);

  //Get the first sheet
  Worksheet worksheet = (Worksheet)workbook.Sheets["Sheet1"];

  //Set a background picture for the sheet
  worksheet.SetBackgroundPicture("Syncfusion.png");

  //Save the Excel file
  workbook.SaveCopyAs("InteropOutput_BackgroundPicture.xlsx");

  //Quit the application
  excelApp.Quit();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub SetWorksheetBackground()
  'Instantiate the application object
  Dim excelApp = New Microsoft.Office.Interop.Excel.Application()

  'Add a workbook
  Dim workbook As Workbook = excelApp.Workbooks.Add(System.Reflection.Missing.Value)

  'Get the first sheet
  Dim worksheet As Worksheet = workbook.Sheets("Sheet1")

  'Set a background picture for the sheet
  worksheet.SetBackgroundPicture("Syncfusion.png")

  'Save the file
  workbook.SaveCopyAs("InteropOutput_BackgroundPicture.xlsx")

  'Quit the application
  excelApp.Quit()
End Sub
{% endhighlight %}
{% endtabs %}

## XlsIO

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
private void SetWorksheetBackground()
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    //Instantiate the application object
    IApplication application = excelEngine.Excel;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);

    //Get the first sheet
    IWorksheet worksheet = workbook.Worksheets[0];

    //Set a background picture for the sheet
    using (Bitmap image = new Bitmap("Syncfusion.png"))
    {
      worksheet.PageSetup.BackgroundImage = image;
    }

    //Save the workbook
    workbook.SaveAs("XlsIOOutput_BackgroundPicture.xlsx");
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void SetWorksheetBackground()
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    //Instantiate the application object
    IApplication application = excelEngine.Excel;

    //Create a workbook
    IWorkbook workbook = application.Workbooks.Create(1);

    //Get the first sheet
    IWorksheet worksheet = workbook.Worksheets[0];

    //Set a background picture for the sheet
    using (Bitmap image = new Bitmap("Syncfusion.png"))
    {
      worksheet.PageSetup.BackgroundImage = image;
    }

    //Save the workbook
    workbook.SaveAs("XlsIOOutput_BackgroundPicture.xlsx");
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub SetWorksheetBackground()
  Using excelEngine As ExcelEngine = New ExcelEngine()
    'Instantiate the application object
    Dim application As IApplication = excelEngine.Excel

    'Create a workbook
    Dim workbook As IWorkbook = application.Workbooks.Create(1)

    'Get the first sheet
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Set a background picture for the sheet
    Using image As Bitmap = New Bitmap("Syncfusion.png")
      worksheet.PageSetup.BackgroundImage = image
    End Using

    'Save as Excel file
    workbook.SaveAs("XlsIOOutput_BackgroundPicture.xlsx")
  End Using
End Sub
{% endhighlight %}
{% endtabs %}

## See also

- [Background image in XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-page-setup#background-image)
- [Syncfusion XlsIO overview](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview)
- [Licensing requirements](https://help.syncfusion.com/document-processing/licensing/overview)
