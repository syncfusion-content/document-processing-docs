**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new .NET MAUI Blazor Hybrid App project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](JetBrains_Images/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Web.
* Enter a project name and specify the location.
* Choose template as **.NET MAUI Blazor Hybrid App**.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Click create.

![Creating a new .NET MAUI Blazor Hybrid APP](JetBrains_Images/Blazor-Maui-App.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.Pdf.NET](https://www.nuget.org/packages/Syncfusion.Pdf.Net) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.Pdf.NET NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.Pdf.NET package](JetBrains_Images/NET-Package.png)

* Click the Install button to complete the installation.

![Install the NuGet Package](JetBrains_Images/Install-NET-BlazorMaui-Package.png)

Step 4: Next, include the following namespaces in the ``_Imports.razor`` file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

    @using Syncfusion.Pdf;
    @using Syncfusion.Pdf.Graphics;
    @using Syncfusion.Pdf.Grid;
    @using Syncfusion.Drawing;
    @using BlazorMauiAppCreatePdfSample.Services

{% endhighlight %}

{% endtabs %}

Step 5: Create a button in the ``Weather.razor`` using the following code.

{% tabs %}

{% highlight CSHTML %}

<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>

{% endhighlight %}

{% endtabs %}

Step 6: Define the ``@ExportToPdf`` click function on ``Weather.razor`` file.

The [PdfDocument](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created and add a [PdfPage](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPage.html) to it. The [PdfTextElement](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data source.

{% tabs %}

{% highlight c# tabtitle="C#" %}

    @functions {
        void ExportToPdf()
        {
            int paragraphAfterSpacing = 8;
            int cellMargin = 8;
            //Create a new PDF document.
            PdfDocument pdfDocument = new PdfDocument();
            //Add Page to the PDF document.
            PdfPage page = pdfDocument.Pages.Add();
            //Create a new font.
            PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
            //Create a text element to draw a text in PDF page.
            PdfTextElement title = new PdfTextElement("Weather Forecast", font, PdfBrushes.Black);
            PdfLayoutResult result = title.Draw(page, new PointF(0, 0));
            PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
            //Create text element.
            PdfTextElement content = new PdfTextElement("This component demonstrates fetching data from a client side and Exporting the data to PDF document using Syncfusion .NET PDF library.", contentFont, PdfBrushes.Black);
            PdfLayoutFormat format = new PdfLayoutFormat();
            format.Layout = PdfLayoutType.Paginate;
            //Draw a text to the PDF document.
            result = content.Draw(page, new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height), format);
            //Create a PdfGrid.
            PdfGrid pdfGrid = new PdfGrid();
            pdfGrid.Style.CellPadding.Left = cellMargin;
            pdfGrid.Style.CellPadding.Right = cellMargin;
            //Applying built-in style to the PDF grid
            pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
            //Assign data source.
            pdfGrid.DataSource = forecasts;
            pdfGrid.Style.Font = contentFont;
            //Draw PDF grid into the PDF page.
            pdfGrid.Draw(page, new Syncfusion.Drawing.PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));
            using (MemoryStream ms = new MemoryStream())
            {
                // Save the PDF document to the memory stream
                pdfDocument.Save(ms);
                // Close the PDF document
                pdfDocument.Close(true);
                // Reset the memory stream position
                ms.Position = 0;
                // Create a SaveService instance
                SaveService service = new SaveService();
                // Save and view the PDF document
                service.SaveAndView("Output.pdf", "application/pdf", ms);
            }
        }

{% endhighlight %}

{% endtabs %}

Step 7: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.