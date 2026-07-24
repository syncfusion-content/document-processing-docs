---
title: Loading and saving workbook in WinUI | Syncfusion
description: Explains how to load and save Excel files in WinUI applications using .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and saving workbook in WinUI

## Prerequisites

* Visual Studio 2022 (17.0 or later) with the **.NET Desktop Development** workload and the **Windows App SDK** installed.
* Install the [Syncfusion.XlsIO.NET](https://www.nuget.org/packages/Syncfusion.XlsIO.NET) NuGet package in your project.
* Register your Syncfusion<sup>&reg;</sup> license key in your project. Refer to the [licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) for details.

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/document-processing/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

## Opening an existing workbook from stream

You can open an existing workbook from a stream by using the overloads of the [Open](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_IO_Stream_) methods of the [IWorkbooks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Load the embedded resource into a stream
    Assembly executingAssembly = typeof(App).GetTypeInfo().Assembly;
    using (Stream inputStream = executingAssembly.GetManifestResourceStream("WinUISample.Sample.xlsx"))
    {
        // Open the workbook through the Open method of IWorkbooks
        IWorkbook workbook = application.Workbooks.Open(inputStream);
    }
}
{% endhighlight %}
{% endtabs %}

## Saving an Excel workbook to stream

You can save the created or manipulated workbook to a stream using the [SaveAs](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_IO_Stream_) methods.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Load the embedded resource into a stream
    Assembly executingAssembly = typeof(App).GetTypeInfo().Assembly;
    using (Stream inputStream = executingAssembly.GetManifestResourceStream("WinUISample.Sample.xlsx"))
    {
        // Open the workbook
        IWorkbook workbook = application.Workbooks.Open(inputStream);

        // To-Do: some manipulation

        // Set the version of the workbook
        workbook.Version = ExcelVersion.Xlsx;

        // Save the workbook to a memory stream
        using (MemoryStream outputStream = new MemoryStream())
        {
            workbook.SaveAs(outputStream);
            outputStream.Position = 0;

            // Save the memory stream to a user-chosen file via FileSavePicker
            FileSavePicker savePicker = new FileSavePicker();
            savePicker.SuggestedStartLocation = PickerLocationId.Desktop;
            savePicker.SuggestedFileName = "Output";
            savePicker.FileTypeChoices.Add("Excel Files", new List<string>() { ".xlsx" });

            StorageFile storageFile = await savePicker.PickSaveFileAsync();
            using (Stream fileStream = await storageFile.OpenStreamForWriteAsync())
            {
                await outputStream.CopyToAsync(fileStream);
            }
        }
    }
}
{% endhighlight %}
{% endtabs %}

## See Also

* [Create, read, and edit Excel files in WinUI](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-winui-c-sharp)
* [Assemblies Required for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [NuGet Packages for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview) 
