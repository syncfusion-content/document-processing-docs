---
layout: post
title: Open PDF from Azure Active Directory in React PDF Viewer | Syncfusion
description: Learn how to load and save PDFs using Azure Active Directory (AAD) with the Syncfusion React PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Open PDF from Azure Active Directory

### Overview

The React PDF Viewer component supports loading and saving PDF files with Azure Active Directory (AAD). The following steps explain how to securely load and store PDFs using AAD.

### Steps to open a PDF from Azure Active Directory

---

### Step 1: Register an application in Azure Active Directory (AAD)

1. **Go to the Azure Portal**:
   - Navigate to [Azure Portal](https://portal.azure.com).

2. **Register your Application**:
   - In the Azure portal, go to **Azure Active Directory** > **App registrations** > **New registration**.
   - Register your application and note down the **Application (client) ID** and **Directory (tenant) ID**.

   ![app-registration](../images/app-registration.png)

3. **Create a Client Secret**:
   - In the registered application, go to **Certificates & secrets**.
   - Click **New client secret**.
   - Provide a description and set an expiration period.
   - Click **Add**.
   - Copy the client secret value immediately, as it will be hidden later. Store it securely.

   ![client-secret](../images/client-secret.png)

---

### Step 2: Create the Azure Storage account

1. **Create a Storage Account**:
   - In the Azure portal, use the search bar to search for **Storage accounts**.
   - Create a new storage account by filling in the required details (e.g., name, location, resource group, etc.).

    ![storage-account](../images/storage-account.png)

---

### Step 3: Assign a role to the application

1. **Go to your Storage Account**:
   - Navigate to **Access control (IAM)** > **Add role assignment** in your Azure Storage Account.

2. **Assign Role**:
   - Assign the **Storage Blob Data Contributor** role to your registered application.
   - In the **Assign access to** dropdown, select **User, group, or service principal**.
   - Click on **Select members** and search for your registered application by name or client ID.
   - Select your application and click **Select**.
   - Click **Review + assign** to finalize the role assignment.

    ![add-role](../images/add-role.png)
---

### Step 4: Upload the PDF to Azure Storage

1. **Navigate to Data Storage**:
   - In the Azure portal, go to **Data storage** > **Containers**.

2. **Upload the PDF File**:
   - Create a new container and upload the PDF document you want to access in the PDF Viewer.

    ![upload-pdf](../images/upload-pdf.png)
---

### Step 5: Server-side configuration

1. **Configure Server-Side Code**:
   - Open the server-side application (e.g., ASP.NET Core) and configure the following details in the `PdfViewerController` file:
     - `tenantId` (your Azure AD tenant ID),
     - `clientId` (your registered application client ID),
     - `clientSecret` (your registered application client secret),
     - `blobServiceEndpoint` (your storage account blob service URL),
     - `containerName` (your container name in Azure Blob Storage).

2. **Run the Web Service**:
   - After configuring the necessary details, run the web service to make it accessible.

---

### Step 6: Client-side configuration

1. **Run the React sample**:
   - Start the React sample that includes the Syncfusion PDF Viewer.

2. **Load PDF from AAD**:
   - When the user clicks the **Load from AAD** button, the React client will make an HTTP request to the server-side API to fetch the PDF from Azure Blob Storage.
   - The server will retrieve the PDF from Azure, convert it to a base64 string, and return it to the client.

3. **Display PDF in the PDF Viewer**:
   - Once the base64 string is received, the PDF Viewer will load the PDF using the `viewer.load()` method.

---

### Step 7: Save the PDF to Azure

1. **Save PDF to AAD**:
   - The user can click the **Save to AAD** button to upload any modifications to the PDF back to Azure Blob Storage.
   - This action sends the modified PDF to the server, where it is converted into a byte array and saved to the specified Azure Blob container.

---

### Server-side code
```cs
string tenantId = "Provide the tenant id here";
string clientId = "Provide the clientid here";
string clientSecret = "Provide the client secret here";
string blobServiceEndpoint = "https://your-storage-account.blob.core.windows.net";
string containerName = "Provide the container name here";



[HttpPost("LoadFromAAD")]
[Route("[controller]/LoadFromAAD")]
public async Task<IActionResult> LoadFromAAD(string fileName)
{
    var clientSecretCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    var blobServiceClient = new BlobServiceClient(new Uri(blobServiceEndpoint), clientSecretCredential);
    var containerClient = blobServiceClient.GetBlobContainerClient(containerName);
    var blobClient = containerClient.GetBlobClient(fileName);

    // Download the PDF file to a local stream
    using MemoryStream pdfStream = new MemoryStream();
    await blobClient.DownloadToAsync(pdfStream);
    var base64 = Convert.ToBase64String(pdfStream.ToArray());
    return Content("data:application/pdf;base64," + base64);
}

[AcceptVerbs("SaveToAAD")]
[HttpPost("SaveToAAD")]
[Route("[controller]/SaveToAAD")]
public async Task<IActionResult> SaveToAAD([FromBody] Dictionary<string, string> jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    var fileName = jsonObject.ContainsKey("documentId") ? jsonObject["documentId"] : "Test.pdf";
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
    string convertedBase = documentBase.Substring(documentBase.LastIndexOf(',') + 1);
    // Decode the Base64 string to a byte array
    byte[] byteArray = Convert.FromBase64String(convertedBase);
    // Create a MemoryStream from the byte array
    MemoryStream stream = new MemoryStream(byteArray);
    // Create a new BlobServiceClient using the DefaultAzureCredential
    var clientSecretCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    var blobServiceClient = new BlobServiceClient(new Uri(blobServiceEndpoint), clientSecretCredential);
    // Get a reference to the container
    var containerClient = blobServiceClient.GetBlobContainerClient(containerName);
    // Get a reference to the blob
    var blobClient = containerClient.GetBlobClient(fileName);
    //FileStream uploadFileStream = new FileStream();
    await blobClient.UploadAsync(stream, true);
    stream.Close();
    return Content(string.Empty);
}

```



### Client-side code

{% raw %}
```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

export function App() {


  var toolItem1 = {
    text: 'LoadFromAAD',
    id: 'loadFromAAD',
    tooltipText: 'Custom toolbar item',
};
var toolItem2  = {
    id: 'saveToAAD',
    text: 'SaveToAAD',
    tooltipText: 'Custom toolbar item',
    align: 'left'
};

  function toolbarClick(args){
    var viewer = document.getElementById('container').ej2_instances[0];
    if (args.item && args.item.id === 'loadFromAAD') {
        // Handle 'Load From AAD' logic
        var xhr = new XMLHttpRequest();
        xhr.open('POST', `https://localhost:44308/pdfviewer/LoadFromAAD?fileName=pdf-succinctly.pdf`, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            console.log(data); // Handle the response
            viewer.load(data); // Load the document
          }
        };
        xhr.send();
      } else if (args.item && args.item.id === 'saveToAAD') {
        // Handle 'Save To AAD' logic
        viewer.serverActionSettings.download = "SaveToAAD";
        viewer.download(); // Trigger download
      }
    };
return (<div>
    <div className='control-section'>
        <PdfViewerComponent
            id="container"
            documentPath=""
            serviceUrl="https://localhost:44308/pdfviewer"
            toolbarSettings={{ showTooltip : true, toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
            toolbarClick={toolbarClick}
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}


[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aad).