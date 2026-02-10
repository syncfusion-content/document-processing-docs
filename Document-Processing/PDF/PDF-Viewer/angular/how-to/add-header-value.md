---
layout: post
title: Add header values to AJAX requests in Angular PDF Viewer | Syncfusion
description: Learn how to include custom headers in PDF Viewer AJAX requests using ajaxRequestSettings and ajaxHeaders in the Angular PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add header values in the Angular PDF Viewer

Use the `ajaxHeaders` property inside the PDF Viewer’s [ajaxRequestSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#ajaxrequestsettings) to send custom HTTP headers with each request made by the viewer.

Example: Add a custom Authorization header using `ajaxRequestSettings` in an Angular component

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
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
  templateUrl: 'app.component.html',
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
  styleUrls: ['app.component.css'],
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
Notes