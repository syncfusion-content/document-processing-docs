---
title: Convert Word to PDF in WPF | Syncfusion 
description: Convert Word to PDF in WPF using .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to PDF in WPF

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Word library](https://www.syncfusion.com/document-processing/word-framework/net/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in WPF**.

## Steps to convert Word document to PDF in WPF

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install **.NET desktop development** workload with necessary .NET Framework SDK.

Step 1: Create a new WPF application project.

![Create WPF application in Visual Studio](WPF_images/Create-WPF-Project-WordtoPDF.png)

Step 2: Install the [Syncfusion.DocToPdfConverter.Wpf](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.Wpf) NuGet package as a reference to your WPF application from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.DocToPdfConverter.Wpf NuGet package](WPF_images/Nuget-Package-WordtoPDF.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in the **MainWindow.xaml.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIO;
using Syncfusion.DocToPDFConverter;
using Syncfusion.Pdf;
{% endhighlight %}

{% endtabs %}

Step 4: Add a new button in **MainWindow.xaml** to convert Word document to PDF file as follows.

{% tabs %}

{% highlight c# tabtitle="C#" %}
<Button Click="btnConvert_Click" Margin="0,0,10,12" VerticalAlignment="Bottom" Height="30" BorderBrush="LightBlue" HorizontalAlignment="Right" Width="180">
    <Button.Background>
        <LinearGradientBrush EndPoint="0.5,-0.04" StartPoint="0.5,1.04">
            <GradientStop Color="#FFD9E9F7" Offset="0"/>
            <GradientStop Color="#FFEFF8FF" Offset="1"/>
        </LinearGradientBrush>
    </Button.Background>
    <StackPanel Orientation="Horizontal" Height="23" Margin="0,0,0,-2.52" VerticalAlignment="Bottom" HorizontalAlignment="Right" Width="100">
        <Image Name="image2" Margin="2" HorizontalAlignment="Center" VerticalAlignment="Center" />
        <TextBlock Text="Convert Word to PDF" Height="15.96" Width="126" Margin="0,4,0,3" />
    </StackPanel>
</Button>
{% endhighlight %}

{% endtabs %}

Step 5: Add the following code in **btnConvert_Click** to **convert Word document to PDF** with simple text.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open an existing Word document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"../../Data/Input.docx"), FormatType.Docx))
{
    //Instantiation of DocToPDFConverter for Word to PDF conversion
    using (DocToPDFConverter converter = new DocToPDFConverter())
    {
        //Converts Word document into PDF document
        using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
        {
            //Saves the PDF document
            pdfDocument.Save(Path.GetFullPath(@"../../Sample.pdf"));
        }
    };
}

{% endhighlight %}

{% endtabs %}

Step 6: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/WPF).

By executing the program, you will get the **PDF document** as follows.

![Word to PDF in WPF](WordToPDF_images/OutputImage.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET Framework Developer Pack.

Step 1. Open JetBrains Rider and create a new WPF application project.
* Launch JetBrains Rider.
* Click **New Solution** on the welcome screen.

![Launch JetBrains Rider](WPF_images/Launch-JetBrains-Rider.png)

* In the New Solution dialog, select **Project Type** as **Desktop**.
* Enter a project name and specify the location.
* Select the target framework as **Full Framework** and choose the desired version.
* Select **Template** as **WPF Application**.
* Click create.

![Creating a new WPF application in JetBrains Rider](WPF_images/Create-WPF-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.DocToPdfConverter.Wpf](https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.Wpf/) in the search bar.
* Ensure that nuget.org is selected as the package source.
* Select the latest Syncfusion.DocToPdfConverter.Wpf NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.DocToPdfConverter.Wpf NuGet package](WPF_images/Search-Syncfusion.DocToPdfConverter.Wpf-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.DocToPdfConverter.Wpf NuGet package](WPF_images/Install-Syncfusion.DocToPdfConverter.Wpf-NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Include the following namespaces in the **MainWindow.xaml.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIO;
using Syncfusion.DocToPDFConverter;
using Syncfusion.Pdf;
{% endhighlight %}

{% endtabs %}

Step 4: Add a new button in **MainWindow.xaml** to convert Word document to PDF file as follows.

{% tabs %}

{% highlight c# tabtitle="C#" %}
<Button Click="btnConvert_Click" Margin="0,0,10,12" VerticalAlignment="Bottom" Height="30" BorderBrush="LightBlue" HorizontalAlignment="Right" Width="180">
    <Button.Background>
        <LinearGradientBrush EndPoint="0.5,-0.04" StartPoint="0.5,1.04">
            <GradientStop Color="#FFD9E9F7" Offset="0"/>
            <GradientStop Color="#FFEFF8FF" Offset="1"/>
        </LinearGradientBrush>
    </Button.Background>
    <StackPanel Orientation="Horizontal" Height="23" Margin="0,0,0,-2.52" VerticalAlignment="Bottom" HorizontalAlignment="Right" Width="100">
        <Image Name="image2" Margin="2" HorizontalAlignment="Center" VerticalAlignment="Center" />
        <TextBlock Text="Convert Word to PDF" Height="15.96" Width="126" Margin="0,4,0,3" />
    </StackPanel>
</Button>
{% endhighlight %}

{% endtabs %}

Step 5: Add the following code in **btnConvert_Click** to **convert Word document to PDF** with simple text.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open an existing Word document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"../../Data/Input.docx"), FormatType.Docx))
{
    //Instantiation of DocToPDFConverter for Word to PDF conversion
    using (DocToPDFConverter converter = new DocToPDFConverter())
    {
        //Converts Word document into PDF document
        using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
        {
            //Saves the PDF document
            pdfDocument.Save(Path.GetFullPath(@"../../Sample.pdf"));
        }
    };
}

{% endhighlight %}

{% endtabs %}

Step 6: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/WPF).

By executing the program, you will get the **PDF document** as follows.

![Word to PDF in WPF](WordToPDF_images/OutputImage.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/word-framework/net) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.

An online sample link to [convert Word document to PDF](https://ej2.syncfusion.com/aspnetcore/Word/WordToPDF#/material3) in ASP.NET Core.