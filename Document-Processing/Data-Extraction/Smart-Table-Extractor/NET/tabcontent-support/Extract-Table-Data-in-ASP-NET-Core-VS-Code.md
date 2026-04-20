**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio Code: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).
* Install C# Extension for VS Code: Open Visual Studio Code, go to the Extensions view (Ctrl+Shift+X), and search for 'C#'. Install the official [C# extension provided by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).

Step 1: Open the terminal (Ctrl+` ) and run the following command to create a C# ASP.NET Core Web Application project.

```
dotnet new mvc -n TableDataASPNETCoreAPP
```
Step 2: Replace **TableDataASPNETCoreAPP** with your desired project name.

Step 3: Navigate to the project directory using the following command

```
cd TableDataASPNETCoreAPP
```
Step 4: Use the following command in the terminal to add the [Syncfusion.SmartTableExtractor.Net.Core ](https://www.nuget.org/packages/Syncfusion.SmartTableExtractor.Net.Core) package to your project.

```
dotnet add package Syncfusion.SmartTableExtractor.Net.Core
```

Step 5: A default controller with name HomeController.cs gets added on creation of ASP.NET Core project. Include the following namespaces in that HomeController.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartTableExtractor;
using System.Diagnostics;
using System.Text;

{% endhighlight %}

Step 6: A default action method named Index will be present in HomeController.cs. Right click on Index method and select Go To View where you will be directed to its associated view page Index.cshtml. Add a new button in the Index.cshtml as shown below.

{% highlight c# tabtitle="C#" %}

@using (Html.BeginForm("ExtractTables", "Home", FormMethod.Get))
{
    <div>
        <input type="submit" value="Extract Table Data" style="width:200px;height:27px" />
    </div>
}

{% endhighlight %}

Step 7: Add a new action method named ``ExportToJson`` in HomeController.cs and include the below code example to extract data as JSON using the DataExtractor (help.syncfusion.com in Bing) class. Then use the Extract (help.syncfusion.com in Bing) method of the DataExtractor object to process the input and export the results in JSON format.

{% highlight c# tabtitle="C#" %}

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream(Path.GetFullPath(@"Data\Input.pdf"), FileMode.Open, FileAccess.ReadWrite))
{
   // Initialize the Smart Table Extractor.
   TableExtractor extractor = new TableExtractor();
   // Extract table data from the PDF document as JSON string.
   string data = extractor.ExtractTableAsJson(stream);
   // Convert JSON string into a MemoryStream for download.
   MemoryStream outputStream = new MemoryStream(Encoding.UTF8.GetBytes(data));
   // Reset stream position.
   outputStream.Position = 0;
   // Return JSON file as download in browser.
   FileStreamResult fileStreamResult = new FileStreamResult(outputStream, "application/json");
   fileStreamResult.FileDownloadName = "Output.json";
   return fileStreamResult;
}

{% endhighlight %}

Step 8: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 9: Run the project.

Run the following command in terminal to build the project.

```
dotnet run
```