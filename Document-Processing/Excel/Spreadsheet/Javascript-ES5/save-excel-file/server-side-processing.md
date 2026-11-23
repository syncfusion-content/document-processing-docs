---
layout: post
title: Server-Side Export in JavaScript Spreadsheet | Syncfusion
description: Learn about saving Excel files using server-side processing in the Syncfusion JavaScript Spreadsheet component with saveUrl configuration.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Export Excel files using server-side processing in JavaScript Spreadsheet

The [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) component uses a server-assisted workflow to save Excel files efficiently and accurately. When a user saves an Excel file, the Spreadsheet content displayed in the browser is first serialized into a structured JSON workbook. This JSON includes all essential details—such as data, formulas, formatting, styles, and sheet configuration.

The JSON workbook is then sent to a server endpoint for processing. On the server, the [`Syncfusion.EJ2.Spreadsheet`](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core) library is used to convert the JSON data into a fully formatted Excel file. This library is built on top of [`Syncfusion XlsIO`](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview), a .NET library. The server parses the JSON, maps its contents to an XlsIO Workbook instance, and ensures that all data, styles, formulas, and other Spreadsheet features are accurately preserved.

For save processing, the Spreadsheet component serializes its content into a structured JSON workbook that includes all essential details—such as data, formulas, formatting, styles, and sheet configuration. This JSON is sent to the server where it is converted into a fully formatted Excel file using the Syncfusion XlsIO library.

Since the server is responsible for generating the final Excel file, the total export time can vary depending on the workbook's complexity. Factors such as the level of formatting, styles, and the use of advanced features like formulas or conditional formatting can influence processing time. After the file is successfully generated, it is sent back to the client for download.

## Hosted Syncfusion Service URLs

In the code samples and demos, you may see **Syncfusion-hosted service URLs** used for the `saveUrl` property. These URLs point to Syncfusion's own WebAPI services (built with **ASP.NET Core**) that handle saving Excel files. These hosted URLs are provided only for demonstration and evaluation purposes:

**Hosted Syncfusion Service URLs:**
```
openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
```

For your own development and production, you must set up your own web service for save operations. This ensures your data remains private, secure, and fully under your control. Using your own service also allows you to customize processing, apply business logic, and comply with your organization's security requirements.

## Server Configuration

Below is an example of a server-side `Save` endpoint using ASP.NET Core WebAPI, which is the same approach used for building the hosted Syncfusion URLs. This endpoint receives the Spreadsheet data as JSON, processes it with the Syncfusion Spreadsheet library, and returns the generated Excel file to the client:

```csharp
// Save action
[HttpPost]
[Route("Save")]
public IActionResult Save([FromForm] SaveSettings saveSettings)
{
    if (saveSettings != null && !string.IsNullOrEmpty(saveSettings.JSONData)) {
        return Workbook.Save(saveSettings);
    }
    return BadRequest("saveSettings or JSONData was not available.");
}
```

> **Note:** For details on how to set up your own web service for open/save operations, refer to the [web service](../web-services/webservice-overview) section of this documentation.

## Install Required Dependencies

For spreadsheet open and save operations, install the following NuGet packages based on your server platform:

| Platform      | Assembly                                 | NuGet Package |
|---------------|------------------------------------------|---------------|
| ASP.NET Core  | Syncfusion.EJ2.Spreadsheet.AspNet.Core <br> Syncfusion.EJ2.AspNet.Core <br/> Syncfusion.XlsIORenderer.Net.Core | [Syncfusion.EJ2.Spreadsheet.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core) <br>[Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core) <br/> [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) |
| ASP.NET MVC5  | Syncfusion.XlsIO.AspNet.Mvc5<br/>Syncfusion.ExcelToPdfConverter.AspNet.Mvc5<br/>Syncfusion.Pdf.AspNet.Mvc5<br/>Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5<br/>Syncfusion.EJ2.MVC5 | [Syncfusion.XlsIO.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.XlsIO.AspNet.Mvc5)<br/>[Syncfusion.ExcelToPdfConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet.Mvc5)<br/>[Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/)<br/>[Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5)<br/>[Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) |

