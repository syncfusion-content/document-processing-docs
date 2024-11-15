---
title: How to extract and save images from an Excel worksheet | Syncfusion
description: This page explains how to extract and save images from an Excel worksheet using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to extract and save images from an Excel worksheet?

You can extract all images from the worksheet using XlsIO. The following code example demonstrates how to retrieve images from a worksheet and save them to a specified directory.

{% tabs %}  
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