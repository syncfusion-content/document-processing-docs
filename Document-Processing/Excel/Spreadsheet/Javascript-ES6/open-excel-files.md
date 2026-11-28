---
layout: post
title: Open Excel Files in TypeScript Spreadsheet | Syncfusion
description: Learn about opening Excel files in the Syncfusion TypeScript Spreadsheet component, including importing and viewing workbook data.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Open Excel files in TypeScript Spreadsheet

The [TypeScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) component allows users to select and open workbook files through the user interface or the public `open()` method. The same UI and public API are used for both client-side and server-side approaches. The approach used is determined by whether `openUrl` is configured.

When `openUrl` is configured, the Spreadsheet sends files to a server endpoint for processing (server-side processing). When `openUrl` is not configured, the Spreadsheet processes files directly in the browser (client-side processing).

## Enable file opening

To enable opening Excel files, set the [`allowOpen`](https://ej2.syncfusion.com/documentation/api/spreadsheet#allowopen) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file opening.

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.

## Open a file from the user interface

To open a workbook from the user interface, select **File > Open** from the ribbon and choose a file.

The processing method depends on the Spreadsheet configuration. When `openUrl` is not configured, the file is processed in the browser. When `openUrl` is configured, the file is sent to the specified Open service.

## Open a file programmatically

Use the [`open`](https://ej2.syncfusion.com/documentation/api/spreadsheet#open) method to open a file programmatically. Pass the file through the `file` property of [`OpenOptions`](https://ej2.syncfusion.com/documentation/api/spreadsheet/openOptions).

The `File` object can come from a local file selection or be created from application-provided data.

## Open events

* Use the [`beforeOpen`](https://ej2.syncfusion.com/documentation/api/spreadsheet#beforeopen) event to customize or cancel the Open operation before the selected file is processed.
* Use the [`openComplete`](https://ej2.syncfusion.com/documentation/api/spreadsheet#opencomplete) event to perform an action after the workbook is loaded.

## Supported file formats

The supported file formats depend on the selected processing method:

| Processing method | Supported formats |
| --- | --- |
| [Client-side processing](./open-excel-file/pure-client-side) | Microsoft Excel Workbook (`.xlsx`) |
| [Server-side processing](./open-excel-file/server-side-processing) | Microsoft Excel Workbook (`.xlsx`), Excel 97-2003 Workbook (`.xls`), Comma-Separated Values (`.csv`), Excel Macro-Enabled Workbook (`.xlsm`), and Excel Binary Workbook (`.xlsb`) |

## See also

* [Client-Side Import](./open-excel-file/pure-client-side)
* [Server-Side Import](./open-excel-file/server-side-processing)
* [From AWS S3 (React guide)](../React/open-excel-file/from-aws-s3-bucket)
* [From Azure Blob Storage (React guide)](../React/open-excel-file/from-azure-blob-storage)
* [From Google Cloud Storage (React guide)](../React/open-excel-file/from-google-cloud-storage)
* [From Google Drive (React guide)](../React/open-excel-file/from-google-drive)
* [Excel Library JavaScript Overview](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview)
