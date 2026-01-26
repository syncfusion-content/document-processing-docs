---
title: Convert Excel to Image in Blazor Server Web application | Syncfusion
description: Learn how to convert Excel to Image in Blazor Server Web application using .NET Core Excel library (XlsIO) without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert Excel document to Image in Blazor Server Web application

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Core Excel library](https://www.syncfusion.com/document-processing/excel-framework/net) used to create, read, edit and **convert Excel documents** programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **convert an Excel document to Image in Blazor Server Web application**.

## Steps to convert Excel document to Image in Blazor Server Web application

Step 1: Create a new C# Blazor Web application project.

![Create Blazor Server Side web application in Visual Studio](Blazor_images/Blazor_Server_Web_img1.png)

Step 2: Name the project.

![Name the Blazor Web Server Side application in Visual Studio](Blazor_images/Blazor_Server_Web_img2.png)

Step 3: Select the framework and click Create button.

![Select the framework in Blazor Server Side application in Visual Studio](Blazor_images/Blazor_Server_Web_img3.png)

Step 4: Install the [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) NuGet package as reference to your Blazor web application from [NuGet.org](https://www.nuget.org).

![Install Syncfusion.XlsIORenderer.Net.Core Nuget Package](Blazor_images/Blazor_Server_Web_img4.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

Step 5: Create a razor file with name as ``Excel`` under ``Pages`` folder, which is located inside the ``Components`` folder and include the following namespaces in the file.

{% capture codesnippet1 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
@rendermode InteractiveServer
@page "/excel"
@using System.IO;
@using ConvertExceltoImage;
@inject ConvertExceltoImage.Components.Data.ExcelService service
@inject Microsoft.JSInterop.IJSRuntime JS
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

Step 6: Add the following code to create a new button.

{% capture codesnippet2 %}
{% tabs %}
{% highlight CSHTML %}
<h2>Syncfusion Excel library (Essential XlsIO)</h2>
<p>Syncfusion Excel library (Essential XlsIO)  is a Blazor Excel library used to create, read, edit, and convert Excel files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertExceltoImage">Convert Excel to Image</button>
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet2 | OrderList_Indent_Level_1 }}

Step 7: Add the following code in ``Excel.razor`` file to convert Excel document to Image.
{% capture codesnippet3 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream excelStream;

    /// <summary>
    /// Convert Excel document to Image
    /// </summary>
    private async Task ConvertExceltoImage()
    {
        excelStream = service.ExceltoImage();
        await JS.SaveAs("Sample.jpeg", excelStream.ToArray());
    }
}
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet3 | OrderList_Indent_Level_1 }}

Step 8: Create a new cs file with name as ``ExcelService`` under ``Data`` folder and include the following namespaces in the file.

{% capture codesnippet4 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using System.IO;
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet4 | OrderList_Indent_Level_1 }}

Step 9: Create a new MemoryStream method with name as <code>Excel&#8203;toImage</code> and include the following code snippet to convert Excel document to Image in Blazor Server web application.
{% capture codesnippet5 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
//Create an instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Initialize XlsIORenderer
    application.XlsIORenderer = new XlsIORenderer();

    //Create the MemoryStream to save the image
    MemoryStream imageStream = new MemoryStream();

    //Save the converted image to MemoryStream
    worksheet.ConvertToImage(worksheet.UsedRange, imageStream);
    imageStream.Position = 0;

    //Download image in the browser
    return imageStream;
}
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet5 | OrderList_Indent_Level_1 }}

Step 10: Create a new class file in the project, with name as ``FileUtils`` and add the following code to invoke the JavaScript action for downloading the file in browser.

{% capture codesnippet6 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
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
{% endcapture %}
{{ codesnippet6 | OrderList_Indent_Level_1 }}

Step 11: Add the following JavaScript function in the ``App.razor``.
{% capture codesnippet7 %}
{% tabs %}
{% highlight c# tabtitle="C#" %}
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
{% endcapture %}
{{ codesnippet7 | OrderList_Indent_Level_1 }}

Step 12: Add the following code in <code>Na&#8203;vMenu.razor</code> file present under ``Layout`` folder.

{% tabs %}
{% highlight c# tabtitle="C#" %}
<div class="nav-item px-3">
    <NavLink class="nav-link" href="excel">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Convert Excel to Image
    </NavLink>
</div>
{% endhighlight %}
{% endtabs %}

Step 13: Add the service in the ``Program.cs`` file.

{% tabs %}
{% highlight c# tabtitle="C#" %}
builder.Services.AddScoped<ConvertExceltoImage.Components.Data.ExcelService>();
{% endhighlight %}
{% endtabs %}     

A complete working example of how to convert Excel to Image in Blazor Server web application in C# is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Blazor/Server%20Side/ConvertExceltoImage">this GitHub page</a>.