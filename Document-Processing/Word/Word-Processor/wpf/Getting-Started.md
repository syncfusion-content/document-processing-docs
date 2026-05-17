---
title: Getting Started with WPF RichTextBox control | Syncfusion
description: Learn here all about getting started with Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: getting started
---

# Getting Started with WPF RichTextBox (SfRichTextBoxAdv)

Syncfusion® [WPF RichTextBox](https://www.syncfusion.com/wpf-controls/richtextbox) (SfRichTextBoxAdv) enables you to create, edit, view, and print Word documents in WPF applications. This section guides you through the steps to get started and create a RichTextBox in a WPF application.

## Create a RichTextBox in WPF using SfRichTextBoxAdv

In this walk-through, you will create a WPF application that uses the Syncfusion® WPF SfRichTextBoxAdv control.

The steps below cover the essential topics required to add and use the SfRichTextBoxAdv control in a WPF project.

### Creating a New WPF Project

1. Open **Visual Studio**.
2. Click **Create a new project**.
3. Select **WPF App (.NET Framework)** or **WPF App (.NET Core)**.
4. Click **Next**.
5. Enter the **project name** and other required details.
6. Click **Create**.

### Add the SfRichTextBoxAdv dependencies

| NuGet Packages | Assemblies |
|----------------|------------|
| **Using NuGet Package Manager (UI):** <br><br> 1. In Solution Explorer, right-click the project and choose **Manage NuGet Packages**. <br> 2. Search for **Syncfusion.SfRichTextBoxAdv.WPF** and install the latest version. <br> 3. Ensure the necessary dependencies are installed correctly, and the project is restored. <br><br> **Using Package Manager Console:** <br><code>Install-Package Syncfusion.SfRichTextBoxAdv.WPF </code> | • Syncfusion.SfRichTextBoxAdv.WPF <br> • Syncfusion.Compression.Base <br> • Syncfusion.OfficeChart.Base <br> • Syncfusion.Shared.WPF <br> • Syncfusion.DocIO.Base |

### Add SfRichTextBoxAdv control

{% tabcontents %}

{% tabcontent Via Designer %}
![Dragging SfRichTextBoxAdv Control from Toolbox](Getting-Started_images/wpf-richtextbox-dragfrom-toolbox.png)
{% endtabcontent %}

{% tabcontent Via XAML %}

To add the control manually in XAML, follow the following steps:

1.	Add the following required assembly references to the project:
    - Syncfusion.SfRichTextBoxAdv.WPF
	- Syncfusion.Shared.WPF
	- Syncfusion.Compression.Base
	- Syncfusion.OfficeChart.Base
	- Syncfusion.DocIO.Base

2.	Import Syncfusion® WPF schema http://schemas.syncfusion.com/wpf or SfRichTextBoxAdv control namespace Syncfusion.Windows.Controls.RichTextBoxAdv in XAML page.

3.	Declare SfRichTextBoxAdv control in XAML page.


{% tabs %}
{% highlight xaml tabtitle="XAML" %}

<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:syncfusion="http://schemas.syncfusion.com/wpf" 
        x:Class="DocumentEditor.MainWindow"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv"/>
    </Grid>
</Window>


{% endhighlight %}
{% endtabs %}
{% endtabcontent %}

{% tabcontent Via C# %}

To add the control manually in C#, add the below code

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Windows.Controls.RichTextBoxAdv;

public partial class MainWindow : Window
{
    public MainWindow()
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

1. Press **F5** or click **Start** in Visual Studio.
2. The application will launch, displaying the **SfRichTextBoxAdv** control.
3. You can now create and edit Word documents within the application.

You can download a complete working sample from GitHub <<Create sample and add link>>.

Upon execution, the SfRichTextBoxAdv control renders the Word document as illustrated below.

![WPF SfRichTextBoxAdv Control](Getting-Started_images/wpf-sfrichtextboxadv-control.png)


## Add ribbon UI in SfRichTextBoxAdv

### Add SfRichTextRibbon Dependencies

If you need ribbon-based UI support for the SfRichTextBoxAdv control, add the below dependencies 

| NuGet | Assemblies |
|------|-----------|
| **Using NuGet Package Manager (UI)**<br><br>1. In Solution Explorer, right-click the project and choose **Manage NuGet Packages**.<br>2. Search for **Syncfusion.SfRichTextRibbon.Wpf** and install the latest version.<br>3. Ensure the necessary dependencies are installed correctly, and the project is restored.<br><br>**Using Package Manager Console**<br><br>`Install-Package Syncfusion.SfRichTextRibbon.WPF`<br><br> N> Installing the SfRichTextRibbon NuGet package will automatically install the required SfRichTextBoxAdv NuGet package as a dependency. | • Syncfusion.SfRichTextRibbon.WPF<br>• Syncfusion.SfRichTextBoxAdv.WPF<br>• Syncfusion.Compression.Base<br>• Syncfusion.OfficeChart.Base<br>• Syncfusion.Shared.WPF<br>• Syncfusion.Tools.WPF<br>• Syncfusion.DocIO.Base |

### Add SfRichTextRibbon to the application

{% tabcontents %}

{% tabcontent Via Designer %}
![Dragging SfRichTextRibbon Control from Toolbox](Getting-Started_images/wpf-sfrichtextribbon-dragfrom-toolbox.png)
{% endtabcontent %}

{% tabcontent Via XAML %}
To add the control manually in XAML, follow the following steps:

1.	Add the following required assembly references to the project:
		- Syncfusion.SfRichTextRibbon.WPF
		- Syncfusion.SfRichTextBoxAdv.WPF
		- Syncfusion.Compression.Base
		- Syncfusion.OfficeChart.Base
		- Syncfusion.Shared.WPF
		- Syncfusion.Tools.WPF
		- Syncfusion.DocIO.Base

2.	Import Syncfusion® WPF schema http://schemas.syncfusion.com/wpf or SfRichTextRibbon control namespace Syncfusion.Windows.Controls.RichTextBoxAdv in XAML page.
3.	To use the SfRichTextRibbon use the Syncfusion® RibbonWindow instead of Window.
4.	Declare SfRichTextRibbon control in XAML page.

{% tabs %}
{% highlight xaml tabtitle="XAML" %}

<Syncfusion:RibbonWindow xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                         xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                         xmlns:syncfusion="http://schemas.syncfusion.com/wpf" 
                         x:Class="DocumentEditor.MainWindow"
                         Title="MainWindow" Height="450" Width="800">
    <Grid>
        <Syncfusion:SfRichTextRibbon x:Name="richTextRibbon"/>
    </Grid>
</ Syncfusion:RibbonWindow>

{% endhighlight %}
{% endtabs %}

5.	To make an interaction between SfRichTextRibbon and SfRichTextBoxAdv, bind the SfRichTextBoxAdv as DataContext to the SfRichTextRibbon.

{% tabs %}
{% highlight xaml tabtitle="XAML" %}

<Syncfusion:RibbonWindow xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                         xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                         xmlns:syncfusion="http://schemas.syncfusion.com/wpf" 
                         x:Class="DocumentEditor.MainWindow"
                         Title="MainWindow" Height="450" Width="800">
<Grid>
     <Grid.RowDefinitions>
         <RowDefinition Height="Auto"/>
         <RowDefinition Height="*"/>
     </Grid.RowDefinitions>
     <Syncfusion:SfRichTextRibbon x:Name="richTextRibbon" SnapsToDevicePixels="True"  DataContext="{Binding ElementName=richTextBoxAdv}"/>
     <Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv" Background="#F1F1F1" Grid.Row="1"/>
 </Grid>
</ Syncfusion:RibbonWindow>


{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Via C# %}
To add the control manually in C#, add the below code

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Windows.Controls.RichTextBoxAdv;
using Syncfusion.Windows.Tools.Controls;

public partial class MainWindow : RibbonWindow
{
    public MainWindow()
    {
        // Create the root Grid container for layout
        Grid rootGrid = new Grid();

        // Define the first row (auto-sized for ribbon)
        RowDefinition row1 = new RowDefinition();
        row1.Height = GridLength.Auto;

        // Define the second row (fills remaining space for editor)
        RowDefinition row2 = new RowDefinition();
        row2.Height = new GridLength(1, GridUnitType.Star);

        // Add row definitions to the grid
        rootGrid.RowDefinitions.Add(row1);
        rootGrid.RowDefinitions.Add(row2);

        // Instantiate the rich text editor control
        richTextBoxAdv = new SfRichTextBoxAdv();

        // Set background color for better UI appearance
        richTextBoxAdv.Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#F1F1F1"));

        // Instantiate the ribbon control
        richTextRibbon = new SfRichTextRibbon();

        // Enable pixel snapping for sharper rendering
        richTextRibbon.SnapsToDevicePixels = true;

        // Set the DataContext of the ribbon to the editor
        // This allows the ribbon to interact with the editor (binding commands)
        richTextRibbon.DataContext = richTextBoxAdv;

        // Position the ribbon in the first row
        Grid.SetRow(richTextRibbon, 0);

        // Position the editor in the second row
        Grid.SetRow(richTextBoxAdv, 1);

        // Add controls to the grid
        rootGrid.Children.Add(richTextRibbon);
        rootGrid.Children.Add(richTextBoxAdv);

        // Set the constructed grid as the content of the UserControl
        this.Content = rootGrid;
    }
}

{% endhighlight %}
{% endtabs %}
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from GitHub <<Create sample and add link>>.

Upon execution, the SfRichTextBoxAdv control along with the SfRichTextRibbon is displayed as illustrated below.

![WPF SfRichTextBoxAdv Control along with its SfRichTextRibbon](Getting-Started_images/wpf-sfrichtextboxadv-with-sfrichtextribbon.png)


## Use SfRichTextBoxAdv as a standard RichTextBox

This section discusses about how to use the SfRichTextBoxAdv control as a standard RichTextBox control with rich text formatting options.

{% tabs %}
{% highlight xaml %}
<Window x:Class="Sample.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"  
       xmlns:RichTextBoxAdv="clr-namespace:Syncfusion.Windows.Controls.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.Wpf">
    
    
    <Window.Resources>
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
    </Window.Resources>


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
                    <Button Command="RichTextBoxAdv:SfRichTextBoxAdv.UndoCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" Focusable="False">
                        <Image Source="/Images/Undo.png" Height="40" Width="40" />
                    </Button>
                    <Button Command="RichTextBoxAdv:SfRichTextBoxAdv.RedoCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" Focusable="False">
                        <Image Source="/Images/Redo.png" Height="40" Width="40" />
                    </Button>
                </StackPanel>
                <!-- UI option to perform Clipboard operations using command binding -->
                <Border Width="2" Height="46" Background="#1F1F1F"/>
                <StackPanel Orientation="Horizontal">
                    <Button Command="RichTextBoxAdv:SfRichTextBoxAdv.CutCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" Focusable="False">
                        <Image Source="/Images/Cut.png" Height="40" Width="40" />
                    </Button>
                    <Button Command="RichTextBoxAdv:SfRichTextBoxAdv.CopyCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" Focusable="False">
                        <Image Source="/Images/Copy.png" Height="40" Width="40" />
                    </Button>
                    <Button Command="RichTextBoxAdv:SfRichTextBoxAdv.PasteCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" Focusable="False">
                        <Image Source="/Images/Paste.png" Height="40" Width="40" />
                    </Button>
                </StackPanel>
                <!-- UI option to apply character formatting using property binding -->
                <Border Width="2" Height="46" Background="#1F1F1F"/>
                <StackPanel Orientation="Horizontal">
                    <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Bold}" Focusable="False">
                        <Image Source="/Images/Bold.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Italic}" Focusable="False">
                        <Image Source="/Images/Italic.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.CharacterFormat.Underline, Converter={StaticResource UnderlineToggleConverter}}" Focusable="False">
                        <Image Source="/Images/Underline.png" Height="40" Width="40" />
                    </ToggleButton>
                </StackPanel>
                <Border Width="2" Height="46" Background="#1F1F1F"/>
                <!-- UI option to apply paragraph formatting using property binding -->
                <StackPanel Orientation="Horizontal">
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource LeftAlignmentToggleConverter}}" Focusable="False">
                        <Image Source="/Images/Left.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource CenterAlignmentToggleConverter}}" Focusable="False">
                        <Image Source="/Images/Center.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource RightAlignmentToggleConverter}}" Focusable="False">
                        <Image Source="/Images/Right.png" Height="40" Width="40" />
                    </ToggleButton>
                    <ToggleButton IsChecked="{Binding Selection.ParagraphFormat.TextAlignment, Converter={StaticResource JustifyAlignmentToggleConverter}}" Focusable="False">
                        <Image Source="/Images/Justify.png" Height="40" Width="40" />
                    </ToggleButton>
                </StackPanel>
            </StackPanel>
        </Grid>
        <RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" Grid.Row="1"  />
    </Grid>

</Window>

{% endhighlight %}

{% endtabs %}

You can download a standard RichTextBox example from [GitHub](https://github.com/SyncfusionExamples/WPF-RichTextBox-Examples/tree/main/Samples/Standard%20RichTextBox).

When the application is executed, the standard RichTextBox control is displayed as illustrated below.
![WPF Standard RichTextBox](Getting-Started_images/wpf-standard-sfrichtextboxadv.png)

## Theme

SfRichTextBoxAdv supports various built-in themes. Refer to the below links to apply themes for the SfRichTextBoxAdv,

  * [Apply theme using SfSkinManager](https://help.syncfusion.com/wpf/themes/skin-manager)
	
  * [Create a custom theme using ThemeStudio](https://help.syncfusion.com/wpf/themes/theme-studio#creating-custom-theme)

![Applying Theme to WPF RichTextBox](Getting-Started_images/wpf-richtextbox-theme.png)

N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/wpf-controls/richtextbox) feature tour page for its groundbreaking feature representations.You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to knows how to render and configure the editing tools.