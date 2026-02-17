---
layout: post
title: Free Text Annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Add and customize free text annotations in ASP.NET Core PDF Viewer. Complete control over font, size, color, alignment, borders, and opacity with programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Free Text Annotations in ASP.NET Core PDF Viewer

The PDF Viewer control provides comprehensive free text annotation capabilities for adding, editing, deleting, and customizing text annotations with full typographic and styling control.

## Add a free text annotation to the PDF document

Free text annotations can be added to PDF documents using the built-in annotation toolbar with simple click and type functionality.

### Step-by-step guide

**1. Enable annotation mode**
- Click the **Edit Annotation** button in the PDF Viewer toolbar
- The annotation toolbar appears below the main toolbar

**2. Select free text tool**
- Click the **Free Text Annotation** button in the annotation toolbar
- The cursor changes to text input mode

![Free text tool in the annotation toolbar](../images/freetext_tool.png)

**3. Place text box on document**
- Click on the PDF page where you want to add text
- A text box appears at the clicked location

**4. Enter text content**
- Type your text directly into the text box
- Use the formatting toolbar to adjust font, size, color, and alignment

N> When in pan mode and free text annotation is selected, the PDF Viewer automatically switches to text select mode for smooth interaction.

**Example: Enable free text annotation mode**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<!--Element to set free text annotation mode-->
<button id="set" onclick="addAnnot()">FreeText</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('FreeText');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<!--Element to set free text annotation mode-->
<button id="set" onclick="addAnnot()">FreeText</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('FreeText');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Add a free text annotation programmatically to the PDF document

The PDF Viewer library provides the [`addAnnotation()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#addannotation) API method for programmatic free text insertion, enabling dynamic form filling and batch annotation operations.

**Example: Add free text annotation programmatically**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnotation() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.addAnnotation("FreeText", {
            offset: { x: 100, y: 150 },
            fontSize: 16,
            fontFamily: "Helvetica",
            pageNumber: 1,
            width: 200,
            height: 40,
            isLock: false,
            textAlignment: 'Center',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'red',
            fillColor: 'blue',
            fontColor: 'white',
            defaultText: "Syncfusion"
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnotation() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.addAnnotation("FreeText", {
            offset: { x: 100, y: 150 },
            fontSize: 16,
            fontFamily: "Helvetica",
            pageNumber: 1,
            width: 200,
            height: 40,
            isLock: false,
            textAlignment: 'Center',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'red',
            fillColor: 'blue',
            fontColor: 'white',
            defaultText: "Syncfusion"
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Change the content of an existing free text annotation programmatically

Modify free text annotation properties including text content, position, formatting, and styling using the **editAnnotation()** API method.

**Example: Edit free text annotation content and properties**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="editAnnotation()">Edit annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function editAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Text Box") {
                var width = viewer.annotationCollection[i].bounds.width;
                var height = viewer.annotationCollection[i].bounds.height;
                viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
                viewer.annotationCollection[i].dynamicText = 'syncfusion';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="editAnnotation()">Edit annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function editAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Text Box") {
                var width = viewer.annotationCollection[i].bounds.width;
                var height = viewer.annotationCollection[i].bounds.height;
                viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
                viewer.annotationCollection[i].dynamicText = 'syncfusion';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

N> The current version of the PDF Viewer does not edit existing document text. New free text annotations can be added and modified within the document.

## Edit the properties of free text annotations

Free text annotations support comprehensive typography and styling options through the annotation toolbar. Select any free text annotation to access these editing tools.

### Text formatting tools

**1. Edit Font Family**
- Select from available fonts in the Font Family tool
- Changes apply to the selected free text

![Change font family](../images/fontfamily.png)

**2. Edit Font Size**

Choose font size from the Font Size tool

![Change font size](../images/fontsize.png)

**3. Edit Font Color**
- Use the color palette in the Font Color tool
- Click to select text color

![Change font color](../images/fontcolor.png)

### Text alignment

**4. Edit Text Alignment**

Select alignment from the Text Align tool

![Set text alignment](../images/textalign.png)

**5. Edit Text Styles**

Apply formatting from the Font Style tool

![Change text styles](../images/fontstyle.png)

### Free Text appearance tools

**6. Edit Fill Color**

Use the color palette in the Edit Color tool to edit the fill color.

![Change fill color](../images/fillcolor.png)

**7. Edit Stroke Color (Border)**
- Use the color palette in the Edit Stroke Color tool
- Select border color for the free text box outline

![Change stroke color](../images/fontstroke.png)

**8. Edit Thickness (Border Width)**

Use the range slider in the Edit Thickness tool.

![Change border thickness](../images/fontthickness.png)

**9. Edit Opacity**
- Use the range slider in the Edit Opacity tool
- Adjust from 0 (fully transparent) to 1 (fully opaque)

![Change opacity](../images/fontopacity.png)

## Set default properties during control initialization

Configure default free text annotation properties globally during PDF Viewer initialization using the **freeTextSettings** property. These defaults apply to all subsequently created free text annotations.

**Example: Configure default free text properties**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   freeTextSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings
            {FillColor="green", BorderColor="blue", FontColor="yellow"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   freeTextSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerFreeTextSettings
            {FillColor="green", BorderColor="blue", FontColor="yellow"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
