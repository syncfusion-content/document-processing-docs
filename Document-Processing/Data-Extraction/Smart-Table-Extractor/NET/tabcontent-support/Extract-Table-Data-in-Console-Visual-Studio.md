**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).

Step 1: Create a new C# Console Application project.
![Console sample creation](Console_images/ConsoleCreation.png)

Step 2: Name the project.
![Name the application](Console_images/ConsoleName.png)

Step 3: Install the [Syncfusion.SmartTableExtractor.Net.Core](https://www.nuget.org/packages/Syncfusion.SmartDataExtractor.Net.Core) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org).
![NET Core NuGet package](Console_images/ConsoleCoreNuget.png)

Step 4: Include the following namespaces in the *Program.cs* file.

{% highlight c# tabtitle="C#" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

{% endhighlight %}

Step 5: Include the below code snippet in *Program.cs* to Extract table data from an PDF file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
 
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

{% endtabs %}

Step 6: Build the project.

Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press F5 to run the app.