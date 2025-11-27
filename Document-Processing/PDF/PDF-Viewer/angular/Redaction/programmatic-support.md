---
layout: post
title: Redaction Programmatic support in Angular PDF Viewer | Syncfusion
description: Learn how to add, delete, update, and apply redaction annotations programmatically in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PdfViewer
documentation: ug
---

# Programmatic support for redaction in Angular PdfViewer

The Syncfusion Angular PDF Viewer provides APIs to add, update, delete, and apply redaction annotations programmatically. You can also redact entire pages, configure default properties, and work with the redaction property panel.

## Add redaction annotations programmatically

You can add redaction annotations to a PDF document using the `addAnnotation` method of the `annotation` module. You can listen to the `annotationAdd` event to track when annotations are added.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // Inline template—kept minimal and close to your JS structure
  template: `
    <div class="content-wrapper">
      <div style="margin-bottom:8px;display:flex;gap:8px;align-items:center;">
        <button id="addRedactAnnot" type="button" (click)="addRedaction()">
          Add Redaction Annotation
        </button>
      </div>
      <ejs-pdfviewer
        #pdfviewer
        id="PdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [toolbarSettings]="toolbarSettings"
        style="height:640px;display:block"
        (annotationAdd)="onAnnotationAdd($event)">
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
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  // Update these as needed
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  // Keep toolbar simple; include redaction edit tool if you want UI access too
  public toolbarSettings: ToolbarSettingsModel = {
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'AnnotationEditTool',
      'RedactionEditTool',   // shows the redaction UI tool (optional)
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  addRedaction(): void {
    if (!this.pdfViewer) { return; }

    this.pdfViewer.annotation.addAnnotation('Redaction', {
      bound: { x: 200, y: 480, width: 150, height: 75 },
      pageNumber: 1,
      markerFillColor: '#0000FF',
      markerBorderColor: 'white',
      fillColor: 'red',
      overlayText: 'Confidential',
      fontColor: 'yellow',
      fontFamily: 'Times New Roman',
      fontSize: 8,
      beforeRedactionsApplied: false
    } as any);
  }

  //You can listen to the annotationAdd event to track when annotations are added.
  onAnnotationAdd(args: any): void {
    console.log('Annotation added:', args);
  }
}

{% endhighlight %}
{% endtabs %}

## Delete redaction annotations programmatically

Redaction annotations can be removed using the `deleteAnnotationById` event or by selecting and deleting them through code.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  AnnotationService,
  ToolbarService,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-bottom:8px;">
      <button (click)="deleteAnnotationById()">Delete Annotation By Id</button>
    </div>
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [toolbarSettings]="toolbarSettings"
      style="height:640px;display:block">
    </ejs-pdfviewer>
  `,
  providers: [
    AnnotationService,
    ToolbarService,
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  // Keep toolbar simple; include redaction edit tool if you want UI access too
  public toolbarSettings: ToolbarSettingsModel = {
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'AnnotationEditTool',
      'RedactionEditTool',   // shows the redaction UI tool (optional)
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  deleteAnnotationById(): void {
    this.pdfViewer.annotationModule.deleteAnnotationById(
      (this.pdfViewer as any).annotationCollection[0].annotationId
    );
  }
}

{% endhighlight %}
{% endtabs %}


Alternatively, you can remove annotations by selecting them in the UI and pressing the **Delete** key.

## Update redaction annotation properties programmatically

You can update properties of an existing redaction annotation using the `editAnnotation` API. For example, to change overlay text or fill color:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  AnnotationService,
  ToolbarService,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-bottom:8px; display:flex; gap:8px;">
      <button id="editRedactAnnotation" (click)="editRedactAnnotation()">
        Edit Redact Annotation
      </button>
    </div>
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [toolbarSettings]="toolbarSettings"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `,
  providers: [
    AnnotationService,
    ToolbarService,
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public toolbarSettings: ToolbarSettingsModel = {
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'AnnotationEditTool',
      'RedactionEditTool',   // shows the redaction UI tool (optional)
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  //Edit RedactionAnnotation
  editRedactAnnotation(): void {
    const collection: any[] = (this.pdfViewer as any).annotationCollection;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].subject === 'Redaction') {
        collection[i].overlayText = 'EditedAnnotation';
        collection[i].markerFillColor = '#22FF00';
        collection[i].markerBorderColor = '#000000';
        collection[i].isRepeat = true;
        collection[i].fillColor = '#F8F8F8';
        collection[i].fontColor = '#333333';
        collection[i].fontSize = 14;
        collection[i].fontFamily = 'Symbol';
        collection[i].textAlign = 'Right';
        collection[i].beforeRedactionsApplied = false;

        (this.pdfViewer as any).annotation.editAnnotation(collection[i]);
      }
    }
  }
}

{% endhighlight %}
{% endtabs %}

## Add page redactions programmatically

Entire pages can be marked for redaction using the `addPageRedactions` method:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  PdfViewerComponent,
  AnnotationService,
  ToolbarService,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-bottom:8px; display:flex; gap:8px; align-items:center;">
      <!-- Add page redactions programmatically -->
      <button id="addPageRedactions" type="button" (click)="addPageRedactions()">
        Add Page Redaction
      </button>
    </div>
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [toolbarSettings]="toolbarSettings"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `,
  providers: [
    AnnotationService,
    ToolbarService,
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public toolbarSettings: ToolbarSettingsModel = {
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'AnnotationEditTool',
      'RedactionEditTool',   // shows the redaction UI tool (optional)
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  //Add page redactions programmatically (pages 1, 3, 5, 7)
  addPageRedactions(): void {
    this.pdfViewer.annotation.addPageRedactions([1, 3, 5, 7]);
  }
}

{% endhighlight %}
{% endtabs %}

## Apply redaction programmatically

Once annotations are added, you can permanently apply them to the document using the `redact` method:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  PdfViewerComponent,
  AnnotationService,
  ToolbarService,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-bottom:8px; display:flex; gap:8px; align-items:center;">
      <button id="redact" type="button" (click)="applyRedaction()">
        Apply Redaction
      </button>
    </div>
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [toolbarSettings]="toolbarSettings"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `,
  providers: [
    AnnotationService,
    ToolbarService,
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public toolbarSettings: ToolbarSettingsModel = {
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'AnnotationEditTool',
      'RedactionEditTool',   // shows the redaction UI tool (optional)
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  //Apply redaction programmatically (irreversible)
  applyRedaction(): void {
    this.pdfViewer.annotation.redact();
  }
}

{% endhighlight %}
{% endtabs %}

N> Applying redaction is irreversible. Once applied, the original content cannot be recovered.

## Configure default redaction annotation properties

You can configure default properties for redaction annotations (such as fill color, overlay text, and font) when adding them programmatically:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  PdfViewerComponent,
  AnnotationService,
  ToolbarService,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormFieldsService,
  FormDesignerService,
  PageOrganizerService,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-bottom:8px; display:flex; gap:8px; align-items:center;">
    </div>
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [toolbarSettings]="toolbarSettings"
      style="height:640px; display:block">
    </ejs-pdfviewer>
  `,
  providers: [
    AnnotationService,
    ToolbarService,
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('pdfviewer', { static: true }) pdfViewer!: PdfViewerComponent;

  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public toolbarSettings: ToolbarSettingsModel = {
    toolbarItems: [
      'OpenOption',
      'PageNavigationTool',
      'MagnificationTool',
      'PanTool',
      'SelectionTool',
      'AnnotationEditTool',
      'RedactionEditTool',   // shows the redaction UI tool (optional)
      'SearchOption',
      'PrintOption',
      'DownloadOption'
    ]
  };

  //Configure default redaction annotation properties (same as your JS)
  ngAfterViewInit(): void {
    (this.pdfViewer as any).redactionSettings = {
      overlayText: 'Confidential',
      markerFillColor: '#FF0000',
      markerBorderColor: '#000000',
      isRepeat: false,
      fillColor: '#F8F8F8',
      fontColor: '#333333',
      fontSize: 14,
      fontFamily: 'Symbol',
      textAlign: 'Right'
    };
  }
}

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## Redaction property panel

The redaction property panel allows users to update annotation properties through the UI. Programmatically, you can invoke the property panel by selecting an annotation and calling the relevant APIs. Properties such as overlay text, font style, and fill color can be updated directly in the panel.

![Redaction Property Panel](../redaction/redaction-annotations-images/redaction-property-panel-icon.png)

## See also

* [Overview of Redaction](./overview)
* [Redaction UI interactions](./ui-interaction)
* [Redaction Toolbar](./toolbar)
* [Reaction in Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)