# NuGet Packages Reference

This file contains all NuGet package mappings for Syncfusion Markdown by application type.
Always consult this file during **Step 2** of Mode 1 to determine the correct package(s) to install.

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

## Syncfusion Markdown — Core Package

For all platforms, the NuGet package is `Syncfusion.Markdown`.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms / Console (.NET Framework) / WPF / ASP.NET MVC5 / ASP.NET Core / Console (.NET Core) / Blazor / WinUI / MAUI | `Syncfusion.Markdown` | `Install-Package Syncfusion.Markdown` |

> Note: Use `Syncfusion.Markdown` for all app types. Always confirm the exact package ID/version from Syncfusion documentation or your licensed Syncfusion account.