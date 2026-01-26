---
layout: post
title: Design form fields in the ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to add, drag, resize, edit, and manage form fields using the UI in the Syncfusion ASP.NET MVC PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Design form fields with UI interaction in ASP.NET MVC PDF Viewer

The PDF Viewer component supports interactive form field design, including drawing, dragging, and resizing fields directly on the page. Click the Form Field icon on the toolbar to add a field and place it on the document. Supported form field types include:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- SignatureField
- InitialField

## Enable or Disable form designer toolbar

Inject the FormDesigner module and set enableFormDesignerToolbar to true to display the Form Designer icon on the toolbar. The default value is true. Use the following code to enable the toolbar option.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").EnableFormDesignerToolbar(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
    </div>

```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableFormDesignerToolbar(true).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
    </div>

```
{% endhighlight %}
{% endtabs %}

## Add the form field dynamically

Click the Form Field icon on the toolbar, then click on the PDF to draw a form field. See the following GIF for reference.

![Add a form field using the toolbar](../images/addformfield.gif)

## Drag the form field

Drag the selected form field to reposition it within the PDF document. See the following GIF for reference.

![Drag a selected form field in the PDF Viewer](../images/dragformfield.gif)

## Resize the form field

Resize the selected form field using the resize handles on the field boundary. See the following GIF for reference.

![Resize a selected form field in the PDF Viewer](../images/resizeformfield.gif)

## Edit or Update the form field dynamically

Edit form field properties using the Form Field Properties dialog. Open it by right-clicking a form field and selecting Properties from the context menu. The following images show examples of available settings.

![Form field general properties dialog](../images/generalproperties.png)

![Form field appearance properties dialog](../images/appearanceproperties.png)

![DropDown field properties dialog](../images/dropdownproperties.png)

## Clipboard operation with form field

The PDF Viewer supports clipboard operations such as cut, copy, and paste for form fields. Right-click a form field to open the context menu and choose the desired clipboard action. The following image shows the available options.

![Clipboard options for a form field in the context menu](../images/clipboardformfield.png)

## Undo and Redo

Undo and redo actions are supported for runtime changes made to form fields. Use the following code to perform undo and redo operations.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<button id="undo">Undo</button>
<button id="redo">Redo</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
<script>
    document.getElementById('undo').addEventListener('click', function () {
        var pdfviewer = document.getElementById("pdfviewer").ej2_instances[0];
        pdfviewer.undo();
    });
    document.getElementById('redo').addEventListener('click', function () {
        var pdfviewer = document.getElementById("pdfviewer").ej2_instances[0];
        pdfviewer.redo();
    });
</script>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<button id="undo">Undo</button>
<button id="redo">Redo</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
<script>
    document.getElementById('undo').addEventListener('click', function () {
        var pdfviewer = document.getElementById("pdfviewer").ej2_instances[0];
        pdfviewer.undo();
    });
    document.getElementById('redo').addEventListener('click', function () {
        var pdfviewer = document.getElementById("pdfviewer").ej2_instances[0];
        pdfviewer.redo();
    });
</script>
```
{% endhighlight %}
{% endtabs %}
