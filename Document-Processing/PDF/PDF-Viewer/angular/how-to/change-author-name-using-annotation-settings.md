---
layout: post
title: Change author name using annotation settings in Angular PDF Viewer | Syncfusion
description: Learn how to change the author name and related annotation settings using the annotationSettings API in the Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change author name using annotation settings in Angular PDF Viewer

The PDF Viewer allows customizing individual annotation settings using the annotationSettings API, which exposes properties common to all annotations.

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
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, PrintService, AnnotationService, FormFieldsService } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PdfViewerModule],
  providers: [ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, PrintService, AnnotationService, FormFieldsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// app.component.ts
import { Component } from '@angular/core';
import { AnnotationSettingsModel, FreeTextSettingsModel } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
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
    author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, isPrint: true, isDownload: true
  };
  public freeTextSettings: FreeTextSettingsModel = {
    allowTextOnly: true
  };
}
```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule, ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, PrintService, AnnotationService, FormFieldsService } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PdfViewerModule],
  providers: [ToolbarService, MagnificationService, NavigationService, LinkAnnotationService, ThumbnailViewService, BookmarkViewService, TextSelectionService, TextSearchService, PrintService, AnnotationService, FormFieldsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// app.component.ts
import { Component } from '@angular/core';
import { AnnotationSettingsModel, FreeTextSettingsModel } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
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
    author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, isPrint: true, isDownload: true
  };
  public freeTextSettings: FreeTextSettingsModel = {
    allowTextOnly: true
  };
}
```
{% endhighlight %}
{% endtabs %}