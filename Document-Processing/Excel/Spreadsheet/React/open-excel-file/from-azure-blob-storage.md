---
layout: post
title: Open excel from Azure Blob in React Spreadsheet control | Syncfusion
description: Learn about how to Open an Excel file from Azure Blob Storage in React Spreadsheet control of Syncfusion Essential JS 2.
platform: document-processing
control: Open file from Azure Blob Storage
documentation: ug
---

# Open file from Azure Blob Storage

To load a file from Azure Blob Storage in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Syncfusion.EJ2.Spreadsheet;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

```csharp

private readonly string _storageConnectionString;
private readonly string _storageContainerName;

public SpreadsheetController(IConfiguration configuration)
{
    // Fetch values from appsettings.json
    _storageConnectionString = configuration.GetValue<string>("connectionString");
    _storageContainerName = configuration.GetValue<string>("containerName");
}

```

5. Create the `OpenFromAzure()` method to open the document from the Azure Blob Storage.

```csharp

[HttpPost]
[Route("OpenFromAzure")]
public async Task<IActionResult> OpenFromAzure([FromBody] FileOptions options)
{
    if (options == null || string.IsNullOrWhiteSpace(options.FileName) || string.IsNullOrWhiteSpace(options.Extension))
        return BadRequest("Invalid file options.");

    try
    {
        using (MemoryStream stream = new MemoryStream())
        {
            string fileName = options.FileName + options.Extension;

            // Connect to Azure Blob Storage
            BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
            BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);

            // Download file into memory
            await blockBlobClient.DownloadToAsync(stream);
            stream.Position = 0;

            // Wrap stream as FormFile and convert to Spreadsheet-compatible JSON
            OpenRequest open = new OpenRequest
            {
                File = new FormFile(stream, 0, stream.Length, options.FileName, fileName)
            };

            string result = Workbook.Open(open);
            return Content(result, "application/json");
        }
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

```json

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "connectionString": "DefaultEndpointsProtocol=https;AccountName=yourAccount;AccountKey=yourKey;EndpointSuffix=core.windows.net",
  "containerName": "your-container-name"
}

```
N> Note: Install the Azure.Storage.Blobs NuGet package in the service project.

**Step 3:** Modify the index File in the Spreadsheet sample to make a fetch call to the server to retrieve and load the Excel file from the Google Cloud Storage into the client-side spreadsheet.

```ts

<button class="e-btn" onClick={openFromAzure}>
  Import XLS file from Azure Blob Storage
</button>;

const openFromAzure = () => {
  spreadsheet.showSpinner();

  fetch("https://localhost:portNumber/api/spreadsheet/OpenFromAzure", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      FileName: fileInfo.name,      // e.g., "Report"
      Extension: fileInfo.extension // e.g., ".xlsx"
    })
  })
    .then((res) => res.json())
    .then((data) => {
      spreadsheet.hideSpinner();
      spreadsheet.openFromJson({ file: data, triggerEvent: true });
    })
    .catch((err) => window.alert("Error importing file: " + err));
};

```