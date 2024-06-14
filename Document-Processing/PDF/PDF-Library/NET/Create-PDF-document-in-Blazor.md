---
title: Create or Generate PDF file in Blazor | Syncfusion
description: Learn how to create or generate a PDF file in Blazor applications with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create or Generate PDF file in Blazor

The Syncfusion [Blazor PDF library](https://www.syncfusion.com/document-processing/pdf-framework/blazor/pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, forms, and secure PDF files.

To include the Syncfusion Blazor PDF library into your Blazor application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

To quickly get started with creating a PDF document in Blazor, check this video:
{% youtube "https://www.youtube.com/watch?v=B5BOBwus0Jc&t=2s" %}

## Steps to create PDF document in Blazor Server-Side application

Step 1: Create a new C# Blazor server-side application project. Select Blazor App from the template and click the Next button.
![Blazor sample creation](Create-PDF-Blazor/Blazor_project_creation.png)

Step 2: Now, the project configuration window appears. Click Create button to create a new project with the default project configuration.
![Blazor project configuration window](Create-PDF-Blazor/Blazor_configuration_window.png)

Step 3: Choose Blazor Server App from the dashboard and click Create button to create a new Blazor server-side application.
![Blazor Server side application](Create-PDF-Blazor/Select_server_app.png)

Step 4: Install the [Syncfusion.PDF.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) NuGet package as a reference to your Blazor application from [NuGet.org](https://www.nuget.org).
![Blazor NuGet installation](Create-PDF-Blazor/Blazor_server_NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 5: Create a new cs file named  ``ExportService`` under ``Data`` folder and include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

Step 6: The [PdfDocument](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created. The [PdfTextElement](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 

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

Step 6: Inject ``ExportService`` in-to ``FetchData.razor`` using the following code.

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

Step 7: Create a class file with  ``FileUtil`` name and add the following code to invoke the JavaScript action to download the file in the browser.

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

Step 8: Add the following JavaScript function in the  ``_Host.cshtml`` available under the ``Pages`` folder.

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/ServerSideApplication).

By executing the program, you will get the following output in the browser.
![Blazor server side browser window](Create-PDF-Blazor/Blazor_browser_output.png)

Click the Export to PDF button, and you will get the PDF document with the following output.
![Blazor server side output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)

N> It is recommended to use Blazor Server-Side application to reduce the pay back load which is high in Blazor Client-Side.

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/blazor) to explore the rich set of Syncfusion PDF library features.

An online sample link to [create PDF document](https://blazor.syncfusion.com/demos/pdf/hello-world?theme=fluent) in Blazor. 

## Steps to create PDF document in Blazor client-side application:

Step 1: Create a new C# Blazor client-side application project. Select Blazor App from the template and click the Next button.
![Blazor client project creation step1](Create-PDF-Blazor/Blazor_project_creation.png)

Step 2: Now, the project configuration window appears. Click Create button to create a new project with the default project configuration.
![Blazor client configuration window](Create-PDF-Blazor/Blazor_configuration_window.png)

Step 3: Blazor WebAssembly App from the dashboard and click Create button to create a new Blazor client-side application. 
![Select Blazor WASM app](Create-PDF-Blazor/Blazor_Client_Template.png)

Step 4: Install the [Syncfusion.PDF.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) NuGet package as a reference to your Blazor application from [NuGet.org](https://www.nuget.org).
![Blazor WASM NuGet package installation](Create-PDF-Blazor/Blazor_server_NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 5: Next, include the following namespaces in that  ``FetchData.razor`` file.

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

Step 6: Create a button in the ``FetchData.razor`` using the following code.

{% tabs %}
{% highlight CSHTML %}
<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>
{% endhighlight %}
{% endtabs %}

Step 7: Define the ``@ExportToPdf`` click function on ``FetchData.razor`` file.

The [PdfDocument](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created and add a [PdfPage](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPage.html) to it. The [PdfTextElement](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 
 
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

Step 7: Create a class file with ``FileUtil`` name and add the following code to invoke the JavaScript action to download the file in the browser.

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

Step 8: Add the following JavaScript function in the ``index.html`` available under the ``wwwroot`` folder.

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/ClientSideApplication).

By executing the program, you will get the following output in the browser.
![Blazor client browser window](Create-PDF-Blazor/Blazor_Client_WebResult.png)

Click the Export to PDF button and you will get the PDF document with the following output.
![Blazor getting started output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)    

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/blazor) to explore the rich set of Syncfusion PDF library features.

An online sample link to [create PDF document](https://blazor.syncfusion.com/demos/pdf/hello-world?theme=fluent) in Blazor. 

## Steps to create PDF documents in .NET MAUI Blazor application

Step 1: Create a new C# .NET MAUI Blazor application project.![Blazor client project creation step1](Create-PDF-Blazor/Blazor_project_creation.png)

Step 2: Now, the project configuration window appears. Click Create button to create a new project with the default project configuration.
![Blazor client configuration window](Create-PDF-Blazor/Maui_Blazor_configuration_window.png)


Step 3: Install the [Syncfusion.PDF.Net.Core](https://www.nuget.org/packages/Syncfusion.pdf.Net.Core) NuGet package as a reference to your Blazor application from [NuGet.org](https://www.nuget.org).
![Blazor WASM NuGet package installation](Create-PDF-Blazor/Blazor_server_NuGet.png)

Step 4: Next, include the following namespaces in that  ``_Imports.razor`` file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@using Syncfusion.Pdf
@using Syncfusion.Pdf.Grid;
@using Syncfusion.Drawing;
@using Syncfusion.Pdf.Graphics;
@inject Microsoft.JSInterop.IJSRuntime JS
@using System.IO;
@using MAUIBlazorapplicationSample.Services;

{% endhighlight %}
{% endtabs %}

Step 5: Create a button in the ``Weather.razor`` using the following code.

{% tabs %}
{% highlight CSHTML %}
<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>
{% endhighlight %}
{% endtabs %}

Step 6: Define the ``@ExportToPdf`` click function on ``Weather.razor`` file.

The [PdfDocument](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created and add a [PdfPage](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPage.html) to it. The [PdfTextElement](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 
 
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

### Save the PDF Document on Different Platforms

Now, we need to implement platform-specific code to save the PDF document.

#### Andriod
 Include the following code example in ``SaveAndroid.cs`` class to save the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    public partial void SaveAndView(string filename, string contentType, MemoryStream stream)
    {
        var fileUri = saveToGallery(stream);
        var intent = new Intent(Intent.ActionView);
        intent.SetDataAndType(fileUri,"application/pdf");
        intent.AddFlags(ActivityFlags.GrantReadUriPermission);
        intent.AddFlags(ActivityFlags.NoHistory);
        intent.AddFlags(ActivityFlags.NewTask);
        Android.App.Application.Context.StartActivity(intent);
    }
    public Android.Net.Uri saveToGallery(MemoryStream root)
    {
        Android.Net.Uri contentCollection = null;
        ContentResolver resolver = Android.App.Application.Context.ContentResolver;

        if (Build.VERSION.SdkInt >= Android.OS.BuildVersionCodes.Q)
        {
            contentCollection = MediaStore.Downloads.GetContentUri(MediaStore.VolumeExternalPrimary);
        }
        else
        {
            contentCollection = MediaStore.Downloads.ExternalContentUri;
        }

        ContentValues valuesmedia = new ContentValues();
        valuesmedia.Put(MediaStore.MediaColumns.DisplayName, "Output.pdf");
        valuesmedia.Put(MediaStore.MediaColumns.MimeType, "application/pdf");
        valuesmedia.Put(MediaStore.MediaColumns.RelativePath, Environment.DirectoryDownloads);

        Android.Net.Uri savedPdfUri = resolver.Insert(contentCollection, valuesmedia);
        try
        {
            Stream outdata = resolver.OpenOutputStream(savedPdfUri);
            outdata.Write(root.ToArray());

            valuesmedia.Clear();
            Toast.MakeText(Android.App.Application.Context, "Pdf saved to Downloads", ToastLength.Short).Show();
        }
        catch (Exception exception)
        {
            Toast.MakeText(Android.App.Application.Context, "Pdf not saved to Downloads", ToastLength.Short).Show();
        }
        return savedPdfUri;
    }

{% endhighlight %}
{% endtabs %}

#### IOS
 Include the following code example in ``SaveIOS.cs`` class to save the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    public partial void SaveAndView(string filename, string contentType, MemoryStream stream)
    {
        string exception = string.Empty;
        string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
        string filePath = Path.Combine(path, filename);
        try
        {
            FileStream fileStream = File.Open(filePath, FileMode.Create);
            stream.Position = 0;
            stream.CopyTo(fileStream);
            fileStream.Flush();
            fileStream.Close();
        }
        catch (Exception e)
        {
            exception = e.ToString();
        }
        if (contentType != "application/html" || exception == string.Empty)
        {
            UIViewController? currentController = UIApplication.SharedApplication!.KeyWindow!.RootViewController;
            while (currentController!.PresentedViewController != null)
                currentController = currentController.PresentedViewController;

            QLPreviewController qlPreview = new();
            QLPreviewItem item = new QLPreviewItemBundle(filename, filePath);
            qlPreview.DataSource = new PreviewControllerDS(item);
            currentController.PresentViewController((UIViewController)qlPreview, true, null);
        }
    }

{% endhighlight %}
{% endtabs %}

#### windows
 Include the following code example in ``SaveWindows.cs`` class to save the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    public async partial void SaveAndView(string filename, string contentType, MemoryStream stream)
    {
        StorageFile stFile;
        string extension = Path.GetExtension(filename);
        //Gets process windows handle to open the dialog in application process. 
        IntPtr windowHandle = System.Diagnostics.Process.GetCurrentProcess().MainWindowHandle;
        if (!Windows.Foundation.Metadata.ApiInformation.IsTypePresent("Windows.Phone.UI.Input.HardwareButtons"))
        {
            //Creates file save picker to save a file. 
            FileSavePicker savePicker = new();
            if (extension == ".xlsx")
            {
                savePicker.DefaultFileExtension = ".xlsx";
                savePicker.SuggestedFileName = filename;
                //Saves the file as xlsx file.
                savePicker.FileTypeChoices.Add("XLSX", new List<string>() { ".xlsx" });
            }
            if (extension == ".docx")
            {
                savePicker.DefaultFileExtension = ".docx";
                savePicker.SuggestedFileName = filename;
                //Saves the file as Docx file.
                savePicker.FileTypeChoices.Add("DOCX", new List<string>() { ".docx" });
            }
            else if (extension == ".doc")
            {
                savePicker.DefaultFileExtension = ".doc";
                savePicker.SuggestedFileName = filename;
                //Saves the file as Doc file.
                savePicker.FileTypeChoices.Add("DOC", new List<string>() { ".doc" });
            }
            else if (extension == ".rtf")
            {
                savePicker.DefaultFileExtension = ".rtf";
                savePicker.SuggestedFileName = filename;
                //Saves the file as Rtf file.
                savePicker.FileTypeChoices.Add("RTF", new List<string>() { ".rtf" });
            }
            else if (extension == ".pdf")
            {
                savePicker.DefaultFileExtension = ".pdf";
                savePicker.SuggestedFileName = filename;
                //Saves the file as Pdf file.
                savePicker.FileTypeChoices.Add("PDF", new List<string>() { ".pdf" });
            }
            else if (extension == ".pptx")
            {
                savePicker.DefaultFileExtension = ".pptx";
                savePicker.SuggestedFileName = filename;
                //Saves the file as pptx file.
                savePicker.FileTypeChoices.Add("PPTX", new List<string>() { ".pptx" });
            }
            else if (extension == ".png")
            {
                savePicker.DefaultFileExtension = ".png";
                savePicker.SuggestedFileName = filename;
                //Saves the file as png file.
                savePicker.FileTypeChoices.Add("PNG", new List<string>() { ".png" });
            }

            WinRT.Interop.InitializeWithWindow.Initialize(savePicker, windowHandle);
            stFile = await savePicker.PickSaveFileAsync();
        }
        else
        {
            StorageFolder local = ApplicationData.Current.LocalFolder;
            stFile = await local.CreateFileAsync(filename, CreationCollisionOption.ReplaceExisting);
        }
        if (stFile != null)
        {
            using (IRandomAccessStream zipStream = await stFile.OpenAsync(FileAccessMode.ReadWrite))
            {
                //Writes compressed data from memory to file.
                using Stream outstream = zipStream.AsStreamForWrite();
                outstream.SetLength(0);
                //Saves the stream as file.
                byte[] buffer = stream.ToArray();
                outstream.Write(buffer, 0, buffer.Length);
                outstream.Flush();
            }
            //Create message dialog box. 
            MessageDialog msgDialog = new("Do you want to view the document?", "File has been created successfully");
            UICommand yesCmd = new("Yes");
            msgDialog.Commands.Add(yesCmd);
            UICommand noCmd = new("No");
            msgDialog.Commands.Add(noCmd);

            WinRT.Interop.InitializeWithWindow.Initialize(msgDialog, windowHandle);

            //Showing a dialog box. 
            IUICommand cmd = await msgDialog.ShowAsync();
            if (cmd.Label == yesCmd.Label)
            {
                //Launch the saved file. 
                await Windows.System.Launcher.LaunchFileAsync(stFile);
            }
        }
    }

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub]().

By executing the program, you will get the following output in the browser.
![Blazor client browser window](Create-PDF-Blazor/Maui_Blazor_browser_output.png)

Click the Export to PDF button and you will get the PDF document with the following output.
![Blazor getting started output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)    

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/blazor) to explore the rich set of Syncfusion PDF library features.

An online sample link to [create PDF document](https://blazor.syncfusion.com/demos/pdf/hello-world?theme=fluent) in Blazor. 
