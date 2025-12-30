---
layout: post
title: Save document to One Drive Document editor | Syncfusion
description:  Learn about how to Save document to One Drive in ASP.NET Core Document editor control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to One Drive
documentation: ug
domainurl: ##DomainURL##
---

# Save document to One Drive in ASP.NET Core

To save a document to One Drive, you can follow the steps below

**Step 1:** Create the Microsoft graph API.

Need to create a Microsoft Graph API application and obtain the necessary credentials, namely the application ID and tenant ID. Follow the steps provided in the [link](https://learn.microsoft.com/en-us/training/modules/msgraph-access-file-data/3-exercise-access-files-onedrive) to create the application and obtain the required IDs. 


**Step 2:** Create a Simple Document Editor Sample in ASP.NET Core

Start by following the steps provided in this [link](../../document-editor/getting-started-core) to create a simple Document Editor sample in ASP.NET Core. This will give you a basic setup of the Document Editor component. 


**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Helpers;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string folderName;
public readonly string applicationId;
public readonly string tenantId;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderName = _configuration.GetValue<string>("FolderName");
  tenantId = _configuration.GetValue<string>("TenantId");
  applicationId = _configuration.GetValue<string>("ApplicationId");
}
```

* Create the `SaveToOneDrive()` method to save the downloaded document to One Drive bucket

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToOneDrive")]
//Post action for downloading the document

public void SaveToOneDrive(IFormCollection data)
{

  if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.docx";

  Stream stream = new MemoryStream();
  file.CopyTo(stream);
  

  var config = LoadAppSettings();
  var client = GetAuthenticatedGraphClient(config);

  var request = client.Me.Drive.Root.Children.Request();
  string folderId = string.Empty;
  var results = await request.GetAsync();

  var folder = results.FirstOrDefault(f => f.Name == folderName && f.Folder != null);
  if (folder != null)
  {
    // Save the matching folderId
    folderId = folder.Id;
  }

  var uploadedFile = client.Me.Drive.Items[folderId]
                     .ItemWithPath(fileName)
                     .Content
                     .Request()
                     .PutAsync<DriveItem>(stream)
                     .Result;

}

private string GetValue(IFormCollection data, string key)
{
    if (data.ContainsKey(key))
    {
        string[] values = data[key];
        if (values.Length > 0)
        {
            return values[0];
        }
    }
    return "";
}
```

* Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "TenantId": "Your_Tenant_ID",
  "applApplicationIdicationId": "Your_Application_ID",
  "FolderName": "Your_Folder_Name_To_Access_The_Files_In_Onedrive"
}

```

N> Replace **Your_Tenant_ID**, **Your_Application_ID**, and **Your_Folder_Name_To_Access_The_Files_In_OneDrive** with your actual tenant ID, application ID, and folder name.

**Step 4:**  Modify the Index.cshtml File in the Document Editor sample

In the client-side, to export the document into blob the document using `saveAsBlob` and sent to server-side for saving in One Drive.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-one-drive/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-one-drive/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> The following NuGet packages are required to use the previous code example
* **Microsoft.Identity.Client**
* **Microsoft.Graph**
* **Microsoft.Extensions.Configuration**
* **Microsoft.Extensions.Configuration.FileExtensions**
* **Microsoft.Extensions.Configuration.Json**

You can install these packages using the NuGet Package Manager in Visual Studio or Visual Studio Code.
