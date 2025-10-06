**Prerequisites**:

*   **Install .NET SDK**: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
*   **Install Visual Studio**: Download and install Visual Studio 2022 from the [official Visual Studio website](https://visualstudio.microsoft.com/downloads/).

Step 1: Create a new C# Blazor client-side application project. Select `Blazor Web App` from the template and click the Next button.
![Blazor client project creation step1](Create-PDF-Blazor/Blazor-web-app.png)

Step 2: In the **Interactive Render Mode section**, choose `WebAssembly` as the render mode. Then, click the `Create` button to generate a new Blazor client-Side Application.
![Select Blazor WASM app](Create-PDF-Blazor/Blazor-Web-Assembly.png)

Step 3: Install the [Syncfusion.PDF.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) NuGet package as a reference in the Blazor application from [NuGet.org](https://www.nuget.org).
![Blazor WASM NuGet package installation](Create-PDF-Blazor/Blazor_server_NuGet.png)

N> Starting with v16.2.0.x, if referencing Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, add "Syncfusion.Licensing" assembly reference and include a license key in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering Syncfusion<sup>&reg;</sup> license key in applications to use the components.

Step 4: Include necessary namespaces in `FetchData.razor` file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@using Syncfusion.Pdf
@using Syncfusion.Pdf.Grid;
@using Syncfusion.Drawing;
@using Syncfusion.Pdf.Graphics;
@inject Microsoft.JSInterop.IJSRuntime JS
@using System.IO;

{% endhighlight %}
{% endtabs %}

Step 5: Create a button in `FetchData.razor` using the following code.

{% tabs %}
{% highlight CSHTML %}
<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>
{% endhighlight %}
{% endtabs %}

Step 6: Define the `@ExportToPdf` click function on `FetchData.razor` file.

The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created and add a [PdfPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html) to it. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 
 
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

//Create memory stream. 
MemoryStream memoryStream = new MemoryStream();
//Save the PDF document.
pdfDocument.Save(memoryStream);
//Download the PDF document
JS.SaveAs("Sample.pdf", memoryStream.ToArray());
}
}

{% endhighlight %}
{% endtabs %}

Step 7: Create a class file named `FileUtil`, and add the following code to invoke a JavaScript action that downloads the file in the browser.

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

Step 8: Add the following JavaScript function to the `index.html` file located in the `wwwroot` folder.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
            if (navigator.msSaveBlob) {
                //Download document in Edge browser
                var data = window.atob(bytesBase64);
                var bytes = new Uint8Array(data.length);
                for (var i = 0; i < data.length; i++) {
                    bytes[i] = data.charCodeAt(i);
                }
                var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
                navigator.msSaveBlob(blob, filename);
            }
            else {
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

To build the project, go to the `Build` menu and select `Build Solution`, or simply press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>.

Step 10: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the application.