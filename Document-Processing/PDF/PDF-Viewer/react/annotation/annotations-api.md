---
layout: post
title: Annotations API in React PDF Viewer | Syncfusion
description: Learn here all about how to read and configure annotations using APIs in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations API in React

The PDF Viewer provides APIs to read the loaded annotations and to configure global defaults for creating/editing annotations.

| API | Description |
|---|---|
| [annotationCollection](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationcollection) | Gets the loaded document annotation collection. |
| [annotationDrawingOptions](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationdrawingoptions) | Options to configure line-type annotation drawing behavior. |
| [annotationSelectorSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationselectorsettings) | Configures the annotation selector (selection UI). |
| [annotationSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#annotationsettings) | Global defaults for all annotations. |
| [areaSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#areasettings) | Defaults for Area annotations. |
| [arrowSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#arrowsettings) | Defaults for Arrow annotations. |
| [circleSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#circlesettings) | Defaults for Circle annotations. |
| [customStamp](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#customstamp) | Defines custom stamp items. |
| [customStampSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#customstampsettings) | Defaults for Custom Stamp annotations. |
| [distanceSettings](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#distancesettings) | Defaults for Distance annotations. |

## annotationCollection
Read the loaded document annotation collection from the viewer instance.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const logAnnotations = () => {
    const viewer = (document.getElementById('container')?.ej2_instances || [])[0];
    if (viewer) {
      console.log(viewer.annotationCollection);
    }
  };

  return (
    <div>
      <button id="logAnnot" onClick={logAnnotations}>Show Annotation Collection</button>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
        style={{ height: '650px' }}
      >
        <Inject services={[
          Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
          BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
        ]} />
      </PdfViewerComponent>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## annotationDrawingOptions
Configure line-type annotation drawing behavior.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationDrawingOptions={{ enableLineAngleConstraints: true, restrictLineAngleTo: 90 }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## annotationSelectorSettings
Configure the annotation selector (selection UI).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationSelectorSettings={{
        selectionBorderColor: 'blue',
        resizerBorderColor: 'red',
        resizerFillColor: '#4070ff',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Circle',
        selectorLineDashArray: [5, 6],
        resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
        resizerCursorType: CursorType.grab
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## annotationSettings
Global defaults for all annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationSettings={{
        author: 'XYZ',
        minHeight: 10,
        minWidth: 10,
        maxWidth: 100,
        maxHeight: 100,
        isLock: false,
        skipPrint: false,
        skipDownload: false,
        allowedInteractions: [AllowedInteraction.Resize]
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## areaSettings
Defaults for Area annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      areaSettings={{
        opacity: 1,
        fillColor: '#ffffff00',
        strokeColor: '#ff0000',
        author: 'XYZ',
        thickness: 1,
        minHeight: 10,
        minWidth: 10,
        maxWidth: 100,
        maxHeight: 100,
        isLock: false,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue',
          resizerBorderColor: 'white',
          resizerFillColor: '#4070ff',
          resizerSize: 8,
          selectionBorderThickness: 1,
          resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        allowedInteractions: [AllowedInteraction.Resize],
        isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## arrowSettings
Defaults for Arrow annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      arrowSettings={{
        opacity: 1,
        fillColor: '#9c2592',
        strokeColor: '#ff0000',
        author: 'XYZ',
        thickness: 1,
        borderDashArray: 1,
        lineHeadStartStyle: 'Closed',
        lineHeadEndStyle: 'Closed',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue',
          resizerBorderColor: 'black',
          resizerFillColor: '#FF4081',
          resizerSize: 8,
          selectionBorderThickness: 1,
          resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10,
        minWidth: 10,
        maxWidth: 100,
        maxHeight: 0,
        isLock: false,
        allowedInteractions: [AllowedInteraction.Resize],
        isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## circleSettings
Defaults for Circle annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation,
  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch,
  FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      circleSettings={{
        opacity: 1,
        fillColor: '#9c2592',
        strokeColor: '#ff0000',
        author: 'XYZ',
        thickness: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue',
          resizerBorderColor: 'black',
          resizerFillColor: '#FF4081',
          resizerSize: 8,
          selectionBorderThickness: 1,
          resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10,
        minWidth: 10,
        maxWidth: 100,
        maxHeight: 100,
        isLock: false,
        allowedInteractions: [AllowedInteraction.Resize],
        isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## customStamp
Define custom stamp items.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      customStamp={[
        { customStampName: 'Sample', customStampImageSource: 'data:image/png;base64, Syncfusionpdfviewer' }
      ]}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## customStampSettings
Defaults for Custom Stamp annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';
import { AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      customStampSettings={{
        opacity: 1, author: 'XYZ', width: 100, height: 100, left: 200, top: 200,
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        enableCustomStamp: true, allowedInteractions: [AllowedInteraction.None], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## distanceSettings
Defaults for Distance annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      distanceSettings={{
        opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'Guest', thickness: 1,
        borderDashArray: 1, lineHeadStartStyle: 'Closed', lineHeadEndStyle: 'Closed',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        leaderLength: 40, resizeCursorType: CursorType.move,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableAnnotation
Enable or disable the Add/Edit Annotations tool in the toolbar.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableAnnotation={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableAnnotationToolbar
Show or hide the annotation toolbar when the document loads.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableAnnotationToolbar={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableFreeText
Enable or disable Free Text annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableFreeText={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableHandwrittenSignature
Enable or disable the handwritten signature feature.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableHandwrittenSignature={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableInkAnnotation
Enable or disable Ink annotations (true by default).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableInkAnnotation={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableMeasureAnnotation
Enable or disable calibrate/measurement annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableMeasureAnnotation={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableMultiPageAnnotation
Enable or disable multi-page text markup selection in UI.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      enableMultiPageAnnotation={true}
      documentPath="https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf"
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableShapeAnnotation
Enable or disable shape annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableShapeAnnotation={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableShapeLabel
Enable or disable labels for shape annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableShapeLabel={true}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableStampAnnotations
Enable or disable stamp annotations at load time.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableStampAnnotations={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableStickyNotesAnnotation
Enable or disable sticky notes annotations at load time.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableStickyNotesAnnotation={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableTextMarkupAnnotation
Enable or disable text markup annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      enableTextMarkupAnnotation={false}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## enableTextMarkupResizer
Enable or disable the text markup resizer to modify bounds in the UI.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      enableTextMarkupResizer={true}
      documentPath="https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf"
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## exportAnnotationFileName
Gets or sets the exported annotations JSON file name.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      exportAnnotationFileName="Annotation export file_1"
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## freeTextSettings
Defaults for Free Text annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { FontStyle, AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      freeTextSettings={{
        opacity: 1, fillColor: '#ffffff00', borderColor: '#4070ff', author: 'XYZ',
        borderWidth: 1, width: 151, fontSize: 16, height: 24.6, fontColor: '#000',
        fontFamily: 'Helvetica', defaultText: 'Type Here', textAlignment: 'Right',
        fontStyle: FontStyle.Italic, allowTextOnly: false,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [], resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: null
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        allowedInteractions: [AllowedInteraction.None], isPrint: true,
        isReadonly: false, enableAutoFit: false
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## handWrittenSignatureSettings
Defaults for handwritten signatures.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { DisplayMode, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      handWrittenSignatureSettings={{
        signatureItem: ['Signature', 'Initial'],
        saveSignatureLimit: 1,
        saveInitialLimit: 1,
        opacity: 1,
        strokeColor: '#000000',
        width: 150,
        height: 100,
        thickness: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        allowedInteractions: [AllowedInteraction.Resize],
        signatureDialogSettings: {
          displayMode: [DisplayMode.Draw, DisplayMode.Text, DisplayMode.Upload],
          hideSaveSignature: false
        },
        initialDialogSettings: {
          displayMode: [DisplayMode.Draw, DisplayMode.Text, DisplayMode.Upload],
          hideSaveSignature: false
        }
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## highlightSettings
Defaults for Highlight annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      highlightSettings={{
        opacity: 1, color: '#DAFF56', author: 'XYZ',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges]
        },
        isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## inkAnnotationSettings
Defaults for Ink annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      inkAnnotationSettings={{
        author: 'XYZ', opacity: 1, strokeColor: '#ff0000', thickness: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        isLock: false, allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## isAnnotationToolbarVisible
Open the annotation toolbar initially and read its visibility state.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      isAnnotationToolbarVisible={true}
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf"
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## lineSettings
Defaults for Line annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      lineSettings={{
        opacity: 1, color: '#9c2592', fillColor: '#ffffff00', strokeColor: '#ff0000',
        author: 'XYZ', thickness: 1, borderDashArray: 1,
        lineHeadStartStyle: 'None', lineHeadEndStyle: 'None',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: null
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## measurementSettings
Defaults for Measurement annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      measurementSettings={{ conversionUnit: 'cm', displayUnit: 'cm', scaleRatio: 1, depth: 96 }}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## perimeterSettings
Defaults for Perimeter annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      perimeterSettings={{
        opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ',
        thickness: 1, borderDashArray: 1, lineHeadStartStyle: 'Open', lineHeadEndStyle: 'Open',
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#4070ff',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## polygonSettings
Defaults for Polygon annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      polygonSettings={{
        opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## radiusSettings
Defaults for Radius annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      radiusSettings={{
        opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ',
        thickness: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#4070ff',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## rectangleSettings
Defaults for Rectangle annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      rectangleSettings={{
        opacity: 1, fillColor: '#9c2592', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## shapeLabelSettings
Defaults for shape labels (requires `enableShapeLabel`).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      enableShapeLabel={true}
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      shapeLabelSettings={{
        opacity: 1, fillColor: '#9c2592', borderColor: '#ff0000', fontColor: '#000',
        fontSize: 16, labelHeight: 24.6, labelMaxWidth: 151, labelContent: 'XYZ'
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## stampSettings
Defaults for Stamp annotations (dynamic/sign/business).

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, DynamicStampItem, SignStampItem, StandardBusinessStampItem, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      stampSettings={{
        opacity: 1, author: 'XYZ',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 5, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        dynamicStamps: [
          DynamicStampItem.Revised, DynamicStampItem.Reviewed, DynamicStampItem.Received,
          DynamicStampItem.Confidential, DynamicStampItem.Approved, DynamicStampItem.NotApproved
        ],
        signStamps: [
          SignStampItem.Witness, SignStampItem.InitialHere, SignStampItem.SignHere,
          SignStampItem.Accepted, SignStampItem.Rejected
        ],
        standardBusinessStamps: [
          StandardBusinessStampItem.Approved, StandardBusinessStampItem.NotApproved,
          StandardBusinessStampItem.Draft, StandardBusinessStampItem.Final,
          StandardBusinessStampItem.Completed, StandardBusinessStampItem.Confidential,
          StandardBusinessStampItem.ForPublicRelease, StandardBusinessStampItem.NotForPublicRelease,
          StandardBusinessStampItem.ForComment, StandardBusinessStampItem.Void,
          StandardBusinessStampItem.PreliminaryResults, StandardBusinessStampItem.InformationOnly
        ],
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## stickyNotesSettings
Defaults for Sticky Notes annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      stickyNotesSettings={{
        author: 'XYZ', opacity: 1,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#4070ff',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        isLock: false, allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
        BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## strikethroughSettings
Defaults for Strikethrough annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      strikethroughSettings={{
        opacity: 1, color: '#DAFF56', author: 'XYZ',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges]
        },
        isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## underlineSettings
Defaults for Underline annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      underlineSettings={{
        opacity: 1, color: '#9c2592', author: 'XYZ',
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges]
        },
        isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

---

## volumeSettings
Defaults for Volume annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-react-pdfviewer';
import { AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
      volumeSettings={{
        opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
        minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
        annotationSelectorSettings: {
          selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#4070ff',
          resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
          selectorLineDashArray: [5, 6],
          resizerLocation: [AnnotationResizerLocation.Corners, AnnotationResizerLocation.Edges],
          resizerCursorType: CursorType.grab
        },
        allowedInteractions: [AllowedInteraction.Resize], isPrint: true
      }}
      style={{ height: '650px' }}
    >
      <Inject services={[
        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
        ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
      ]} />
    </PdfViewerComponent>
  );
}
ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotation/create-modify-annotation)
- [Customize Annotation](../../annotation/customize-annotation)
- [Remove Annotation](../../annotation/delete-annotation)
- [Handwritten Signature](../../annotation/signature-annotation)
- [Export and Import Annotation](../../annotation/export-import/export-annotation)
- [Annotation in Mobile View](../../annotation/annotations-in-mobile-view)
- [Annotation Events](../../annotation/annotation-event)