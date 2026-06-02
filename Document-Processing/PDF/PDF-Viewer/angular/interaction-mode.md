---
layout: post
title: Interaction mode in Angular PDF Viewer component | Syncfusion
description: Learn here all about Interaction mode in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Interaction mode
documentation: ug
domainurl: ##DomainURL##
---

# Interaction Mode in Angular PDF Viewer component

The PDF Viewer provides two interaction modes for working with a loaded PDF document: Selection mode and Panning mode.

## Selection mode

Selection mode allows users to select and copy text from the loaded PDF. Touch-based panning and page scrolling are disabled in this mode. Enable or disable text selection using the following code snippet.

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

![PDF Viewer selection mode](images/selection.png)

## Panning Mode

Panning mode enables touch-based panning and page scrolling of the loaded PDF; text selection is disabled in this mode.

![PDF Viewer panning mode](images/pan.png)

N> When `interactionMode` is set to 'Pan', touch panning is enabled and text selection is not available even if `enableTextSelection` is set to true.

You can switch the interaction mode of the PDF Viewer using the following code snippet.

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