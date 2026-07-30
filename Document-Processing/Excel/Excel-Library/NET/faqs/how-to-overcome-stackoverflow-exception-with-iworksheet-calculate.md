---
title: How to overcome a StackOverflow exception with IWorksheet's Calculate() | XlsIO | Syncfusion
description: Explains why IWorksheet.Calculate() can throw a StackOverflowException in XlsIO and how to raise the calculation limits to avoid it.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to overcome a StackOverflow exception with IWorksheet's Calculate()?

A `StackOverflowException` is thrown by the .NET runtime when XlsIO's calculation engine recurses deeper than the call stack can hold. In Syncfusion<sup>&reg;</sup> XlsIO, the depth of that recursion is bounded by three properties on the [`CalcEngine`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_CalcEngine): `MaximumRecursiveCalls`, `IterationMaxCount`, and `MaxStackDepth`. When a workbook contains deeply nested or self-referential formulas (for example, long dependency chains, iterative calculations, or circular references that converge slowly), XlsIO can hit one of these limits and throw the exception. To avoid it, raise the three limits before calling [`IWorksheet.Calculate()`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Calculate).

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook that contains the formulas you want to calculate. `IWorksheet.EnableSheetCalculations()` must be called once per worksheet so the engine considers the worksheet's formulas during calculation.
* Ensure the output directory is writable if you save the calculated workbook.

## Raise the limits and calculate

The flow is: open the workbook, get the worksheet, call `EnableSheetCalculations()`, raise the three `CalcEngine` limits, call `Calculate()`, then save.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
worksheet.EnableSheetCalculations(); 
worksheet.CalcEngine.UseFormulaValues = true; 
worksheet.CalcEngine.MaximumRecursiveCalls = 10000; 
worksheet.CalcEngine.IterationMaxCount = 10000; 
CalcEngine.MaxStackDepth = 10000; 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
worksheet.EnableSheetCalculations(); 
worksheet.CalcEngine.UseFormulaValues = true; 
worksheet.CalcEngine.MaximumRecursiveCalls = 10000; 
worksheet.CalcEngine.IterationMaxCount = 10000; 
CalcEngine.MaxStackDepth = 10000; 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
worksheet.EnableSheetCalculations()
worksheet.CalcEngine.UseFormulaValues = True
worksheet.CalcEngine.MaximumRecursiveCalls = 10000
worksheet.CalcEngine.IterationMaxCount = 10000
CalcEngine.MaxStackDepth = 10000
{% endhighlight %}
{% endtabs %}

## See Also

* [How to overcome UnauthorizedAccessException?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-overcome-unauthorizedaccessexception)
* [How to avoid exception when adding worksheets with same name?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-avoid-exception-when-adding-worksheets-with-same-name)
* [What are the known exceptions of XlsIO?](https://help.syncfusion.com/document-processing/excel/excel-library/net/known-exceptions)
* [What is Calculation Engine?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#calculation-engine)
* [What are Calculate Options?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#calculate-options)
