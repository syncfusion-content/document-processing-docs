---
title: Extract Data in Console Application | Syncfusion
description: Learn how to extract data in a Console Application by using the Syncfusion Smart Data Extractor efficiently.
platform: document-processing
control: SmartDataExtractor
documentation: UG
--- 

# Extract Data from PDF in Console Application

The Syncfusion<sup>&reg;</sup> Smart Data Extractor is a .NET library used to extract structured data and document elements from PDFs and images in ASP.NET Core applications.

## Steps to Extract Data from PDF in Console App

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Extract-Data-in-Console-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Extract-Data-in-Console-VS-Code.md %}
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/Console/.NET/Extract_Data_as_JSON).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/ASPCore_Output.png)

## Extract Data from PDF using .NET Framework

The following steps illustrates Extracting Data from PDF document in console application using .NET Framework.

**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).

**Steps to Extract Data from PDF using .NET Framework**

Step 1: Create a new C# Console Application (.NET Framework) project.
![Console Application creation](GettingStarted_images/ConsoleFramework.png)

Step 2: Name the project.
![Name the application](GettingStarted_images/ConsoleFrameworkName.png)

Step 3: Install the [Syncfusion.SmartDataExtractor.WinForms](https://www.nuget.org/packages/Syncfusion.SmartDataExtractor.WinForms/) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org).
![NET Framework NuGet package](GettingStarted_images/ConsoleNuget.png)

Step 4: Include the following namespaces in the *Program.cs*.

{% highlight c# tabtitle="C#" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

{% endhighlight %}

Step 5: Include the following code sample in *Program.cs* to Extract data from an PDF file.

{% highlight c# tabtitle="C#" %}

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

Step 6: Build the project.

Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press F5 to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/Console/.NETFramework/Extract_Data).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/ASPCore_Output.png)


