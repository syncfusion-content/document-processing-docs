---
layout: post
title: Link Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage link annotations in the ASP.NET MVC PDF Viewer for both internal page navigation and external URLs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Link Annotation in ASP.NET MVC PDF Viewer

This guide explains how to **enable**, **add**, **customize**, and **manage** link annotations in the Syncfusion **ASP.NET MVC PDF Viewer**. You can use link annotations to navigate to another page in the same PDF or open an external URL in the browser. Add links from the annotation toolbar, insert them programmatically, adjust the rectangle bounds, and edit or delete them through the UI or API.

![Link annotation overview](../../images/link.png)

## Enable Link Annotation in the Viewer

To enable Link annotations, inject the **PdfViewer** with the **Annotation** and **LinkAnnotation** modules.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableLinkAnnotation(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).EnableLinkAnnotation(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}

N> The **hyperlinkOpenState** property controls how external URLs open when the user clicks a link. Supported values include `NewTab` and `NewWindow`. Use `NewTab` to open the URL in a new browser tab, or `NewWindow` to open it in a separate browser window.

## Add Link Annotation

### Add Link Using the Toolbar

1. Click the **Add Link** button from the annotation toolbar.
2. Choose whether the link points to a **URL** or a **Page**.
3. Enter the target URL or page number.
4. Set the properties such as **stroke color** and **stroke thickness**.
5. Click **Insert** to create the link annotation.

![Add Link dialog URL](../../images/link.png)

![Add Link dialog Page](../../images/link.png)

The inserted link is displayed as a rectangular annotation region. Users can drag and resize it to position it over the desired target text or area in the PDF.

When clicked, the viewer navigates to the configured page or opens the specified external URL. You can also reposition or resize the annotation after insertion.

### Add Link Annotation Programmatically

Use **addAnnotation()** to create a link annotation at a specific location.

#### Add Internal Page Link

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addInternalLink" onclick="addInternalLink()">Add Internal Page Link programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addInternalLink() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Link", {
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
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addInternalLink" onclick="addInternalLink()">Add Internal Page Link programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addInternalLink() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Link", {
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

This adds a link rectangle that navigates to page index 4 and zooms to the specified location when clicked.

#### Add External URL Link

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addExternalLink" onclick="addExternalLink()">Add External URL Link programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addExternalLink() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Link", {
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
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addExternalLink" onclick="addExternalLink()">Add External URL Link programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addExternalLink() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Link", {
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

This adds a link rectangle that opens the specified external URL in the browser when clicked.

## Customize Link Appearance

Link annotations can be customized with optional visual and navigation properties, such as stroke color, thickness, size, destination page, or URL, depending on the type of link you are creating. The `hyperlinkOpenState` property controls how external URLs open: `NewTab` opens the page in a new tab, and `NewWindow` opens it in a separate browser window.

The following example configures the viewer to open external links in a separate browser window.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").HyperlinkOpenState(Syncfusion.EJ2.PdfViewer.HyperlinkOpenState.NewWindow).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).HyperlinkOpenState(Syncfusion.EJ2.PdfViewer.HyperlinkOpenState.NewWindow).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Link Annotations

### Edit Link Annotation in the UI

After a link annotation is inserted, the user can:

- Right-click the selected link annotation to open the context menu
- Choose **Select** option from the context menu
- Drag the rectangle to a new position
- Resize the rectangle using resize handles

![Resize link annotation](../../images/link.png)

- Right-click the selected link annotation to open the context menu
- Choose **Edit** option from the context menu
- Modify the stroke color and thickness in the property panel
- Edit the target page or URL from the dialog box

![Edit Link Annotation Context Menu](../../images/link.png)

This allows the link to be visually aligned with the PDF content without changing the document itself.

### Edit Link Annotation Programmatically

Use **editAnnotation()** to update an existing link annotation. The following example updates the selected link annotation by changing its color, size, and navigation target.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editLink" onclick="editLink()">Edit Link Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editLink() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Link') {
                viewer.annotationCollection[i].strokeColor = '#1fcbd4';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].bounds = { left: 100, top: 100, width: 100, height: 100 };
                viewer.annotationCollection[i].url = 'https://www.google.com';
                viewer.annotationCollection[i].destinationPageIndex = 3;
                viewer.annotationCollection[i].destinationLocation = { x: 300, y: 300 };
                viewer.annotationCollection[i].zoomValue = 1;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editLink" onclick="editLink()">Edit Link Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editLink() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Link') {
                viewer.annotationCollection[i].strokeColor = '#1fcbd4';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].bounds = { left: 100, top: 100, width: 100, height: 100 };
                viewer.annotationCollection[i].url = 'https://www.google.com';
                viewer.annotationCollection[i].destinationPageIndex = 3;
                viewer.annotationCollection[i].destinationLocation = { x: 300, y: 300 };
                viewer.annotationCollection[i].zoomValue = 1;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Link Annotation

The PDF Viewer supports deleting link annotations through both the UI and API.

![Delete link annotation](../../images/link.png)

#### Delete a link annotation by ID

The following example deletes only the first link annotation found in the collection and keeps all other annotations unchanged.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="deleteLinkById" onclick="deleteLinkById()">Delete Link Annotation by ID programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function deleteLinkById() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var linkAnnotation = null;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Link') {
                linkAnnotation = viewer.annotationCollection[i];
                break;
            }
        }

        if (linkAnnotation) {
            viewer.annotation.deleteAnnotationById(linkAnnotation.annotationId);
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="deleteLinkById" onclick="deleteLinkById()">Delete Link Annotation by ID programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function deleteLinkById() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var linkAnnotation = null;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Link') {
                linkAnnotation = viewer.annotationCollection[i];
                break;
            }
        }

        if (linkAnnotation) {
            viewer.annotation.deleteAnnotationById(linkAnnotation.annotationId);
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

## Set Properties While Adding an Individual Link

You can set link properties when creating the annotation directly by passing the required fields in the **addAnnotation('Link', ...)** call. The following example creates two different link annotations: one to an external URL and one to a destination page.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addMultipleLinks" onclick="addMultipleLinks()">Add multiple Link Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addMultipleLinks() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Link", {
            offset: { x: 100, y: 150 },
            pageNumber: 1,
            width: 180,
            height: 60,
            url: 'https://www.syncfusion.com',
            strokeColor: '#ff0000'
        });

        viewer.annotation.addAnnotation("Link", {
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
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addMultipleLinks" onclick="addMultipleLinks()">Add multiple Link Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addMultipleLinks() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Link", {
            offset: { x: 100, y: 150 },
            pageNumber: 1,
            width: 180,
            height: 60,
            url: 'https://www.syncfusion.com',
            strokeColor: '#ff0000'
        });

        viewer.annotation.addAnnotation("Link", {
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

The PDF viewer raises annotation life cycle events that can be used to monitor when link annotations are added, modified, selected, or removed. For the complete event list and event details, see [Annotation Events](../annotation-event).

## See Also

- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Hyperlink Navigation](../../interactive-pdf-navigation/hyperlink)
- [Annotation Events](../annotation-event)
- [Export and Import Annotation](../export-import/export-annotation)
- [Delete Annotation](../delete-annotation)
