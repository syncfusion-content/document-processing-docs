---
layout: post
title: Client-Side Import in JavaScript Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion JavaScript Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Import Excel files using client-side processing in JavaScript Spreadsheet

The [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) component processes workbook files directly in the browser without requiring an Open service. The [allowOpen](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowopen) property is enabled by default. When [openUrl](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#openurl) is not configured, the Spreadsheet uses its integrated client-side file-processing functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

## Advantages of Client-Side Import

Client-side import provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during import instead of sending it to a file-processing service.
* **Offline Capability**: Open and process local Excel files without an internet connection once application resources are loaded.

## How client-side import works

For open processing, when a file is fetched, it is sent to the ej2-xlsx library. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

## Configure client-side import

For client-side processing, do not configure `openUrl`; no file-processing request is sent to a service. This approach provides enhanced privacy, improved performance, and reduced infrastructure costs.

```js
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowOpen: true
    // Note: openUrl is omitted for client-side processing.
});
spreadsheet.appendTo('#spreadsheet');
```

With this configuration, the Spreadsheet will process all Excel files (.xlsx) directly in the browser without requiring server communication. For specific file-source implementations (local system, URL, or Blob data), see the sections below.

## Supported file sources

### Opening a file from the local system

Select **File > Open**, or pass a locally selected File to the Spreadsheet's [open](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#open) method. The input below selects a file without uploading it.

```js
// Select a local XLSX file without uploading it.
var input = document.createElement('input');
input.type = 'file';
input.accept = '.xlsx';
input.onchange = function () {
    if (input.files.length) spreadsheet.open({ file: input.files[0] });
};
document.body.appendChild(input);
```

### Opening a file from a URL

You can fetch the remote Excel file (.xlsx) through the URL and convert it to a blob. Convert this blob to a file and open this file by using Spreadsheet component's [open](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#open) method.

```js
//Initialize Spreadsheet component.
var spreadsheet = new ej.spreadsheet.Spreadsheet({

    created: function () {
        fetch("https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx") // fetch the remote url
            .then(function (response) {
                response.blob().then(function (fileBlob) { // convert the excel file to blob
                    var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                    spreadsheet.open({ file: file }); // open the file into Spreadsheet
                });
            });
    }
});
//Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');
```

Cross-origin resource sharing (CORS) restrictions may prevent opening files from some URLs. Ensure CORS policies are properly configured on the target server.

### Opening a file from Blob data

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a File object. Then, you can use the open method in the Spreadsheet component to load that File object.

Please find the code to fetch the blob data and load it into the Spreadsheet component below.

```js
// fileBlob is Blob data supplied by the application.
// To convert obtained blob data as a file.
var file = new File([fileBlob], 'Sample.xlsx');
spreadsheet.open({ file: file });
```

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-processing)
