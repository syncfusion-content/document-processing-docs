---
layout: post
title: Interaction mode in Angular PDF Viewer component | Syncfusion
description: Learn here all about Interaction mode in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Interaction mode
documentation: ug
domainurl: ##DomainURL##
---

# Interaction mode in Angular PDF Viewer component

The PDF Viewer provides interaction modes for working with loaded PDF documents. Two modes are available: selection mode and panning mode.

## Selection mode

In this mode, text selection can be performed in the PDF document loaded in the PDF Viewer. Panning and scrolling by touch are disabled in this mode. Text can be selected and copied from PDF files, which is helpful for copying and sharing content. Text selection can be enabled or disabled using the following code snippet.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                      enableTextSelection='true'
                      [documentPath]='document'
                      style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                      [serviceUrl]='service'
                      enableTextSelection='true'
                      [documentPath]='document'
                      style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}

![Selection mode in PDF Viewer](images/selection.png)

## Panning mode

In this mode, panning and scrolling of pages by touch can be performed in the PDF document loaded in the PDF Viewer, but text selection is disabled.

![Panning mode in PDF Viewer](images/pan.png)

The interaction mode of the PDF Viewer can be switched using the following code snippet.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                    enableTextSelection='true'
                    [documentPath]='document'
                    [interactionMode]='interaction'
                    style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public interaction = 'Pan';
  }

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                    [serviceUrl]='service'
                    enableTextSelection='true'
                    [documentPath]='document'
                    [interactionMode]='interaction'
                    style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public interaction = 'Pan';
  }

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)