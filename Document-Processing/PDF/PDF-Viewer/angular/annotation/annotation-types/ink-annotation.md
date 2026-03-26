---
layout: post
title: Add Freehand Drawing (Ink) Annotation in Angular PDF Viewer | Syncfusion
description: Learn how to enable, draw, customize, and manage Ink (freehand) annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Freehand Drawing (Ink) Annotations in Angular PDF Viewer
Ink annotations allow users to draw freehand strokes using mouse, pen, or touch input to mark content naturally.

![Ink overview](../../images/ink_annotation.png)

## Enable Freehand Drawing (Ink)

To enable ink annotations, inject the following modules into the Angular PDF Viewer:

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

## Add Ink annotation

### Draw Freehand Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Click **Draw Ink**.
3. Draw freehand on the page.

![Ink tool](../../images/ink_tool.png)

### Enable Ink Mode
Switch the viewer into ink annotation mode programmatically.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

enableInkMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('Ink');
}

{% endhighlight %}
{% endtabs %}

#### Exit Ink Mode
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

exitInkMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('None');
}

{% endhighlight %}
{% endtabs %}

### Add Ink Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) API to create an ink stroke by providing a path (an array of move/line commands), bounds, and target page.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addInkProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Ink', {
    offset: { x: 150, y: 100 },
    pageNumber: 1,
    width: 200,
    height: 60,
    path: '[{"command":"M","x":244.83,"y":982.00},{"command":"L","x":250.83,"y":953.33}]'
  });
}

{% endhighlight %}
{% endtabs %}

## Customize Ink Appearance
You can customize **stroke color**, **thickness**, and **opacity** using the [`inkAnnotationSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#inkannotationsettings) property.

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
        [inkAnnotationSettings]="inkAnnotationSettings"
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

  public inkAnnotationSettings = {
    author: 'Guest',
    strokeColor: '#0066ff',
    thickness: 3,
    opacity: 0.85
  };
}

{% endhighlight %}
{% endtabs %}

## Erase, Modify, or Delete Ink Strokes
- **Move**: Drag the annotation.
- **Resize**: Use selector handles.
- **Change appearance**: Use Edit Stroke Color, Thickness, and Opacity tools.
- **Delete**: Via toolbar or context menu.
- **Customize context menu**: See [Customize Context Menu](../../context-menu/custom-context-menu).

### Edit ink annotation in UI

Stroke color, thickness, and opacity can be edited using the Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

- Edit the **stroke color** using the color palette in the Edit Stroke Color tool.

![Change ink stroke color](../../images/ink_strokecolor.png)

- Edit **thickness** using the range slider in the Edit Thickness tool.

![Change ink thickness](../../images/ink_thickness.png)

- Edit **opacity** using the range slider in the Edit Opacity tool.

![Change ink opacity](../../images/ink_opacity.png)

### Edit Ink Programmatically

Modify an existing ink programmatically using `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

editInkProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  for (const ann of pdfViewer.annotationCollection) {
    if (ann.shapeAnnotationType === 'Ink') {
      const { width, height } = ann.bounds;
      ann.bounds = { x: 120, y: 120, width, height };
      ann.strokeColor = '#ff0000';
      ann.thickness = 4;
      pdfViewer.annotation.editAnnotation(ann);
      break;
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Delete Ink

Delete Ink via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Ink Annotation Events

The PDF viewer provides annotation life‑cycle events that notify when Ink annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

Ink annotations can be exported or imported along with other annotations.
See [Export and Import annotations](../export-import-annotations).

## See Also

- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotation](../remove-annotations)
