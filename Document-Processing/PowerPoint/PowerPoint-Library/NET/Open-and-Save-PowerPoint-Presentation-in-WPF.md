---
title: Open and save Presentation in WPF | Syncfusion
description: Open and save Presentation in WPF using Syncfusion .NET PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Open and save Presentation in WPF

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET PowerPoint library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) used to create, read, edit, and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **open and save a PowerPoint presentation in WPF**.


## Steps to open and save PowerPoint Presentation programmatically

Step 1: Create a new C# **WPF Application** project in Visual Studio.

![Create WPF project](Workingwith-WPF/Project-Open-and-Save.png)

Step 2: Install the [Syncfusion.Presentation.Wpf](https://www.nuget.org/packages/Syncfusion.Presentation.Wpf/) NuGet package as a reference to your application from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.Presentation.Wpf Nuget Package](Workingwith-WPF/Nuget-Package-Open-and-Save.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Add a new button in the **MainWindow.xaml** as shown below.

{% tabs %}
{% highlight xaml tabtitle="XAML" %}

<Window x:Class="Open_and_save_PowerPoint_presentation.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:Open_and_save_PowerPoint_presentation"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <Button x:Name="button" Content="Open and save presentation" Click="OpenAndSavePresentation" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Grid>
</Window>

{% endhighlight %}
{% endtabs %}

Step 4: Include the following namespaces in the **MainWindow.xaml.cs** file, and add the empty `OpenAndSavePresentation` click handler that the XAML references:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using System.IO;
{% endhighlight %}
{% endtabs %}

Step 5: Add the empty `OpenAndSavePresentation` click handler that the XAML references in **MainWindow.xaml.cs**

{% tabs %}
{% highlight c# tabtitle="C#" %}
public partial class MainWindow : System.Windows.Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void OpenAndSavePresentation(object sender, System.Windows.RoutedEventArgs e)
    {
        // The body is filled in the next step.
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code inside `OpenAndSavePresentation` to **open an existing PowerPoint presentation in WPF**:

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open an existing PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Template.pptx"))
{
    //Gets the first slide from the PowerPoint presentation
    ISlide slide = pptxDoc.Slides[0];
    //Gets the first shape of the slide
    IShape shape = slide.Shapes[0] as IShape;
    //Change the text of the shape
    if (shape.TextBody.Text == "Company History")
        shape.TextBody.Text = "Company Profile";

    //Save the PowerPoint presentation to the file system.
    pptxDoc.Save("Result.pptx");
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/WPF).

By executing the program, you will get the PowerPoint presentation as follows.

![WPF output PowerPoint document](Workingwith-Core/Open-and-Save-output-image.png)

Looking for the full .NET PowerPoint Library component overview, features, pricing, and documentation? Visit the  [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) page.
