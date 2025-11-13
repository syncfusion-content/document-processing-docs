---
title: Annotations Events in React Pdfviewer control | Syncfusion
description: Learn here all about Annotations Events in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug

domainurl: ##DomainURL##
---

# Annotations Events in React PDF Viewer control

The PDF Viewer component triggers various events based on user interactions and changes in the component's state. These events can be used to perform actions when a specific event occurs. This section describes the events available in the PDF Viewer component.

| Event                                                              | Description                                                                        |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`annotationAdd`](#annotationadd)                                  | Triggers when an annotation is added to a page in the PDF document.                |
| [`annotationDoubleClick`](#annotationdoubleclick)                  | Triggers when an annotation is double-clicked.                                     |
| [`annotationMouseLeave`](#annotationmouseleave)                    | Triggers when the mouse pointer moves away from an annotation object.              |
| [`annotationMouseover`](#annotationmouseover)                      | Triggers when the mouse pointer moves over an annotation object.                   |
| [`annotationMove`](#annotationmove)                                | Triggers when an annotation is moved on a page in the PDF document.                |
| [`annotationMoving`](#annotationmoving)                            | Triggers while an annotation is being moved.                                       |
| [`annotationPropertiesChange`](#annotationpropertieschange)        | Triggers when the properties of an annotation are modified on a PDF page.          |
| [`annotationRemove`](#annotationremove)                            | Triggers when an annotation is removed from a page in the PDF document.            |
| [`annotationResize`](#annotationresize)                            | Triggers when an annotation is resized on a page in the PDF document.              |
| [`annotationSelect`](#annotationselect)                            | Triggers when an annotation is selected on a page in the PDF document.             |
| [`annotationUnSelect`](#annotationunselect)                        | Triggers when an annotation is unselected on a page in the PDF document.           |
| [`beforeAddFreeText`](#beforeaddfreetext)                          | Triggers before adding a text in the freeText annotation.                          |
| [`addSignature`](#addsignature)                                    | Triggers when a signature is added to a page in the PDF document.                  |
| [`removeSignature`](#removesignature)                              | Triggers when a signature is removed from a page in the PDF document.              |
| [`resizeSignature`](#resizesignature)                              | Triggers when a signature is resized on a page in the PDF document.                |
| [`signaturePropertiesChange`](#signaturepropertieschange)          | Triggers when the properties of a signature are changed on a page in the PDF document. |
| [`signatureSelect`](#signatureselect)                              | Triggers when a signature is selected on a page in the PDF document.               |
| [`signatureUnselect`](#signatureunselect)                          | Triggers when a signature is unselected on a page in the PDF document.             |


### annotationAdd

The [annotationAdd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationaddevent) event is triggered when an annotation is added to a PDF document's page.

#### Event Arguments

For event data, see [AnnotationAddEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationAddEventArgs/). It provides properties such as `annotationId`, `pageNumber`, `annotationType`, and `bounds`.

The following example illustrates how to handle the `annotationAdd` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationAdd = (args) => {
    console.log('Annotation added with ID: ' + args.annotationId);
    console.log('Annotation type: ' + args.annotationType);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationAdd={annotationAdd}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationDoubleClick

The [annotationDoubleClick](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationdoubleclickevent) event is triggered when an annotation is double-clicked.

#### Event Arguments

For event data, see [AnnotationDoubleClickEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationDoubleClickEventArgs/).

The following example illustrates how to handle the `annotationDoubleClick` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationDoubleClick = (args) => {
    console.log('Annotation double-clicked on page: ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationDoubleClick={annotationDoubleClick}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationMouseLeave

The [annotationMouseLeave](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationmouseleaveevent) event is triggered when the user's mouse pointer moves away from an annotation object.

#### Event Arguments

For event data, see [AnnotationMouseLeaveEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationMouseLeaveEventArgs/).

The following example illustrates how to handle the `annotationMouseLeave` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationMouseLeave = (args) => {
    console.log('Annotation mouse leave event is triggered for annotation with ID: ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationMouseLeave={annotationMouseLeave}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationMouseover

The [annotationMouseover](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationmouseoverevent) event is triggered when the mouse is moved over an annotation object.

#### Event Arguments

For event data, see [AnnotationMouseOverEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationMouseOverEventArgs/).

The following example illustrates how to handle the `annotationMouseover` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationMouseover = (args) => {
    console.log('Annotation mouse over event is triggered for annotation with ID: ' + args.annotationId);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationMouseover={annotationMouseover}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationMove

The [annotationMove](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationmoveevent) event is triggered when an annotation is moved over the page of the PDF document.

#### Event Arguments

For event data, see [AnnotationMoveEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationMoveEventArgs/).

The following example illustrates how to handle the `annotationMove` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationMove = (args) => {
    console.log('Annotation moved. ID: ' + args.annotationId + ' on page ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationMove={annotationMove}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationMoving

The [annotationMoving](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationmovingevent) event is triggered while an annotation is being moved.

#### Event Arguments

For event data, see [AnnotationMovingEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationMovingEventArgs/).

The following example illustrates how to handle the `annotationMoving` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationMoving = (args) => {
    console.log('Annotation is being moved. Current Action: ' + args.currentPosition);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationMoving={annotationMoving}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationPropertiesChange

The [annotationPropertiesChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationpropertieschangeevent) event is triggered when an annotation's property is modified on a PDF document page.

#### Event Arguments

For event data, see [AnnotationPropertiesChangeEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationPropertiesChangeEventArgs/). It provides properties such as `annotationId`, `pageNumber`, and `action`.

The following example illustrates how to handle the `annotationPropertiesChange` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationPropertiesChange = (args) => {
    console.log('Annotation properties changed for ID: ' + args.annotationId);
    console.log('isThicknessChanged: ' + args.isThicknessChanged);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationPropertiesChange={annotationPropertiesChange}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationRemove

The [annotationRemove](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationremoveevent) event is triggered when an annotation is removed from a PDF document's page.

#### Event Arguments

For event data, see [AnnotationRemoveEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationRemoveEventArgs/). It provides properties such as `annotationId` and `pageNumber`.

The following example illustrates how to handle the `annotationRemove` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationRemove = (args) => {
    console.log('Annotation removed with ID: ' + args.annotationId);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationRemove={annotationRemove}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationResize

The [annotationResize](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationresizeevent) event is triggered when an annotation is resized on a PDF document page.

#### Event Arguments

For event data, see [AnnotationResizeEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationResizeEventArgs/).

The following example illustrates how to handle the `annotationResize` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationResize = (args) => {
    console.log('Annotation resized. ID: ' + args.annotationId);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationResize={annotationResize}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationSelect

The [annotationSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationselectevent) event is triggered when an annotation is selected on a PDF document's page.

#### Event Arguments

For event data, see [AnnotationSelectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationSelectEventArgs/).

The following example illustrates how to handle the `annotationSelect` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationSelect = (args) => {
    console.log('Annotation selected with ID: ' + args.annotationId);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationSelect={annotationSelect}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### annotationUnselect

The [annotationUnselect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#annotationunselectevent) event is triggered when an annotation is unselected from the PDF document's page.

#### Event Arguments

For event data, see [AnnotationUnSelectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotationUnSelectEventArgs/).

The following example illustrates how to handle the `annotationUnselect` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const annotationUnselect = (args) => {
    console.log('Annotation unselected with ID: ' + args.annotationId);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      annotationUnselect={annotationUnselect}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### beforeAddFreeText

The [beforeAddFreeText](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#beforeaddfreetextevent) event is triggered before adding a text in the freeText annotation.

#### Event Arguments

For event data, see [BeforeAddFreeTextEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/beforeAddFreeTextEventArgs/).

The following example illustrates how to handle the `beforeAddFreeText` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const beforeAddFreeText = (args) => {
    console.log('Before adding free text on page: ' + args.pageIndex);
    // To prevent adding the free text annotation
    // args.cancel = true;
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      beforeAddFreeText={beforeAddFreeText}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Signature-related events

### addSignature

The [addSignature](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#addsignatureevent) event is triggered when a signature is added to a page of a PDF document.

#### Event Arguments

For event data, see [AddSignatureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/addSignatureEventArgs/). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `addSignature` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const addSignature = (args) => {
    console.log('Signature added to page: ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      addSignature={addSignature}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### removeSignature

The [removeSignature](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#removesignatureevent) event is triggered when the signature is removed from the page of a PDF document.

#### Event Arguments

For event data, see [RemoveSignatureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/removeSignatureEventArgs/). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `removeSignature` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const removeSignature = (args) => {
    console.log('Signature removed from page: ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      removeSignature={removeSignature}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### resizeSignature

The [resizeSignature](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#resizesignatureevent) event is triggered when the signature is resized and placed on a page of a PDF document.

#### Event Arguments

For event data, see [ResizeSignatureEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/resizeSignatureEventArgs/).

The following example illustrates how to handle the `resizeSignature` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const resizeSignature = (args) => {
    console.log('Signature resized on page ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resizeSignature={resizeSignature}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### signaturePropertiesChange

The [signaturePropertiesChange](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#signaturepropertieschangeevent) event is triggered when the property of the signature is changed in the page of the PDF document.

#### Event Arguments

For event data, see [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs/).

The following example illustrates how to handle the `signaturePropertiesChange` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const signaturePropertiesChange = (args) => {
    console.log('Signature properties changed on page ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      signaturePropertiesChange={signaturePropertiesChange}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### signatureSelect

The [signatureSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#signatureselectevent) event is triggered when signature is selected over the page of the PDF document.

#### Event Arguments

For event data, see [SignatureSelectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/signatureSelectEventArgs/).

The following example illustrates how to handle the `signatureSelect` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const signatureSelect = (args) => {
    console.log('Signature selected on page ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      signatureSelect={signatureSelect}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### signatureUnselect

The [signatureUnselect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#signatureunselectevent) event is triggered when signature is unselected over the page of the PDF document.

#### Event Arguments

For event data, see [SignatureUnSelectEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/signatureUnSelectEventArgs/).

The following example illustrates how to handle the `signatureUnselect` event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="React PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.17/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
<script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js" type ="text/javascript"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

import * as React from 'react';
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const signatureUnselect = (args) => {
    console.log('Signature unselected on page ' + args.pageIndex);
  };

  return (
    <PdfViewerComponent
      id="pdfViewer"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      signatureUnselect={signatureUnselect}
      style={{ height: '500px', width: '100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]} />
    </PdfViewerComponent>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}
