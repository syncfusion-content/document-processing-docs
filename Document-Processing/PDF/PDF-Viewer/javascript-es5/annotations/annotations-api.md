---
layout: post
title: Annotations API in JavaScript PDF Viewer | Syncfusion
description: Learn how to read and configure annotations using APIs in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations API in JavaScript PDF Viewer

The PDF Viewer provides APIs to read the loaded annotations and to configure global defaults for creating/editing annotations.

| API | Description |
|---|---|
| [annotationCollection](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationcollection) | Gets the loaded document annotation collection. |
| [annotationDrawingOptions](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationdrawingoptions) | Options to configure line-type annotation drawing behavior. |
| [annotationSelectorSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationselectorsettings) | Configures the annotation selector (selection UI). |
| [annotationSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationsettings) | Global defaults for all annotations. |
| [areaSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#areasettings) | Defaults for Area annotations. |
| [arrowSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#arrowsettings) | Defaults for Arrow annotations. |
| [circleSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#circlesettings) | Defaults for Circle annotations. |
| [customStamp](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#customstamp) | Defines custom stamp items. |
| [customStampSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#customstampsettings) | Defaults for Custom Stamp annotations. |
| [distanceSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#distancesettings) | Defaults for Distance annotations. |

## annotationCollection

Gets the loaded document annotation collection from the viewer instance.

```html
<button id="logAnnot">Show Annotation Collection</button>
<div id="PdfViewer"></div>
```
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

const btn = document.getElementById('logAnnot');
if (btn) {
  btn.addEventListener('click', () => {
    console.log(pdfviewer.annotationCollection);
  });
}
{% endhighlight %}
{% endtabs %}

## annotationDrawingOptions

Options for configuring line-type annotation drawing behavior.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.annotationDrawingOptions.enableLineAngleConstraints = true;
pdfviewer.annotationDrawingOptions.restrictLineAngleTo = 90;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## annotationSelectorSettings

Defines the settings of the annotation selector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.annotationSelectorSettings = {
  selectionBorderColor: 'blue',
  resizerBorderColor: 'red',
  resizerFillColor: '#4070ff',
  resizerSize: 8,
  selectionBorderThickness: 1,
  resizerShape: 'Circle',
  selectorLineDashArray: [5, 6],
  resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
  resizerCursorType: CursorType.grab
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## annotationSettings

Defines the global settings of annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.annotationSettings = {
  author: 'XYZ',
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  skipPrint: false,
  skipDownload: false,
  allowedInteractions: [AllowedInteraction.Resize]
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## areaSettings

Defines the defaults for Area annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.areaSettings = {
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
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## arrowSettings

Defines the defaults for Arrow annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.arrowSettings = {
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
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 0,
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## circleSettings

Defines the defaults for Circle annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.circleSettings = {
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
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## customStamp

Defines custom stamp items of the PDF Viewer.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.customStamp = [
  {
    customStampName: 'Sample',
    customStampImageSource: 'data:image/png;base64, Syncfusionpdfviewer'
  }
];

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## customStampSettings

Defines the defaults for Custom Stamp annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.customStampSettings = {
  opacity: 1,
  author: 'XYZ',
  width: 100,
  height: 100,
  left: 200,
  top: 200,
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  enableCustomStamp: true,
  allowedInteractions: [AllowedInteraction.None],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## distanceSettings

Defines the defaults for Distance annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.distanceSettings = {
  opacity: 1,
  fillColor: '#ffffff00',
  strokeColor: '#ff0000',
  author: 'Guest',
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
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  leaderLength: 40,
  resizeCursorType: CursorType.move,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableAnnotation

Enable or disable the Add/Edit Annotations tool in the toolbar.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableAnnotation = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableAnnotationToolbar

Show or hide the annotation toolbar when the document loads.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableAnnotationToolbar = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableFreeText

Enable or disable Free Text annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableFreeText = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableHandwrittenSignature

Enable or disable the handwritten signature feature.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableHandwrittenSignature = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableInkAnnotation

Enable or disable Ink annotations (true by default).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableInkAnnotation = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableMeasureAnnotation

Enable or disable calibrate/measurement annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableMeasureAnnotation = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableMultiPageAnnotation

Enable or disable multi-page text markup selection in UI.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

pdfviewer.enableMultiPageAnnotation = true;

pdfviewer.appendTo('#PdfViewer');
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf';
{% endhighlight %}
{% endtabs %}

## enableShapeAnnotation

Enable or disable shape annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableShapeAnnotation = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableShapeLabel

Enable or disable labels for shape annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableShapeLabel = true;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableStampAnnotations

Enable or disable stamp annotations at load time.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableStampAnnotations = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableStickyNotesAnnotation

Enable or disable sticky notes annotations at load time.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableStickyNotesAnnotation = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableTextMarkupAnnotation

Enable or disable text markup annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableTextMarkupAnnotation = false;

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## enableTextMarkupResizer

Enable or disable the text markup resizer to modify bounds in the UI.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

pdfviewer.enableTextMarkupResizer = true;

pdfviewer.appendTo('#PdfViewer');
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf';
{% endhighlight %}
{% endtabs %}

## exportAnnotationFileName

Gets or sets the exported annotations JSON file name.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.exportAnnotationFileName = 'Annotation export file_1';

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## freeTextSettings

Defines the defaults for Free Text annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, FontStyle, AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.freeTextSettings = {
  opacity: 1,
  fillColor: '#ffffff00',
  borderColor: '#4070ff',
  author: 'XYZ',
  borderWidth: 1,
  width: 151,
  fontSize: 16,
  height: 24.6,
  fontColor: '#000',
  fontFamily: 'Helvetica',
  defaultText: 'Type Here',
  textAlignment: 'Right',
  fontStyle: FontStyle.Italic,
  allowTextOnly: false,
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: null
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  allowedInteractions: [AllowedInteraction.None],
  isPrint: true,
  isReadonly: false,
  enableAutoFit: false
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## handWrittenSignatureSettings

Defines the defaults for handwritten signatures.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, DisplayMode, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.handWrittenSignatureSettings = {
  signatureItem: ['Signature', 'Initial'],
  saveSignatureLimit: 1,
  saveInitialLimit: 1,
  opacity: 1,
  strokeColor: '#000000',
  width: 150,
  height: 100,
  thickness: 1,
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  allowedInteractions: [AllowedInteraction.Resize],
  signatureDialogSettings: {
    displayMode: DisplayMode.Draw | DisplayMode.Text | DisplayMode.Upload,
    hideSaveSignature: false
  },
  initialDialogSettings: {
    displayMode: DisplayMode.Draw | DisplayMode.Text | DisplayMode.Upload,
    hideSaveSignature: false
  }
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## highlightSettings

Defines the defaults for Highlight annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.highlightSettings = {
  opacity: 1,
  color: '#DAFF56',
  author: 'XYZ',
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Square',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges
  },
  isLock: false,
  enableMultiPageAnnotation: false,
  enableTextMarkupResizer: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## inkAnnotationSettings

Defines the defaults for Ink annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.inkAnnotationSettings = {
  author: 'XYZ',
  opacity: 1,
  strokeColor: '#ff0000',
  thickness: 1,
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## isAnnotationToolbarVisible

Open the annotation toolbar initially and read its visibility state.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

pdfviewer.isAnnotationToolbarVisible = true;

pdfviewer.appendTo('#PdfViewer');
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf';
{% endhighlight %}
{% endtabs %}

## lineSettings

Defines the defaults for Line annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.lineSettings = {
  opacity: 1,
  color: '#9c2592',
  fillColor: '#ffffff00',
  strokeColor: '#ff0000',
  author: 'XYZ',
  thickness: 1,
  borderDashArray: 1,
  lineHeadStartStyle: 'None',
  lineHeadEndStyle: 'None',
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Square',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: null
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## measurementSettings

Defines the defaults for Measurement annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.measurementSettings = {
  conversionUnit: 'cm',
  displayUnit: 'cm',
  scaleRatio: 1,
  depth: 96
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## perimeterSettings

Defines the defaults for Perimeter annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.perimeterSettings = {
  opacity: 1,
  fillColor: '#ffffff00',
  strokeColor: '#ff0000',
  author: 'XYZ',
  thickness: 1,
  borderDashArray: 1,
  lineHeadStartStyle: 'Open',
  lineHeadEndStyle: 'Open',
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## polygonSettings

Defines the defaults for Polygon annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.polygonSettings = {
  opacity: 1,
  fillColor: '#ffffff00',
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
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## radiusSettings

Defines the defaults for Radius annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.radiusSettings = {
  opacity: 1,
  fillColor: '#ffffff00',
  strokeColor: '#ff0000',
  author: 'XYZ',
  thickness: 1,
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## rectangleSettings

Defines the defaults for Rectangle annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.rectangleSettings = {
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
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## shapeLabelSettings

Defines the defaults for shape labels.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.enableShapeLabel = true;
pdfviewer.shapeLabelSettings = {
  opacity: 1,
  fillColor: '#9c2592',
  borderColor: '#ff0000',
  fontColor: '#000',
  fontSize: 16,
  labelHeight: 24.6,
  labelMaxWidth: 151,
  labelContent: 'XYZ'
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## stampSettings

Defines the defaults for Stamp annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, DynamicStampItem, SignStampItem, StandardBusinessStampItem, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.stampSettings = {
  opacity: 1,
  author: 'XYZ',
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 5,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  minHeight: 10,
  minWidth: 10,
  maxWidth: 100,
  maxHeight: 100,
  isLock: false,
  dynamicStamps: [
    DynamicStampItem.Revised,
    DynamicStampItem.Reviewed,
    DynamicStampItem.Received,
    DynamicStampItem.Confidential,
    DynamicStampItem.Approved,
    DynamicStampItem.NotApproved
  ],
  signStamps: [
    SignStampItem.Witness,
    SignStampItem.InitialHere,
    SignStampItem.SignHere,
    SignStampItem.Accepted,
    SignStampItem.Rejected
  ],
  standardBusinessStamps: [
    StandardBusinessStampItem.Approved,
    StandardBusinessStampItem.NotApproved,
    StandardBusinessStampItem.Draft,
    StandardBusinessStampItem.Final,
    StandardBusinessStampItem.Completed,
    StandardBusinessStampItem.Confidential,
    StandardBusinessStampItem.ForPublicRelease,
    StandardBusinessStampItem.NotForPublicRelease,
    StandardBusinessStampItem.ForComment,
    StandardBusinessStampItem.Void,
    StandardBusinessStampItem.PreliminaryResults,
    StandardBusinessStampItem.InformationOnly
  ],
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## stickyNotesSettings

Defines the defaults for Sticky Notes annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.stickyNotesSettings = {
  author: 'XYZ',
  opacity: 1,
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'red',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  isLock: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## strikethroughSettings

Defines the defaults for Strikethrough annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.strikethroughSettings = {
  opacity: 1,
  color: '#DAFF56',
  author: 'XYZ',
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Square',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges
  },
  isLock: false,
  enableMultiPageAnnotation: false,
  enableTextMarkupResizer: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## underlineSettings

Defines the defaults for Underline annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.underlineSettings = {
  opacity: 1,
  color: '#9c2592',
  author: 'XYZ',
  annotationSelectorSettings: {
    selectionBorderColor: 'blue',
    resizerBorderColor: 'black',
    resizerFillColor: '#FF4081',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Square',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges
  },
  isLock: false,
  enableMultiPageAnnotation: false,
  enableTextMarkupResizer: false,
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## volumeSettings

Defines the defaults for Volume annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf';

pdfviewer.volumeSettings = {
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
    resizerBorderColor: 'black',
    resizerFillColor: '#4070ff',
    resizerSize: 8,
    selectionBorderThickness: 1,
    resizerShape: 'Circle',
    selectorLineDashArray: [5, 6],
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges,
    resizerCursorType: CursorType.grab
  },
  allowedInteractions: [AllowedInteraction.Resize],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export and Import Annotation](../../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)