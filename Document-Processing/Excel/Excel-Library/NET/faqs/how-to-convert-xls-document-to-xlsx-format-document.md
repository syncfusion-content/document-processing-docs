---
title: How to convert an XLS file to XLSX in XlsIO? | XlsIO | Syncfusion
description: Explains how to convert an XLS (BIFF8) workbook to the XLSX (OOXML) format in XlsIO using a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert an XLS file to XLSX?

Syncfusion<sup>&reg;</sup> XlsIO can open an `.xls` (BIFF8) workbook and save it in the `.xlsx` (OOXML) format. The conversion has two equivalent forms:

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The example creates a small `.xls` workbook in memory, so no input file is required. If you load your own `InputTemplate.xls`, ensure it is a real BIFF8 file (not a renamed `.xlsx`).
* Ensure the working directory is writable; the example writes `Output.xlsx`.

## Convert an XLS workbook to XLSX

The flow is: create an in-memory `.xls` workbook, write a small amount of data, set the target version to `Excel2013`, save the file as `Output.xlsx`. The same code works if you replace the in-memory workbook with a call to `Workbooks.Open("InputTemplate.xls", ExcelOpenType.Automatic)`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    
    //Loads an xls file
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xls");

    //Set the workbook version to xlsx
    workbook.Version = ExcelVersion.Xlsx;
    
    //Saving the workbook in xlsx format
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine engine = new ExcelEngine())
{
    IApplication application = engine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Loads an xls file
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xls");

    //Set the workbook version to xlsx
    workbook.Version = ExcelVersion.Xlsx;

    //Saving the workbook in xlsx format
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using engine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = engine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx

    'Loads an xls file
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xls")

    'Set the workbook version to xlsx
    workbook.Version = ExcelVersion.Xlsx;

    'Saving the workbook in xlsx format
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [IWorkbook.Version API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html)
* [IApplication.DefaultVersion API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html)
