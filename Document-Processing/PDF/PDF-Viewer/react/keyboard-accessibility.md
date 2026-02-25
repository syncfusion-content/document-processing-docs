---
layout: post
title: Keyboard accessibility in React Pdfviewer component | Syncfusion
description: Learn here all about Keyboard accessibility in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard accessibility in React PDF Viewer component

The React PDF Viewer supports the keyboard interactions listed below.

|**Action**|**Windows**|**Macintosh**|
|--|--|--|
|**Shortcuts for page navigation**|||
|Navigate to the first page|Home|Function + Left arrow|
|Navigate to the last page|End|Function + Right arrow|
|Navigate to the previous page|Up Arrow|Up Arrow|
|Navigate to the next page|Down Arrow|Down Arrow|
|**Shortcuts for zooming**|||
|Perform zoom-in operation|CONTROL + =|COMMAND + =|
|Perform zoom-out operation|CONTROL + -|COMMAND + -|
|Reset zoom to 100%|CONTROL + 0|COMMAND + 0|
|**Shortcut for text search**|||
|Open the search toolbar|CONTROL + F|COMMAND + F|
|**Shortcuts for text selection**|||
|Copy the selected text, annotation, or form field|CONTROL + C|COMMAND + C|
|Cut the selected text, annotation, or form field|CONTROL + X|COMMAND + X|
|Paste the selected text, annotation, or form field|CONTROL + Y|COMMAND + Y|
|**Shortcuts for general operations**|||
|Undo the action|CONTROL + Z|COMMAND + Z|
|Redo the action|CONTROL + Y|COMMAND + Y|
|Print the document|CONTROL + P|COMMAND + P|
|Delete annotations and form fields|Delete|Delete|

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
       ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent

          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
          style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                                    ThumbnailView, Print,TextSelection, TextSearch]} />
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
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
       ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent

          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
          style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                                    ThumbnailView, Print,TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}