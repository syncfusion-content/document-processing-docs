---
layout: post
title: Open Excel Files in React Spreadsheet | Syncfusion
description: Learn about opening Excel files in the Syncfusion React Spreadsheet component, including importing and viewing workbook data.
platform: document-processing
control: Open
documentation: ug
---

# Open Excel Files in React Spreadsheet

The React Spreadsheet component provides flexible options for opening and importing Excel files. Depending on your requirements, you can choose between client-side or server-side import methods.

## Import Methods

### Client-Side Import

Client-side import processes Excel files directly in the browser using the [@syncfusion/ej2-xlsx](https://www.npmjs.com/package/@syncfusion/ej2-xlsx) library. This method is ideal for smaller files and offers faster processing since it eliminates network latency.

[Learn more about client-side import](./open-excel-file/client-side-import)

### Server-Side Import

Server-side import uses a server-assisted workflow to process Excel files. This approach is recommended for larger files or when advanced processing capabilities are required. The server handles heavy parsing and conversion, keeping the browser responsive.

[Learn more about server-side import](./open-excel-file/server-side-import)

## Cloud Storage Integration

The React Spreadsheet component also supports importing Excel files directly from various cloud storage providers:

* [Import from AWS S3](./open-excel-file/from-aws-s3-bucket)
* [Import from Azure Blob Storage](./open-excel-file/from-azure-blob-storage)
* [Import from Google Cloud Storage](./open-excel-file/from-google-cloud-storage)
* [Import from Google Drive](./open-excel-file/from-google-drive)

Choose the import method that best fits your application's requirements and infrastructure.