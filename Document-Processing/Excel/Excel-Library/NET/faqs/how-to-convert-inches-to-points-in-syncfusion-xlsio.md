---
title: How to Convert Inches to Points in .NET Excel Library | Syncfusion
description: Convert inches to points using IApplication.InchesToPoints in Syncfusion .NET Excel Library for accurate layout sizing.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to convert inches to points in .NET Excel Library

Converting measurements between units is common when laying out Excel content programmatically. Syncfusion XlsIO exposes an `InchesToPoints` helper on the `IApplication` instance that converts a measurement in inches to points.

The following code example illustrates the conversion.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    // Converts inches to points
    double inches = 4.5;
    double points = application.InchesToPoints(inches);
    Console.WriteLine($"{inches} inches is equal to {points} points.");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;

    // Converts inches to points
    double inches = 4.5;
    double points = application.InchesToPoints(inches);
    Console.WriteLine($"{inches} inches is equal to {points} points.");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel

    ' Converts inches to points
    Dim inches As Double = 4.5
    Dim points = application.InchesToPoints(inches)
    Console.WriteLine($"{inches} inches is equal to {points} points.")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/996021-Inches-To-Points/FAQ/Inches%20To%20Points/.NET/Inches%20To%20Points" aria-label="GitHub demo link">this GitHub page</a>.
