---
title: How to check whether a file is an Excel file? | XlsIO | Syncfusion
description: Explains how to use IApplication.IsExcelFile to check whether a file is an Excel file before opening it, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to check whether a file is an Excel file?

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The example below creates a small workbook, saves it to disk, and then re-opens it through the `IsExcelFile` check, so no input file is required.
* Ensure the working directory is writable; the example writes `Sample.xlsx` and `Output.xlsx`.

## Check by file path or by stream

The flow is: open the engine, choose a file path (or open a stream), call `IsExcelFile`, and either open the workbook or log a warning. The C# sample uses the `Stream` overload; the VB.NET sample uses the `string` overload — both are valid.

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

## See Also

* [How to open an Excel file with a specific encoding in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-open-an-excel-file-with-encoding-in-net-core)
* [IApplication.IsExcelFile API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html)
* [IWorkbooks.Open API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html)
