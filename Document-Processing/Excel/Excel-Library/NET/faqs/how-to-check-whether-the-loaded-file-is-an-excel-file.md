---
title: How to check whether the loaded file is an Excel file |Syncfusion.
description: This page explains how to check whether the loaded file is an Excel file using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check whether the loaded file is an Excel file?

The following code example illustrates how to check whether the loaded file is an Excel file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    FileStream inputStream = new FileStream("../../../Data/InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
   
    //Check whether the loaded document is an Excel file or not
    if(application.IsExcelFile(inputStream))
    {
        //Open the workbook
        IWorkbook workbook = application.Workbooks.Open(inputStream);

        //Saving the workbook 
        workbook.SaveAs("Output.xlsx");
    }
    else
    {
        Console.WriteLine("The file is not an Excel file.");
    }
    //Dispose stream
    inputStream.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    string filePath = "../../Data/InputTemplate.xlsx";

    //Check whether the loaded document is an Excel file or not
    if (application.IsExcelFile(filePath))
    {
        //Open the workbook
        IWorkbook workbook = application.Workbooks.Open(filePath);

        //Saving the workbook
        workbook.SaveAs("Output.xlsx");
    }
    else
    {
        Console.WriteLine("The file is not an Excel file.");
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    Dim filePath As String = "../../Data/InputTemplate.xlsx"

    'Check whether the loaded document is an Excel file or not
    If application.IsExcelFile(filePath) Then
        ' Open the workbook
        Dim workbook As IWorkbook = application.Workbooks.Open(filePath)

        'Saving the workbook
        workbook.SaveAs("Output.xlsx")
    Else
        Console.WriteLine("The file is not an Excel file.")
    End If
End Using
{% endhighlight %}
{% endtabs %}