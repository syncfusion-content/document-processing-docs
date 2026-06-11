---
layout: post
title: Opening PDF file in Blazor SfPdfViewer Component | Syncfusion
description: Learn how to load PDF files from various locations like database, cloud and remote URL in the Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF files in SfPdfViewer for Blazor from various storage locations

This article explains how to open and display PDF files in the SfPdfViewer component from multiple sources, including URL, cloud storage, database, local file system, Base64 string, and stream. The `DocumentPath` parameter accepts either a direct URL to the PDF file or a data URL that contains Base64-encoded PDF content.

## Opening a PDF from remote URL

If a PDF file is hosted on the web, it can be opened in the viewer by providing its URL to the DocumentPath parameter.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    public string DocumentPath { get; set; } = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
}

```

## Opening a PDF from cloud storage

Open PDF files stored in cloud storage by converting the file to a Base64 string and assigning it to `DocumentPath`.

The following code example shows how to open and load a PDF file stored in Azure Blob Storage.

```cshtml

@using Azure.Storage.Blobs
@using Azure.Storage.Blobs.Specialized
@using System.IO;
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%"></SfPdfViewer2>

@code {
    public string DocumentPath { get; set; }
    protected override void OnInitialized()
    {
        //Connection String of Storage Account
        string connectionString = "Here Place Your Connection string";
        BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
        //Container Name
        string containerName = "pdf-file";
        //File Name to be loaded into Syncfusion SfPdfViewer
        string fileName = "PDF_Succinctly.pdf";
        BlobContainerClient blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);
        BlockBlobClient blockBlobClient = blobContainerClient.GetBlockBlobClient(fileName);
        MemoryStream memoryStream = new MemoryStream();
        blockBlobClient.DownloadTo(memoryStream);
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(memoryStream.ToArray());
    }
}

```

N> The **Azure.Storage.Blobs** NuGet package must be installed in the application to use the previous code example. Configure credentials securely (for example, using configuration providers or managed identity) and ensure CORS is enabled on the storage account if the file is fetched from the browser.

```cshtml
@using Azure.Storage.Files.Shares
@using System.IO;
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Width="100%"
              Height="100%" />

@code {
    public string DocumentPath { get; set; } = "wwwroot/data/PDF_Succinctly.pdf";
    protected override void OnInitialized()
    {
        //Connection String of Storage Account
        string connectionString = "Here Place Your Connection string";
        string shareName = "pdfdocument";
        //File Name to be loaded into Syncfusion SfPdfViewer
        string filePath = "Hive_Succinctly.pdf";
        ShareFileClient shareFileClient = new ShareFileClient(connectionString, shareName, filePath);
        Stream stream = shareFileClient.OpenRead();
        byte[] bytes;
        using (var memoryStream = new MemoryStream())
        {
            stream.CopyTo(memoryStream);
            bytes = memoryStream.ToArray();
        }
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(bytes);
    }
}
```

N> The **Azure.Storage.Files.Shares** NuGet package must be installed in the application to use the previous code example. Use appropriate authentication (for example, SAS tokens or Azure AD) and configure network access as required.

## Opening a PDF from database

The following code example shows how to open a PDF file from a SQL Server database by reading the file as a byte array and assigning a Base64 data URL to DocumentPath.

```cshtml
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath" Width="100%" Height="100%" />

@code {
    public string DocumentPath { get; set; }
    protected override void OnInitialized()
    {
        string documentID = "PDF Succinctly";
        string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Database.mdf;";
        System.Data.SqlClient.SqlConnection connection = new System.Data.SqlClient.SqlConnection(connectionString);
        //Searches for the PDF document from the database
        string query = "select Data from Table where DocumentName = '" + documentID + "'";
        System.Data.SqlClient.SqlCommand command = new System.Data.SqlClient.SqlCommand(query, connection);
        connection.Open();
        System.Data.SqlClient.SqlDataReader read = command.ExecuteReader();
        read.Read();
        //Reads the PDF document data as byte array from the database
        byte[] byteArray = (byte[])read["Data"];
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(byteArray);
    }
}
```

Note: The System.Data.SqlClient package must be installed in the application to use the previous code example. For production scenarios, use parameterized queries and dispose database objects properly. Store connection strings securely (for example, appsettings.json or user secrets).

## Opening a PDF from file system

The built-in toolbar includes an Open option that loads a PDF from the local file system. To replicate this behavior in a custom toolbar, the following example uses the Syncfusion Uploader component to obtain a file and then loads it in the viewer. Ensure the application processes the file content correctly (for example, reading the stream and converting to a Base64 data URL) before assigning it to the viewer.

```cshtml

@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.SfPdfViewer

<SfUploader ID="UploadFiles" AllowedExtensions=".pdf,.PDF">
    <UploaderEvents OnUploadStart="onsuccess"></UploaderEvents>
    <UploaderAsyncSettings SaveUrl="https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save" 
    RemoveUrl="https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove">
    </UploaderAsyncSettings>
</SfUploader>

<SfPdfViewer2 @ref="@Viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2 Viewer;
    public async void onsuccess(UploadingEventArgs action)
    {
        string filePath = action.FileData.RawFile.ToString();
        await Viewer.LoadAsync(filePath, null);
    }
}

```

## Opening a PDF from base64 data

The following code snippet shows how to load a PDF in SfPdfViewer using a Base64 string by assigning a data URL to DocumentPath. Large files encoded as Base64 increase memory usage; consider using a URL for very large documents.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 ID="viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    static byte[] byteArray = System.IO.File.ReadAllBytes("wwwroot/Data/PDF_Succinctly.pdf");
    static string base64String = Convert.ToBase64String(byteArray);
    public string DocumentPath { get; set; } = "data:application/pdf;base64," + base64String;
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20a%20PDF%20file%20from%20base%2064%20string)

## Opening a PDF from stream

Load a PDF from a stream by converting it to a Base64 string and assigning it to DocumentPath. This approach is useful when the file originates from an API or in-memory source.

```cshtml

@using Syncfusion.Blazor.SfPdfViewer
@using System.IO;

<SfPdfViewer2 ID="viewer"
              DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code{

    public string DocumentPath { get; set; }
    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Data/PDF_Succinctly.pdf";
        FileStream fileStream = new FileStream(filePath, System.IO.FileMode.Open, System.IO.FileAccess.Read);
        MemoryStream stream = new MemoryStream();
        fileStream.CopyTo(stream);
        byte[] byteArray = stream.ToArray();
        string base64String = Convert.ToBase64String(byteArray);
        DocumentPath = "data:application/pdf;base64," + base64String;
    }

}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Load%20a%20PDF%20file%20from%20memory%20stream)

## See also

* [How to save PDF file](./saving-pdf-file)