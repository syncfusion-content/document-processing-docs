---
layout: post
title: Minimum and Maximum Zoom in Angular PDF Viewer | Syncfusion
description: Learn how to set minimum and maximum zoom levels in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Minimum and Maximum Zoom Properties

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer allows developers to control zoom levels for PDF documents. The `minZoom` and `maxZoom` properties enable setting the minimum and maximum zoom limits, ensuring a consistent and controlled viewing experience.

### minZoom

The `minZoom` property specifies the minimum allowed zoom percentage in the PDF Viewer. This prevents zooming out beyond a set limit, thereby helping to maintain readability and performance. The `minZoom` property can be set programmatically to define the minimum zoom level based on application requirements. This feature is particularly useful for preventing excessive zooming out, which could hinder content readability.

### maxZoom

The `maxZoom` property defines the maximum allowed zoom percentage in the PDF Viewer. By setting this property, developers can prevent excessive zooming in, which helps mitigate performance issues and ensures a smooth viewing experience. The `maxZoom` property can be set programmatically to control the upper limit of the zoom level. This is beneficial for applications where extremely high zoom levels might degrade performance or user experience.

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
    [maxZoom]="maxZoom"
    [minZoom]="minZoom"
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
    public maxZoom = 270;
    public minZoom = 45;
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
    [maxZoom]="maxZoom"
    [minZoom]="minZoom"
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
    public maxZoom = 270;
    public minZoom = 45;
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% endtabs %}

#### Restrict Zoom Percentage on Mobile Devices

The zoom percentage on mobile devices can be restricted using the `minZoom` and `maxZoom` properties. This feature allows specific limits for zooming, ensuring smoother scrolling performance and efficient document loading on mobile devices. Controlling the zoom levels provides a better user experience across different devices.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormFieldsService, FormDesignerService,
         PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [documentPath]='document'
                            [resourceUrl] = 'resource'
                            (documentLoad)='documentLoaded($event)'
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormFieldsService, FormDesignerService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
    documentLoaded(e: any): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (Browser.isDevice && !viewer.enableDesktopMode) {
        viewer.maxZoom = 200;
          viewer.minZoom = 10;
      }
      else {
        viewer.zoomMode = 'Default';
      }
    }
}

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormFieldsService, FormDesignerService,
         PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [serviceUrl]='service'
                            [documentPath]='document'
                            (documentLoad)='documentLoaded($event)'
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormFieldsService, FormDesignerService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    ngOnInit(): void {
    }
    documentLoaded(e: any): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (Browser.isDevice && !viewer.enableDesktopMode) {
        viewer.maxZoom = 200;
          viewer.minZoom = 10;
      }
      else {
        viewer.zoomMode = 'Default';
      }
    }
}

{% endhighlight %}
{% endtabs %}

By implementing this, you ensure that the maximum zoom percentage on mobile devices is limited to 200% and the minimum zoom percentage is set to 10%. This prevents performance issues that may arise from excessive zooming on mobile platforms.