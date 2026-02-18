---
layout: post
title: Use extractText in React PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion React PDF Viewer to extract text and bounds from one or more pages.
control: PDF Viewer
platform: document-processing
documentation: ug
---

## Extract text method in the PDF Viewer

The `extractText` method retrieves text content and, optionally, positional data for elements on one or more pages. It returns a Promise that resolves to an object containing extracted `textData` (detailed items with bounds) and `pageText` (concatenated plain text).

**Parameters overview:**

- `startIndex` — Starting page index (0-based).
- `endIndex` or options — Either the ending page index for a range extraction, or an options object specifying extraction criteria for a single page.
- `options` (optional) — Extraction options such as `TextOnly` or `TextAndBounds` to control whether bounds are included.

**Returned object shape (example):**

- `textData` — Array of objects describing extracted text items, including bounds and page-level text.
- `pageText` — Concatenated plain text for the specified page(s).

### Usage of extractText in Syncfusion PDF Viewer Control

Here is an example that demonstrates how to use the extractText method along with event handling:

```html
<body>
  <button onclick="extrctText()">extrctText</button>
  <button onclick="extrctsText()">extrctsText</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    // Function to extract text from a specific page (page 1)
    function extrctText(){
      var viewer = document.getElementById('container').ej2_instances[0];
	     viewer.extractText(1, 'TextOnly').then((val) => {
        console.log('Extracted Text from Page 1:');
        console.log(val);
      });
    }
    // Function to extract text from a range of pages (pages 0 to 2)
    function extrctsText(){
      var viewer = document.getElementById('container').ej2_instances[0];
	   viewer.extractText(0, 2, 'TextOnly').then((val) => {
        console.log('Extracted Text from Pages 0 to 2:');
        console.log(val);
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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ height: '680px' }}
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

#### Explanation
- Single page: Extracts text from page 1 (`startIndex = 1`) using `TextOnly`.
- Multiple pages: Extracts text from pages 0–2 (`startIndex = 0, endIndex = 2`) using `TextOnly`.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)