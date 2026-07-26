---
title: Radial Menu in UWP RichTextBox control | Syncfusion
description: Learn here all about Radial Menu support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: radial-menu,enableradialmenu,sf-radial-menu,radial-slider,radial-pointer,navigation-button,customization,style
---
# Radial menu support in UWP RichTextBox

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) supports a built-in radial menu that provides rich-text formatting options such as bold, italic, and more. The radial menu appears automatically when the user makes a text selection or interacts with the control via touch or pen.

The following screenshot shows the built-in radial menu for the `SfRichTextBoxAdv` control.

![SfRichTextBoxAdv built-in radial menu](Radial-Menu_images/Radial-Menu_img1.jpeg)

N> On Windows Phone devices, the built-in radial menu is not supported.

N> The XAML snippets in this document assume the `RichTextBoxAdv` namespace is mapped to `using:Syncfusion.UI.Xaml.RichTextBoxAdv` and that the host `SfRichTextBoxAdv` is declared as `<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" />`. The customization sample also requires the `Syncfusion.SfRadialMenu.UWP` assembly and the namespace mapping `xmlns:radialMenu="using:Syncfusion.UI.Xaml.RadialMenu"`.

## Enable or disable the radial menu

In `SfRichTextBoxAdv`, the built-in radial menu is enabled by default. You can enable or disable the built-in radial menu by setting the [`EnableRadialMenu`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#enableradialmenu) property. The following code example demonstrates how to disable the built-in radial menu in the `SfRichTextBoxAdv` control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All" EnableRadialMenu="False" />

{% endhighlight %}

{% highlight c# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;

// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.ManipulationMode = ManipulationModes.All;

// Disables the built-in radial menu in the SfRichTextBoxAdv control.
richTextBoxAdv.EnableRadialMenu = false;

{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv

' Initializes a new instance of SfRichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.ManipulationMode = ManipulationModes.All

' Disables the built-in radial menu in the SfRichTextBoxAdv control.
richTextBoxAdv.EnableRadialMenu = False

{% endhighlight %}
{% endtabs %}

## Customizing the radial menu appearance

You can customize the appearance of the built-in radial menu to suit your needs. This is done by defining custom styles for the radial menu under the `Resources` of `SfRichTextBoxAdv`, which override the default style. The following code example demonstrates how to customize the appearance of the navigation button, rim, radial slider, and radial pointer in the built-in radial menu.
{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" %}
<Page
    x:Class="MyApp.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv"
    xmlns:radialMenu="using:Syncfusion.UI.Xaml.RadialMenu">
    <Grid>
        <RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBox" ManipulationMode="All" IsTabStop="True">
            <!-- Specifies resources for this instance -->
            <RichTextBoxAdv:SfRichTextBoxAdv.Resources>

                <!-- Custom style for the radial menu -->
                <Style TargetType="radialMenu:SfRadialMenu">
                    <Setter Property="RimBackground" Value="#EFEFEF"/>
                    <Setter Property="RimActiveBrush" Value="#0071BC"/>
                </Style>

                <!-- Custom style for the radial pointer -->
                <Style TargetType="radialMenu:RadialPointer" x:Key="RadialPointerStyle">
                    <Setter Property="Height" Value="2"/>
                    <Setter Property="IsTabStop" Value="False"/>
                    <Setter Property="Template">
                        <Setter.Value>
                            <ControlTemplate TargetType="radialMenu:RadialPointer">
                                <Border Background="#0071BC"/>
                            </ControlTemplate>
                        </Setter.Value>
                    </Setter>
                </Style>

                <!-- Custom style for the radial slider -->
                <Style TargetType="radialMenu:SfRadialSlider">
                    <Setter Property="Foreground" Value="#0071BC"/>
                    <Setter Property="InnerRimFill" Value="#0071BC"/>
                    <Setter Property="OuterRimStroke" Value="#0071BC"/>
                    <Setter Property="PointerStyle" Value="{StaticResource RadialPointerStyle}"/>
                </Style>

                <!-- Custom style for the navigation button -->
                <Style x:Key="RTERadialMenuNavigationButtonStyle" TargetType="Button">
                    <Setter Property="FontFamily" Value="Segoe UI Symbol"/>
                    <Setter Property="BorderBrush" Value="#0071BC"/>
                    <Setter Property="Template">
                        <Setter.Value>
                            <ControlTemplate TargetType="Button">
                                <Grid Background="Transparent" Margin="-5">
                                    <VisualStateManager.VisualStateGroups>
                                        <VisualStateGroup x:Name="CommonStates">
                                            <VisualState x:Name="Normal"/>
                                            <VisualState x:Name="PointerOver">
                                                <Storyboard>
                                                    <ObjectAnimationUsingKeyFrames Storyboard.TargetProperty="Fill" Storyboard.TargetName="BackgroundEllipse">
                                                        <DiscreteObjectKeyFrame KeyTime="0" Value="LightGray"/>
                                                    </ObjectAnimationUsingKeyFrames>
                                                </Storyboard>
                                            </VisualState>
                                        </VisualStateGroup>
                                    </VisualStateManager.VisualStateGroups>
                                    <Ellipse Fill="White" x:Name="BackgroundEllipse" />
                                    <Ellipse Stroke="{TemplateBinding BorderBrush}" StrokeThickness="2" Fill="Transparent"/>
                                    <ContentPresenter HorizontalAlignment="Center" VerticalAlignment="Center"/>
                                </Grid>
                            </ControlTemplate>
                        </Setter.Value>
                    </Setter>
                </Style>
            </RichTextBoxAdv:SfRichTextBoxAdv.Resources>
        </RichTextBoxAdv:SfRichTextBoxAdv>
    </Grid>
</Page>

{% endhighlight %}

{% endtabs %}
The following screenshot shows the radial menu with customized style.
![SfRichTextBoxAdv radial menu with applied custom styles](Radial-Menu_images/Radial-Menu_img2.jpeg)

The sample to demonstrate customizing the style of the built-in radial menu can be downloaded from the [Syncfusion UWP RichTextBox GitHub sample](https://github.com/SyncfusionExamples/UWP-RichTextBox-Examples).

N> The built-in radial menu and the `EnableRadialMenu` property are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [Selection in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/selection)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
