---
layout: post
title: Client-Side Import in React Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Client-side processing with React Spreadsheet

Pure client-side processing enables the Spreadsheet component to process workbook files directly within the browser without requiring server communication. When `allowOpen` property is default enabled and `openUrl` is not configured, the Spreadsheet leverages its integrated client-side file-processing functionality that uses the `@syncfusion/ej2-xlsx` library internally.

## Advantages of Client-Side Import

Client-side import provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints
* **Improved Performance**: Eliminates network latency for file processing operations
* **Reduced Infrastructure Costs**: No need to maintain server-side processing infrastructure

## How client-side import works

Once a file is fetched, it is sent to the ej2-xlsx library. This library reads the Office Open XML format and extracts all relevant information. Based on this extracted information, it generates a workbook-compatible JSON structure that the Spreadsheet component can understand and load. During this process, all Spreadsheet-supported features are retained and properly mapped to the client-side representation.

## Configure client-side import

Unlike server-side processing, the `openUrl` is not mandatory for client-side processing since there is no server-side request. This approach provides enhanced privacy, improved performance, and reduced infrastructure costs.

```jsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent 
            allowOpen={true}
            // Note: openUrl is omitted for client-side import
        />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

With this configuration, the Spreadsheet will process all Excel files directly in the browser without requiring server communication. For specific file-source implementations (local system, URL, or Blob data), see the sections below.

## Supported file sources

### Opening a file from the local system

You can open Excel files from the local system using the standard File > Open interface or programmatically:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-local-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-local-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

### Opening a file from a URL

To open Excel files from a URL, fetch the file and convert the response to a File object:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-url-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-url-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-url-cs1" %}

Cross-origin resource sharing (CORS) restrictions may prevent opening files from some URLs. Ensure CORS policies are properly configured on the target server.

### Opening a file from Blob data

To open Excel files from Blob data, convert the Blob to a File object:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-blob-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-blob-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-blob-cs1" %}

In all cases, the workflow ends by passing a `File` object to the public Spreadsheet API:
`spreadsheetRef.current?.open({ file });`



## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-import)