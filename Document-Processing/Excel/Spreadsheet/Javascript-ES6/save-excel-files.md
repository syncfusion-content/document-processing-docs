---
layout: post
title: Save Excel Files in JavaScript (ES6) Spreadsheet | Syncfusion
description: Learn about saving Excel files in the Syncfusion JavaScript (ES6) Spreadsheet component, including exporting and workbook management.
platform: document-processing
control: Save
documentation: ug
---

# Save Excel Files in JavaScript (ES6) Spreadsheet

The JavaScript (ES6) Spreadsheet component allows users to save Excel files through either server-side or client-side approaches. The approach used is determined by whether `saveUrl` is configured.

When `saveUrl` is configured, the Spreadsheet sends workbook data to a server endpoint for processing (server-side processing). When `saveUrl` is not configured, the Spreadsheet generates files directly in the browser (client-side processing).

## Enable file saving

To enable saving Excel files, set the [`allowSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet#allowsave) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file saving.

> * Use `Ctrl + S` keyboard shortcut to save Excel documents.

## Save a file from the user interface

To save a workbook from the user interface, select **File > Save As** from the ribbon and choose a file format.

The processing method depends on the Spreadsheet configuration. When `saveUrl` is not configured, the file is processed in the browser. When `saveUrl` is configured, the file is sent to the specified Save service.

## Save a file programmatically

Use the [`save`](https://ej2.syncfusion.com/documentation/api/spreadsheet#save) method to save a file programmatically. Pass the save options through the [`SaveOptions`](https://ej2.syncfusion.com/documentation/api/spreadsheet/saveOptions) parameter.

## Save events

* Use the [`beforeSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet#beforesave) event to customize or cancel the Save operation before the workbook data is processed.
* Use the [`saveComplete`](https://ej2.syncfusion.com/documentation/api/spreadsheet#savecomplete) event to perform an action after the file is generated.

## Supported file formats

The supported file formats depend on the selected processing method:

| Processing method | Supported formats |
| --- | --- |
| Client-side processing | Microsoft Excel Workbook (`.xlsx`) |
| Server-side processing | Microsoft Excel Workbook (`.xlsx`), Excel 97-2003 Workbook (`.xls`), Comma-Separated Values (`.csv`), Portable Document Format (`.pdf`) |

## Processing methods

* [Client-Side Export](./save-excel-file/pure-client-side)
* [Server-Side Export](./save-excel-file/server-side-processing)

## Cloud storage integrations

To integrate cloud storage, use a custom service as described in [Server-Side Export](./save-excel-file/server-side-processing). This JavaScript (ES6) guide does not currently provide separate cloud-provider walkthroughs.
