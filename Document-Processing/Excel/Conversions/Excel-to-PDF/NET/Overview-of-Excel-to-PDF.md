---
title: Convert Excel to PDF using the .NET Excel (XlsIO) Library | Syncfusion
description: Syncfusion .NET XlsIO is a high-performance Excel library for creating, reading, editing, and converting Excel files to PDF across .NET platforms without Microsoft Office dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert Excel to PDF using .NET Excel (XlsIO) Library

The [Syncfusion .NET Excel (XlsIO) library](https://www.syncfusion.com/document-processing/excel-framework/net) is a non-UI, native .NET class library that provides an easy way to convert Excel workbooks to PDF in C# and VB.NET with the PDF conformance level PDF/A1B using just a few lines of code. The conversion is fast and reliable, requires no Microsoft Office dependency, and is supported in hosting environments such as AWS, Google Cloud, and Microsoft Azure.

The library can be used in Windows Forms, WPF, UWP, ASP.NET Web Forms, ASP.NET MVC, ASP.NET Core, Xamarin, Blazor, WinUI, and .NET MAUI applications.

## Prerequisites

Before converting an Excel workbook to PDF, make sure the following are in place:

1. Install the required NuGet packages for your target platform.
   - For .NET 8+ / .NET Core: `Syncfusion.XlsIO.Net.Core` and `Syncfusion.Pdf.Net.Core`
   - For Windows Forms: `Syncfusion.XlsIO.WinForms` and `Syncfusion.Pdf.WinForms`
   - For WPF: `Syncfusion.XlsIO.Wpf` and `Syncfusion.Pdf.Wpf`
   - For ASP.NET Core: `Syncfusion.XlsIO.AspNet.Core` and `Syncfusion.Pdf.AspNet.Core`
2. Register your Syncfusion license in the application. For more information, see [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview).
3. Add the required namespaces to your code file:

```csharp
using Syncfusion.XlsIO;
using Syncfusion.Pdf;
```

## Supported Platforms

* Windows Forms, WPF, UWP, ASP.NET Web Forms, ASP.NET MVC, ASP.NET Core, Xamarin, Blazor, WinUI, and .NET MAUI
* Hosting environments: AWS, Google Cloud, and Microsoft Azure
* .NET versions: .NET Framework 4.6.1+, .NET Core 8, and later

## Key Features

* Convert an Excel [workbook to PDF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion#workbook-to-pdf).
* Convert an Excel workbook with a [chart to PDF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion#excel-with-chart-to-pdf).
* Support for [font substitution](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-conversion#substitute-font-in-excel-to-pdf-conversion) during Excel to PDF conversion.
* Generate PDF documents with **PDF/A1B** conformance for long-term archiving.
* Configure conversion behavior with [converter settings](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings) such as `EmbedFonts`, `ImageQuality`, `TemplateDocument`, and `PageScalingOptions`.

N> You can also explore our [.NET Excel Framework demo](https://www.syncfusion.com/demos/fileformats/excel-library) that shows how to create, modify, and convert Excel files from C# with 5 lines of code on different platforms.
