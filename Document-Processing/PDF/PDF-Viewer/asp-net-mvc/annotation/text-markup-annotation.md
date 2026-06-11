---
layout: post
title: Text markup annotation in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn to add, edit, delete, and customize text markup annotations like highlight, underline, and squiggly in Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Text markup annotation in ASP.NET MVC PDF Viewer control

The PDF Viewer provides options to add, edit, and delete text markup annotations, including Highlight, Underline, Strikethrough, and Squiggly.

![Text markup annotations overview](../images/text_markup_annotation.png)

## Highlight text

There are two ways to highlight text:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Highlight** in the context menu.

![Highlight from context menu](../images/highlight_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Highlight** to enable highlight mode.
* Select text to add the highlight annotation.
* Alternatively, select text first and then click **Highlight**.

![Highlight button](../images/highlight_button.PNG)

When pan mode is active and a text markup mode is entered, the PDF Viewer switches to text selection mode to enable selection.

Refer to the following code sample to switch to highlight mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Highlight</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Highlight');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Highlight</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Highlight');
        }
    </script>

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from highlight mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Highlight</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Highlight');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Highlight</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Highlight');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% endtabs %}

## Highlight text programmatically

Programmatically add highlights using the **addAnnotation()** method.

Here is an example showing how to add highlights programmatically using addAnnotation():

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Highlight", {
      bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
      pageNumber: 1
    });
  }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Highlight", {
      bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
      pageNumber: 1
    });
  }
</script>

{% endhighlight %}
{% endtabs %}

## Underline text

There are two ways to underline text:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Underline** in the context menu.

![Underline from context menu](../images/underline_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Underline** to enable underline mode.
* Select text to add the underline annotation.
* Alternatively, select text first and then click **Underline**.

![Underline button](../images/underline_button.png)

In the pan mode, if the underline mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for underlining the text.

Refer to the following code sample to switch to underline mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Underline</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Underline');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Underline</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Underline');
        }
    </script>

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from underline mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Underline</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Underline');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Underline</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Underline');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% endtabs %}

## Underline text programmatically

Programmatically add underlines using the **addAnnotation()** method.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Underline", {
      bounds: [{ x: 250, y: 148, width: 345, height: 14 }],
      pageNumber: 2
    })
  }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Underline", {
      bounds: [{ x: 250, y: 148, width: 345, height: 14 }],
      pageNumber: 2
    })
  }
</script>

{% endhighlight %}
{% endtabs %}

## Strikethrough text

There are two ways to strikethrough text:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Strikethrough** in the context menu.

![Strikethrough from context menu](../images/strikethrough_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Strikethrough** to enable strikethrough mode.
* Select text to add the strikethrough annotation.
* Alternatively, select text first and then click **Strikethrough**.

![Strikethrough button](../images/strikethrough_button.png)

In the pan mode, if the strikethrough mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for striking through the text.

Refer to the following code sample to switch to strikethrough mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Strikethrough</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Strikethrough');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}


    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Strikethrough</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Strikethrough');
        }
    </script>

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from strikethrough mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Strikethrough</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Strikethrough');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Strikethrough</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Strikethrough');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% endtabs %}

## Strikethrough text programmatically

Programmatically add strikethrough using the **addAnnotation()** method.

Here is an example showing how to add strikethrough programmatically using addAnnotation():

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Strikethrough", {
      bounds: [{ x: 250, y: 144, width: 345, height: 14 }],
      pageNumber: 2
    });
  }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Strikethrough", {
      bounds: [{ x: 250, y: 144, width: 345, height: 14 }],
      pageNumber: 2
    });
  }
</script>

{% endhighlight %}
{% endtabs %}

## Add squiggly to text

There are two ways to add squiggly to text:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Squiggly** in the context menu.

![Squiggly from context menu](../images/squiggly_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Squiggly** to enable squiggly mode.
* Select text to add the squiggly annotation.
* Alternatively, select text first and then click **Squiggly**.

![Squiggly button](../images/squiggly_button.png)

In the pan mode, if the squiggly mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for adding squiggly to the text.

Refer to the following code sample to switch to squiggly mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}


    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Squiggly</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Squiggly');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}


    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Squiggly</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Squiggly');
        }
    </script>

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from squiggly mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Squiggly</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Squiggly');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

    <!--Element to set text markup annotation mode-->
    <button id="set" onclick="addAnnot()">Squiggly</button>
    <!--Element to set normal mode-->
    <button id="setNone" onclick="setNone()">Normal Mode</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
    <script>
        function addAnnot() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('Squiggly');
        }

        function setNone() {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            pdfViewer.annotation.setAnnotationMode('None');
        }
    </script>

