---
layout: post
title: Showing and Hiding Annotations in Angular PDF Viewer | Syncfusion
description: Learn here all about how to show and hide annotations in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Show and hide annotations in PDF Viewer

## Overview

This guide shows how to temporarily hide annotations and restore them later in the Angular PDF Viewer. This is useful for presenting a clean view of the document while preserving annotation data for later use.

## How to show and hide annotations

**Step 1:** Create a basic Angular PDF Viewer sample using the getting started guide: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started

**Step 2:** Set up the Angular component and template

Add UI controls (for example, buttons) that trigger hide and unhide behaviors. The sample below exports annotations to an object, removes them from the viewer, and later imports them back to restore the annotations.

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
  PrintService,
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="hideAnnotations()" style="margin-right: 10px;">Hide Annotations</button>
      <button (click)="unhideAnnotations()">Unhide Annotations</button>
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resourceUrl"
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
    PageOrganizerService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib';
  public exportObject: any;

  ngOnInit(): void { }

  hideAnnotations() {
    var proxy = this;
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    viewer.exportAnnotationsAsObject().then(function (value: any) {
      proxy.exportObject = value;
      viewer.deleteAnnotations();
    });
  }

  unhideAnnotations() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    viewer.importAnnotation(JSON.parse(this.exportObject));
  }
}

{% endhighlight %}
{% endtabs %}

## Conclusion

By implementing these steps in your Angular component, you can add functionality to show and hide annotations in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. This allows for a better user experience when working with annotated PDF documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Show%20and%20Hide%20Annotations)