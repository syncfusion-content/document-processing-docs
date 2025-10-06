---
title: Resolving Namespace Ambiguity Errors| Syncfusion
description: This page explains how to fix namespace conflicts in .NET applications caused by using Syncfusion PDF packages like Syncfusion.Pdf.Net.Core and PdfViewer
platform: document-processing
documentation: UG
---

# Resolving PDF Namespace Conflicts

## Conflict Scenario

Namespace conflicts in .NET projects can occur when combining different Syncfusion PDF-related packages that target multiple platforms. For example, including the following package pairs in the same project:

* Syncfusion.Pdf.Net.Core (cross-platform)

* Syncfusion.PdfViewer.Windows or Syncfusion.PdfViewer.WPF (platform-specific viewers)

These conflicts usually arise because multiple Syncfusion packages share the same namespaces or types, leading to ambiguity.

## Typical Error Message

When these conflicting packages are used together, you may encounter an error like this:

{% tabs %}
{% highlight c# tabtitle="C#" %}

The type 'PdfDocument' exists in both 'Syncfusion.Pdf.Base, Version=28.1462.35.0, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89' and 'Syncfusion.Pdf.Portable, Version=28.1.35.0, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89'

{% endhighlight %}

{% endtabs %}

## Resolution Strategy

To resolve this issue, follow the steps outlined below:

1. Package Compatibility Matrix

Ensure that your project uses the correct Syncfusion PDF package based on your application type. The following matrix provides a recommended approach for selecting the appropriate packages:

<table>
  <thead>
    <tr>
      <th>Application Type</th>
      <th>Required Packages</th>
      <th>Avoid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Windows Desktop Apps
      </td>
      <td>
        <b>Syncfusion.Pdf.WinForms</b> + <b>Syncfusion.PdfViewer.Windows</b> or <b>Syncfusion.PdfViewer.WPF</b>.
      </td>
      <td>
        <b>Syncfusion.Pdf.Net.Core</b>
      </td>
    </tr>
    <tr>
      <td>
        Headless Services
      </td>
      <td>
        <b>Syncfusion.Pdf.Net.Core</b>.
      </td>
      <td>
        <b>Syncfusion.Pdf.WinForms</b>, <b>Syncfusion.PdfViewer.Windows</b>, <b>Syncfusion.PdfViewer.WPF</b>
      </td>
    </tr>
    <tr>
      <td>
        ASP.NET Core/Blazor
      </td>
      <td>
        <b>Syncfusion.Pdf.Net.Core</b> + <b>Syncfusion.PdfViewer.AspNet.Core</b>.
      </td>
      <td>
        <b>Syncfusion.Pdf.WinForms</b>, <b>Syncfusion.PdfViewer.Windows</b>, <b>Syncfusion.PdfViewer.WPF</b>
      </td>
    </tr>
  </tbody>
</table>

By following this matrix, you can ensure that you avoid conflicts between platform-specific and cross-platform packages.

2. Implementation Examples

Here are a few examples of how to properly reference Syncfusion packages in your project files:

**Windows Forms Application (WinForms)**

{% tabs %}
{% highlight c# tabtitle="C#" %}

<!-- Windows Forms Application -->
<ItemGroup>
  <PackageReference Include="Syncfusion.Pdf.WinForms" Version="24.1.34" />
  <PackageReference Include="Syncfusion.PdfViewer.Windows" Version="24.1.34" />
</ItemGroup>

{% endhighlight %}

{% endtabs %}

**.NET 8 Web API (Headless Service)**

{% tabs %}
{% highlight c# tabtitle="C#" %}

<!-- .NET 8 Web API -->
<ItemGroup>
  <PackageReference Include="Syncfusion.Pdf.Net.Core" Version="24.1.34" />
</ItemGroup>
These configurations ensure that your application uses only the relevant packages based on the platform, preventing namespace conflicts.

{% endhighlight %}

{% endtabs %}

3. Migration Procedure

If your project already contains conflicting packages, you can follow these steps to resolve the issue:

**Remove Conflicting Packages**

First, remove any conflicting packages from your project. For example:

{% tabs %}
{% highlight c# tabtitle="C#" %}
dotnet remove package Syncfusion.Pdf.Net.Core
dotnet remove package Syncfusion.Pdf.WinForms
{% endhighlight %}

{% endtabs %}

**Install Platform-Appropriate Packages**

Then, install the necessary packages for your specific platform. Ensure that only the required package(s) for your target platform are included.

**Update All Syncfusion Dependencies to the Same Version**

Make sure that all Syncfusion packages in your project are at the same version to maintain compatibility.

## Verification Checklist

After resolving the conflict, follow this checklist to ensure your project is properly configured:

* Single PDF package family in dependencies (e.g., either **Syncfusion.Pdf.Net.Core** or **Syncfusion.Pdf.WinForms**—not both).

* No mixed version references for Syncfusion packages.

* Namespace consistency—ensure that all PDF-related namespaces are from **Syncfusion.Pdf**.