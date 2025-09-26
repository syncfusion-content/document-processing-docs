---
layout: post
title: Open and Save in Blazor Spreadsheet Component | Syncfusion
description: Learn how to open and save Excel files in the Syncfusion Blazor Spreadsheet component and more | Syncfusion.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Open and Save in Blazor Spreadsheet Component

The **Open** and **Save** functionalities in the Blazor Spreadsheet component allow for efficient management of Excel files. You can open existing Excel files for analysis and modification, and save new or modified spreadsheets in a compatible format.

## Open
The Blazor Spreadsheet component preserves all data, cell styles, formatting, and other spreadsheet elements when opening Excel files. These files can be loaded through the user interface action or programmatic methods.

### Open an Excel file via UI

To open an Excel document using the interface, select the **File > Open** option from the **Ribbon**. A file explorer dialog will appear, allowing selection of the desired Excel file for loading into the component.

![UI showing file menu with open option](./images/file-open-feature.png)

![File explorer showing Excel file](./images/select-excel-file.png)

### Open an Excel file from a local path
To load Excel files programmatically, they can be converted into byte arrays. This approach is particularly effective when files are retrieved from a backend service.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet DataSource="DataSourceBytes" >
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }
}

{% endhighlight %}
{% endtabs %}

### Open an Excel file from a Base64 string
An Excel file encoded as a Base64 string can be loaded into the Spreadsheet component by converting the string into a byte array and then into a stream. This method is effective when retrieving file data from a database or an API.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Spreadsheet

 <SfSpreadsheet DataSource="DataSourceBytes" >
    <SpreadsheetRibbon></SpreadsheetRibbon>
 </SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string base64String = "Enter the base64 string data here";
        DataSourceBytes = Convert.FromBase64String(base64String);     
    }
}

{% endhighlight %}
{% endtabs %}

### Supported file formats
The Spreadsheet component supports opening the following file formats:
* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97-2003 (.xls)

## Save
The Spreadsheet component allows you to save data, styles, formatting, and other content as an Excel file. This functionality ensures that all modifications are preserved in a compatible format.

### Save an Excel file using UI
To save the Spreadsheet content through the user interface, select the **File > Save As** option from the **Ribbon**.You can then specify the file name and format in the save dialog.

![UI showing file menu with save option](./images/file-save-feature.png)

![File explorer interface for saving a file](./images/file-save-dialogbox.png)

### Saving file with active protection settings
When a protected sheet or workbook is saved or downloaded, all associated settings - such as the protection password, unlocked cell ranges, and sheet options - are preserved in the Excel file. These settings remain active and are consistently maintained when the file is opened in other viewers like **Microsoft Excel** or **Google Sheets**, ensuring seamless protection across viewers. To know more about protection, refer [here](./protection#protect-sheet).

### Supported file formats
The Spreadsheet component supports saving files in the Microsoft Excel (.xlsx) format.

## New
To create a new, blank workbook through the UI, select **File > New** from the **Ribbon**. This action initializes a blank spreadsheet component, ready for data entry or formatting. If unsaved changes are present, a confirmation dialog will appear, indicating that these changes will be lost. The dialog presents options to proceed with creating the new workbook by selecting **OK**, or to cancel the operation by selecting **Cancel**.

![UI showing file menu with new option](./images/file-new-feature.png)
