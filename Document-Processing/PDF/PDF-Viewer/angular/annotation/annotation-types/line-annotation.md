---
layout: post
title: Line Annotation (Shape) in Angular PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Line annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Line Annotation (Shape) in Angular PDF Viewer

Line annotations allow users to draw straight connectors or callouts on PDFs for markup, review, diagrams, or measurement guides. They support customization of color, thickness, opacity, and arrowheads, and can be edited, resized, deleted, or exported along with the document.

![Line overview](../../../javascript-es6/annotations/annotation-images/line-annot.png)

## Enable Line Annotation in the Viewer

To enable Line annotations, inject the following modules into the Angular PDF Viewer:

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

## Add Line Annotation

### Add Line Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Line**.
3. Click and drag on the PDF page to draw the line.

![Shape toolbar](../../../javascript-es6/annotations/annotation-images/line-annot.png)

> **Note:** When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Line Mode

Switch the viewer into line mode using `setAnnotationMode('Line')`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

enableLineMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('Line');
}

{% endhighlight %}
{% endtabs %}

#### Exit Line Mode

Switch back to normal mode using:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

exitLineMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('None');
}

{% endhighlight %}
{% endtabs %}

### Add Line Programmatically

You can add line annotations using the [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) API.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addLine(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Line', {
    offset: { x: 200, y: 230 },
    pageNumber: 1,
    vertexPoints: [
      { x: 200, y: 230 },
      { x: 350, y: 230 }
    ]
  });
}

{% endhighlight %}
{% endtabs %}

## Customize Line Appearance

Configure default line appearance using the [`lineSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#linesettings) property.

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
        [lineSettings]="lineSettings"
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

  public lineSettings = {
    strokeColor: '#0066ff',
    thickness: 2,
    opacity: 0.9
  };
}

{% endhighlight %}
{% endtabs %}

N> Fill color is available only when an arrowhead style is applied at the Start or End of the line. If both are set to `None`, the Fill option is disabled.

## Manage Line (Edit, Move, Resize, Delete)

### Edit Line 

#### Edit Line Appearance (UI)
- Select a line to view resize handles.
- Drag endpoints to adjust length/angle.
- Edit stroke color, opacity, and thickness using the annotation toolbar.

![Shape tools](../../images/shape_toolbar.png)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../../javascript-es6/images/edit_color.png)

- **Edit Opacity** slider
![Edit opacity](../../../javascript-es6/images/edit_opacity.png)

- **Line Properties** 
Open the Line Properties dialog via **Right Click → Properties**.

![Line properties dialog](../../../javascript-es6/images/shape_lineprty.png)

#### Edit Line Programmatically

Modify an existing Line programmatically using `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

editLineProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  for (const annot of pdfViewer.annotationCollection) {
    if (annot.subject === 'Line') {
      annot.strokeColor = '#ff0000';
      annot.thickness = 3;
      pdfViewer.annotation.editAnnotation(annot);
      break;
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Delete Line

The PDF Viewer supports deleting existing annotations through the UI and API.
See [**Delete Annotation**](../remove-annotations) for full behavior and workflows.

### Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to line annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding Individual Annotation

Set properties for individual line annotations using the [`lineSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#linesettings) API or by passing per‑annotation values during [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addMultipleLines(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];

  // Line 1
  pdfViewer.annotation.addAnnotation('Line', {
    offset: { x: 200, y: 230 },
    pageNumber: 1,
    vertexPoints: [
      { x: 200, y: 230 },
      { x: 350, y: 230 }
    ],
    strokeColor: '#0066ff',
    thickness: 2,
    opacity: 0.9,
    author: 'User 1'
  });

  // Line 2
  pdfViewer.annotation.addAnnotation('Line', {
    offset: { x: 220, y: 300 },
    pageNumber: 1,
    vertexPoints: [
      { x: 220, y: 300 },
      { x: 400, y: 300 }
    ],
    strokeColor: '#ff1010',
    thickness: 3,
    opacity: 0.9,
    author: 'User 2'
  });
}

{% endhighlight %}
{% endtabs %}

## Disable Line Annotation

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

## Handle Line Events

The PDF viewer provides annotation life-cycle events that notify when Line annotations are added, modified, selected, or removed.
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
