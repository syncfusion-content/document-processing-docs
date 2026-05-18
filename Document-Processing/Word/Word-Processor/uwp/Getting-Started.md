---
title: Getting Started with UWP RichTextBox control | Syncfusion
description: Learn here about getting started with Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control, its elements and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: getting-started
---
# Getting Started with UWP RichTextBox (SfRichTextBoxAdv)

Syncfusion® UWP RichTextBox (SfRichTextBoxAdv) enables you to create, edit, view, and print Word documents in UWP applications. This section guides you through the steps to get started and create a RichTextBox in a UWP application.

## Create a RichTextBox in UWP using SfRichTextBoxAdv

In this walk-through, you will create a UWP application that uses the Syncfusion® UWP SfRichTextBoxAdv control.

The steps below cover the essential topics required to add and use the SfRichTextBoxAdv control in a UWP project. 

### Creating a New UWP Project

1. Open **Visual Studio**.
2. Click **Create a new project**.
3. Select **Blank App (Universal Windows)** or **UWP App** from the project templates.
4. Click **Next**.
5. Enter the **project name**, location, and other required details.
6. Click **Create**.

### Add the SfRichTextBoxAdv dependencies

| NuGet Packages | Assemblies |
|----------------|------------|
| **Using NuGet Package Manager (UI):** <br><br> 1. In Solution Explorer, right-click the project and choose **Manage NuGet Packages**. <br> 2. Search for **Syncfusion.SfRichTextBoxAdv.UWP** and install the latest version. <br> 3. Verify that all required dependencies are installed and the project is successfully restored. <br><br> **Using Package Manager Console:** <br><code>Install-Package Syncfusion.SfRichTextBoxAdv.UWP </code> | • Syncfusion.SfRichTextBoxAdv.UWP <br> • Syncfusion.DocIO.UWP <br> • Syncfusion.SfRadialMenu.UWP <br> • Syncfusion.SfShared.UWP |

N> 1. Starting with v16.2.0.41 (2018 Vol 2), if you reference Syncfusion&reg; assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license&reg; key in your UWP application to use our components.
N> 2. Starting from version v20.3.0.52, we internally disposed all the resources used by SfRichTextBoxAdv instance inside Unloaded event. This change is added to automatically release the memory utilized by SfRichTextBoxAdv instance when it is unloaded. 
      
      This behavior change may introduce a break if you remove the SfRichTextBoxAdv instance from its parent container and add it to the same or another parent container in your application. In case you used such logic in your application, then kindly add below code before removing the SfRichTextBoxAdv instance from its parent container.

<table>
  <thead>
    <tr>
      <th>Old code</th>
      <th>New code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <pre><code>
//Remove the control from the parent Grid
grid.Children.Remove(richTextBoxAdv);

//Add the SfRichTextBoxAdv control to the Grid
grid.Children.Add(richTextBoxAdv);
      </code></pre>
    </td>
    <td>
      <pre><code>
//Create a file stream
MemoryStream memoryStream = new MemoryStream();

//Save the document to the stream 
richTextBoxAdv.Save(memoryStream, FormatType.Docx);

//Remove the control from the parent Grid
grid.Children.Remove(richTextBoxAdv);

//Create new instance of SfRichTextBoxAdv
richTextBoxAdv = new SfRichTextBoxAdv();

//Add the SfRichTextBoxAdv control to the Grid
grid.Children.Add(richTextBoxAdv);

//Load the saved stream into SfRichTextBoxAdv
richTextBoxAdv.Load(memoryStream, FormatType.Docx);
      </code></pre>
    </td>
  </tr>
  </tbody>
</table>

### Add SfRichTextBoxAdv control

{% tabcontents %}

{% tabcontent Via Designer %}
![Dragging SfRichTextBoxAdv Control from Toolbox](Getting-Started_images/uwp-richtextbox-dragfrom-toolbox.png)
{% endtabcontent %}

{% tabcontent Via XAML %}

To add the control manually in XAML, follow the following steps:

1.	Add the following required assembly references to the project:
    - Syncfusion.SfRichTextBoxAdv.UWP
    - Syncfusion.DocIO.UWP
    - Syncfusion.SfRadialMenu.UWP
    - Syncfusion.SfShared.UWP

