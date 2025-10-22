---
layout: post
title: Line angle constraints in Angular PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and configure highlight, underline, strikethrough, and squiggly text markup annotations programmatically.
description: Learn all about Line Angle Constraints Annotation in the Syncfusion Angular PDF Viewer component of Essential JS 2 and more.
platform: document-processing
control: Line Angle Constraints
documentation: ug
---

# Line angle constraints in Angular PDF Viewer

The PDF Viewer control provides robust **line angle constraints** functionality. This allows users to draw line type annotations with controlled angle snapping, improving accuracy and consistency across technical drawings and measurements across your PDF documents.

## Enable line angle constraints
onfigure the `enableLineAngleConstraints` property within `annotationDrawingOptions`. When enabled, supported line-type annotations snap to fixed angles.

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
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:max-line-length
    providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService,
        TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService, FormDesignerService,PageOrganizerService],
    styleUrls: ['app.component.css'],
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

The `enableLineAngleConstraints` property activates angle snapping for line-based annotations. When set to `true`, the following annotation types will snap to fixed angles as defined by the `restrictLineAngleTo` property:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

**Key Benefits:**

- Automatic angle snapping during the drawing
- Enhanced precision for technical drawings and measurements
- Desktop support: Desktop behavior: hold Shift while drawing to toggle constraints (when disabled, Shift temporarily enables; when enabled, Shift enforces snapping)
- Real-time visual feedback showing angle snapping behavior

### restrictLineAngleTo

Defines the angle increment (in degrees) used to constrain supported annotations. The default is 45.

Angle snapping rules:

- The initial drawing direction is treated as the 0° reference point
- Snapped angles are calculated based on the increment
- If the increment doesn’t divide 360 evenly, angles reset after 360°

Examples:

- restrictLineAngleTo: 45 → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- restrictLineAngleTo: 100 → Snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing Behavior

When line angle constraints are enabled:

- Start drawing a supported annotation (Line, Arrow, Polyline, Distance, or Perimeter).
- The segment snaps to the nearest allowed angle.
- A visual indicator reflects snapping in real time.
- Release to complete the annotation.

### Keyboard Shortcuts

Desktop platforms:
- Shift + drag: toggles snapping. If constraints are disabled, Shift temporarily enables them; if enabled, Shift enforces snapping.

### Selector-Based Modifications

When modifying existing line annotations using selectors:

- Constraints apply based on the original line direction.
- The reference angle (0°) is determined by the line’s current orientation.
- Constraint snapping during modification is supported for Line and Arrow.
- Adjustments snap to the configured angle increment.

[View a sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)

N> Refer to the Angular PDF Viewer [feature tour](https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer) for feature highlights. Explore the [Angular PDF Viewer examples](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples) to learn how to render and configure the PDF Viewer.
