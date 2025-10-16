---
layout: post
title: Line Angle Constraints in Angular PDF Viewer | Syncfusion
description: Learn all about Line Angle Constraints Annotation in the Syncfusion Angular PDF Viewer component of Essential JS 2 and more.
platform: document-processing
control: Line Angle Constraints
documentation: ug
---

# Line angle constraints in the Angular PDF Viewer component

The Angular PDF Viewer component provides **line angle constraints** to snap line-type annotations to specified angles. This improves accuracy and consistency for technical drawings and measurements in PDF documents.

## Enable line angle constraints
Enable line angle constraints by setting the `enableLineAngleConstraints` property within `annotationDrawingOptions`. When enabled, line-type annotations are restricted to fixed angles.

The following example shows how to enable line angle constraints:

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

## Configuration properties

### enableLineAngleConstraints

The `enableLineAngleConstraints` property activates angle snapping for line-based annotations. When set to `true`, the following annotation types snap to fixed angles as defined by the `restrictLineAngleTo` property:

- Lines
- Arrows
- Polygon
- Distance measurements
- Perimeter measurements
- Area measurements
- Volume measurements

**Key benefits:**

- Automatic angle snapping while drawing
- Enhanced precision for technical drawings and measurements
- Desktop support: hold **Shift** while drawing to activate constraints
- Real-time visual feedback of snapping behavior

### restrictLineAngleTo

The `restrictLineAngleTo` property defines the angle increment (in degrees) that constrains line-based annotations. The default value is **45 degrees**.

**Angle snapping rules:**

- The initial drawing direction is treated as the 0° reference point.
- Snapped angles are calculated based on the increment.
- If the increment doesn’t divide 360 evenly, angles reset after 360°.

**Examples:**

- restrictLineAngleTo: 45 → Snapped angles: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°
- restrictLineAngleTo: 100 → Snapped angles: 0°, 100°, 200°, 300°, 360°

## Work with constrained annotations

### Drawing behavior

When line angle constraints are enabled:

**Initial Drawing:** Start drawing a line, arrow, polygon, distance, perimeter, area, or volume as usual.
**Angle Snapping:** The line snaps to the nearest allowed angle.
**Visual Feedback:** Snapped angle is shown in real time.
**Completion:** Release to complete the annotation.

### Keyboard shortcuts

**Desktop platforms:**

**Shift + drag:** enables angle snapping even when `enableLineAngleConstraints` is false.

### Selector-based modifications

When modifying existing line annotations using selectors:

- Constraints apply based on the original line direction.
- The reference angle (0°) is determined by the line’s current orientation.
- Only lines and arrows support constraint snapping during modification.
- Adjustments snap to the configured angle increment relative to the original direction.

N> You can refer to our [Angular PDF Viewer](https://www.syncfusion.com/angular-ui-components/angular-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [Angular PDF Viewer example](https://github.com/syncfusion/ej2-angular-samples/tree/master/src/app/pdfviewer) to know how to render and configure the PDF Viewer.
