---
layout: post
title: Save Excel Files in React Spreadsheet component | Syncfusion
description: Learn here all about Saving Excel files in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open 
documentation: ug
---

# Save Excel Files in Syncfusion React Spreadsheet

When exporting an Excel file from the React Spreadsheet component, the process is handled through a streamlined server‑side workflow. The Spreadsheet content displayed in the browser is first serialized into a structured JSON workbook. This JSON includes all essential details—such as data, formulas, formatting, styles, and sheet configuration.

Once generated, this JSON workbook is sent to the server, where the [`Syncfusion.EJ2.Spreadsheet library`](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core) uses [`Syncfusion XlsIO`](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview) to convert the JSON data into a fully formatted Excel file. During this process, the JSON workbook is parsed and its contents are mapped to an XlsIO Workbook instance, ensuring that all data, styles, formulas, and other Spreadsheet features are accurately preserved.

Since the server is responsible for generating the final Excel file, the total export time can vary depending on the workbook’s complexity. Factors such as the level of formatting, styles and the use of advanced features like formulas or conditional formatting can influence processing time. After the file is successfully generated, it is sent back to the client for download.

To enable saving Excel files, set the [`allowSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowsave) property to **true** and specify the service URL using the [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveurl) property. When a save action is triggered, the control sends the spreadsheet model to this endpoint, where it is processed and returned as a downloadable Excel file.

For a quick walkthrough on how the save functionality works, refer to the following video:
{% youtube "https://www.youtube.com/watch?v=MpwiXmL1Z_o" %}

## UI options to Save Excel files

In user interface, you can save Spreadsheet data as Excel document by clicking `File > Save As` menu item in ribbon.

The following sample shows the `Save` option by using the [`saveUrl`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveurl) property in the Spreadsheet control. You can also use the [`beforeSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave) event to customize or cancel the save action which gets triggered before saving the Spreadsheet as an Excel file.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/open-save-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/open-save-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/open-save-cs5" %}

Please find the below table for the [`beforeSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave)  event arguments.

| **Parameter** | **Type** | **Description** |
| ----- | ----- | ----- |
| url | string |  Specifies the save url.  |
| fileName | string | Specifies the file name. |
| saveType | SaveType | Specifies the saveType like Xlsx, Xls, Csv and Pdf. |
| customParams | object | Passing the custom parameters from client to server while performing save operation. |
| isFullPost | boolean | It sends the form data from client to server, when set to true. It fetches the data from client to server and returns the data from server to client, when set to false. |
| needBlobData | boolean | You can get the blob data if set to true. |
| cancel | boolean | To prevent the save operations. |

> * Use `Ctrl + S` keyboard shortcut to save the Spreadsheet data as Excel file.

> * The default value of [allowSave](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#allowsave) property is `true`. For demonstration purpose, we have showcased the [allowSave](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#allowsave) property in previous code snippet.
> * Demo purpose only, we have used the online web service url link.

## Save Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the [`save`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#save) method of the Spreadsheet component. Before invoking this method, ensure that the [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveurl) property is properly configured, as it is required for processing and generating the file on the server.

Please find the below table for the [`save`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#save) method arguments.

| **Parameter**             | **Type**                   | **Description**                                                      |
|-----------------------|------------------------|------------------------------------------------------------------|
| options               | [`SaveOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/saveoptions)                 | Options for opening the JSON object.                            |
| jsonConfig *(optional)* | [`SerializationOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/serializationOptions) | Specify the serialization options to customize the loading of the JSON data. |

The following code example demonstrates how to save an Excel file programmatically in the Spreadsheet.

```js
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { salesData } from './data';
import { SpreadsheetComponent, SheetsDirective, RangesDirective, RangeDirective,SheetDirective} from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);
  const onClick = () => {
    spreadsheetRef.current?.save({
      url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
      fileName: 'Worksheet',
      saveType: 'Xlsx',
    });
  };

  return (
    <div>
      <SpreadsheetComponent ref={spreadsheetRef}>
        <SheetsDirective>
          <SheetDirective name="Car Sales Report">
            <RangesDirective>
              <RangeDirective dataSource={salesData} />
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
      <button onClick={onClick}>Save</button>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('spreadsheet'));
