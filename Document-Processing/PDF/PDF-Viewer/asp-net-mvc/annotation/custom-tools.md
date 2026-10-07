---
layout: post
title: Custom Annotation Tools in ASP.NET MVC PDF Viewer | Syncfusion
description: Add and configure custom annotation tools in the ASP.NET MVC PDF Viewer annotation toolbar.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom Annotation Tools in ASP.NET MVC PDF Viewer

The PDF Viewer allows you to add custom tools to the annotation toolbar. Use the **toolbarItems** or **annotationToolbarItems** API to register a new custom tool that triggers a custom action when clicked.

## Add a Custom Tool Programmatically

Use **addAnnotationToolbarItem** to register a custom tool with the annotation toolbar.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    // Add a custom tool to the annotation toolbar
    viewer.toolbar.addAnnotationToolbarItem(
        "CustomTool",
        { text: 'Custom', tooltipText: 'My Custom Tool', id: 'customTool' }
    );

    // Handle the click event for the custom tool
    viewer.annotationToolbar = {
        clicked: function (args) {
            if (args.item && args.item.id === 'customTool') {
                alert('Custom tool clicked!');
            }
        }
    };
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.toolbar.addAnnotationToolbarItem(
        "CustomTool",
        { text: 'Custom', tooltipText: 'My Custom Tool', id: 'customTool' }
    );

    viewer.annotationToolbar = {
        clicked: function (args) {
            if (args.item && args.item.id === 'customTool') {
                alert('Custom tool clicked!');
            }
        }
    };
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](./overview)
- [Annotation Types](./annotation-types/area-annotation)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Remove Annotation](./delete-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Annotation API](./annotations-api)
