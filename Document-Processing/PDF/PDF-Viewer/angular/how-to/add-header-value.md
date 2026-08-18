---
layout: post
title: How to Add Headers to AJAX Requests in Angular PDF Viewer | Syncfusion
description: Add custom headers to PDF Viewer AJAX requests in the Angular PDF Viewer using ajaxRequestSettings and the ajaxHeaders configuration object.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Add Headers to AJAX Requests in Angular PDF Viewer

Use the ajaxHeaders property in the PDF Viewer's [ajaxRequestSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer#ajaxrequestsettings) to include custom headers with each AJAX request.

The following example adds a custom Authorization header using `ajaxRequestSettings` in an Angular component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  PdfViewerModule,
} from '@syncfusion/ej2-angular-pdfviewer';

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService,
  ],
  styleUrls: ['app.css'],
  standalone: true,
  imports: [PdfViewerModule],
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;
  public serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public ajaxRequestSettings: any = {
      ajaxHeaders: [
        {
          headerName: 'Authorization',
          headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
        }
      ],
      withCredentials: false
    };
  ngOnInit(): void {
    // ngOnInit function
  }
}
{% endhighlight %}
{% endtabs %}

See the sample [how to add custom headers in AjaxRequestSettings](https://stackblitz.com/edit/angular-pfdpfdzq-o4b3dlur?file=src%2Fapp.component.html,src%2Fapp.component.ts,node_modules%2F%40syncfusion%2Fej2-pdfviewer%2Fsrc%2Fpdfviewer%2Fpdfviewer-model.d.ts,src%2Findex.html)