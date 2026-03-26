---
layout: post
title: Stamp Annotation in React PDF Viewer | Syncfusion
title: Stamp Annotation in Angular PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Stamp annotations (Dynamic, Sign Here, Standard Business, Custom) in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Stamp Annotations in Angular PDF Viewer
Stamp annotations allow you to place predefined or custom stamps (such as **Dynamic**, **Sign Here**, **Standard Business**, or **Custom**) on a PDF to communicate review states, approvals, or instructions. You can add stamps from the toolbar, switch to specific stamp modes programmatically, customize defaults (e.g., opacity/author), edit or lock them, and export them with the document.

![Stamp annotations](../../../javascript-es6/images/stamp_annot.png)

## Enable Stamp Annotation in the Viewer

To enable Stamp annotations, inject the following modules into the Angular PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotation)
- [**Toolbar**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbar)

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
        id="container"
        [documentPath]="document"
        [resourceUrl]="resource"
        style="height:650px;display:block">
      </ejs-pdfviewer>
    </div>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
}
{% endhighlight %}
{% endtabs %}

## Add Stamp Annotation

### Add Stamp Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Choose **Stamp** to open the stamp gallery.
![Stamp toolbar](../../../javascript-es6/images/stamp_tool.png)
3. Select a stamp type (**Dynamic**, **Sign Here**, **Standard Business**, or **Custom**) and click on the page to place it.
![Select stamp](../../../javascript-es6/images/selectstamp_annot.png)

N> When Pan mode is active and a stamp tool is chosen, the viewer automatically switches to selection mode for a smoother interaction.

### Enable a Specific Stamp Mode
Switch the viewer into a specific stamp annotation mode programmatically.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
enableDynamicStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.setAnnotationMode('Stamp', 'NotApproved');
}

enableSignHereStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.setAnnotationMode('Stamp', null, 'Witness');
}

enableStandardBusinessStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.setAnnotationMode('Stamp', null, null, 'Approved');
}
{% endhighlight %}
{% endtabs %}

#### Exit Stamp Mode
{% tabs %}
{% highlight ts tabtitle="Standalone" %}
exitStampMode(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
{% endhighlight %}
{% endtabs %}

### Add Stamp Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) API to place stamps at specific coordinates.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
// Dynamic stamp
addDynamicStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.addAnnotation('Stamp', { offset: { x: 200, y: 140 }, pageNumber: 1 }, 'Approved');
}

// Sign Here stamp
addSignStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.addAnnotation('Stamp', { offset: { x: 200, y: 240 }, pageNumber: 1 }, undefined, 'Witness');
}

// Standard Business stamp
addStandardBusinessStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.addAnnotation('Stamp', { offset: { x: 200, y: 340 }, pageNumber: 1 }, undefined, undefined, 'Approved');
}

// Custom stamp (JPG/JPEG only)
addCustomStamp(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  viewer.annotation.addAnnotation('Stamp', {
    offset: { x: 100, y: 440 },
    width: 100,
    height: 46,
    author: 'Guest',
    isLock: true,
    pageNumber: 1,
    customStamps: [
      {
        customStampName: 'Image',
        customStampImageSource: 'data:image/jpeg;base64,REPLACE_WITH_YOUR_BASE64_IMAGE_DATA'
      }
    ]
  });
}
{% endhighlight %}
{% endtabs %}

N> For **Custom Stamp** via the UI, only **JPG/JPEG** image formats are supported.

## Customize Stamp Appearance
Configure default properties using the [`stampSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#stampsettings) property (for example, default **opacity** and **author**).

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
    <ejs-pdfviewer
      id="container"
      [documentPath]="document"
      [resourceUrl]="resource"
      [stampSettings]="stampSettings"
      style="height:650px;display:block">
    </ejs-pdfviewer>
  `,
  imports: [PdfViewerModule],
  providers: [ToolbarService, AnnotationService]
})
export class AppComponent {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
  public stampSettings = { opacity: 0.3, author: 'Guest User' };
}
{% endhighlight %}
{% endtabs %}

N> After changing opacity via the **Edit Opacity** tool in the toolbar, the updated value becomes the working default for subsequent placements in the current session.

## Manage Stamp (Move, Resize, Rotate, Lock/Unlock, Delete)

### Edit Stamp Annotation

#### Edit & Arrange (UI)
- **Move**: drag the stamp to reposition it.
- **Resize**: use corner handles to change size.
- **Rotate**: use the rotation handle (where available) to rotate the stamp.
- **Opacity**: adjust using the **Edit Opacity** tool in the annotation toolbar.
- **Lock/Unlock**: lock a selected stamp from the context menu to prevent edits.

#### Edit Stamp Programmatically
Modify bounds or lock state, then call `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
editStampProgrammatically(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];
  for (const ann of viewer.annotationCollection) {
    // shapeAnnotationType is 'stamp' for stamp annotations
    if (ann.shapeAnnotationType === 'stamp') {
      const { width, height } = ann.bounds;
      ann.bounds = { x: 100, y: 100, width, height };
      ann.annotationSettings = ann.annotationSettings || {};
      ann.annotationSettings.isLock = true; // lock the stamp
      viewer.annotation.editAnnotation(ann);
      break;
    }
  }
}
{% endhighlight %}
{% endtabs %}

### Delete Stamp
Delete stamps via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set properties while adding Individual Annotation
You can pass per‑annotation values (e.g., **type**, **position**, **size**, **author**, **isLock**, or **customStamps**) when calling [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
addMultipleStamps(): void {
  const viewer = (document.getElementById('container') as any).ej2_instances[0];

  // Dynamic stamp – Approved
  viewer.annotation.addAnnotation('Stamp', { offset: { x: 180, y: 140 }, pageNumber: 1 }, 'Approved');

  // Sign Here – Witness
  viewer.annotation.addAnnotation('Stamp', { offset: { x: 180, y: 240 }, pageNumber: 1 }, undefined, 'Witness');

  // Standard Business – Approved
  viewer.annotation.addAnnotation('Stamp', { offset: { x: 180, y: 340 }, pageNumber: 1 }, undefined, undefined, 'Approved');
}
{% endhighlight %}
{% endtabs %}

## Handle Stamp Events

The PDF viewer provides annotation life‑cycle events that notify when Stamp annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import
The PDF Viewer supports exporting and importing annotations, allowing you to save stamps and reload them later. For supported formats and steps, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
