**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio: Download and install Visual Studio from the [official website](https://visualstudio.microsoft.com/downloads/).



Step 1: Create a new C# ASP.NET Core Web Application project.
   ![Create ASP.NET Core Web application in Visual Studio](ASP.Net.Core_images/Creation.png)

Step 2: In configuration windows, name your project and click Next.
   ![Select Web Application pattern](ASP.Net.Core_images/TableExtractor.png)


Step 3: Install the [Syncfusion.SmartTableExtractor.Net.Core](https://www.nuget.org/packages/Syncfusion.SmartTableExtractor.Net.Core/) package as reference to your ASP.NET Core applications from [NuGet.org](https://www.nuget.org/).
   ![Install SmartTableExtractor .NET Core NuGet package](ASP.Net.Core_images/TableExtractor1.png)

Step 4: A default controller with name HomeController.cs gets added on creation of ASP.NET Core project. Include the following namespaces in that HomeController.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartTableExtractor;
using System.Diagnostics;
using System.Text;

{% endhighlight %}

Step 5: A default action method named Index will be present in HomeController.cs. Right click on Index method and select Go To View where you will be directed to its associated view page Index.cshtml. Add a new button in the Index.cshtml as shown below.

{% highlight c# tabtitle="C#" %}

@using (Html.BeginForm("ExtractTables", "Home", FormMethod.Get))
{
    <div>
        <input type="submit" value="Extract Table Data" style="width:200px;height:27px" />
    </div>
}

{% endhighlight %}

Step 6:  Add a new action method named ExtractTableAsJson in HomeController.cs and include the below code example to extract table data as JSON using the TableExtractor class. Then use the Extract method of the TableExtractor object to process the input and export the results in JSON format.

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

Step 7: Build the project.
   Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 8: Run the project.
   Click the Start button (green arrow) or press F5 to run the app.
