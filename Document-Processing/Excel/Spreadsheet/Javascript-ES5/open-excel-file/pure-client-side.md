---
layout: post
title: Client-Side Import in JavaScript Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion JavaScript Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Client-Side Excel Import in JavaScript Spreadsheet

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

### Open an excel file from the local system

Select **File > Open**, or pass a locally selected File to the Spreadsheet's [open](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#open) method. The input below selects a file without uploading it.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/client-side-local-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/client-side-local-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/client-side-local-cs1" %}

### Open an excel file from a URL

You can fetch the remote Excel file (.xlsx) through the URL and convert it to a blob. Convert this blob to a file and open this file by using Spreadsheet component's [open](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#open) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/client-side-url-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/client-side-url-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/client-side-url-cs1" %}

Cross-origin resource sharing (CORS) restrictions may prevent opening files from some URLs. Ensure CORS policies are properly configured on the target server.

### Open an excel file from blob data

By default, the Spreadsheet control provides an option to browse files from the local file system and open them within the control. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a `File` object. Then, you can use the [open](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#open) method in the Spreadsheet control to load that `File` object.

Please find the code to fetch the blob data and load it into the Spreadsheet control below.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/client-side-blob-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/client-side-blob-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/client-side-blob-cs1" %}

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-processing)
