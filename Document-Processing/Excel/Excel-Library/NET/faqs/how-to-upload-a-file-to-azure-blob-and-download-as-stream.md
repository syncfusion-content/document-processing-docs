---
title: Upload a file to Azure blob and download as stream | Syncfusion
description: Explains how to upload an Excel file to Azure Blob Storage from an Azure Function, download it as a stream, and open it with XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to upload a file to Azure blob and download as stream?

The following code snippet shows how to upload an Excel file to Azure blob and download it as stream.

## Prerequisites

Before running the code example, make sure the following are in place:

* An Azure subscription and a **Storage account** (Azure portal → Storage accounts → Create). Note the account name and either an access key or a SAS token.
* A **container** in the storage account (Azure portal → Storage account → Containers → Create).
* Install the following NuGet packages:
  * [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) (or a platform-specific XlsIO package)
  * [Azure.Storage.Blobs](https://www.nuget.org/packages/Azure.Storage.Blobs)
  * [Microsoft.Azure.WebJobs](https://www.nuget.org/packages/Microsoft.Azure.WebJobs) (for `FunctionName`, `HttpTrigger`, `IActionResult`, `ILogger`)
  * [Microsoft.Azure.WebJobs.Extensions.Http](https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.Http) (for the HTTP trigger binding)
* Set the storage account name and key in the function app's configuration (Azure portal → Function App → Configuration → Application settings, or `local.settings.json` for local development). The example reads them as `AZURE_STORAGE_ACCOUNT` and `AZURE_STORAGE_KEY` environment variables.
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Place a `Sample.xlsx` file alongside the function so it can be opened by the upload step (or change the path in the code to a file of your choice).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
public static class Function1
{
  [FunctionName("Function1")]
  public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, ILogger log)
  {
    using FileStream uploadFileStream = File.OpenRead("Sample.xlsx");

    var accountName = "Account Name";
    var accountKey = "Account Key";

    StorageSharedKeyCredential sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

    string blobUri = "https://" + accountName + ".blob.core.windows.net";

    BlobServiceClient blobServiceClient = new BlobServiceClient(new Uri(blobUri), sharedKeyCredential);

    BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("Container Name");

    var filename = "AzureFile_Upload.xlsx";

    BlobClient blobClientUpload = containerClient.GetBlobClient(filename);
    await blobClientUpload.UploadAsync(uploadFileStream, true);

    MemoryStream readStream = new MemoryStream();
    BlobClient blobClientRead = containerClient.GetBlobClient(filename);
    await blobClientRead.DownloadToAsync(readStream);

    readStream.Position = 0;

    FileStream outputStream = new FileStream("Output.xlsx", FileMode.Create, FileAccess.Write);
    readStream.CopyTo(outputStream);

    return new OkObjectResult("done");
  }
}
{% endhighlight %}
{% endtabs %}
