---
layout: post
title: Client-Side Import in Angular Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion Angular Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Import Excel files using client-side processing in Angular Spreadsheet

The [Angular Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) component uses a client-side workflow to process workbook files directly in the browser without requiring server communication. When the [allowOpen](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#allowopen) property is enabled by default and the [openUrl](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#openurl) property is not configured, the Spreadsheet uses its integrated client-side file-processing functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

## Advantages of Client-Side Import

Client-side import provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during import instead of sending it to a file-processing service.
* **Offline Capability**: Open and process local Excel files without an internet connection.

## How client-side import works

For open processing, when a file is fetched, it is sent to the ej2-xlsx library. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

## Configure client-side import

Unlike server-side processing, the `openUrl` must be omitted for client-side processing since there is no server-side request. This approach provides enhanced privacy, improved performance, and reduced infrastructure costs.

```ts
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `<ejs-spreadsheet #spreadsheet ></ejs-spreadsheet>`
  // Note: openUrl is omitted for client-side import
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheet!: SpreadsheetComponent;

}
```

With this configuration, the Spreadsheet will process all Excel files (.xlsx) directly in the browser without requiring server communication. For specific file-source implementations (local system, URL, or Blob data), see the sections below.

## Supported file sources

### Opening a file from the local system

Use a native file input to select an Excel workbook. Pass the selected `File` to the Spreadsheet's `open` method; do not configure `openUrl` for this client-side workflow.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/client-side-local-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/client-side-local-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/client-side-local-cs1" %}

### Opening a file from a URL

You can fetch the remote Excel file (.xlsx) through the URL and convert it to a blob. Convert this blob to a file and open this file by using Spreadsheet component's [open](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#open) method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/client-side-url-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/client-side-url-cs1/src/main.ts %}
{% endhighlight %}

{% endtabs %}
{% previewsample "/document-processing/samples/spreadsheet/angular/client-side-url-cs1" %}

Cross-origin resource sharing (CORS) restrictions may prevent opening files from some URLs. Ensure CORS policies are properly configured on the target server.

### Opening a file from Blob data

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a File object. Then, you can use the open method in the Spreadsheet component to load that File object.

Please find the code to fetch the blob data and load it into the Spreadsheet component below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/client-side-blob-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/client-side-blob-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/client-side-blob-cs1" %}

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-processing)
