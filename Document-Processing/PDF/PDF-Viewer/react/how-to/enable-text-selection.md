---
layout: post
title: Enable or disable text selection in React PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the React PDF Viewer using the enableTextSelection property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in PDF Viewer

The Syncfusion PDF Viewer exposes the `enableTextSelection` property to control whether users can select text within the displayed PDF document. This setting can be configured at initialization and toggled programmatically at runtime.

## Configure text selection on initialization

Set the initial text-selection behavior by configuring the `enableTextSelection` property in the component template or on the `PdfViewerComponent` instance. The example below shows a complete component (TypeScript and template) that initializes the viewer with text selection disabled.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

## Toggle dynamically

Change the behavior at runtime using buttons or other UI.

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
          resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

## Default behavior

Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)