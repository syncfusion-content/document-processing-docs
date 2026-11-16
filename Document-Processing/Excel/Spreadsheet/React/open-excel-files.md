---
layout: post
title: Open Excel Files in React Spreadsheet | Syncfusion
description: Learn about opening Excel files in the Syncfusion React Spreadsheet component, including importing and viewing workbook data.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Open Excel files in React Spreadsheet

The React Spreadsheet component allows users to select and open workbook files through the user interface or the public `open()` method. The same UI and public API are used for both client-side and server-side approaches. The approach used is determined by whether `openUrl` is configured.

When `openUrl` is configured, the Spreadsheet sends files to a server endpoint for processing (server-side processing). When `openUrl` is not configured, the Spreadsheet processes files directly in the browser (client-side processing).

## Enable file opening

To enable opening Excel files, set the [`allowOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowopen) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file opening.

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.

## Open a file from the user interface

To open a workbook from the user interface, select **File > Open** from the ribbon and choose a file.

The processing method depends on the Spreadsheet configuration. When `openUrl` is not configured, the file is processed in the browser. When `openUrl` is configured, the file is sent to the specified Open service.

## Open a file programmatically

Use the [`open`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method to open a file programmatically. Pass the file through the `file` property of [`OpenOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/openOptions).

The `File` object can come from a local file selection or be created from application-provided data. Refer to [Using Client-Side](./open-excel-file/using-client-side) or [Using Server-Side](./open-excel-file/using-server-side) for processing-specific workflows.

## Open events

Use the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforeopen) event to customize or cancel the Open operation before the selected file is processed.

Use the [`openComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#opencomplete) event to perform an action after the workbook is loaded.

## Supported file formats

The supported file formats depend on the selected processing method:

| Processing method | Supported formats |
| --- | --- |
| Client-side processing | Microsoft Excel Workbook (`.xlsx`) |
| Server-side processing | Microsoft Excel Workbook (`.xlsx`), Excel 97-2003 Workbook (`.xls`), Comma-Separated Values (`.csv`), Excel Macro-Enabled Workbook (`.xlsm`), and Excel Binary Workbook (`.xlsb`) |

## Choose a processing method

Choose client-side processing for browser-based XLSX file processing without an Open service. Choose server-side processing for additional formats or centralized processing needs.

## See also

* [Client-Side Import](./open-excel-file/pure-client-side)
* [Server-Side Import](./open-excel-file/using-server-side)
* [From AWS S3](./open-excel-file/from-aws-s3-bucket)
* [From Azure Blob Storage](./open-excel-file/from-azure-blob-storage)
* [From Google Cloud Storage](./open-excel-file/from-google-cloud-storage)
* [From Google Drive](./open-excel-file/from-google-drive)
* [Excel Library JavaScript Overview](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview)