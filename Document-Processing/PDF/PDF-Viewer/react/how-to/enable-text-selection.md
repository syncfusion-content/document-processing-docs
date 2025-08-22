---
layout: post
title: Enable Text Selection in React PdfViewer component | Syncfusion
description: Learn how to Enable Text Selection in Syncfusion React PdfViewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Text Selection in Syncfusion PDF Viewer

The Syncfusion PDF Viewer provides the `enableTextSelection` property, which allows you to control whether users can select text within the displayed PDF document. This feature can be toggled programmatically during runtime.

## Configure Text Selection on Initialization

You can set the initial text selection behavior when initializing the PDF Viewer control by configuring the `enableTextSelection` property.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
  FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib"
        enableTextSelection={false}
        style={{ 'height': '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
          BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields,
          FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Toggle Text Selection Dynamically

You can change the text selection behavior at runtime using buttons, menu options, or other UI elements. The following example demonstrates how to toggle text selection with button clicks:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
  FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export class App extends React.Component {
  constructor() {
    super();
    this.pdfViewer = React.createRef();
  }

  enableTextSelection = () => {
    if (this.pdfViewer.current) {
      this.pdfViewer.current.enableTextSelection = true;
    }
  }

  disableTextSelection = () => {
    if (this.pdfViewer.current) {
      this.pdfViewer.current.enableTextSelection = false;
    }
  }

  render() {
    return (
      <div id="app">
        <button onClick={this.enableTextSelection} style={{ marginBottom: '20px' }}>
          enableTextSelection
        </button>
        <button onClick={this.disableTextSelection} style={{ marginBottom: '20px' }}>
          disableTextSelection
        </button>
        <PdfViewerComponent
          id="pdfViewer"
          ref={this.pdfViewer}
          documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
          resourceUrl="https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib"
          enableTextSelection={false}
          style={{ height: '640px' }}
        >
          <Inject services={[Toolbar, Magnification, Navigation, Annotation, TextSelection,
            TextSearch, FormFields, FormDesigner, PageOrganizer]} />
        </PdfViewerComponent>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Use Cases and Considerations

- **Document Protection**: Disabling text selection helps prevent unauthorized copying of sensitive content.
- **Read-only Documents**: In scenarios where documents are meant for viewing only, disabling text selection can provide a cleaner user experience.
- **Interactive Applications**: Toggle text selection based on user roles or document states in complex applications.

## Default Behavior

By default, text selection is enabled in the PDF Viewer. Set the `enableTextSelection` property to `false` explicitly if you want to disable this functionality.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)