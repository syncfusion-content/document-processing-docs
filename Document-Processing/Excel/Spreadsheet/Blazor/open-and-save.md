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

### Open an Excel file from Google Drive
Open an Excel file from Google Drive by downloading it as a stream and binding it to the Spreadsheet component.

**Prerequisites:**
- [Google Cloud project](https://developers.google.com/workspace/guides/create-project) in the Google Cloud Console.
- [Service account](https://cloud.google.com/iam/docs/service-accounts-create) within the GCP project.
- [Service account key](https://cloud.google.com/iam/docs/keys-create-delete) (JSON) available on disk.
- [Google Drive API enabled](https://console.cloud.google.com/apis/library/drive.googleapis.com) for the project.
- [Google Drive account](https://drive.google.com/) with access to the file to download.
- [Google.Apis.Drive.v3](https://www.nuget.org/packages/Google.Apis.Drive.v3) NuGet package installed in your project to access Google Drive API.

After completing these prerequisites, follow the steps below to download an Excel file from Google Drive using a service account and load it into the Blazor Spreadsheet component.

**Step 1:** Install required NuGet packages

To use Google Drive with the Blazor Spreadsheet, install the following packages:

- [Google.Apis.Drive.v3](https://www.nuget.org/packages/Google.Apis.Drive.v3) — to access the Google Drive API
- [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet) — to use the Syncfusion Blazor Spreadsheet component

**Step 2:** Include the following namespaces in the Razor file

Import the required namespaces at the top of the file:

```
@using Google.Apis.Auth.OAuth2;
@using Google.Apis.Drive.v3;
@using Google.Apis.Services;
@using Syncfusion.Blazor.Spreadsheet;
@using System.IO;
```

**Step 3:** Add the code example below to load an Excel file from Google Drive

{% tabs %}
{% highlight razor %}

@page "/"

@if (IsSpreadsheetDataLoaded)
{
    <SfSpreadsheet DataSource="DataSourceBytes">
        <SpreadsheetRibbon></SpreadsheetRibbon>
    </SfSpreadsheet>
}
@code{
 
    public byte[] DataSourceBytes { get; set; }
 
    // Flag to indicate whether the spreadsheet data has been loaded and is ready for rendering
    public bool IsSpreadsheetDataLoaded { get; set; }
 
    protected override async Task OnInitializedAsync()
    {
        //Download the document from Google Drive
        MemoryStream stream = await GetDocumentFromGoogleDrive();

        //Set the position as '0'
        stream.Position = 0;

        // Convert the MemoryStream to a byte array to be used as the DataSource
        DataSourceBytes = stream.ToArray();
 
        // Set the flag to true to indicate that the spreadsheet data is ready
        IsSpreadsheetDataLoaded = true;
    }
 
    // Download file from Google Drive
    public async Task<MemoryStream> GetDocumentFromGoogleDrive()
    {
        //Define the path to the service account key file
        string serviceAccountKeyPath = "Your_service_account_key_path";

        //Specify the file ID of the file to download
        string fileID = "Your_file_id";
 
        try
        {
            //Authenticate the Google Drive API access using the service account key
            GoogleCredential credential = GoogleCredential.FromFile(serviceAccountKeyPath).CreateScoped(DriveService.ScopeConstants.Drive);
 
            //Create the Google Drive service
            DriveService service = new DriveService(new BaseClientService.Initializ()
            {
                HttpClientInitializer = credential
            });
 
            //Create a request to get the file from Google Drive
            var request = service.Files.Get(fileID);
 
            //Download the file into a MemoryStream
            MemoryStream stream = new MemoryStream();
            await request.DownloadAsync(stream);
 
            return stream;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error retrieving document from Google Drive: {ex.Message}");
            throw;
        }
    }
}

{% endhighlight %}
{% endtabs %}

N> Replace **Your_file_id** with the actual Google Drive file ID, and **Your_service_account_key_path** with the actual path to your service account key JSON file.

N> The File ID is the unique identifier for a Google Drive file. For example, if the file URL is: `https://drive.google.com/file/d/abc123xyz456/view?usp=sharing`, then the file ID is `abc123xyz456`.

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
