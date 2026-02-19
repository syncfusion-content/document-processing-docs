---
layout: post
title: Text selection in Angular PDF Viewer control | Syncfusion
description: Learn how to configure text selection, angular to selection events, and manage copy workflows in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---
# Text selection in Angular PDF Viewer control

The TextSelection module enables users to highlight and copy text from a loaded PDF. Selection is enabled by default and can be configured or monitored programmatically to match application workflows. Use text selection to support copy workflows, contextual actions, or accessibility scenarios.

## Enable or disable text selection

Use the `enableTextSelection` property to enable or disable choosing text in the PDF Viewer.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [enableTextSelection]='true'
                        [documentPath]="document"
                        [resourceUrl]="resource"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService ]
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [serviceUrl]="service"
                        [enableTextSelection]='true'
                        [documentPath]="document"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService ]
})
export class AppComponent {
  public service = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
}

{% endhighlight %}
{% endtabs %}

## Text selection events

Monitor user interactions with selection events to coordinate downstream actions such as showing tooltips, enabling context menus, or recording analytics.

### textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#textselectionstartevent) event fires when a user begins selecting text. Use it to reset temporary UI state, pause conflicting shortcuts, or capture the starting context.

- Event arguments: `TextSelectionStartEventArgs` provides details such as `pageNumber`, `bounds`, and `selectionBehavior`.

```ts
import { Component, OnInit } from '@angular/core';
import { TextSelectionService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [documentPath]="document"
                        [resourceUrl]="resource"
                        (textSelectionStart)="textSelectionStart($event)"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ TextSelectionService ]
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public textSelectionStart(args: any): void {
    // args.pageNumber, args.bounds provide the starting context
    console.log('Selection started', args);
  }
}
```

### textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#textselectionendevent) event triggers after the selection is finalized. Use it to access the selected text, toggle contextual commands, or record telemetry.

- Event arguments: `TextSelectionEndEventArgs` includes `pageNumber`, `bounds`, `selectedText`, and `isSelectionCopied`.

```ts
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormFieldsService, FormDesignerService,
         PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  template: `<div class="content-wrapper">
               <ejs-pdfviewer id="pdfViewer"
                        [documentPath]="document"
                        [resourceUrl]="resource"
                        (textSelectionEnd)="textSelectionEnd($event)"
                        style="height:640px;display:block">
               </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormFieldsService, FormDesignerService,
               PageOrganizerService ]
})
export class AppComponent {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public textSelectionEnd(args: any): void {
    // For example, automatically copy or show a custom menu
    console.log('Selection ended', args);
  }
}
```

## See also

- [Text search](./text-search)
- [Interaction modes](./interaction-mode)
- [Toolbar items](./toolbar)
