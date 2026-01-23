---
layout: post
title: Opening excel from AWS S3 in React Spreadsheet control | Syncfusion
description: Learn about how to Open an Excel file from AWS S3 in React Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: React
control: Open file from AWS S3
documentation: ug
---

# Open file from AWS S3

To load a file from AWS S3 in a Spreadsheet Component, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](../../React//getting-started.md) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../../Spreadsheet/React/open-save.md) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

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

5. Create the `OpenFromS3()` method to open the document from the AWS S3 bucket.

```csharp

[Route("api/[controller]")]
[ApiController]
public class SpreadsheetController : ControllerBase
{
    [HttpPost]
    [Route("OpenFromS3")]
    public async Task<IActionResult> OpenFromS3([FromBody] FileOptions options)
    {
        try
        {
            //Set AWS region and credentials
            var region = RegionEndpoint.USEast1;
            var config = new AmazonS3Config { RegionEndpoint = region };
            var credentials = new BasicAWSCredentials("your-access-key", "your-secretkey");
            //Create an S3 client to interact with AWS
            using (var client = new AmazonS3Client(credentials, config))
            {
                using (MemoryStream stream = new MemoryStream())
                {
                    //Get the full file name using input from the client
                    string bucketName = "your-bucket-name";
                    string fileName = options.FileName + options.Extension;
                    //Download the file from S3 into memory
                    var response = await client.GetObjectAsync(new GetObjectRequest
                    {
                        BucketName = bucketName,
                        Key = fileName
                    });
                    await response.ResponseStream.CopyToAsync(stream);
                    stream.Position = 0; // Reset stream position for reading
                    //Wrap the stream as a FormFile for processing
                    OpenRequest open = new OpenRequest
                    {
                        File = new FormFile(stream, 0, stream.Length, options.FileName, fileName)
                    };
                    //Convert Excel file to JSON using Workbook.Open method.
                    var result = Workbook.Open(open);
                    //Return the JSON result to the client
                    return Content(result, "application/json");
                }
            }
        }
        catch (Exception ex)
        {
            // Handle any errors and return a message
            Console.WriteLine($"Error: {ex.Message}");
            return Content("Error occurred while processing the file.");
        }
    }

    // To receive file details from the client.
    public class FileOptions
    {
        public string FileName { get; set; } = string.Empty;
        public string Extension { get; set; } = string.Empty;
    }
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}

```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name.

**Step 3:**  Modify the index File in the Spreadsheet sample to make a fetch call to the server to retrieve and load the Excel file from the AWS S3 bucket into the client-side spreadsheet.

```typescript

<button class="e-btn" (click)="openFromS3()">Import XLS files from AWS S3 bucket</button>

// Function to open a spreadsheet file from AWS S3 via an API call
const openFromS3 = () => {
  spreadsheet.showSpinner();
  // Make a POST request to the backend API to fetch the file from S3. Replace the URL with your local or hosted endpoint URL.
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
      spreadsheet.hideSpinner();
      // Load the spreadsheet data into the UI.
      spreadsheet.openFromJson({ file: data, triggerEvent: true });
    })
    .catch((error) => {
      // Log any errors that occur during the fetch operation
      window.alert('Error importing file:', error);
    });
};

```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

# Save spreadsheet to AWS S3

To save a file to the AWS S3, you can follow the steps below

**Step 1:** Create a Simple Spreadsheet Sample in React

Start by following the steps provided in this [link](../../React//getting-started.md) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component.

**Step 2:** Modify the `SpreadsheetController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../../Spreadsheet/React/open-save.md) for instructions on how to create a web service project.

2. Open the `SpreadsheetController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp

using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;

```

4. Add the following private fields and constructor parameters to the `SpreadsheetController` class, In the constructor, assign the values from the configuration to the corresponding fields.

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

5. Create the `SaveToS3()` method to open the document from the AWS S3 bucket.

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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}

```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name.

**Step 3:**  Modify the index File in the Spreadsheet sample to using [`saveAsJson`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#saveasjson) method to serialize the spreadsheet and send it to the backend.

```tsx

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
