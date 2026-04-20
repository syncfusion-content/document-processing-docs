---
title: Extract Data in WPF Application | Syncfusion
description: Learn how to extract data in a WPF application with easy steps using the Syncfusion Smart Data Extractor library.
platform: document-processing
control: Smart Data Extractor
documentation: UG
keywords: Assemblies

---

# Extract Data from PDF in WPF Application

The Syncfusion<sup>&reg;</sup> Smart Data Extractor is a .NET library used to extract structured data and document elements from PDFs and images in ASP.NET Core applications.

## Steps to Extract Data from PDF document in WPF

Step 1: Create a new WPF application project.
![Create WPF sample](GettingStarted_images/CreationWPF.png)  

In project configuration window, name your project and select Create.
![WPF configuration window](GettingStarted_images/WPFDataName.png)

Step 2: Install the [Syncfusion.SmartDataExtractor.WPF](https://www.nuget.org/packages/Syncfusion.SmartDataExtractor.WPF) NuGet package as a reference to your WPF application [NuGet.org](https://www.nuget.org/).
![NuGet package installation](GettingStarted_images/WPFDataNuget.png)


Step 3: Include the following namespaces in the MainWindow.xaml.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartDataExtractor;
using System;
using System.IO;
using System.Text;
using System.Windows;

{% endhighlight %}

Step 4: Add a new button in MainWindow.xaml to Extract data from PDF document as follows.

{% highlight c# tabtitle="C#" %}

	<Grid>
		<Button Content="Extract Data"
                Width="150" Height="40"
                HorizontalAlignment="Center"
                VerticalAlignment="Center"
                Click="ExtractButton_Click"/>
	</Grid>

{% endhighlight %}

Step 5: Add the following code in `btnCreate_Click` to extract data from a PDF document using the **ExtractDataAsJson**  method in the **DataExtractor** class. The extracted content will be saved as a JSON file 

{% highlight c# tabtitle="C#" %}

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    // Extract form data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    // Save the extracted JSON data into an output file (inline path).
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

By executing the program, you will get the PDF document as follows.
![Convert HTMLToPDF WPF output](GettingStarted_images/ASPCore_Output.png) 

A complete working sample can be downloaded from [Github](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/WPF/Extract_Data).
   
 Click [here](https://www.syncfusion.com/document-sdk/net-pdf-data-extraction) to explore the rich set of Syncfusion<sup>&reg;</sup>Data Extraction library features.