---
layout: post
title: Client-Side Export in Vue Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion Vue Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Export Excel files using client-side processing in Vue Spreadsheet

The [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) component uses a client-side workflow to generate workbook files directly in the browser without sending data to a Save service. When the [allowSave](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#allowsave) property is enabled by default and the [saveUrl](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#saveurl) property is not configured, the Spreadsheet uses its integrated client-side file-generation functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

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

```vue
<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet } from '@syncfusion/ej2-vue-spreadsheet';

const spreadsheet = ref(null);

</script>

<template>
  <ejs-spreadsheet ref="spreadsheet"  />

</template>
```


With this configuration, the Spreadsheet will generate Excel files directly in the browser without requiring server communication.

## Saving Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the [`save`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#save) method of the Spreadsheet component. When calling this method with client-side processing, the Spreadsheet generates the file directly in the browser and triggers browser download.

```vue
<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet } from '@syncfusion/ej2-vue-spreadsheet';

const spreadsheet = ref(null);
const save = () => {
  spreadsheet.value.save({ fileName: 'Worksheet', saveType: 'Xlsx' });
};
</script>

<template>
  <ejs-spreadsheet ref="spreadsheet"  />
  <button type="button" @click="save">Save</button>
</template>
```


## Saving Excel files as Blob data

To save an Excel file as blob data, you need to set `needBlobData` to **true** and `isFullPost` to **false** in the `beforeSave` event. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#savecomplete) event.

```vue
<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet } from '@syncfusion/ej2-vue-spreadsheet';

const spreadsheet = ref(null);
const created = async () => {
    const response = await fetch('https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx');
    if (!response.ok) throw new Error('Unable to fetch workbook.');
    // Read the fetched Excel file as Blob data.
    const blob = await response.blob();
    // Convert the Blob to a File and open it in the Spreadsheet.
    spreadsheet.value.open({ file: new File([blob], 'Sample.xlsx') });
};
</script>

<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created" />

</template>
```


## Considerations

1. **Format Limitation**: Client-side export currently supports XLSX format only
2. **No saveUrl Required**: `saveUrl` must not be configured for client-side export

## See also

* [Server-Side Export](./server-side-processing)
