---
layout: post
title: Liquid Glass Effect in .NET MAUI PDF Viewer | Syncfusion
description: Learn here all about how to add liquid glass effect for Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Liquid Glass Effect in .NET MAUI PDF Viewer (SfPdfViewer)
The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control supports a Liquid Glass effect for its UI, providing a visually appealing, frosted-glass appearance. This feature is available only for .NET MAUI applications targeting .NET 10 and running on iOS or macOS devices with version 26 or above.

## Enable or Disable the Liquid Glass Effect
The Liquid Glass effect enhances the UI of the PDF Viewer by adding a translucent, glass-like background. You can enable or disable this effect using the EnableLiquidGlassEffect property of [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html). The default value of this property is false.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" hl_lines="1 17" %}
C# :
 // Enable the liquid glass effect for the PDF Viewer 
 PdfViewer. EnableLiquidGlassEffect = True; 
 {% endhighlight %} 
{% endtabs %}

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" hl_lines="1 17" %}
 Xaml: 
 <syncfusion:SfPdfViewer x:Name="PdfViewer" EnableLiquidGlassEffect ="True" > 
 </syncfusion:SfPdfViewer>
{% endhighlight %} 
{% endtabs %}