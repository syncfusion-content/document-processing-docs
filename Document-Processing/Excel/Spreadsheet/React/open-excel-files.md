---
layout: post
title: Open Excel Files in React Spreadsheet | Syncfusion
description: Learn about opening Excel files in the Syncfusion React Spreadsheet component, including importing and viewing workbook data.
platform: document-processing
control: Open
documentation: ug
---

# Open Excel Files in React Spreadsheet

The React Spreadsheet component allows users to select and open workbook files through the user interface or the public `open()` method. The same UI and public API are used for both client-side and server-side import methods. The processing method is determined by whether `openUrl` is configured.

When `openUrl` is configured, the Spreadsheet sends files to a server endpoint for processing (server-side import). When `openUrl` is not configured, the Spreadsheet processes files directly in the browser (client-side import).

## Enable File Opening

To enable opening Excel files, set the [`allowOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowopen) property to **true**. The default value is `true`, so this property typically does not need to be explicitly set unless you want to disable file opening.

> * Use `Ctrl + O` keyboard shortcut to open Excel documents.

## Open a File from the User Interface

In the user interface you can open an Excel document by clicking `File > Open` menu item in ribbon.

The following sample shows the `Open` option configured by using the [`openUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#openurl) property. You can also use the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforeopen) event to customize or cancel the import action, which is triggered before opening an Excel file.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs1" %}

Please find the below table for the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforeopen) event arguments.

**BeforeOpenEventArgs – Properties**

| **Property**          | **Type**                          | **Description** |
|-------------------|-------------------------------|-------------|
| **cancel**        | `boolean`                       | Specifies whether the open action should be canceled. |
| **file**          | `FileList` \| `string` \| `File`    | Specifies the file to be opened. |
| **parseOptions**  | [`WorkbookParseOptions`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/workbookparseoptions)          | Specifies the parsing options that control how the Excel file is interpreted during loading. |
| **password**      | `string`                        | Specifies the password required to open the Excel file, if it is protected. |
| **requestData**   | object                        | Specifies any additional data sent along with the open request. |
| **requestType**   | `string`                        | Specifies the type of open request that triggered the **beforeOpen** event. Possible values:<br><br>• **initial** – The default request made when loading a workbook.<br>• **chunk** – A follow‑up request to load a portion of the workbook when chunking is enabled and the server provides a chunk plan.<br>• **thresholdLimitConfirmed** – A request made after the user confirms a threshold warning (such as *maximumDataLimit* or *maximumFileSizeLimit*) and chooses to proceed. |

## Open a File Programmatically

To open Excel files programmatically in the Spreadsheet, you can use the [`open`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method of the Spreadsheet component.

Please find the table below for the [`open`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method arguments.

| **Parameter** | **Type**         | **Description**                       |
|----------|--------------|-----------------------------------|
| options  | [OpenOptions](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/openOptions)  | Options for opening the excel file. |


The following code example demonstrates how to open an Excel file programmatically in the Spreadsheet.

```js
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);

  const onCreated = () => {
    fetch('https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx')
      .then((response) => response.blob())
      .then((fileBlob) => {
        const file = new File([fileBlob], 'Sample.xlsx');
        spreadsheetRef.current?.open({ file });
      });
  };

  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      created={onCreated}
      openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"
    />
  );
};

export default App;

const root = createRoot(document.getElementById('spreadsheet'));
root.render(<App />);
```

## Open Events

You can use the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforeopen) event to customize or cancel the import action, which is triggered before opening an Excel file.

For complete event documentation, refer to the [API reference](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#events).

## Supported Excel File Formats for Open

The following Excel file formats are supported for opening in the Spreadsheet component:

* Microsoft Excel Workbook (.xlsx)
* Microsoft Excel 97–2003 Workbook (.xls)
* Comma-Separated Values (.csv)
* Excel Macro‑Enabled Workbook (.xlsm)
* Excel Binary Workbook (.xlsb)

## Import Options

### Open Excel Files from Local System

If you explore your machine to select and upload an Excel document using the file upload component, you will receive the uploaded document as a raw file in the [success](https://ej2.syncfusion.com/react/documentation/api/uploader/index-default#success) event of the file upload component. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method to see the appropriate output.

The following code example shows how to import an Excel document using file upload component in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs9" %}

### Open Excel Files from URL

You can achieve to access the remote Excel file by using the [`created`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#created) event. In this event you can fetch the Excel file and convert it to a blob. Convert this blob to a file and [`open`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) this file by using Spreadsheet component open method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs2" %}

### Open Excel Files from Blob Data

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a `File` object. Then, you can use the [open](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#open) method in the Spreadsheet component to load that `File` object.

Please find the code to fetch the blob data and load it into the Spreadsheet component below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-from-blobdata-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-from-blobdata-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-from-blobdata-cs1" %}

## Choosing Between Client-Side and Server-Side Import

The Spreadsheet component supports both client-side and server-side import methods:

### Client-Side Import
- Processes workbook files directly in the browser without sending them to an Open service
- Does not require `openUrl` configuration
- Currently supports XLSX format only
- Uses integrated file-processing functionality

### Server-Side Import
- Sends files to a server endpoint for processing
- Requires `openUrl` configuration
- Supports multiple file formats (XLSX, XLS, CSV, XLSM, XLSB)
- Provides full feature support including formula calculation

The choice between client-side and server-side import depends on your specific requirements for file size, format support, and processing capabilities.

## See Also

* [Client-Side Import](./open-excel-file/client-side-import)
* [Server-Side Import](./open-excel-file/server-side-import)
* [Import from AWS S3](./open-excel-file/from-aws-s3-bucket)
* [Import from Azure Blob Storage](./open-excel-file/from-azure-blob-storage)
* [Import from Google Cloud Storage](./open-excel-file/from-google-cloud-storage)
* [Import from Google Drive](./open-excel-file/from-google-drive)