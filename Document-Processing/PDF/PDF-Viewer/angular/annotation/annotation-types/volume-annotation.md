---
layout: post
title: Add Volume Measurement Annotations in Angular PDF Viewer | Syncfusion
description: Learn how to enable, draw, customize, and manage Volume measurement annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Volume Measurement Annotations in Angular PDF Viewer
Volume measurement annotations allow users to draw circular regions and calculate the volume visually.

![Volume overview](../../../javascript-es6/annotations/annotation-images/volume-annot.png)

## Enable Volume Measurement
Inject the **Annotation** and **Toolbar** modules to enable volume annotation tools.

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
        id="container"
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

## Add Volume Annotation

### Draw Volume Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Measurement → Volume**.
3. Click and drag on the page to draw the volume.

![Measurement toolbar](../../images/calibrate_tool.png)

> If Pan mode is active, selecting the Volume tool automatically switches interaction mode.

### Enable Volume Mode
Programmatically switch the viewer into Volume mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

enableVolumeMode(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.setAnnotationMode('Volume');
}

{% endhighlight %}
{% endtabs %}

#### Exit Volume Mode

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

exitVolumeMode(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.setAnnotationMode('None');
}

{% endhighlight %}
{% endtabs %}

### Add Volume Programmatically
Configure default properties using the [`Volume Settings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#volumesettings) property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addVolume(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Volume', {
    offset: { x: 200, y: 810 },
    pageNumber: 1,
    width: 90,
    height: 90
  });
}

{% endhighlight %}
{% endtabs %}

## Customize Volume Appearance
Configure default properties using the [`Volume Settings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#volumesettings) property (for example, default **fill color**, **stroke color**, **opacity**).

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
        id="container"
        [documentPath]="document"
        [resourceUrl]="resource"
        [volumeSettings]="volumeSettings"
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

  public volumeSettings = {
    fillColor: 'yellow',
    strokeColor: 'orange',
    opacity: 0.6
  };
}

{% endhighlight %}
{% endtabs %}

## Manage Volume (Move, Resize, Delete)
- **Move**: Drag inside the polygon to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Volume Annotation

#### Edit Volume (UI)

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

#### Edit Volume Programmatically
Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

editVolumeProgrammatically(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  for (const ann of pdfViewer.annotationCollection) {
    if (ann.subject === 'Volume calculation') {
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

### Delete Volume Annotation

Delete Volume Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Volume using the [`volumeSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#volumesettings) property.

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
        id="container"
        [documentPath]="document"
        [resourceUrl]="resource"
        [volumeSettings]="volumeSettings"
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

  public volumeSettings = {
    fillColor: 'yellow',
    opacity: 0.6,
    strokeColor: 'yellow'
  };
}

{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotation
Apply defaults for Area using the [`volumeSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#volumesettings) property.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addStyledVolume(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Volume', {
    offset: { x: 200, y: 810 },
    pageNumber: 1,
    width: 90,
    height: 90,
    fillColor: 'yellow',
    opacity: 0.6,
    strokeColor: 'yellow'
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
        id="container"
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

## Handle Volume Events
Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Volume measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
