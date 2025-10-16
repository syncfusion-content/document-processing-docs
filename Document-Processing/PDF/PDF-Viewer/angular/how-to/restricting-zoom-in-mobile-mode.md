---
layout: post
title: Restrict Zoom Percentage in Angular PDF Viewer | Syncfusion
description: Learn how to restrict zoom percentage on mobile devices in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Restrict Zoom Percentage on Mobile Devices

In Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, the zoom percentage on mobile devices can be restricted using the **maxZoom** and **minZoom** properties. This feature sets specific zoom limits, ensuring smoother scrolling performance and efficient document loading on mobile devices.

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

With this configuration, the maximum zoom percentage on mobile devices is limited to 200% and the minimum zoom percentage is set to 10%. This helps prevent performance issues that can arise from excessive zooming on mobile platforms.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices)