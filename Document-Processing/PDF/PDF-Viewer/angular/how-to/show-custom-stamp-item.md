---
layout: post
title: Displaying Custom stamp Items in Angular PDF Viewer|Syncfusion.
title: Display custom stamp items in Angular PDF Viewer
description: Configure the custom stamp dropdown to show custom images or stamps in the Angular PDF Viewer; guidance on Base64, supported formats, and providers.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl:
---

# Display custom stamp items in the custom stamp dropdown

### Overview

This guide shows how to add custom images to the custom stamp dropdown in the Angular PDF Viewer so users can apply personalized stamps to documents.

### Steps to show custom items in the custom stamp dropdown

**Step 1:** Create a basic Angular PDF Viewer sample using the getting started guide: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started

**Step 2:** Configure custom stamp settings

Use `customStampSettings` to define stamps that appear in the dropdown. The `customStampImageSource` value accepts a Base64 data URI or an absolute URL pointing to an image.


{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  FormFieldsService,
  FormDesignerService,
  PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resourceUrl"
        [customStampSettings]="customStampSettings"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    FormFieldsService,
    FormDesignerService,
    PrintService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib';

  public customStampSettings = {
    isAddToMenu: true,
    customStamps: [
      {
        customStampName: 'Image1',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
         },
      {
        customStampName: 'Image2',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
        }
    ],
    enableCustomStamp: true,
    opacity: 1,
  };

  ngOnInit(): void {}

}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  FormFieldsService,
  FormDesignerService,
  PrintService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [serviceUrl]="serviceUrl"
        [customStampSettings]="customStampSettings"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    FormFieldsService,
    FormDesignerService,
    PrintService,
  ],
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public serviceUrl: string = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';

  public customStampSettings = {
    isAddToMenu: true,
    customStamps: [
      {
        customStampName: 'Image1',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
         },
      {
        customStampName: 'Image2',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
        }
    ],
    enableCustomStamp: true,
    opacity: 1,
  };

  ngOnInit(): void {}

}

{% endhighlight %}
{% endtabs %}

By following these instructions, you can successfully configure to display custom items in the custom stamp dropdown, allowing users to easily apply personalized stamps to their documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)