---
title: Excel to PDF Performance in .NET Excel Library | Syncfusion
description: Excel to PDF benchmark results describe performance metrics for converting Excel workbooks to PDF using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics for Excel to PDF in .NET Excel Library

The following benchmark measures the time required by the Syncfusion Excel (XlsIO) library to convert a workbook of 100,000 rows × 50 columns to PDF. Each row uses one data type: text, DateTime, number, boolean, or formula.

> IMPORTANT: Before running the samples on this page, install the [required NuGet package](nuget-packages-required-for-excel-to-pdf) and register your Syncfusion license key. For more information, see the [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview).

<table>
  <thead>
    <tr>
      <th>Data type</th>
      <th>Time (seconds)</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Text</td>
      <td>91</td>
      <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/String%20Data%20Type/.NET/String%20Data%20Type">GitHub sample</a></td>
    </tr>
    <tr>
      <td>DateTime</td>
      <td>105</td>
      <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub sample</a></td>
    </tr>
    <tr>
      <td>Number</td>
      <td>96</td>
      <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub sample</a></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td>81</td>
      <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub sample</a></td>
    </tr>
    <tr>
      <td>Formula</td>
      <td>104</td>
      <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub sample</a></td>
    </tr>
  </tbody>
</table>

The samples above are also available in the [Performance Metrics parent folder](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF) on GitHub.

## Test environment

The benchmark was run on the following configuration:

* **Operating system:** Windows 10 64-bit
* **.NET runtime:** .NET Framework 4.8 (Windows-specific `ExcelToPdfConverter`)
* **CPU:** Intel Core i7 (or equivalent x64)
* **Memory:** 16 GB RAM
* **Syncfusion version:** Essential Studio<sup>&reg;</sup> v23.2.x
* **Build configuration:** Release with optimizations enabled

> NOTE: Numbers are based on a single run, not a statistically averaged benchmark. Use them as a rough reference, not as a service-level agreement.

## How to reproduce

1. Install the [Syncfusion.ExcelToPdfConverter.Wpf](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.Wpf) NuGet package (or the platform-specific package for your target).
2. Register your license key by calling `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup.
3. Open the sample project that matches the data type you want to benchmark (see the **Sample** column above).
4. 	Built-in **Release** configuration and run. The sample uses `System.Diagnostics.Stopwatch` to measure conversion time.

## See also

* [Excel to PDF conversion guide](excel-to-pdf-conversion) — workbook/worksheet/chart conversion basics.
* [Excel to PDF Converter Settings](excel-to-pdf-converter-settings) — customize layout, formatting, conformance, and accessibility.
* [Assemblies Required for Excel to PDF conversion](assemblies-required-for-excel-to-pdf) — manual assembly references.
* [NuGet Packages Required for Excel to PDF conversion](nuget-packages-required-for-excel-to-pdf) — install the right package for your target platform.
* [Licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) — register your license key.
