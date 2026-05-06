**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio Code: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).
* Install C# Extension for VS Code: Open Visual Studio Code, go to the Extensions view (Ctrl+Shift+X), and search for 'C#'. Install the official [C# extension provided by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).



Step 1: Open the terminal (Ctrl+` ) and run the following command to create a new .NET Core console application project.

```
dotnet new console -n ExtractDataConsoleApp
```
Step 2: Replace ****ExtractDataConsoleApp** with your desired project name.

Step 3: Navigate to the project directory using the following command

```
cd ExtractDataConsoleApp
```
Step 4: Use the following command in the terminal to add the [Syncfusion.SmartDataExtractor.Net.Core](https://www.nuget.org/packages/Syncfusion.SmartDataExtractor.Net.Core) package to your project.

```
dotnet add package Syncfusion.SmartDataExtractor.Net.Core
```

Step 5: Include the following namespaces in the *Program.cs* file.

{% highlight c# tabtitle="C#" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

{% endhighlight %}

Step 6: Include the below code snippet in *Program.cs* to Extract data from an PDF file.

{% highlight c# tabtitle="C# [Cross-platform]" %}
 
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

Step 7: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 8: Run the project.

Run the following command in terminal to build the project.

```
dotnet run
```