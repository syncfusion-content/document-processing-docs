---
layout: post
title: Saving excel to AWS S3 in React Spreadsheet control | Syncfusion
description: Learn how to save a Excel file from AWS S3 in React Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save file to AWS S3
documentation: ug
---

# Save spreadsheet to AWS S3

To save a file to the AWS S3, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp

private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public SpreadsheetController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}

```

5. Create the `SaveToS3()` method to open the document from the AWS S3 bucket

```csharp

[HttpPost]
[Route("SaveToS3")]
public async Task<IActionResult> SaveToS3([FromForm] SaveSettings saveSettings)
{
    try
    {
        // Convert spreadsheet JSON to Excel file stream
        Stream fileStream = Workbook.Save<Stream>(saveSettings);
        fileStream.Position = 0; // Reset stream for upload

        // Set AWS region and credentials
        var region = RegionEndpoint.USEast1;
        var config = new AmazonS3Config { RegionEndpoint = region };
        var credentials = new BasicAWSCredentials("your-access-key", "your-secretkey");

        // Define S3 bucket and file name
        string bucketName = "your-bucket-name";
        string fileName = saveSettings.FileName + "." + saveSettings.SaveType.ToString().ToLower();

        // Initialize S3 client
        using (var client = new AmazonS3Client(credentials, config))
        {
            // Use TransferUtility to upload the file stream
            var fileTransferUtility = new TransferUtility(client);
            await fileTransferUtility.UploadAsync(fileStream, bucketName, fileName);
        }

        // Return success message
        return Ok("Excel file successfully saved to AWS S3.");
    }
    catch (Exception ex)
    {
    }
}

```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}

```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name

**Step 3:**  Modify the index File in the Spreadsheet sample to using [`saveAsJson`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveasjson) method to serialize the spreadsheet and send it to the back-end

```js
// Function to save the current spreadsheet to AWS S3 via an API call
const saveToS3 = () => {
  // Convert the current spreadsheet to JSON format
  spreadsheet.saveAsJson().then((json) => {
    const formData = new FormData();

    // Append necessary data to the form for the API request
    formData.append('FileName', loadedFileInfo.fileName); // Name of the file to save
    formData.append('saveType', loadedFileInfo.saveType); // Save type
    formData.append('JSONData', JSON.stringify(json.jsonObject.Workbook)); // Spreadsheet data
    formData.append(
      'PdfLayoutSettings',
      JSON.stringify({ FitSheetOnOnePage: false }) // PDF layout settings
    );

      // Make a POST request to the backend API to save the file to S3. Replace the URL with your local or hosted endpoint URL.
      fetch('https://localhost:portNumber/api/spreadsheet/SaveToS3', {
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

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.
