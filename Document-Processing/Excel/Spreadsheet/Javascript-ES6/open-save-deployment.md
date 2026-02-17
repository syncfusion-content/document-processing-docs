---
layout: post
title: Deployment Options for Open and Save in EJ2 TypeScript Spreadsheet | Syncfusion
description: Learn how to deploy Open and Save functionality in Syncfusion EJ2 TypeScript Spreadsheet using AWS Lambda.
platform: document-processing
control: Open Save Deployment
documentation: ug
---

# Open-Save Deployment in EJ2 TypeScript Spreadsheet Control

When using Open and Save functionality in the Spreadsheet control, certain scenarios require server-side processing for better scalability and security. Instead of handling file operations directly on the client, you can deploy hosted services that process Excel files and return the converted data to the client.

To achieve this, Syncfusion provides options to host Open and Save services on different platforms. These services receive the Spreadsheet model as JSON, process it, and return the required Excel file formats.

## Open

When using deployed Open services, the Spreadsheet control can open Excel files through a hosted backend instead of processing them entirely on the client.

### Open an excel file using a hosted web service in AWS Lambda

Before proceeding with the opening process, you should deploy the spreadsheet open/save web API service in AWS Lambda. To host the open/save web service in the AWS Lambda environment, please refer to the following KB documentation.

