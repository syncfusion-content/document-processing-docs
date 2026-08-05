---
layout: post
title: Save document to OneDrive in Angular DOCX Editor | Syncfusion
description: Learn how to save a document to OneDrive in the Syncfusion Angular Document Editor of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Save document to OneDrive
documentation: ug
domainurl: ##DomainURL##
---

# Save document to OneDrive in Angular Document Editor

To save a document to OneDrive, you can follow the steps below.

**Step 1:** Create the Microsoft Graph API.

You must create a Microsoft Graph API application and obtain the necessary credentials, namely the application ID and tenant ID. Follow the steps provided in the [link](https://learn.microsoft.com/en-us/training/modules/msgraph-access-file-data/3-exercise-access-files-onedrive) to create the application and obtain the required IDs.

**Step 2:** Create a Simple Angular Document Editor sample in Angular

Follow the instructions provided in this [link](../getting-started) to create a simple Document Editor sample in Angular. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Helpers;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class. In the constructor, assign the values from the configuration to the corresponding fields.

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

* Create the `SaveToOneDrive()` method to save the downloaded document to OneDrive.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToOneDrive")]
//Post action for uploading the document to OneDrive

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
  "TenantId": "Your_Tenant_ID",
  "applApplicationIdicationId": "Your_Application_ID",
  "FolderName": "Your_Folder_Name_To_Access_The_Files_In_Onedrive"
}
```

N> Replace **Your_Tenant_ID**, **Your_Application_ID**, and **Your_Folder_Name_To_Access_The_Files_In_OneDrive** with your actual tenant ID, application ID, and folder name.

**Step 4:**  Modify the index File in the Document Editor sample

On the client side, export the document to a blob using [`saveAsBlob`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#saveasblob) and send it to the server side for saving in OneDrive.

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DocumentEditorContainerComponent,
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<button ejs-button (click)="save()" >Save to OneDrive</button><ejs-documenteditorcontainer #documenteditor_default serviceUrl="http://localhost:62870/api/documenteditor/" height="600px" style="display:block" (created)="onCreate()" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}

   public save(): void {
        //Export the document as Blob object.
        this.container.documentEditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
          //Now, save the document wherever you want.
          let formData: FormData = new FormData();
          formData.append('documentName', this.container.documentEditor.documentName);
          formData.append('file', exportedDocument);
          /* tslint:disable */
          let req = new XMLHttpRequest();
          // Replace your running URL here
          req.open(
              'POST',
              'http://localhost:62870/api/documenteditor/SaveToOneDrive',
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
}
```

N> The following NuGet packages are required to use the previous code example:
* **Microsoft.Identity.Client**
* **Microsoft.Graph**
* **Microsoft.Extensions.Configuration**
* **Microsoft.Extensions.Configuration.FileExtensions**
* **Microsoft.Extensions.Configuration.Json**

You can install these packages using the NuGet Package Manager in Visual Studio or Visual Studio Code.