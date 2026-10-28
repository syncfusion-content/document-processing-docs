---
layout: post
title: Callout Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, add, customize, and manage Callout annotations in the ASP.NET MVC PDF Viewer to place editable text boxes connected to a target point on a PDF page.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Callout Annotation in ASP.NET MVC PDF Viewer

Callout annotations let users place an editable text box on a PDF page and connect it to a target point with one or more callout leader lines. They combine the inline commenting experience of a Free Text annotation with a connector that visually points to the content being annotated, making them ideal for review notes, labels, and call-outs that reference specific areas of a document without altering the original content.

![Callout Annotation Overview](../images/ui-callout.png)

## Enable Callout Annotation in the Viewer

To enable Callout annotations, render the PDF Viewer with the required configuration.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:650px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib").Render()
</div>

{% endhighlight %}
{% endtabs %}

## Add Callout Annotation

### Add Callout Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select the **Callout Annotation** tool.

   ![Callout Annotation tool in the annotation toolbar](../images/ui-callout.png)

3. Click on the PDF page to place the text box.
4. Type the annotation text into the box.
5. Drag or resize the text box as needed.
6. Adjust the callout line position so the leader line points to the desired content on the page.

N> When Pan mode is active, choosing the Callout Annotation tool switches the viewer into the appropriate selection/edit workflow for a smoother experience.

### Enable Callout Annotation Mode

Programmatically switch to Callout Annotation mode.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<button id="set" onclick="enableCalloutMode()">Callout</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function enableCalloutMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Callout');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Callout Annotation Mode

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<button id="exit" onclick="exitCalloutMode()">Normal Mode</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function exitCalloutMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Callout Annotation Programmatically

The PDF Viewer library allows adding a Callout annotation programmatically using the [`addAnnotation`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#addannotation) method.

Here is an example of adding a Callout annotation programmatically using `addAnnotation()`:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<button id="set" onclick="addCalloutProgrammatically()">Add Callout programmatically</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function addCalloutProgrammatically() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation('Callout', {
            offset: { x: 200, y: 200 },
            pageNumber: 1,
            opacity: 1,
            borderColor: '#000000',
            borderWidth: 1,
            borderStyle: 'solid',
            author: 'Guest',
            calloutLines: [
                { x: 50, y: 50 },
                { x: 100, y: 100 },
                { x: 200, y: 250 }
            ],
            lineEndingStyle: 'Open'
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Key Callout Properties

- **offset**: Location of the Callout Annotation text box on the page, in page coordinates.
- **pageNumber**: The page on which the Callout Annotation is placed.
- **calloutLines**: An ordered array of `{ x, y }` points that define the path of the callout leader line, connecting the text box to the target area on the page. The first point starts near the text box and the last point anchors the line to the content being called out.
- **lineEndingStyle**: Style applied to the end of the callout leader line (for example, `Open`).

## Customize Callout Annotation Appearance

Customize the appearance of a Callout Annotation when adding it programmatically by passing values such as `borderColor`, `borderWidth`, `borderStyle`, `opacity`, `lineEndingStyle`, and `calloutLines` to [`addAnnotation`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#addannotation). These values control the leader line and text box rendered on the page.

To edit a callout after placing it, select the annotation and use the annotation toolbar to change its text formatting and appearance.

![Selected Callout Annotation with text formatting controls](../images/edit-callout.png)

Use the color controls to change the selected callout's color.

![Color control for a selected Callout Annotation](../images/edit-color-callout.png)

To change the leader line's arrowhead or line style, open its line properties.

![Callout line properties for arrowhead and line style](../images/line-properties-callout.png)

N> To tailor right‑click options, see [**Customize Context Menu**](../context-menu/custom-context-menu).

## Modify, Edit, Delete Callout Annotation

- **Move/Resize**: Drag the text box or use the resize handles.
- **Edit Text**: Click inside the box and type.
- **Adjust Leader Line**: Drag the endpoints of the callout line to point to the desired content.
- **Delete**: Use the toolbar or context menu options. For deletion workflows and API details, see [**Delete Annotation**](../delete-annotation).

N> Callout annotations do **not** modify the original PDF text; they overlay an editable text box connected by a leader line on top of the page content.

### Delete Callout Annotation

Delete Callout Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../delete-annotation).

## Callout Annotation Events

The PDF Viewer raises annotation life cycle events that can be used to detect when Callout annotations are added, modified, selected, or removed. See [Annotation Events](../annotation-event).

## Export and Import

Callout annotations can be exported or imported just like other annotations. For supported formats and steps, see [**Export and Import annotations**](../export-import/export-annotation).

N> [View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Annotations/Callout%20Annotation).

## See Also

- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)