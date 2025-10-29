---
layout: post
title: Organize Pages Events in PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the PDF viewer, including rotating, rearranging, inserting, deleting, and copying pages on mobile devices.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Organize Pages Events in PDF Viewer

The PDF Viewer provides events to track and respond to actions within the page organizer, allowing for the customization of page manipulation features.

## pageOrganizerSaveAs

The `pageOrganizerSaveAs` event is triggered when a save action is performed in the page organizer.

-  Occurs when the **Save as** button in the page organizer toolbar is clicked after modifying the document structure.

The event arguments provide the necessary information about the save event:

- `fileName`: The name of the currently loaded PDF document.
- `downloadDocument`: A base64 string of the modified PDF document data.
- `cancel`: A boolean that, when set to `true`, prevents the default save action from proceeding.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageOrganizerSaveAs="pageOrganizerSaveAs">
    </ejs-pdfviewer>
</div>

<script>
    function pageOrganizerSaveAs(args) {
        console.log('File Name is' + args.fileName);
        console.log('Document data' + args.downloadDocument);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageOrganizerSaveAs="pageOrganizerSaveAs">
    </ejs-pdfviewer>
</div>

<script>
    function pageOrganizerSaveAs(args) {
        console.log('File Name is' + args.fileName);
        console.log('Document data' + args.downloadDocument);
    }
</script>

{% endhighlight %}
{% endtabs %}

## pageOrganizerZoomChanged

The `pageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer is changed.

-  This event is fired when the user interacts with the zoom slider in the page organizer. The `showImageZoomingSlider` property in `pageOrganizerSettings` must be set to `true` for the slider to be visible.


Event arguments:

- `previousZoomValue`: The previous zoom value.
- `currentZoomValue`: The current zoom value.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageOrganizerSettings="@(new {CanDelete= false, CanInsert= false, CanRotate= false, canCopy= false, canRearrange= false, canImport= false, imageZoom= 1, showImageZoomingSlider= true, imageZoomMin= 1, imageZoomMax= 5 })" 
                   pageOrganizerZoomChanged="pageOrganizerZoomChanged">
    </ejs-pdfviewer>
</div>

<script>
    function pageOrganizerZoomChanged(args) {
        console.log('Previous Zoom Value is' + args.previousZoom);
        console.log('Current Zoom Value is' + args.currentZoom);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   pageOrganizerSettings="@(new {CanDelete= false, CanInsert= false, CanRotate= false, canCopy= false, canRearrange= false, canImport= false, imageZoom= 1, showImageZoomingSlider= true, imageZoomMin= 1, imageZoomMax= 5 })" 
                   pageOrganizerZoomChanged="pageOrganizerZoomChanged">
    </ejs-pdfviewer>
</div>

<script>
    function pageOrganizerZoomChanged(args) {
        console.log('Previous Zoom Value is' + args.previousZoom);
        console.log('Current Zoom Value is' + args.currentZoom);
    }
</script>

{% endhighlight %}
{% endtabs %}

## Related event documentation

- Overall Viewer events: [Event](../event)
- Annotation events: [Annotation events](../annotations/annotation-event)
- Form designer events: [Form field events](../form-designer/form-field-events)
