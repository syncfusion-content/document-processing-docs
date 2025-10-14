---
layout: post
title: Find Text Async in React Pdfviewer component | Syncfusion
description: Learn about the `findTextAsync` in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Find Text Async
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Find Text using findTextAsync Method in Syncfusion React PdfViewer Control

The findTextAsync method in the Syncfusion PdfViewer control allows you to search for specific text or an array of strings asynchronously within a PDF document. The method returns the bounding rectangles for each occurrence of the search term, allowing you to find and work with text positions in the document.

Here is an example of how you can use the **findTextAsync** method:

```html
<body>
  <button onclick="findText()">findText</button>
  <button onclick="findTexts()">findTexts</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function findText(){
      //Search for a single string ('pdf') with a case-insensitive search across all pages
      const viewer = document.getElementById('container').ej2_instances[0];
      viewer.textSearchModule.findTextAsync('pdf', false).then(res =>{
          console.log(res);
      });
    }
    function findTexts(){
      //Search for multiple strings (['pdf', 'the']) with a case-insensitive search across all pages
      const viewer = document.getElementById('container').ej2_instances[0];
      viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(res =>{
          console.log(res);
      });
    }
 </script>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
        // Enable or disable pinch zoom.
        enableLocalStorage = "true"
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Description:

The `findTextAsync` method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

### Parameters:

**text (string | string[]):**

The text or an array of texts you want to search for in the document.

**matchCase (boolean):**

Indicates whether the search should be case-sensitive.
When set to true, the search will match the exact case.
When set to false, the search will ignore case differences.

**pageIndex (optional, number):**

Specifies the page number (zero-based index) to search within the document.
If not provided, the search will be performed across all pages in the document.
For example, passing 0 would search only the first page of the document.

### Example Workflow:

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)