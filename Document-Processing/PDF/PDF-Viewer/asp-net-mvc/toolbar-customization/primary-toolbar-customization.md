---
layout: post
title: Primary Toolbar Customization in ASP.NET MVC PDF Viewer Component | Syncfusion
description: Learn here all about primary toolbar customization in Syncfusion ASP.NET MVC PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Primary Toolbar Customization in PDF Viewer Component

The primary toolbar of the PDF Viewer can be customized by rearranging existing items, disabling default items, and adding custom items. New items can be placed at specific index positions among the existing items.

## Show or hide the primary toolbar

Toggle the built-in primary toolbar to create custom toolbar experiences or simplify the UI. In scenarios where a custom toolbar is required, the built-in toolbar can be hidden. Use the [EnableToolbar](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableToolbar) property or the [showToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showtoolbar) method to show or hide the primary toolbar.

Show or hide the toolbar using the `enableToolbar` property:

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").EnableToolbar(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
    <div style="width:100%;height:600px">
         @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableToolbar(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
    </div>
```
{% endhighlight %}
{% endtabs %}

The following code snippet explains how to show or hide the toolbar using the `showToolbar` method.

{{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").DocumentLoad("showToolbar").Render()
</div>

<script>
    function showToolbar() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showToolbar(false);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").DocumentLoad("showToolbar").Render()
</div>

<script>
    function showToolbar() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showToolbar(false);
    }
</script>

{% endhighlight %}
{% endtabs %}

## Show or hide toolbar items

The PDF Viewer has an option to show or hide these grouped items in the built-in toolbar.

* Show or hide toolbar items using toolbarSettings:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<button id="viewer" onclick="enableToolbarItem()">EnableToolbarItem</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, ToolbarItems = "OpenOption" }).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```html
<button id="viewer" onclick="enableToolbarItem()">EnableToolbarItem</button>
<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings{ ShowTooltip = true, ToolbarItem = "OpenOption" ).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```

{% endhighlight %}
{% endtabs %}

* Show or hide toolbar items using showToolbarItem:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
<button id="viewer" onclick="enableToolbarItem()">EnableToolbarItem</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>

<script>
    function enableToolbarItem() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showToolbarItem(new Array("DownloadOption"), true);
    }
</script>
```

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```html
<button id="viewer" onclick="enableToolbarItem()">EnableToolbarItem</button>
<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
<script>
    function enableToolbarItem() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.toolbar.showToolbarItem(new Array("DownloadOption"), true);
    }
</script>
```

{% endhighlight %}
{% endtabs %}

## Customize the built-in toolbar

The PDF Viewer allows you to customize (add, show, hide, enable, and disable) existing items in the toolbar.

- Add: Define new items using **CustomToolbarItemModel** and include them with existing items via the [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property. Handle clicks in the toolbarClick event.

- Show/Hide: Show or hide existing items using the [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property. Predefined toolbar items are available via [`ToolbarItem`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems).

- Enable/Disable: Toolbar items can be enabled or disabled using enableToolbarItem.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:1350px;">
        <br /><br />
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib").ToolbarClick("toolbarClick").Render()
    </div>
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
        function onCreate() {
            this.addIcon('prepend', 'e-icons e-search');
        }
        pdfViewer.toolbarSettings = {
            showTooltip: true,
            toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
        };

    };

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
{% highlight html tabtitle="Server-Backed" %}

@{
    ViewBag.Title = "Home Page";
}
@using Syncfusion.EJ2.PdfViewer
@using ToolbarCustomization.Controllers
@{
    var toolItem1 = new { id = "submit_form", text = "Submit Form", tooltipText = "Custom toolbar item", align = "Center", cssClass = "custom_button" };
    CustomToolbarItems customToolbarItems = new CustomToolbarItems();
    customToolbarItems.ToolbarItems = new List<object> { toolItem1, "OpenOption", "PageNavigationTool", "MagnificationTool", "PanTool", "SelectionTool", "SearchOption", "PrintOption", "DownloadOption", "UndoRedoTool", "AnnotationEditTool", "FormDesignerEditTool", "CommentTool" };
    PdfViewerToolbarSettings toolbarSettings = new PdfViewerToolbarSettings()
    {
        ShowTooltip = true,
        ToolbarItems = customToolbarItems.ToolbarItems
    };
}
<div>
    <div style="height:500px;width:1350px;">
        <br /><br />
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-designer.pdf").ToolbarClick("toolbarClick").ToolbarSettings(toolbarSettings).Render()
    </div>
</div>

<script type="text/javascript">
    function toolbarClick(args) {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (args.item && args.item.id === 'submit_form') {
            alert('Custom button clicked!');
        }
    }
</script>

<style>
    .custom_button {
        height: 100% !important;
    }
</style>
{% endhighlight %}
{% endtabs %}

N> Default toolbar items: ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

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

The Id property of a CustomToolbarItemModel uniquely identifies a toolbar item and is required for customization.

When defining or customizing toolbar items, assign a specific and descriptive Id to each item.
These properties are commonly used when defining custom toolbar items with the CustomToolbarItemModel in the context of the Syncfusion PDF Viewer. When configuring the toolbar using the ToolbarSettings property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing toolbar items, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)
