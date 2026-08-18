---
layout: post
title: Save to Google Drive in ASP.NET Core DOCX Editor | Syncfusion
description: Save documents to Google Drive from ASP.NET Core DOCX Editor, enabling cloud storage integration and streamlined document management.
platform: document-processing
control: Save document to Google Drive
documentation: ug
domainurl: ##DomainURL##
---

# Save Documents to Google Drive in ASP.NET Core DOCX Editor

To save a document to Google Drive, follow these steps:

**Step 1:** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, refer to the official [Enable the Drive API](https://developers.google.com/drive/api/guides/enable-sdk) guide.


**Step 2:** Create a Simple Document Editor Sample in ASP.NET Core

Follow the steps in this [link](../../document-editor/getting-started-core) to create a simple Document Editor sample in ASP.NET Core. This will give you a basic setup of the Document Editor component.


**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

* Add the following private fields and a constructor to the `DocumentEditorController` class. In the constructor, assign the configuration values to the corresponding fields.

```csharp
private IWebHostEnvironment _hostingEnvironment;
private IMemoryCache _cache;
private IConfiguration _configuration;
public readonly string folderId;
public readonly string applicationName;
public readonly string credentialPath;
private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly};

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderId = _configuration.GetValue<string>("FolderId");
  credentialPath = _configuration.GetValue<string>("CredentialPath");
  applicationName = _configuration.GetValue<string>("ApplicationName");
}
```

* Create the `SaveToGoogleDrive()` method to save the document to Google Drive

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToGoogleDrive")]
//Post action for saving the document to Google Drive

public void SaveToGoogleDrive(IFormCollection data)
{
   if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.docx";
          
  UserCredential credential;

  using (var memStream = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
  {
    string credPath = "token.json";
    credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
    GoogleClientSecrets.Load(memStream).Secrets,
    Scopes,
    "user",
     CancellationToken.None,
    new FileDataStore(credPath, true));
  }

  // Create the Drive API service.
  var service = new DriveService(new BaseClientService.Initializer()
  {
    HttpClientInitializer = credential,
    ApplicationName = applicationName,
  });

  var fileMetadata = new Google.Apis.Drive.v3.Data.File()
  {
    Name = fileName,
    Parents = new List<string> { folderId }
  };

  Stream stream = new MemoryStream();
  file.CopyTo(stream);
  stream.Position = 0;

  FilesResource.CreateMediaUpload request;
  request = service.Files.Create(fileMetadata, stream, "application/pdf");
  request.Fields = "id";
  object value = await request.UploadAsync();
}
```

* Add the following helper method `GetValue` to the `DocumentEditorController` class to read form values from the posted data

```csharp
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
  "FolderId": "Your Google Drive Folder ID",
  "CredentialPath": "Your Path to the OAuth 2.0 Client IDs json file",
  "ApplicationName": "Your Application name"
}
```

N> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google Drive folder ID, your application name, and the path to the JSON file.

N> The **FolderId** is the unique identifier for the folder. For example, if your folder URL is `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

N> The JSON file (`credentials.json`) downloaded from the Google Cloud Console contains your OAuth 2.0 **Client ID** and **Client Secret**. Use these credentials to interface your application with the Google Drive API.

**Step 4:**  Modify the Index.cshtml File in the Document Editor sample

On the client side, export the document to a blob using `saveAsBlob` and send it to the server for saving in Google Drive.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-google-drive/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/save-google-drive/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> The **Google.Apis.Drive.v3** NuGet package must be installed in your web service project to use the code above.
