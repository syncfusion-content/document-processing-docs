---
layout: post
title: Change Author Name via Annotation Settings | Syncfusion
description: Learn how to change the author name and related annotation settings using the annotationSettings API in the Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---


# Change author name using annotation settings in Angular PDF Viewer

The `annotationSettings` API provides a central way to configure properties that apply to all annotations in the viewer.

API name: annotationSettings

| Property Name | Data type & Default Value | Description |
|---|---|---|
| author | String ("Guest") | Specifies the author of the annotation. |
| minWidth | Number (0) | Specifies the minimum width of the annotation. |
| maxWidth | Number (0) | Specifies the maximum width of the annotation. |
| minHeight | Number (0) | Specifies the minimum height of the annotation. |
| maxHeight | Number (0) | Specifies the maximum height of the annotation. |
| isLock | Boolean (false) | Specifies whether the annotation is locked. If true, the annotation cannot be selected. |
| isPrint | Boolean (true) | Specifies whether the annotation is included in print actions. |
| isDownload | Boolean (true) | Specifies whether the annotation is included in download actions. |
| Free Text Settings |
| allowOnlyTextInput | Boolean (false) | Specifies text-only mode for free text annotations. If true, moving or resizing is disabled. |

Change the author name and other properties using the annotationSettings API as shown below.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
```ts
// app.ts
import { Component } from '@angular/core';
import { AnnotationService, AnnotationSettingsModel, BookmarkViewService, FormFieldsService, FreeTextSettingsModel, LinkAnnotationService, MagnificationService, NavigationService, PageOrganizerService, PdfViewerModule, PrintService, TextSearchService, TextSelectionService, ThumbnailViewService, ToolbarService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  imports: [ PdfViewerModule ],
  providers: [ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, PrintService, AnnotationService, FormFieldsService, PageOrganizerService],
  template: `
    <ejs-pdfviewer id="pdfViewer"
      [documentPath]="docPath"
      [annotationSettings]="annotationSettings"
      [freeTextSettings]="freeTextSettings">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public docPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public annotationSettings: AnnotationSettingsModel = {
    author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, skipPrint: false, skipDownload: false
  };
  public freeTextSettings: FreeTextSettingsModel = {
    allowEditTextOnly: true
  };
}
```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```ts
// app.ts
import { Component } from '@angular/core';
import { AnnotationService, AnnotationSettingsModel, BookmarkViewService, FormFieldsService, FreeTextSettingsModel, LinkAnnotationService, MagnificationService, NavigationService, PageOrganizerService, PdfViewerModule, PrintService, TextSearchService, TextSelectionService, ThumbnailViewService, ToolbarService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  imports: [ PdfViewerModule ],
  providers: [ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, PrintService, AnnotationService, FormFieldsService, PageOrganizerService],
  template: `
    <ejs-pdfviewer id="pdfViewer"
      [serviceUrl]="serviceUrl"
      [documentPath]="docPath"
      [annotationSettings]="annotationSettings"
      [freeTextSettings]="freeTextSettings">
    </ejs-pdfviewer>
  `
})
export class AppComponent {
  public serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
  public docPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public annotationSettings: AnnotationSettingsModel = {
    author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, skipPrint: false, skipDownload: false
  };
  public freeTextSettings: FreeTextSettingsModel = {
    allowEditTextOnly: true
  };
}
```
{% endhighlight %}
{% endtabs %}