---
layout: post
title: PDF Viewer Server Docker Image in Typescript | Syncfusion
description: Learn here all about Pdfviewer server docker image overview in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Pdfviewer server docker image overview
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---
# Pdfviewer server docker image overview in Typescript Pdfviewer control

The Syncfusion PDF Viewer control allows you to view, print, form-fill, and annotate PDF files in your web applications. This PDF Viewer control requires a server-side backend Web API service to render PDF contents.

This Docker image is the predefined Docker container of Syncfusion’s PDF Viewer backend. You can deploy it quickly to your infrastructure.

PDF Viewer is a commercial product, and it requires a valid license to use it in a production environment [`(request license or trial key).`](https://help.syncfusion.com/common/essential-studio/licensing/licensing-faq/where-can-i-get-a-license-key)

PDF Viewer control is supported in the JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC, and Blazor platforms.

## Prerequisites

Have [`Docker`](https://www.docker.com/products/container-runtime/#/download) installed in your environment:

* On Windows, install [`Docker for Windows`](https://hub.docker.com/editions/community/docker-ce-desktop-windows).

* On macOS, install [`Docker for Mac`](https://hub.docker.com/editions/community/docker-ce-desktop-windows).

## How to use this PDF Viewer Docker image

**Step 1:** Pull the pdfviewer-server image from Docker Hub.

```console
docker pull syncfusion/pdfviewer-server
```

**Step 2:** Create the docker-compose.yml file with the following code in your file system.

```yaml
version: '3.4'

services:
  pdfviewer-server:
    image: syncfusion/pdfviewer-server:latest
    environment:
      #Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
    ports:
    - "6001:80"
```

**Step 3:** In a terminal tab, navigate to the directory where you’ve placed the docker-compose.yml file and execute the following.

```console
docker-compose up
```

Also, you can run the Docker container along with the license key using this docker run command.

```console
docker run -d -p 6001:80 –e SYNCFUSION_LICENSE_KEY= YOUR_LICENSE_KEY syncfusion/pdfviewer-server:latest
```

Now the PDF Viewer server Docker instance runs in the localhost with the provided port number `http://localhost:6001`. Open this link in the browser and navigate to the PDF Viewer Web API control `http://localhost:6001/api/pdfviewer`. It returns the default get method response.

**Step 4:** Append the Docker instance running the URL `(http://localhost:6001/api/pdfviewer)` to the service URL in the client-side PDF Viewer control. For more information about how to get started with PDF Viewer control, refer to this [`getting started page`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/?).

```html
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head>
          <title>Essential JS 2</title>
          <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-pdfviewer/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-drawings/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-inplace-editor/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet">
          <link href="//cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css" rel="stylesheet">

            <!-- Essential JS 2 PDF Viewer's global script -->
            <script src="//cdn.syncfusion.com/ej2/ej2-pdfviewer/dist/global/ej2-pdfviewer.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
</head>
       <body>
            <!--element which is going to render-->
              <div id="container">
                <div id="PdfViewer" style="height:500px;width:100%;">
                </div>
               </div>
            <script>
               // Initialize PDF Viewer component.
                var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: "http://localhost:6001/api/pdfviewer"
                });
                ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
                //PDF Viewer control rendering starts
                pdfviewer.appendTo('#PdfViewer');
            </script>
  <script>
var ele = document.getElementById('container');
if(ele) {
    ele.style.visibility = "visible";
 }
        </script>
<script src="index.js" type="text/javascript"></script>
</body></html>
```

## How to configure the distributed Redis Cache in this Docker image

The PDF Viewer server library internally caches the loaded document instance and you can extend the cache option to a distributed cache environment. Please follow these steps to configure the Azure Cache for a Redis instance to the PDF Viewer server library using a Docker compose file.

**Step 1:** Create the [`Azure Cache for the Redis instance`](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-core-quickstart) and copy the connection string.

**Step 2:** Provide the connection string to the `REDIS_CACHE_CONNECTION_STRING` environment variable in the pdfviewer-server docker-compose file. The default cache sliding expiration time is 10 minutes. You can also configure it by setting the value to the `DOCUMENT_SLIDING_EXPIRATION_TIME` environment variable.

```yaml
version: '3.4'
services:
  pdfviewer-server:
    image: syncfusion/pdfviewer-server:latest
    environment:
      #Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
      REDIS_CACHE_CONNECTION_STRING: YOUR_REDIS_CACHE_CONNECTION_STRING
      DOCUMENT_SLIDING_EXPIRATION_TIME: “20”
    ports:
    - "6001:80"
```

Refer to these getting started pages to create a PDF Viewer in [`Angular`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started), [`React`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started), [`Vue`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started), [`ASP.NET MVC`]https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started), [`ASP.NET Core`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started), and [`Blazor`](https://blazor.syncfusion.com/documentation/pdfviewer/getting-started/server-side-application).