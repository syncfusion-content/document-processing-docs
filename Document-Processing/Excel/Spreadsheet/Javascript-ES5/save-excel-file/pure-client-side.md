---
layout: post
title: Client-Side Export in JavaScript Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion JavaScript Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Using client-side processing with JavaScript Spreadsheet

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

Unlike server-side processing, the `saveUrl` is not mandatory for client-side processing since there is no server-side request. This approach provides enhanced privacy, improved performance, and reduced infrastructure costs.

```js
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    allowSave: true
    // Note: saveUrl is omitted for client-side processing.
});
spreadsheet.appendTo('#spreadsheet');
```


With this configuration, the Spreadsheet will generate Excel files directly in the browser without requiring server communication.

## Saving Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the [`save`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#save) method of the Spreadsheet component. When calling this method with client-side processing, the Spreadsheet generates the file directly in the browser and triggers browser download.

```js
spreadsheet.save({ fileName: 'Sample', saveType: 'Xlsx' });
```


## Saving Excel files as Blob data

To save an Excel file as blob data, set `needBlobData` to **true** and `isFullPost` to **false** in the [beforeSave](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#savecomplete) event.

```js
var base64String;

var spreadsheet = new ej.spreadsheet.Spreadsheet({


  sheets: [{
    name: 'Car Sales Report',
    rows: [{ cells: [{ value: 'Example' }] }],
    columns: [
      { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
      { width: 130 }, { width: 120 }
    ]
  }],

  beforeSave: function (args) {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
  },

  saveComplete: function (args) {
    // To obtain the blob data
    console.log('Spreadsheet BlobData : ', args.blobData)
  }

});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');
spreadsheet.save({ fileName: 'Worksheet', saveType: 'Xlsx' });
```


## Saving Excel files as a Base64 string

Replace the preceding `saveComplete` handler with this handler to convert the generated Blob to a Base64 data URL. Keep the `beforeSave` handler above. `FileReader` completes asynchronously, so use the string inside `onloadend`.

```js
spreadsheet.saveComplete = function (args) {
    // Convert blob data to base64 string.
    var reader = new FileReader();
    reader.onloadend = function () {
        var base64String = reader.result;
        // Logs base64 string into the console.
        console.log('Base64 String - ', base64String);
    };
    reader.readAsDataURL(args.blobData);
};
spreadsheet.save({
    fileName: 'Worksheet',
    saveType: 'Xlsx'
}); // Specifies the file name, file type need to be saved.
```

## Considerations

1. **Format Limitation**: Client-side export currently supports XLSX format only
2. **No saveUrl Required**: `saveUrl` must not be configured for client-side export

## See also

* [Server-Side Export](./server-side-processing)
