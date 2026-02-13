---
layout: post
title: Line angle constraints in Angular PDF Viewer | Syncfusion
description: Programmatically manage text markup annotations like highlight, underline, strikethrough, and squiggly in your PDF documents.
description: Learn all about Line Angle Constraints Annotation in the Syncfusion Angular PDF Viewer component of Essential JS 2 and more.
platform: document-processing
control: Line Angle Constraints
documentation: ug
---

# Line angle constraints in Angular PDF Viewer

The PDF Viewer control provides angle-constraint functionality for line-type annotations. When enabled, drawing operations snap to configured angle increments, improving accuracy and consistency for technical drawings and measurements.

## Enable line angle constraints
Configure the `enableLineAngleConstraints` property within `annotationDrawingOptions`. When enabled, supported line-type annotations snap to fixed angles.

The following code demonstrates how to enable line angle constraints:

```html
<style>
  .control-section{
      margin-top: 100px;
  }
</style>
<div class="control-section">
<div class="content-wrapper">
<ejs-pdfviewer
      #pdfviewer
      id="pdfViewer"
      [documentPath]="document"
      [resourceUrl]="resource"
      [annotationDrawingOptions]="annotationDrawingOptions"
      style="height:640px;display:block"
></ejs-pdfviewer>
</div>
</div>
```

```typescript
import { Component, ViewEncapsulation, OnInit,ViewChild} from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService, FormDesignerService, PageOrganizerService,PdfViewerModule, TextSelectionStartEventArgs, AnnotationSelectEventArgs } from '@syncfusion/ej2-angular-pdfviewer';
import { SwitchComponent, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';
 
 
/**
* Default PdfViewer Controller
*/
@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:max-line-length
    providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService,
        TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService, FormDesignerService,PageOrganizerService],
    styleUrls: ['app.css'],
    standalone: true,
    imports: [
 
        SwitchModule,
        PdfViewerModule,
 
    ],
})
 
export class AppComponent {
    @ViewChild('pdfviewer')
    public pdfviewerControl: PdfViewerComponent | undefined;
 
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource:string = "https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib";
    public annotationDrawingOptions = {
        enableLineAngleConstraints: true,
        restrictLineAngleTo: 90
  };
    ngOnInit(): void {
        // ngOnInit function
    }
}
```

## Configuration Properties

### enableLineAngleConstraints

The `enableLineAngleConstraints` property activates angle snapping for line-based annotations. When set to `true`, the following annotation types snap to fixed angles as defined by `restrictLineAngleTo`:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

**Key benefits:**

- Automatic angle snapping while drawing
- Improved precision for technical drawings and measurements
- Desktop behavior: hold Shift while drawing to toggle constraints (if constraints are disabled, Shift temporarily enables snapping; if enabled, Shift enforces snapping)
- Real-time visual feedback during drawing

### restrictLineAngleTo

Specifies the angle increment (in degrees) used for snapping. The default increment is 45°.

Angle snapping behavior:

- The initial drawing direction is treated as the 0° reference point.
- Snapped angles are calculated by adding the increment to the reference direction.
- If the increment does not divide 360 evenly, angles continue wrapping after 360°.

Examples:

- `restrictLineAngleTo: 45` → snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- `restrictLineAngleTo: 100` → snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing behavior

When angle constraints are enabled:

- Begin drawing a supported annotation (Line, Arrow, Polyline, Distance, or Perimeter).
- The segment snaps to the nearest allowed angle according to `restrictLineAngleTo`.
- A visual indicator displays the current snapping angle in real time.
- Release to finalize the annotation.

### Keyboard shortcuts

Desktop platforms:

- `Shift` + drag: toggles snapping during the drag operation. If constraints are disabled, `Shift` temporarily enables snapping; if enabled, `Shift` enforces snapping.

### Modifying constrained annotations

When editing existing line annotations with selectors:

- Constraints apply relative to the annotation's current orientation (the line's direction is the 0° reference).
- Constraint snapping during modification is supported for Line and Arrow annotations.
- Adjustments snap according to the configured `restrictLineAngleTo` increment.

[View a sample in GitHub] https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to

N> Refer to the Angular PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer) for highlights. See additional [Angular PDF Viewer examples](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)
