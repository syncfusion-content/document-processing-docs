**Prerequires**:

Step 1: Install .NET SDK: 
* Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
Step 2: Install Visual Studio: 
* Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download).

**Steps to create PDF document in Blazor Server application**

Step 1: Create a new C# Blazor server-side application project. Select Blazor App from the template and click the Next button.
![Blazor sample creation](Create-PDF-Blazor/Blazor_project_creation.png)

Step 2: Now, the project configuration window appears. Click Create button to create a new project with the default project configuration.
![Blazor project configuration window](Create-PDF-Blazor/Blazor_configuration_window.png)

Step 3: Choose Blazor Server App from the dashboard and click Create button to create a new Blazor server-side application.
![Blazor Server side application](Create-PDF-Blazor/Select_server_app.png)

Step 4: Install the [Syncfusion.PDF.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) NuGet package as a reference to your Blazor application from [NuGet.org](https://www.nuget.org).
![Blazor NuGet installation](Create-PDF-Blazor/Blazor_server_NuGet.png)

Step 5: Create a new cs file named **ExportService.cs** under **Data** folder and include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

Step 6: The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 

Add the following code sample in ``ExportService`` class which illustrates how to create a simple PDF document using ``PdfTextElement`` and ``PdfGrid``. 

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
        pdfGrid.DataSource = forecasts
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

Register your service in the ``ConfigureServices`` method available in the ``Startup.cs`` class as follows.

{% tabs %}
{% highlight c# tabtitle="C#" %}
public void ConfigureServices(IServiceCollection services)
{
    services.AddRazorPages();
    services.AddServerSideBlazor();
    services.AddSingleton<WeatherForecastService>();
    services.AddSingleton<ExportService>();
}
{% endhighlight %}
{% endtabs %}

Step 7: Inject ``ExportService`` in-to ``FetchData.razor`` using the following code.

{% tabs %}
{% highlight CSHTML %}

@inject ExportToFileService exportService
@inject Microsoft.JSInterop.IJSRuntime JS
@using  System.IO;

{% endhighlight %}
{% endtabs %}

Create a button in the ``FetchData.razor`` using the following code.

{% tabs %}
{% highlight CSHTML %}
<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>
{% endhighlight %}
{% endtabs %}

Add the ``ExportToPdf`` method in ``FetchData.razor`` page to call the export service.

{% tabs %}
{% highlight c# tabtitle="C#" %}
@functions
{
    protected async Task ExportToPdf()
    {
        using (MemoryStream excelStream = ExportService.CreatePdf(forecasts))
        {
            await JS.SaveAs("Sample.pdf", excelStream.ToArray());
        }
    }
}
{% endhighlight %}
{% endtabs %}

Step 8: Create a class file with  ``FileUtil`` name and add the following code to invoke the JavaScript action to download the file in the browser.

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

Step 9: Add the following JavaScript function in the  ``_Host.cshtml`` available under the ``Pages`` folder.

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

Step 10: Build the project.

Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 11: Run the project.

Click the Start button (green arrow) or press F5 to run the app.