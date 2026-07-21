**Prerequisites:**

* Visual Studio 2019 or later with the ASP.NET and web development workload installed.
* Install .NET 8.0 SDK or later from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).

Step 1: Create a new C# ASP.NET Core Web Application project.
* Select **ASP.NET Core Web App (Model-View-Controller)** from the template list.

![Create ASP.NET Core Web application in Visual Studio](Asp.Net.Core_images/Creation1.png)

Step 2: Name your project and click **Next**.
* In the **Additional information** window, select the target framework (for example, .NET 8.0) and click **Create**.

![Select Web Application pattern](Asp.Net.Core_images/Creation2.png)

Step 3: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) NuGet package from [NuGet.org](https://www.nuget.org/).

![Install PDF .NET Core NuGet package](Asp.Net.Core_images/Creation3.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: A default controller named **HomeController.cs** is added on creation of an ASP.NET Core MVC project. Include the following namespaces in that **HomeController.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

{% endhighlight %}
{% endtabs %}

Step 5: A default action method named **Index** is present in **HomeController.cs**. Right-click the **Index** method and select **Go To View** to open **Index.cshtml**, then add a new button as shown below.

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
Click **Build > Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>.

Step 8: Run the project.
Click the **Start** button (green arrow) or press <kbd>F5</kbd>.
