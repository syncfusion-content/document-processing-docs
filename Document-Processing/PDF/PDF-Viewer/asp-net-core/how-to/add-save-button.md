---
layout: post
title: Add Save Button in Toolbar ASP.NET Core | Syncfusion
description: Learn here all about adding save button in built-in Toolbar in Syncfusion ASP.NET Core PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add a save button to the toolbar in ASP.NET Core

The PDF Viewer enables customization of toolbar items, including adding, showing, hiding, enabling, and disabling items. Create a custom save button that triggers the download functionality with a few configuration steps. The following approaches can be used to customize the toolbar:

- **Add a save button:** Define a custom `Save` button using **CustomToolbarItemModel** and include it with existing toolbar items via [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html). Handle the button click using the `toolbarClick` event.

- **Show or hide items:** Control visibility of toolbar items using [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html). See the list of predefined toolbar items under [`ToolbarItem`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems).

- **Enable or disable items:** Toggle the state of toolbar items using the `enableToolbarItem()` method.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<div>
    <ejs-pdfviewer id="pdfviewer"
                   style="width:1350px;height:100%"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl='https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"'
                   toolbarClick="toolbarClick">
    </ejs-pdfviewer>
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
        pdfViewer.toolbarSettings = {
            showTooltip: true,
            toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        };
        function onCreate() {
            this.addIcon('prepend', 'e-icons e-search');
        }
    }

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
    <ejs-pdfviewer id="pdfviewer"
                   style="width:1350px;height:100%"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   serviceUrl="/api/PdfViewer"
                   toolbarClick="toolbarClick">
    </ejs-pdfviewer>
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
        pdfViewer.toolbarSettings = {
            showTooltip: true,
            toolbarItems: ['OpenOption', toolItem1, 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        };
        function onCreate() {
            this.addIcon('prepend', 'e-icons e-search');
        }
    }

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

## CustomToolbarItemModel properties

The following properties can be configured when creating a custom toolbar item:

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

N> You can use either text, icons, or both when customizing the save button based on your design requirements.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
