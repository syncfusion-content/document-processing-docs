---
layout: post
title: Organize Pages Events in JavaScript PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the ES5 PDF viewer, including rotating, rearranging, inserting, deleting, and copying pages on mobile devices.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize Pages Events in JavaScript PDF Viewer

The PDF Viewer provides events to track and respond to actions within the page organizer, allowing for the customization of page manipulation features.

## pageOrganizerSaveAs

The `pageOrganizerSaveAs` event is triggered when a save action is performed in the page organizer.

-  Occurs when the **Save as** button in the page organizer toolbar is clicked after modifying the document structure.

The event arguments provide the necessary information about the save event:

- `fileName`: The name of the currently loaded PDF document.
- `downloadDocument`: A base64 string of the modified PDF document data.
- `cancel`: A boolean that, when set to `true`, prevents the default save action from proceeding.

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageOrganizerSaveAs: function (args) {
        console.log('File Name is ' + args.fileName);
        console.log('Document data ' + args.downloadDocument);
    }
});

pdfviewer.appendTo('#PdfViewer');
```

## pageOrganizerZoomChanged

The `pageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer is changed.

-  This event is fired when the user interacts with the zoom slider in the page organizer. The `showImageZoomingSlider` property in `pageOrganizerSettings` must be set to `true` for the slider to be visible.


Event arguments:

- `previousZoomValue`: The previous zoom value.
- `currentZoomValue`: The current zoom value.

```javascript
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    pageOrganizerZoomChanged: function (args) {
        console.log('Previous Zoom Value is ' + args.previousZoom);
        console.log('Current Zoom Value is ' + args.currentZoom);
    }
});

pdfviewer.pageOrganizerSettings = { showImageZoomingSlider: true };
pdfviewer.appendTo('#PdfViewer');
```

## Related event documentation

- Overall Viewer events: [Event](../event)
- Annotation events: [Annotation events](../annotations/annotation-event)
- Form designer events: [Form field events](../form-designer/form-field-events)
