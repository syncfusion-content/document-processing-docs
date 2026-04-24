---
layout: post
title: Text markup annotation in ASP.NET Core PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and customize text markup annotations like highlight, underline, and squiggly in Syncfusion ASP.NET Core PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Text markup annotation in ASP.NET Core PDF Viewer

The PDF Viewer provides options to add, edit, and delete text markup annotations, including Highlight, Underline, Strikethrough, and Squiggly.

![Text markup annotation toolbar and examples](../images/text_markup_annotation.png)

## Highlight text

Two ways to add highlights:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Highlight** in the context menu.

  ![Highlight using context menu](../images/highlight_context.png)

2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Highlight** to enable highlight mode.
* Select text to add the highlight annotation.
* Alternatively, select text first and then click **Highlight**.

  ![Highlight button in annotation toolbar](../images/highlight_button.png)

When pan mode is active, entering any text markup mode switches the PDF Viewer to text selection mode.

Refer to the following code snippet to switch to highlight mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="highlightMode()">Highlight</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function highlightMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Highlight');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="highlightMode()">Highlight</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function highlightMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Highlight');
    }
</script>

{% endhighlight %}
{% endtabs %}

Refer to the following code snippet to switch back to normal mode from highlight mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="highlightMode()">Highlight</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function highlightMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Highlight');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="highlightMode()">Highlight</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function highlightMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Highlight');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Highlight text programmatically

Programmatically add highlights using the [addAnnotation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) method.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
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

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

Two ways to add underlines:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Underline** in the context menu.

  ![Underline using context menu](../images/underline_context.png)

2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Underline** to enable underline mode.
* Select text to add the underline annotation.
* Alternatively, select text first and then click **Underline**.

  ![Underline button in annotation toolbar](../images/underline_button.png)

When pan mode is active, entering underline mode switches the PDF Viewer to text selection mode to enable text selection for underlining.

Refer to the following code snippet to switch to underline mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="underlineMode()">Underline</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function underlineMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Underline');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="underlineMode()">Underline</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function underlineMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Underline');
    }
</script>

{% endhighlight %}
{% endtabs %}

Refer to the following code snippet to switch back to normal mode from underline mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="underlineMode()">Underline</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function underlineMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Underline');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="underlineMode()">Underline</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function underlineMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Underline');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Underline text programmatically

Programmatically add underlines using the [addAnnotation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) method.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Underline", {
            bounds: [{ x: 250, y: 148, width: 345, height: 14 }],
            pageNumber: 2
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Underline", {
            bounds: [{ x: 250, y: 148, width: 345, height: 14 }],
            pageNumber: 2
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Strikethrough text

Two ways to add strikethroughs:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Strikethrough** in the context menu.

  ![Strikethrough using context menu](../images/strikethrough_context.png)

2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Strikethrough** to enable strikethrough mode.
* Select text to add the strikethrough annotation.
* Alternatively, select text first and then click **Strikethrough**.

  ![Strikethrough button in annotation toolbar](../images/strikethrough_button.png)

When pan mode is active, entering strikethrough mode switches the PDF Viewer to text selection mode to enable text selection for striking through.

Refer to the following code snippet to switch to strikethrough mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="strikethroughMode()">Strikethrough</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function strikethroughMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Strikethrough');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="strikethroughMode()">Strikethrough</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function strikethroughMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Strikethrough');
    }
</script>

{% endhighlight %}
{% endtabs %}

Refer to the following code snippet to switch back to normal mode from strikethrough mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="strikethroughMode()">Strikethrough</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function strikethroughMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Strikethrough');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="strikethroughMode()">Strikethrough</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function strikethroughMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Strikethrough');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Strikethrough text programmatically

Programmatically add strikethrough using the [addAnnotation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) method.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
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

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

Two ways to add squiggly annotations:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Select **Squiggly** in the context menu.

  ![Squiggly using context menu](../images/squiggly_context.png)

2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Squiggly** to enable squiggly mode.
* Select text to add the squiggly annotation.
* Alternatively, select text first and then click **Squiggly**.

  ![Squiggly button in annotation toolbar](../images/squiggly_button.png)

