---
title: Remove corrupted embedded images before saving | Syncfusion
description: Code example to remove corrupted embedded images before saving an Excel file using the Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove corrupted embedded images before saving an Excel document?

The following code example demonstrate how to remove the corrupted embedded images before saving an Excel file using C# (Cross-platform).

{% tabs %}   
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/FAQ/Remove%20corrupted%20images/.NET/RemoveCorruptedImages/RemoveCorruptedImages/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Input.xlsx"));
    
    foreach (IWorksheet sheet in workbook.Worksheets)
    {
        for (int i = 0; i < sheet.Pictures.Count; i++)
        {
            if (sheet.Pictures[i].Picture != null && sheet.Pictures[i].Picture.ImageData.Length <= 0)
            {
                // Remove corrupted image.
                sheet.Pictures[i].Remove();                          
            }
        }
    }

    // Save the workbook.
    workbook.SaveAs(Path.GetFullPath(@"Output/Output.xlsx"));
}
{% endhighlight %}

{% endtabs %}       

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/FAQ/Remove%20corrupted%20images/.NET/RemoveCorruptedImages">this GitHub page</a>.
