---
layout: post
title: Organize Pages Events in PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the PDF Viewer, including rotating, rearranging, inserting, deleting, and copying pages on mobile devices.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize Pages Events in PDF Viewer

The PDF Viewer provides events to track and respond to actions within the page organizer, allowing for the customization of page manipulation features.

## pageOrganizerSaveAs

The `pageOrganizerSaveAs` event is triggered when a save action is performed in the page organizer.

-  Occurs when the **Save as** button in the page organizer toolbar is clicked after modifying the document structure.

The event arguments provide the necessary information about the save event:

- `fileName`: The name of the currently loaded PDF document.
- `downloadDocument`: A base64 string of the modified PDF document data.
- `cancel`: A boolean that, when set to `true`, prevents the default save action from proceeding.

```typescript
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-angular-pdfviewer';

PdfViewerComponent.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer);

@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
            <ejs-pdfviewer #pdfViewer id="pdfViewer"
                  [documentPath]='document'
                  [resourceUrl]="resource"
                  (pageOrganizerSaveAs)="onPageOrganizerSaveAs($event)">
                  style="height:640px;display:block">
            </ejs-pdfviewer>
          </div>`
})
export class AppComponent {
    @ViewChild('pdfViewer') public pdfViewer: PdfViewerComponent;
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
    onPageOrganizerSaveAs(args: any): void {
      console.log('File Name is' + args.fileName);
      console.log('Document data' + args.downloadDocument);
    }
}
```

## pageOrganizerZoomChanged

The `pageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer is changed.

-  This event is fired when the user interacts with the zoom slider in the page organizer. The `showImageZoomingSlider` property in `pageOrganizerSettings` must be set to `true` for the slider to be visible.


Event arguments:

- `previousZoomValue`: The previous zoom value.
- `currentZoomValue`: The current zoom value.

```typescript
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-angular-pdfviewer';

PdfViewerComponent.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer);

@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
              <ejs-pdfviewer #pdfViewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]="resource"
                    [pageOrganizerSettings]="{ showImageZoomingSlider: true }"
                    (pageOrganizerZoomChanged)="onPageOrganizerZoomChanged($event)">
                    style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`
})
export class AppComponent {
  @ViewChild('pdfviewer', { static: true }) pdfviewer?: PdfViewerComponent;

  onPageOrganizerZoomChanged(args: any): void {
    console.log('Previous Zoom Value is' + args.previousZoom);
    console.log('Current Zoom Value is' + args.currentZoom);
  }
}
```

## Related event documentation

- Overall Viewer events: [Event](../event)
- Annotation events: [Annotation events](../annotation/annotation-event)
- Form designer events: [Form field events](../form-designer/form-field-events)
