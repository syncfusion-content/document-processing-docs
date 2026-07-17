**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio: Download and install Visual Studio from the [official website](https://visualstudio.microsoft.com/downloads/).

Step 1: Create a new `Blazor WebAssembly Standalone App` project.
![Blazor WASM PWA step1](Create-PDF-Blazor/Blazor-PWA-1.png)

Step 2: Enable PWA support by selecting the `Progressive Web Application` checkbox.
![Blazor WASM PWA step2](Create-PDF-Blazor/Blazor-PWA-2.png)

Step 3: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package as a reference to your Blazor application from [NuGet.org](https://www.nuget.org).
![Blazor WASM PWA NuGet package installation](Create-PDF-Blazor/Blazor-PWA-3.png)

Step 4: Create a Razor file named `FetchData.razor` in the `Pages` folder. Then, add the required namespace to the `FetchData.razor` file.

{% tabs %}
{% highlight CSHTML %}

@using Syncfusion.Pdf
@using Syncfusion.Pdf.Grid
@using Syncfusion.Drawing
@using Syncfusion.Pdf.Graphics
@inject Microsoft.JSInterop.IJSRuntime JS
@using System.IO

{% endhighlight %}
{% endtabs %}

Step 5: Create a button in the `FetchData.razor` using the following code.

{% tabs %}
{% highlight CSHTML %}

<button class="btn btn-primary" @onclick="@CreatePDF">Create PDF document</button>

{% endhighlight %}
{% endtabs %}

Step 6: Implement the `CreatePDF` method in `FetchData.razor`.

Create a new `async` method named `CreatePDF` and include the following code example to create a PDF document in the Blazor WebAssembly Standalone app with PWA support.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@functions {
   void CreatePDF()
   {
       int paragraphAfterSpacing = 8;
       int cellMargin = 8;
       // Create a new PDF document.
       PdfDocument pdfDocument = new PdfDocument();
       // Add Page to the PDF document.
       PdfPage page = pdfDocument.Pages.Add();

       // Create a new font.
       PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
       // Create a text element to draw a text in PDF page.
       PdfTextElement title = new PdfTextElement("Weather Forecast", font, PdfBrushes.Black);
       PdfLayoutResult result = title.Draw(page, new PointF(0, 0));
       PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
       // Create text element.
       PdfTextElement content = new PdfTextElement("This component demonstrates fetching data from a client side and Exporting the data to PDF document using Syncfusion .NET PDF library.", contentFont, PdfBrushes.Black);
       PdfLayoutFormat format = new PdfLayoutFormat();
       format.Layout = PdfLayoutType.Paginate;
       // Draw a text to the PDF document.
       result = content.Draw(page, new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height), format);

       // Create a PdfGrid.
       PdfGrid pdfGrid = new PdfGrid();
       pdfGrid.Style.CellPadding.Left = cellMargin;
       pdfGrid.Style.CellPadding.Right = cellMargin;
       //Applying built-in style to the PDF grid
       pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
       // Assign data source.
       pdfGrid.DataSource = forecasts;
       pdfGrid.Style.Font = contentFont;
       // Draw PDF grid into the PDF page.
       pdfGrid.Draw(page, new Syncfusion.Drawing.PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));

       // Create memory stream.
       MemoryStream memoryStream = new MemoryStream();
       // Save the PDF document.
       pdfDocument.Save(memoryStream);
       // Closes the PDF document
       pdfDocument.Close(true);
       memoryStream.Position = 0;
       // Download the PDF document
       JS.SaveAs("Sample.pdf", memoryStream.ToArray());
   }
}

{% endhighlight %}
{% endtabs %}

Step 7: Create a class file named `FileUtil.cs` and add the following code to invoke the JavaScript action to download the file in the browser.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static class FileUtil
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
       => js.InvokeAsync<object>(
           "saveAsFile",
           filename,
           Convert.ToBase64String(data));
} 

{% endhighlight %}
{% endtabs %}

Step 8: Add the following JavaScript function in the `index.html` file available under the `wwwroot` folder.

{% tabs %}
{% highlight c# tabtitle="C#" %}

<script type = "text/javascript" >
   function saveAsFile(filename, bytesBase64) {
    if (navigator.msSaveBlob)
    {
        //Download document in Edge browser
        var data = window.atob(bytesBase64);
        var bytes = new Uint8Array(data.length);
        for (var i = 0; i < data.length; i++)
        {
            bytes[i] = data.charCodeAt(i);
        }
        var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
        navigator.msSaveBlob(blob, filename);
    }
    else
    {
        var link = document.createElement('a');
        link.download = filename;
        link.href = "data:application/octet-stream;base64," + bytesBase64;
        document.body.appendChild(link); // Needed for Firefox
        link.click();
        document.body.removeChild(link);
    }
}
</script>

{% endhighlight %}
{% endtabs %}

Step 9: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 10: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.