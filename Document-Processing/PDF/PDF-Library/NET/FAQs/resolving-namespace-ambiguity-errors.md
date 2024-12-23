---
title: Resolving Namespace Ambiguity Errors| Syncfusion
description: This page explains how to fix namespace conflicts in .NET applications caused by using Syncfusion PDF packages like Syncfusion.Pdf.Net.Core and PdfViewer
platform: document-processing
documentation: UG
---

# Resolving Namespace Ambiguity Errors in Syncfusion&reg; PDF Packages for .NET

Namespace ambiguity errors arise when multiple Syncfusion&reg; PDF-related packages, such as **Syncfusion.Pdf.Net.Core** and **Syncfusion.PdfViewer.Windows** or **Syncfusion.PdfViewer.WPF**, are included in the same project. These packages often share overlapping namespaces and types, leading to conflicts during compilation. This issue occurs because the **Syncfusion.PdfViewer.Windows** or **Syncfusion.PdfViewer.WPF** packages depend on **Syncfusion.Pdf.WinForms** or **Syncfusion.Pdf.WPF** packages, respectively. Both **Syncfusion.Pdf.Net.Core** and **Syncfusion.Pdf.WinForms** use the same namespaces, such as **Syncfusion.Pdf**, which causes these conflicts.

## Error Message:

{% tabs %}
{% highlight c# tabtitle="C#" %}

The type 'PdfDocument' exists in both 'Syncfusion.Pdf.Base, Version=28.1462.35.0, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89' and 'Syncfusion.Pdf.Portable, Version=28.1.35.0, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89'

{% endhighlight %}

{% endtabs %}

## Steps to Resolve the Issue:

We have to explain both our **Syncfusion.Pdf.WinForms** and **Syncfusion.Pdf.Net.Core** packages like.

### Avoid Mixing Conflicting Packages

* **Syncfusion.Pdf.Net.Core** is designed for .NET Core/Standard platforms and is usually used in non-UI-based applications.

* **Syncfusion.Pdf.WinForms** and **Syncfusion.Pdf.WPF** are platform-specific and used for Windows Forms or WPF applications.

* Use the appropriate package based on your application's target platform to avoid unnecessary overlaps.
