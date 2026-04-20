---
title: Extract Table Data in Console Application | Syncfusion
description: Learn how to extract table data in a Console Application by using the Syncfusion Smart Table Extractor efficiently.
platform: document-processing
control: SmartTableExtractor
documentation: UG
--- 

# Extract Table Data from PDF in Console Application

The Syncfusion<sup>&reg;</sup> Smart Table Extractor is a .NET library used to detect and extract tabular data from PDFs and scanned images in ASP.NET Core applications. It provides structured outputs with confidence scores for downstream processing.

## Steps to Extract Table Data from PDF in Console App

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Extract-Table-Data-in-Console-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Extract-Table-Data-in-Console-VS-Code.md %}
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/Console/.NET/Extract_Table_Data).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/ASPCore_Output.png)

## Extract Table Data from PDF using .NET Framework

The following steps illustrates Extracting Table Data from PDF document in console application using .NET Framework.

**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).

**Steps to Extract Table Data from PDF using .NET Framework**

Step 1: Create a new C# Console Application (.NET Framework) project.
![Console Application creation](GettingStarted_images/ConsoleFramework.png)

Step 2: Name the project.
![Name the application](GettingStarted_images/ConsoleFrameworkCreation.png)

Step 3: Install the [Syncfusion.SmartTableExtractor.WinForms](https://www.nuget.org/packages/Syncfusion.SmartTableExtractor.WinForms/) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org).
![NET Framework NuGet package](GettingStarted_images/ConsoleNuget.png)

Step 4: Include the following namespaces in the *Program.cs*.

{% highlight c# tabtitle="C#" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

{% endhighlight %}

Step 5: Include the following code sample in *Program.cs* to Extract table data from an PDF file.

{% highlight c# tabtitle="C#" %}

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();
    //Extract table data from the PDF document as JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

Step 6: Build the project.

Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press F5 to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Getting-Started/Console/.NETFramework/Extract_Table_Data).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/ASPCore_Output.png)


