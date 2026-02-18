---
layout: post
title: Save using Lambda in React Spreadsheet component | Syncfusion
description: Learn here all about saving Excel files using AWS Lambda in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Save using AWS Lambda
documentation: ug
---

# Save an excel file using a hosted web service in AWS Lambda

Before proceeding with the save process, you should deploy the spreadsheet open/save web API service in AWS Lambda. To host the open/save web service in the AWS Lambda environment, please refer to the following KB documentation.

[How to deploy a spreadsheet open and save web API service to AWS Lambda](https://support.syncfusion.com/kb/article/17184/how-to-deploy-a-spreadsheet-open-and-save-web-api-service-to-aws-lambda)

After deployment, you will get the AWS service URL for the open and save actions. Before saving the Excel file with this hosted save URL, you need to prevent the default save action to avoid getting a corrupted excel file on the client end. The save service returns the file stream as a result to the client, which can cause the file to become corrupted. To prevent this, set the `args.cancel` value to `true` in the [`beforeSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave) event. After that, convert the spreadsheet data into JSON format using the [saveAsJson](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveasjson) method in the `beforeSave` event and send it to the save service endpoint URL using a fetch request.

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