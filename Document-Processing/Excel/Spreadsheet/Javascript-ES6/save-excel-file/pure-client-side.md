---
layout: post
title: Client-Side Export in TypeScript Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion TypeScript Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Export Excel files using client-side processing in TypeScript Spreadsheet

The [TypeScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) component uses a client-side workflow to generate workbook files directly in the browser without requiring a file-processing service. The [allowSave](https://ej2.syncfusion.com/documentation/api/spreadsheet#allowsave) property is enabled by default. When [saveUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet#saveurl) is not configured, the Spreadsheet uses its integrated client-side functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

## Advantages of Client-Side Export

Client-side export provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during export instead of sending it to a file-processing service.
* **Offline Capability**: Generate and download Excel files without an internet connection once the application is loaded.

## How client-side export works

For save processing, the Spreadsheet component maps its in-memory workbook model—including cell data, formulas, styles, formatting, merged cells, and worksheet settings—directly into the @syncfusion/ej2-xlsx workbook object model. The ej2-xlsx library then compiles and generates the fully formatted Excel (.xlsx) binary file directly in the browser without any server dependency.

## Supported formats

Client-side export currently supports:
* Microsoft Excel Workbook (.xlsx)

## Configure client-side export

Do not configure `saveUrl` for client-side processing: no workbook data is sent to a file-processing service. Only XLSX files are supported.

```ts
import { Spreadsheet, BeforeSaveEventArgs, SaveCompleteEventArgs } from '@syncfusion/ej2-spreadsheet';

//Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowSave: true
});
//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');
```

## Saving Excel files programmatically

Use the [save](https://ej2.syncfusion.com/documentation/api/spreadsheet#save) method without a service URL to generate and download an XLSX file in the browser. The ribbon also provides **File > Save As**.

```ts
spreadsheet.save({ fileName: "Worksheet", saveType: "Xlsx" });
```

## Saving Excel files as Blob data

Set `needBlobData` to true and `isFullPost` to false in [beforeSave](https://ej2.syncfusion.com/documentation/api/spreadsheet#beforesave). Receive the generated Blob in [saveComplete](https://ej2.syncfusion.com/documentation/api/spreadsheet#savecomplete). Configure these handlers before invoking save.

```ts
spreadsheet.beforeSave = (args: BeforeSaveEventArgs): void => {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
};
spreadsheet.saveComplete = (args: SaveCompleteEventArgs): void => {
    // To obtain the blob data
    console.log(args.blobData);
};
spreadsheet.save({ fileName: "Worksheet", saveType: "Xlsx" });
```

## Considerations

1. **Format Limitation**: Client-side processing currently supports XLSX format only.
2. **Local Processing**: `saveUrl` must not be configured for client-side export.

## See also

* [Server-Side Export](./server-side-processing)
