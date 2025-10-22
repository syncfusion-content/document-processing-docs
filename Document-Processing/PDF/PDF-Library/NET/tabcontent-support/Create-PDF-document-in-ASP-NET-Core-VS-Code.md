**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio Code: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).
* Install C# Extension for VS Code: Open Visual Studio Code, go to the Extensions view (Ctrl+Shift+X), and search for 'C#'. Install the official [C# extension provided by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).

Step 1: Open the terminal (Ctrl+` ) and run the following command to create a C# ASP.NET Core Web Application project.

```
dotnet new mvc -n CreatePdfASPNETCoreAPP
```
Step 2: Replace ****CreatePdfASPNETCoreAPP** with your desired project name.

Step 3: Navigate to the project directory using the following command

```
cd CreatePdfASPNETCoreAPP
```
Step 4: Use the following command in the terminal to add the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) package to your project.

```
dotnet add package Syncfusion.Pdf.Net.Core
```
N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: A default controller with name HomeController.cs gets added on creation of ASP.NET Core project. Include the following namespaces in that HomeController.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

{% endhighlight %}

Step 6: A default action method named Index will be present in HomeController.cs. Right click on Index method and select Go To View where you will be directed to its associated view page Index.cshtml. Add a new button in the Index.cshtml as shown below.

{% highlight c# tabtitle="C#" %}

@{Html.BeginForm("CreateDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Create PDF Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}

Step 7: Add a new action method named ``CreatePDFDocument`` in HomeController.cs file and include the below code example to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. Then use the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw the text on the PDF page.

{% highlight c# tabtitle="C#" %}

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
//Saving the PDF to the MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Set the position as '0'.
stream.Position = 0;
// Return file result
return File(stream.ToArray(), "application/pdf", "Sample.pdf");

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