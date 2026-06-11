---
layout: post
title: Save PDF files to Google Cloud Storage in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to save PDF files to Google Cloud Storage using the Syncfusion ASP.NET MVC PDF Viewer component with a server-backed web service.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Save PDF files to Google Cloud Storage

To save a PDF file to Google Cloud Storage using the ASP.NET MVC PDF Viewer, follow the steps below. This approach uses a server-backed web service.

**Step 1:** Create a service account

Open the Google Cloud Console and navigate to `IAM & Admin` > `Service accounts`. Click `Create Service Account`, enter a name, assign roles (for example, Storage Object Admin), and create a key in JSON format. Download the key file securely and use it in your application for authentication and access to the Google Cloud Storage bucket. For more details, see the [official documentation](https://cloud.google.com/iam/docs/service-accounts-create)

**Step 2:** Create an ASP.NET MVC PDF Viewer sample

Follow the instructions in this Getting Started [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `HomeController.cs` file in the project

1. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

2. Add the following private fields and constructor parameters to the `HomeController.cs` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp

    // The key file is used to authenticate with Google Cloud Storage.
    private string keyFilePath = @"path/to/service-account-key.json";
    private readonly string _bucketName = "Your Bucket name from Google Cloud Storage";
    private readonly StorageClient _storageClient;

    public HomeController()
    {
        // Load the service account credentials from the key file.
        var credentials = GoogleCredential.FromFile(keyFilePath);

        // Create a storage client with Application Default Credentials
        _storageClient = StorageClient.Create(credentials);
    }

```

3. Modify the `Download()` method to save the downloaded PDF files to the Google Cloud Storage bucket.

```csharp

    public ActionResult Download(jsonObjects jsonObject)
    {
        PdfRenderer pdfviewer = new PdfRenderer();
        var jsonData = JsonConverter(jsonObject);
        string documentBase = pdfviewer.GetDocumentAsBase64(jsonData);
        string bucketName = _bucketName;
        string fileName = jsonData["documentId"];

        // Convert the base64 string back to bytes
        string result = Path.GetFileNameWithoutExtension(fileName);
        byte[] documentBytes = Convert.FromBase64String(documentBase.Split(',')[1]);

        // Upload the document to Google Cloud Storage
        using (var memoryStream = new MemoryStream(documentBytes))
        {
            _storageClient.UploadObject(bucketName, result + "_downloaded.pdf", null, memoryStream);
        }
        return Content(documentBase);
    }
```

N> Replace the placeholder with the actual Google Cloud Storage bucket name.

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file.

**Step 5:** Set the PDF Viewer properties in the ASP.NET MVC PDF Viewer component

Set the `documentPath` property of the PDF Viewer component to the desired PDF file name that you wish to load from Google Cloud Storage. Ensure that the document exists in the target bucket.

```csharp

@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("PDF_Succinctly.pdf").Render()
    </div>
</div>

```

N> Install the **Google.Cloud.Storage.V1** NuGet package in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)
