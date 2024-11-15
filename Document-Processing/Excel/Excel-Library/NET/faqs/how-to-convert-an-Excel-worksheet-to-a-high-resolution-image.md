---
title: How to convert an worksheet to a high-resolution image | Syncfusion
description: This page shows how to convert an Excel worksheet to a high-resolution image using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert an Excel worksheet to a high-resolution image?

Essential XlsIO allows you to convert an Excel worksheet to a high-resolution image. This can be achieved by converting the worksheet to a Metafile and then resetting the resolution using a custom ResetResolution method.

The following code example illustrates how to convert an Excel worksheet to a high-resolution image.

{% tabs %}  
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Excel2013;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Convert the worksheet to EMF
    Image image = worksheet.ConvertToImage(1, 1, 22, 9,
    ImageType.Metafile, null);

    //Reset the resolution of the image
    image = ResetResolution(image as Metafile, 300);

    //Save the image
    image.Save("Output.jpg", ImageFormat.Jpeg);
}

//Helper method to reset the resolution of the image
private static Bitmap ResetResolution(Image metaFile, float resolution)
{
    int newWidth = (int)(metaFile.Width * resolution / metaFile.HorizontalResolution);
    int newHeight = (int)(metaFile.Height * resolution / metaFile.VerticalResolution);
    Bitmap bitmap = new Bitmap(newWidth, newHeight);
    bitmap.SetResolution(resolution, resolution);
    Graphics graphics = Graphics.FromImage(bitmap);
    graphics.DrawImage(metaFile, 0, 0);
    graphics.Dispose();
    return bitmap;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("WorkSheetToImage.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Convert worksheet to EMF
  Dim image As Image = worksheet.ConvertToImage(1, 1, lastRow, lastColumn, 
  ImageType.Metafile, Nothing)

  'Reset the resolution of the image
  image = ResetResolution(CType(image,Metafile), 300)
  
  'Save the image
  image.Save("Output.jpg", ImageFormat.Jpeg)
End Using

'Helper method to reset the resolution of the image
Private Function ResetResolution(ByVal metaFile As Image, 
ByVal resolution As Single) As Bitmap

   Dim newWidth As Integer = CType((metaFile.Width        
   * (resolution / metaFile.HorizontalResolution)),Integer)
   Dim newHeight As Integer = CType((metaFile.Height
   * (resolution / metaFile.VerticalResolution)),Integer)
   Dim bitmap As Bitmap = New Bitmap(newWidth, newHeight)
   bitmap.SetResolution(resolution, resolution)
   Dim graphics As Graphics = Graphics.FromImage(bitmap)
   graphics.DrawImage(metaFile, 0, 0)
   graphics.Dispose
   Return bitmap
End Function
{% endhighlight %}
{% endtabs %}