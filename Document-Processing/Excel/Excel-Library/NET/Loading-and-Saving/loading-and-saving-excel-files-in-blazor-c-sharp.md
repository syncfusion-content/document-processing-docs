---
layout: post
title: Loading and saving workbook in Blazor | Syncfusion
description: Explains how to load and save Excel files in Blazor applications using Syncfusion XlsIO.
platform: blazor
control: XlsIO
documentation: UG
---
# Loading and saving workbook in Blazor

The Syncfusion XlsIO library allows you to open existing Excel workbooks from a stream and save manipulated workbooks back to a stream in both Blazor Server-Side and Blazor WebAssembly (Client-Side) applications.

## Opening an existing workbook from Stream

You can open an existing workbook from a stream by using the overloads of the [`Open`](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_IO_Stream_) methods of the [`IWorkbooks`](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface.

### Blazor Server-Side Application

In a Blazor Server-Side application, you can access files directly from the server's file system or from uploaded streams.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

// Initialize IApplication
IApplication application = excelEngine.Excel;

// Load the file into a stream from the server's file system
FileStream inputStream = new FileStream("Data/Sample.xlsx", FileMode.Open, FileAccess.Read);

// Loads an existing workbook through the Open method of IWorkbooks
IWorkbook workbook = application.Workbooks.Open(inputStream);

// Close the input stream after opening the workbook
inputStream.Dispose(); // Or use a 'using' statement for automatic disposal
{% endhighlight %}
{% endtabs %}

### Blazor WebAssembly (Client-Side) Application

In a Blazor WebAssembly application, file operations typically involve fetching files via HTTP or handling user-uploaded files. For this example, we assume `HttpClient` is injected to fetch a sample file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
@using System.Net.Http
@inject HttpClient HttpClient // Ensure HttpClient is injected in your component

// Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

// Initialize IApplication
IApplication application = excelEngine.Excel;

// Load the file into a stream using HttpClient
Stream inputStream = await client.GetStreamAsync("sample-data/Sample.xlsx");

// Loads an existing workbook through the Open method of IWorkbooks
IWorkbook workbook = application.Workbooks.Open(inputStream);

// Close the input stream after opening the workbook
inputStream.Dispose(); // Or use a 'using' statement for automatic disposal
{% endhighlight %}
{% endtabs %}

## Saving an Excel workbook to stream

You can save the created or manipulated workbook to a stream using overloads of the [`SaveAs`](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_IO_Stream_) methods. After saving to a stream, you typically need to facilitate download in the browser.

### Blazor Server-Side Application

In a Blazor Server-Side application, you can save the workbook to a `MemoryStream` and then pass its content to a JavaScript interop function for client-side download.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

// Initialize IApplication
IApplication application = excelEngine.Excel;

// Load the file into a stream from the server's file system (for demonstration)
FileStream inputStream = new FileStream("Data/Sample.xlsx", FileMode.Open, FileAccess.Read);

// Loads an existing workbook through the Open method of IWorkbooks
IWorkbook workbook = application.Workbooks.Open(inputStream);


// Set the version of the workbook
workbook.Version = ExcelVersion.Xlsx;

// Save the document as a stream.
using (MemoryStream outputStream = new MemoryStream())
{
  // Save the created Excel document to MemoryStream.
  workbook.SaveAs(outputStream);
  return outputStream;
}
// Dispose the workbook and ExcelEngine
workbook.Close();
excelEngine.Dispose();
{% endhighlight %}
{% endtabs %}

### Blazor WebAssembly (Client-Side) Application

In a Blazor WebAssembly application, you save the workbook to a `MemoryStream` and use JavaScript interop for client-side download.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}


// Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

// Initialize IApplication
IApplication application = excelEngine.Excel;

// Load the file into a stream using HttpClient (for demonstration)
Stream inputStream = await client.GetStreamAsync("sample-data/Sample.xlsx");

// Loads an existing workbook through the Open method of IWorkbooks
IWorkbook workbook = application.Workbooks.Open(inputStream);


// Set the version of the workbook
workbook.Version = ExcelVersion.Xlsx;

// Save the document as a stream.
using (MemoryStream outputStream = new MemoryStream())
{
  //Save the created Excel document to MemoryStream.
  workbook.SaveAs(outputStream);

  return outputStream;
}
// Dispose the workbook and ExcelEngine
workbook.Close();
excelEngine.Dispose();
{% endhighlight %}
{% endtabs %}

## Client-side File Download Helper

To enable file downloads in both Blazor Server-Side and Blazor WebAssembly applications, you need a JavaScript interop mechanism.

### `FileUtils` Class

Create a static class named `FileUtils` (e.g., in `Shared/FileUtils.cs` or in the component's code-behind) to encapsulate JavaScript interop calls for file saving.

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

### JavaScript `saveAsFile` Function

Add the following JavaScript function in your `index.html` (for Blazor WebAssembly) or `_Host.cshtml` (for Blazor Server-Side) file, typically inside the `<head>` or before the closing `</body>` tag.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
<script type="text/javascript">
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

### Navigation Menu Integration

To provide a navigation link to your Excel-related page, add the following code under your `NavMenu.razor` file (located in the `Shared` folder). This assumes you have a Blazor page or component named "Excel".

{% tabs %}
{% highlight c# tabtitle="C#" %}
<li class="nav-item px-3">
  <NavLink class="nav-link" href="Excel">
    <span class="oi oi-list-rich" aria-hidden="true"></span> Create Excel
  </NavLink>
</li>
{% endhighlight %}
{% endtabs %}

## Registering Services

To make `ExcelService` available via dependency injection, add it to your services collection in the `ConfigureServices` method of your `Startup.cs` (Blazor Server-Side) or `Program.cs` (Blazor WebAssembly) file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
services.AddSingleton<ExcelService>();
{% endhighlight %}
{% endtabs %}
