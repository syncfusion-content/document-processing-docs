---
layout: post
title: Link Annotation in ASP.NET Core PDF Viewer | Syncfusion
description: Enable, add, customize, and manage link annotations in the ASP.NET Core PDF Viewer for both internal page navigation and external URLs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Link Annotation in ASP.NET Core PDF Viewer

This guide explains how to enable, add, customize, and manage link annotations in the Syncfusion ASP.NET Core PDF Viewer. Link annotations can navigate to another page in the same PDF or open an external URL in the browser.

![Link annotation overview](../../../react/images/link-annotation.png)

## Enable Link Annotation in the Viewer

To enable link annotations, inject the required services and render the viewer.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   hyperlinkOpenState="NewTab">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

> The `hyperlinkOpenState` property controls how external URLs open when the user clicks a link. Use `NewTab` to open a URL in a new browser tab or `NewWindow` to open it in a separate browser window.

## Add Link Annotation

### Add Link Using the Toolbar

1. Click the **Add Link** button from the annotation toolbar.
2. Choose whether the link points to a **URL** or a **Page**.
3. Enter the target URL or page number.
4. Set properties such as stroke color and thickness.
5. Click **Insert** to create the link annotation.

![Add Link dialog URL](../../../react/images/add-link.png)

![Add Link dialog Page](../../../react/images/page-link.png)

### Add Link Annotation Programmatically

Use the `addAnnotation()` API to create a link at a specific location.

#### Add Internal Page Link

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addInternalLink() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Link', {
    offset: { x: 200, y: 480 },
    pageNumber: 1,
    width: 150,
    height: 75,
    destinationPageIndex: 4,
    destinationLocation: { x: 100, y: 200 },
    zoomValue: 4,
    strokeColor: '#1433e3'
  });
}
</script>
{% endhighlight %}
{% endtabs %}

#### Add External URL Link

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addExternalLink() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Link', {
    offset: { x: 450, y: 480 },
    pageNumber: 1,
    width: 150,
    height: 75,
    url: 'https://www.syncfusion.com',
    strokeColor: '#FF0000'
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Customize Link Appearance

Use the `hyperlinkOpenState` property to control how external URLs open.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   hyperlinkOpenState="NewWindow">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Manage Link Annotations

### Edit Link Annotation in the UI

After a link annotation is inserted, the user can:

- Right-click the selected link annotation to open the context menu
- Choose **Select** and drag the rectangle to a new position
- Resize the link rectangle using the handles
- Right-click again and choose **Edit** to change the page or URL

![Resize link annotation](../../../react/images/resize-link.png)

![Edit Link Annotation Context Menu](../../../react/images/edit-link.png)

### Edit Link Annotation Programmatically

Use `editAnnotation()` to update an existing link annotation.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function editLinkAnnotation() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];

  for (var i = 0; i < viewer.annotationCollection.length; i++) {
    var linkAnnotation = viewer.annotationCollection[i];
    if (linkAnnotation.subject === 'Link') {
      linkAnnotation.strokeColor = '#1fcbd4';
      linkAnnotation.thickness = 2;
      linkAnnotation.bounds = { left: 100, top: 100, width: 100, height: 100 };
      linkAnnotation.url = 'https://www.google.com';
      linkAnnotation.destinationPageIndex = 3;
      linkAnnotation.destinationLocation = { x: 300, y: 300 };
      linkAnnotation.zoomValue = 1;
      viewer.annotation.editAnnotation(linkAnnotation);
      break;
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Delete Link Annotation

The PDF Viewer supports deleting link annotations through the UI and API.

![Delete link annotation](../../../react/images/delete-link.png)

#### Delete a link annotation by ID

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function deleteLinkById() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  var linkAnnotation = viewer.annotationCollection.find(function (item) { return item.subject === 'Link'; });

  if (linkAnnotation) {
    viewer.annotation.deleteAnnotationById(linkAnnotation.annotationId);
  }
}
</script>
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding an Individual Link

You can set the link properties directly when calling `addAnnotation('Link', ...)`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addMultipleLinks() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];

  viewer.annotation.addAnnotation('Link', {
    offset: { x: 100, y: 150 },
    pageNumber: 1,
    width: 180,
    height: 60,
    url: 'https://www.syncfusion.com',
    strokeColor: '#ff0000'
  });

  viewer.annotation.addAnnotation('Link', {
    offset: { x: 320, y: 180 },
    pageNumber: 1,
    width: 150,
    height: 60,
    destinationPageIndex: 2,
    destinationLocation: { x: 100, y: 200 },
    zoomValue: 2,
    strokeColor: '#1433e3'
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Link Annotation Events

The PDF Viewer raises annotation life cycle events that can be used to monitor when link annotations are added, modified, selected, or removed. See [Annotation Events](../annotation-event).

## See Also

- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Hyperlink Navigation](../../interactive-pdf-navigation/hyperlink)
- [Annotation Events](../annotation-event)
- [Export and Import Annotation](../export-import/export-annotation)
- [Delete Annotation](../delete-annotation)
