---
layout: post
title: Document Loading Issues in Version 23.1 or Newer React Pdfviewer Component
description: Learn here all about troubleshooting Document Loading Issues in Version 23.1 or newer in React Pdfviewer of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: React
documentation: ug
---

# Document Loading Issues in Version 23.1 or Newer

If you're experiencing problems with your document not rendering in the viewer, especially when using version 23.1 or a newer version, follow these troubleshooting steps to resolve the issue:

1. **Check for `viewer.dataBind()` Requirement**: Ensure that you have called `viewer.dataBind()` as required in version 23.1 or newer. This explicit call is Essential<sup style="font-size:70%">&reg;</sup> for initializing data binding and document rendering correctly. It is must to call the dataBind() method before load.

{% raw %}
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function documentLoad() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.dataBind();
    viewer.load("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",null);
  }
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
     <button onClick={documentLoad}>Load</button>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        style={{ 'height': '640px' }}>
            <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation,
                                  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

2. **Verify Document Source**: Confirm that the document source or URL you're trying to display is valid and accessible. Incorrect URLs or document paths can lead to loading issues.

3. **Network Connectivity**: Ensure that your application has a stable network connection. Document rendering may fail if the viewer can't fetch the document due to network issues.

4. **Console Errors**: Use your browser's developer tools to check for any error messages or warnings in the console. These messages can provide insights into what's causing the document not to load.

5. **Loading Sequence**: Make sure that you're calling `viewer.dataBind()` and initiating document loading in the correct sequence. The viewer should be properly initialized before attempting to load a document.

7. **Update Viewer**: Ensure that you're using the latest version of the viewer library or framework. Sometimes, issues related to document loading are resolved in newer releases.

8. **Cross-Origin Resource Sharing (CORS)**: If you're loading documents from a different domain, ensure that CORS headers are correctly configured to allow cross-origin requests.

9. **Content Security Policies (CSP)**: Check if your application's Content Security Policy allows the loading of external resources, as this can affect document loading. Refer [here](https://ej2.syncfusion.com/javascript/documentation/common/troubleshoot/content-security-policy) to troubleshoot.

By following these troubleshooting steps, you should be able to address issues related to document loading in version 23.1 or newer, ensuring that your documents render correctly in the viewer.