---
layout: post
title: Open excel file using an AWS Lambda Hosted Endpoint in EJ2 TypeScript Spreadsheet | Syncfusion
description: Learn here all about how to Open an excel file using a hosted web service in AWS Lambda in Syncfusion EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open using AWS Lambda
documentation: ug
---

# Open an excel file using a hosted web service in AWS Lambda

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