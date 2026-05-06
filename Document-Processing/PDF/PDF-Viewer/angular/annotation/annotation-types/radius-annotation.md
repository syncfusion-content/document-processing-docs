---
layout: post
title: Add Radius Measurement Annotations in Angular PDF Viewer \ Syncfusion
description: Learn how to enable, draw, customize, and manage Radius measurement annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Radius Measurement Annotations in Angular PDF Viewer
Radius measurement annotations allow users to draw circular regions and calculate the radius visually.

![Radius overview](../../../javascript-es6/annotations/annotation-images/radius-annot.png)

## Enable Radius Measurement

To enable Radius annotations, inject the following modules into the Angular PDF Viewer:

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

## Add Radius Annotation

### Add Radius Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Measurement → Radius**.
3. Click and drag on the page to draw the radius.

![Measurement toolbar](../../images/calibrate_tool.png)

N> If Pan mode is active, selecting the Radius tool automatically switches interaction mode.

### Enable Radius Mode
Programmatically switch the viewer into Radius mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
enableRadiusMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.setAnnotationMode('Radius');
}
{% endhighlight %}
{% endtabs %}

#### Exit Radius Mode
{% tabs %}
{% highlight ts tabtitle="Standalone" %}
exitRadiusMode(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.setAnnotationMode('None');
}
{% endhighlight %}
{% endtabs %}

### Add Radius Programmatically
Configure default properties using the [`Radius Settings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#radiussettings) property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
addRadius(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Radius', {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90
  });
}
{% endhighlight %}
{% endtabs %}

## Customize Radius Appearance
Configure default properties using the [`Radius Settings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#radiussettings) property (for example, default **fill color**, **stroke color**, **opacity**).

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
        [radiusSettings]="radiusSettings"
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

  public radiusSettings = {
    fillColor: 'yellow',
    strokeColor: 'orange',
    opacity: 0.6
  };
}
{% endhighlight %}
{% endtabs %}

## Manage Radius (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the polygon to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Radius Annotation

#### Edit Radius (UI)

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

#### Edit Radius Programmatically

Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
editRadiusProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  for (const ann of pdfViewer.annotationCollection) {
    if (ann.subject === 'Radius calculation') {
      ann.strokeColor = '#0000FF';
      ann.thickness = 2;
      ann.opacity = 0.8;
      pdfViewer.annotation.editAnnotation(ann);
      break;
    }
  }
}
{% endhighlight %}
{% endtabs %}

### Delete Radius Annotation

Delete Radius Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Radius using the [`radiusSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#radiussettings) property.

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
        [radiusSettings]="radiusSettings"
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

  public radiusSettings = {
    fillColor: 'orange',
    opacity: 0.6,
    strokeColor: 'pink'
  };
}
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotation
Apply defaults for Area using the [`radiusSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#radiussettings) property.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
addStyledRadius(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Radius', {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90,
    fillColor: 'orange',
    opacity: 0.6,
    strokeColor: 'pink'
  });
}
{% endhighlight %}
{% endtabs %}

## Scale Ratio & Units
- Use **Scale Ratio** from the context menu.  
  ![Scale ratio](../../images/calibrate_scaleratio.png)
- Supported units: Inch, Millimeter, Centimeter, Point, Pica, Feet.  
  ![Scale dialog](../../images/calibrate_scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using [`measurementSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#mesaurementsettings).

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

  public measurementSettings = {
    scaleRatio: 2,
    conversionUnit: 'cm',
    displayUnit: 'cm'
  };
}
{% endhighlight %}
{% endtabs %}

## Handle Radius Events
Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Radius measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)

