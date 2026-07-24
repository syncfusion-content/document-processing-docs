**Prerequisites**:

* Install the **.NET SDK** on your machine. The latest version can be downloaded from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Set up your development environment by installing **Visual Studio** from the [official Visual Studio website](https://visualstudio.microsoft.com/downloads/).

Step 1: Create a new C# Blazor server-side application project. Select **Blazor Web App** from the template and click the Next button.
![Blazor sample creation](Create-PDF-Blazor/Blazor-web-app.png)

Step 2: In the **Interactive Render Mode section**, choose `Server` as the render mode. Then, click the `Create` button to generate a new Blazor Server-Side Application.
![Blazor server app](Create-PDF-Blazor/Blazor-Server-App.png)

Step 3: To create a PDF document in a Blazor Server app, install the [Syncfusion.PDF.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) package into your Blazor project.
![Blazor NuGet installation](Create-PDF-Blazor/Blazor_server_NuGet.png)

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. A trial watermark is added to every page of the generated PDF until a valid key is registered. Include the license key in **Program.cs** before initializing any Syncfusion<sup>&reg;</sup> component:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

var builder = WebApplication.CreateBuilder(args);
// Register the Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

var app = builder.Build();

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the license key associated with your Syncfusion<sup>&reg;</sup> account. If you do not have a license key, you can request a free 30-day trial or apply for a Community License from the Syncfusion<sup>&reg;</sup> website. For more information about registering a license key in your application, refer to the [Syncfusion<sup>&reg;</sup> Licensing Documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview).

Step 5: Create a new cs file named **ExportService.cs** under the **Data** folder and include the following namespaces and class declaration in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

Step 6: The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources.

Add the following code sample in the ``ExportService`` class which illustrates how to create a simple PDF document using ``PdfTextElement`` and ``PdfGrid``.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Export weather data to PDF document.
public static MemoryStream CreatePdf(WeatherForecast[] forecasts)
{
    if (forecasts == null)
    {
        throw new ArgumentNullException("Forecast cannot be null");
    }
    //Create a new PDF document.
    using (PdfDocument pdfDocument = new PdfDocument())
    {
        int paragraphAfterSpacing = 8;
        int cellMargin = 8;
        //Add page to the PDF document.
        PdfPage page = pdfDocument.Pages.Add();
        //Create a new font.
        PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);

        //Create a text element to draw a text in PDF page.
        PdfTextElement title = new PdfTextElement("Weather Forecast", font, PdfBrushes.Black);
        PdfLayoutResult result = title.Draw(page, new PointF(0, 0));
        PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
        PdfTextElement content = new PdfTextElement("This component demonstrates fetching data from a service and Exporting the data to PDF document using Syncfusion .NET PDF library.", contentFont, PdfBrushes.Black);
        PdfLayoutFormat format = new PdfLayoutFormat();
        format.Layout = PdfLayoutType.Paginate;
        //Draw a text to the PDF document.
        result = content.Draw(page, new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height), format);

        //Create a PdfGrid.
        PdfGrid pdfGrid = new PdfGrid();
        pdfGrid.Style.CellPadding.Left = cellMargin;
        pdfGrid.Style.CellPadding.Right = cellMargin;
        //Applying built-in style to the PDF grid.
        pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);

        //Assign data source.
        pdfGrid.DataSource = forecasts;
        pdfGrid.Style.Font = contentFont;
        //Draw PDF grid into the PDF page.
        pdfGrid.Draw(page, new Syncfusion.Drawing.PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));

        using (MemoryStream stream = new MemoryStream())
        {
            //Saving the PDF document into the stream.
            pdfDocument.Save(stream);
            //Closing the PDF document.
            pdfDocument.Close(true);
            return stream;                
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 7: Register your service in the ``Program.cs`` class as follows.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using BlazorServerApp.Data;

// ...

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>();
builder.Services.AddSingleton<ExportService>();

{% endhighlight %}
{% endtabs %}

Step 8: Inject ``ExportService`` into ``Weather.razor`` using the following code.

{% tabs %}
{% highlight CSHTML %}

@inject ExportService ExportService
@inject Microsoft.JSInterop.IJSRuntime JS
@using  System.IO

{% endhighlight %}
{% endtabs %}

Create a button in the ``Weather.razor`` using the following code.

{% tabs %}
{% highlight CSHTML %}
<button class="btn btn-primary" @onclick="@ExportToPdf">Export PDF</button>
{% endhighlight %}
{% endtabs %}

Add the ``ExportToPdf`` method in the ``Weather.razor`` page to call the export service.

{% tabs %}
{% highlight c# tabtitle="C#" %}
@functions
{
    protected async Task ExportToPdf()
    {
        using (MemoryStream pdfStream = ExportService.CreatePdf(forecasts))
        {
            await JS.SaveAs("Sample.pdf", pdfStream.ToArray());
        }
    }
}
{% endhighlight %}
{% endtabs %}

Step 9: Include the ``FileUtil`` class within the ``ExportService.cs`` file to enable file-related operations as part of the export functionality.

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

Step 10: Add the following JavaScript function in the ``App.razor`` file available under the ``Components`` folder.

{% tabs %}
{% highlight HTML %}

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

Step 11: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 12: Run the project.

Click the Start button (green arrow) or press F5 to run the app.