root.render(<App />);
```


## Supported Excel file formats for Save

The following file formats are supported when saving the Spreadsheet component:

* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97–2003 Workbook (.xls)
* Comma-Separated Values (.csv)
* Portable Document Format (.pdf)

## Export options

### Save Excel files as Blob

By default, the Spreadsheet control saves the Excel file and downloads it to the local file system. If you want to save an Excel file as blob data, you need to set `needBlobData` property to **true** and `isFullPost` property to **false** in the [beforeSave](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave) event of the spreadsheet. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#savecomplete) event. You can then post the blob data to the server endpoint for saving.

Please find below the code to retrieve blob data from the Spreadsheet control below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/save-as-blobdata-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/save-as-blobdata-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/save-as-blobdata-cs1" %}

### Save Excel files to a server

By default, the Spreadsheet control saves the Excel file and downloads it to the local file system. If you want to save an Excel file to a server location, you need to configure the server endpoint to convert the spreadsheet data into a file stream and save it to the server location. To do this, first, on the client side, you must convert the spreadsheet data into `JSON` format using the [saveAsJson](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#saveasjson) method and send it to the server endpoint. On the server endpoint, you should convert the received spreadsheet `JSON` data into a file stream using `Syncfusion.EJ2.Spreadsheet.AspNet.Core`, then convert the stream into an Excel file, and finally save it to the server location.

**Client Side**:

```js

    // Convert the spreadsheet workbook to JSON data.
    spreadsheet.saveAsJson().then((json) => {
        const formData = new FormData();
        formData.append('FileName', "Sample");
        formData.append('saveType', 'Xlsx');
        // Passing the JSON data to perform the save operation.
        formData.append('JSONData', JSON.stringify(json.jsonObject.Workbook));
        formData.append('PdfLayoutSettings', JSON.stringify({ FitSheetOnOnePage: false }));
        // Using fetch to invoke the save process.
        fetch('https://localhost:{Your port number}/Home/Save', {
            method: 'POST',
            body: formData
        }).then((response) => {
            console.log(response);
        });
    });

```

**Server Endpoint**:

```csharp
    public string Save(SaveSettings saveSettings)
    {
        try
        {
            // Save the workbook as stream.
            Stream fileStream = Workbook.Save<Stream>(saveSettings);
            // You can also save the stream file in your server location.
            string basePath = _env.ContentRootPath + "\\Files\\" + saveSettings.FileName + ".xlsx";
            var file = System.IO.File.Create(basePath);
            fileStream.Seek(0, SeekOrigin.Begin);
            // To convert the stream to file options.
            fileStream.CopyTo(file);
            file.Dispose();
            fileStream.Dispose();
            return string.Empty;
        }
        catch (Exception ex)
        {
            return ex.Message;
        }
    }
