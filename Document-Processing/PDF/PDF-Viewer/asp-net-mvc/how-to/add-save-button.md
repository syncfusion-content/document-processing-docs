---
layout: post
title: Add Save Button to Toolbar in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to add, show, hide, enable, and disable a custom Save button in the built-in toolbar of the Syncfusion ASP.NET MVC PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add a Save button to the built-in toolbar

PDF Viewer supports customizing toolbar items, including adding, showing, hiding, enabling, and disabling items.

- Save button: Define the `Save` button using **CustomToolbarItemModel** and include it alongside existing items via [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html). Handle clicks in the toolbarClick event.

- Show or hide: Show or hide the `Save` button using [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html). Predefined toolbar items are listed under [`ToolbarItem`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems).

- Enable or disable: Enable or disable the `Save` button using `enableToolbarItem`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<div>
    <div style="height:500px;width:1350px;">
        <br /><br />
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib").ToolbarClick("toolbarClick").Render()
    </div>
</div>

<script type="text/javascript">
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var toolItem1 = {
            prefixIcon: 'e-icons e-save',
            id: 'download',
            text: 'Save',
            tooltipText: 'Save Button',
            align: 'left'
        };
        function onCreate() {
            this.addIcon('prepend', 'e-icons e-search');
        }
        pdfViewer.toolbarSettings = {
            showTooltip: true,
            toolbarItems: ['OpenOption', toolItem1'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        };

    };

    // Define the toolbarClick event handler
    function toolbarClick(args) {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (args.item && args.item.id === 'download') {
            pdfViewer.download();
        }
    }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<div>
    <div style="height:500px;width:1350px;">
        <br /><br />
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).ToolbarClick("toolbarClick").Render()
    </div>
</div>

<script type="text/javascript">
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var toolItem1 = {
            prefixIcon: 'e-icons e-save',
            id: 'download',
            text: 'Save',
            tooltipText: 'Save Button',
            align: 'left'
        };
        function onCreate() {
            this.addIcon('prepend', 'e-icons e-search');
        }
        pdfViewer.toolbarSettings = {
            showTooltip: true,
            toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        };

    };

    // Define the toolbarClick event handler
    function toolbarClick(args) {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (args.item && args.item.id === 'download') {
            pdfViewer.download();
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

N> Default toolbar items: ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align property

Specifies the alignment of the `Save` button within the toolbar.

- `Left`: Aligns the item to the left side of the toolbar.
- `Right`: Aligns the item to the right side of the toolbar.

### Tooltip property

Sets the tooltip text for the Save button. The tooltip provides additional information on hover.

### CssClass property

Applies custom CSS classes to the Save button for styling.

### Prefix property

Sets the CSS class or icon to add as a prefix to the Save button content.

### ID property

The id property within a CustomToolbarItemModel is required and uniquely identifies each toolbar item for configuration and interaction.

When defining or customizing toolbar items, assign a specific, descriptive id to each item. These properties are commonly used when defining custom toolbar items with `CustomToolbarItemModel` in the context of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, include these properties to customize appearance and behavior.

N> When customizing the Save button, icons or text can be used based on design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
