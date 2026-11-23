---
layout: post
title: Client-Side Import in TypeScript Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion TypeScript Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Import Excel files using client-side processing in TypeScript Spreadsheet

The [TypeScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) component uses a client-side workflow to process workbook files directly in the browser without requiring a file-processing service. The [allowOpen](https://ej2.syncfusion.com/documentation/api/spreadsheet#allowopen) property is enabled by default. When [openUrl](https://ej2.syncfusion.com/documentation/api/spreadsheet#openurl) is not configured, the Spreadsheet uses its integrated client-side functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

## Advantages of Client-Side Import

Client-side import provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during import instead of sending it to a file-processing service.
* **Offline Capability**: Open and process local Excel files without an internet connection once the application is loaded.

## How client-side import works

For open processing, when a file is fetched, it is sent to the ej2-xlsx library. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

## Configure client-side import

Do not configure `openUrl` for client-side processing: no workbook data is sent to a file-processing service. Only XLSX files are supported.

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

### Open an excel file from the local system

Select **File > Open**, or pass a locally selected File to the [open](https://ej2.syncfusion.com/documentation/api/spreadsheet#open) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/client-side-local-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/client-side-local-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/client-side-local-cs1" %}

### Open an excel file from a URL

Fetch an XLSX file, convert its response to a Blob, and then create a File object. Cross-origin URLs must allow CORS requests.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/client-side-url-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/client-side-url-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/client-side-url-cs1" %}

### Open an excel file from blob data

By default, the Spreadsheet control provides an option to browse files from the local file system and open them within the control. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a `File` object. Then, you can use the [open](https://ej2.syncfusion.com/documentation/api/spreadsheet#open) method in the Spreadsheet control to load that `File` object.

Please find the code to fetch the blob data and load it into the Spreadsheet control below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/client-side-blob-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/client-side-blob-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/client-side-blob-cs1" %}

## Considerations

1. **Format Limitation**: Client-side processing currently supports XLSX format only.
2. **Local Processing**: `openUrl` must not be configured for client-side import.

## See also

* [Server-Side Import](./server-side-processing)
