---
layout: post
title: Annotations Permission in Angular PDF Viewer | Syncfusion
description: Learn here all about how to use annotation permissions in Syncfusion Angular PDF Viewer using programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation permissions in Angular

Use [annotationSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotationsettings) to control creation-time permissions and default behavior for annotations in the PDF Viewer. These settings establish defaults for annotations created through the UI and programmatic flows.

## Common permissions

- `isLock`: Lock an annotation so it cannot be moved, resized, edited, or deleted.
- `skipPrint`: Exclude annotations from the print output when printing from the viewer.
- `skipDownload`: Exclude annotations from the exported/downloaded PDF.

Example: set default `annotationSettings` on the Angular `ejs-pdfviewer` component.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, AnnotationService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
      [annotationSettings]="annotationSettings"
      style="height:650px;display:block">
    </ejs-pdfviewer>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public annotationSettings: any = {
    author: 'XYZ',
    minHeight: 10,
    minWidth: 10,
    maxWidth: 100,
    maxHeight: 100,
    isLock: false,
    skipPrint: false,
    skipDownload: false,
    allowedInteractions: ['Resize']
  };
}
{% endhighlight %}
{% endtabs %}

## Individual permissions

- `isPrint`: Controls whether a specific annotation participates in printing. Set to `false` to exclude only that annotation from print output.
- `isLock`: Lock or unlock a specific annotation instance programmatically.

Example: set per-annotation defaults for text markup, shapes, and measurements as component bindings in Angular.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import { PdfViewerModule, ToolbarService, AnnotationService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <ejs-pdfviewer
      id="pdfViewer"
      [documentPath]="documentPath"
      [resourceUrl]="resourceUrl"
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
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {
  public documentPath: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  public highlightSettings = { author: 'QA', subject: 'Review', color: '#ffff00', opacity: 0.6 };
  public strikethroughSettings = { author: 'QA', subject: 'Remove', color: '#ff0000', opacity: 0.6 };
  public underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 };
  public squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 };

  public lineSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  public arrowSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  public rectangleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true };
  public circleSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true };
  public polygonSettings = { fillColor: '#ffffff00', strokeColor: '#222222', thickness: 1, opacity: 1, isLock: false, isPrint: true };

  public distanceSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  public perimeterSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, isLock: false, isPrint: true };
  public areaSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true };
  public radiusSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true };
  public volumeSettings = { strokeColor: '#0066ff', thickness: 2, opacity: 0.8, fillColor: '#ffffff00', isLock: false, isPrint: true };

  public freeTextSettings = { borderColor: '#222222', opacity: 1, isLock: false, isPrint: true };
  public inkAnnotationSettings = { strokeColor: '#0000ff', thickness: 3, opacity: 0.8, isLock: false, isPrint: true };
  public stampSettings = { opacity: 0.9, isLock: false, isPrint: true };
  public stickyNotesSettings = { author: 'QA', subject: 'Review', opacity: 1, isLock: false, isPrint: true };
}
{% endhighlight %}
{% endtabs %}

Behavior notes
- isLock true: The annotation is locked; users cannot move, resize, or edit it through the UI until it is unlocked.
- skipPrint true: All annotations are omitted from the print output initiated from the viewer.
- skipDownload true: All annotations are omitted from the exported/downloaded PDF from the viewer.
- isPrint on an individual annotation: Use this when you only want to exclude a particular annotation from printing while leaving others printable.

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Remove Annotation](../annotation/delete-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)