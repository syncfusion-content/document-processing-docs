---
layout: post
title: Save excel to Azure Blob in React Spreadsheet control | Syncfusion
description: Learn about how to Save an Excel file from Azure Blob Storage in React Spreadsheet control of Syncfusion Essential JS 2.
platform: document-processing
control: Save file to Azure Blob Storage
documentation: ug
---

# Save file to Azure Cloud Storage

To save a file to Azure Blob Storage in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```Csharp

using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Syncfusion.EJ2.Spreadsheet;
using Azure.Storage.Blobs;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

```Csharp

private readonly string _storageConnectionString;
private readonly string _storageContainerName;

public SpreadsheetController(IConfiguration configuration)
{
    _storageConnectionString = configuration.GetValue<string>("connectionString");
    _storageContainerName = configuration.GetValue<string>("containerName");
}

```

5. Create the `SaveToAzure()` method to save the document to the Azure Blob storage.

```Csharp

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

**Step 3:**  Modify the index File in the Spreadsheet sample to using [`saveAsJson`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveasjson) method to serialize the spreadsheet and send it to the back-end

```typescript

<button class="e-btn" onClick={saveToAzure}>
  Save to Azure Blob Storage
</button>;

const saveToAzure = () => {
  spreadsheet.saveAsJson().then((json) => {
    const formData = new FormData();
    formData.append("FileName", loadedFileInfo.fileName); // e.g., "Report"
    formData.append("saveType", loadedFileInfo.saveType); // e.g., "Xlsx"
    formData.append("JSONData", JSON.stringify(json.jsonObject.Workbook));
    formData.append(
      "PdfLayoutSettings",
      JSON.stringify({ FitSheetOnOnePage: false })
    );

    fetch("https://localhost:portNumber/api/spreadsheet/SaveToAzure", {
      method: "POST",
      body: formData
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Save failed with status ${res.status}`);
        }
        window.alert("Workbook saved successfully to Azure Blob Storage.");
      })
      .catch((err) => window.alert("Error saving to server: " + err));
  });
};

```
