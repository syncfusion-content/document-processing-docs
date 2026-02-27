---
layout: post
title: Annotations Permission in React PDF Viewer | Syncfusion
description: Learn here all about how to use annotation permissions in Syncfusion React PDF Viewer using programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation permissions in React

Use [annotationSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationsettings) to control creation-time permissions and default behavior for annotations in the PDF Viewer. These settings establish defaults for annotations created through the UI and programmatic flows.

## Common permissions

- `isLock`: Lock an annotation so it cannot be moved, resized, edited, or deleted.
- `skipPrint`: Exclude annotations from the print output when printing from the viewer.
- `skipDownload`: Exclude annotations from the exported/downloaded PDF.

Example: set default `annotationSettings` as a JSX prop on `PdfViewerComponent`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject,
  Toolbar, Annotation, TextSelection,
  AllowedInteraction
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}
      annotationSettings={{
        author: 'XYZ',
        minHeight: 10,
        minWidth: 10,
        maxWidth: 100,
        maxHeight: 100,
        isLock: false,       // allow moving/resizing/editing by default
        skipPrint: false,    // include annotations when printing the document
        skipDownload: false, // include annotations when downloading/exporting the document
        allowedInteractions: [AllowedInteraction.Resize]
      }}
    >
      <Inject services={[Toolbar, Annotation, TextSelection]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Individual permissions

- `isPrint`: Controls whether a specific annotation participates in printing. Set to `false` to exclude only that annotation from print output.
- `isLock`: Lock or unlock a specific annotation instance programmatically.

Example: set per-annotation defaults for text markup, shapes, and measurements as JSX props.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject,
  Toolbar, Annotation, TextSelection
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ height: '650px' }}

      // Text markup defaults
      highlightSettings={{ author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6 }}
      strikethroughSettings={{ author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6 }}
      underlineSettings={{ author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 }}
      squigglySettings={{ author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 }}

      // Shapes
      lineSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true }}
      arrowSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true }}
      rectangleSettings={{ fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true }}
      circleSettings={{ fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true }}
      polygonSettings={{ fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true }}

      // Measurements
      distanceSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true }}
      perimeterSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true }}
      areaSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true }}
      radiusSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true }}
      volumeSettings={{ strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true }}

      // Others
      freeTextSettings={{ borderColor: '#222222', opacity: 1, isLock: false, isPrint: true }}
      inkAnnotationSettings={{ strokeColor: '#0000ff', thickness: 3, opacity: 0.8, isLock: false, isPrint: true }}
      stampSettings={{ opacity: 0.9, isLock: false, isPrint: true }}
      stickyNotesSettings={{ author: 'QA', subject: 'Review', opacity: 1, isLock: false, isPrint: true }}
    >
      <Inject services={[Toolbar, Annotation, TextSelection]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

Behavior notes
- isLock true: The annotation is locked; users cannot move, resize, or edit it through the UI until it is unlocked.
- skipPrint true: All annotations are omitted from the print output initiated from the viewer.
- skipDownload true: All annotations are omitted from the exported/downloaded PDF from the viewer.
- isPrint on an individual annotation: Use this when you only want to exclude a particular annotation from printing while leaving others printable.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)