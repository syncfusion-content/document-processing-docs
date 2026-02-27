---
layout: post
title: Open excel from Google Drive in React Spreadsheet control | Syncfusion
description: Learn about how to Open an Excel file from Google Drive in React Spreadsheet control of Syncfusion Essential JS 2.
platform: document-processing
control: Open file from Google Drive
documentation: ug
---

# Open file from Google Drive

To load a file from Google Drive in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Syncfusion.EJ2.Spreadsheet;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

```Csharp

//variables for storing GDrive folderId, ApplicationName and Service-Accountkey credentials
public readonly string folderId;
public readonly string applicationName;
public readonly string credentialPath;

//constructor for assigning credentials
public SpreadsheetController(IConfiguration configuration)
{
    folderId = configuration.GetValue<string>("FolderId");
    credentialPath = configuration.GetValue<string>("CredentialPath");
    applicationName = configuration.GetValue<string>("ApplicationName");
}

```

5. Create the `OpenExcelFromGoogleDrive()` method to open the document from the Google Drive.

```Csharp

[HttpPost]
[Route("OpenExcelFromGoogleDrive")]
public async Task<IActionResult> OpenExcelFromGoogleDrive([FromBody] FileOptions options)
{
try
{
    // Create a memory stream to store file data
    MemoryStream stream = new MemoryStream();

    // Authenticate using Service Account
    GoogleCredential credential;
    // Load Google service account credentials
    using (var streamKey = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
    {
        credential = GoogleCredential.FromStream(streamKey)
            .CreateScoped(DriveService.Scope.Drive);
    }

    // Create Google Drive API service
    var service = new DriveService(new BaseClientService.Initializer()
    // Initialize Google Drive API client
    {
        HttpClientInitializer = credential,
        ApplicationName = applicationName,
    });

    // List Excel files in Google Drive folder
    var listRequest = service.Files.List();
    // Query Google Drive for Excel, CSV files in the specified folder
    listRequest.Q = $"(mimeType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' or mimeType='application/vnd.ms-excel' or mimeType='text/csv') and '{folderId}' in parents and trashed=false";
    listRequest.Fields = "files(id, name)";
    var files = await listRequest.ExecuteAsync();
    // Find the requested file
    string fileIdToDownload = files.Files.FirstOrDefault(f => f.Name == options.FileName + options.Extension)?.Id;
    // Get the file ID for the requested file name
    if (string.IsNullOrEmpty(fileIdToDownload))
        // Get the file ID for the requested file name
        return NotFound("File not found in Google Drive.");
    // Download the file
    var request = service.Files.Get(fileIdToDownload);
    await request.DownloadAsync(stream);
    // Download file content into memory stream
    stream.Position = 0;
    // Prepare file for Syncfusion Excel processing
    OpenRequest open = new OpenRequest
    // Wrap downloaded stream as FormFile for Syncfusion processing
    {
        File = new FormFile(stream, 0, stream.Length, options.FileName, options.FileName + options.Extension)
    };

    // Convert Excel file to JSON using Syncfusion XlsIO
    var result = Workbook.Open(open);
    return Content(result, "application/json");
}
catch (Exception ex)
{
    return BadRequest("Error occurred while processing the file: " + ex.Message);
}
}

// Class to store FileOptions
public class FileOptions
{
    public string FileName { get; set; } = string.Empty;
    public string Extension { get; set; } = string.Empty;
}

```

6. Open the `appsettings.json` file in your web service project, add your Google Drive configuration details.

```Json

{
 "CredentialPath": "path-to-your-service-account-key.json",
 "FolderId": "your-google-drive-folder-id",
 "ApplicationName": "YourAppName"
}

```

N> Note: Install the Google.Apis.Drive.v3 NuGet package in the service project.

**Step 3:** Modify the index File in the Spreadsheet sample to make a fetch call to the server to retrieve and load the Excel file from the Google Drive into the client-side spreadsheet.

```typescript
<button className="e-btn" onClick={openFromGoogleDrive} style={{ marginLeft: '10px' }}>
    Open from Drive
</button>

const openFromGoogleDrive = () => {
    spreadsheet.showSpinner();
    // Make a POST request to the backend API to open the file from Google Drive.
    // Replace the URL with your local or hosted endpoint URL.
    fetch('https://localhost:your_port_number/api/spreadsheet/OpenExcelFromGoogleDrive', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            FileName: fileInfo.name,       // Name of the file to open
            Extension: fileInfo.extension, // File extension (.xlsx)
        }),
    })
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
        spreadsheet.hideSpinner();
        // Load the spreadsheet data into the UI
        spreadsheet.openFromJson({ file: data, triggerEvent: true });
    })
    .catch((error) => {
        spreadsheet.hideSpinner();
        window.alert('Error importing file from Google Drive: ' + error);
    });
};
```