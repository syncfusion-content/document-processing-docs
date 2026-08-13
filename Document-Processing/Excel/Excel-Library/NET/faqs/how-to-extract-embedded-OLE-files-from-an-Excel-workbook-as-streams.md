---
title: How to Extract OLE Files in .NET Excel Library | Syncfusion
description: Extract embedded OLE objects from Excel worksheets as streams using Syncfusion .NET Excel Library in applications.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to extract embedded OLE files in .NET Excel Library

You can extract OLE objects in an Excel workbook as streams using XlsIO. The following example demonstrates how to retrieve embedded files from a worksheet.
{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    //Create worksheet
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Create(1);
    IWorksheet worksheet = workbook.Worksheets[0];

    FileStream embedStream = new FileStream("../../../Sample.docx", FileMode.Open);
    FileStream imageStream = new FileStream("../../../wordIcon.jpg", FileMode.Open);

    //Create image stream
    Image image = Image.FromStream(imageStream);

    //Add ole object
    IOleObject oleObject = worksheet.OleObjects.Add(embedStream, image, OleObjectType.WordDocument);

    // Get the OLE part stream.
    Image image1 = Image.FromStream(worksheet.OleObjects[0].GetEmbeddedOleStream());
    MemoryStream memory = new MemoryStream(image1.ImageData);
                   
    //Saving the workbook as stream
    FileStream stream = new FileStream("ExtractedFile.xlsx", FileMode.Create, FileAccess.Write);
    memory.CopyTo(stream);
    workbook.SaveAs(stream);
    stream.Dispose();
}
{% endhighlight %}

{% endtabs %} 
