---
layout: post
title: Free text annotation in TypeScript PDF Viewer control | Syncfusion
description: Learn about free text annotations in the Syncfusion TypeScript PDF Viewer (Essential JS 2): add, edit, delete, and default settings.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Free text annotation in TypeScript PDF Viewer control

The PDF Viewer control provides options to add, edit, and delete free text annotations.

## Enable or Disable Free Text annotation

Enables or disables the free text annotation feature in the PDF Viewer. For more details, see [enableFreeText API Documentation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enablefreetext).

```html
<div id="pdfViewer" style="height: 100%;width: 100%;"></div>
```

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer({
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib',
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    enableFreeText: false
});
viewer.appendTo('#pdfViewer');
```

## Add a free text annotation to the PDF document

Free text annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. The annotation toolbar appears below it.
* Select the **Free Text Annotation** button to enable free text annotation mode.
* Add text anywhere on the pages of the PDF document.

When in pan mode, selecting free text annotation switches the PDF Viewer to text select mode.

![Free text tool in the annotation toolbar](../images/freetext_tool.png)

The following example switches to free text annotation mode using a button click.


```html
<button id="addFreeTextAnnotation">FreeText</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

let addFreeTextAnnotationButton = document.getElementById('addFreeTextAnnotation');
if (addFreeTextAnnotationButton) {
    addFreeTextAnnotationButton.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("FreeText");
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

let addFreeTextAnnotationButton = document.getElementById('addFreeTextAnnotation');
if (addFreeTextAnnotationButton) {
    addFreeTextAnnotationButton.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("FreeText");
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Add a free text annotation programmatically to the PDF document

The PDF Viewer library allows adding a free text annotation programmatically using the [addAnnotation()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#annotation) method.

Here is an example of adding a free text annotation programmatically using addAnnotation():

```html
<button id="addFreeTextAnnotation"> Add FreeText Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, FreeTextSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";

pdfviewer.appendTo('#PdfViewer');

let addFreeTextAnnotation = document.getElementById('addFreeTextAnnotation');
if (addFreeTextAnnotation) {
    addFreeTextAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("FreeText", {
                offset: { x: 120, y: 80 },
                fontSize: 16,
                fontFamily: "Helvetica",
                pageNumber: 1,
                width: 200,
                height: 40,
                isLock: false,
                defaultText: "Syncfusion"
            } as FreeTextSettings);
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, FreeTextSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

pdfviewer.appendTo('#PdfViewer');

let addFreeTextAnnotation = document.getElementById('addFreeTextAnnotation');
if (addFreeTextAnnotation) {
    addFreeTextAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("FreeText", {
                offset: { x: 120, y: 80 },
                fontSize: 16,
                fontFamily: "Helvetica",
                pageNumber: 1,
                width: 200,
                height: 40,
                isLock: false,
                defaultText: "Syncfusion"
            } as FreeTextSettings);
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Change the content of an existing free text annotation programmatically

To change the content of an existing free text annotation programmatically, use the editAnnotation() method.

Here is an example of changing the content of a free text annotation using editAnnotation():

```html
<button id="changeContent">Change Contect</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";

pdfviewer.appendTo('#PdfViewer');

let changeContent = document.getElementById('changeContent');
if (changeContent) {
    changeContent.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === 'Text Box') {
                  pdfviewer.annotationCollection[i].dynamicText = 'syncfusion';
                  pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

pdfviewer.appendTo('#PdfViewer');
let changeContent = document.getElementById('changeContent');
if (changeContent) {
    changeContent.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === 'Text Box') {
                  pdfviewer.annotationCollection[i].dynamicText = 'syncfusion';
                  pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

{% endhighlight %}
{% endtabs %}

N> The current version of the PDF Viewer does not edit existing document text. New free text annotations can be added and modified within the document.

## Edit the properties of free text annotations

Font family, font size, styles, font color, text alignment, fill color, stroke color, border thickness, and opacity can be edited using the Font Family, Font Size, Font Color, Text Align, Font Style, Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Edit font family

Edit the font family by selecting a font in the Font Family tool.

![Change font family](../images/fontfamily.png)

### Edit font size

Edit the font size by selecting a size in the Font Size tool.

![Change font size](../images/fontsize.png)

### Edit font color

Edit the font color using the color palette in the Font Color tool.

![Change font color](../images/fontcolor.png)

### Edit text alignment

Align text by selecting an option from the Text Align tool.

![Set text alignment](../images/textalign.png)

### Edit text styles

Edit text styles by selecting options in the Font Style tool.

![Change text styles](../images/fontstyle.png)

### Edit fill color

Edit the fill color using the color palette in the Edit Color tool.

![Change fill color](../images/fillcolor.png)

### Edit stroke color

Edit the stroke color using the color palette in the Edit Stroke Color tool.

![Change stroke color](../images/fontstroke.png)

### Edit thickness

Edit border thickness using the range slider in the Edit Thickness tool.

![Change border thickness](../images/fontthickness.png)

### Edit opacity

Edit opacity using the range slider in the Edit Opacity tool.

![Change opacity](../images/fontopacity.png)

## Set default properties during control initialization

Default properties for free text annotations can be set before creating the control using FreeTextSettings.

After changing default values, the selected values are applied. The following example sets default free text annotation settings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.freeTextSettings = { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' };
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.freeTextSettings = { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' };
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

N> To know more about FreeTextSettings, you can refer [FreeTextSettings API documentation](https://ej2.syncfusion.com/documentation/api/pdfviewer#freetextsettings)

## Set default free text placeholder

The `isValidFreeText` property specifies whether newly added free text annotations display a placeholder. By default, `isValidFreeText` is `true`.  
- `true`: Displays **Type here** as placeholder text.  
- `false`: Leaves the annotation blank so that user-entered text remains visible.

For more information, see [isValidFreeText API documentation](https://ej2.syncfusion.com/documentation/api/pdfviewer#isvalidfreetext).

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer({
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib',
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    // Set to true to display "Type here" as default text
    // Set to false to retain user-entered text
    isValidFreeText: true
});
viewer.appendTo('#pdfViewer');
```