# NuGet Packages Reference

This file contains all NuGet package mappings for Syncfusion.Presentation (PowerPoint) by application type.
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

## Presentation — PowerPoint Read, Write, Edit, and Markdown Conversion

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.Presentation.WinForms` | `Install-Package Syncfusion.Presentation.WinForms` |
| WPF | `Syncfusion.Presentation.Wpf` | `Install-Package Syncfusion.Presentation.Wpf` |
| ASP.NET MVC5 | `Syncfusion.Presentation.AspNet.Mvc5` | `Install-Package Syncfusion.Presentation.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.Presentation.Net.Core` | `Install-Package Syncfusion.Presentation.Net.Core` |
| WinUI / MAUI | `Syncfusion.Presentation.NET` | `Install-Package Syncfusion.Presentation.NET` |

---

## PowerPoint to PDF Conversion

> Required in addition to the Presentation package above when performing PDF conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.PresentationToPDFConverter.WinForms` | `Install-Package Syncfusion.PresentationToPDFConverter.WinForms` |
| WPF | `Syncfusion.PresentationToPDFConverter.Wpf` | `Install-Package Syncfusion.PresentationToPDFConverter.Wpf` |
| ASP.NET MVC5 | `Syncfusion.PresentationToPDFConverter.AspNet.Mvc5` | `Install-Package Syncfusion.PresentationToPDFConverter.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.PresentationRenderer.Net.Core` | `Install-Package Syncfusion.PresentationRenderer.Net.Core` |
| WinUI / MAUI | `Syncfusion.PresentationRenderer.NET` | `Install-Package Syncfusion.PresentationRenderer.NET` |

---

## PowerPoint to Image Conversion

> Required in addition to the Presentation package above when performing Image conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.Presentation.WinForms` | `Install-Package Syncfusion.Presentation.WinForms` |
| WPF | `Syncfusion.Presentation.Wpf` | `Install-Package Syncfusion.Presentation.Wpf` |
| ASP.NET MVC5 | `Syncfusion.Presentation.AspNet.Mvc5` | `Install-Package Syncfusion.Presentation.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.PresentationRenderer.Net.Core` | `Install-Package Syncfusion.PresentationRenderer.Net.Core` |
| WinUI / MAUI | `Syncfusion.PresentationRenderer.NET` | `Install-Package Syncfusion.PresentationRenderer.NET` |

---

## Chart Conversion (PowerPoint with Charts)

> Required **additionally** only when charts must be preserved during PDF or Image conversion.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) | `Syncfusion.OfficeChartToImageConverter.WinForms` | `Install-Package Syncfusion.OfficeChartToImageConverter.WinForms` |
| WPF | `Syncfusion.OfficeChartToImageConverter.Wpf` | `Install-Package Syncfusion.OfficeChartToImageConverter.Wpf` |
| ASP.NET MVC5 | `Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5` | `Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core) / Blazor | `Syncfusion.PresentationRenderer.Net.Core` | `Install-Package Syncfusion.PresentationRenderer.Net.Core` |

---

## Linux Deployment — Additional Native Asset Packages

Required when deploying ASP.NET Core apps (PDF/Image conversion) on Linux environments.

| NuGet Packages | Applicable Linux Environments |
|---|---|
| `SkiaSharp.NativeAssets.Linux` v3.119.1 + `HarfBuzzSharp.NativeAssets.Linux` v8.3.1.2 | Ubuntu, Alpine, CentOS, Debian, Fedora, RHEL, Azure App Service, Google App Engine |
| `SkiaSharp.NativeAssets.Linux.NoDependencies` v3.119.1 | AWS Lambda, AWS Elastic Beanstalk |
