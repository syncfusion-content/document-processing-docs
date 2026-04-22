---
layout: post
title: Squiggly Annotation (Text Markup) in ASP.NET Core PDF Viewer
| Syncfusion
description: Learn how to enable, apply, customize, and manage Squiggly annotations in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Squiggly Annotation (Text Markup) in ASP.NET Core PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Squiggly* text markup annotations in the Syncfusion **ASP.NET Core PDF Viewer**.
You can add squiggly underlines from the toolbar or context menu, programmatically invoke squiggly mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Squiggly in the Viewer
In the ASP.NET Core PDF Viewer, annotation modules such as Squiggly annotation are enabled by default.
This minimal setup enables UI interactions like selection and squiggly markup.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
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
{% highlight cshtml tabtitle="Standalone" %}
<script>
function enableSquiggly() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('Squiggly');
}
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Squiggly Mode
Switch back to normal mode using:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function disableSquigglyMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
</script>
{% endhighlight %}
{% endtabs %}

### Add Squiggly Programmatically
Use [`addAnnotation()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) to insert a squiggly at a specific location.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addSquiggly() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
    pageNumber: 1
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Customize Squiggly Appearance
Configure default squiggly settings such as **color**, **opacity**, and **author** using [`squigglySettings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SquigglySettings).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.squigglySettings = {
    author: 'Guest User',
    subject: 'Corrections',
    color: '#00ff00',
    opacity: 0.9
  };
}
</script>
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
{% highlight cshtml tabtitle="Standalone" %}
<script>
function editSquigglyProgrammatically() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  var ann = viewer.annotationCollection || [];
  for (var i=0;i<ann.length;i++){
    var annot = ann[i];
    if (annot.textMarkupAnnotationType === 'Squiggly') {
      annot.color = '#ff0000';
      annot.opacity = 0.8;
      viewer.annotation.editAnnotation(annot);
      break;
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Delete Squiggly
The PDF Viewer supports deleting existing annotations through both the UI and API.
For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../remove-annotations)

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to squiggly annotations.
It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation‑related notes within the PDF Viewer.

## Set properties while adding Individual Annotation
Set properties for individual squiggly annotations at the time of creation using the [`addAnnotation`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) API.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addMultipleSquigglies() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  // Squiggly 1
  viewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
    pageNumber: 1,
    author: 'User 1',
    color: '#ffff00',
    opacity: 0.9
  });
  // Squiggly 2
  viewer.annotation.addAnnotation('Squiggly', {
    bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
    pageNumber: 1,
    author: 'User 2',
    color: '#ff1010',
    opacity: 0.9
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Disable TextMarkup Annotation
Disable text markup annotations (including squiggly) using the `enableTextMarkupAnnotation` property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   enableTextMarkupAnnotation="false"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
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
