---
layout: post
title: Save Excel Files in React Spreadsheet | Syncfusion
description: Learn about saving Excel files in the Syncfusion React Spreadsheet component, including exporting and workbook management.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Save Excel Files in React Spreadsheet

The React Spreadsheet component allows users to save Excel files through either server-side or client-side processing methods. The processing method is determined by whether `saveUrl` is configured.

When `saveUrl` is configured, the Spreadsheet sends workbook data to a server endpoint for processing (server-side export). When `saveUrl` is not configured, the Spreadsheet generates files directly in the browser (client-side export).

## Enable File Saving

To enable saving Excel files, set the [`allowSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowsave) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file saving.

> * Use `Ctrl + S` keyboard shortcut to save the Spreadsheet data as Excel file.

## Save a file from the user interface

To save a workbook from the user interface, select **File > Save As** from the ribbon and choose a format.

The processing method depends on the Spreadsheet configuration. When `saveUrl` is not configured, the file is generated in the browser. When `saveUrl` is configured, the workbook data is sent to the specified Save service.

## Save a file programmatically

Use the [`save`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#save) method to save a file programmatically. Pass the save options through the `options` property of [`SaveOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/saveoptions).

The `SaveOptions` object can specify:
* `fileName` - Output filename
* `saveType` - Format (Xlsx, Xls, Csv, Pdf)
* `needBlobData` - Whether to return Blob instead of downloading

The processing method is determined by whether `saveUrl` is configured:
* **Client-Side Export**: When `saveUrl` is not configured, files are generated directly in the browser
* **Server-Side Export**: When `saveUrl` is configured, files are processed on the server

## Supported Excel file formats for Save

The supported formats depend on the processing method:

| Format | Client-Side Export | Server-Side Export |
|--------|-------------------|-------------------|
| Microsoft Excel Workbook (.xlsx) | ✓ | ✓ |
| Microsoft Excel 97–2003 Workbook (.xls) | ✗ | ✓ |
| Comma-Separated Values (.csv) | ✗ | ✓ |
| Portable Document Format (.pdf) | ✓ (Coming soon) | ✓ |

## Save Events

The Spreadsheet provides several events for customizing save operations:

| Event | Description |
|-------|-------------|
| [`beforeSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforesave) | Triggers before saving the Spreadsheet. Cancel or customize the save action. |
| [`saveComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#savecomplete) | Triggers after saving the Spreadsheet. Access blob data when `needBlobData` is set. |

## See also

* [Client-Side Export](./save-excel-file/client-side-export)
* [Server-Side Export](./save-excel-file/server-side-export)
* [Save to AWS S3](./save-excel-file/to-aws-s3-bucket)
* [Save to Azure Blob Storage](./save-excel-file/to-azure-blob-storage)
* [Save to Google Cloud Storage](./save-excel-file/to-google-cloud-storage)
* [Save to Google Drive](./save-excel-file/to-google-drive)