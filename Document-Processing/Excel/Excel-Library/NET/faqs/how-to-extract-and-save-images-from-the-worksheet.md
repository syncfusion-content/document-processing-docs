---
title: How to extract and save images from an Excel worksheet | Syncfusion
description: Explains how to extract embedded pictures from a worksheet and save each one to a file on disk, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to extract and save images from an Excel worksheet?

You can extract all images from the worksheet using XlsIO. The following code example demonstrates how to retrieve images from a worksheet and save them to a specified directory.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `InputTemplate.xlsx` in the working directory. The file must contain at least one picture on the first sheet.
* Ensure the output directory exists. Create it with `Directory.CreateDirectory("directory_name");` before running the code, or modify the path to an existing directory.
* Ensure the working directory and the output directory are writable.



{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Define the directory name
string directoryName = "directory_name";
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    // Get the count of pictures in the worksheet
    int count = worksheet.Pictures.Count;
    IPictureShape[] picture = new IPictureShape[count];

    // Loop through all pictures in the worksheet
    for (int i = 0; i < count; i++)
    {
        // Get the picture
        picture[i] = worksheet.Pictures[i];
        Image image = picture[i].Picture;
        string name = picture[i].Name + ".jpg";
        string imagefile = Path.Combine(directoryName, name);

        // Save the image to a file
        FileStream stream = new FileStream(imagefile, FileMode.Create, FileAccess.Write);
        image.Save(stream, image.RawFormat);

        //Dispose stream
        stream.Dispose();
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Define the directory name
string directoryName = "directory_name";
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    // Get the count of pictures in the worksheet
    int count = worksheet.Pictures.Count;
    IPictureShape[] picture = new IPictureShape[count];

    // Loop through all pictures in the worksheet
    for (int i = 0; i < count; i++)
    {
        // Get the picture
        picture[i] = worksheet.Pictures[i];
        Image image = picture[i].Picture;
        string name = picture[i].Name + ".jpg";
        string imagefile = Path.Combine(directoryName, name);

        // Save the image to a file
        FileStream stream = new FileStream(imagefile, FileMode.Create, FileAccess.Write);
        image.Save(stream, image.RawFormat);

        //Dispose stream
        stream.Dispose();
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Define the directory name
Dim directoryName As String = "directory_name"
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("../../Data/InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Get the count of pictures in the worksheet
    Dim count As Integer = worksheet.Pictures.Count
    Dim picture(count - 1) As IPictureShape

    ' Loop through all pictures in the worksheet
    For i As Integer = 0 To count - 1
        ' Get the picture
        picture(i) = worksheet.Pictures(i)
        Dim image As Image = picture(i).Picture
        Dim name As String = picture(i).Name & ".jpg"
        Dim imageFile As String = Path.Combine(directoryName, name)

        ' Save the image to a file
        Using stream As New FileStream(imageFile, FileMode.Create, FileAccess.Write)
            image.Save(stream, image.RawFormat)
        End Using
    Next
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to insert a picture into a cell in an Excel document?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-insert-a-picture-into-a-cell-in-an-excel-document)
* [Working with pictures in XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-pictures)
* [IPictureShape API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictureShape.html)
* [IPictures API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictures.html)
