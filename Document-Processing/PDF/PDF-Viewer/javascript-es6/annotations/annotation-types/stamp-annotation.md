---
layout: post
title: Stamp annotation in TypeScript PDF Viewer | Syncfusion
description: Learn to add, edit, delete, rotate, and customize Stamp annotations in Syncfusion TypeScript PDF Viewer, with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Stamp annotation in TypeScript PDF Viewer

The PDF Viewer control provides options to add, edit, delete, and rotate the following stamp annotations in PDF documents:

* Dynamic
* Sign Here
* Standard Business
* Custom Stamp

![Stamp annotations overview](../../images/stamp_annot.png)

## Add Stamp Annotation

### Add Stamp annotations in UI

Use the annotation toolbar to:
- Click the **Edit Annotation** button.
- Open the **Stamp Annotation** dropdown.
![Stamp tool](../../images/stamp_tool.png)
- Choose a stamp type and place it on the page.
![Select stamp type](../../images/selectstamp_annot.png)

N> When in pan mode and a stamp tool is selected, the viewer switches to text select mode automatically.

### Switch to specific stamp modes

```html
<button id="dynamicStamp">Dynamic Stamp</button>
<button id="signStamp">Sign Stamp</button>
<button id="standardBusinessStamp">Standard Business Stamp</button>
<button id="customStamp">Custom Stamp</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, SignStampItem, StandardBusinessStampItem, DynamicStampItem, StampSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('dynamicStamp')?.addEventListener('click', () => {
  pdfviewer.annotationModule.setAnnotationMode('Stamp', DynamicStampItem.NotApproved);
});

document.getElementById('signStamp')?.addEventListener('click', () => {
  pdfviewer.annotationModule.setAnnotationMode('Stamp', undefined, SignStampItem.Witness);
});

document.getElementById('standardBusinessStamp')?.addEventListener('click', () => {
  pdfviewer.annotationModule.setAnnotationMode('Stamp', undefined, undefined, StandardBusinessStampItem.Approved);
});

document.getElementById('customStamp')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 100, y: 440 },
    width: 46,
    height: 100,
    pageNumber: 1,
    isLock: true,
    author: 'Guest',
    customStamps: [{
      customStampName: 'Image',
      customStampImageSource: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...'
    }]
  } as unknown as StampSettings);
});
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, SignStampItem, StandardBusinessStampItem, DynamicStampItem, StampSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('dynamicStamp')?.addEventListener('click', () => {
  pdfviewer.annotationModule.setAnnotationMode('Stamp', DynamicStampItem.NotApproved);
});

document.getElementById('signStamp')?.addEventListener('click', () => {
  pdfviewer.annotationModule.setAnnotationMode('Stamp', undefined, SignStampItem.Witness);
});

document.getElementById('standardBusinessStamp')?.addEventListener('click', () => {
  pdfviewer.annotationModule.setAnnotationMode('Stamp', undefined, undefined, StandardBusinessStampItem.Approved);
});
{% endhighlight %}
{% endtabs %}

### Add Stamp annotations programmatically

Create stamps programmatically using the `addAnnotation` method.

```html
<button id="addDynamic">Add Dynamic Stamp</button>
<button id="addSign">Add Sign Stamp</button>
<button id="addStandard">Add Standard Business Stamp</button>
<button id="addCustom">Add Custom Stamp</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, StampSettings, DynamicStampItem, SignStampItem, StandardBusinessStampItem } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addDynamic')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 140 }, pageNumber: 1
  } as StampSettings, DynamicStampItem.Approved);
});

document.getElementById('addSign')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 240 }, pageNumber: 1
  } as StampSettings, undefined, SignStampItem.Witness);
});

document.getElementById('addStandard')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 340 }, pageNumber: 1
  } as StampSettings, undefined, undefined, StandardBusinessStampItem.Approved);
});