{% endhighlight %}
{% endtabs %}

## Add squiggly to text programmatically

Programmatically add squiggly using the **addAnnotation()** method.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Squiggly", {
      bounds: [{ x: 250, y: 144, width: 345, height: 14 }],
      pageNumber: 2
    });
  }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("Squiggly", {
      bounds: [{ x: 250, y: 144, width: 345, height: 14 }],
      pageNumber: 2
    });
  }
</script>

{% endhighlight %}
{% endtabs %}

## Delete a text markup annotation

The selected annotation can be deleted in the following ways:

1. Using the Delete key
    * Select the annotation to delete.
    * Press the Delete key. The selected annotation is removed.

2. Using the annotation toolbar
    * Select the annotation.
    * Click the **Delete Annotation** button in the annotation toolbar. The selected annotation is removed.

![Delete annotation](../images/delete_button.png)

## Edit text markup annotation properties

The color and the opacity of the text markup annotation can be edited using the Edit Color and Edit Opacity tools in the annotation toolbar.

### Edit color

Use the color palette in the Edit Color tool to change the annotation color.

![Edit color](../images/edit_color.png)

### Edit opacity

Use the range slider in the Edit Opacity tool to change annotation opacity.

![Edit opacity](../images/edit_opacity.png)

## Set default properties during control initialization

Set default properties before creating the control using highlightSettings, underlineSettings, strikethroughSettings, and squigglySettings.

N> After editing the default color and opacity using the Edit Color and Edit Opacity tools, the values update to the selected settings.

Refer to the following code sample to set the default annotation settings.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").HighlightSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerHighlightSettings{Author = "Guest User", Color = "#ffff00", Opacity = 0.9 }).UnderlineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerUnderlineSettings{ Author = "Guest User", Color = "#00ffff", Opacity = 0.9 }).StrikethroughSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStrikethroughSettings{ Author = "Guest User", Color = "#ff00ff", Opacity = 0.9, }).SquigglySettings(new Syncfusion.EJ2.PdfViewer.PdfViewerSquigglySettings{ Author = "Guest User", Color = "#0000ff", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").HighlightSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerHighlightSettings{Author = "Guest User", Color = "#ffff00", Opacity = 0.9 }).UnderlineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerUnderlineSettings{ Author = "Guest User", Color = "#00ffff", Opacity = 0.9 }).StrikethroughSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStrikethroughSettings{ Author = "Guest User", Color = "#ff00ff", Opacity = 0.9, }).SquigglySettings(new Syncfusion.EJ2.PdfViewer.PdfViewerSquigglySettings{ Author = "Guest User", Color = "#0000ff", Opacity = 0.9 })Render()
</div>

{% endhighlight %}
{% endtabs %}

## Perform undo and redo

The PDF Viewer supports undo and redo for changes. For text markup annotations, undo and redo are provided for:

* Inclusion of the text markup annotations.
* Deletion of the text markup annotations.
* Change of either color or opacity of the text markup annotations.

Undo and redo actions can be performed in the following ways:

1. Using keyboard shortcuts:
    After performing a text markup annotation action, press Ctrl + Z to undo and Ctrl + Y to redo.
2. Using the toolbar:
    Use the **Undo** and **Redo** tools in the toolbar.

Refer to the following code sample to call undo and redo actions from the client side.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<!--Element to call undo-->
<button id="undo" onclick="Undo()">Undo</button>
<!--Element to call redo-->
<button id="redo" onclick="Redo()">Redo</button>
<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function Undo() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.undo();
    }

    function Redo() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.redo();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<!--Element to call undo-->
<button id="undo" onclick="Undo()">Undo</button>
<!--Element to call redo-->
<button id="redo" onclick="Redo()">Redo</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function Undo() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.undo();
    }

    function Redo() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.redo();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Save text markup annotations

Click the download tool in the toolbar to save text markup annotations to the PDF document. The original document is not modified.

## Print text markup annotations

Click the print tool in the toolbar to print the PDF document with text markup annotations. The original document is not modified.

## Disable text markup annotation

Disable text markup annotations using the enableTextMarkupAnnotation property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableTextMarkupAnnotation(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).EnableTextMarkupAnnotation(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}
