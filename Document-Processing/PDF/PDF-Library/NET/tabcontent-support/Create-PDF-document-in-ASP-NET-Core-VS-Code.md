**Prerequisites:**

* .NET SDK (version 8.0 or later) — [Download](https://dotnet.microsoft.com/en-us/download).
* Visual Studio Code — [Download](https://code.visualstudio.com/download?_exp_download).
* [C# extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) installed from the Extensions view (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>).

Step 1: Open the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>) and run the following command to create a C# ASP.NET Core Web Application project targeting .NET 8.0.

```
dotnet new mvc -n CreatePdfASPNETCoreAPP -f net8.0
```

Step 2: Navigate to the project directory and open it in VS Code.

```
cd CreatePdfASPNETCoreAPP
```

Step 3: Add the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) NuGet package to your project.

```
dotnet add package Syncfusion.Pdf.Net.Core
```

Step 4: Register the Syncfusion license key. A trial watermark is added to every page of the generated PDF until a valid key is registered. Include the license key in **Program.cs** before initializing any Syncfusion component:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

var builder = WebApplication.CreateBuilder(args);
// Register the Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the key from your Syncfusion account. If you do not have one, request a free 30-day trial at [https://www.syncfusion.com/sales/communitylicense](https://www.syncfusion.com/sales/communitylicense). For security, store the key in `appsettings.json` or in User Secrets rather than hardcoding it. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion license key in your application.

Step 5: A default controller named **HomeController.cs** is added on creation of the ASP.NET Core project. Include the following namespaces in that file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;
using Microsoft.AspNetCore.Mvc;

{% endhighlight %}
{% endtabs %}

Step 6: A default action method named **Index** is present in **HomeController.cs**. Open **Views/Home/Index.cshtml** and add a new button as shown below.

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

Step 7: Add a new action method named `CreateDocument` in **HomeController.cs** and include the following code to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. Then use the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw the text on the PDF page.

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
    //Close the document. Pass true to dispose internal resources.
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

Step 8: Build the project by running the following command:

```
dotnet build
```

Step 9: Run the project:

```
dotnet run
```

Step 10: Open a browser, navigate to the URL shown in the terminal output (typically `https://localhost:7xxx`), and click **Create PDF Document** to download `Sample.pdf`.