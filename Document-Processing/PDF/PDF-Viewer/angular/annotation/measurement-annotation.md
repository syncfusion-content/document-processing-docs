---
layout: post
title: Measurement annotation in Angular PDF Viewer control | Syncfusion
description: Learn about measurement annotations in the Syncfusion Angular PDF Viewer (Essential JS 2): distance, perimeter, area, radius, and volume.
platform: document-processing
control: Measurement annotation
documentation: ug
domainurl: ##DomainURL##
---

# Measurement Annotation in Angular PDF Viewer component

The PDF Viewer provides options to add measurement annotations. The supported measurement annotations are:

* Distance
* Perimeter
* Area
* Radius
* Volume

![PDF Viewer measurement annotations toolbar overview](../images/calibrate_annotation.png)

## Adding measurement annotations to the PDF document

Measurement annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Measurement Annotation** drop-down button. The pop-up lists available measurement annotation types.
* Select a measurement type to enable its annotation mode.
* Measure and add annotations on the pages of the PDF document.

When the viewer is in pan mode, selecting a measurement annotation switches it to text selection mode.

![Annotation toolbar showing measurement tools](../images/calibrate_tool.png)

The following example switches to distance annotation mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="addAnnotation()">Distance</button>
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [resourceUrl]='resource'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
    addAnnotation() {
      var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      pdfviewer.annotationModule.setAnnotationMode('Distance');
  }
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="addAnnotation()">Distance</button>
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [serviceUrl]='service'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    ngOnInit(): void {
    }
    addAnnotation() {
      var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      pdfviewer.annotationModule.setAnnotationMode('Distance');
  }
}
{% endhighlight %}
{% endtabs %}

## Add a measurement annotation to the PDF document Programmatically

The PDF Viewer library allows adding measurement annotations programmatically using the [addAnnotation()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotation/#addannotation) method.

Here is an example showing how to add measurement annotations programmatically using addAnnotation():

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService, DistanceSettings, PerimeterSettings,
         AreaSettings, RadiusSettings, VolumeSettings } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="addDistanceAnnotation()">Add Distance annotation Programmatically</button>
  <button (click)="addPerimeterAnnotation()">Add Perimeter annotation Programmatically</button>
  <button (click)="addAreaAnnotation()">Add Area annotation Programmatically</button>
  <button (click)="addRadiusAnnotation()">Add Radius annotation Programmatically</button>
  <button (click)="addVolumeAnnotation()">Add Volume annotation Programmatically</button>
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [resourceUrl]='resource'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }

  addDistanceAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Distance", {
      offset: { x: 200, y: 230 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
    } as DistanceSettings);
  }

  addPerimeterAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Perimeter", {
    offset: { x: 200, y: 350 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
    } as PerimeterSettings);
  }

  addAreaAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Area", {
    offset: { x: 200, y: 500 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
    } as AreaSettings);
  }

  addRadiusAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Radius", {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90
    } as RadiusSettings);
  }
  addVolumeAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Volume", {
      offset: { x: 200, y: 810 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
    } as VolumeSettings);
  }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService, DistanceSettings, PerimeterSettings,
         AreaSettings, RadiusSettings, VolumeSettings } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="addDistanceAnnotation()">Add Distance annotation Programmatically</button>
  <button (click)="addPerimeterAnnotation()">Add Perimeter annotation Programmatically</button>
  <button (click)="addAreaAnnotation()">Add Area annotation Programmatically</button>
  <button (click)="addRadiusAnnotation()">Add Radius annotation Programmatically</button>
  <button (click)="addVolumeAnnotation()">Add Volume annotation Programmatically</button>
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [serviceUrl]='service'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    ngOnInit(): void {
    }

  addDistanceAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Distance", {
      offset: { x: 200, y: 230 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
    } as DistanceSettings);
  }

  addPerimeterAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Perimeter", {
    offset: { x: 200, y: 350 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
    } as PerimeterSettings);
  }

  addAreaAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Area", {
    offset: { x: 200, y: 500 },
    pageNumber: 1,
    vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
    } as AreaSettings);
  }

  addRadiusAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Radius", {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90
    } as RadiusSettings);
  }
  addVolumeAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Volume", {
      offset: { x: 200, y: 810 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
    } as VolumeSettings);
  }
}

