**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio Code: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).
* Install C# Extension for VS Code: Open Visual Studio Code, go to the Extensions view (Ctrl+Shift+X), and search for 'C#'. Install the official [C# extension provided by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).



Step 1: Open the terminal (Ctrl+` ) and run the following command to create a new Blazor Server application

   ```
   dotnet new maui-blazor -n CreatePdfBlazorMaUIApp
   ```
Step 2: Replace ****CreatePdfBlazorMaUIApp** with your desired project name.

Step 3: Navigate to the project directory using the following command

   ```
   cd CreatePdfBlazorMaUIApp
   ```
Step 4: Use the following command in the terminal to add the  [Syncfusion.PDF.NET](https://www.nuget.org/packages/Syncfusion.pdf.Net) package to your project.

   ```
   dotnet add package Syncfusion.Pdf.Net
   ```
Step 5: Next, include the following namespaces in the ``_Imports.razor`` file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

   @using Syncfusion.Pdf;
   @using Syncfusion.Pdf.Graphics;
   @using Syncfusion.Pdf.Grid;
   @using Syncfusion.Drawing;
   @using BlazorMauiAppCreatePdfSample.Services

{% endhighlight %}

{% endtabs %}

Step 6: Create a button in the ``Weather.razor`` using the following code.

{% tabs %}

{% highlight CSHTML %}

   <button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>

{% endhighlight %}

{% endtabs %}

Step 7: Define the ``@ExportToPdf`` click function on ``Weather.razor`` file.

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