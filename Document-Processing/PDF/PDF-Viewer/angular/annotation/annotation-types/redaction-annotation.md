---
layout: post
title: PDF Redaction in Angular PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and apply redaction annotations in Syncfusion Angular PDF Viewer with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Redaction annotation in Angular PDF Viewer

Redaction annotations permanently remove sensitive content from a PDF. You can draw redaction marks over text or graphics, redact entire pages, customize overlay text and styling, and apply redaction to finalize. 

![Toolbar with the Redaction tool highlighted](../../Redaction/redaction-annotations-images/redaction-icon-toolbar.png)

## Add Redaction Annotation

### Add redaction annotations in UI
- Use the **Redaction** tool from the toolbar to draw over content to hide it.  
- Redaction marks can show overlay text (for example, “Confidential”) and can be styled.

![Drawing a redaction annotation on the page](../../Redaction/redaction-annotations-images/adding-redaction-annotation.png)

Redaction annotations are interactive:
- **Movable**  
![Moving a redaction annotation](../../Redaction/redaction-annotations-images/moving-redaction-annotation.png)  
- **Resizable**  
![Resizing a redaction annotation](../../Redaction/redaction-annotations-images/resizing-redaction-annotation.png)

You can also add redaction annotations from the **context menu** by selecting content and choosing **Redact Annotation**.  
![Context menu showing Redact Annotation option](../../Redaction/redaction-annotations-images/redact-text-context-menu.png)

N> Ensure the **Redaction** tool is included in the toolbar. See [RedactionToolbar](../../Redaction/toolbar.md) for configuration.

### Add redaction annotations programmatically (Angular)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
addRedactionProgrammatically(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];

  pdfViewer.annotation.addAnnotation('Redaction', {
    bound: { x: 200, y: 480, width: 150, height: 75 },
    pageNumber: 1,
    markerFillColor: '#000',
    markerBorderColor: '#fff',
    fillColor: '#000',
    overlayText: 'Confidential',
    fontColor: '#fff',
    fontFamily: 'Times New Roman',
    fontSize: 10,
    beforeRedactionsApplied: false
  });
}
{% endhighlight %}
{% endtabs %}  

Track additions using the `annotationAdd` event (wired above as a component prop).

## Edit Redaction Annotations

### Edit redaction annotations in UI
Use the viewer to select, move, and resize Redaction annotations. Use the context menu for additional actions.

#### Edit the properties of redaction annotations in UI
Use the property panel or **context menu → Properties** to change overlay text, font, fill color, and more.  
![Redaction Property Panel Icon](../../Redaction/redaction-annotations-images/redaction-property-panel-icon.png)  
![Redaction Property Panel via Context Menu](../../Redaction/redaction-annotations-images/redaction-property-panel-via-context-menu.png)

### Edit redaction annotations programmatically (Angular)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
editFirstRedaction(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  const annotations = pdfViewer.annotationCollection || [];

  for (const annotation of annotations) {
    if (annotation.subject === 'Redaction') {
      annotation.overlayText = 'EditedAnnotation';
      annotation.markerFillColor = '#222';
      annotation.fontColor = '#ff0';
      pdfViewer.annotation.editAnnotation(annotation);
      break;
    }
  }
}
{% endhighlight %}
{% endtabs %}

## Delete redaction annotations

### Delete in UI
- **Right‑click → Delete**  
![Context menu showing Delete for a redaction](../../Redaction/redaction-annotations-images/redaction-delete-context-menu.png)
- Use the **Delete** button in the toolbar  
![Toolbar delete icon for redaction](../../Redaction/redaction-annotations-images/redaction-delete-icon.png)
- Press **Delete** key

### Delete programmatically (Angular)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
deleteFirstRedaction(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  const annotations = pdfViewer.annotationCollection || [];
  const firstRedaction = annotations.find((a: any) => a.subject === 'Redaction');

  if (firstRedaction) {
    pdfViewer.annotationModule.deleteAnnotationById(firstRedaction.annotationId);
  }
}
{% endhighlight %}
{% endtabs %}

## Redact pages

### Redact pages in UI
Use the **Redact Pages** dialog to mark entire pages with options like **Current Page**, **Odd Pages Only**, **Even Pages Only**, and **Specific Pages**.  
![Page Redaction Panel](../../Redaction/redaction-annotations-images/page-redaction-panel.png)

### Add page redactions programmatically (Angular)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
addPageRedactions(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.addPageRedactions([1, 3, 5]);
}
{% endhighlight %}
{% endtabs %}

## Apply redaction

### Apply redaction in UI
Click **Apply Redaction** to permanently remove marked content.  
![Redact Button Icon](../../Redaction/redaction-annotations-images/redact-button-icon.png)  
![Apply Redaction Dialog](../../Redaction/redaction-annotations-images/apply-redaction-dialog.png)

N> **Redaction is permanent and cannot be undone.**

### Apply redaction programmatically (Angular)

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
applyRedaction(): void {
  const pdfViewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  pdfViewer.annotation.redact();
}
{% endhighlight %}
{% endtabs %}

N> Applying redaction is **irreversible**.

## Default redaction settings during initialization

Configure defaults with the `redactionSettings` **component property**:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component } from '@angular/core';
import {
  PdfViewerModule,
  ToolbarService,
  AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [resourceUrl]="resource"
        [redactionSettings]="redactionSettings"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  public resource: string =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

  // Redaction annotation default settings
  public redactionSettings = {
    overlayText: 'Confidential',
    markerFillColor: '#000'
  };
}
{% endhighlight %}
{% endtabs %}  

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also
- [Annotation Overview](../overview)
- [Redaction Overview](../../Redaction/overview)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export and Import Annotation](../../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)
