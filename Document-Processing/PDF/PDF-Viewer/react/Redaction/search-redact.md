---
layout: post
title: Search text and redact in React PDF Viewer | Syncfusion
description: Learn how to find text and add redaction annotations programmatically in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Search text and redact in React PDF Viewer

You can search for a keyword in the loaded PDF and automatically add redaction annotations over each match. The example below wires the `extractTextCompleted` event, triggers text extraction, performs a search, and places redaction annotations for every result.

N> Prerequisites — add the PdfViewer control to your React application and ensure a document is loaded. Confirm that the redaction feature is available in the product version you are using. Create a backup of the original document before applying redactions; applied redactions are permanent and cannot be recovered.

## Steps to add redaction annotations to search text bounds

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.

**Step 2:** The example below searches for a term, adds redaction annotations for each match, and exposes a button to apply redactions. Use the following code snippets to add redaction annotations on search text bounds.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
  const viewerRef = React.useRef(null);

  const toolbarSettings = {
    toolbarItems: [
      'OpenOption',
      'UndoRedoTool',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'CommentTool',
      'SubmitForm',
      'AnnotationEditTool',
      'RedactionEditTool',
      'FormDesignerEditTool',
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  const px = (pt) => (pt * 96) / 72; // points -> pixels

  const searchTextAndRedact = async () => {
    if (!viewerRef.current) return;
    const term = 'syncfusion';
    const results = await viewerRef.current.textSearchModule.findTextAsync(term, false);
    if (!results || results.length === 0) {
      console.warn('No matches found.');
      return;
    }

    for (const pageResult of results) {
      if (!pageResult?.bounds?.length) continue;
      const pageNumber = (pageResult.pageIndex ?? -1) + 1; // 1-based
      if (pageNumber < 1) continue;

      for (const bound of pageResult.bounds) {
        viewerRef.current.annotation.addAnnotation('Redaction', {
          bound: {
            x: px(bound.x),
            y: px(bound.y),
            width: px(bound.width),
            height: px(bound.height)
          },
          pageNumber,
          overlayText: 'Confidential',
          fillColor: '#00FF40FF',
          fontColor: '#333333',
          fontSize: 12,
          fontFamily: 'Arial',
          markerFillColor: '#FF0000',
          markerBorderColor: '#000000'
        });
      }
    }
  };

  const applyRedaction = () => {
    if (!viewerRef.current) return;
    viewerRef.current.annotation.redact();
  };

  return (
    <div className='content-wrapper'>
      <div style={{ marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button id='searchTextRedact' type='button' onClick={searchTextAndRedact}>
          Search "syncfusion" & Mark for Redaction
        </button>
        <button id='applyRedaction' type='button' onClick={applyRedaction}>
          Apply Redaction
        </button>
      </div>

      <PdfViewerComponent
        ref={viewerRef}
        id='container'
        documentPath='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
        resourceUrl='https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
        toolbarSettings={toolbarSettings}
        isExtractText={true}
        style={{ height: '640px', display: 'block' }}
      >
        <Inject services={[
          Toolbar,
          Magnification,
          Navigation,
          Annotation,
          LinkAnnotation,
          BookmarkView,
          ThumbnailView,
          Print,
          TextSelection,
          TextSearch,
          FormFields,
          FormDesigner
        ]} />
      </PdfViewerComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## Notes
- Ensure the PDF is fully loaded before triggering extraction and search.
- Bounds from search are in points (72 DPI). Convert to pixels (96 DPI) to align with annotation coordinates.
- Customize overlay text, colors, and typography as needed.
- Adding a redaction annotation only marks the content visually. To permanently remove sensitive data, use the viewer's Apply Redaction action or the `annotation.redact()` API; this operation is irreversible.

## See also

* [Overview of Redaction](./overview)
* [Programmatic Support in Redaction](./programmatic-support)
* [Redaction UI interactions](./ui-interactions)
* [Redaction in Mobile View](./mobile-view)
* [Redaction Toolbar](./toolbar)