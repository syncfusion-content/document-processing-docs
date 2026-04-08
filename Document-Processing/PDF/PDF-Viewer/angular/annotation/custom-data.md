---
layout: post
title: Custom Data in annotations in Angular PDF Viewer | Syncfusion
description: Learn here all about how to use add custom Data in annotation in Syncfusion Angular PDF Viewer Component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom data in annotations in Angular

Annotations can include custom key–value data via the `customData` property. This is supported at two levels:

- Default level via `annotationSettings`: applies to all annotations created through the UI.
- Per-annotation-type level: provide `customData` inside specific annotation-type settings (for example, `highlightSettings`, `rectangleSettings`).

The `customData` value can be any JSON-serializable object. It is preserved during annotation export/import and is available at runtime on the annotation object.

## Default custom data (annotationSettings)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService,
  TextSelectionService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [annotationSettings]="annotationSettings"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  // Annotation settings with custom data
  public annotationSettings = {
    author: 'XYZ',
    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,
    // Custom data applied to all newly created annotations
    customData: {
      appId: 'pdf-review',
      tenant: 'northwind',
      featureFlags: { allowShare: true, qaStamp: false }
    }
  };
}

{% endhighlight %}
{% endtabs %}

## Custom data for Individual Annotation

Provide customData inside individual annotation-type settings when you want specific payloads for different tools.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService,
  TextSelectionService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [highlightSettings]="highlightSettings"
        [strikethroughSettings]="strikethroughSettings"
        [underlineSettings]="underlineSettings"
        [squigglySettings]="squigglySettings"
        [lineSettings]="lineSettings"
        [arrowSettings]="arrowSettings"
        [rectangleSettings]="rectangleSettings"
        [circleSettings]="circleSettings"
        [polygonSettings]="polygonSettings"
        [distanceSettings]="distanceSettings"
        [perimeterSettings]="perimeterSettings"
        [areaSettings]="areaSettings"
        [radiusSettings]="radiusSettings"
        [volumeSettings]="volumeSettings"
        [freeTextSettings]="freeTextSettings"
        [inkAnnotationSettings]="inkAnnotationSettings"
        [stampSettings]="stampSettings"
        [stickyNotesSettings]="stickyNotesSettings"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  // Text markup settings
  public highlightSettings = { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6, customData: { tag: 'needs-review', priority: 'high' } };
  public strikethroughSettings = { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6, customData: { tag: 'remove', priority: 'medium' } };
  public underlineSettings = { author: 'Guest User', subject: 'Notes', color: '#00ffff', opacity: 0.9, customData: { tag: 'note', owner: 'guest' } };
  public squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9, customData: { tag: 'typo' } };

  // Shape settings
  public lineSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { id: 'ln-1', category: 'connector' } };
  public arrowSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { id: 'ar-1', category: 'direction' } };
  public rectangleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'rect-1', zone: 'content' } };
  public circleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'circ-1', zone: 'highlight' } };
  public polygonSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, customData: { id: 'poly-1', group: 'area' } };

  // Measurement settings
  public distanceSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { units: 'cm', scale: 1 } };
  public perimeterSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, customData: { units: 'cm', calc: 'perimeter' } };
  public areaSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm^2', calc: 'area' } };
  public radiusSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm', calc: 'radius' } };
  public volumeSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', customData: { units: 'cm^3', calc: 'volume' } };

  // Other annotation settings
  public freeTextSettings = { borderColor: '#222222', opacity: 1, customData: { template: 'comment', mentions: ['qa'] } };
  public inkAnnotationSettings = { strokeColor: '#0000ff', thickness: 3, opacity: 0.8, customData: { tool: 'pen', userId: 12345 } };
  public stampSettings = { opacity: 0.9, customData: { stampType: 'Approved', by: 'Manager' } };
  public stickyNotesSettings = { author: 'QA', subject: 'Review', opacity: 1, customData: { channel: 'inbox', unread: true } };
}

{% endhighlight %}
{% endtabs %}

## Retrieve custom data at runtime

You can access the customData for any annotation through the viewer's annotationCollection. For example, wire a button click to iterate all annotations and read their custom payloads.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService,
  TextSelectionService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="showCustomData()">Show Custom Data</button>
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService, TextSelectionService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public showCustomData(): void {
    const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
    pdfViewer.annotationCollection.forEach((a: any) => {
      console.log('Annotation', a.id, 'customData:', a.customData);
    });
  }
}

{% endhighlight %}
{% endtabs %}

### Note
- `customData` can be any JSON-serializable object and is stored with the annotation.
- Use `annotationSettings.customData` for global defaults and override with per-tool settings as needed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotations/create-modify-annotation)
- [Customize Annotation](../annotations/customize-annotation)
- [Remove Annotation](../annotations/delete-annotation)
- [Handwritten Signature](../annotations/signature-annotation)
- [Export and Import Annotation](../annotations/export-import/export-annotation)
- [Annotation Permission](../annotations/annotation-permission)
- [Annotation in Mobile View](../annotations/annotations-in-mobile-view)
- [Annotation Events](../annotations/annotation-event)
- [Annotation API](../annotations/annotations-api)
