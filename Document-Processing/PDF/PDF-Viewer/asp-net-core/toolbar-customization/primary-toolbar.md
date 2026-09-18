---
layout: post
title: Primary Toolbar in ASP.NET Core PDF Viewer | Syncfusion
description: Customize the primary toolbar in the ASP.NET Core PDF Viewer to show, hide, reorder, or add items so it matches the way users work with PDFs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the Primary Toolbar in ASP.NET Core PDF Viewer

## Overview

This guide explains how to show or hide the primary toolbar, remove default items, and add custom toolbar items.

**Outcome**: Working ASP.NET Core example customizing the primary toolbar.

## Prerequisites

- EJ2 ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) or [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) for accessing PDF Viewer assets

## Steps

### 1. Show or hide primary toolbar at initialization

Set [`enableToolbar`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableToolbar) to `false` to hide the built-in toolbar.

### 2. Show or hide primary toolbar at runtime

Use the viewer's [`showToolbar()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showtoolbar) method to show or hide dynamically.

**Example with enableToolbar property:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableToolbar="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

**Example with showToolbar() method:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   documentLoad="showToolbar">
    </ejs-pdfviewer>
</div>

<script>
    function showToolbar() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showToolbar(false);
    }
</script>

{% endhighlight %}
{% endtabs %}

### 3. Show or hide primary toolbar items

The PDF Viewer provides options to show or hide grouped items in the built-in toolbar. You can configure which items appear and their order using the [`toolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property with the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems) collection.

**Show or hide toolbar items using `toolbarSettings`:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableToolbar="true"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings  { ShowTooltip = true, ToolbarItems = "OpenOption"  })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

**Show or hide toolbar items using `showToolbarItem()` method:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   documentLoad="showToolbar">
    </ejs-pdfviewer>
</div>

<script>
    function showToolbar() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showToolbarItem(new Array("DownloadOption"), true);
    }
</script>

{% endhighlight %}
{% endtabs %}

### 4. Add a custom primary toolbar item

Add custom toolbar items by defining them with unique IDs and handling their click events via the [`toolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ToolbarClick) event.

The PDF Viewer supports full customization of existing toolbar items (add, show, hide, enable, and disable).

- Add: Define new items using `CustomToolbarItemModel` and include them with existing items via the [`ToolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property. Handle item interactions in the `toolbarClick` event.

- Show/Hide: Control visibility of existing items using the [`ToolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property. Predefined toolbar items are available via [`ToolbarItem`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems).

- Enable/Disable: Enable or disable toolbar items using `enableToolbarItem`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div>
    <ejs-pdfviewer id="pdfviewer"
                   style="width:1350px;height:100%"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl='https://cdn.syncfusion.com/ej2/29.1.35/dist/ej2-pdfviewer-lib'
                   toolbarClick="toolbarClick">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var toolItem1 = {
            prefixIcon: 'e-icons e-paste',
            id: 'print',
            tooltipText: 'Custom toolbar item',
            align: 'left'
        };
        var toolItem2 = {
            id: 'download',
            text: 'Save',
            tooltipText: 'Custom toolbar item',
            align: 'right'
        };
        var LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
        var toolItem3 = {
            type: 'Input',
            tooltipText: 'Language List',
            cssClass: 'percentage',
            align: 'Left',
            id: 'dropdown',
            template: new ej.dropdowns.ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
        };
        var toolItem4 = {
            type: 'Input',
            tooltipText: 'Text',
            align: 'Right',
            cssClass: 'find',
            id: 'textbox',
            template: new ej.inputs.TextBox({ width: 125, placeholder: 'Type Here', created: onCreate })
        };
        pdfViewer.toolbarSettings = {
            showTooltip: true,
            toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
        };
        function onCreate() {
            this.addIcon('prepend', 'e-icons e-search');
        }
    }

    // Define the toolbarClick event handler
    function toolbarClick(args) {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];

        if (args.item && args.item.id === 'print') {
            pdfViewer.printModule.print();
        } else if (args.item && args.item.id === 'download') {
            pdfViewer.download();
        }
    }

</script>

{% endhighlight %}
{% endtabs %}

N> Default toolbar items: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align property

The Align property specifies the alignment of a toolbar item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip property

The Tooltip property sets the tooltip text for a toolbar item. Tooltips provide additional information when a user hovers over the item.

### CssClass property

The CssClass property applies custom CSS classes to a toolbar item for custom styling.

### Prefix property

The Prefix property sets the CSS class or icon added as a prefix to the existing content of the toolbar item.

### ID property

The id property of a CustomToolbarItemModel uniquely identifies a toolbar item and is required for customization.

Assign a specific and descriptive `id` to each custom toolbar item.

These properties are commonly used when defining custom toolbar items with `CustomToolbarItemModel`. When configuring the toolbar using the `ToolbarSettings` property, include these properties to customize the appearance and behavior of each toolbar item.

N> Customization allows inclusion of either icons or text based on design preference.

## Expected result

- The primary toolbar shows only the items you list in [`toolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems).
- Custom items respond to the [`toolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ToolbarClick) event.

## Troubleshooting

- **Toolbar items do not appear**
    - **Cause**: Invalid item name or toolbar service not injected.
    - **Solution**: Verify item names match the predefined list and ensure the Toolbar service is injected in the PDF Viewer.

- **Custom toolbar click event not firing**
    - **Cause**: toolbarClick event handler not defined or item ID mismatch.
    - **Solution**: Ensure the `toolbarClick` event is properly wired and the custom item ID matches the condition in the event handler.

- **Toolbar alignment not working**
    - **Cause**: Missing or incorrect `align` property value in custom item definition.
    - **Solution**: Use either `Left` or `Right` for the alignment property.

## Related topics

- [Customize annotation toolbar](./annotation-toolbar)
- [Customize form designer toolbar](./form-designer-toolbar)
- [Create a custom toolbar](./custom-toolbar)

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)