```

You can find the server endpoint code to save the spreadsheet data as an Excel file in this [attachment](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1_(1)-880363187). After launching the server endpoint, you need to update the URL on the client side sample as shown below.

```js
//To save an Excel file to the server.
fetch('https://localhost:{port number}/Home/Save')
```

### Save Excel files with AWS Lambda

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

### Save Spreadsheet data as Base64 string

In the Spreadsheet component, there is currently no direct option to save data as a `Base64` string. You can achieve this by saving the Spreadsheet data as blob data and then converting that saved blob data to a `Base64` string using `FileReader`. 

> You can get the Spreadsheet data as blob in the [saveComplete](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#savecomplete) event when you set the  `needBlobData` as **true** and `isFullPost` as **false** in the [beforeSave](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave) event.

The following code example shows how to save the spreadsheet data as base64 string.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/base-64-string/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/base-64-string/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/base-64-string" %}

## Advanced Save options

### Configure JSON serialization

Previously, when saving the Spreadsheet as a workbook JSON object using the [saveAsJson](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#saveasjson) method, the entire workbook with all loaded features were processed and saved as a JSON object. 

Now, you have the option to selectively ignore some features while saving the Spreadsheet as a JSON object by configuring serialization options and passing them as arguments to the `saveAsJson` method. This argument is optional, and if not configured, the entire workbook JSON object will be saved without ignoring any features.

```ts
spreadsheet.saveAsJson({ onlyValues: true });
```

| Options | Description |
| ----- | ----- |
| onlyValues |  If **true**, includes only the cell values in the JSON output. |
| ignoreStyle | If **true**, excludes styles from the JSON output. |
| ignoreFormula | If **true**, excludes formulas from the JSON output. |
| ignoreFormat | If **true**, excludes number formats from the JSON output. |
| ignoreConditionalFormat | If **true**, excludes conditional formatting from the JSON output. |
| ignoreValidation | If **true**, excludes data validation rules from the JSON output. |
| ignoreFreezePane | If **true**, excludes freeze panes from the JSON output. |
| ignoreWrap | If **true**, excludes text wrapping settings from the JSON output. |
| ignoreChart | If **true**, excludes charts from the JSON output. |
| ignoreImage | If **true**, excludes images from the JSON output. |
| ignoreNote | If **true**, excludes notes from the JSON output. |

The following code snippet demonstrates how to configure the serialization options and pass them as arguments to the saveAsJson method:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/save-as-json/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/save-as-json/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/save-as-json" %}

## Customization

### Pass custom parameters during Save

Passing the custom parameters from client to server by using [`beforeSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforesave) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs6" %}
Server side code snippets:

```csharp

    public IActionResult Save(SaveSettings saveSettings, string customParams)
        {
            Console.WriteLine(customParams); // you can get the custom params in controller side
            return Workbook.Save(saveSettings);
        }
```

### Add custom headers to Save requests

You can add your own custom header to the save action in the Spreadsheet. For processing the data, it has to be sent from client to server side and adding customer header can provide privacy to the data with the help of Authorization Token. Through the [`fileMenuItemSelect`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#filemenuitemselect) event, the custom header can be added to the request during save action.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs7" %}

### Customize PDF export orientation

By default, the PDF document is created in **Portrait** orientation. You can change the orientation of the PDF document by using the `args.pdfLayoutSettings.orientation` argument settings in the [`beforeSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforesave) event.

The possible values are:

* **Portrait** - Used to display content in a vertical layout.
* **Landscape** - Used to display content in a horizontal layout.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs8" %}


## Server configuration

In the Spreadsheet component, Excel export processing is handled on the `server‑side`. Therefore, to enable exporting in your application, you need to configure a server using any of the following web service technologies:

* WebAPI
* WCF Service
* ASP.NET MVC Controller Action

The following code snippet shows how to configure the server using a `WebAPI` service:

```csharp
[Route("api/[controller]")]
public class SpreadsheetController : Controller
{
    // To save as Excel file
    [AcceptVerbs("Post")]
    [HttpPost]
    [EnableCors("AllowAllOrigins")]
    [Route("Save")]
    public IActionResult Save([FromForm] SaveSettings saveSettings)
    {
        return Workbook.Save(saveSettings);
    }
}
```

## Server dependencies

Save helper functions are included in the `Syncfusion.EJ2.Spreadsheet` package, which is available in Essential Studio<sup style="font-size:70%">&reg;</sup> and on [`nuget.org`](https://www.nuget.org).  
The following dependencies are required for Spreadsheet save operations:

* Syncfusion.EJ2
* Syncfusion.EJ2.Spreadsheet
* Syncfusion.Compression.Base
* Syncfusion.XlsIO.Base