[How to deploy a spreadsheet open and save web API service to AWS Lambda](https://support.syncfusion.com/kb/article/17184/how-to-deploy-a-spreadsheet-open-and-save-web-api-service-to-aws-lambda)

After deployment, you will get the AWS service URL for the open and save actions. Before opening the Excel file with this hosted open URL, you need to prevent the default file opening process to avoid getting a corrupted file on the open service end. The spreadsheet component appends the file to the `formData` and sends it to the open service, which causes the file to get corrupted. To prevent this, set the `args.cancel` value to `true` in the [`beforeOpen`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#beforeopen) event. After that, you will get the selected file in the `beforeOpen` event argument. Then, convert this file into a base64 string and send it to the open service URL using a fetch request.

On the open service end, convert the base64 string back to a file and pass it as an argument to the workbook `Open` method. The open service will process the file and return the spreadsheet data in JSON format. You will then receive this JSON data in the fetch success callback. Finally, use the [openFromJson](https://ej2.syncfusion.com/documentation/api/spreadsheet/#openfromjson) method to load this JSON data into the spreadsheet component.

The following code example shows how to open an Excel file using a hosted web service in AWS Lambda, as mentioned above.

```ts
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [
    ],
    openUrl: 'https://xxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/open',
    beforeOpen: (eventArgs) => {
        eventArgs.cancel = true; // To prevent the default open action.
        if (eventArgs.file) {
            const reader = new FileReader();
            reader.readAsDataURL(eventArgs.file);
            reader.onload = () => {
                // Removing the xlsx file content-type.
                const base64Data: any = reader.result.replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', '');
                openExcel({
                    file: base64Data,
                    extension: eventArgs.file.name.slice(eventArgs.file.name.lastIndexOf('.') + 1),
                    password: eventArgs.password || ''
                });
            };
        }
    }
});
const openExcel = (requestData) => {
    // Fetch call to AWS server for open processing.
    fetch('https://xxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/open', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(requestData)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }).then((data) => {
        // Loading the JSON data into our spreadsheet.
        if (data.Workbook && data.Workbook.sheets) {
            spreadsheet.openFromJson({ file: data });
        }
    }).catch((error) => {
        console.log(error);
    });
};

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');

```

```csharp
public IActionResult Open(OpenOptions openOptions)
{
    // Convert the base64 string to bytes array.
    byte[] bytes = Convert.FromBase64String(openOptions.File);
    // Loading the bytes array to stream.
    MemoryStream stream = new MemoryStream(bytes);
    OpenRequest open = new OpenRequest();
    // Converting the stream into FormFile.
    open.File = new FormFile(stream, 0, bytes.Length, "Sample", "Sample." + openOptions.Extension);
    if (string.IsNullOrEmpty(openOptions.Password))
        open.Password = openOptions.Password;
    var result = Workbook.Open(open);
    return Content(result);
}

public class OpenOptions
{
    public string File { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Extension { get; set; } = string.Empty;
}
```

## Save

When using deployed Save services, the Spreadsheet control can save Excel files through a hosted backend instead of processing and generating the file entirely on the client.

### Save an excel file using a hosted web service in AWS Lambda

Before proceeding with the save process, you should deploy the spreadsheet open/save web API service in AWS Lambda. To host the open/save web service in the AWS Lambda environment, please refer to the following KB documentation.

[How to deploy a spreadsheet open and save web API service to AWS Lambda](https://support.syncfusion.com/kb/article/17184/how-to-deploy-a-spreadsheet-open-and-save-web-api-service-to-aws-lambda)

After deployment, you will get the AWS service URL for the open and save actions. Before saving the Excel file with this hosted save URL, you need to prevent the default save action to avoid getting a corrupted excel file on the client end. The save service returns the file stream as a result to the client, which can cause the file to become corrupted. To prevent this, set the `args.cancel` value to `true` in the [`beforeSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#beforesave) event. After that, convert the spreadsheet data into JSON format using the [saveAsJson](https://ej2.syncfusion.com/documentation/api/spreadsheet/#saveasjson) method in the `beforeSave` event and send it to the save service endpoint URL using a fetch request.

On the server side, the save service will take the received JSON data, pass it to the workbook `Save` method, and return the result as a base64 string. The fetch success callback will receive the Excel file in base64 string format on the client side. Finally, you can then convert the base64 string back to a file on the client end to obtain a non-corrupted Excel file.

The following code example shows how to save an Excel file using a hosted web service in AWS Lambda, as mentioned above.

```ts
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

let saveInitiated: boolean;
//Initialize Spreadsheet component
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [
    ],
    saveUrl:'https://xxxxxxxxxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/save',
    beforeSave: (eventArgs) => {
        if (!saveInitiated) {
            eventArgs.cancel = true; // Preventing default save action.
            saveInitiated = true; // The "beforeSave" event will trigger for "saveAsJson" action also, so we are preventing for the "saveAsJson".
            saveAsExcel(eventArgs);
        }
    }
});
const saveAsExcel = (eventArgs) => {
    // Convert the spreadsheet workbook to JSON data.
    spreadsheet.saveAsJson().then(Json => {
        saveInitiated = false;
        const formData = new FormData();
        // Passing the JSON data to server to perform save operation.
        formData.append('JSONData', JSON.stringify(Json.jsonObject.Workbook));
        formData.append('saveType', 'Xlsx');
        formData.append('fileName', 'Worksheet');
        formData.append('pdfLayoutSettings', '{"fitSheetOnOnePage":false,"orientation":"Portrait"}');
        // Using fetch API to invoke the server for save processing.
        fetch('https://xxxxxxxxxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/save', {
            method: 'POST', body: formData
        }).then(response => {
            if (response.ok) {
                return response.blob();
            }
        }).then(data => {
            const reader = new FileReader();
            reader.onload = function () {
                //Converts the result of the file reading operation into a base64 string.
                const textBase64Str = reader.result.toString();
                //Converts the base64 string into a Excel base64 string.
                const excelBase64Str = atob(textBase64Str.replace('data:text/plain;base64,', ''));
                //Converts the Excel base64 string into byte characters.
                const byteCharacters = atob(excelBase64Str.replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', ''));
                const byteArrays = [];
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteArrays.push(byteCharacters.charCodeAt(i));
                }
                const byteArray = new Uint8Array(byteArrays);
                //creates a blob data from the byte array with xlsx content type.
                const blobData = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const blobUrl = URL.createObjectURL(blobData);
                const anchor = document.createElement('a');
                anchor.download = 'Sample.xlsx';
                anchor.href = blobUrl;
                document.body.appendChild(anchor);
                anchor.click();
                URL.revokeObjectURL(blobUrl);
                document.body.removeChild(anchor);
            }
            reader.readAsDataURL(data);
        });
    });        
};

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');
```

```csharp
public string Save([FromForm]SaveSettings saveSettings)
{
    // This will return the Excel in base64 string format.
    return Workbook.Save<string>(saveSettings);
}
```
