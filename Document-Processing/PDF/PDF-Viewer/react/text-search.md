---
layout: post
title: Text search in React Pdfviewer component | Syncfusion
description: Learn here all about Text search in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Text search
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---
# Text search in React Pdfviewer component

The Text Search option in PDF Viewer is used to find and highlight the text content from the document. You can enable/disable the text search using the following code snippet.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableTextSearch={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        enableTextSearch={true}
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Text search Features

### Real time search suggestion while typing
Entering text into the search input dynamically displays search suggestions based on the provided input. The suggestions are updated in real-time as text is typed, offering relevant matches from the available content. This feature enhances the search experience by allowing quick access to potential results while typing.

![Alt text](./images/SingleSearchPopup.png)

### Selecting Search Suggestions from the Popup
Entering text into the search input triggers a popup displaying relevant suggestions based on the input. Selecting a suggestion from the popup enables direct navigation to its occurrences in the document.

![Alt text](./images/SearchResultFromPopup.png)

### Search Text with enabling 'Match Case' checkbox
By enabling the 'Match Case' option and entering text into the search input, only the exact case-sensitive matches in the document are highlighted. This feature allows navigation through each occurrence of the exact text match within the document.

![Alt text](./images/SearchNavigationMatchCase.png)

### Search Text without enabling 'Match Case' checkbox
When text is entered into the search input without enabling the 'Match Case' option, all instances of the text, regardless of case, are highlighted in the document. This allows easy navigation through every occurrence of the search term.

![Alt text](./images/SearchNavigationNoMatchCase.png)

### Search list of text by enabling 'Match Any Word' checkbox
When the 'Match Any Word' option is enabled, the entered text in the search input is split into individual words based on spaces. As the text is typed, the popup dynamically displays search suggestions for each word in real time, highlighting potential matches within the document.

![Alt text](./images/MultiSearchPopup.png)

The following text search methods are available in the PDF Viewer,

* [**Search text**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#searchtext):- Searches the target text in the PDF document and highlights the occurrences in the pages.
* [**Search next**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#searchnext):- Searches the next occurrence of the searched text from the current occurrence of the PdfViewer.
* [**Search previous**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#searchprevious):- Searches the previous occurrence of the searched text from the current occurrence of the PdfViewer.
* [**Cancel text search**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textSearch/#canceltextsearch):- The text search can be canceled and the highlighted occurrences from the PDF Viewer can be removed .

![Alt text](./images/search.png)

## Find text method
Searches for the specified text or an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. If a specific page index is provided, it returns the bounding rectangles for these search strings on that page; otherwise, it returns the bounding rectangles for all pages in the document where the strings were found.

### Find and get the bounds of a text
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for all pages in the document where the text was found. The below code snippet shows how to get the bounds of the given text:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText('pdf', false));
    }
 </script>

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
      style={{ 'height': '680px' }}
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
{% highlight ts tabtitle="Server-backed" %}
{% raw %}

<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText('pdf', false));
    }
 </script>

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
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
      style={{ 'height': '680px' }}
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

### Find and get the bounds of a text on the desired page
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for that page in the document where the text was found. The below code snippet shows how to get the bounds of the given text from the desired page:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText('pdf', false, 7));
    }
 </script>

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
      style={{ 'height': '680px' }}
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
{% highlight ts tabtitle="Server-backed" %}
{% raw %}

<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText('pdf', false, 7));
    }
 </script>

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
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
      style={{ 'height': '680px' }}
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

### Find and get the bounds of the list of text
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for all pages in the document where the strings were found.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText(['pdf', 'adobe'], false));
    }
 </script>

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
      style={{ 'height': '680px' }}
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
{% highlight ts tabtitle="Server-backed" %}
{% raw %}


<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText(['pdf', 'adobe'], false));
    }
 </script>

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
      serviceUrl="https://localhost:44309/pdfviewer"
      style={{ 'height': '680px' }}
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

### Find and get the bounds of the list of text on desired page
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText(['pdf', 'adobe'], false, 7));
    }
 </script>

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
      style={{ 'height': '680px' }}
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
{% highlight ts tabtitle="Server-backed" %}
{% raw %}


<body>
    <button onclick="textBounds()">Text Bounds</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    function textBounds(){
        var viewer = document.getElementById('container').ej2_instances[0];
        console.log(viewer.textSearch.findText(['pdf', 'adobe'], false, 7));
    }
 </script>

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
      serviceUrl="https://localhost:44309/pdfviewer"
      style={{ 'height': '680px' }}
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

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/TextSearch)

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)