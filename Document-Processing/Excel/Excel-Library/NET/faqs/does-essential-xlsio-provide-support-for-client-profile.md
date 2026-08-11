---
title: Does Essential XlsIO provide support for Client Profile | Syncfusion
description: Explains whether the .NET Excel library (XlsIO) supports the .NET Client Profile and which assemblies to reference.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does Essential&reg; XlsIO provide support for Client Profile?

Yes, Essential&reg; XlsIO provides support for Client Profile. In order to use Essential&reg; XlsIO in an application (which targeted to Client Profile), the user should include the following assemblies.

## Prerequisites (legacy Client Profile setup)

> **Important:**
> The information in this section applies only to legacy projects that target the .NET Framework 3.5/4.0 **Client Profile**. For modern .NET Framework 4.5+ or .NET Core/.NET 5+ projects, use the standard `Syncfusion.XlsIO.Base` package instead of the Client Profile assemblies.

Before you build a Client Profile application that uses XlsIO, make sure the following are in place:

* Target the **.NET Framework 3.5 Client Profile** or **.NET Framework 4.0 Client Profile** in the Visual Studio project properties.
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```
## See Also

* [What are the assemblies required for working with XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [What are the NuGet packages required to work with XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [What are the supported features by Document Processing?](https://help.syncfusion.com/document-processing/excel/excel-library/net/supported-features-by-file-formats)
* [What are the features support platform wise?](https://help.syncfusion.com/document-processing/excel/excel-library/net/supported-features-by-platforms)
* [How to create an Excel file in C# and VB.NET?](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview)
