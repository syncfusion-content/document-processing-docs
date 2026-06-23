---
layout: post
title: Annotations API in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about how to read and configure annotations using APIs in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations API in ASP.NET Core

The PDF Viewer provides APIs to read the loaded annotations and to configure global defaults for creating/editing annotations.

| API | Description |
|---|---|
| [annotationCollection](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#annotationcollection) | Gets the loaded document annotation collection. |
| [annotationDrawingOptions](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationDrawingOptions) | Options to configure line-type annotation drawing behavior. |
| [annotationSelectorSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSelectorSettings) | Configures the annotation selector (selection UI). |
| [annotationSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AnnotationSettings) | Global defaults for all annotations. |
| [areaSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AreaSettings) | Defaults for Area annotations. |
| [arrowSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ArrowSettings) | Defaults for Arrow annotations. |
| [circleSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CircleSettings) | Defaults for Circle annotations. |
| [customStamp](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CustomStamp) | Defines custom stamp items. |
| [customStampSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CustomStampSettings) | Defaults for Custom Stamp annotations. |
| [distanceSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DistanceSettings) | Defaults for Distance annotations. |

## annotationCollection
Read the loaded document annotation collection from the viewer instance.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    // Example: read annotation collection
    console.log(viewer.annotationCollection);
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## annotationDrawingOptions
Configure line-type annotation drawing behavior.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    // Example: configure line annotation drawing
    viewer.annotationDrawingOptions = { enableLineAngleConstraints: true, restrictLineAngleTo: 90 };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## annotationSelectorSettings
Configure the annotation selector (selection UI).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.annotationSelectorSettings = {
      selectionBorderColor: 'blue',
      resizerBorderColor: 'red',
      resizerFillColor: '#4070ff',
      resizerSize: 8,
      selectionBorderThickness: 1,
      resizerShape: 'Circle',
      selectorLineDashArray: [5, 6],
      resizerLocation: ['Corners','Edges'],
      resizerCursorType: 'grab'
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## annotationSettings
Global defaults for all annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.annotationSettings = {
      author: 'XYZ',
      minHeight: 10,
      minWidth: 10,
      maxWidth: 100,
      maxHeight: 100,
      isLock: false,
      skipPrint: false,
      skipDownload: false,
      allowedInteractions: ['Resize']
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## areaSettings
Defaults for Area annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.areaSettings = {
      opacity: 1,
      fillColor: '#ffffff00',
      strokeColor: '#ff0000',
      author: 'XYZ',
      thickness: 1,
      minHeight: 10,
      minWidth: 10,
      maxWidth: 100,
      maxHeight: 100,
      isLock: false,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue',
        resizerBorderColor: 'white',
        resizerFillColor: '#4070ff',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Circle',
        selectorLineDashArray: [5, 6],
        resizerLocation: ['Corners','Edges'],
        resizerCursorType: 'grab'
      },
      allowedInteractions: ['Resize'],
      isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## arrowSettings
Defaults for Arrow annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.arrowSettings = {
      opacity: 1,
      fillColor: '#9c2592',
      strokeColor: '#ff0000',
      author: 'XYZ',
      thickness: 1,
      borderDashArray: 1,
      lineHeadStartStyle: 'Closed',
      lineHeadEndStyle: 'Closed',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue',
        resizerBorderColor: 'black',
        resizerFillColor: '#FF4081',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Square',
        selectorLineDashArray: [5, 6],
        resizerLocation: ['Corners','Edges'],
        resizerCursorType: 'grab'
      },
      minHeight: 10,
      minWidth: 10,
      maxWidth: 100,
      maxHeight: 0,
      isLock: false,
      allowedInteractions: ['Resize'],
      isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## circleSettings
Defaults for Circle annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.circleSettings = {
      opacity: 1,
      fillColor: '#9c2592',
      strokeColor: '#ff0000',
      author: 'XYZ',
      thickness: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue',
        resizerBorderColor: 'black',
        resizerFillColor: '#FF4081',
        resizerSize: 8,
        selectionBorderThickness: 1,
        resizerShape: 'Square',
        selectorLineDashArray: [5, 6],
        resizerLocation: ['Corners','Edges'],
        resizerCursorType: 'grab'
      },
      minHeight: 10,
      minWidth: 10,
      maxWidth: 100,
      maxHeight: 100,
      isLock: false,
      allowedInteractions: ['Resize'],
      isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## customStamp
Define custom stamp items.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.customStamp = [
      { customStampName: 'Sample', customStampImageSource: 'data:image/png;base64,Syncfusionpdfviewer' }
    ];
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## customStampSettings
Defaults for Custom Stamp annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.customStampSettings = {
      opacity: 1, author: 'XYZ', width: 100, height: 100, left: 200, top: 200,
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      enableCustomStamp: true, allowedInteractions: ['None'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## distanceSettings
Defaults for Distance annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.distanceSettings = {
      opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'Guest', thickness: 1,
      borderDashArray: 1, lineHeadStartStyle: 'Closed', lineHeadEndStyle: 'Closed',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5, 6],
        resizerLocation: ['Corners','Edges'],
        resizerCursorType: 'grab'
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      leaderLength: 40, resizeCursorType: 'move',
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableAnnotation
Enable or disable the Add/Edit Annotations tool in the toolbar.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableAnnotation = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableAnnotationToolbar
Show or hide the annotation toolbar when the document loads.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableAnnotationToolbar = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableFreeText
Enable or disable Free Text annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableFreeText = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableHandwrittenSignature
Enable or disable the handwritten signature feature.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableHandwrittenSignature = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableInkAnnotation
Enable or disable Ink annotations (true by default).
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableInkAnnotation = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableMeasureAnnotation
Enable or disable calibrate/measurement annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableMeasureAnnotation = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableMultiPageAnnotation
Enable or disable multi-page text markup selection in UI.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableMultiPageAnnotation = true;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableShapeAnnotation
Enable or disable shape annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableShapeAnnotation = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableShapeLabel
Enable or disable labels for shape annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableShapeLabel = true;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableStampAnnotations
Enable or disable stamp annotations at load time.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableStampAnnotations = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableStickyNotesAnnotation
Enable or disable sticky notes annotations at load time.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableStickyNotesAnnotation = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableTextMarkupAnnotation
Enable or disable text markup annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableTextMarkupAnnotation = false;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## enableTextMarkupResizer
Enable or disable the text markup resizer to modify bounds in the UI.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.enableTextMarkupResizer = true;
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## exportAnnotationFileName
Gets or sets the exported annotations JSON file name.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.exportAnnotationFileName = "Annotation export file_1";
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## freeTextSettings
Defaults for Free Text annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.freeTextSettings = {
      opacity: 1, fillColor: '#ffffff00', borderColor: '#4070ff', author: 'XYZ',
      borderWidth: 1, width: 151, fontSize: 16, height: 24.6, fontColor: '#000',
      fontFamily: 'Helvetica', defaultText: 'Type Here', textAlignment: 'Right',
      fontStyle: 'Italic', allowTextOnly: false,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [], resizerLocation: ['Corners','Edges'],
        resizerCursorType: null
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      allowedInteractions: ['None'], isPrint: true,
      isReadonly: false, enableAutoFit: false
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## handWrittenSignatureSettings
Defaults for handwritten signatures.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.handWrittenSignatureSettings = {
      signatureItem: ['Signature','Initial'],
      saveSignatureLimit: 1,
      saveInitialLimit: 1,
      opacity: 1,
      strokeColor: '#000000',
      width: 150,
      height: 100,
      thickness: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      allowedInteractions: ['Resize'],
      signatureDialogSettings: { displayMode: ['Draw','Text','Upload'], hideSaveSignature: false },
      initialDialogSettings: { displayMode: ['Draw','Text','Upload'], hideSaveSignature: false }
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## highlightSettings
Defaults for Highlight annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.highlightSettings = {
      opacity: 1, color: '#DAFF56', author: 'XYZ',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges']
      },
      isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## inkAnnotationSettings
Defaults for Ink annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.inkAnnotationSettings = {
      author: 'XYZ', opacity: 1, strokeColor: '#ff0000', thickness: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      isLock: false, allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## isAnnotationToolbarVisible
Open the annotation toolbar initially and read its visibility state.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/FormDesigner.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.isAnnotationToolbarVisible = true;
    console.log('Annotation toolbar visible:', viewer.isAnnotationToolbarVisible);
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## lineSettings
Defaults for Line annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.lineSettings = {
      opacity: 1, color: '#9c2592', fillColor: '#ffffff00', strokeColor: '#ff0000',
      author: 'XYZ', thickness: 1, borderDashArray: 1,
      lineHeadStartStyle: 'None', lineHeadEndStyle: 'None',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: null
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## measurementSettings
Defaults for Measurement annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.measurementSettings = { conversionUnit: 'cm', displayUnit: 'cm', scaleRatio: 1, depth: 96 };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## perimeterSettings
Defaults for Perimeter annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.perimeterSettings = {
      opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ',
      thickness: 1, borderDashArray: 1, lineHeadStartStyle: 'Open', lineHeadEndStyle: 'Open',
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#4070ff',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## polygonSettings
Defaults for Polygon annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.polygonSettings = {
      opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## radiusSettings
Defaults for Radius annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.radiusSettings = {
      opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#4070ff',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## rectangleSettings
Defaults for Rectangle annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.rectangleSettings = {
      opacity: 1, fillColor: '#9c2592', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## shapeLabelSettings
Defaults for shape labels (requires `enableShapeLabel`).
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" enableShapeLabel="true" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.shapeLabelSettings = {
      opacity: 1, fillColor: '#9c2592', borderColor: '#ff0000', fontColor: '#000',
      fontSize: 16, labelHeight: 24.6, labelMaxWidth: 151, labelContent: 'XYZ'
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## stampSettings
Defaults for Stamp annotations (dynamic/sign/business).
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.stampSettings = {
      opacity: 1, author: 'XYZ',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 5, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      dynamicStamps: ['Revised','Reviewed','Received','Confidential','Approved','NotApproved'],
      signStamps: ['Witness','InitialHere','SignHere','Accepted','Rejected'],
      standardBusinessStamps: ['Approved','NotApproved','Draft','Final','Completed','Confidential','ForPublicRelease','NotForPublicRelease','ForComment','Void','PreliminaryResults','InformationOnly'],
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## stickyNotesSettings
Defaults for Sticky Notes annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.stickyNotesSettings = {
      author: 'XYZ', opacity: 1,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'red', resizerFillColor: '#4070ff',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      isLock: false, allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## strikethroughSettings
Defaults for Strikethrough annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.strikethroughSettings = {
      opacity: 1, color: '#DAFF56', author: 'XYZ',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges']
      },
      isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## underlineSettings
Defaults for Underline annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.underlineSettings = {
      opacity: 1, color: '#9c2592', author: 'XYZ',
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#FF4081',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Square',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges']
      },
      isLock: false, enableMultiPageAnnotation: false, enableTextMarkupResizer: false,
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

---

## volumeSettings
Defaults for Volume annotations.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
  <ejs-pdfviewer id="container" style="height:650px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/PDF_Succinctly.pdf">
  </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('container').ej2_instances[0];
  if (viewer) {
    viewer.volumeSettings = {
      opacity: 1, fillColor: '#ffffff00', strokeColor: '#ff0000', author: 'XYZ', thickness: 1,
      minHeight: 10, minWidth: 10, maxWidth: 100, maxHeight: 100, isLock: false,
      annotationSelectorSettings: {
        selectionBorderColor: 'blue', resizerBorderColor: 'black', resizerFillColor: '#4070ff',
        resizerSize: 8, selectionBorderThickness: 1, resizerShape: 'Circle',
        selectorLineDashArray: [5,6], resizerLocation: ['Corners','Edges'], resizerCursorType: 'grab'
      },
      allowedInteractions: ['Resize'], isPrint: true
    };
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotation/create-modify-annotation)
- [Customize Annotation](../../annotation/customize-annotation)
- [Remove Annotation](../../annotation/delete-annotation)
- [Handwritten Signature](../../annotation/signature-annotation)
- [Export and Import Annotation](../../annotation/export-import/export-annotation)
- [Annotation in Mobile View](../../annotation/annotations-in-mobile-view)
- [Annotation Events](../../annotation/annotation-event)