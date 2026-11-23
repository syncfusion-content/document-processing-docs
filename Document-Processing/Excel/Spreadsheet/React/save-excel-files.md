---
layout: post
title: Save Excel Files in React Spreadsheet | Syncfusion
description: Learn about saving Excel files in the Syncfusion React Spreadsheet component, including exporting and workbook management.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Save Excel Files in React Spreadsheet

The [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component allows users to save Excel files through either server-side or client-side approaches. The approach used is determined by whether `saveUrl` is configured.

When `saveUrl` is configured, the Spreadsheet sends workbook data to a server endpoint for processing (server-side processing). When `saveUrl` is not configured, the Spreadsheet generates files directly in the browser (client-side processing).

## Enable file saving

To enable saving Excel files, set the [`allowSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowsave) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file saving.

> * Use `Ctrl + S` keyboard shortcut to save Excel documents.

## Save a file from the user interface

To save a workbook from the user interface, select **File > Save As** from the ribbon and choose a file format.

The processing method depends on the Spreadsheet configuration. When `saveUrl` is not configured, the file is processed in the browser. When `saveUrl` is configured, the file is sent to the specified Save service.

## Save a file programmatically

Use the [`save`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#save) method to save a file programmatically. Pass the save options through the [`SaveOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/saveOptions) parameter.

## Save events

* Use the [`beforeSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforesave) event to customize or cancel the Save operation before the workbook data is processed.
* Use the [`saveComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#savecomplete) event to perform an action after the file is generated.

## Supported file formats

The supported file formats depend on the selected processing method:

| Processing method | Supported formats |
| --- | --- |
| [Client-side processing](./save-excel-file/pure-client-side) | Microsoft Excel Workbook (`.xlsx`) |
| [Server-side processing](./save-excel-file/server-side-processing) | Microsoft Excel Workbook (`.xlsx`), Excel 97-2003 Workbook (`.xls`), Comma-Separated Values (`.csv`), Excel Macro-Enabled Workbook (`.xlsm`), Excel Binary Workbook (`.xlsb`), Portable Document Format (`.pdf`) |

## Cloud storage integrations

The Spreadsheet component also supports saving files directly to various cloud storage providers:

* [Client-Side Import](./save-excel-file/pure-client-side)
* [Server-Side Import](./save-excel-file/server-side-processing)
* [Save to AWS S3](./save-excel-file/to-aws-s3-bucket)
* [Save to Azure Blob Storage](./save-excel-file/to-azure-blob-storage)
* [Save to Google Cloud Storage](./save-excel-file/to-google-cloud-storage)
* [Save to Google Drive](./save-excel-file/to-google-drive)