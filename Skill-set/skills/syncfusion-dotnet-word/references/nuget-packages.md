# NuGet Packages Reference

This file contains all NuGet package mappings for Syncfusion DocIO by application type.
Always consult this file during **Step 1** of Mode 1 to determine the correct package(s) to install.

---

## Application Type Detection Signals

| Application Type | Detection Signals |
|---|---|
| **Console App (.NET Framework)** | `<TargetFrameworkVersion>` in `.csproj`, no `<Sdk>` attribute |
| **Console App (.NET Core / .NET 5+)** | `<TargetFramework>net*` with `<Sdk>Microsoft.NET.Sdk</Sdk>` |
| **ASP.NET Core Web App / API** | `<Sdk>Microsoft.NET.Sdk.Web</Sdk>` |
| **ASP.NET MVC5** | References to `System.Web.Mvc` 5.x in `.csproj` |
| **WPF** | `<UseWPF>true</UseWPF>` or `PresentationFramework` reference |
| **Windows Forms** | `<UseWindowsForms>true</UseWindowsForms>` or `System.Windows.Forms` reference |
| **Blazor** | `<Sdk>Microsoft.NET.Sdk.BlazorWebAssembly</Sdk>` or `Microsoft.AspNetCore.Components` |
| **MAUI** | `<UseMaui>true</UseMaui>` |
| **WinUI** | `<UseWinUI>true</UseWinUI>` |

---

## DocIO — Word Read / Write / Edit

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.DocIO.WinForms` | `Install-Package Syncfusion.DocIO.WinForms` |
| WPF | `Syncfusion.DocIO.Wpf` | `Install-Package Syncfusion.DocIO.Wpf` |
| ASP.NET MVC5 | `Syncfusion.DocIO.AspNet.Mvc5` | `Install-Package Syncfusion.DocIO.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.DocIO.Net.Core` | `Install-Package Syncfusion.DocIO.Net.Core` |
| WinUI / MAUI | `Syncfusion.DocIO.NET` | `Install-Package Syncfusion.DocIO.NET` |

---

## Word to PDF Conversion

> Required in addition to the DocIO package above when performing PDF conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.DocToPdfConverter.WinForms` | `Install-Package Syncfusion.DocToPdfConverter.WinForms` |
| WPF | `Syncfusion.DocToPdfConverter.Wpf` | `Install-Package Syncfusion.DocToPdfConverter.Wpf` |
| ASP.NET MVC5 | `Syncfusion.DocToPdfConverter.AspNet.Mvc5` | `Install-Package Syncfusion.DocToPdfConverter.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.DocIORenderer.Net.Core` | `Install-Package Syncfusion.DocIORenderer.Net.Core` |
| WinUI / MAUI | `Syncfusion.DocIORenderer.NET` | `Install-Package Syncfusion.DocIORenderer.NET` |

---

## Word to Image Conversion

> Required in addition to the DocIO package above when performing Image conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.DocIO.WinForms` | `Install-Package Syncfusion.DocIO.WinForms` |
| WPF | `Syncfusion.DocIO.Wpf` | `Install-Package Syncfusion.DocIO.Wpf` |
| ASP.NET MVC5 | `Syncfusion.DocIO.AspNet.Mvc5` | `Install-Package Syncfusion.DocIO.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.DocIORenderer.Net.Core` | `Install-Package Syncfusion.DocIORenderer.Net.Core` |
| WinUI / MAUI | `Syncfusion.DocIORenderer.NET` | `Install-Package Syncfusion.DocIORenderer.NET` |

---

## Chart Conversion

> Required **additionally** only when charts must be preserved during PDF or Image conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.OfficeChartToImageConverter.WinForms` | `Install-Package Syncfusion.OfficeChartToImageConverter.WinForms` |
| WPF | `Syncfusion.OfficeChartToImageConverter.Wpf` | `Install-Package Syncfusion.OfficeChartToImageConverter.Wpf` |
| ASP.NET MVC5 | `Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5` | `Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5` |

---

## Linux Deployment — Additional Native Asset Packages

Required when deploying ASP.NET Core apps (PDF/Image conversion) on Linux environments.

| NuGet Packages | Applicable Linux Environments |
|---|---|
| `SkiaSharp.NativeAssets.Linux` v3.119.1 + `HarfBuzzSharp.NativeAssets.Linux` v8.3.1.2 | Ubuntu, Alpine, CentOS, Debian, Fedora, RHEL, Azure App Service, Google App Engine |
| `SkiaSharp.NativeAssets.Linux.NoDependencies` v3.119.1 | AWS Lambda, AWS Elastic Beanstalk |
