---
title: Resolving Namespace Ambiguity Errors| Syncfusion
description: This page explains how to fix namespace conflicts in .NET applications caused by using Syncfusion PDF packages like Syncfusion.Pdf.Net.Core and PdfViewer
platform: document-processing
documentation: UG
---

# Resolving Namespace Ambiguity Errors in Syncfusion PDF Packages for .NET

Namespace ambiguity errors occur when multiple Syncfusion PDF-related packages, such as **Syncfusion.Pdf.Net.Core** and **Syncfusion.PdfViewer**, are included in the same project. These packages may share overlapping namespaces and types, causing conflicts during compilation.

## Example Error Message:

{% tabs %}
{% highlight c# tabtitle="C#" %}

CS0104: 'PdfDocument' is an ambiguous reference between 'Syncfusion.Pdf.Parsing.PdfDocument' and 'Syncfusion.Windows.PdfViewer.PdfDocument'

{% endhighlight %}

{% endtabs %}

## Steps to Resolve the Issue:

### Evaluate Your Requirements:

* Use **Syncfusion.Pdf.Net.Core** for basic PDF functionalities like creating, editing, or extracting PDF content.
* Use **Syncfusion.PdfViewer** if the project requires PDF viewing or printing capabilities.

### Avoid Using Both Packages Together:

If your project needs viewing or printing functionality, remove the **Syncfusion.Pdf.Net.Core** package and retain only **Syncfusion.PdfViewer**.

### Clean and Rebuild the Solution:

After making changes, clean the project and rebuild the solution to update references and eliminate conflicts.

By following these steps, you can resolve namespace conflicts effectively when working with Syncfusion PDF packages in .NET.
