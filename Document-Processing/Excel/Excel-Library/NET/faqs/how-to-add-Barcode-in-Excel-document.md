---
title: How to add a barcode image to an Excel document using C# | Syncfusion
description: Code example to add barcode images to an Excel document using the Syncfusion .NET Excel Library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to add a barcode image to an Excel document using C#?

You can embed barcode images (PNG, JPEG, BMP, and other formats supported by Excel) into an Excel worksheet by calling [Pictures.AddPicture](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictures.html#Syncfusion_XlsIO_IPictures_AddPicture_System_Int32_System_Int32_System_IO_Stream_) on the worksheet's [IPictures](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictures.html) collection. XlsIO does not generate the barcode itself — you supply the image and XlsIO places it at the requested row and column anchor.

The following code example creates a workbook and inserts two barcode images at four locations in the first worksheet. Three variants are shown: a C# cross-platform sample that loads images from a `FileStream`, a C# Windows-specific sample that loads images by file path, and a VB.NET Windows-specific sample that uses a multi-line `Using` block.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.XlsIO.WinForms** NuGet package (for Windows) or the **Syncfusion.XlsIO.Net.Core** package (for .NET Core / .NET 6+ cross-platform targets).
- Add the required `using` directives: `using Syncfusion.XlsIO;` and `using System.IO;` (or `Imports Syncfusion.XlsIO` and `Imports System.IO` in VB.NET).
- The cross-platform C# sample expects `Barcode1.png` and `Barcode2.png` in the application's working directory.
- The Windows-specific C# sample expects `../../Images/Barcode1.png` and `../../Images/Barcode2.png` to exist relative to the working directory.
- The VB.NET sample expects `Images/Barcode1.png` and `Images/Barcode2.png` in the working directory.
- All samples create a new workbook with `Workbooks.Create(1)`, so no input Excel file is required.

## Code example
{% tabs %} 
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Barcode/.NET/Add%20Barcode/Barcode/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Load barcodes from local files
    FileStream barcode1 = new FileStream("Barcode1.png", FileMode.Open, FileAccess.Read);
    FileStream barcode2 = new FileStream("Barcode2.png", FileMode.Open, FileAccess.Read);
    worksheet.Pictures.AddPicture(1, 1, barcode1);
    worksheet.Pictures.AddPicture(15, 1, barcode2);
    worksheet.Pictures.AddPicture(1, 10, barcode1);
    worksheet.Pictures.AddPicture(15, 10, barcode2);

    // Save to file system
    workbook.SaveAs("Output.xlsx");
    workbook.Close();
    excelEngine.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Excel2013;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    // Load barcode images from disk 
    string imagePath1 = "../../Images/Barcode1.png";
    string imagePath2 = "../../Images/Barcode2.png";

    // Add barcodes at various locations without using FileStream
    worksheet.Pictures.AddPicture(1, 1, imagePath1);
    worksheet.Pictures.AddPicture(15, 1, imagePath2);
    worksheet.Pictures.AddPicture(1, 10, imagePath1);
    worksheet.Pictures.AddPicture(15, 10, imagePath2);

    //Save the output file
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Excel2013
    Dim workbook As IWorkbook = application.Workbooks.Create(1)
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Load barcode images from local files
    Using barcode1 As New FileStream("Images/Barcode1.png", FileMode.Open, FileAccess.Read),
          barcode2 As New FileStream("Images/Barcode2.png", FileMode.Open, FileAccess.Read)
        worksheet.Pictures.AddPicture(1, 1, barcode1)
        worksheet.Pictures.AddPicture(15, 1, barcode2)
        worksheet.Pictures.AddPicture(1, 10, barcode1)
        worksheet.Pictures.AddPicture(15, 10, barcode2)

        ' Save the output file
        Dim outputPath As String = "Output/Output.xlsx"
        workbook.SaveAs(outputPath)
    End Using
End Using
{% endhighlight %}
{% endtabs %}

## See also

- [How to insert a picture into a cell in an Excel document](how-to-insert-a-picture-into-a-cell-in-an-excel-document.md)
- [How to align the image inside the cell](how-to-align-the-image-inside-the-cell.md)
- [How to extract and save images from the worksheet](how-to-extract-and-save-images-from-the-worksheet.md)   

