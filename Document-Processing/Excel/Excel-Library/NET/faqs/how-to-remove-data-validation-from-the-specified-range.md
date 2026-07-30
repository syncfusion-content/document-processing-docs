---
title: How to remove data validation from a specified range? | Syncfusion
description: Explains how to remove data validation rules from a range in XlsIO using ExcelClearOptions.ClearDataValidations, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to remove data validation from a specified range?

The [`IRange.Clear`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) method with the [`ExcelClearOptions.ClearDataValidations`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelClearOptions.html) value removes every data validation rule that applies to the cells in the range. The example below clears the validations on `A1:C5` of the first sheet.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `InputTemplate.xlsx` in the working directory. The file should have a data validation rule on the range `A1:C5` of the first sheet so the clear has something to do.
* Ensure the working directory is writable; the example writes `Output.xlsx`.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Removes data validation from the specified range           
    worksheet.Range["A1:C5"].Clear(ExcelClearOptions.ClearDataValidations);

    //Saving the workbook 
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Removes data validation from the specified range           
    worksheet.Range["A1:C5"].Clear(ExcelClearOptions.ClearDataValidations);

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Removes data validation from the specified range
    worksheet.Range("A1:C5").Clear(ExcelClearOptions.ClearDataValidations)

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using

{% endhighlight %}
{% endtabs %}

## See Also

* [IRange.Clear API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html)
* [ExcelClearOptions enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelClearOptions.html)
* [IValidations API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IValidations.html)
