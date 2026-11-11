# NuGet Packages Required for PDFToImageConverter

The following NuGet packages need to be installed in your application based on the platform.

| Application Type | NuGet Package | Install Command |
|---|---|---|
| Windows Forms | ` Syncfusion.PdfToImageConverter.WinForms` | `Install-Package Syncfusion.PdfToImageConverter.WinForms` |
| WPF | `Syncfusion.PdfToImageConverter.WPF` | `Install-Package Syncfusion.PdfToImageConverter.WPF` |
| Blazor / .NET Core / .NET Platforms | `Syncfusion.PdfToImageConverter.Net` | `Install-Package Syncfusion.PdfToImageConverter.Net` |
| ASP.NET Core / Console (.NET Core) | `Syncfusion.PdfToImageConverter.Net.Core` | `Install-Package Syncfusion.PdfToImageConverter.Net.Core` |
| ASP.NET MVC5 | `Syncfusion.PdfToImageConverter.AspNet.Mvc5` | `Install-Package Syncfusion.PdfToImageConverter.AspNet.Mvc5` |

## Detection Signals

Use the following signals to detect the application type from project files:

| Signal | Application Type |
|---|---|
| `<OutputType>WinExe</OutputType>` + `<UseWindowsForms>true</UseWindowsForms>` in `.csproj` | Windows Forms |
| `<OutputType>WinExe</OutputType>` + `<UseWPF>true</UseWPF>` in `.csproj` | WPF |
| `web.config` or `App_Start/` folder present | ASP.NET MVC5 |
| `<Project Sdk="Microsoft.NET.Sdk.Web">` + `net6.0` / `net7.0` / `net8.0` target | .NET Core / .NET |
| `_Imports.razor` or `App.razor` present | Blazor |
