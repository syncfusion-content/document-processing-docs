# NuGet Packages Reference — Syncfusion Document Chunking

> This file contains NuGet package mappings for Syncfusion Document Chunking by application type.
> Consult this file to determine the correct package(s) to install before generating C# for the user's project.

---

> **Required common usings:** `using Syncfusion.DocumentChunking;`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** same
> **Required usings for .NET Framework (Windows):** same

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

## Core Document Chunking Package

Install the appropriate package for your project type. This is the **minimum required** for chunking Word, PDF, PowerPoint, Excel, and Markdown.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Console App (.NET Core / .NET 5+) | `Syncfusion.DocumentChunking.Net.Core` | `dotnet add package Syncfusion.DocumentChunking.Net.Core` |
| ASP.NET Core Web App / API | `Syncfusion.DocumentChunking.Net.Core` | `dotnet add package Syncfusion.DocumentChunking.Net.Core` |
| Blazor (Web Assembly / Server) | `Syncfusion.DocumentChunking.Net.Core` | `dotnet add package Syncfusion.DocumentChunking.Net.Core` |
| .NET MAUI / WinUI 3 / portable .NET | `Syncfusion.DocumentChunking.NET` | `dotnet add package Syncfusion.DocumentChunking.NET` |
| Console / Windows Forms / WPF (.NET Framework) | `Syncfusion.DocumentChunking.Base` (when targeting Base/Framework packages) or `Syncfusion.DocumentChunking.NET` | See product NuGet feeds for Framework package IDs |
| ASP.NET MVC5 (.NET Framework) | `Syncfusion.DocumentChunking.AspNet.Mvc5` (when published) or `Syncfusion.DocumentChunking.NET` | Prefer product docs for Framework hosts |

### Primary recommenders

| Scenario | Package |
|---|---|
| **Default for modern .NET / ASP.NET Core / console** | `Syncfusion.DocumentChunking.Net.Core` |
| **Portable / multi-target .NET document processing** | `Syncfusion.DocumentChunking.NET` |

Target frameworks for `Syncfusion.DocumentChunking.Net.Core`: `net10.0`, `net9.0`, `net8.0`, `.NETStandard2.0`.

---

## Transitive document-processing dependencies

`Syncfusion.DocumentChunking.Net.Core` / `.NET` pull in format engines as dependencies:

| Format | Typical dependency family |
|---|---|
| Word | Syncfusion DocIO (Net.Core / .NET) |
| PDF | Syncfusion PDF (Net.Core / .NET) |
| Excel | Syncfusion XlsIO (Net.Core / .NET) |
| PowerPoint | Syncfusion Presentation (Net.Core / .NET) |
| Markdown | Syncfusion Markdown (Net.Core / .NET) |

Ensure license coverage for those products as required by the Syncfusion agreement. You normally do **not** need to install them separately for chunking-only apps when using the Document Chunking meta-package.

---

## Licensing package

| Package | When |
|---|---|
| `Syncfusion.Licensing` | Recommended when the app registers keys via `SyncfusionLicenseProvider` |

```bash
dotnet add package Syncfusion.Licensing
```

Register a Syncfusion license key in the host application according to product licensing guidance before shipping.

---

## Quick Reference — Recommended Packages

**Console App or Web App (.NET Core / .NET 5+) — Document chunking for RAG:**

```bash
dotnet add package Syncfusion.DocumentChunking.Net.Core
dotnet add package Syncfusion.Licensing
```

**Portable / multi-platform .NET:**

```bash
dotnet add package Syncfusion.DocumentChunking.NET
dotnet add package Syncfusion.Licensing
```


**Package Manager (Windows):**

```powershell
Install-Package Syncfusion.DocumentChunking.Net.Core
```

---

## Namespace

```csharp
using Syncfusion.DocumentChunking;
```

Entry type: `ChunkingService` implementing `IChunkingService`.
