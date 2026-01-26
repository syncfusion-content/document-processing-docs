---
layout: post
title: Liquid Glass Effect for .NET MAUI PDF Viewer control | Syncfusion
description: Learn how to enable and customize the Liquid Glass Effect in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Liquid Glass Effect in .NET MAUI PDF Viewer (SfPdfViewer)

The Liquid Glass Effect introduces a modern, translucent design with adaptive color tinting and light refraction, creating a sleek, glass like user experience that remains clear and accessible. This section explains how to enable and customize the effect in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control.

## Apply liquid glass effect

Follow these steps to enable and configure the Liquid Glass Effect in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control:

### Step 1: Wrap the control inside glass effect view

To apply the Liquid Glass Effect to Syncfusion® .NET MAUI [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control, wrap the control inside the [SfGlassEffectView](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Core.SfGlassEffectView.html) class.

For more details, refer to the [Liquid Glass Getting Started documentation](https://help.syncfusion.com/maui/liquid-glass-ui/glassy-controls).

### Step 2: Enable the liquid glass effect on SfPdfViewer

Set the [EnableLiquidGlassEffect](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_EnableLiquidGlassEffect) property to `true` in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control to apply the Liquid Glass Effect. When enabled, the effect is also applied to its dependent controls and provides responsive interaction for a smooth and engaging user experience.

### Step 3: Customize the background

To achieve a glass like background in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control, set the `Background` property to `Transparent`. The background will then be treated as a tinted color, ensuring a consistent glass effect across the controls.

The following code snippet demonstrates how to apply the Liquid Glass Effect to the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) control:

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" hl_lines="14 16 18" %}
<Grid>
    <Grid.Background>
        <LinearGradientBrush StartPoint="0,0" 
                             EndPoint="0,1">
            <GradientStop Color="#0F4C75" 
                          Offset="0.0"/>
            <GradientStop Color="#3282B8" 
                          Offset="0.5"/>
            <GradientStop Color="#1B262C" 
                          Offset="1.0"/>
        </LinearGradientBrush>
    </Grid.Background>
 
    <core:SfGlassEffectView EffectType="Regular"
                            CornerRadius="20">
        <syncfusion:SfPdfViewer x:Name="pdfViewer"
                                Background="Transparent"
                                EnableLiquidGlassEffect="True">
        </syncfusion:SfPdfViewer>
    </core:SfGlassEffectView>
</Grid>
{% endhighlight %}

{% highlight c# tabtitle="MainPage.xaml.cs" hl_lines="19 20 21 22 23 28" %}
using Syncfusion.Maui.Core;
using Syncfusion.Maui.PdfViewer;
 
var grid = new Grid();
var gradientBrush = new LinearGradientBrush
{
    StartPoint = new Point(0, 0),
    EndPoint = new Point(0, 1),
    GradientStops =
    {
        new GradientStop { Color = Color.FromArgb("#0F4C75"), Offset = 0.0f },
        new GradientStop { Color = Color.FromArgb("#3282B8"), Offset = 0.5f },
        new GradientStop { Color = Color.FromArgb("#1B262C"), Offset = 1.0f }
    }
};
 
grid.Background = gradientBrush;
 
var glassEffectView = new SfGlassEffectView
{
    EffectType = GlassEffectType.Regular,
    CornerRadius = 20
};
 
var pdfViewer = new SfPdfViewer
{
    Background = Colors.Transparent,
    EnableLiquidGlassEffect = true
};
 
glassEffectView.Content = pdfViewer; 
grid.Children.Add(glassEffectView); 
this.Content = grid;
{% endhighlight %}
{% endtabs %}

N>
* Supported on `macOS 26 or higher` and `iOS 26 or higher`.
* This feature is available only in `.NET 10.`