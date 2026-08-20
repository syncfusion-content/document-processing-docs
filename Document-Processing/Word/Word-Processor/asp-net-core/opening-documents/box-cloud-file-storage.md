---
layout: post
title: Open Documents from Box Cloud in ASP.NET Core DOCX Editor | Syncfusion
description: Open documents from Box cloud file storage in ASP.NET Core DOCX Editor, enabling secure cloud storage integration and document access.
platform: document-processing
control: Open document from Box cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Open Documents from Box Cloud File Storage in ASP.NET Core DOCX Editor

To load a document from Box cloud file storage in a [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor), you can follow the steps below.

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, a Box developer account is required. Go to the [Box Developer Console](https://developer.box.com/guides), sign in or create a new account, and then create a new Box application. This application provides the necessary credentials — Client ID and Client Secret — to authenticate and access Box APIs. Before accessing files, the application must be authenticated to access your Box account. Box uses OAuth 2.0 for authentication.


**Step 2:** Create a Simple Document Editor Sample in ASP.NET Core

Start by following the steps provided in this [link](../../document-editor/getting-started-core) to create a simple Document Editor sample in ASP.NET Core. This will give you a basic setup of the Document Editor component. 


**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the configuration values to the corresponding fields.

```csharp
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

* Create the `LoadFromBoxCloud()` method to load the document from Box cloud file storage.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromBoxCloud")]
//Post action for Loading the documents

public async Task<string> LoadFromBoxCloud([FromBody] Dictionary<string, string> jsonObject)
{
    if (jsonObject == null && !jsonObject.ContainsKey("documentName"))
    {
      return null;
    }
    MemoryStream stream = new MemoryStream();
    // Initialize the Box API client with your authentication credentials
    var auth = new OAuthSession(_accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
    var config = new BoxConfigBuilder(_clientID, _clientSecret, new Uri("http://boxsdk")).Build();
    var client = new BoxClient(config, auth);

    // Download the file from Box storage
    var items = await client.FoldersManager.GetFolderItemsAsync(_folderID, 1000, autoPaginate: true);
    var files = items.Entries.Where(i => i.Type == "file");

    // Filter the files based on the objectName
    var matchingFile = files.FirstOrDefault(file => file.Name == objectName);

    // Fetch the file from Box storage by its name
    var fileStream = await client.FilesManager.DownloadAsync(matchingFile.Id);
    stream = new MemoryStream();
    await fileStream.CopyToAsync(stream);

    // Reset the position to the beginning of the stream
    stream.Position = 0;

    WordDocument document = WordDocument.Load(stream, FormatType.Docx);
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    document.Dispose();
    stream.Close();
    return json;
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
  "AccessToken": "Your_Box_Storage_Access_Token",
  "FolderID": "Your_Folder_ID",
  "ClientID": "Your_Box_Storage_ClientID",
  "ClientSecret": "Your_Box_Storage_ClientSecret"
}
```

N> Replace **Your_Box_Storage_Access_Token** with your actual Box access token, and **Your_Folder_ID** with the ID of the folder in your Box storage where you want to perform specific operations. Remember to use your valid Box API credentials, as **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret** are placeholders for your application's API key and secret, respectively.

**Step 4:**  Modify the Index.cshtml File in the Document Editor sample

On the client side, the document returned from the web service is opened using the `open` method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/open-box-cloud-file-storage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/open-box-cloud-file-storage/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> The **Box.V2.Core** NuGet package must be installed in your application to use the previous code example.
