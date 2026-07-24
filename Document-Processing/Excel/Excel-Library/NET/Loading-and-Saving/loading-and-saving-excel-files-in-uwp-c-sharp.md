---
title: Loading and saving workbook in UWP | Syncfusion
description: Explains how to load and save Excel files in UWP applications using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and saving workbook in UWP

## Prerequisites

* Visual Studio 2017 or later with the **Universal Windows Platform development** workload installed.
* Install the [Syncfusion.XlsIO.UWP](https://www.nuget.org/packages/Syncfusion.XlsIO.UWP) NuGet package in your UWP project.
* Register your Syncfusion<sup>&reg;</sup> license key in your project. Refer to the [licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) for details.

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/document-processing/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

## Opening an existing workbook

You can open an existing workbook by using the overloads of [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_) methods of [IWorkbooks](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html) interface.

{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Instantiate the File Picker
    FileOpenPicker openPicker = new FileOpenPicker();
    openPicker.SuggestedStartLocation = PickerLocationId.Desktop;
    openPicker.FileTypeFilter.Add(".xlsx");
    openPicker.FileTypeFilter.Add(".xls");

    // Associate the picker with the current window (required for UWP desktop/bridged apps)
    IntPtr hwnd = WindowNative.GetWindowHandle(App.MainWindow);
    InitializeWithWindow.Initialize(openPicker, hwnd);

    StorageFile file = await openPicker.PickSingleFileAsync();

    // Open the workbook
    IWorkbook workbook = await application.Workbooks.OpenAsync(file, ExcelOpenType.Automatic);
}
{% endhighlight %}
{% endtabs %}

## Saving an Excel workbook

You can also save the created or manipulated workbook using overloads of [SaveAs](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_String_System_Web_HttpResponse_Syncfusion_XlsIO_ExcelDownloadType_Syncfusion_XlsIO_ExcelHttpContentType_) methods.

{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Instantiate the File Picker
    FileOpenPicker openPicker = new FileOpenPicker();
    openPicker.SuggestedStartLocation = PickerLocationId.Desktop;
    openPicker.FileTypeFilter.Add(".xlsx");
    openPicker.FileTypeFilter.Add(".xls");

    // Associate the picker with the current window (required for UWP desktop/bridged apps)
    IntPtr hwnd = WindowNative.GetWindowHandle(App.MainWindow);
    InitializeWithWindow.Initialize(openPicker, hwnd);

    StorageFile file = await openPicker.PickSingleFileAsync();

    // Open the workbook
    IWorkbook workbook = await application.Workbooks.OpenAsync(file, ExcelOpenType.Automatic);

    // To-Do: some manipulation

    // Set the version of the workbook
    workbook.Version = ExcelVersion.Xlsx;

    // Initialize the FileSavePicker
    FileSavePicker savePicker = new FileSavePicker();
    savePicker.SuggestedStartLocation = PickerLocationId.Desktop;
    savePicker.SuggestedFileName = "Output";
    savePicker.FileTypeChoices.Add("Excel Files", new List<string>() { ".xlsx" });

    // Associate the picker with the current window (required for UWP desktop/bridged apps)
    InitializeWithWindow.Initialize(savePicker, hwnd);

    // Create a storage file from the FileSavePicker
    StorageFile storageFile = await savePicker.PickSaveFileAsync();

    // Save changes to the specified storage file
    await workbook.SaveAsAsync(storageFile);
}
{% endhighlight %}
{% endtabs %}

## See Also

* [Create, read, and edit Excel files in UWP](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-uwp-c-sharp)
* [Assemblies Required for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [NuGet Packages for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview) 