{% endhighlight %}
{% endtabs %}

## Edit an existing measurement annotation programmatically

To modify an existing measurement annotation programmatically, use the editAnnotation() method.

Here is an example of using editAnnotation():

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="editDistanceAnnotation()">Edit Distance annotation Programmatically</button>
  <button (click)="editPerimeterAnnotation()">Edit Perimeter annotation Programmatically</button>
  <button (click)="editAreaAnnotation()">Edit Area annotation Programmatically</button>
  <button (click)="editRadiusAnnotation()">Edit Radius annotation Programmatically</button>
  <button (click)="editVolumeAnnotation()">Edit Volume annotation Programmatically</button>
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [resourceUrl]='resource'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }

  editDistanceAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Distance calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }

  editPerimeterAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Perimeter calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }

  editAreaAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Area calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }

  editRadiusAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Radius calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editVolumeAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Volume calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
}


{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="editDistanceAnnotation()">Edit Distance annotation Programmatically</button>
  <button (click)="editPerimeterAnnotation()">Edit Perimeter annotation Programmatically</button>
  <button (click)="editAreaAnnotation()">Edit Area annotation Programmatically</button>
  <button (click)="editRadiusAnnotation()">Edit Radius annotation Programmatically</button>
  <button (click)="editVolumeAnnotation()">Edit Volume annotation Programmatically</button>
  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [serviceUrl]='service'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    ngOnInit(): void {
    }

  editDistanceAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Distance calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }

  editPerimeterAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Perimeter calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }

  editAreaAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Area calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }

  editRadiusAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Radius calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editVolumeAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Volume calculation") {
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
}

{% endhighlight %}
{% endtabs %}

## Edit the properties of measurement annotations

The fill color, stroke color, thickness, and opacity can be edited using the Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Edit fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![Edit Color palette for measurement annotations](../images/calibrate_fillcolor.png)

### Edit stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![Edit Stroke Color palette for measurement annotations](../images/calibrate_stroke.png)

### Edit thickness

Edit border thickness using the range slider provided in the Edit Thickness tool.

![Thickness slider in the Edit Thickness tool](../images/calibrate_thickness.png)

### Edit opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![Opacity slider in the Edit Opacity tool](../images/calibarte_opacity.png)

### Editing the line properties

Line-based measurement annotations (distance and perimeter) have additional options in the Line Properties window. Open it by right-clicking the annotation and selecting Properties from the context menu.

![Line properties dialog for measurement annotations](../images/calibrate_lineprop.png)

## Set default properties during control initialization

Default properties for measurement annotations can be set before creating the control using `distanceSettings`, `perimeterSettings`, `areaSettings`, `radiusSettings`, and `volumeSettings`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">

  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [resourceUrl]='resource'
    [distanceSettings]='distanceSettings'
    [perimeterSettings]='perimeterSettings'
    [areaSettings]='areaSettings'
    [radiusSettings]='radiusSettings'
    [volumeSettings]='volumeSettings'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    public distanceSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
    public perimeterSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
    public areaSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
    public radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
    public volumeSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">

  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [serviceUrl]='service'
    [distanceSettings]='distanceSettings'
    [perimeterSettings]='perimeterSettings'
    [areaSettings]='areaSettings'
    [radiusSettings]='radiusSettings'
    [volumeSettings]='volumeSettings'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    public distanceSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
    public perimeterSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
    public areaSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
    public radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
    public volumeSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% endtabs %}


## Editing scale ratio and unit of the measurement annotation

The scale ratio and unit of measurement can be modified using the scale ratio option provided in the context menu of the PDF Viewer control.

![Scale ratio option in the context menu](../images/calibrate_scaleratio.png)

The PDF Viewer supports the following measurement units:

* Inch
* Millimeter
* Centimeter
* Point
* Pica
* Feet

![Scale ratio settings dialog for measurement annotations](../images/calibrate_scaledialog.png)

## Setting default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using ScaleRatioSettings as shown in the following code snippet,

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">

  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [resourceUrl]='resource'
    [measurementSettings]='measurementSettings'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    public measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">

  <ejs-pdfviewer
    id="pdfViewer"
    [documentPath]='document'
    [serviceUrl]='service'
    [measurementSettings]='measurementSettings'
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public service: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    public measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% endtabs %}
