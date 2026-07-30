---
title: How to apply rotation, flip, and transparency to a background image? | XlsIO | Syncfusion
description: Explains how to rotate, flip, and make a background image transparent in XlsIO using System.Drawing as a workaround.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply rotation and transparency to background image?

Syncfusion<sup>&reg;</sup> XlsIO does not expose rotation, flip, or transparency properties on the [`IPageSetup.BackgroundImage`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html) property. However, you can achieve the same effect by transforming the image with the .NET `System.Drawing` API (or `Syncfusion.Drawing` on non-Windows platforms) and then assigning the modified image back to the page setup. The result is visible on the page background of every printed page, page break preview, and the on-screen page-break view.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Install the [System.Drawing.Common](https://www.nuget.org/packages/System.Drawing.Common) NuGet package (required on .NET 6+; on .NET Framework it ships with the framework).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `Sample.xlsx` whose first sheet will receive the background image, and an `image.png` in the working directory. The sample writes a new `image_M.png` and a new `Output.xlsx` next to the input files.
* Ensure the working directory is writable; both `image_M.png` and `Output.xlsx` are created/overwritten on save.

## Rotate, flip, and apply transparency to the background image

The flow is: load the workbook, open the source image, create a `Bitmap`, rotate it 90° with `RotateFlip`, make a single color transparent with `MakeTransparent`, save the modified bitmap to a temporary file, stream it back through `Syncfusion.Drawing.Image.FromStream`, and assign it to `PageSetup.BackgroundImage`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using Syncfusion.XlsIO;
using Syncfusion.Drawing;

class Program
{
  static void Main()
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
      IWorksheet worksheet = workbook.Worksheets[0];

      //Load the source image; both Image and Bitmap implement IDisposable
      using (Image image = Image.FromFile("image.png"))
      using (Bitmap bitmap = new Bitmap(image))
      {
        //Rotate 90° clockwise (no flip). Other options include
        //Rotate180FlipNone, Rotate270FlipNone, and the *FlipX/*FlipY variants
        bitmap.RotateFlip(RotateFlipType.Rotate90FlipNone);

        //Make one specific color transparent. Use the parameterless overload
        //to use the first pixel as the key color.
        bitmap.MakeTransparent(Color.Black);

        bitmap.Save("image_M.png", ImageFormat.Png);
      }

      //Stream the saved bitmap into a Syncfusion.Drawing.Image for assignment
      using (FileStream imageStream = new FileStream("image_M.png", FileMode.Open, FileAccess.Read))
      {
        worksheet.PageSetup.BackgroundImage = Image.FromStream(imageStream);
      }

      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using Syncfusion.XlsIO;

class Program
{
  static void Main()
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
      IWorksheet worksheet = workbook.Worksheets[0];

      //Load the source image; both Image and Bitmap implement IDisposable
      using (Image image = Image.FromFile("image.png"))
      using (Bitmap bitmap = new Bitmap(image))
      {
        //Rotate 90° clockwise (no flip)
        bitmap.RotateFlip(RotateFlipType.Rotate90FlipNone);

        //Make one specific color transparent
        bitmap.MakeTransparent(Color.Black);

        bitmap.Save("image_M.png", ImageFormat.Png);
      }

      //Stream the saved bitmap back in and assign to the page background
      using (FileStream imageStream = new FileStream("image_M.png", FileMode.Open, FileAccess.Read))
      {
        worksheet.PageSetup.BackgroundImage = new Bitmap(Image.FromStream(imageStream));
      }

      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports System.Drawing
Imports System.Drawing.Imaging
Imports System.IO
Imports Syncfusion.XlsIO
Imports Syncfusion.Drawing

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic)
      Dim worksheet As IWorksheet = workbook.Worksheets(0)

      'Load the source image; both Image and Bitmap implement IDisposable
      Using image As Image = Image.FromFile("image.png")
        Using bitmap As New Bitmap(image)
          'Rotate 90° clockwise (no flip)
          bitmap.RotateFlip(RotateFlipType.Rotate90FlipNone)

          'Make one specific color transparent
          bitmap.MakeTransparent(Color.Black)

          bitmap.Save("image_M.png", ImageFormat.Png)
        End Using
      End Using

      'Stream the saved bitmap into a Syncfusion.Drawing.Image for assignment
      Using imageStream As New FileStream("image_M.png", FileMode.Open, FileAccess.Read)
        worksheet.PageSetup.BackgroundImage = Syncfusion.Drawing.Image.FromStream(imageStream)
      End Using

      workbook.SaveAs("Output.xlsx")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to set a worksheet page background image in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-worksheet-background-image)
* [Page setup options in XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel#page-setup)
* [IPageSetup API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPageSetup.html)
