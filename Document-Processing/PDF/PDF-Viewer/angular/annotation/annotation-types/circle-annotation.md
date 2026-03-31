---
layout: post
title: Circle Annotation (Shape) in Angular PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Circle annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Circle Annotation (Shape) in Angular PDF Viewer
Circle annotations let users highlight circular regions or draw emphasis bubbles on PDFs for reviews and markups. You can add circles from the toolbar, switch to circle mode programmatically, customize appearance, edit/delete them in the UI, and export them with the document.

![Circle overview](../../../javascript-es6/annotations/annotation-images/circle-annot.png)

## Enable Circle Annotation in the Viewer

To enable Circle annotations, inject the following modules into the Angular PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotation)
- [**Toolbar**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbar)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}

{% endhighlight %}
{% endtabs %}

## Add Circle Annotation

### Apply Circle Annotation Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Circle**.
3. Click and drag on the PDF page to draw the circle (ellipse).

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Circle Mode

Switch the viewer into circle mode using `setAnnotationMode('Circle')`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

enableCircleMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('Circle');
}

{% endhighlight %}
{% endtabs %}

#### Exit Circle Mode

Switch back to normal mode using:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

exitCircleMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('None');
}

{% endhighlight %}
{% endtabs %}

### Add Circle Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) API to draw a circle (ellipse) at a specific location.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addCircle(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Circle', {
    offset: { x: 200, y: 620 },
    pageNumber: 1,
    width: 90,
    height: 90
  });
}

{% endhighlight %}
{% endtabs %}

## Customize Circle Appearance
Configure default circle appearance (fill color, stroke color, thickness, opacity) using the [`circleSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#circlesettings) property.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [circleSettings]="circleSettings"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  // Circle annotation default settings
  public circleSettings = {
    fillColor: '#ffa500',
    strokeColor: '#ff6a00',
    thickness: 2,
    opacity: 0.9
  };
}

{% endhighlight %}
{% endtabs %}

## Manage Circle (Edit, Move, Resize, Delete)

### Edit Circle

#### Edit Circle (UI)

- Select a Circle to view resize handles.
- Drag any side/corner to resize; drag inside the shape to move it.
- Edit **fill**, **stroke**, **thickness**, and **opacity** using the annotation toolbar.

![Shape tools](../../images/shape_toolbar.png)

Use the annotation toolbar:
- **Edit fill Color** tool  
![Edit fill color](../../../javascript-es6/images/shape_fillColor.png)

- **Edit stroke Color** tool
![Edit stroke color](../../../javascript-es6/images/shape_strokecolor.png)

- **Edit Opacity** slider
![Edit opacity](../../../javascript-es6/images/shape_opacity.png)

- **Edit Thickness** slider
![Edit thickness](../../../javascript-es6/images/shape_thickness.png)

#### Edit Circle Programmatically

Modify an existing Circle programmatically using `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

editCircleProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  for (const annot of pdfViewer.annotationCollection) {
    if (annot.subject === 'Circle') {
      annot.strokeColor = '#0000ff';
      annot.thickness = 2;
      annot.fillColor = '#ffff00';
      pdfViewer.annotation.editAnnotation(annot);
      break;
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Delete Circle
The PDF Viewer supports deleting existing annotations through the UI and API.
See [**Delete Annotation**](../remove-annotations) for full behavior and workflows.

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to circle annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding Individual Annotation
Set properties for individual circle annotations by passing values directly during [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addMultipleCircles(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];

  // Circle 1
  pdfViewer.annotation.addAnnotation('Circle', {
    offset: { x: 200, y: 620 },
    pageNumber: 1,
    width: 100,
    height: 100,
    opacity: 0.9,
    strokeColor: '#ff6a00',
    fillColor: '#ffa500',
    author: 'User 1'
  });

  // Circle 2
  pdfViewer.annotation.addAnnotation('Circle', {
    offset: { x: 340, y: 620 },
    pageNumber: 1,
    width: 80,
    height: 80,
    opacity: 0.85,
    strokeColor: '#ff1010',
    fillColor: '#ffe600',
    author: 'User 2'
  });
}

{% endhighlight %}
{% endtabs %}

## Disable Circle Annotation
Disable shape annotations (Line, Arrow, Rectangle, Circle, Polygon) using the [`enableShapeAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enableshapeannotation) property.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [enableShapeAnnotation]="false"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}

{% endhighlight %}
{% endtabs %}

## Handle Circle Events

The PDF viewer provides annotation life-cycle events that notify when Circle annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
