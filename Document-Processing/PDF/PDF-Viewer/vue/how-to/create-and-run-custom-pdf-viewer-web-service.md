---
layout: post
title: Create and Run a Custom PDF Viewer Web Service (Vue) | Syncfusion
description: Learn how to create and run a custom PDF Viewer web service for the Syncfusion Vue PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Create and Run a Custom PDF Viewer Web Service (Vue)

This guide explains how to create and run your own **PDF Viewer web service** and connect it to the **server-backed Vue PDF Viewer** component. Hosting your own web service is recommended for production environments.

---

## Prerequisites

- .NET SDK 6.0 or 8.0
- Basic knowledge of ASP.NET Core
- Server-backed Vue PDF Viewer application

---

## Steps to run the PDF Viewer web service

### Step 1: Download the web service sample

Download the sample from the GitHub repository:

https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices

---

### Step 2: Open the ASP.NET Core project

Extract the downloaded sample and navigate to the **ASP.NET Core** folder using a command prompt or terminal.

---

### Step 3: Choose the .NET version

Navigate to the appropriate folder based on your installed .NET version:

- .NET 6.0 → `PdfViewerWebService_6.0`
- .NET 8.0 → `PdfViewerWebService_8.0`

---

### Step 4: Restore required packages

Run the following command to restore the NuGet packages:

```bash
dotnet restore

### Step 5: Run the Web Service

Start the web service using the following command:

```bash
dotnet run
```

### Step 6: Verify the Service is Running

The PDF Viewer server instance will run on `localhost:5001`. You can verify it by navigating to `http://localhost:5001/pdfviewer` in your browser, which returns the default GET response.

## Configure Your Vue Application

Once your web service is running, configure your Vue PDF Viewer component to use the local service URL:

  ```js
  export default {
    name: 'app',
    data () {
      return {
        <!--
          Specifies the backend service URL that processes and streams PDF data
        -->   
        serviceUrl:"https://localhost:5001/pdfviewer",
        <!--
          Defines the source of the PDF to load in the PDF Viewer.
          Accepts either a public URL or a Base64-encoded PDF string.
        --> 
        documentPath:"PDF_Succinctly.pdf"
      };
    }}
  ```

## Additional Resources

- [GitHub Web Service Examples](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices)
- [Docker Image for PDF Viewer Server](https://hub.docker.com/r/syncfusion/pdfviewer-server)

N> For production deployment, ensure you configure proper security, CORS policies, and hosting settings for your web service.
