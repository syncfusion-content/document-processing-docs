---
layout: post
title: Squiggly Annotation (Text Markup) in Angular PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Squiggly annotations in the Syncfusion Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Squiggly Annotation (Text Markup) in Angular PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Squiggly* text markup annotations in the Syncfusion **React PDF Viewer**.
You can add squiggly underlines from the toolbar or context menu, programmatically invoke squiggly mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Squiggly in the Viewer
To enable Squiggly annotations, inject the following modules into the Angular PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#annotation)
- [**TextSelection**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#textselection)
- [**Toolbar**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#toolbar)

This minimal setup enables UI interactions like selection and squiggly markup.

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
        id="container"
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
}

{% endhighlight %}
{% endtabs %}

## Add Squiggly Annotation

### Add Squiggly Using the Toolbar

1. Select the text you want to annotate.
2. Click the **Squiggly** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.
![Squiggly tool](../../../javascript-es6/annotations/annotation-images/squiggle-tool.gif)

### Add Squiggly Using the Context Menu

Right-click a selected text region → select **Squiggly**.
![Squiggly context](../../../javascript-es6/annotations/annotation-images/squiggle-context.gif)
To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Squiggly Mode
Switch the viewer into squiggly mode using `setAnnotationMode('Squiggly')`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

enableSquiggly(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.setAnnotationMode('Squiggly');
}

{% endhighlight %}
{% endtabs %}

#### Exit Squiggly Mode
Switch back to normal mode using:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

disableSquigglyMode(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.setAnnotationMode('None');
}

{% endhighlight %}
{% endtabs %}

### Add Squiggly Programmatically
Use [`addAnnotation()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) to insert a squiggly at a specific location.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addSquiggly(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  pdfViewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
    pageNumber: 1
  });
}

{% endhighlight %}
{% endtabs %}

## Customize Squiggly Appearance
Configure default squiggly settings such as **color**, **opacity**, and **author** using [`squigglySettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#squigglysettings).

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
        id="container"
        [documentPath]="document"
        [resourceUrl]="resource"
        [squigglySettings]="squigglySettings"
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

  public squigglySettings = {
    author: 'Guest User',
    subject: 'Corrections',
    color: '#00ff00',
    opacity: 0.9
  };
}

{% endhighlight %}
{% endtabs %}

## Manage Squiggly (Edit, Delete, Comment)

### Edit Squiggly

#### Edit Squiggly Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../../javascript-es6/images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../../javascript-es6/images/edit_opacity.png)

#### Edit Squiggly Programmatically
Modify an existing squiggly programmatically using `editAnnotation()`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

editSquigglyProgrammatically(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  for (let annot of pdfViewer.annotationCollection) {
    if (annot.textMarkupAnnotationType === 'Squiggly') {
      annot.color = '#ff0000';
      annot.opacity = 0.8;
      pdfViewer.annotation.editAnnotation(annot);
      break;
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Delete Squiggly
The PDF Viewer supports deleting existing annotations through both the UI and API.
For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../remove-annotations)

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to squiggly annotations.
It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation‑related notes within the PDF Viewer.

## Set properties while adding Individual Annotation
Set properties for individual squiggly annotations at the time of creation using the [`addAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#addannotation) API.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

addMultipleSquigglies(): void {
  const pdfViewer = (document.getElementById('container') as any).ej2_instances[0];
  // Squiggly 1
  pdfViewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
    pageNumber: 1,
    author: 'User 1',
    color: '#ffff00',
    opacity: 0.9
  });
  // Squiggly 2
  pdfViewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
    pageNumber: 1,
    author: 'User 2',
    color: '#ff1010',
    opacity: 0.9
  });
}

{% endhighlight %}
{% endtabs %}

## Disable TextMarkup Annotation
Disable text markup annotations (including squiggly) using the [`enableTextMarkupAnnotation`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#enabletextmarkupannotation) property.

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
        id="container"
        [enableTextMarkupAnnotation]="false"
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
}

{% endhighlight %}
{% endtabs %}

## Handle Squiggly Events
The PDF viewer provides annotation life‑cycle events that notify when squiggly annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import

The PDF Viewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer.
For full details on supported formats and steps to export or import annotations, see [**Export and Import annotations**](../export-import-annotations)

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
