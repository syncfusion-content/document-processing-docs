---
title: Annotations Events in ASP.NET Core Pdfviewer control | Syncfusion
description: Learn here all about Annotations Events in Syncfusion ASP.NET Core Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Annotations Events in ASP.NET Core Pdf viewer control

The PDF Viewer component triggers various events based on user interactions and changes in the component's state. These events can be used to perform actions when a specific event occurs. This section describes the events available in the PDF Viewer component.

| Event                                                              | Description                                                                        |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`annotationAdd`](#annotationadd)                                  | Triggers when an annotation is added to a page in the PDF document.                |
| [`annotationDoubleClick`](#annotationdoubleclick)                  | Triggers when an annotation is double-clicked.                                     |
| [`annotationMouseLeave`](#annotationmouseleave)                    | Triggers when the mouse pointer moves away from an annotation object.              |
| [`annotationMouseover`](#annotationmouseover)                      | Triggers when the mouse pointer moves over an annotation object.                   |
| [`annotationMove`](#annotationmove)                                | Triggers when an annotation is moved on a page in the PDF document.                |
| [`annotationMoving`](#annotationmoving)                            | Triggers while an annotation is being moved.                                       |
| [`annotationPropertiesChange`](#annotationpropertieschange)        | Triggers when the properties of an annotation are modified on a PDF page.          |
| [`annotationRemove`](#annotationremove)                            | Triggers when an annotation is removed from a page in the PDF document.            |
| [`annotationResize`](#annotationresize)                            | Triggers when an annotation is resized on a page in the PDF document.              |
| [`annotationSelect`](#annotationselect)                            | Triggers when an annotation is selected on a page in the PDF document.             |
| [`annotationUnSelect`](#annotationunselect)                        | Triggers when an annotation is unselected on a page in the PDF document.           |
| [`beforeAddFreeText`](#beforeaddfreetext)                          | Triggers before adding a text in the freeText annotation.                          |
| [`addSignature`](#addsignature)                                    | Triggers when a signature is added to a page in the PDF document.                  |
| [`removeSignature`](#removesignature)                              | Triggers when a signature is removed from a page in the PDF document.              |
| [`resizeSignature`](#resizesignature)                              | Triggers when a signature is resized on a page in the PDF document.                |
| [`signaturePropertiesChange`](#signaturepropertieschange)          | Triggers when the properties of a signature are changed on a page in the PDF document. |
| [`signatureSelect`](#signatureselect)                              | Triggers when a signature is selected on a page in the PDF document.               |
| [`signatureUnselect`](#signatureunselect)                          | Triggers when a signature is unselected on a page in the PDF document.             |


### annotationAdd

The [annotationAdd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationAdd) event is triggered when an annotation is added to a PDF document's page.

#### Event Arguments

For event data, see [AnnotationAddEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationAddEventArgs/). It provides properties such as `annotationId`, `pageNumber`, `annotationType`, and `bounds`.

The following example illustrates how to handle the `annotationAdd` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationAdd="annotationAdded">
    </ejs-pdfviewer>
</div>

<script>
    function annotationAdded(args) {
        console.log('Annotation added with ID: ' + args.annotationId);
        console.log('Annotation type: ' + args.annotationType);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationAdd="annotationAdded">
    </ejs-pdfviewer>
</div>

<script>
    function annotationAdded(args) {
        console.log('Annotation added with ID: ' + args.annotationId);
        console.log('Annotation type: ' + args.annotationType);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationDoubleClick

The [annotationDoubleClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationDoubleClick) event is triggered when an annotation is double-clicked.

#### Event Arguments

For event data, see [AnnotationDoubleClickEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationDoubleClickEventArgs/).

The following example illustrates how to handle the `annotationDoubleClick` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationDoubleClick="annotationDoubleClicked">
    </ejs-pdfviewer>
</div>

<script>
    function annotationDoubleClicked(args) {
        console.log('Annotation double-clicked on page: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationDoubleClick="annotationDoubleClicked">
    </ejs-pdfviewer>
</div>

<script>
    function annotationDoubleClicked(args) {
        console.log('Annotation double-clicked on page: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMouseLeave

The [annotationMouseLeave](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationMouseLeave) event is triggered when the user's mouse pointer moves away from an annotation object.

#### Event Arguments

For event data, see [AnnotationMouseLeaveEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationMouseLeaveEventArgs/).

The following example illustrates how to handle the `annotationMouseLeave` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMouseLeave="annotationMouseLeaved">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMouseLeaved(args) {
        console.log('Annotation mouse leave event is triggered for annotation with ID: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMouseLeave="annotationMouseLeaved">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMouseLeaved(args) {
        console.log('Annotation mouse leave event is triggered for annotation with ID: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMouseover

The [annotationMouseover](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationMouseover) event is triggered when the mouse is moved over an annotation object.

#### Event Arguments

For event data, see [AnnotationMouseOverEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationMouseOverEventArgs/).

The following example illustrates how to handle the `annotationMouseover` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMouseover="annotationMouseovered">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMouseovered(args) {
        console.log('Annotation mouse over event is triggered for annotation with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMouseover="annotationMouseovered">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMouseovered(args) {
        console.log('Annotation mouse over event is triggered for annotation with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMove

The [annotationMove](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationMove) event is triggered when an annotation is moved over the page of the PDF document.

#### Event Arguments

For event data, see [AnnotationMoveEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationMoveEventArgs/).

The following example illustrates how to handle the `annotationMove` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMove="annotationMoved">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMoved(args) {
        console.log('Annotation moved. ID: ' + args.annotationId + ' on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMove="annotationMoved">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMoved(args) {
        console.log('Annotation moved. ID: ' + args.annotationId + ' on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationMoving

The [annotationMoving](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationMoving) event is triggered while an annotation is being moved.

#### Event Arguments

For event data, see [AnnotationMovingEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationMovingEventArgs/).

The following example illustrates how to handle the `annotationMoving` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMoving="annotationMoving">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMoving(args) {
        console.log('Annotation is being moved. Current Action: ' + args.currentPosition);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationMoving="annotationMoving">
    </ejs-pdfviewer>
</div>

<script>
    function annotationMoving(args) {
        console.log('Annotation is being moved. Current Action: ' + args.currentPosition);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationPropertiesChange

The [annotationPropertiesChange](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationPropertiesChange) event is triggered when an annotation's property is modified on a PDF document page.

#### Event Arguments

For event data, see [AnnotationPropertiesChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationPropertiesChangeEventArgs/). It provides properties such as `annotationId`, `pageNumber`, and `action`.

The following example illustrates how to handle the `annotationPropertiesChange` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationPropertiesChange="annotationPropertiesChanged">
    </ejs-pdfviewer>
</div>

<script>
    function annotationPropertiesChanged(args) {
        console.log('Annotation properties changed for ID: ' + args.annotationId);
        console.log('isThicknessChanged: ' + args.isThicknessChanged);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationPropertiesChange="annotationPropertiesChanged">
    </ejs-pdfviewer>
</div>

<script>
    function annotationPropertiesChanged(args) {
        console.log('Annotation properties changed for ID: ' + args.annotationId);
        console.log('isThicknessChanged: ' + args.isThicknessChanged);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationRemove

The [annotationRemove](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationRemove) event is triggered when an annotation is removed from a PDF document's page.

#### Event Arguments

For event data, see [AnnotationRemoveEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationRemoveEventArgs/). It provides properties such as `annotationId` and `pageNumber`.

The following example illustrates how to handle the `annotationRemove` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationRemove="annotationRemoved">
    </ejs-pdfviewer>
</div>

<script>
    function annotationRemoved(args) {
        console.log('Annotation removed with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationRemove="annotationRemoved">
    </ejs-pdfviewer>
</div>

<script>
    function annotationRemoved(args) {
        console.log('Annotation removed with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationResize

The [annotationResize](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationResize) event is triggered when an annotation is resized on a PDF document page.

#### Event Arguments

For event data, see [AnnotationResizeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationResizeEventArgs/).

The following example illustrates how to handle the `annotationResize` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationResize="annotationResized">
    </ejs-pdfviewer>
</div>

<script>
    function annotationResized(args) {
        console.log('Annotation resized. ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationResize="annotationResized">
    </ejs-pdfviewer>
</div>

<script>
    function annotationResized(args) {
        console.log('Annotation resized. ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationSelect

The [annotationSelect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelect) event is triggered when an annotation is selected on a PDF document's page.

#### Event Arguments

For event data, see [AnnotationSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationSelectEventArgs/).

The following example illustrates how to handle the `annotationSelect` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationSelect="annotationSelected">
    </ejs-pdfviewer>
</div>

<script>
    function annotationSelected(args) {
        console.log('Annotation selected with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationSelect="annotationSelected">
    </ejs-pdfviewer>
</div>

<script>
    function annotationSelected(args) {
        console.log('Annotation selected with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}

### annotationUnselect

The [annotationUnselect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationUnSelect) event is triggered when an annotation is unselected from the PDF document's page.

#### Event Arguments

For event data, see [AnnotationUnSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationUnSelectEventArgs/).

The following example illustrates how to handle the `annotationUnselect` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                annotationUnselect="annotationUnselected">
    </ejs-pdfviewer>
</div>

<script>
    function annotationUnselected(args) {
        console.log('Annotation unselected with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                                   annotationUnselect="annotationUnselected">
    </ejs-pdfviewer>
</div>

<script>
    function annotationUnselected(args) {
        console.log('Annotation unselected with ID: ' + args.annotationId);
    }
</script>

{% endhighlight %}
{% endtabs %}

### beforeAddFreeText

The [beforeAddFreeText](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_BeforeAddFreeText) event is triggered before adding a text in the freeText annotation.

#### Event Arguments

For event data, see [BeforeAddFreeTextEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/beforeAddFreeTextEventArgs/).

The following example illustrates how to handle the `beforeAddFreeText` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                beforeAddFreeText="beforeAddedFreeText">
    </ejs-pdfviewer>
</div>

<script>
    function beforeAddedFreeText(args) {
        console.log('Before adding free text on page: ' + args.pageIndex);
        // Set args.cancel to true to prevent adding the free text annotation
        // args.cancel = true;
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                beforeAddFreeText="beforeAddedFreeText">
    </ejs-pdfviewer>
</div>

<script>
    function beforeAddedFreeText(args) {
        console.log('Before adding free text on page: ' + args.pageIndex);
        // Set args.cancel to true to prevent adding the free text annotation
        // args.cancel = true;
    }
</script>

{% endhighlight %}
{% endtabs %}

## Signature-related events

### addSignature

The [addSignature](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AddSignature) event is triggered when a signature is added to a page of a PDF document.

#### Event Arguments

For event data, see [AddSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/addSignatureEventArgs/). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `addSignature` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                addSignature="addSignature">
    </ejs-pdfviewer>
</div>

<script>
    function addSignature(args) {
        console.log('Signature added to page: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                addSignature="addSignature">
    </ejs-pdfviewer>
</div>

<script>
    function addSignature(args) {
        console.log('Signature added to page: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### removeSignature

The [removeSignature](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RemoveSignature) event is triggered when the signature is removed from the page of a PDF document.

#### Event Arguments

For event data, see [RemoveSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/removeSignatureEventArgs/). It provides properties such as `pageNumber`.

The following example illustrates how to handle the `removeSignature` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                removeSignature="removeSignature">
    </ejs-pdfviewer>
</div>

<script>
    function removeSignature(args) {
        console.log('Signature removed from page: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                removeSignature="removeSignature">
    </ejs-pdfviewer>
</div>

<script>
    function removeSignature(args) {
        console.log('Signature removed from page: ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### resizeSignature

The [resizeSignature](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResizeSignature) event is triggered when the signature is resized and placed on a page of a PDF document.

#### Event Arguments

For event data, see [ResizeSignatureEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/resizeSignatureEventArgs/).

The following example illustrates how to handle the `resizeSignature` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                resizeSignature="resizeSignature">
    </ejs-pdfviewer>
</div>

<script>
    function resizeSignature(args) {
        console.log('Signature resized on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                resizeSignature="resizeSignature">
    </ejs-pdfviewer>
</div>

<script>
    function resizeSignature(args) {
        console.log('Signature resized on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### signaturePropertiesChange

The [signaturePropertiesChange](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignaturePropertiesChange) event is triggered when the property of the signature is changed in the page of the PDF document.

#### Event Arguments

For event data, see [SignaturePropertiesChangeEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signaturePropertiesChangeEventArgs/).

The following example illustrates how to handle the `signaturePropertiesChange` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                signaturePropertiesChange="signaturePropertiesChanged">
    </ejs-pdfviewer>
</div>

<script>
    function signaturePropertiesChanged(args) {
        console.log('Signature properties changed on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                signaturePropertiesChange="signaturePropertiesChanged">
    </ejs-pdfviewer>
</div>

<script>
    function signaturePropertiesChanged(args) {
        console.log('Signature properties changed on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### signatureSelect

The [signatureSelect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignatureSelect) event is triggered when signature is selected over the page of the PDF document.

#### Event Arguments

For event data, see [SignatureSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureSelectEventArgs/).

The following example illustrates how to handle the `signatureSelect` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                signatureSelect="signatureSelected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureSelected(args) {
        console.log('Signature selected on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                signatureSelect="signatureSelected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureSelected(args) {
        console.log('Signature selected on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}

### signatureUnselect

The [signatureUnselect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignatureUnselect) event is triggered when signature is unselected over the page of the PDF document.

#### Event Arguments

For event data, see [SignatureUnSelectEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureUnSelectEventArgs/).

The following example illustrates how to handle the `signatureUnselect` event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                signatureUnselect="signatureUnselected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureUnselected(args) {
        console.log('Signature unselected on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                serviceUrl="/api/PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/blazor-annotations.pdf"
                signatureUnselect="signatureUnselected">
    </ejs-pdfviewer>
</div>

<script>
    function signatureUnselected(args) {
        console.log('Signature unselected on page ' + args.pageIndex);
    }
</script>

{% endhighlight %}
{% endtabs %}