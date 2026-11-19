---
layout: post
title: Client-Side Export in Angular Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion Angular Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Export Excel files using client-side processing in Angular Spreadsheet

The [Angular Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) component uses a client-side workflow to generate workbook files directly in the browser without sending data to a Save service. When the [allowSave](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#allowsave) property is enabled by default and the [saveUrl](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#saveurl) property is not configured, the Spreadsheet uses its integrated client-side file-generation functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

## Advantages of Client-Side Export

Client-side export provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints.
* **Reduced Network Overhead**: Avoid uploading workbook data to a server and waiting for server-side file processing.
* **Reduced Infrastructure Costs**: Eliminate the need to deploy and maintain server-side file-processing infrastructure.
* **Enhanced Privacy**: Keep workbook data within the browser during export instead of sending it to a file-processing service.
* **Offline Capability**: Generate and download Excel files without an internet connection.

## How client-side export works

For save processing, the Spreadsheet component maps its in-memory workbook model-including cell data, formulas, styles, formatting, merged cells, and worksheet settings-directly into the @syncfusion/ej2-xlsx workbook object model. The ej2-xlsx library then compiles and generates the fully formatted Excel (.xlsx) binary file directly in the browser without any server dependency.

## Supported formats

Client-side export currently supports:
* Microsoft Excel Workbook (.xlsx)

## Configure client-side export

Unlike server-side processing, the `saveUrl` must be omitted for client-side processing since there is no server-side request. This approach provides enhanced privacy, improved performance, and reduced infrastructure costs.

```ts
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `<ejs-spreadsheet #spreadsheet ></ejs-spreadsheet>`
  // Note: saveUrl is omitted for client-side export
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheet!: SpreadsheetComponent;

}
```


With this configuration, the Spreadsheet will generate Excel files directly in the browser without requiring server communication.

## Saving Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the [`save`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#save) method of the Spreadsheet component. When calling this method with client-side processing, the Spreadsheet generates the file directly in the browser and triggers browser download.

```ts
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `<ejs-spreadsheet #spreadsheet ></ejs-spreadsheet>
<button type="button" (click)="save()">Save</button>`
})
export class AppComponent {
  @ViewChild('spreadsheet') public spreadsheet!: SpreadsheetComponent;
  public save(): void {
    this.spreadsheet.save({ fileName: 'Worksheet', saveType: 'Xlsx' });
  }
}
```


## Saving Excel files as Blob data

To save an Excel file as blob data, you need to set `needBlobData` to **true** and `isFullPost` to **false** in the `beforeSave` event. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#savecomplete) event.

{% tabs %} {% highlight ts tabtitle="app.ts" %} {% include code-snippet/spreadsheet/angular/client-side-save-blob-cs1/src/app.ts %} {% endhighlight %}

{% highlight ts tabtitle="main.ts" %} {% include code-snippet/spreadsheet/angular/client-side-save-blob-cs1/src/main.ts %} {% endhighlight %} {% endtabs %}

{% previewsample "/document-processing/samples/spreadsheet/angular/client-side-save-blob-cs1" %}

## Considerations

1. **Format Limitation**: Client-side export currently supports XLSX format only
2. **No saveUrl Required**: `saveUrl` must not be configured for client-side export

## See also

* [Server-Side Export](./server-side-processing)