2.	Import Syncfusion® UWP SfRichTextBoxAdv control namespace Syncfusion.UI.Xaml.RichTextBoxAdv in XAML page.

3.	Declare SfRichTextBoxAdv control in XAML page.

{% tabs %}
{% highlight xaml tabtitle="XAML" %}

<Page
    x:Class="SfRichTextBoxAdv.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:SfRichTextBoxAdv"
    xmlns:RichTextBoxAdv="using:Syncfusion.UI.Xaml.RichTextBoxAdv"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d"
    Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <Grid>
        <RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" ManipulationMode="All"/>
    </Grid>
</Page>


{% endhighlight %}
{% endtabs %}
{% endtabcontent %}

{% tabcontent Via C# %}

To add the control manually in C#, add the below code

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.UI.Xaml.RichTextBoxAdv;

public sealed partial class MainPage : Page
{
    public MainPage()
    {
        // Create an instance of SfRichTextBoxAdv control
        SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();

        // Get the document associated with the SfRichTextBoxAdv control
        DocumentAdv documentAdv = richTextBoxAdv.Document;

        // Access the first section in the document
        SectionAdv sectionAdv = documentAdv.Sections.First();

        // Create a new paragraph
        ParagraphAdv paragraphAdv = new ParagraphAdv();

        // Create a span element to hold text
        SpanAdv spanAdv = new SpanAdv();

        // Set the text content
        spanAdv.Text = "Hello World";

        // Add the text span to the paragraph
        paragraphAdv.Inlines.Add(spanAdv);

        // Add the paragraph to the section
        sectionAdv.Blocks.Add(paragraphAdv);

        // Add the SfRichTextBoxAdv control to the container (Grid)
        Root_Grid.Children.Add(richTextBoxAdv);
    }
}

{% endhighlight %}
{% endtabs %}
{% endtabcontent %}

{% endtabcontents %}


### Running the Application

1. Press **F5** or click **Start Debugging** in Visual Studio.
2. The UWP application will be deployed and launched on the selected target device, displaying the **SfRichTextBoxAdv** control.
3. You can now create, view, and edit Word documents within the application.

You can download a complete working sample from GitHub <<Create sample and add link>>.

Upon execution, the SfRichTextBoxAdv control renders the Word document as illustrated below.

![UWP SfRichTextBoxAdv Control](Getting-Started_images/uwp-sfrichtextboxadv-control.png)

## Use SfRichTextBoxAdv as a standard RichTextBox

This section discusses about how to use the SfRichTextBoxAdv control as a standard RichTextBox control with rich text formatting options.

{% tabs %}
{% highlight xaml %}
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
                    <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Bold}" IsTabStop="False">
                        <Image Source="/Images/Bold.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Italic}" IsTabStop="False">
                        <Image Source="/Images/Italic.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Underline, Converter={StaticResource UnderlineToggleConverter}}" IsTabStop="False">
                        <Image Source="/Images/Underline.png" Height="40" Width="40" />
                    </ToggleButton>
                </StackPanel>
                <Border Width="2" Height="46" Background="#1F1F1F"/>
                <!-- UI option to apply paragraph formatting using property binding -->
                <StackPanel Orientation="Horizontal">
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource LeftAlignmentToggleConverter}}" IsTabStop="False">
                        <Image Source="/Images/Left.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource CenterAlignmentToggleConverter}}" IsTabStop="False">
                        <Image Source="/Images/Center.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource RightAlignmentToggleConverter}}" IsTabStop="False">
                        <Image Source="/Images/Right.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource JustifyAlignmentToggleConverter}}" IsTabStop="False">
                        <Image Source="/Images/Justify.png" Height="40" Width="40" />
                    </ToggleButton>
                </StackPanel>
            </StackPanel>
        </Grid>
        <RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" Grid.Row="1" ManipulationMode="All" />
    </Grid>
</Page>



{% endhighlight %}

{% endtabs %}

You can download a standard RichTextBox example from [GitHub](https://github.com/SyncfusionExamples/UWP-RichTextBox-Examples/tree/main/Samples/Standard%20RichTextBox).

When the application is executed, the standard RichTextBox control is displayed as illustrated below.
![UWP Standard RichTextBox](Getting-Started_images/uwp-standard-sfrichtextboxadv.png)