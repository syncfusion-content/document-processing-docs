---
layout: post
title: Annotations API in TypeScript PDF Viewer | Syncfusion
description: Learn how to read and configure annotations using APIs in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations API in TypeScript PDF Viewer

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
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
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
  allowedInteractions: ['Resize']
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## areaSettings

Defines the defaults for Area annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';
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
  allowedInteractions: ['Resize'],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## arrowSettings

Defines the defaults for Arrow annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';
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
  allowedInteractions: ['Resize'],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## circleSettings

Defines the defaults for Circle annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';
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
  allowedInteractions: ['Resize'],
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
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
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
  allowedInteractions: ['None'],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## distanceSettings

Defines the defaults for Distance annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationResizerLocation, CursorType } from '@syncfusion/ej2-pdfviewer';
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
  allowedInteractions: ['Resize'],
  isPrint: true
};

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## See also

- [Create and modify annotations](./create-modify-annotation)
- [Customize annotations](./customize-annotation)
- [Annotation permissions](./annotation-permission)
- [Export annotations](./export-import/export-annotation)
- [Import annotations](./export-import/import-annotation)
