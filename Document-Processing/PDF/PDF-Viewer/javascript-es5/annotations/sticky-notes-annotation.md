---
layout: post
title: Sticky notes in JavaScript PDF Viewer control | Syncfusion
description: Learn about sticky note annotations in the Syncfusion JavaScript PDF Viewer (Essential JS 2): add, edit, delete, and default settings.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Sticky notes in JavaScript PDF Viewer control

The PDF Viewer control provides options to add, edit, and delete sticky note annotations in the PDF document.

![StickyNotesAnnotation](../images/stickynotes_annotation.png)

## Add a sticky note annotation to the PDF document

Sticky note annotations can be added to the PDF document using the annotation toolbar.

* Click the **Comments** button in the PDF Viewer toolbar. The annotation toolbar appears below it.
* Click the position where the sticky note annotation should be added.
* The sticky note annotation is added at the clicked position.

  ![StickyNotesTool](../images/stickynotes_tool.png)

Annotation comments can be added using the comment panel.

* Select a sticky note annotation in the PDF document and right-click it.
* Select Comment from the context menu.
* Add comments, replies, and status using the comment panel.

![StickyNotesComment](../images/stickynotes_comment.png)

## Add a sticky note annotation to the PDF document programmatically

The PDF Viewer library allows adding a sticky note annotation programmatically using the [addAnnotation()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotation#addannotation) method.

Here is an example showing how to add a sticky note annotation programmatically using addAnnotation():

```html
<button id="stickyNote">Add sticky note annotation programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
  stickyNote.addEventListener('click', function () {
    if (pdfviewer) {
      pdfviewer.annotation.addAnnotation("StickyNotes", {
        offset: { x: 100, y: 200 },
        pageNumber: 1,
        isLock: false
      });
    }
  });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
  stickyNote.addEventListener('click', function () {
    if (pdfviewer) {
      pdfviewer.annotation.addAnnotation("StickyNotes", {
        offset: { x: 100, y: 200 },
        pageNumber: 1,
        isLock: false
      });
    }
  });
}

{% endhighlight %}
{% endtabs %}

## Edit an existing sticky note annotation programmatically

To modify an existing sticky note annotation programmatically, use the editAnnotation() method.

Here is an example of using editAnnotation():

```html
<button id="stickyNote">Edit sticky note annotation programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
  stickyNote.addEventListener('click', function () {
    if (pdfviewer) {
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].shapeAnnotationType === "sticky") {
          var width = pdfviewer.annotationCollection[i].bounds.width;
          var height = pdfviewer.annotationCollection[i].bounds.height;
          pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    }
  });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
  stickyNote.addEventListener('click', function () {
    if (pdfviewer) {
      for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].shapeAnnotationType === "sticky") {
          var width = pdfviewer.annotationCollection[i].bounds.width;
          var height = pdfviewer.annotationCollection[i].bounds.height;
          pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
          pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
      }
    }
  });
}

{% endhighlight %}
{% endtabs %}

## Edit the properties of sticky note annotations

### Editing opacity

Edit opacity using the range slider in the Edit Opacity tool.

![StickyNotesOpacity](../images/sticky_opacity.png)

### Editing comments

Comment text, replies, and status can be edited using the comment panel.

* Open the comment panel using the Comment Panel button in the annotation toolbar.

  ![StickyNotesComment](../images/commentPanel.png)

Modify or delete comments or replies, and change status using the menu options in the comment panel.

  ![StickyNotesEdit](../images/sticky_editbtn.png)

## Set default properties during control initialization

Default properties for sticky note annotations can be set before creating the control using StickyNotesSettings.

After changing default opacity using the Edit Opacity tool, the selected value is applied. The following example sets default sticky note annotation settings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                    stickyNotesSettings : {author: 'Syncfusion'}
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                    stickyNotesSettings : {author: 'Syncfusion'}
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

>API reference: For more information about stickyNotesSettings, see [stickyNotesSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#stickynotessettings)

## Disable sticky note annotations

The PDF Viewer control provides an option to disable sticky note annotations. The following example disables the feature.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                    enableStickyNotesAnnotation : false
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                    enableStickyNotesAnnotation : false
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

>API reference: For more information about enableStickyNotesAnnotation, see [enableStickyNotesAnnotation API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#enablestickynotesannotation)