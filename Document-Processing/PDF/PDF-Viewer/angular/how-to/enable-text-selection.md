---
layout: post
title: Enable Text Selection in Angular PDF Viewer component | Syncfusion
description: Learn how to enable text selection in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Text Selection in Syncfusion PDF Viewer

The Syncfusion PDF Viewer exposes the `enableTextSelection` property to control whether users can select text within the displayed PDF document. This setting can be configured at initialization and toggled programmatically at runtime.

## Configure text selection on initialization

Set the initial text-selection behavior by configuring the `enableTextSelection` property in the component template or on the `PdfViewerComponent` instance. The example below shows a complete component (TypeScript and template) that initializes the viewer with text selection disabled.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

import { Component, OnInit, ViewChild } from '@angular/core';
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
  PdfViewerComponent
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <div class="button-container" style="margin-bottom: 10px;">
        <button (click)="enableTextSelection()" style="margin-right: 10px;">Enable Text Selection</button>
        <button (click)="disableTextSelection()">Disable Text Selection</button>
      </div>
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        [enableTextSelection]="false"
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
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib';

  @ViewChild('pdfViewer')
  public pdfViewerObj!: PdfViewerComponent;

  ngOnInit(): void { }
}

{% endhighlight %}
{% endtabs %}

## Toggle Text Selection Dynamically

To toggle text selection at runtime:

1. Get a reference to the `PdfViewerComponent` using the `@ViewChild` decorator.
2. Implement methods on the same component class to enable and disable text selection.
3. Bind those methods to UI controls such as buttons.

```html
<button (click)="enableTextSelection()" style="margin-right: 10px;">Enable Text Selection</button>
<button (click)="disableTextSelection()">Disable Text Selection</button>
```
```typescript
// Enable text selection
enableTextSelection(): void {
  if (this.pdfViewerObj) {
    this.pdfViewerObj.enableTextSelection = true;
  }
}

// Disable text selection
disableTextSelection(): void {
  if (this.pdfViewerObj) {
    this.pdfViewerObj.enableTextSelection = false;
  }
}
```

## Use Cases and Considerations

- **Document Protection**: Disabling text selection helps prevent unauthorized copying of sensitive content.
- **Read-only Documents**: In scenarios where documents are meant for viewing only, disabling text selection can provide a cleaner user experience.
- **Interactive Applications**: Toggle text selection based on user roles or document states in complex applications.
- **Accessibility**: Consider enabling text selection for accessibility purposes in public-facing applications.

## Default Behavior

By default, text selection is enabled in the PDF Viewer. Set the `enableTextSelection` property to `false` explicitly if you want to disable this functionality.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)