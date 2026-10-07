---
layout: post
title: Free Text Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, add, customize, and manage Free Text annotations in the ASP.NET MVC PDF Viewer for inline notes and labels on a PDF page.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Free Text Annotation in ASP.NET MVC PDF Viewer

Free Text annotations let users place editable text boxes on a PDF page to add comments, labels, or notes without changing the original document content.

## Enable Free Text in the Viewer

To enable Free Text annotations, inject the **PdfViewer** with the **Annotation** module.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}

## Add Free Text

### Add Free Text Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Click **Free Text** to enable Free Text mode.
3. Click on the page to place the text box and start typing.

![Free Text tool](../../images/freetext_tool.png)

N> When Pan mode is active, choosing Free Text switches the viewer into the appropriate selection/edit workflow for a smoother experience.

### Enable Free Text Mode

Programmatically switch to Free Text mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableFreeText" onclick="enableFreeTextMode()">Enable Free Text Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableFreeTextMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('FreeText');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableFreeText" onclick="enableFreeTextMode()">Enable Free Text Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableFreeTextMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('FreeText');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Free Text Mode

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitFreeText" onclick="exitFreeTextMode()">Exit Free Text Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitFreeTextMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitFreeText" onclick="exitFreeTextMode()">Exit Free Text Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitFreeTextMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Free Text Programmatically

Use the **addAnnotation** method to create a text box at a given location with desired styles.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addFreeText" onclick="addFreeText()">Add Free Text Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addFreeText() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("FreeText", {
            offset: { x: 100, y: 150 },
            pageNumber: 1,
            width: 220,
            height: 48,
            defaultText: 'Syncfusion',
            fontFamily: 'Helvetica',
            fontSize: 16,
            fontColor: '#ffffff',
            textAlignment: 'Center',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#ff0000',
            fillColor: '#0000ff',
            isLock: false
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addFreeText" onclick="addFreeText()">Add Free Text Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addFreeText() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("FreeText", {
            offset: { x: 100, y: 150 },
            pageNumber: 1,
            width: 220,
            height: 48,
            defaultText: 'Syncfusion',
            fontFamily: 'Helvetica',
            fontSize: 16,
            fontColor: '#ffffff',
            textAlignment: 'Center',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#ff0000',
            fillColor: '#0000ff',
            isLock: false
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Free Text Appearance

Configure default properties using the **freeTextSettings** property (for example, default **fill color**, **border color**, **font color**, **opacity**, and **auto-fit**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").FreeTextSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings { FillColor = "green", BorderColor = "blue", FontColor = "yellow", Opacity = 0.3, EnableAutoFit = true }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").FreeTextSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings { FillColor = "green", BorderColor = "blue", FontColor = "yellow", Opacity = 0.3, EnableAutoFit = true }).Render()
</div>

{% endhighlight %}
{% endtabs %}

N> To tailor right-click options, see [**Customize Context Menu**](../../context-menu/custom-context-menu).

## Modify, Edit, Delete Free Text

- **Move/Resize**: Drag the box or use the resize handles.
- **Edit Text**: Click inside the box and type.
- **Delete**: Use the toolbar or context menu options. For deletion workflows and API details, see [**Delete Annotation**](../delete-annotation).

### Edit Free Text

#### Edit Free Text (UI)

Use the annotation toolbar to configure font family, size, color, alignment, styles, fill color, stroke color, border thickness, and opacity.

- Edit the **font family** using the Font Family tool.  
![Font family](../../images/fontfamily.png)

- Edit the **font size** using the Font Size tool.  
![Font size](../../images/fontsize.png)

- Edit the **font color** using the Font Color tool.  
![Font color](../../images/fontcolor.png)

- Edit the **text alignment** using the Text Alignment tool.  
![Text alignment](../../images/textalign.png)

- Edit the **font styles** (bold, italic, underline) using the Font Style tool.  
![Text styles](../../images/fontstyle.png)

- Edit the **fill color** using the Edit Color tool.  
![Fill color](../../images/fillcolor.png)

- Edit the **stroke color** using the color palette in the Edit Stroke Color tool.  
![Stroke color](../../images/fontstroke.png)

- Edit the **border thickness** using the Edit Thickness tool.  
![Thickness](../../images/fontthickness.png)

- Edit the **opacity** using the Edit Opacity tool.  
![Opacity](../../images/fontopacity.png)

#### Edit Free Text Programmatically

Update bounds or text and call **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editFreeText" onclick="editFreeText()">Edit Free Text Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editFreeText() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Text Box') {
                var width = viewer.annotationCollection[i].bounds.width;
                var height = viewer.annotationCollection[i].bounds.height;
                viewer.annotationCollection[i].bounds = { x: 120, y: 120, width: width, height: height };
                viewer.annotationCollection[i].dynamicText = 'Syncfusion (updated)';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editFreeText" onclick="editFreeText()">Edit Free Text Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editFreeText() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Text Box') {
                var width = viewer.annotationCollection[i].bounds.width;
                var height = viewer.annotationCollection[i].bounds.height;
                viewer.annotationCollection[i].bounds = { x: 120, y: 120, width: width, height: height };
                viewer.annotationCollection[i].dynamicText = 'Syncfusion (updated)';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

N> Free Text annotations do **not** modify the original PDF text; they overlay editable text boxes on top of the page content.

### Delete Free Text

Delete Free Text via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../delete-annotation).

## Set Default Properties During Initialization
Apply defaults for new text boxes using the **freeTextSettings** property. You can also enable **Auto-fit** so the box expands with content.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").FreeTextSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings { FillColor = "green", BorderColor = "blue", FontColor = "yellow", EnableAutoFit = true }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").FreeTextSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings { FillColor = "green", BorderColor = "blue", FontColor = "yellow", EnableAutoFit = true }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Free Text Annotation Events

Listen to add/modify/select/remove events for Free Text and handle them as needed. For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import

Free Text annotations can be exported or imported just like other annotations. For supported formats and steps, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
