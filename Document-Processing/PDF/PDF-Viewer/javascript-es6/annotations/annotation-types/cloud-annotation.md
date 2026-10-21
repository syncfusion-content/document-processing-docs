---
layout: post
title: Cloud Annotation in JavaScript (ES6) PDF Viewer | Syncfusion
description: Add, customize, and manage Cloud annotations in the JavaScript (ES6) PDF Viewer to emphasize content with a cloud-shaped border during document review.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Cloud Annotation in JavaScript (ES6) PDF Viewer

Cloud annotations render a cloud-shaped border around a marked region, drawing clear visual emphasis on content that matters during a review. They are commonly used in document review and markup scenarios to highlight text, figures, or areas of a contract that require approval, clarification, or follow-up.

Unlike the other shape annotations, which use straight, circular, or polygonal outlines, a Cloud annotation is drawn with a scalloped cloud border. It is available in the **Shape Annotation** dropdown of the annotation toolbar, so it can be created the same way as Rectangle, Circle, or Polygon annotations, and it can be moved, resized, restyled, deleted, commented on, saved, and exported like any other annotation.

N> Cloud annotations are exposed as a separate annotation type in the UI and API, but they are maintained internally as Polygon annotations with a cloud border style.

## Enable Cloud Annotation in the Viewer

To enable Cloud annotations, inject the following modules into the JavaScript (ES6) PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotation)
- [**Toolbar**](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#toolbar)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Annotation } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Annotation);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Annotation } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Annotation);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Add Cloud Annotation

### Add Cloud Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Expand the **Shape Annotation** dropdown.
3. Select **Cloud Annotation**.
4. Draw the cloud annotation on the PDF page.
5. Release the mouse or pointer to complete the annotation.

![Cloud Annotation tool in the Shape Annotation dropdown](../../images/ui-cloud-annot.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Add Cloud Annotation Programmatically

Use the [`addAnnotation`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#addannotation) API to draw a cloud annotation at a specific location by specifying the `vertexPoints` of the cloud shape.

```html
<button id="addCloudAnnotation">Add Cloud annotation programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Annotation, CloudSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Annotation);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addCloudAnnotation')?.addEventListener('click', () => {
    pdfviewer.annotation.addAnnotation('Cloud', {
        offset: { x: 200, y: 800 },
        pageNumber: 2,
        vertexPoints: [
            { x: 200, y: 800 },
            { x: 242, y: 771 },
            { x: 289, y: 799 },
            { x: 278, y: 842 },
            { x: 211, y: 842 },
            { x: 200, y: 800 }
        ]
    } as CloudSettings);
});
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Annotation, CloudSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Annotation);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addCloudAnnotation')?.addEventListener('click', () => {
    pdfviewer.annotation.addAnnotation('Cloud', {
        offset: { x: 200, y: 800 },
        pageNumber: 2,
        vertexPoints: [
            { x: 200, y: 800 },
            { x: 242, y: 771 },
            { x: 289, y: 799 },
            { x: 278, y: 842 },
            { x: 211, y: 842 },
            { x: 200, y: 800 }
        ]
    } as CloudSettings);
});
{% endhighlight %}
{% endtabs %}

The following properties are used in the above example:

| Property | Description |
| --- | --- |
| `offset` | Specifies the top-left position of the annotation on the PDF page. |
| `pageNumber` | Specifies the page on which the annotation is added. |
| `vertexPoints` | Specifies the points that define the cloud shape. The first and last points must be the same to close the shape. |

## Modify Cloud Annotation

### Select and Edit a Cloud Annotation

1. Select an existing Cloud annotation on the PDF page.
2. Drag the annotation to move it to a different position on the page.
3. Drag the selection handles to resize the annotation.
4. Use the annotation properties toolbar to edit the cloud shape appearance.

## Customize Cloud Annotation Appearance

Select a Cloud annotation and use the annotation properties toolbar to customize its appearance. The following appearance settings are supported:

- **Border color** – changes the cloud border color.
- **Fill color** – changes the color inside the cloud shape.
- **Opacity** – adjusts the transparency of the annotation.
- **Thickness** – adjusts the cloud border thickness.
- **Border Style** – changes the annotation border style.
- **Cloud Intensity** – controls the appearance of the cloud border.

Use the color picker in the annotation toolbar to change the cloud annotation's border or fill color.

![Cloud Annotation color picker](../../images/ui-edit-cloud.png)

Use the border-style dropdown to choose the cloud annotation's outline style.

![Cloud border style options in the annotation toolbar](../../images/ui-cloud-border.png)

N> The cloud intensity value determines how prominently the cloud border is rendered around the shape.

### Configure Default Cloud Annotation Settings

Configure the default cloud appearance (fill color, stroke color, opacity, border style, and cloud intensity) using the [`cloudSettings`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#cloudsettings) property.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Annotation, BorderStyle } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Annotation);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
pdfviewer.cloudSettings = {
    opacity: 1,
    strokeColor: '#ff0000',
    fillColor: '#9c2592',
    author: 'Cloud',
    borderStyle: BorderStyle.Cloud,
    cloudIntensity: 2
};
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { PdfViewer, Toolbar, Annotation, BorderStyle } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Annotation);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.cloudSettings = {
    opacity: 1,
    strokeColor: '#ff0000',
    fillColor: '#9c2592',
    author: 'Cloud',
    borderStyle: BorderStyle.Cloud,
    cloudIntensity: 2
};
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

The following properties are supported in `cloudSettings`:

| Property | Description |
| --- | --- |
| `opacity` | Specifies the opacity applied to the cloud annotation. |
| `strokeColor` | Specifies the border color of the cloud annotation. |
| `fillColor` | Specifies the fill color inside the cloud shape. |
| `author` | Specifies the author of the cloud annotation. |
| `borderStyle` | Specifies the border style of the cloud annotation. |
| `cloudIntensity` | Specifies the appearance of the cloud border. |

## Delete Cloud Annotation

The PDF Viewer supports deleting existing annotations through the UI and API.
See [**Delete Annotation**](../delete-annotation) for full behavior and workflows.

## Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to cloud annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Handle Cloud Annotation Events

The PDF viewer provides annotation life-cycle events that notify when Cloud annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import

The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

N> Cloud annotation appearance settings persist when the PDF is saved, when annotations are exported and imported, and when the document is reloaded.

## Key Notes

- Cloud annotations are available through the **Shape Annotation** toolbar dropdown.
- Cloud annotations are drawn with a cloud-style border rendering.
- Cloud annotations can be created through both UI interaction and API methods.
- Cloud annotation appearance settings persist during save, import, export, and reload operations.

## See Also
- [Polygon Annotation](./polygon-annotation)
- [Rectangle Annotation](./rectangle-annotation)
- [Circle Annotation](./circle-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
