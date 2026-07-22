---
layout: post
title: Save document to Google Drive in React DOCX Editor | Syncfusion
description: Learn how to save a document to Google Drive in the Syncfusion React DOCX Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Google Drive
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Google Drive

To save a document to Google Drive, you can follow the steps below.

**Step 1:** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

* Configure the OAuth consent screen and add the authorized redirect URIs and scopes. For more information, refer to the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

* Download the OAuth 2.0 Client IDs credentials JSON file from the Google Cloud Console and save it locally. Save the path to this file for use in the `appsettings.json` configuration.

**Step 2:** Create a Simple Document Editor sample in React

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in React. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp
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

* Create the `SaveToGoogleDrive()` method to save the downloaded document to Google Drive.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToGoogleDrive")]
//Post action for uploading the document to Google Drive

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

  FilesResource.CreateMediaUpload request;
  request = service.Files.Create(fileMetadata, stream, "application/pdf");
  request.Fields = "id";
  object value = await request.UploadAsync();
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

* Open the `appsettings.json` file in your web service project. Add the following lines below the existing `"AllowedHosts"` configuration.

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

N> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google Drive folder ID, your name for your application, and the path for the JSON file.

N> 1. The **FolderId** is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.
N> 2. The `CredentialPath` value in `appsettings.json` must point to the full OAuth 2.0 Client IDs credentials JSON file downloaded from the Google Cloud Console. This JSON file contains the unique `Client_ID` and `Client_Secret` used by `GoogleClientSecrets.Load(memStream)` to authenticate with the Google Drive API and securely save files.

N> The **Google.Apis.Drive.v3** (v1.68.0.XXXX or later) NuGet package must be installed in your application to use the previous code example.

**Step 4:**  Modify the index File in the Document Editor sample

On the client side, export the document to a blob using [`saveAsBlob`](https://ej2.syncfusion.com/react/documentation/api/document-editor#saveAsBlob) and send it to the server side for saving in Google Drive.

```typescript
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    async function save(): Promise<void> {
    container.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
        let exportedDocument = blob;
        //Now, save the document where ever you want.
        let formData: FormData = new FormData();
        formData.append('documentName', container.documentEditor.documentName);
        formData.append('data', exportedDocument);
        /* tslint:disable */
        let req = new XMLHttpRequest();
        // Replace your running Url here
        req.open(
            'POST',
            'http://localhost:62870/api/documenteditor/SaveToGoogleDrive',
            true
        );
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200 || req.status === 304) {
                    console.log('Saved successfully');
                }
            }
        };
        req.send(formData);
    });
}
    return (
        <div>
            <button onClick={save}>Save to Google Drive</button>
            <DocumentEditorContainerComponent id="container" ref={(scope) => { container = scope; }}
                height={'590px'}
                serviceUrl="http://localhost:62870/api/documenteditor/"
                enableToolbar={true}
            />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```