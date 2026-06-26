---
title: How to use SfRichTextBoxAdv as a standard RichTextBox. | Syncfusion
description: Learn how to use UWP SfRichTextBoxAdv as a standard RichTextBox along with its core key features and usage.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: use-sfrichtextboxadv-like-richtextbox
---

# Use SfRichTextBoxAdv as a standard RichTextBox

Use the following code to configure the SfRichTextBoxAdv control as a standard RichTextBox with rich text formatting options.

{% tabs %}
{% highlight xaml tabtitle="MainWindow.xaml" %}
<Page
    x:Class="Standard_RichTextBox.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:Standard_RichTextBox"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d"
    xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv"
    Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <Page>
        <Page.Resources>
            <RichTextBoxAdv:UnderlineToggleConverter x:Key="UnderlineToggleConverter"/>
            <RichTextBoxAdv:LeftAlignmentToggleConverter x:Key="LeftAlignmentToggleConverter"/>
            <RichTextBoxAdv:CenterAlignmentToggleConverter x:Key="CenterAlignmentToggleConverter"/>
            <RichTextBoxAdv:RightAlignmentToggleConverter x:Key="RightAlignmentToggleConverter"/>
            <RichTextBoxAdv:JustifyAlignmentToggleConverter x:Key="JustifyAlignmentToggleConverter"/>
            <Style TargetType="Button">
                <Setter Property="Background" Value="Transparent" />
                <Setter Property="Margin" Value="12 4"/>
            </Style>
            <Style TargetType="ToggleButton">
                <Setter Property="Background" Value="Transparent" />
                <Setter Property="Margin" Value="12 4"/>
            </Style>
        </Page.Resources>

        <Grid Background="#F1F1F1">
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto"/>
                <RowDefinition Height="*"/>
            </Grid.RowDefinitions>
            <Grid>
                <!-- Defines the data context as RichTextBoxAdv -->
                <StackPanel Orientation="Horizontal" DataContext="{Binding ElementName=richTextBoxAdv}">
                    <!-- UI option to perform Undo/Redo using command binding -->
                    <StackPanel Orientation="Horizontal">
                        <Button Command="{Binding UndoCommand}" IsTabStop="False">
                            <Image Source="/Images/Undo.png" Height="40" Width="40" />
                        </Button>
                        <Button Command="{Binding RedoCommand}" IsTabStop="False">
                            <Image Source="/Images/Redo.png" Height="40" Width="40" />
                        </Button>
                    </StackPanel>
                    <!-- UI option to perform Clipboard operations using command binding -->
                    <Border Width="2" Height="46" Background="#1F1F1F"/>
                    <StackPanel Orientation="Horizontal">
                        <Button Command="{Binding CutCommand}" IsTabStop="False">
                            <Image Source="/Images/Cut.png" Height="40" Width="40" />
                        </Button>
                        <Button Command="{Binding CopyCommand}" IsTabStop="False">
                            <Image Source="/Images/Copy.png" Height="40" Width="40" />
                        </Button>
                        <Button Command="{Binding PasteCommand}" IsTabStop="False">
                            <Image Source="/Images/Paste.png" Height="40" Width="40" />
                        </Button>
                    </StackPanel>
                    <!-- UI option to apply character formatting using property binding -->
                    <Border Width="2" Height="46" Background="#1F1F1F"/>
                    <StackPanel Orientation="Horizontal">
                        <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Bold, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Bold.png" Height="40" Width="40" />
                        </ToggleButton>
                        <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Italic, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Italic.png" Height="40" Width="40" />
                        </ToggleButton>
                        <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Underline, Converter={StaticResource UnderlineToggleConverter}, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Underline.png" Height="40" Width="40" />
                        </ToggleButton>
                    </StackPanel>
                    <Border Width="2" Height="46" Background="#1F1F1F"/>
                    <!-- UI option to apply paragraph formatting using property binding -->
                    <StackPanel Orientation="Horizontal">
                        <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource LeftAlignmentToggleConverter}, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Left.png" Height="40" Width="40" />
                        </ToggleButton>
                        <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource CenterAlignmentToggleConverter}, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Center.png" Height="40" Width="40" />
                        </ToggleButton>
                        <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource RightAlignmentToggleConverter}, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Right.png" Height="40" Width="40" />
                        </ToggleButton>
                        <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource JustifyAlignmentToggleConverter}, Mode=TwoWay}" IsTabStop="False">
                            <Image Source="/Images/Justify.png" Height="40" Width="40" />
                        </ToggleButton>
                    </StackPanel>
                </StackPanel>
            </Grid>
            <RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" Grid.Row="1" ManipulationMode="All" LayoutType="Continuous"/>
        </Grid>
    </Page>    
</Page>


{% endhighlight %}

{% endtabs %}

When the application is executed, the standard RichTextBox control is displayed as illustrated below.
![UWP Standard RichTextBox](../Getting-Started_images/uwp-standard-sfrichtextboxadv.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/UWP-RichTextBox-Examples/tree/main/Samples/Standard%20RichTextBox).