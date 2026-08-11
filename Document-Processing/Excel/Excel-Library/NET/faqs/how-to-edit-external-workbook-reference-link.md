---
title: How to edit an external workbook reference link? | XlsIO | Syncfusion
description: Explains how to change the URL of an existing external-workbook reference in an XlsIO workbook using the implementation-level ExternWorkbooks collection.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to edit an external workbook reference link?

An external-workbook reference link (an `.xlsx` "external link" that points at another workbook on disk) can be modified through the [`URL`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.Implementation.ExternWorkbookImpl.html#Syncfusion_XlsIO_Implementation_ExternWorkbookImpl_URL) property on each entry of the workbook's `ExternWorkbooks` collection. The collection is exposed by casting the `IWorkbook` to its concrete implementation class, `WorkbookImpl`. The following code example opens `Sample.xlsx`, reads the first external link's URL, replaces it with a new path, and saves the result.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Sample.xlsx` in the application's working directory. The workbook must contain at least one external-workbook reference (typically inserted in Excel via **Data → Get Data → From Other Sources → From Workbook**) for the sample to have something to edit. The target file `Template.xlsx` must also exist where the new URL points; otherwise the link will be broken in the saved file.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
string DataPathBase = System.Environment.CurrentDirectory + @"\";
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  string filepath = (workbook as WorkbookImpl).ExternWorkbooks[0].URL;

  (workbook as WorkbookImpl).ExternWorkbooks[0].URL = DataPathBase + "Template.xlsx";

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
string DataPathBase = System.Environment.CurrentDirectory + @"\";
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  string filepath = (workbook as WorkbookImpl).ExternWorkbooks[0].URL;

  (workbook as WorkbookImpl).ExternWorkbooks[0].URL = DataPathBase + "Template.xlsx";

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim DataPathBase As String = (System.Environment.CurrentDirectory + "\")
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim filepath As String = CType(workbook, WorkbookImpl).ExternWorkbooks(0).URL
  CType(workbook, WorkbookImpl).ExternWorkbooks(0).URL = (DataPathBase + "Template.xlsx")
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %} 
