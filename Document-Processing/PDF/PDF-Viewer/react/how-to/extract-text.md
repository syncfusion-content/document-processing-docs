---
layout: post
title: Use extractText in React PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion React PDF Viewer to extract text and bounds from one or more pages.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Extract text using extractText in React PDF Viewer

The `extractText` method extracts text from one or more pages and can return plain text or text with bounds for each element.

### extractText method
Retrieves text data from one page or a range of pages based on the specified options.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex or isOptions:** Either the ending page index (for multiple pages) or an option specifying extraction criteria for a single page.

**options (optional):** Specifies additional options, such as extracting plain text `TextOnly` or more detailed text data `TextAndBounds`. You can specify various options for text extraction. These options determine whether you want to extract plain text, text with bounds, or detailed text data.

- TextOnly: Extracts only plain text without bounds.
- TextAndBounds: Extracts text with bounds (coordinates).

#### Returns:
Returns a Promise with:
- textData: An array of TextDataSettingsModel with details including bounds and page text.
- pageText: A concatenated string of plain text from the specified page(s).

**textData:** An array of TextDataSettingsModel objects, each representing the details of the extracted text (including bounds, page text, etc.).

**pageText:** A concatenated string of plain text extracted from the specified page(s).

### Usage of extractText in Syncfusion PdfViewer Control
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
        resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib"
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