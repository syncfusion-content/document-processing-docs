---
layout: post
title: Opening or Saving document from Google Cloud Storage in React Spreadsheet control | Syncfusion
description: Learn about how to Open or Save an Excel file from Google Cloud Storage in React Spreadsheet control of Syncfusion Essential JS 2.
platform: React
control: Open or Save file from Google Cloud Storage
documentation: ug
domainurl: ##DomainURL##
---

# Open file from Google Cloud Storage

To load a file from Google Cloud Storage in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](../../React//getting-started.md) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../../Spreadsheet/React/open-save.md) for instructions on how to create a web service project.

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

```typescript
<button class="e-btn" onClick={openFromGoogleCloud}>
  Import XLS file from Google Cloud Storage
</button>;

const openFromGoogleCloud = () => {
  spreadsheet.showSpinner();

  fetch("https://localhost:portNumber/api/spreadsheet/OpenFromGoogleCloud", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      FileName: fileInfo.name, // e.g., "Report"
      Extension: fileInfo.extension, // e.g., ".xlsx"
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      spreadsheet.hideSpinner();
      spreadsheet.openFromJson({ file: data, triggerEvent: true });
    })
    .catch((err) => window.alert("Error importing file: " + err));
};
```

# Save file to Google Cloud Storage

To save a file to Google Cloud Storage in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](../../React//getting-started.md) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../../Spreadsheet/React/open-save.md) for instructions on how to create a web service project.

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

5. Create the `SaveToGoogleCloud()` method to save the document to the Google Cloud storage.

```Csharp

[HttpPost]
[Route("SaveToGoogleCloud")]
public async Task<IActionResult> SaveToGoogleCloud([FromForm] SaveSettings saveSettings)
{
    try
    {
        // Convert spreadsheet JSON to Excel stream
        Stream fileStream = Workbook.Save<Stream>(saveSettings);
        fileStream.Position = 0;

        // File name inside the bucket
        string fileName = $"{saveSettings.FileName}.{saveSettings.SaveType.ToString().ToLower()}";

        // Upload the stream to Google Cloud Storage
        await _storageClient.UploadObjectAsync(_bucketName, fileName, null, fileStream);

        return Ok("Excel file successfully saved to Google Cloud Storage.");
    }
    catch (Exception ex)
    {
        return BadRequest("Error saving file to Google Cloud Storage: " + ex.Message);
    }
}

```

5. Create the `saveToGoogleCloud()` method to save the document to the Google Cloud Storage.

```csharp

<button class="e-btn" onClick={saveToGoogleCloud}>
  Save to Google Cloud Storage
</button>

const saveToGoogleCloud = () => {
  spreadsheet.saveAsJson().then(json => {
    const formData = new FormData();
    formData.append('FileName', loadedFileInfo.fileName); // e.g., "Report"
    formData.append('saveType', loadedFileInfo.saveType); // e.g., "Xlsx"
    formData.append('JSONData', JSON.stringify(json.jsonObject.Workbook));
    formData.append(
      'PdfLayoutSettings',
      JSON.stringify({ FitSheetOnOnePage: false })
    );

    fetch('https://localhost:portNumber/api/spreadsheet/SaveToGoogleCloud', {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Save failed with status ${res.status}`);
        }
        window.alert('Workbook saved successfully to Google Cloud Storage.');
      })
      .catch(err => window.alert('Error saving to server: ' + err));
  });
};

```

N> Note: The backend requires the Google.Cloud.Storage.V1 NuGet package and a service-account key that has Storage Object Admin (or equivalent) permissions on the target bucket.
