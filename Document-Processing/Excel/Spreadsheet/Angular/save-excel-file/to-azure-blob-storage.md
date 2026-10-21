---
layout: post
title: Save excel to Azure Blob in Angular Spreadsheet control | Syncfusion
description: Learn about how to Save an Excel file from Azure Blob Storage in Angular Spreadsheet control of Syncfusion Essential JS 2.
platform: document-processing
control: Save file to Azure Blob Storage
documentation: ug
---

# Save file to Azure Cloud Storage

To save a file to Azure Blob Storage in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in Angular

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/excel/spreadsheet/angular/getting-started) to create a simple Spreadsheet sample in Angular. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Syncfusion.EJ2.Spreadsheet;
using Azure.Storage.Blobs;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

```csharp

private readonly string _storageConnectionString;
private readonly string _storageContainerName;

public SpreadsheetController(IConfiguration configuration)
{
    _storageConnectionString = configuration.GetValue<string>("connectionString");
    _storageContainerName = configuration.GetValue<string>("containerName");
}

```

5. Create the `SaveToAzure()` method to save the document to the Azure Blob storage.

```csharp

[HttpPost]
[Route("SaveToAzure")]
public async Task<IActionResult> SaveToAzure([FromForm] SaveSettings saveSettings)
{
    if (saveSettings == null || string.IsNullOrWhiteSpace(saveSettings.FileName))
        return BadRequest("Invalid save settings.");

    try
    {
        // Convert spreadsheet JSON to Excel/PDF/CSV stream
        Stream fileStream = Workbook.Save(saveSettings);
        fileStream.Position = 0;

        // Define Azure Blob Storage client
        BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
        BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);

        // Define blob name using file name and save type
        string blobName = $"{saveSettings.FileName}.{saveSettings.SaveType.ToString().ToLower()}";
        BlobClient blobClient = containerClient.GetBlobClient(blobName);

        // Upload the Excel file stream to Azure Blob Storage (overwrite if exists)
        await blobClient.UploadAsync(fileStream, overwrite: true);

        return Ok("Excel file successfully saved to Azure Blob Storage.");
    }
    catch (Exception ex)
    {
        return BadRequest("Error saving file to Azure Blob Storage: " + ex.Message);
    }
}

```

N> Note: Install the Azure.Storage.Blobs NuGet package in the service project. Ensure the configured connection string has permissions to read and write blobs in the specified container.

**Step 3:**  Modify the index File in the Spreadsheet sample to using [`saveAsJson`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#saveasjson) method to serialize the spreadsheet and send it to the back-end

```ts

<button class="e-btn" (click)="saveToAzure()">Save to Azure Blob Storage</button>

saveToAzure() {
    // Convert the current spreadsheet to JSON format
    this.spreadsheetObj.saveAsJson().then((json) => {
        const formData = new FormData();

        // Append necessary data to the form for the API request
        formData.append('FileName', loadedFileInfo.fileName); // Name of the file to save
        formData.append('saveType', loadedFileInfo.saveType); // Save type
        formData.append('JSONData', JSON.stringify(json.jsonObject.Workbook)); // Spreadsheet data
        formData.append(
            'PdfLayoutSettings',
            JSON.stringify({ FitSheetOnOnePage: false }) // PDF layout settings
        );

        // Make a POST request to the backend API to save the file to Azure-blog storage. Replace the URL with your local or hosted endpoint URL.
        fetch('https://localhost:portNumber/api/spreadsheet/SaveToAzure', {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(
                    `Save request failed with status ${response.status}`
                );
                }
            window.alert('Workbook saved successfully.');
            })
            .catch((error) => {
            // Log any errors that occur during the save operation
            window.alert('Error saving to server:', error);
        });
    });
};
```