When pan mode is active, entering squiggly mode switches the PDF Viewer to text selection mode to enable text selection for adding squiggly annotations.

Refer to the following code snippet to switch to squiggly mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="squigglyMode()">Squiggly</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function squigglyMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Squiggly');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="squigglyMode()">Squiggly</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function squigglyMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Squiggly');
    }
</script>

{% endhighlight %}
{% endtabs %}

Refer to the following code snippet to switch back to normal mode from squiggly mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="squigglyMode()">Squiggly</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function squigglyMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Squiggly');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="squigglyMode()">Squiggly</button>
<button onclick="normalMode()">Normal Mode</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function squigglyMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Squiggly');
    }
    function normalMode() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Add squiggly to text programmatically

Programmatically add squiggly using the [addAnnotation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) method.

Example:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
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

<button onclick="addAnnotation()">Add Annotation</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

## Deleting a text markup annotation

The selected annotation can be deleted in the following ways:

1. Using the Delete/Backspace key
  * Select the annotation.
  * Press Delete (or Backspace). The selected annotation is removed.

2. Using the annotation toolbar
  * Select the annotation.
  * Click **Delete Annotation** in the annotation toolbar. The selected annotation is removed.

   ![Delete annotation button in toolbar](../images/delete_button.png)

## Edit text markup annotation properties

The color and the opacity of the text markup annotation can be edited using the Edit Color tool and the Edit Opacity tool in the annotation toolbar.

### Edit color

Use the color palette in the Edit Color tool to change the annotation color.

![Edit color palette for annotations](../images/edit_color.png)

### Edit opacity

Use the range slider in the Edit Opacity tool to change annotation opacity.

![Edit opacity slider for annotations](../images/edit_opacity.png)

## Set default properties during control initialization

Set default properties before creating the control using `highlightSettings`, `underlineSettings`, `strikethroughSettings`, and `squigglySettings`.

> After editing default color and opacity using the Edit Color and Edit Opacity tools, the values update to the selected settings.

Refer to the following code snippet to set the default annotation settings.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    window.onload = function() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (viewer) {
            viewer.highlightSettings = { author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9 };
            viewer.underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 };
            viewer.strikethroughSettings = { author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9 };
            viewer.squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 };
        }
    };
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    window.onload = function() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (viewer) {
            viewer.highlightSettings = { author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9 };
            viewer.underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9 };
            viewer.strikethroughSettings = { author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9 };
            viewer.squigglySettings = { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9 };
        }
    };
</script>

{% endhighlight %}
{% endtabs %}

## Perform undo and redo

The PDF Viewer supports undo and redo for changes. For text markup annotations, undo and redo are provided for:

* Inclusion of the text markup annotations.
* Deletion of the text markup annotations.
* Change of either color or opacity of the text markup annotations.

Undo and redo actions can be performed in the following ways:

1.Using keyboard shortcuts:
    After performing a text markup annotation action, press Ctrl+Z to undo and Ctrl+Y to redo.
2.Using the toolbar:
    Use the **Undo** and **Redo** tools in the toolbar.

Refer to the following code snippet to call undo and redo actions from the client side.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="undo()">Undo</button>
<button onclick="redo()">Redo</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
    function undo() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.undo();
    }
    function redo() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.redo();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="undo()">Undo</button>
<button onclick="redo()">Redo</button>
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function undo() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.undo();
    }
    function redo() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.redo();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Save text markup annotations

Click the download tool in the toolbar to save text markup annotations to the PDF document. The original document is not modified.

## Print text markup annotations

Click the print tool in the toolbar to print the PDF document with text markup annotations. The original document is not modified.

## Disable text markup annotation

Disable text markup annotations using the `enableTextMarkupAnnotation` property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" enableTextMarkupAnnotation="false" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer" style="height:640px" enableTextMarkupAnnotation="false" serviceUrl="/api/PdfViewer" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](../../pdfviewer/toolbar)
* [Feature modules](../../pdfviewer/feature-module)