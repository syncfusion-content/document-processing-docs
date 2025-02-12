**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.


Step 1: Install .NET SDK: 
* Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
Step 2: Install Visual Studio Code: 
* Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).
Step 3: Install C# Extension for VS Code:
* Open Visual Studio Code, go to the Extensions view (Ctrl+Shift+X), and search for 'C#'. Install the official [C# extension provided by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

##Steps to convert PDF document to Image in ASP.NET Core application

Step 1: Open the terminal (Ctrl+` ) and run the following command to create a new ASP.NET Core application

```
dotnet new mvc -n CreatePdfToImageConvertASPNETCoreAPP
```
Step 2: Replace ****CreatePdfToImageConvertASPNETCoreAPP** with your desired project name.

Step 3: Navigate to the project directory using the following command

```
cd CreatePdfToImageConvertASPNETCoreAPP
```
Step 4: Use the following command in the terminal to add the [Syncfusion.PdfToImageConverter.Net] (https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.Net) package to your project.

```
dotnet add package Syncfusion.PdfToImageConverter.Net
```

N> If you want to use the PdfToImageConverter in the Linux environment, you need to install the [SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1) NuGet package as reference to your applications from [NuGet.org](https://www.nuget.org/).

Step 5: A default controller with name HomeController.cs gets added on creation of ASP.NET Core project. Include the following namespaces in that HomeController.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.PdfToImageConverter;

{% endhighlight %}

Step 6: A default action method named Index will be present in HomeController.cs. Right click on Index method and select Go To View where you will be directed to its associated view page Index.cshtml. Add a new button in the Index.cshtml as shown below.

{% highlight c# tabtitle="C#" %}

@{Html.BeginForm("ExportToImage", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Convert Image" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}

Step 7: Add a new action method named ExportToImage in HomeController.cs and include the below code example to convert PDF document to Image using Convert method in PdfToImageConverter class.

{% highlight c# tabtitle="C#" %}

//Initialize PDF to Image converter.
PdfToImageConverter imageConverter = new PdfToImageConverter();
//Load the PDF document as a stream
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
imageConverter.Load(inputStream);
//Convert PDF to Image.
Stream outputStream = imageConverter.Convert(0, false, false);
MemoryStream stream = outputStream as MemoryStream;
byte[] bytes = stream.ToArray();
using (FileStream output = new FileStream("output.png", FileMode.OpenOrCreate, FileAccess.ReadWrite))
{
    output.Write(bytes, 0, bytes.Length);
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
