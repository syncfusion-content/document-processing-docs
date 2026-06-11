---
title: How to add Barcode in Excel document using C# | Syncfusion
description: Code example to add barcode images to an Excel document using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---
# How to add Barcode in Excel document using C#?
You can embed barcode images into an Excel worksheet using Syncfusion XlsIO. The following code snippets illustrate how to insert barcodes at specified locations and save the workbook.
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

A complete working example to add Barcode in Excel document in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Barcode/.NET/Add%20Barcode).   



