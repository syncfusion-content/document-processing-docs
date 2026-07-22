---
layout: post
title: Save document to Google Cloud Storage in React DOCX Editor | Syncfusion
description: Learn how to save a document to Google Cloud Storage in the Syncfusion React Document Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to Google Cloud Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Google Cloud Storage

To save a document to Google Cloud Storage, you can follow the steps below.

**Step 1:** Create a Simple [React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) sample in React

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in React. This will give you a basic setup of the Document Editor component.

**Step 2:** Create the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IConfiguration _configuration;

public readonly string _bucketName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

  // Create a storage client with Application Default Credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

   _bucketName = _configuration.GetValue<string>("BucketName");
}
```

* Create the `SaveToGoogleCloud()` method to save the downloaded document to Google Cloud Storage bucket

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToGoogleCloud")]
//Post action for uploading the document to Google Cloud Storage
public void SaveToGoogleCloud(IFormCollection data)
{
   if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);

  string bucketName = _bucketName;

  Stream stream = new MemoryStream();
  try
  {
    file.CopyTo(stream);
    stream.Position = 0;

    // Upload the document to Google Cloud Storage
    _storageClient.UploadObject(bucketName, result + "_downloaded.docx", null, stream);
  }
  catch (Exception ex)
  {
    // Log or handle the upload failure (e.g., invalid credentials, bucket not found, permission denied)
    throw;
  }
  finally
  {
    stream.Dispose();
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket.

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 4:**  Modify the index File in the Document Editor sample

On the client side, export the document to a blob using [`saveAsBlob`](https://ej2.syncfusion.com/react/documentation/api/document-editor#saveAsBlob) and send it to the server side for saving in Google Cloud Storage.

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
            'http://localhost:62870/api/documenteditor/SaveToGoogleCloud',
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
            <button onClick={save}>Save to Google Cloud</button>
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

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.