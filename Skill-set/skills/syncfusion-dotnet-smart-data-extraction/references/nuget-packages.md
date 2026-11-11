# NuGet Packages Reference

This file contains NuGet package mappings for Syncfusion.SmartDataExtractor by application type.
Always consult this file during **Step 1** of Mode 1 to determine the correct package(s) to install.

## Application Type Detection Signals

| Application Type | Detection Signals |
|---|---|
| **Console App (.NET Framework)** | `<TargetFrameworkVersion>` in `.csproj`, no `<Sdk>` attribute |
| **Console App (.NET Core / .NET 5+)** | `<TargetFramework>net*` with `<Sdk>Microsoft.NET.Sdk</Sdk>` |
| **ASP.NET Core Web App / API** | `<Sdk>Microsoft.NET.Sdk.Web</Sdk>` |
| **ASP.NET MVC4** | `<MvcBuildViews>`, references to `System.Web.Mvc` 4.x in `.csproj` |
| **ASP.NET MVC5** | References to `System.Web.Mvc` 5.x in `.csproj` |
| **WPF** | `<UseWPF>true</UseWPF>` or `PresentationFramework` reference |
| **Windows Forms** | `<UseWindowsForms>true</UseWindowsForms>` or `System.Windows.Forms` reference |
| **Blazor** | `<Sdk>Microsoft.NET.Sdk.BlazorWebAssembly</Sdk>` or `Microsoft.AspNetCore.Components` |
| **MAUI** | `<UseMaui>true</UseMaui>` |
| **WinUI** | `<UseWinUI>true</UseWinUI>` |
| **Xamarin** | `Xamarin.Forms` or `Xamarin.Android` / `Xamarin.iOS` references |
| **.NET Framework 4.0 Client Profile** | `<TargetFrameworkProfile>Client</TargetFrameworkProfile>` |

---

## ExtractData

> Required in addition to the Smart Data Extractor package above when performing JSON conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.SmartDataExtractor.WinForms` | `Install-Package Syncfusion.SmartDataExtractor.WinForms` |
| WPF | `Syncfusion.SmartDataExtractor.Wpf` | `Install-Package Syncfusion.SmartDataExtractor.Wpf` |
| ASP.NET MVC5 | `Syncfusion.SmartDataExtractor.AspNet.Mvc5` | `Install-Package Syncfusion.SmartDataExtractor.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) | `Syncfusion.SmartDataExtractor.Net.Core` | `Install-Package Syncfusion.SmartDataExtractor.Net.Core` |
| WinUI / MAUI | `Syncfusion.SmartDataExtractor.NET` | `Install-Package Syncfusion.SmartDataExtractor.NET` |

## ExtractTable

> Required in addition to the Smart Table Extractor package above when performing JSON conversion.

> Note: For requests that ask only to extract table data (table-only requests), install only the Table Extractor package listed below for your application type. The `Syncfusion.SmartDataExtractor.*` packages are not required for table-only extraction.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.SmartTableExtractor.WinForms` | `Install-Package Syncfusion.SmartTableExtractor.WinForms` |
| WPF | `Syncfusion.SmartTableExtractor.Wpf` | `Install-Package Syncfusion.SmartTableExtractor.Wpf` |
| ASP.NET MVC5 | `Syncfusion.SmartTableExtractor.AspNet.Mvc5` | `Install-Package Syncfusion.SmartTableExtractor.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) | `Syncfusion.SmartTableExtractor.Net.Core` | `Install-Package Syncfusion.SmartTableExtractor.Net.Core` |
| WinUI / MAUI | `Syncfusion.SmartTableExtractor.NET` | `Install-Package Syncfusion.SmartTableExtractor.NET` |

## FormRecognizer

> Required in addition to the Smart Form Recognizer package above for form data detection.

> Note: For requests that ask only to detect form data, install only the Form Recognizer package listed below for your application type. The `Syncfusion.SmartFormRecognizer.*` packages are not required for table-only extraction.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms | `Syncfusion.SmartFormRecognizer.WinForms` | `Install-Package Syncfusion.SmartFormRecognizer.WinForms` |
| WPF | `Syncfusion.SmartFormRecognizer.WPF` | `Install-Package Syncfusion.SmartFormRecognizer.WPF` |
| Blazor / .NET Core / .NET Platforms | `Syncfusion.SmartFormRecognizer.NET` | `Install-Package Syncfusion.SmartFormRecognizer.NET` |
| ASP.NET Core / Console (.NET Core) | `Syncfusion.SmartFormRecognizer.Net.Core` | `Install-Package Syncfusion.SmartFormRecognizer.Net.Core` |
| ASP.NET MVC5 | `Syncfusion.SmartFormRecognizer.AspNet.MVC5` | `Install-Package Syncfusion.SmartFormRecognizer.AspNet.MVC5` |

---

> Required **additionally** for extracting document structure from PDF or Image conversion (layout detection + barcode recognition).

| Application Type | NuGet Packages | Install Commands |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Microsoft.ML.OnnxRuntime` v1.18.0; `ZXing.Net` v0.16.11 | `Install-Package Microsoft.ML.OnnxRuntime`; `Install-Package ZXing.Net -Version 0.16.11` |
| WPF | `Microsoft.ML.OnnxRuntime` v1.18.0; `ZXing.Net` v0.16.11 | `Install-Package Microsoft.ML.OnnxRuntime`; `Install-Package ZXing.Net -Version 0.16.11` |
| ASP.NET MVC5 | `Microsoft.ML.OnnxRuntime` v1.18.0; `ZXing.Net` v0.16.11 | `Install-Package Microsoft.ML.OnnxRuntime`; `Install-Package ZXing.Net -Version 0.16.11` |
| ASP.NET Core / Console (.NET Core) | `Microsoft.ML.OnnxRuntime` v1.18.0; `ZXing.Net` v0.16.11 | `Install-Package Microsoft.ML.OnnxRuntime`; `Install-Package ZXing.Net -Version 0.16.11` |
| Blazor / MAUI / WinUI / Xamarin | `Microsoft.ML.OnnxRuntime` v1.18.0; `ZXing.Net` v0.16.11 | `Install-Package Microsoft.ML.OnnxRuntime`; `Install-Package ZXing.Net -Version 0.16.11` |

---

## Linux Deployment — Additional Native Asset Packages

Required when deploying ASP.NET Core apps (PDF/Image conversion) on Linux environments.

| NuGet Packages | Applicable Linux Environments |
|---|---|
| `SkiaSharp.NativeAssets.Linux` v3.119.1 + `HarfBuzzSharp.NativeAssets.Linux` v8.3.1.2 | Ubuntu, Alpine, CentOS, Debian, Fedora, RHEL, Azure App Service, Google App Engine |
| `SkiaSharp.NativeAssets.Linux.NoDependencies` v3.119.1 | AWS Lambda, AWS Elastic Beanstalk |
