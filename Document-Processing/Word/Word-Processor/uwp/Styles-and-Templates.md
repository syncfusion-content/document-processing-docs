---
title: Styles and Templates in UWP RichTextBox control | Syncfusion
description: Learn here all about Styles and Templates support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: styles-and-templates,custom-style,control-template,generic-xaml,template-parts,default-style,styling
---
# Styles and templates in UWP RichTextBox

This section describes the styles and templates for the [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control. The control template defines the structure of the SfRichTextBoxAdv control and the style defines its visual appearance. You can modify the default control template to define a unique appearance for the control.

## Default style and template

The following XAML shows the default style and template for the SfRichTextBoxAdv control.

N> The XAML snippets in this document assume the `RichTextBoxAdv` namespace is mapped to `using:Syncfusion.UI.Xaml.RichTextBoxAdv` on the page root. The custom style must be declared in the same `Resources` scope as the control that uses it (for example, the page-level `Resources` block).
{% tabs %}
{% highlight xml %}
<Style TargetType="RichTextBoxAdv:SfRichTextBoxAdv" xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv">
    <Setter Property="Template">
        <Setter.Value>
            <ControlTemplate TargetType="RichTextBoxAdv:SfRichTextBoxAdv">
                <Border Background="{TemplateBinding Background}" BorderBrush="{TemplateBinding BorderBrush}" BorderThickness="{TemplateBinding BorderThickness}">
                    <Grid>
                        <Grid.ColumnDefinitions>
                            <ColumnDefinition Width="Auto"/>
                            <ColumnDefinition Width="*"/>
                        </Grid.ColumnDefinitions>
                        <Grid x:Name="OptionsPane" Visibility="Collapsed"/>
                        <Grid Grid.Column="1">
                            <Grid.ColumnDefinitions>
                                <ColumnDefinition Width="*"/>
                                <ColumnDefinition Width="Auto"/>
                            </Grid.ColumnDefinitions>
                            <Grid.RowDefinitions>
                                <RowDefinition Height="*"/>
                                <RowDefinition Height="Auto"/>
                            </Grid.RowDefinitions>
                            <ContentControl x:Name="content" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" Grid.Row="0" Grid.Column="0" />
                            <ScrollBar x:Name="HorizontalScrollBar" Grid.Column="0" Height="16" Visibility="Collapsed" IsTabStop="False" Minimum="0" Orientation="Horizontal" Grid.Row="1"/>
                            <ScrollBar x:Name="VerticalScrollBar" Grid.Column="1" IsTabStop="False" Visibility="Collapsed" Minimum="0" Orientation="Vertical" Grid.Row="0" Width="16"/>
                        </Grid>
                    </Grid>
                </Border>
            </ControlTemplate>
        </Setter.Value>
    </Setter>
</Style>


{% endhighlight %}

{% endtabs %}

N> In the control template, you are allowed to reorder the template parts and to add your own elements. However, when changing the control template, you should be careful to include all required parts. Required template parts are marked with the `x:Name` attribute. Omission of required parts may impact some of the functionality.

The following table lists the required named visual-tree parts of the `SfRichTextBoxAdv` control template.

| Template part (`x:Name`) | Purpose |
| --- | --- |
| `content` | The `ContentControl` that hosts the document view. |
| `OptionsPane` | The search / replace options pane (collapsed by default). |
| `HorizontalScrollBar` | The horizontal `ScrollBar`. |
| `VerticalScrollBar` | The vertical `ScrollBar`. |

## Styling SfRichTextBoxAdv

You can define a custom style for the SfRichTextBoxAdv control either by creating an empty style and setting it up yourself, or by copying the default style and modifying it. The following example demonstrates how to customize the style for the SfRichTextBoxAdv control.
{% tabs %}
{% highlight xml %}
<Style x:Key="RichTextBoxAdvCustomStyle" TargetType="RichTextBoxAdv:SfRichTextBoxAdv" xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv">
    <Setter Property="BorderThickness" Value="1"/>
    <Setter Property="Template">
        <Setter.Value>
            <ControlTemplate TargetType="RichTextBoxAdv:SfRichTextBoxAdv">
                <Border Background="{TemplateBinding Background}" BorderBrush="{TemplateBinding BorderBrush}" BorderThickness="{TemplateBinding BorderThickness}">
                    <Grid>
                        <Grid.RowDefinitions>
                            <RowDefinition Height="Auto"/>
                            <RowDefinition Height="*"/>
                        </Grid.RowDefinitions>
                        <Grid.ColumnDefinitions>
                            <ColumnDefinition Width="Auto"/>
                            <ColumnDefinition Width="*"/>
                        </Grid.ColumnDefinitions>
                        <Border Background="Gray" Grid.Row="0" Grid.Column="0" Grid.ColumnSpan="2">
                            <TextBlock Text="Rich Text Editor" FontSize="28" HorizontalAlignment="Center" Foreground="White"/>
                        </Border>
                        <Grid x:Name="OptionsPane" Visibility="Collapsed" Grid.Row="1" Grid.Column="0"/>
                        <Grid Grid.Row="1" Grid.Column="1">
                            <Grid.ColumnDefinitions>
                                <ColumnDefinition Width="Auto"/>
                                <ColumnDefinition Width="*"/>
                            </Grid.ColumnDefinitions>
                            <Grid.RowDefinitions>
                                <RowDefinition Height="*"/>
                                <RowDefinition Height="Auto"/>
                            </Grid.RowDefinitions>
                            <ContentControl x:Name="content" HorizontalAlignment="Stretch" VerticalAlignment="Stretch" Grid.Row="0" Grid.Column="1" />
                            <ScrollBar x:Name="HorizontalScrollBar" Grid.Column="0" Height="16" Visibility="Collapsed" IsTabStop="False" Minimum="0" Orientation="Horizontal" Grid.Row="1"/>
                            <ScrollBar x:Name="VerticalScrollBar" Grid.Column="0" IsTabStop="False" Visibility="Collapsed" Minimum="0" Orientation="Vertical" Grid.Row="0" Width="16"/>
                        </Grid>
                    </Grid>
                </Border>
            </ControlTemplate>
        </Setter.Value>
    </Setter>
</Style>



{% endhighlight %}

{% endtabs %}

The following XAML example demonstrates how to apply the custom style to the SfRichTextBoxAdv control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All" Style="{StaticResource RichTextBoxAdvCustomStyle}" />

{% endhighlight %}
{% endtabs %}

The following screenshot shows the SfRichTextBoxAdv control with the customized style, which adds a top header band labeled "Rich Text Editor" above the document view.

![SfRichTextBoxAdv control with the RichTextBoxAdvCustomStyle applied, showing the custom header band](Styles-and-Templates_images/Styles-and-Templates_img1.jpeg)

N> When you copy the default style from the Syncfusion assembly's `Themes/generic.xaml` and modify it, keep all the required template parts (`content`, `OptionsPane`, `HorizontalScrollBar`, `VerticalScrollBar`) in the modified template; otherwise some functionality (search pane, scrolling) may not work.

N> The `SfRichTextBoxAdv` style and template APIs are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [Background in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/background)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)

