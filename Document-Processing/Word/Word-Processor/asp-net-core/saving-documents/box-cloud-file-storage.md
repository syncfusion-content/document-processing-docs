---
layout: post
title: Save to Box cloud file storage in DOCX Editor | Syncfusion
description:  Learn about how to Save document to Box cloud file storage in ASP.NET Core Document Editor component of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Box cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Box cloud file storage in Document Editor Component

To save a document to Box cloud file storage, follow these steps:

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, you'll need a developer account with Box. Go to the [Box Developer Console](https://developer.box.com/guides), sign in or create a new account, and then create a new Box application. This application will provide you with the necessary credentials Client ID and Client Secret to authenticate and access Box APIs. Before accessing files, you need to authenticate your application to access your Box account. Box API supports OAuth 2.0 authentication for this purpose.


**Step 2:** Create a Simple Document Editor Sample in ASP.NET Core

Follow the steps in this [link](../../document-editor/getting-started-core) to create a simple Document Editor sample in ASP.NET Core. This will give you a basic setup of the Document Editor component.


**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.IO;
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
```

* Add the following private fields and a constructor to the `DocumentEditorController` class. In the constructor, assign the configuration values to the corresponding fields.

```csharp
private IWebHostEnvironment _hostingEnvironment;
private IMemoryCache _cache;
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _clientID;
public readonly string _clientSecret;
public readonly string _folderID;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _clientID = _configuration.GetValue<string>("ClientID");
  _clientSecret = _configuration.GetValue<string>("ClientSecret");
  _folderID = _configuration.GetValue<string>("FolderID");
}
```

* Create the `SaveToBoxCloud()` method to save the document to the Box cloud file storage

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToBoxCloud")]
//Post action for saving the document to Box cloud file storage

public void SaveToBoxCloud(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);

  // Initialize the Box API client with your authentication credentials
  var auth = new OAuthSession(_accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
  var config = new BoxConfigBuilder(_clientID, _clientSecret, new Uri("http://boxsdk")).Build();
  var client = new BoxClient(config, auth);

  var fileRequest = new BoxFileRequest
  {
    Name = result + "_downloaded.docx",
    Parent = new BoxFolderRequest { Id = _folderID },
  };

  Stream stream = new MemoryStream();
  file.CopyTo(stream);
  stream.Position = 0;

  var boxFile = await client.FilesManager.UploadAsync(fileRequest, stream);
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

* Open the `appsettings.json` file in your web service project. Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AccessToken": "Your_Box_Storage_Access_Token",
  "FolderID": "Your_Folder_ID",
  "ClientID": "Your_Box_Storage_ClientID",
  "ClientSecret": "Your_Box_Storage_ClientSecret"
}
```

N> Replace **Your_Box_Storage_Access_Token** with your actual Box access token, and **Your_Folder_ID** with the ID of the folder in your Box storage where you want to perform specific operations. Remember to use your valid Box API credentials, as **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret** are placeholders for your application's API key and secret.

**Step 4:**  Modify the Index.cshtml File in the Document Editor sample

On the client side, export the document to a blob using `saveAsBlob` and send it to the server for saving in Box cloud file storage.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-box-cloud-file-storage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-box-cloud-file-storage/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> The **Box.V2.Core** NuGet package must be installed in your web service project to use the code above.
