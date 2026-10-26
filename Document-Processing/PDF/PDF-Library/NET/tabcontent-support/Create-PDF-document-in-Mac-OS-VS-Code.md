**Prerequisites:**

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [C# extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) (search for `C#` in the **Extensions** view (<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>) and install the official Microsoft extension)
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available)

Step 1: Open the integrated terminal (`Cmd+`` ) from the parent directory where you want the project to be created, and run the following command to create a new .NET console application. Replace `CreatePdfMacOSApp` with your desired project name.

```
dotnet new console -n CreatePdfMacOSApp
```

N> Use `dotnet new console -f net8.0 -n CreatePdfMacOSApp` to explicitly target a specific .NET version (for example, .NET 8.0).

Step 2: Navigate to the project directory using the following command.

```
cd CreatePdfMacOSApp
```

Step 3: Use the following command in the terminal to add the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) package as a reference to your project.

```
dotnet add package Syncfusion.Pdf.Net.Core
```

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

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

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code sample to the *Program.cs* file to **create a PDF document in a .NET application on macOS**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new PDF document.
PdfDocument document = new PdfDocument();
// Set the page size.
document.PageSettings.Size = PdfPageSize.A4;
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from the disk.
FileStream imageStream = new FileStream("AdventureCycle.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Draw an image.
graphics.DrawImage(image, new RectangleF(130,0, 250, 100));

//Draw header text.
graphics.DrawString("Adventure Works Cycles", new PdfStandardFont(PdfFontFamily.TimesRoman, 20, PdfFontStyle.Bold), PdfBrushes.Gray, new PointF(150, 150));

//Add paragraph.
string text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.";
//Create a text element with the text and font.
PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 12));
//Draw the text in the first column.
textElement.Draw(page, new RectangleF(0, 200, page.GetClientSize().Width, page.GetClientSize().Height));

//Create a PdfGrid.
PdfGrid pdfGrid = new PdfGrid();
//Add values to the list.
List<object> data = new List<object>();
Object row1 = new { Product_ID = "1001", Product_Name = "Bicycle", Price = "10,000" };
Object row2 = new { Product_ID = "1002", Product_Name = "Head Light", Price = "3,000" };
Object row3 = new { Product_ID = "1003", Product_Name = "Break wire", Price = "1,500" };
data.Add(row1);
data.Add(row2);
data.Add(row3);
//Add list to IEnumerable.
IEnumerable<object> dataTable = data;
//Assign data source.
pdfGrid.DataSource = dataTable;
//Apply built-in table style.
pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);
//Draw the grid to the page of PDF document.
pdfGrid.Draw(graphics, new RectangleF(0, 300, page.Size.Width - 80, 0));

//Create file stream.
using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
{
    //Save the PDF document to file stream.
    document.Save(outputFileStream);
    //Close the document.
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 7: Add the **AdventureCycle.jpg** image to the project root (alongside *Program.cs*) so the program can locate it at runtime.

Step 8: Open the project folder in Visual Studio Code by running the following command in the terminal.

```
code .
```

Step 9: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 10: Run the project.

Run the following command in terminal to run the project.

```
dotnet run
```
