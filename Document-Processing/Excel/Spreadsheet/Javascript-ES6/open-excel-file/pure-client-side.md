---
layout: post
title: Client-Side Import in JavaScript (ES6) Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion JavaScript (ES6) Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using client-side processing with JavaScript (ES6) Spreadsheet

Client-side processing enables the Spreadsheet component to process workbook files directly within the browser without requiring server communication. When `allowOpen` property is default enabled and `openUrl` is not configured, the Spreadsheet leverages its integrated client-side file-processing functionality that uses the `@syncfusion/ej2-xlsx` library internally.

## Advantages of Client-Side Import

Client-side import provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during import instead of sending it to a file-processing service.
* **Offline Capability**: Open and process local Excel files without an internet connection.

## How client-side import works

For open processing, when a file is fetched, it is sent to the ej2-xlsx library. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

## Configure client-side import

Keep file processing in the browser by omitting the service URL. Only XLSX files are supported.

```ts
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true
});
//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');
```

## Supported file sources

### Opening a file from the local system

Select **File > Open**, or pass a locally selected File to the [open](https://ej2.syncfusion.com/documentation/api/spreadsheet#open) method.

```html
<input id="fileInput" type="file" accept=".xlsx" />
```

```ts
(document.getElementById('fileInput') as HTMLInputElement).onchange = (event: Event): void => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length) {
        spreadsheet.open({ file: files[0] });
    }
};
```

### Opening a file from a URL

Fetch an XLSX file, convert its response to a Blob, and then create a File object. Cross-origin URLs must allow CORS requests.

```ts
fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx') // fetch the remote url
    .then((response) => response.blob()) // convert the excel file to blob
    .then((fileBlob) => {
        let file = new File([fileBlob], 'Sample.xlsx'); //convert the blob into file
        spreadsheet.open({ file: file }); // open the file into Spreadsheet
    });
```

### Opening a file from Blob data

Pass an application-provided XLSX Blob to this function.

```ts
function openBlob(fileBlob: Blob): void {
    // To convert obtained blob data as a file.
    let file = new File([fileBlob], 'Sample.xlsx');
    spreadsheet.open({ file: file });
}
```

### Opening a file from a Base64 string

Pass a complete XLSX data URL (including its MIME type and Base64 prefix).

```ts
function openBase64(base64String: string): void {
    fetch(base64String)
        // To obtain blob data from base64 string.
        .then((response) => response.blob())
        .then((fileBlob) => {
            // To convert obtained blob data as a file.
            let file = new File([fileBlob], 'Sample.xlsx');
            spreadsheet.open({ file: file });
        });
}
```

## Considerations

1. **Format Limitation**: Client-side processing currently supports XLSX format only.
2. **Local Processing**: Do not configure a file-processing service URL.

## See also

* [Server-Side Import](./server-side-processing)
