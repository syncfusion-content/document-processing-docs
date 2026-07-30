---
title: How to open an Excel file with encoding | XlsIO | Syncfusion
description: Explains how to register the CodePagesEncodingProvider and open a CSV file with a specific text encoding in .NET Core.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open an Excel file with encoding in .NET Core?

XlsIO opens delimited text files (CSV, TSV, and so on) through the [`Workbooks.Open(string, Encoding)`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html) overload. On .NET Framework, all system code pages are available out of the box. On .NET Core and later, only a small set of encodings (ASCII, UTF-8, UTF-16, and UTF-32) are built in, and code pages such as `Big5`, `Shift_JIS`, or `Windows-1252` are not. To use one of those code pages, you must register the `CodePagesEncodingProvider` once at process startup and then call `Encoding.GetEncoding("code-page-name")` before opening the file.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Install the [System.Text.Encoding.CodePages](https://www.nuget.org/packages/System.Text.Encoding.CodePages) NuGet package. This is the package that defines `CodePagesEncodingProvider`; without it, the code will not compile.
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide an input `Sample.csv` in the working directory. The file must be encoded with the code page you intend to load (the example uses `Big5`, Traditional Chinese).
* Ensure the working directory is writable; the example writes `Output.csv` next to the input file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using System.Text;
using Syncfusion.XlsIO;

class Program
{
  static void Main()
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

  	  System.Text.UnicodeEncoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
  	  IWorkbook workbook = application.Workbooks.Open("Sample.csv", System.Text.UnicodeEncoding.GetEncoding("big5"));

      //Save the parsed workbook back to a CSV. The second argument is the
      //delimiter that XlsIO writes between fields; here we use a comma.
      workbook.SaveAs("Output.csv", ",");
      workbook.Close();
    }
  }
}
{% endhighlight %}
{% endtabs %}

## See Also

* [How to read and write CSV files in XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-read-and-write-csv-file)
* [IWorkbooks.Open API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html)
* [IWorkbook.SaveAs API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html)
