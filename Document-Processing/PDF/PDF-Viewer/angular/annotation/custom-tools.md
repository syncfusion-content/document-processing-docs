---
layout: post
title: Custom annotation tools in Angular PDF Viewer | Syncfusion
description: Learn how to build a custom toolbar for Syncfusion Angular PDF Viewer and switch annotation tools programmatically using setAnnotationMode.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom annotation tools in Angular PDF Viewer

The PDF Viewer supports adding a custom toolbar and toggling annotation tools programmatically using the `setAnnotationMode` method. The viewer can enable tools such as Highlight, Underline, Rectangle, Circle, Arrow, Free Text, Ink, and measurement annotations (Distance, Perimeter, Area, Radius)  

Follow these steps to build a minimal custom annotation toolbar.

Step 1: Start from a basic PDF Viewer sample

Refer to the [Getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a basic sample.

Step 2: Add a lightweight custom toolbar with Angular buttons

Add buttons for the tools to expose. The sample below uses plain Angular buttons for simplicity; replace with a Syncfusion ToolbarComponent for a richer UI if desired.

Step 3: Import and inject modules

Ensure the `Annotation` module is injected. Include text selection and search modules if those capabilities are required.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, AnnotationService, TextSelectionService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px;">
      <button (click)="setMode('Highlight')">Highlight</button>
      <button (click)="setMode('Underline')">Underline</button>
      <button (click)="setMode('Strikethrough')">Strikethrough</button>
      <button (click)="setMode('Rectangle')">Rectangle</button>
      <button (click)="setMode('Circle')">Circle</button>
      <button (click)="setMode('Line')">Line</button>
      <button (click)="setMode('Arrow')">Arrow</button>
      <button (click)="setMode('Polygon')">Polygon</button>
      <button (click)="setMode('FreeText')">Free Text</button>
      <button (click)="setMode('Ink')">Ink</button>
      <button (click)="setMode('StickyNotes')">Sticky Note</button>
      <button (click)="setMode('Distance')">Distance</button>
      <button (click)="setMode('Perimeter')">Perimeter</button>
      <button (click)="setMode('Area')">Area</button>
      <button (click)="setMode('Radius')">Radius</button>
      <button (click)="setMode('None')">Exit</button>
    </div>
    <ejs-pdfviewer
      id="container"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      style="height:640px;display:block">
    </ejs-pdfviewer>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  getViewer() {
    return (document.getElementById('container') as any).ej2_instances[0];
  }

  setMode(mode: string) {
    this.getViewer().annotation.setAnnotationMode(mode);
  }
}
{% endhighlight %}
{% endtabs %}

## Custom tools using Syncfusion Toolbar for a richer UI

Replace the plain buttons with a Syncfusion `ToolbarComponent` and icons for a richer UI. Add the `@syncfusion/ej2-angular-navigations` package and wire each item's `clicked` handler to `setAnnotationMode`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, AnnotationService, TextSelectionService } from '@syncfusion/ej2-angular-pdfviewer';
import { ToolbarModule, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ejs-toolbar overflowMode="Scrollable" (clicked)="onToolbarClick($event)">
      <e-items>
        <e-item id="annHighlight" text="Highlight" tooltipText="Highlight" prefixIcon="e-pv-highlight-icon"></e-item>
        <e-item id="annUnderline" text="Underline" tooltipText="Underline" prefixIcon="e-pv-underline-icon"></e-item>
        <e-item id="annStrike" text="Strike" tooltipText="Strikethrough" prefixIcon="e-pv-strikethrough-icon"></e-item>
        <e-item type="Separator"></e-item>
        <e-item id="annRect" text="Rect" tooltipText="Rectangle" prefixIcon="e-pv-shape-rectangle-icon"></e-item>
        <e-item id="annCircle" text="Circle" tooltipText="Circle" prefixIcon="e-pv-shape-circle-icon"></e-item>
        <e-item id="annLine" text="Line" tooltipText="Line" prefixIcon="e-pv-shape-line-icon"></e-item>
        <e-item id="annArrow" text="Arrow" tooltipText="Arrow" prefixIcon="e-pv-shape-arrow-icon"></e-item>
        <e-item id="annPolygon" text="Polygon" tooltipText="Polygon" prefixIcon="e-pv-shape-pentagon"></e-item>
        <e-item type="Separator"></e-item>
        <e-item id="annFreeText" text="Free Text" tooltipText="Free Text" prefixIcon="e-pv-freetext-icon"></e-item>
        <e-item id="annInk" text="Ink" tooltipText="Ink" prefixIcon="e-pv-inkannotation-icon"></e-item>
        <e-item id="annSticky" text="Note" tooltipText="Sticky Note" prefixIcon="e-pv-sticky-notes"></e-item>
        <e-item type="Separator"></e-item>
        <e-item id="annDistance" text="Distance" tooltipText="Distance" prefixIcon="e-pv-calibrate-distance-icon"></e-item>
        <e-item id="annPerimeter" text="Perimeter" tooltipText="Perimeter" prefixIcon="e-pv-calibrate-perimeter-icon"></e-item>
        <e-item id="annArea" text="Area" tooltipText="Area" prefixIcon="e-pv-calibrate-area-icon"></e-item>
        <e-item id="annRadius" text="Radius" tooltipText="Radius" prefixIcon="e-pv-calibrate-radius-icon"></e-item>
        <e-item type="Separator"></e-item>
        <e-item id="annNone" text="Exit" tooltipText="Exit drawing" align="Right"></e-item>
      </e-items>
    </ejs-toolbar>
    <ejs-pdfviewer
      id="container"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      style="height:600px;display:block">
    </ejs-pdfviewer>
  `,
  imports: [PdfViewerModule, ToolbarModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  private modeMap: { [key: string]: string } = {
    annHighlight: 'Highlight',
    annUnderline: 'Underline',
    annStrike: 'Strikethrough',
    annRect: 'Rectangle',
    annCircle: 'Circle',
    annLine: 'Line',
    annArrow: 'Arrow',
    annPolygon: 'Polygon',
    annFreeText: 'FreeText',
    annInk: 'Ink',
    annSticky: 'StickyNotes',
    annDistance: 'Distance',
    annPerimeter: 'Perimeter',
    annArea: 'Area',
    annRadius: 'Radius',
    annNone: 'None'
  };

  getViewer() {
    return (document.getElementById('container') as any).ej2_instances[0];
  }

  onToolbarClick(args: ClickEventArgs) {
    const mode = this.modeMap[args.item.id];
    if (mode) {
      this.getViewer().annotation.setAnnotationMode(mode);
    }
  }
}
{% endhighlight %}
{% endtabs %}

Note

- `setAnnotationMode` accepts the annotation type name. Common values include: `Highlight`, `Underline`, `Strikethrough`, `StickyNotes`, `FreeText`, `Ink`, `Rectangle`, `Circle`, `Line`, `Arrow`, `Polygon`, `Polyline`, `Distance`, `Perimeter`, `Area`, `Radius`, and `None` to exit.
- Default annotation styles can be predefined using the corresponding settings properties (for example, `areaSettings`).

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotations Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)
