---
title: Extract table Data in WPF Application | Syncfusion
description: Learn how to extract table data in a WPF application with easy steps using the Syncfusion Smart Table Extractor library.
platform: document-processing
control: SmartTableExtractor
documentation: UG
keywords: Assemblies

---

# Extract Table Data from PDF in WPF Application

The Syncfusion<sup>&reg;</sup> Smart Table Extractor is a .NET library used to detect and extract tabular data from PDFs and scanned images in ASP.NET Core applications. It provides structured outputs with confidence scores for downstream processing.

## Steps to Extract Data from PDF document in WPF

Step 1: Create a new WPF application project.
![Create WPF sample](GettingStarted_images/CreationWPF.png)  

In project configuration window, name your project and select Create.
![WPF configuration window](GettingStarted_images/WPFTableName.png)

Step 2: Install the [Syncfusion.SmartTableExtractor.WPF](https://www.nuget.org/packages/Syncfusion.SmartTableExtractor.WPF) NuGet package as a reference to your WPF application [NuGet.org](https://www.nuget.org/).
![NuGet package installation](GettingStarted_images/WPFTableNuget.png)


Step 3: Include the following namespaces in the MainWindow.xaml.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartTableExtractor;
using System;
using System.IO;
using System.Text;
using System.Windows;

{% endhighlight %}

Step 4: Add a new button in MainWindow.xaml to Extract data from PDF document as follows.

{% highlight c# tabtitle="C#" %}

	<Grid>
		<Button Content="Extract Table Data"
                Width="150" Height="40"
                HorizontalAlignment="Center"
                VerticalAlignment="Center"
                Click="ExtractButton_Click"/>
	</Grid>

{% endhighlight %}

Step 5: Add the following code in `btnCreate_Click` to extract table data from a PDF document using the **ExtractTableAsJson**  method in the **TableExtractor** class. The extracted content will be saved as a JSON file 

{% highlight c# tabtitle="C#" %}

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
    // Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    // Extract table data from the PDF document as JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    // Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

By executing the program, you will get the PDF document as follows.
![Convert HTMLToPDF WPF output](GettingStarted_images/ASPCore_Output.png) 

A complete working sample can be downloaded from [Github](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/WPF/Extract_Table_Data).
   
Click [here](https://www.syncfusion.com/document-sdk/net-pdf-data-extraction) to explore the rich set of Syncfusion<sup>&reg;</sup>Data Extraction library features.