document.getElementById('addCustom')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 100, y: 440 }, width: 46, height: 100, pageNumber: 1, isLock: true,
    author: 'Guest',
    customStamps: [{ customStampName: 'Image', customStampImageSource: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...' }]
  } as unknown as StampSettings);
});
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, StampSettings, DynamicStampItem, SignStampItem, StandardBusinessStampItem } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addDynamic')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 140 }, pageNumber: 1
  } as StampSettings, DynamicStampItem.Approved);
});

document.getElementById('addSign')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 240 }, pageNumber: 1
  } as StampSettings, undefined, SignStampItem.Witness);
});

document.getElementById('addStandard')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 340 }, pageNumber: 1
  } as StampSettings, undefined, undefined, StandardBusinessStampItem.Approved);
});

document.getElementById('addCustom')?.addEventListener('click', () => {
  pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 100, y: 440 }, width: 46, height: 100, pageNumber: 1, isLock: true,
    author: 'Guest',
    customStamps: [{ customStampName: 'Image', customStampImageSource: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...' }]
  } as StampSettings);
});
{% endhighlight %}
{% endtabs %}

## Edit Stamp Annotation

### Edit Stamp annotations in UI

Use the viewer to select, move, resize, rotate, and delete Stamp annotations:
- Select a Stamp to show its resize and rotation handles.
- Move: drag inside the stamp to reposition it on the page.
- Resize: drag any corner or side handle to adjust the size.
- Rotate: drag the rotation handle to rotate the stamp.
- Delete or access more options from the context menu.

Use the toolbar to change appearance:
- Adjust Opacity using the Edit Opacity tool.

### Edit Stamp Annotation programmatically

Use editAnnotation to change bounds or lock state.

```html
<button id="editStamp">Edit Stamp annotation</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

pdfviewer.appendTo('#PdfViewer');

document.getElementById('editStamp')?.addEventListener('click', () => {
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].shapeAnnotationType === 'stamp') {
      const width = pdfviewer.annotationCollection[i].bounds.width;
      const height = pdfviewer.annotationCollection[i].bounds.height;
      pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width, height };
      pdfviewer.annotationCollection[i].annotationSettings.isLock = true;
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
});
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.appendTo('#PdfViewer');

document.getElementById('editStamp')?.addEventListener('click', () => {
  for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].shapeAnnotationType === 'stamp') {
      const width = pdfviewer.annotationCollection[i].bounds.width;
      const height = pdfviewer.annotationCollection[i].bounds.height;
      pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width, height };
      pdfviewer.annotationCollection[i].annotationSettings.isLock = true;
      pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
    }
  }
});
{% endhighlight %}
{% endtabs %}

## Default stamp settings during initialization

Set defaults using stampSettings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.stampSettings = { opacity: 0.3, author: 'Guest User' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.stampSettings = { opacity: 0.3, author: 'Guest User' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Set properties while adding Individual Annotation

Set properties for individual annotation before creating the control using `StampSettings`.

> After editing default color and opacity using the Edit Color and Edit Opacity tools, the values update to the selected settings.

Refer to the following code snippet to set the default Stamp settings.

```html
<button id="Stamp">Add Stamp</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, DynamicStampItem, StampSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');
//Apply Stamp Settings while adding individual Annotation
document.getElementById('Stamp')?.addEventListener('click', function () {
     pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 140 }, pageNumber: 1,
     opacity: 0.3, author: 'Guest User'
  } as StampSettings, DynamicStampItem.Approved);
});
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, DynamicStampItem, StampSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
//Apply Stamp Settings while adding individual Annotation
document.getElementById('Stamp')?.addEventListener('click', function () {
     pdfviewer.annotation.addAnnotation('Stamp', {
    offset: { x: 200, y: 140 }, pageNumber: 1,
     opacity: 0.3, author: 'Guest User'
  } as StampSettings, DynamicStampItem.Approved);
});
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../overview)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export and Import Annotation](../../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)