---
layout: post
title: Client-Side Export in React Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Client-side processing with React Spreadsheet

Pure client-side processing generates workbook files directly within the browser without sending data to a Save service. When `allowSave` property is default enabled and `saveUrl` is not configured, the Spreadsheet leverages its integrated client-side file-generation functionality that uses the `@syncfusion/ej2-xlsx` library internally.

## Advantages of Client-Side Export

Client-side export provides several key advantages over server-side processing:

* **No Server Dependency**: Generate Excel files directly in the browser without requiring server endpoints
* **Improved Performance**: Eliminates network latency for file generation operations
* **Reduced Infrastructure Costs**: No need to maintain server-side processing infrastructure

## How client-side export works

Once a file is fetched, it is sent to the ej2-xlsx library. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

## Supported formats

Client-side export currently supports:
* Microsoft Excel Workbook (.xlsx)

## Configure client-side export

Unlike server-side processing, the `saveUrl` is not mandatory for client-side processing since there is no server-side request. This approach provides enhanced privacy, improved performance, and reduced infrastructure costs.

```jsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent 
            allowSave={true}
            // Note: saveUrl is omitted for client-side export
        />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-save-cs1" %}

With this configuration, the Spreadsheet will generate Excel files directly in the browser without requiring server communication.

## Saving Excel files programmatically

To save Excel files programmatically in the Spreadsheet, you can use the [`save`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#save) method of the Spreadsheet component. When calling this method with client-side processing, the Spreadsheet generates the file directly in the browser and triggers browser download.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-save-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-save-cs1" %}

## Saving Excel files as Blob data

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
2. **No saveUrl Required**: `saveUrl` must not be configured for client-side export

## See also

* [Server-Side Export](./pure-server-side)