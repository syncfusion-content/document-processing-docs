---
layout: post
title: Client-Side Export in JavaScript (ES6) Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion JavaScript (ES6) Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using client-side processing with JavaScript (ES6) Spreadsheet

Client-side processing generates workbook files directly within the browser without sending data to a Save service. When `allowSave` property is default enabled and `saveUrl` is not configured, the Spreadsheet leverages its integrated client-side file-generation functionality that uses the `@syncfusion/ej2-xlsx` library internally.

## Advantages of Client-Side Export

Client-side export provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during import instead of sending it to a file-processing service.
* **Offline Capability**: Open and process local Excel files without an internet connection.

## How client-side export works

For save processing, the Spreadsheet component maps its in-memory workbook model—including cell data, formulas, styles, formatting, merged cells, and worksheet settings—directly into the @syncfusion/ej2-xlsx workbook object model. The ej2-xlsx library then compiles and generates the fully formatted Excel (.xlsx) binary file directly in the browser without any server dependency.

## Supported formats

Client-side export currently supports:
* Microsoft Excel Workbook (.xlsx)

## Configure client-side export

Keep file processing in the browser by omitting the service URL. Only XLSX files are supported.

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

## Saving data as a Base64 string

Replace the preceding saveComplete handler with this handler to convert the generated Blob to a Base64 data URL. FileReader completes asynchronously; use the result inside onloadend.

```ts
spreadsheet.saveComplete = (args: SaveCompleteEventArgs): void => {
    // Convert blob data to base64 string.
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(args.blobData);
    reader.onloadend = function () {
        const base64String = reader.result ? reader.result : "";
        // Logs base64 string into the console.
        console.log("Base64 String - ", base64String);
    };
};
spreadsheet.save({ fileName: "Worksheet", saveType: "Xlsx" });
```

## Considerations

1. **Format Limitation**: Client-side processing currently supports XLSX format only.
2. **Local Processing**: Do not configure a file-processing service URL.

## See also

* [Server-Side Export](./server-side-processing)
