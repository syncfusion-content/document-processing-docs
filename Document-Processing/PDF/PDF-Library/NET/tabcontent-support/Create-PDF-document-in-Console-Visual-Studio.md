**Prerequisites:**

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later)
* [Visual Studio](https://visualstudio.microsoft.com/downloads/) with the **.NET desktop development** workload

Step 1: Create a new C# Console Application project.
![Console sample creation](Console_images/console-sample-creation.png)

Step 2: Name the project and choose a location.
![Name the application](Console_images/Name_project_core.png)

Step 3: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org).
![NET Core NuGet package](Console_images/Nuget_package_Core.png)

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. An evaluation watermark is added to every page of the generated PDF until a valid key is registered. Include the license key at the very top of **Program.cs** before creating a `PdfDocument` instance. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion<sup>&reg;</sup> license key in your application.

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

Step 6: Include the below code snippet in *Program.cs* to create a PDF file using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object draws text on the PDF page, and the document is saved to disk through a `FileStream`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Getting%20Started/Console/.NET/Create_PDF/Create_PDF/Program.cs" %}
 
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
//Create a fileStream.
FileStream fileStream = new FileStream("Output.pdf", FileMode.CreateNew, FileAccess.ReadWrite);
//Save and close the PDF document.
document.Save(fileStream);
document.Close(true);

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>Ctrl</kbd>+<kbd>F5</kbd> to run the app. The generated `Output.pdf` will appear in the project's output directory.