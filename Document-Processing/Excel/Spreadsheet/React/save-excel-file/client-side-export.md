---
layout: post
title: Client-Side Export in React Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Client-side export in React Spreadsheet

Client-side export generates workbook files directly in the browser without sending data to a Save service. When `saveUrl` is not configured, the Spreadsheet uses its integrated client-side file-generation functionality.

React Spreadsheet uses `@syncfusion/ej2-xlsx` internally for client-side workbook processing. Use the Spreadsheet user interface or the public `save()` method to export files. The Spreadsheet manages all file generation automatically through its public API.

## Advantages of Client-Side Export

Client-side export provides several key advantages over server-side processing:

* **No Server Dependency**: Generate Excel files directly in the browser without requiring server endpoints
* **Improved Performance**: Eliminates network latency for file generation operations
* **Enhanced Privacy**: Files never leave the client device during processing
* **Reduced Infrastructure Costs**: No need to maintain server-side processing infrastructure
* **Better User Experience**: Faster response times and offline capabilities

## How client-side export works

When `saveUrl` is not configured, the Spreadsheet component automatically uses its integrated client-side processing capabilities. The component handles file generation and downloading internally without requiring server communication.

The Spreadsheet manages all file generation automatically through its public API. `saveUrl` must not be configured for client-side export.

## Supported formats

Client-side export currently supports:
* Microsoft Excel Workbook (.xlsx)
* Portable Document Format (.pdf)

## Configure client-side export

To use client-side export, simply omit the `saveUrl` property from your Spreadsheet configuration:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-save-cs1" %}

With this configuration, the Spreadsheet will generate Excel files directly in the browser without requiring server communication.

## Save Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the [`save`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#save) method of the Spreadsheet component. When calling this method without configuring `saveUrl`, the Spreadsheet generates the file client-side and triggers browser download.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-save-cs1" %}

## Save Excel files as Blob data

To save an Excel file as blob data, you need to set `needBlobData` property to **true** in the save options. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#savecomplete) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-blob-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-blob-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-save-blob-cs1" %}

## Considerations

1. **Format Limitation**: Client-side export currently supports XLSX format only
2. **Size Limitations**: Large files may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side export may not be available in client-side export
4. **No saveUrl Required**: `saveUrl` must not be configured for client-side export

## See also

* [Server-Side Export](./server-side-export)
* [Save to AWS S3](./to-aws-s3-bucket)
* [Save to Azure Blob Storage](./to-azure-blob-storage)
* [Save to Google Cloud Storage](./to-google-cloud-storage)
* [Save to Google Drive](./to-google-drive)