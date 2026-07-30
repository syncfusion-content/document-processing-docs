---
title: Loading and saving workbook in Blazor | Syncfusion
description: Explains how to load and save Excel files in Blazor applications using Syncfusion Excel(XlsIO) library.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and saving workbook in Blazor

## Prerequisites

* Visual Studio 2022 (17.0 or later) with the **ASP.NET and web development** workload installed.
* .NET 8.0 SDK or later.
* Create a Blazor Server App or Blazor WebAssembly App project.
* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package in your Blazor project.
* Register your Syncfusion<sup>&reg;</sup> license key in your project. Refer to the [licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) for details.

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/document-processing/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

## Opening an existing workbook

You can open an existing workbook by using the overloads of [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_) methods of [IWorkbooks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface. 

The code snippet for this process in Blazor Server-Side application is given below.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Open an existing workbook through the Open method of IWorkbooks
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
}
{% endhighlight %}
{% endtabs %}
The code snippet for this process in Blazor Client-Side application is given below.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Load the file into a stream
    Stream inputStream = await client.GetStreamAsync("sample-data/Sample.xlsx");

    // Open an existing workbook through the Open method of IWorkbooks
    IWorkbook workbook = application.Workbooks.Open(inputStream);
}
{% endhighlight %}
{% endtabs %}

## Saving an Excel workbook to stream

You can save the created or manipulated workbook to a stream using the overloads of the [SaveAs](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_IO_Stream_) methods.

The code snippet for this process in Blazor Server-Side application is given below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

    // To-Do: some manipulation

    // Set the version of the workbook
    workbook.Version = ExcelVersion.Xlsx;

    // Save the document as a stream and return the stream
    using (MemoryStream outputStream = new MemoryStream())
    {
        // Save the created Excel document to MemoryStream
        workbook.SaveAs(outputStream);
        outputStream.Position = 0;

        return outputStream;
    }
}
{% endhighlight %}
{% endtabs %}

The code snippet for this process in Blazor Client-Side application is given below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Load the file into a stream
    Stream inputStream = await client.GetStreamAsync("sample-data/Sample.xlsx");

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    // To-Do: some manipulation

    // Set the version of the workbook
    workbook.Version = ExcelVersion.Xlsx;

    // Save the document as a stream and return the stream
    using (MemoryStream outputStream = new MemoryStream())
    {
        // Save the created Excel document to MemoryStream
        workbook.SaveAs(outputStream);
        outputStream.Position = 0;

        return outputStream;
    }
}
{% endhighlight %}
{% endtabs %}

## Helper Code Snippets

The following helper snippets are required to stream a `MemoryStream` to the browser as a file download. Add them once per Blazor project.

**FileUtils.cs** — Create a class file named `FileUtils` (for example, under a `Helpers` folder) and add the following code to invoke the JavaScript action that downloads the file in the browser.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
public static class FileUtils
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
        => js.InvokeAsync<object>(
           "saveAsFile",
           filename,
           Convert.ToBase64String(data));
}
{% endhighlight %}
{% endtabs %}

**wwwroot/index.html** (Blazor WebAssembly) or **Pages/_Host.cshtml** (Blazor Server) — Add the following JavaScript function. The `saveAsFile` function is referenced by `FileUtils.SaveAs`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
<script type="text/javascript">
  function saveAsFile(filename, bytesBase64) {

  if (navigator.msSaveBlob)
  {
    // Download document in Edge browser
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

**Shared/NavMenu.razor** — Add the following code to register a navigation link to your Excel page.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
<li class="nav-item px-3">
  <NavLink class="nav-link" href="Excel">
    <span class="oi oi-list-rich" aria-hidden="true"></span> Create Excel
  </NavLink>
</li>
{% endhighlight %}
{% endtabs %}

Add the service to services collection in ``ConfigureServices`` method of ``Startup.cs`` file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
services.AddSingleton<ExcelService>();
{% endhighlight %}
{% endtabs %}

## See Also

* [Create, read, and edit Excel files in Blazor](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-blazor-c-sharp)
* [Assemblies Required for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [NuGet Packages for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview)
