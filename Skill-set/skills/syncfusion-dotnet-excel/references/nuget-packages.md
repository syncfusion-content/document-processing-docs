# NuGet Packages Reference — Syncfusion XlsIO

> This file contains all NuGet package mappings for Syncfusion XlsIO by application type.
> Consult this file to determine the correct package(s) to install for **Mode 1** (code generation for the user's project).

---

> **Required common usings:** (This file is reference-only; no code usings required)
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (N/A)
> **Required usings for .NET Framework (Windows):** (N/A)

---

## Application Type Detection Signals

Identify your project type by checking your `.csproj` file or project structure:

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
| **Xamarin** | `Xamarin.Forms` or `Xamarin.Android` / `Xamarin.iOS` references |
| **UWP** | `<TargetPlatformIdentifier>UAP</TargetPlatformIdentifier>` |

---

## Core XlsIO Package — Excel Read / Write / Edit

Install the appropriate package for your project type. This is the **minimum required** for all Excel operations.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Console App (.NET Framework) | `Syncfusion.XlsIO.WinForms` | `dotnet add package Syncfusion.XlsIO.WinForms` |
| Windows Forms (.NET Framework) | `Syncfusion.XlsIO.WinForms` | `dotnet add package Syncfusion.XlsIO.WinForms` |
| WPF (.NET Framework) | `Syncfusion.XlsIO.Wpf` | `dotnet add package Syncfusion.XlsIO.Wpf` |
| ASP.NET MVC5 (.NET Framework) | `Syncfusion.XlsIO.AspNet.Mvc5` | `dotnet add package Syncfusion.XlsIO.AspNet.Mvc5` |
| ASP.NET Core Web App / API | `Syncfusion.XlsIO.Net.Core` | `dotnet add package Syncfusion.XlsIO.Net.Core` |
| Console App (.NET Core / .NET 5+) | `Syncfusion.XlsIO.Net.Core` | `dotnet add package Syncfusion.XlsIO.Net.Core` |
| Blazor (Web Assembly / Server) | `Syncfusion.XlsIO.Net.Core` | `dotnet add package Syncfusion.XlsIO.Net.Core` |
| WinUI 3 | `Syncfusion.XlsIO.NET` | `dotnet add package Syncfusion.XlsIO.NET` |
| .NET MAUI | `Syncfusion.XlsIO.NET` | `dotnet add package Syncfusion.XlsIO.NET` |

---

## PDF Conversion — Export Excel to PDF

Install **in addition to** the core XlsIO package above when exporting workbooks or worksheets to PDF format.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Console App (.NET Framework) | `Syncfusion.ExcelToPdfConverter.WinForms` | `dotnet add package Syncfusion.ExcelToPdfConverter.WinForms` |
| Windows Forms (.NET Framework) | `Syncfusion.ExcelToPdfConverter.WinForms` | `dotnet add package Syncfusion.ExcelToPdfConverter.WinForms` |
| WPF (.NET Framework) | `Syncfusion.ExcelToPdfConverter.Wpf` | `dotnet add package Syncfusion.ExcelToPdfConverter.Wpf` |
| ASP.NET MVC5 (.NET Framework) | `Syncfusion.ExcelToPdfConverter.AspNet.Mvc5` | `dotnet add package Syncfusion.ExcelToPdfConverter.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core / .NET 5+) | `Syncfusion.XlsIORenderer.Net.Core` | `dotnet add package Syncfusion.XlsIORenderer.Net.Core` |
| Blazor (Web Assembly / Server) | `Syncfusion.XlsIORenderer.Net.Core` | `dotnet add package Syncfusion.XlsIORenderer.Net.Core` |
| WinUI 3 / .NET MAUI | `Syncfusion.XlsIORenderer.NET` | `dotnet add package Syncfusion.XlsIORenderer.NET` |

---

## Image Conversion — Export Excel to Image

Install **in addition to** the core XlsIO package above when converting Excel sheets or ranges to image formats (PNG, JPG, BMP, SVG).

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Console App (.NET Framework) | `Syncfusion.XlsIO.WinForms` | `dotnet add package Syncfusion.XlsIO.WinForms` |
| Windows Forms (.NET Framework) | `Syncfusion.XlsIO.WinForms` | `dotnet add package Syncfusion.XlsIO.WinForms` |
| WPF (.NET Framework) | `Syncfusion.XlsIO.Wpf` | `dotnet add package Syncfusion.XlsIO.Wpf` |
| ASP.NET MVC5 (.NET Framework) | `Syncfusion.XlsIO.AspNet.Mvc5` | `dotnet add package Syncfusion.XlsIO.AspNet.Mvc5` |
| ASP.NET Core / Console (.NET Core / .NET 5+) | `Syncfusion.XlsIORenderer.Net.Core` | `dotnet add package Syncfusion.XlsIORenderer.Net.Core` |
| Blazor (Web Assembly / Server) | `Syncfusion.XlsIORenderer.Net.Core` | `dotnet add package Syncfusion.XlsIORenderer.Net.Core` |
| WinUI 3 / .NET MAUI | `Syncfusion.XlsIORenderer.NET` | `dotnet add package Syncfusion.XlsIORenderer.NET` |

---

## Chart Conversion — Preserve Charts During PDF / Image Export

Install **in addition** to PDF or Image conversion packages above **only if you need to preserve charts** during export operations.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Console / Windows Forms (.NET Framework) | `Syncfusion.ExcelChartToImageConverter.WinForms` | `dotnet add package Syncfusion.ExcelChartToImageConverter.WinForms` |
| WPF (.NET Framework) | `Syncfusion.ExcelChartToImageConverter.Wpf` | `dotnet add package Syncfusion.ExcelChartToImageConverter.Wpf` |
| ASP.NET MVC5 (.NET Framework) | `Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5` | `dotnet add package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5` |

---

## Custom Fonts for PDF and Image Conversion

`Syncfusion.Drawing.Fonts.FontManager` is included in the PDF and image conversion packages above. No extra package is required.

Register `.ttf` / `.otf` files with `FontManager.RegisterFont` or `FontManager.RegisterFonts` before `ConvertToPDF`, `ConvertToImage`, or chart `SaveAsImage`. Snippets are in `references/custom-fonts.md`.

---

## Linux Deployment — Native Asset Packages

Required **only** when deploying ASP.NET Core apps with PDF/Image conversion to Linux environments.

| NuGet Packages | Applicable Linux Environments |
|---|---|
| `SkiaSharp.NativeAssets.Linux` v3.119.1<br/>`HarfBuzzSharp.NativeAssets.Linux` v8.3.1.2 | Ubuntu, Alpine, CentOS, Debian, Fedora, RHEL<br/>Azure App Service, Google App Engine |
| `SkiaSharp.NativeAssets.Linux.NoDependencies` v3.119.1 | AWS Lambda, AWS Elastic Beanstalk |

---

## Quick Reference — Recommended Packages

### For Typical Scenarios

**Console App or Web App (.NET Core / .NET 5+) — Basic Excel Operations:**
```bash
dotnet add package Syncfusion.XlsIO.Net.Core
```

**Console App or Web App (.NET Core / .NET 5+) — With PDF Export:**
```bash
dotnet add package Syncfusion.XlsIO.Net.Core
dotnet add package Syncfusion.XlsIORenderer.Net.Core
```

**ASP.NET Core Web App — With PDF Export and Charts:**
```bash
dotnet add package Syncfusion.XlsIO.Net.Core
dotnet add package Syncfusion.XlsIORenderer.Net.Core
```

**Windows Forms or Console App (.NET Framework):**
```bash
dotnet add package Syncfusion.XlsIO.WinForms
dotnet add package Syncfusion.ExcelToPdfConverter.WinForms
dotnet add package Syncfusion.ExcelChartToImageConverter.WinForms
```

---

## Related Resources

- See **[SKILL.md](../SKILL.md)** for the full workflow, rules, and integration guide
- See **[README.md](../README.md)** for quick start, prerequisites, and troubleshooting
- [Syncfusion XlsIO Documentation](https://help.syncfusion.com/file-formats/xlsio/overview)
- [API Reference — XlsIO](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.Base~Syncfusion.XlsIO.IWorkbook.html)
