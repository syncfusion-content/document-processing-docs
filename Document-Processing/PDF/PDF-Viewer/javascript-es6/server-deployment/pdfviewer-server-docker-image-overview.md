---
layout: post
title: TypeScript PDF Viewer server Docker image overview
description: Run the Syncfusion PDF Viewer server Docker image, configure licensing and Redis cache, and connect it to the TypeScript PDF Viewer client.
platform: document-processing
control: PDF Viewer
documentation: ug
---
# PDF Viewer server Docker image overview

The Syncfusion PDF Viewer component enables viewing, printing, form filling, and annotating PDF files in web applications. The client component requires a server-side Web API to process and render PDF content.

Use the PDF Viewer server Docker image to host this backend quickly in containerized environments. The container exposes a REST API that the TypeScript PDF Viewer client calls through its `serviceUrl` value.

PDF Viewer is a commercial product and requires a valid license in production environments. Request a license or trial key from the [Syncfusion licensing portal](https://help.syncfusion.com/common/essential-studio/licensing/licensing-faq/where-can-i-get-a-license-key).

PDF Viewer is available for JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC, and Blazor. Choose the Docker image when you need a lightweight deployment option or when multiple clients share the same backend.

## Prerequisites

Install Docker in the target environment so the host can run containers.

- On Windows, install [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- On macOS, install [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

Ensure the host can pull the `syncfusion/pdfviewer-server:latest` image from Docker Hub or from a private registry mirror if outbound connectivity is restricted.

## How to use this PDF Viewer Docker image

The following steps pull the image, run the container, and connect the TypeScript PDF Viewer client.

**Step 1:** Pull the `pdfviewer-server` image from Docker Hub.

```console
docker pull syncfusion/pdfviewer-server
```

**Step 2:** Create a `docker-compose.yml` file in the desired folder. Adjust the mapped port if another service uses `6001`.

```yaml
version: '3.4'

services:
  pdfviewer-server:
    image: syncfusion/pdfviewer-server:latest
    environment:
      # Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
    ports:
      - "6001:80"
```

> **Security note:** Store `SYNCFUSION_LICENSE_KEY` in Docker secrets, environment variables, or orchestration-specific secret stores instead of saving it in source control.

**Step 3:** In a terminal, navigate to the folder containing `docker-compose.yml` and run:

```console
docker-compose up
```

Alternatively, run the container directly with the license key:

```console
docker run -d -p 6001:80 –e SYNCFUSION_LICENSE_KEY= YOUR_LICENSE_KEY syncfusion/pdfviewer-server:latest
```

When the container starts, the server listens on `http://localhost:6001`. Open the API endpoint at `http://localhost:6001/api/pdfviewer` to verify the default GET response. Update firewalls or inbound rules to allow traffic through the published port.

**Step 4:** Set the PDF Viewer client’s `serviceUrl` to the server endpoint (for example, `https://localhost:6001/api/pdfviewer`). For details on creating a client application, see the [Getting started with the TypeScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/) guide. Configure HTTPS and trusted certificates before exposing the service publicly.

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

## How to configure the distributed Redis cache in this Docker image

The PDF Viewer server caches loaded document instances. To use a distributed cache, configure Azure Cache for Redis with Docker Compose as follows.

**Step 1:** Create an Azure Cache for Redis instance and copy the connection string. Follow the [Azure Cache for Redis quickstart](https://learn.microsoft.com/azure/azure-cache-for-redis/cache-dotnet-core-quickstart).

**Step 2:** Provide the connection string with the `REDIS_CACHE_CONNECTION_STRING` variable in `docker-compose.yml`. The default sliding expiration is 10 minutes. To change it, set `DOCUMENT_SLIDING_EXPIRATION_TIME`.

```yaml
version: '3.4'
services:
  pdfviewer-server:
    image: syncfusion/pdfviewer-server:latest
    environment:
      # Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
      REDIS_CACHE_CONNECTION_STRING: YOUR_REDIS_CACHE_CONNECTION_STRING
      DOCUMENT_SLIDING_EXPIRATION_TIME: “20”
    ports:
      - "6001:80"
```

Review the platform-specific getting started guides:
- Angular: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started
- React: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started
- Vue: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started
- ASP.NET MVC: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started
- ASP.NET Core: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started
- Blazor: https://blazor.syncfusion.com/documentation/pdfviewer/getting-started/server-side-application
