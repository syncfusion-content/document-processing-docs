---
layout: post
title: Organize Pages Events in Angular PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the PDF Viewer, including rotating, rearranging, inserting, deleting, and copying pages on mobile devices.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize Pages Events in Angular PDF Viewer

The PDF Viewer exposes events for the page organizer to track and respond to page manipulation actions (for example: rotate, rearrange, insert, delete, and copy).

## pageOrganizerSaveAs

The `pageOrganizerSaveAs` event is triggered when a save action is performed in the page organizer.

-  Occurs when the **Save as** button in the page organizer toolbar is clicked after modifying the document structure.

The event arguments provide information about the save event:

- `fileName`: The name of the currently loaded PDF document.
- `downloadDocument`: A base64 string of the modified PDF document data.
- `cancel`: A boolean that, when set to `true`, prevents the default save action from proceeding.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
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
  PageOrganizerSaveAsEventArgs,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
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
  template: `
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      (pageOrganizerSaveAs)="onPageOrganizerSaveAs($event)"
      style="height: 100vh; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic (if needed)
  }

  onPageOrganizerSaveAs(args: PageOrganizerSaveAsEventArgs): void {
    console.log('File Name is' + args.fileName);
    console.log('Document data' + args.downloadDocument);
  }
}

{% endhighlight %}
{% endtabs %}

## pageOrganizerZoomChanged

The `pageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer is changed.

-  This event is fired when the user interacts with the zoom slider in the page organizer. The `showImageZoomingSlider` property in `pageOrganizerSettings` must be set to `true` for the slider to be visible.

Event arguments:

- `previousZoom`: The previous zoom value.
- `currentZoom`: The current zoom value.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, ViewChild, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  PdfViewerModule,
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
  PageOrganizerZoomChangedEventArgs,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
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
  template: `
    <ejs-pdfviewer
      #pdfviewer
      id="PdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [pageOrganizerSettings]="{ showImageZoomingSlider: true }"
      (pageOrganizerZoomChanged)="onPageOrganizerZoomChanged($event)"
      style="height: 100vh; width: 100%; display: block"
    >
    </ejs-pdfviewer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl!: PdfViewerComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';

  ngOnInit(): void {
    // Initialization logic (if needed)
  }

  onPageOrganizerZoomChanged(args: PageOrganizerZoomChangedEventArgs): void {
    console.log('Previous Zoom Value is' + args.previousZoom);
    console.log('Current Zoom Value is' + args.currentZoom);
  }
}

{% endhighlight %}
{% endtabs %}

## Related event documentation

- Overall Viewer events: [Event](../event)
- Annotation events: [Annotation events](../annotation/annotation-event)
- Form designer events: [Form field events](../form-designer/form-field-events)
