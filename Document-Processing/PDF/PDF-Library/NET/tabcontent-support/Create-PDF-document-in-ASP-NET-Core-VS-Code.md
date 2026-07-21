**Prerequisites:**

* .NET SDK (version 8.0 or later) — [Download](https://dotnet.microsoft.com/en-us/download).
* Visual Studio Code — [Download](https://code.visualstudio.com/download?_exp_download).
* [C# extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) installed from the Extensions view (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>).

Step 1: Open the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>) and run the following command to create a C# ASP.NET Core Web Application project.

```
dotnet new mvc -n CreatePdfASPNETCoreAPP
```

Step 2: Navigate to the project directory using the following command.

```
cd CreatePdfASPNETCoreAPP
```

Step 3: Use the following command in the terminal to add the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) package to your project.

```
dotnet add package Syncfusion.Pdf.Net.Core
```
N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: A default controller named **HomeController.cs** is added on creation of the ASP.NET Core project. Include the following namespaces in that file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

{% endhighlight %}
{% endtabs %}

Step 5: A default action method named **Index** is present in **HomeController.cs**. Open **Views/Home/Index.cshtml** and add a new button as shown below.

{% tabs %}
{% highlight CSHTML %}

@{Html.BeginForm("CreateDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Create PDF Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 6: Add a new action method named `CreateDocument` in **HomeController.cs** and include the following code to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. Then use the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw the text on the PDF page.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public IActionResult CreateDocument()
{
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
    //Save the PDF to the MemoryStream.
    MemoryStream stream = new MemoryStream();
    document.Save(stream);
    //Close the document.
    document.Close(true);
    //Set the position to '0'.
    stream.Position = 0;
    //Download the PDF document in the browser.
    FileStreamResult fileStreamResult = new FileStreamResult(stream, "application/pdf");
    fileStreamResult.FileDownloadName = "Sample.pdf";
    return fileStreamResult;
}

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Run the following command in the terminal:

```
dotnet build
```

Step 8: Run the project.

Run the following command in the terminal:

```
dotnet run
```