---
layout: post
title: Open excel from Google Cloud in Angular Spreadsheet control | Syncfusion
description: Learn about how to Open an Excel file from Google Cloud Storage in Angular Spreadsheet control of Syncfusion Essential JS 2.
platform: document-processing
control: Open file from Google Cloud Storage
documentation: ug
---

# Open file from Google Cloud Storage

To load a file from Google Cloud Storage in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/getting-started) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using Google.Apis.Auth.OAuth2;
using Google.Cloud.Storage.V1;
using Syncfusion.EJ2.Spreadsheet;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

```Csharp

private readonly string _bucketName;
private readonly StorageClient _storageClient;

public SpreadsheetController(IConfiguration configuration)
{
    // Path of the JSON key downloaded from Google Cloud
    string keyFilePath = configuration.GetValue<string>("GoogleKeyFilePath");

    // Create StorageClient with service-account credentials
    var credentials = GoogleCredential.FromFile(keyFilePath);
    _storageClient = StorageClient.Create(credentials);

    // Bucket that stores the Excel files
    _bucketName = configuration.GetValue<string>("BucketName");
}

```

5. Create the `OpenFromGoogleCloud()` method to open the document from the Google Cloud Storage.

```Csharp

[HttpPost]
[Route("OpenFromGoogleCloud")]
public IActionResult OpenFromGoogleCloud([FromBody] FileOptions options)
{
    try
    {
        using MemoryStream stream = new MemoryStream();

        // <bucket>/<fileName><extension>
        string fileName = options.FileName + options.Extension;

        // Download the object into memory
        _storageClient.DownloadObject(_bucketName, fileName, stream);
        stream.Position = 0;

        // Feed the stream to Syncfusion to convert it into JSON
        OpenRequest open = new OpenRequest
        {
            File = new FormFile(stream, 0, stream.Length, options.FileName, fileName)
        };

        string result = Workbook.Open(open);
        return Content(result, "application/json");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
        return Content("Error occurred while processing the file.");
    }
}

// DTO that receives file details from the client
public class FileOptions
{
    public string FileName { get; set; } = string.Empty;
    public string Extension { get; set; } = string.Empty;
}

```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration.

```Json

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "GoogleKeyFilePath": "path/to/service-account-key.json",
  "BucketName": "your-gcs-bucket-name"
}

```

N> Note: Install the Google.Cloud.Storage.V1 NuGet package in the service project.

**Step 3:** Modify the index File in the Spreadsheet sample to make a fetch call to the server to retrieve and load the Excel file from the Google Cloud Storage into the client-side spreadsheet.

```ts

<button class="e-btn" (click)="openFromGoogleCloud()">Import XLS file from Google Cloud Storage</button>

openFromAzure() {
    this.spreadsheetObj.showSpinner();
    // Make a POST request to the backend API to fetch the file from Google Cloud Storage. Replace the URL with your local or hosted endpoint URL.
    fetch('https://localhost:portNumber/api/spreadsheet/OpenFromS3', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        FileName: fileInfo.name, // Name of the file to open
        Extension: fileInfo.extension, // File extension
        }),
    })
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
        this.spreadsheetObj.hideSpinner();
        // Load the spreadsheet data into the UI.
        this.spreadsheetObj.openFromJson({ file: data, triggerEvent: true });
    })
    .catch((error) => {
        // Log any errors that occur during the fetch operation
        window.alert('Error importing file:', error);
        });
};
```