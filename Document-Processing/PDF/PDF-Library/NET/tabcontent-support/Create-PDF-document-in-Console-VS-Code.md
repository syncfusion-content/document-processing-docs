**Prerequisites:**

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [C# extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) (search for `C#` in the **Extensions** view and install the official Microsoft extension)
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available)

Step 1: Open a new terminal in VS Code by pressing <kbd>Ctrl</kbd>+<kbd>`</kbd> and run the following command to create a new .NET console application project. Replace `CreatePdfConsoleApp` with your desired project name.

```
dotnet new console -n CreatePdfConsoleApp
```

N> Use `dotnet new console -f net8.0 -n CreatePdfConsoleApp` to explicitly target a specific .NET version (for example, .NET 8.0).

Step 2: Navigate to the newly created project directory.

```
cd CreatePdfConsoleApp
```

Step 3: Use the following command in the terminal to add the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) package as a reference to your project.

```
dotnet add package Syncfusion.Pdf.Net.Core
```

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. An evaluation watermark is added to every page of the generated PDF until a valid key is registered. Include the license key at the top of **Program.cs** before creating a `PdfDocument` instance. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion<sup>&reg;</sup> license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

// Register the Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the license key associated with your Syncfusion<sup>&reg;</sup> account. If you do not have a license key, you can request a free 30-day trial or apply for a Community License from the Syncfusion<sup>&reg;</sup> website. For more information about registering a license key in your application, refer to the [Syncfusion<sup>&reg;</sup> Licensing Documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview).

Step 5: Include the following namespaces in the *Program.cs* file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

Step 6: Replace the contents of *Program.cs* with the code below to create a PDF file using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object is used to draw text on the PDF page, and the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Save_System_String_) method persists the document to the specified file path before [Close](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Close_System_Boolean_) finalizes it.

{% tabs %}
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
//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Run the following command in the integrated terminal:

```
dotnet build
```

Confirm that the build succeeds with no errors before continuing to the next step.

Step 8: Run the project.

Run the following command in the integrated terminal to build and launch the application:

```
dotnet run
```