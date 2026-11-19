---
layout: post
title: Client-Side Import in Vue Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion Vue Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Import Excel files using client-side processing in Vue Spreadsheet

The [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) component uses a client-side workflow to process workbook files directly in the browser without requiring server communication. When the [allowOpen](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#allowopen) property is enabled by default and the [openUrl](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#openurl) property is not configured, the Spreadsheet uses its integrated client-side file-processing functionality, which internally uses the [@syncfusion/ej2-xlsx](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/overview) library.

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

With this configuration, the Spreadsheet will process all Excel files (.xlsx) directly in the browser without requiring server communication. For specific file-source implementations (local system, URL, or Blob data), see the sections below.

## Supported file sources

### Opening a file from the local system

Use a native file input to select an Excel workbook. Pass the selected `File` to the Spreadsheet's `open` method; do not configure `openUrl` for this client-side workflow.

```vue
<script setup>
import { ref } from 'vue';
import { SpreadsheetComponent as EjsSpreadsheet } from '@syncfusion/ej2-vue-spreadsheet';

const spreadsheet = ref(null);
const openFile = (event) => {
  const file = event.target.files?.[0];
  if (file) spreadsheet.value.open({ file });
};
</script>

<template>
  <ejs-spreadsheet ref="spreadsheet"  />
  <input type="file" accept=".xlsx" @change="openFile" />
</template>
```


### Opening a file from a URL

You can fetch the remote Excel file (.xlsx) through the URL and convert it to a blob. Convert this blob to a file and open this file by using Spreadsheet component's [open](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#open) method.

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


Cross-origin resource sharing (CORS) restrictions may prevent opening files from some URLs. Ensure CORS policies are properly configured on the target server.

### Opening a file from Blob data

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a File object. Then, you can use the open method in the Spreadsheet component to load that File object.

Please find the code to fetch the blob data and load it into the Spreadsheet component below.

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

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-processing)
