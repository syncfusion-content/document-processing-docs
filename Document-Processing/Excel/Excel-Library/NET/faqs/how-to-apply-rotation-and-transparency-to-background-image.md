---
title: How to set rotation and transparency to background images | Syncfusion
description: This page explains how to apply rotation and transparency to background image using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply rotation and transparency to background image?

Syncfusion&reg; XlsIO do not have direct support to apply rotation and transparency to background image. But this can be achieved through below workaround.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //Load an existing Excel file into IWorkbook
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  System.Drawing.Image image = System.Drawing.Image.FromFile("image.png");
  Bitmap bitmap = new Bitmap(image);

  //Rotate the image
  bitmap.RotateFlip(System.Drawing.RotateFlipType.Rotate90FlipNone);

  //Apply transparency
  bitmap.MakeTransparent(System.Drawing.Color.Black);

  bitmap.Save("image_M.png", ImageFormat.Png);

  FileStream imageStream = new FileStream("image_M.png", FileMode.Open, FileAccess.Read);
  worksheet.PageSetup.BackgoundImage = Syncfusion.Drawing.Image.FromStream(imageStream);

  #region Save
  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
  #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    //Load an existing Excel file into IWorkbook
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    System.Drawing.Image image = System.Drawing.Image.FromFile("image.png");
    Bitmap bitmap = new Bitmap(image);

    //Rotate the image
    bitmap.RotateFlip(System.Drawing.RotateFlipType.Rotate90FlipNone);

    //Apply transparency
    bitmap.MakeTransparent(System.Drawing.Color.Black);

    bitmap.Save("image_M.png", ImageFormat.Png);

    FileStream imageStream = new FileStream("image_M.png", FileMode.Open, FileAccess.Read);
    worksheet.PageSetup.BackgoundImage = (Bitmap)Image.FromStream(imageStream);

    #region Save
    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
    #endregion
}
{% endhighlight %}
{% highlight c# tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel

    'Load an existing Excel file into IWorkbook
    Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    Dim image As System.Drawing.Image = System.Drawing.Image.FromFile("image.png")
    Dim bitmap As New Bitmap(image)

    'Rotate the image
    bitmap.RotateFlip(System.Drawing.RotateFlipType.Rotate90FlipNone)

    'Apply transparency
    bitmap.MakeTransparent(System.Drawing.Color.Black)

    bitmap.Save("image_M.png", ImageFormat.Png)

    Dim imageStream As New FileStream("image_M.png", FileMode.Open, FileAccess.Read)
    Dim sfBitmap As New Syncfusion.Drawing.Image(imageStream)

    worksheet.PageSetup.BackgoundImage = sfBitmap

    '#Region "Save"
    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
    '#End Region
End Using
{% endhighlight %}
{% endtabs %}
