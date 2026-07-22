---
layout: post
title: Save document to Box cloud file storage in React DOCX Editor | Syncfusion
description: Learn how to save a document to Box cloud file storage in the Syncfusion React Document Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Box cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Box cloud file storage using React DOCX Editor

To save a document to Box cloud file storage, you can follow the steps below.

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, you'll need a developer account with Box. Go to the [Box Developer Console](https://developer.box.com/), sign in or create a new account, and then create a new Box application. This application will provide you with the necessary credentials — Client ID and Client Secret — to authenticate and access Box APIs.

N> 1. Before accessing files, you need to authenticate your application to access your Box account. Box API supports `OAuth 2.0 authentication` for this purpose.
N> 2. After creating the Box application, grant it access to the specific folder where documents will be saved. In the Box Developer Console, navigate to your application's configuration and add the target folder under the authorized folders. This folder authorization is required for App Tokens/JWT authentication to access files.

**Step 2:** Create a Simple Document Editor sample in React

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in React. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
// Imports required for Box cloud file storage access
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
using System.IO;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

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

* Create the `SaveToBoxCloud()` method to save the downloaded document to Box cloud file storage bucket

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToBoxCloud")]
//Post action for uploading the document to Box

public async Task SaveToBoxCloud(IFormCollection data)
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
  "AccessToken": "Your_Box_Storage_Access_Token",
  "FolderID": "Your_Folder_ID",
  "ClientID": "Your_Box_Storage_ClientID",
  "ClientSecret": "Your_Box_Storage_ClientSecret"
}
```

N> replace **Your_Box_Storage_Access_Token** with your actual box access token, and **Your_Folder_ID** with the ID of the folder in your box storage where you want to perform specific operations. Remember to use your valid box API credentials, as **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret"** are placeholders for your application's API key and secret.

**Step 4:**  Modify the index File in the Document Editor sample

On the client side, export the document to a blob using [`saveAsBlob`](https://ej2.syncfusion.com/react/documentation/api/document-editor#saveAsBlob) and send it to the server side for saving in Box cloud file storage.

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
            'http://localhost:62870/api/documenteditor/SaveToBoxCloud',
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
            <button onClick={save}>Save to Box Cloud</button>
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

N> The **Box.V2.Core** NuGet package (version 5.x or later) must be installed in your application to use the previous code example.