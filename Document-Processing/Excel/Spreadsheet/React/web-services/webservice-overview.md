---
layout: post
title: Web Services Overview in React Spreadsheet | Syncfusion
description: Learn here all about how to connect web services using ASP.NET Core and ASP.NET MVC in React Spreadsheet of Syncfusion Essential JS 2 and more.
control: Web Services
platform: document-processing
documentation: ug
---

# Connect Web Services for React Spreadsheet Open and Save

Unlock advanced Excel file processing in your web applications by connecting the Syncfusion Spreadsheet component to your own back-end web services. This overview explains the purpose, benefits, and high-level process for enabling open and save operations using ASP.NET Core and ASP.NET MVC.

## What are Spreadsheet Open and Save Services?

The Syncfusion Spreadsheet component allows users to import (open) and export (save) Excel files directly from the browser. These operations require secure, reliable back-end web services to process files and data.

By default, demo endpoints hosted by Syncfusion are used. For production or development, it is strongly recommended to configure your own web services for:
- **Security:** Keep files and data within your infrastructure.
- **Performance:** Reduce latency and dependency on external services.
- **Customization:** Implement business logic for file validation, processing, or storage.
- **Compliance:** Meet regulatory and privacy requirements.

## Supported Platforms

You can implement these web services using:
- [ASP.NET Core (cross-platform, modern .NET)](./webservice-using-aspnetcore)
- [ASP.NET MVC (classic .NET Framework)](./webservice-using-aspnetmvc)

Both platforms support endpoints for:
- **Open:** Import Excel files into the Spreadsheet component.
- **Save:** Export Spreadsheet data as Excel files.

## How It Works

1. **Configure Client URLs:**
   Set the `openUrl` and `saveUrl` properties in the Spreadsheet component to your back-end endpoints.
2. **Implement back-end Endpoints:**
   Use Syncfusion libraries in ASP.NET Core or MVC to handle file uploads (open) and data exports (save).
3. **Enable CORS:**
   Allow cross-origin requests so your web app can communicate with the back-end service.
4. **Handle File Size and Security:**
   Configure server settings for large file uploads and apply security best practices.

## See Also 

- [Open Excel Files](../open-excel-files)
- [Save Excel Files](../save-excel-files)
- [Spreadsheet Server Docker Image Overview](../server-deployment/spreadsheet-server-docker-image-overview)