For more details, see the [dependencies section on nuget.org](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core#dependencies-body-tab).

To enable saving Excel files, set the [`allowSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowsave) property to **true** and specify the service URL using the [`saveUrl`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveurl) property. When a save action is triggered, the control sends the spreadsheet model to this endpoint, where it is processed and returned as a downloadable Excel file.

For a quick walkthrough on how the save functionality works, refer to the following video:
{% youtube "https://www.youtube.com/watch?v=MpwiXmL1Z_o" %}

## UI options to Save Excel files

The Spreadsheet control saves its data, style, format, and more as an Excel file. To enable this feature, set [`allowSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowsave) to `true` and assign the service URL to the [`saveUrl`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveurl) property.

**User Interface**:

In the user interface, you can save Spreadsheet data as an Excel document by clicking the `File > Save As` menu item in the Ribbon.

The following sample shows the `Save` option by using the [`saveUrl`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveurl) property in the Spreadsheet control. You can also use the [`beforeSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event to trigger before saving the Spreadsheet as an Excel file.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/open-save-cs5" %}

The following table lists the `beforeSave` event arguments.

| **Parameter** | **Type** | **Description** |
| ----- | ----- | ----- |
| url | string |  Specifies the save URL.  |
| fileName | string | Specifies the file name. |
| saveType | SaveType | Specifies the save type (`Xlsx`, `Xls`, `Csv`, or `Pdf`). |
| customParams | object | Passes custom parameters from the client to the server during the save operation. |
| isFullPost | boolean | When set to `true`, sends form data from the client to the server (full postback). When set to `false`, uses fetch to send data from the client to the server and return the result from the server to the client. |
| needBlobData | boolean | When set to `true`, the spreadsheet data is returned as a blob in the `saveComplete` event. |
| cancel | boolean | When set to `true`, prevents the save operation. |

> * Use `Ctrl + S` keyboard shortcut to save the Spreadsheet data as Excel file.

> * The default value of [allowSave](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowsave) property is `true`. For demonstration purpose, we have showcased the [allowSave](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowsave) property in previous code snippet.
> * Demo purpose only, we have used the online web service url link.

## Save Excel files programmatically

Use the [save](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#save) method to generate a file on the server. Configure `saveUrl` on the Spreadsheet or provide the service URL in the save options.

| Parameter | Type | Description |
| --- | --- | --- |
| options | [SaveOptions](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/saveoptions) | Specifies the service URL, file name, and output format. |
| jsonConfig (optional) | [SerializationOptions](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/serializationOptions) | Specifies workbook features to exclude during serialization. |

The following code example shows how to save the spreadsheet file as an `xlsx`, `xls`, `csv`, or `pdf` in the button click event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/save-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/save-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/save-cs1" %}

## Supported Excel file formats for Save

* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97–2003 Workbook (.xls)
* Comma-Separated Values (.csv)
* Portable Document Format (.pdf)

## Export options

### Save Excel files as Blob

By default, the Spreadsheet control saves the Excel file and downloads it to the local file system. If you want to save an Excel file as blob data, you need to set the `needBlobData` property to **true** and the `isFullPost` property to **false** in the [beforeSave](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event of the spreadsheet. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#savecomplete) event. You can then post the blob data to the server endpoint for saving.

The following code retrieves blob data from the Spreadsheet control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/save-as-blobdata-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/save-as-blobdata-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/save-as-blobdata-cs1" %}

### Save Workbook as JSON

Our Spreadsheet component allows you to export an entire workbook as a JSON object. This JSON output includes all workbook details such as sheets, cell values, formulas, styles, and formatting.

You can optionally pass serialization options to the [saveAsJson](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveasjson) method to exclude specific features from the exported JSON. For example, you can choose to ignore styles, formulas, number formats, images, or conditional formatting. These options are fully optional—if they are not provided, the method exports the workbook with all details preserved by default.

The following example demonstrates how to save a workbook as JSON from the Spreadsheet component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/save-as-json/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/save-as-json/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/save-as-json" %}

### Save Excel files to a server

By default, the Spreadsheet control saves the Excel file and downloads it to the local file system. If you want to save an Excel file to a server location, you need to configure the server endpoint to convert the spreadsheet data into a file stream and save it to the server location. To do this, first, on the client side, you must convert the spreadsheet data into `JSON` format using the [saveAsJson](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveasjson) method and send it to the server endpoint. On the server endpoint, you should convert the received spreadsheet `JSON` data into a file stream using `Syncfusion.EJ2.Spreadsheet.AspNet.Core`, then convert the stream into an Excel file, and finally save it to the server location.

> Before running the server code, create a writable `Files` folder under the server's content root path. The application pool/worker process account must have write permission to this folder so the saved `.xlsx` file can be committed successfully.

**Client Side**:

```js

    // Convert the spreadsheet workbook to JSON data.
    spreadsheet.saveAsJson().then(function (json) {
        var formData = new FormData();
        formData.append('FileName', "Sample");
        formData.append('saveType', 'Xlsx');
        // Passing the JSON data to perform the save operation.
        formData.append('JSONData', JSON.stringify(json.jsonObject.Workbook));
        formData.append('PdfLayoutSettings', JSON.stringify({ FitSheetOnOnePage: false }));
        // Using fetch to invoke the save process.
        fetch('https://localhost:{Your port number}/Home/Save', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            console.log(response);
        });
    });

```

**Server Endpoint**:

```csharp

    public IActionResult Save([FromForm] SaveSettings saveSettings)
    {
        if (saveSettings == null || string.IsNullOrWhiteSpace(saveSettings.JSONData) ||
            string.IsNullOrWhiteSpace(saveSettings.FileName) ||
            !System.Text.RegularExpressions.Regex.IsMatch(saveSettings.FileName, @"\A[A-Za-z0-9_-]{1,100}\z"))
        {
            return BadRequest("Invalid workbook data or file name.");
        }
        // This endpoint writes XLSX files only. Never accept a client-supplied path.
        saveSettings.SaveType = "Xlsx";
        string filePath = Path.Combine(_env.ContentRootPath, "Files", saveSettings.FileName + ".xlsx");
        // Save the workbook as stream.
        using (Stream fileStream = Workbook.Save<Stream>(saveSettings))
        using (FileStream file = System.IO.File.Create(filePath))
        {
            fileStream.Seek(0, SeekOrigin.Begin);
            // Copy the generated workbook to the server location.
            fileStream.CopyTo(file);
        }
        return Ok();
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

After deployment, you will get the AWS service URL for the open and save actions. Before saving the Excel file with this hosted save URL, you need to prevent the default save action to avoid getting a corrupted excel file on the client end. The save service returns the file stream as a result to the client, which can cause the file to become corrupted. To prevent this, set the `args.cancel` value to `true` in the [`beforeSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event. After that, convert the spreadsheet data into JSON format using the [saveAsJson](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveasjson) method in the `beforeSave` event and send it to the save service endpoint URL using a fetch request.

On the server side, the save service will take the received JSON data, pass it to the workbook `Save` method, and return the result as a base64 string. The fetch success callback will receive the Excel file in base64 string format on the client side. Finally, you can then convert the base64 string back to a file on the client end to obtain a non-corrupted Excel file.

The following code example shows how to save an Excel file using a hosted web service in AWS Lambda, as mentioned above.

```js
var saveInitiated;
//Initialize Spreadsheet component
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [
    ],
    saveUrl:'https://xxxxxxxxxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/save',
    beforeSave: function (eventArgs)  {
        if (!saveInitiated) {
            eventArgs.cancel = true; // Preventing default save action.
            saveInitiated = true; // The "beforeSave" event will trigger for "saveAsJson" action also, so we are preventing for the "saveAsJson".
            saveAsExcel(eventArgs);
        }
    }
});
var saveAsExcel = function (eventArgs)  {
    // Convert the spreadsheet workbook to JSON data.
    spreadsheet.saveAsJson().then(function (Json) {
        saveInitiated = false;
        var formData = new FormData();
        // Passing the JSON data to server to perform save operation.
        formData.append('JSONData', JSON.stringify(Json.jsonObject.Workbook));
        formData.append('saveType', 'Xlsx');
        formData.append('fileName', 'Worksheet');
        formData.append('pdfLayoutSettings', '{"fitSheetOnOnePage":false,"orientation":"Portrait"}');
        // Using fetch API to invoke the server for save processing.
        fetch('https://xxxxxxxxxxxxxxxxxxxxxxxxx.amazonaws.com/Prod/api/spreadsheet/save', {
            method: 'POST', body: formData
        }).then(function (response) {
            if (response.ok) {
                return response.blob();
            }
        }).then(function (data) {
            var reader = new FileReader();
            reader.onload = function () {
                //Converts the result of the file reading operation into a base64 string.
                var textBase64Str = reader.result.toString();
                //Converts the base64 string into a Excel base64 string.
                var excelBase64Str = atob(textBase64Str.replace('data:text/plain;base64,', ''));
                //Converts the Excel base64 string into byte characters.
                var byteCharacters = atob(excelBase64Str.replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', ''));
                var byteArrays = [];
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteArrays.push(byteCharacters.charCodeAt(i));
                }
                var byteArray = new Uint8Array(byteArrays);
                //creates a blob data from the byte array with xlsx content type.
                var blobData = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                var blobUrl = URL.createObjectURL(blobData);
                var anchor = document.createElement('a');
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

In the Spreadsheet control, there is currently no direct option to save data as a `Base64` string. You can achieve this by saving the Spreadsheet data as blob data and then converting that saved blob data to a `Base64` string using `FileReader`.

> You can get the Spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#savecomplete) event when you set the `needBlobData` to **true** and `isFullPost` to **false** in the [beforeSave](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event.

The following code example shows how to save the spreadsheet data as base64 string.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/base-64-string/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/base-64-string/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/base-64-string" %}

## Advanced Save options

### Configure JSON serialization

Previously, when saving the Spreadsheet as a workbook JSON object using the [saveAsJson](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#saveasjson) method, the entire workbook with all loaded features were processed and saved as a JSON object.

Now, you have the option to selectively ignore some features while saving the Spreadsheet as a JSON object by configuring serialization options and passing them as arguments to the `saveAsJson` method. This argument is optional, and if not configured, the entire workbook JSON object will be saved without ignoring any features.

```js
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
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/save-as-json/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/save-as-json/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/save-as-json" %}

## Customization

### Pass custom parameters during Save

Passing the custom parameters from client to server by using [`beforeSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/open-save-cs6" %}

Server side code snippets:

```c#

    public IActionResult Save(SaveSettings saveSettings, string customParams)
        {
            Console.WriteLine(customParams); // you can get the custom params in controller side
            return Workbook.Save(saveSettings);
        }
```

### Add custom headers to Save requests

Add an Authorization header to the client-to-server Save request. The server must validate the token; use HTTPS to protect data in transit and allow the header in the server CORS policy for cross-origin requests. Through the [`fileMenuItemSelect`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#filemenuitemselect) event, the custom header can be added to the request during save action.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/open-save-cs7" %}

### Customize PDF export orientation

By default, the PDF document is created in **Portrait** orientation. You can change the orientation of the PDF document by using the `args.pdfLayoutSettings.orientation` argument settings in the [`beforeSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#beforesave) event.

The possible values for the `pdfLayoutSettings` object are:

* **orientation** - Specifies the page orientation. Accepted values are `Portrait` (vertical layout) and `Landscape` (horizontal layout).
* **fitSheetOnOnePage** - If `true`, scales the sheet content to fit on a single PDF page. If `false`, the content flows across multiple pages based on page size.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/open-save-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/open-save-cs8" %}
