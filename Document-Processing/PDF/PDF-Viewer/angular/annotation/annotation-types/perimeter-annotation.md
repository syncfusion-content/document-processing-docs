---
layout: post
title: Add Perimeter Measurement Annotations in Angular PDF Viewer | Syncfusion
description: Learn how to enable, draw, customize, and manage Perimeter measurement annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Perimeter Measurement Annotations in Angular PDF Viewer
Perimeter is a measurement annotation used to calculate the length around a closed polyline on a PDF page—useful for technical markups and reviews. 

![Perimeter overview](../../../javascript-es6/annotations/annotation-images/perimeter-annot.png)

## Enable Perimeter Measurement

To enable Perimeter annotations, inject the following modules into the Angular PDF Viewer:

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

## Add Perimeter Annotation

### Add Perimeter Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Measurement** → **Perimeter**.
3. Click multiple points to define the polyline; double‑click to close and finalize the perimeter.

![Measurement toolbar](../../images/calibrate_tool.png)

> **Note:** If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Perimeter Mode
Programmatically switch the viewer into Perimeter mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

enablePerimeterMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('Perimeter');
}

{% endhighlight %}
{% endtabs %}

#### Exit Perimeter Mode
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

exitPerimeterMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotationModule.setAnnotationMode('None');
}

{% endhighlight %}
{% endtabs %}

### Add Perimeter Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) API to draw a perimeter by providing multiple **vertexPoints**.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addPerimeter(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Perimeter', {
    offset: { x: 200, y: 350 },
    pageNumber: 1,
    vertexPoints: [
      { x: 200, y: 350 },
      { x: 285, y: 350 },
      { x: 286, y: 412 }
    ]
  });
}

{% endhighlight %}
{% endtabs %}

## Customize Perimeter Appearance
Configure default properties using the [`perimeterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#perimetersettings) property (for example, default **fill color**, **stroke color**, **opacity**).

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
        [perimeterSettings]="perimeterSettings"
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

  // Perimeter annotation default settings
  public perimeterSettings = {
    fillColor: 'blue',
    strokeColor: 'green',
    opacity: 0.6
  };
}

{% endhighlight %}
{% endtabs %}

## Manage Perimeter (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the shape to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Perimeter

#### Edit Perimeter (UI)

- Edit the **fill color** using the Edit Color tool.  
  ![Fill color](../../images/calibrate_fillcolor.png)
- Edit the **stroke color** using the Edit Stroke Color tool.  
  ![Stroke color](../../images/calibrate_stroke.png)
- Edit the **border thickness** using the Edit Thickness tool.  
  ![Thickness](../../images/calibrate_thickness.png)
- Edit the **opacity** using the Edit Opacity tool.  
  ![Opacity](../../images/calibrate_opacity.png)
- Open **Right Click → Properties** for additional line‑based options.
  ![Line properties](../../images/calibrate_lineprop.png)

#### Edit Perimeter Programmatically
Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

editPerimeterProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  for (const ann of pdfViewer.annotationCollection) {
    if (ann.subject === 'Perimeter calculation') {
      ann.strokeColor = '#0000FF';
      ann.thickness = 2;
      ann.fillColor = '#FFFF00';
      pdfViewer.annotation.editAnnotation(ann);
      break;
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Delete Perimeter Annotation

Delete Perimeter Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Perimeter using the [`perimeterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#perimetersettings) property.

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
        [perimeterSettings]="perimeterSettings"
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

  // Perimeter annotation default settings
  public perimeterSettings = {
    fillColor: 'green',
    strokeColor: 'blue',
    opacity: 0.6
  };
}

{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotation
Pass per‑annotation values directly when calling [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addStyledPerimeter(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Perimeter', {
    offset: { x: 240, y: 360 },
    pageNumber: 1,
    vertexPoints: [
      { x: 240, y: 360 },
      { x: 320, y: 360 },
      { x: 330, y: 410 }
    ],
    strokeColor: '#1D4ED8',
    fillColor: '#DBEAFE',
    thickness: 2,
    opacity: 0.85
  });
}

{% endhighlight %}
{% endtabs %}

## Scale Ratio and Units

- Use **Scale Ratio** from the context menu to set the actual‑to‑page scale.  
  ![Scale ratio](../../images/calibrate_scaleratio.png)
- Supported units include **Inch, Millimeter, Centimeter, Point, Pica, Feet**.  
  ![Scale dialog](../../images/calibrate_scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using [`measurementSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#measurementsettings).

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
        [measurementSettings]="measurementSettings"
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

  // Perimeter / Measurement configuration
  public measurementSettings = {
    scaleRatio: 2,
    conversionUnit: 'cm',
    displayUnit: 'cm'
  };
}

{% endhighlight %}
{% endtabs %}

## Handle Perimeter Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Perimeter measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
