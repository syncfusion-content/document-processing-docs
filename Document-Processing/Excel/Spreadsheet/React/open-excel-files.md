---
layout: post
title: Open Excel Files in React Spreadsheet | Syncfusion
description: Learn about opening Excel files in the Syncfusion React Spreadsheet component, including importing and viewing workbook data.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Open Excel files in React Spreadsheet

The React Spreadsheet component allows users to select and open workbook files through the user interface or the public `open()` method. The same UI and public API are used for both client-side and server-side import methods. The processing method is determined by whether `openUrl` is configured.

When `openUrl` is configured, the Spreadsheet sends files to a server endpoint for processing (server-side import). When `openUrl` is not configured, the Spreadsheet processes files directly in the browser (client-side import).

## Enable file opening

To enable opening Excel files, set the [`allowOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowopen) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file opening.

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.

## Open a file from the user interface

To open a workbook from the user interface, select **File > Open** from the ribbon and choose a file.

The processing method depends on the Spreadsheet configuration. When `openUrl` is not configured, the file is processed in the browser. When `openUrl` is configured, the file is sent to the specified Open service.

## Open a file programmatically

Use the [`open`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method to open a file programmatically. Pass the file through the `file` property of [`OpenOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/openOptions).

The `File` object can come from a local file selection or be created from application-provided data. Refer to [Client-side import](./open-excel-file/client-side-import) or [Server-side import](./open-excel-file/server-side-import) for processing-specific workflows.

## Open events

Use the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforeopen) event to customize or cancel the Open operation before the selected file is processed.

Use the [`openComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#opencomplete) event to perform an action after the workbook is loaded.

## Supported file formats

The supported file formats depend on the selected import method:

| Import method | Supported formats |
| --- | --- |
| Client-side import | Microsoft Excel Workbook (`.xlsx`) |
| Server-side import | Microsoft Excel Workbook (`.xlsx`), Excel 97-2003 Workbook (`.xls`), Comma-Separated Values (`.csv`), Excel Macro-Enabled Workbook (`.xlsm`), and Excel Binary Workbook (`.xlsb`) |

## Choose an import method

Use client-side import when XLSX files should be processed directly in the browser without configuring an Open service.

Use server-side import when the application requires additional file formats, centralized processing, or server-side parsing options.

Choose the import method based on the required file formats, application architecture, and whether workbook processing should occur in the browser or through a server endpoint.

## See also

* [Client-Side Import](./open-excel-file/client-side-import)
* [Server-Side Import](./open-excel-file/server-side-import)
* [Import from AWS S3](./open-excel-file/from-aws-s3-bucket)
* [Import from Azure Blob Storage](./open-excel-file/from-azure-blob-storage)
* [Import from Google Cloud Storage](./open-excel-file/from-google-cloud-storage)
* [Import from Google Drive](./open-excel-file/from-google-drive)