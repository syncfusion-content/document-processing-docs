---
layout: post
title: Save document to Dropbox cloud file storage in React DOCX Editor | Syncfusion
description: Learn how to save a document to Dropbox cloud file storage in the Syncfusion React Document Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Dropbox cloud file storage using React DOCX Editor

To save a document to Dropbox cloud file storage, you can follow the steps below.

**Step 1:** Create a Dropbox API app

To create a Dropbox API App, you should follow the official [Dropbox .NET tutorial](https://www.dropbox.com/developers/documentation/dotnet#tutorial) provided by Dropbox. The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

N> 1. In the Dropbox App Console, configure your app's permissions/scopes to grant folder access (e.g., `files.content.write`) required for uploading files. Without these scopes, the upload will fail with a permission error.
N> 2. Generate the **Access Token** from the App Console after creating your app. For production use, use the OAuth 2.0 authorization flow to obtain tokens dynamically. Refer to the [Dropbox .NET tutorial](https://www.dropbox.com/developers/documentation/dotnet#tutorial) for details.

**Step 2:** Create a Simple Document Editor sample in React

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in React. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

* Create the `SaveToDropBox()` method to save the downloaded document to Dropbox cloud file storage bucket

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToDropBox")]
//Post action for uploading the document to Dropbox

public async Task SaveToDropBox(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.docx";

  using (var dropBox = new DropboxClient(_accessToken))
  {
    Stream stream = new MemoryStream();
    try
    {
      file.CopyTo(stream);
      stream.Position = 0;

      // Upload the document to Dropbox
      var uploadedFile = await dropBox.Files.UploadAsync(
        _folderName + "/" + fileName,
        WriteMode.Overwrite.Instance,
        body: stream
      );
    }
    catch (Exception ex)
    {
      // Log or handle the upload failure (e.g., invalid token, folder not found, permission denied)
      throw;
    }
    finally
    {
      stream.Dispose();
    }
  }
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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.
N> The **Dropbox.Api** NuGet package (version 7.x or later) must be installed in your application to use the previous code example.

**Step 4:**  Modify the index File in the Document Editor sample

On the client side, export the document to a blob using [`saveAsBlob`](https://ej2.syncfusion.com/react/documentation/api/document-editor#saveAsBlob) and send it to the server side for saving in Dropbox cloud file storage.

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
            'http://localhost:62870/api/documenteditor/SaveToDropBox',
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
    }).catch((error: any) => {
        console.error('Error saving document:', error);
    });
}
    return (
        <div>
            <button onClick={save}>Save to Dropbox Cloud</button>
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