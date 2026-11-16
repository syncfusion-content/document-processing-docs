---
layout: post
title: Save Excel Files in React Spreadsheet | Syncfusion
description: Learn about saving Excel files in the Syncfusion React Spreadsheet component, including exporting and workbook management.
platform: document-processing
control: Save 
documentation: ug
---

# Save Excel Files in React Spreadsheet

The React Spreadsheet component allows users to save Excel files through either server-side or client-side processing methods. The processing method is determined by whether `saveUrl` is configured.

When `saveUrl` is configured, the Spreadsheet sends workbook data to a server endpoint for processing (server-side processing). When `saveUrl` is not configured, the Spreadsheet generates files directly in the browser (client-side processing).

Both processing methods use the same user interface and public `save()` API. The Spreadsheet automatically determines which processing method to use based on the presence of the `saveUrl` configuration.

## Processing methods

* [Pure Client-Side](./save-excel-file/pure-client-side)
* [Pure Server-Side](./save-excel-file/pure-server-side)

## Cloud storage integrations

The Spreadsheet component also supports saving files directly to various cloud storage providers:

* [Save to AWS S3](./save-excel-file/to-aws-s3-bucket)
* [Save to Azure Blob Storage](./save-excel-file/to-azure-blob-storage)
* [Save to Google Cloud Storage](./save-excel-file/to-google-cloud-storage)
* [Save to Google Drive](./save-excel-file/to-google-drive)

## Save events

Use the [`beforeSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforesave) event to customize or cancel the Save operation before the workbook data is processed.

Use the [`saveComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#savecomplete) event to perform an action after the file is generated.

## Supported file formats

The supported file formats depend on the selected processing method:

| Processing method | Supported formats |
| --- | --- |
| Client-side processing | Microsoft Excel Workbook (`.xlsx`), Portable Document Format (`.pdf`) |
| Server-side processing | Microsoft Excel Workbook (`.xlsx`), Excel 97-2003 Workbook (`.xls`), Comma-Separated Values (`.csv`), Excel Macro-Enabled Workbook (`.xlsm`), Excel Binary Workbook (`.xlsb`), Portable Document Format (`.pdf`) |

## Choose a processing method

Use client-side processing when workbook files should be generated directly in the browser without configuring a Save service.

Use server-side processing when the application requires additional file formats, centralized processing, or server-side generation options.

Choose the processing method based on the required file formats, application architecture, and whether workbook processing should occur in the browser or through a server endpoint.