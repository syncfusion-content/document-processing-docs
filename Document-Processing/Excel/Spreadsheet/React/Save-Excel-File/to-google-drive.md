---
layout: post
title: Save excel to Google Drive in React Spreadsheet control | Syncfusion
description: Learn about how to Save an Excel file from Google Drive in React Spreadsheet control of Syncfusion Essential JS 2.
platform: document-processing
control: Save file to Google Drive
documentation: ug
---

# Save file to Google Drive

To save a file to Google Drive in a Spreadsheet Component, you can follow the steps below

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

```csharp

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

5. Create the `SaveExcelToGoogleDrive()` method to save the document to the Google Drive.

```csharp

[HttpPost]
[Route("SaveExcelToGoogleDrive")]
public async Task<IActionResult> SaveExcelToGoogleDrive([FromForm] SaveSettings saveSettings)
{
    try
    {
         //Generate Excel file stream using Syncfusion
        Stream generatedStream = Workbook.Save<Stream>(saveSettings);
        //Copy to MemoryStream to ensure full content is flushed and seekable
        MemoryStream excelStream = new MemoryStream();
        // Copy generated stream to MemoryStream for upload
        await generatedStream.CopyToAsync(excelStream);
        excelStream.Position = 0; // Reset position for upload
        // Prepare file name with extension based on SaveType
        string fileName = saveSettings.FileName + "." + saveSettings.SaveType.ToString().ToLower();
        // Validate service account credential file
        if (!System.IO.File.Exists(credentialPath))
            throw new FileNotFoundException($"Service account key file not found at {credentialPath}");
        //Authenticate using Service Account credentials
        GoogleCredential credential;
        // Load Google service account credentials
        using (var streamKey = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
        {
            credential = GoogleCredential.FromStream(streamKey)
                .CreateScoped(DriveService.Scope.Drive);
        }
        //Initialize Google Drive API service
        var service = new DriveService(new BaseClientService.Initializer()
        // Initialize Google Drive API client
        {
            HttpClientInitializer = credential,
            ApplicationName = applicationName,
        });
        //Prepare file metadata
        var fileMetadata = new Google.Apis.Drive.v3.Data.File()
        {
            Name = fileName
        };
        //Check if file already exists in the specified folder
        var listRequest = service.Files.List();
        listRequest.Q = $"name='{fileName}' and trashed=false";
        // Query Google Drive for Excel, CSV files in the specified folder
        listRequest.Fields = "files(id)";
        var files = await listRequest.ExecuteAsync();
        // Reset stream position before upload (important for both update and create)
        excelStream.Position = 0;
        // Set MIME type dynamically based on SaveType
         string mimeType = saveSettings.SaveType switch
         {
            SaveType.Xlsx => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            SaveType.Xls => "application/vnd.ms-excel",
            SaveType.Csv => "text/csv",
         };

        if (files.Files.Any())
        {
            // If File exists Update in the existing file
            var updateRequest = service.Files.Update(fileMetadata, files.Files[0].Id, excelStream, mimeType);
            updateRequest.Fields = "id";
            await updateRequest.UploadAsync();
        }
        else
        {
            // If File does not exist, Create new file
            var createRequest = service.Files.Create(fileMetadata, excelStream,mimeType);
            createRequest.Fields = "id";
            await createRequest.UploadAsync();
        }
        return Ok("Excel file successfully saved/updated in Google Drive.");
    }
    catch (Exception ex)
    {
        return BadRequest("Error saving file to Google Drive: " + ex.Message);
    }
}

```

**Step 3:** Modify the index File in the Spreadsheet sample to using [`saveAsJson`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveasjson) method to serialize the spreadsheet and send it to the back-end

```js
<button class="e-btn" onClick={saveToGoogleDrive}>
  Save to Google Drive
</button>;

// Save the current spreadsheet to Google Drive
const saveToGoogleDrive = () => {
  // Convert spreadsheet data to JSON
  spreadsheet.saveAsJson().then((json) => {
    const formData = new FormData(); // Append required fields for backend API
    formData.append("FileName", loadedFileInfo.fileName); // File name
    formData.append("SaveType", loadedFileInfo.saveType); // Format type (Xlsx, Xls, Csv)
    formData.append("JSONData", JSON.stringify(json.jsonObject.Workbook)); // Spreadsheet data
    formData.append(
      "PdfLayoutSettings",
      JSON.stringify({ FitSheetOnOnePage: false }),
    ); // PDF settings
    // Make a POST request to the backend API to save the file to Google Drive.
    // Replace the URL with your local or hosted endpoint URL.
    fetch(
      "https://localhost:your_port_number/api/spreadsheet/SaveExcelToGoogleDrive",
      {
        method: "POST",
        body: formData,
      },
    )
      .then((response) => {
        if (!response.ok) throw new Error(`Save failed: ${response.status}`);
        window.alert("Workbook saved successfully to Google Drive.");
      })
      .catch((error) => {
        window.alert("Error saving to Google Drive: " + error);
      });
  });
};
```

N> Note: Install the Google.Apis.Drive.v3 NuGet package in the service project.