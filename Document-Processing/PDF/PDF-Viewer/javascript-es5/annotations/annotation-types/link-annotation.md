---
layout: post
title: Link Annotation in JavaScript (ES5) PDF Viewer | Syncfusion
description: Enable, add, customize, and manage link annotations in the JavaScript (ES5) PDF Viewer for internal navigation and external URLs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Link Annotation in JavaScript (ES5) PDF Viewer

This guide explains how to enable, add, customize, and manage link annotations in the Syncfusion JavaScript (ES5) PDF Viewer. Link annotations can navigate to another page in the same PDF or open an external URL in the browser.

![Link annotation overview](../../../react/images/link-annotation.png)

## Enable Link Annotation in the Viewer

Inject the required modules to enable link annotations and the annotation toolbar.

- [**Annotation**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#annotation)
- [**LinkAnnotation**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#linkannotation)
- [**Toolbar**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#toolbar)
- [**Magnification**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/magnification)
- [**Navigation**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/navigation)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
pdfviewer.hyperlinkOpenState = 'NewTab';
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.hyperlinkOpenState = 'NewTab';
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

> The `hyperlinkOpenState` property controls whether external URLs open in a new browser tab or a separate browser window.

## Add Link Annotation

### Add Link Using the Toolbar

1. Click the **Add Link** button from the annotation toolbar.
2. Choose the type as **URL** or **Page**.
3. Enter the target URL or page number.
4. Set the stroke color and thickness.
5. Click **Insert** to create the link annotation.

![Add Link dialog URL](../../../react/images/add-link.png)

![Add Link dialog Page](../../../react/images/page-link.png)

### Add Link Annotation Programmatically

Use the `addAnnotation()` method to create a link annotation at a specific location.

#### Add Internal Page Link

{% tabs %}
{% highlight js tabtitle="Standalone" %}
pdfviewer.annotation.addAnnotation('Link', {
    offset: { x: 200, y: 480 },
    pageNumber: 1,
    width: 150,
    height: 75,
    destinationPageIndex: 4,
    destinationLocation: { x: 100, y: 200 },
    zoomValue: 4,
    strokeColor: '#1433e3'
});
{% endhighlight %}
{% endtabs %}

This adds a link rectangle that navigates to page index 4 and zooms to the specified location when clicked.

#### Add External URL Link

{% tabs %}
{% highlight js tabtitle="Standalone" %}
pdfviewer.annotation.addAnnotation('Link', {
    offset: { x: 450, y: 480 },
    pageNumber: 1,
    width: 150,
    height: 75,
    url: 'https://www.syncfusion.com',
    strokeColor: '#FF0000'
});
{% endhighlight %}
{% endtabs %}

## Customize Link Appearance

The viewer property `hyperlinkOpenState` determines how external links open.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
pdfviewer.hyperlinkOpenState = 'NewWindow';
{% endhighlight %}
{% endtabs %}

## Manage Link Annotations

### Edit Link Annotation in the UI

After a link annotation is inserted, users can:

- Right-click the selected link annotation to open the context menu
- Choose **Select** and drag the rectangle to a new location
- Resize the annotation with the available handles
- Right-click again and choose **Edit** to update the page or URL

![Resize link annotation](../../../react/images/resize-link.png)

![Edit Link Annotation Context Menu](../../../react/images/edit-link.png)

### Edit Link Annotation Programmatically

Use `editAnnotation()` to update an existing link annotation.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
    if (pdfviewer.annotationCollection[i].subject === 'Link') {
        pdfviewer.annotationCollection[i].strokeColor = '#1fcbd4';
        pdfviewer.annotationCollection[i].thickness = 2;
        pdfviewer.annotationCollection[i].bounds = { left: 100, top: 100, width: 100, height: 100 };
        pdfviewer.annotationCollection[i].url = 'https://www.google.com';
        pdfviewer.annotationCollection[i].destinationPageIndex = 3;
        pdfviewer.annotationCollection[i].destinationLocation = { x: 300, y: 300 };
        pdfviewer.annotationCollection[i].zoomValue = 1;
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        break;
    }
}
{% endhighlight %}
{% endtabs %}

### Delete Link Annotation

The PDF Viewer supports deleting link annotations through both the UI and API.

![Delete link annotation](../../../react/images/delete-link.png)

#### Delete a link annotation by ID

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var linkAnnotation = pdfviewer.annotationCollection.find(function (item) { return item.subject === 'Link'; });

if (linkAnnotation) {
    pdfviewer.annotation.deleteAnnotationById(linkAnnotation.annotationId);
}
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding an Individual Link

You can pass the required settings directly while creating a link annotation.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
pdfviewer.annotation.addAnnotation('Link', {
    offset: { x: 100, y: 150 },
    pageNumber: 1,
    width: 180,
    height: 60,
    url: 'https://www.syncfusion.com',
    strokeColor: '#ff0000'
});

pdfviewer.annotation.addAnnotation('Link', {
    offset: { x: 320, y: 180 },
    pageNumber: 1,
    width: 150,
    height: 60,
    destinationPageIndex: 2,
    destinationLocation: { x: 100, y: 200 },
    zoomValue: 2,
    strokeColor: '#1433e3'
});
{% endhighlight %}
{% endtabs %}

## Link Annotation Events

The PDF Viewer raises annotation life cycle events that can be used to detect when link annotations are added, modified, selected, or removed. See [Annotation Events](../annotation-event).

## See Also

- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Hyperlink Navigation](../../interactive-pdf-navigation/hyperlink)
- [Annotation Events](../annotation-event)
- [Export and Import Annotation](../export-import/export-annotation)
- [Delete Annotation](../delete-annotation)
