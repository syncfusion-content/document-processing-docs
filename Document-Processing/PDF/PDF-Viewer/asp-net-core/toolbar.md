---
layout: post
title: Toolbar in ASP.NET Core PDF Viewer Component | Customize & Configure | Syncfusion
description: Learn the toolbar in Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: Toolbar
documentation: ug
---

# Built-in toolbar in ASP.NET Core PDF Viewer

The PDF Viewer includes a comprehensive built-in toolbar with tools for essential document interactions. The toolbar provides quick access to page navigation, text search, view magnification, document download, printing, and annotation controls—all configurable and customizable to meet your application needs.

## Built-in toolbar items

The PDF Viewer provides the following built-in toolbar items that can be shown, hidden, or customized based on your requirements:

| Option | Description |
|---|---|
| **OpenOption** | Opens file picker to load PDF documents into the viewer |
| **PageNavigationTool** | Go to first page, last page, previous page, next page, or specific page number |
| **MagnificationTool** | Zoom in, zoom out, fit to page, fit to width, or set custom zoom factor |
| **PanTool** | Enable panning to navigate across zoomed pages |
| **SelectionTool** | Enable or disable text selection in the document |
| **SearchOption** | Search for text in the document with case-sensitive matching options |
| **PrintOption** | Print the currently loaded PDF document |
| **DownloadOption** | Download the currently loaded PDF as a file |
| **UndoRedoTool** | Undo and redo annotation actions |
| **AnnotationEditTool** | Enable or disable annotation editing mode |

## Show/Hide the built-in toolbar

The PDF Viewer has an option to show or hide the complete toolbar using either the `enableToolbar` property or the `showToolbar` API method.

### Using enableToolbar property

Disable the entire toolbar by setting `enableToolbar="false"`:

**Example: Hiding the toolbar on initialization**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableToolbar="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableToolbar="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

### Using showToolbar method

Toggle the toolbar visibility programmatically using the `showToolbar` method after the document is loaded:

**Example: Toggling toolbar visibility programmatically**

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
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
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

## Show/Hide the built-in toolbar item

Individual toolbar items can be managed by showing or hiding specific grouped items while keeping the toolbar visible.

### Using toolbarSettings property

Configure visible toolbar items using the `toolbarSettings` property at initialization:

**Example: Showing only the OpenOption toolbar item**

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
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableToolbar="true"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, ToolbarItems = "OpenOption"  })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

### Using showToolbarItem method

Toggle individual toolbar items programmatically using the `showToolbarItem` method:

**Example: Toggling specific toolbar items programmatically**

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
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
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

## Customize built-in toolbar

The PDF Viewer provides comprehensive customization capabilities for the toolbar, allowing to add custom items, reorder existing items, show/hide specific tools, and enable/disable functionality based on application requirements.

### Customization operations

The following customization operations are available:

* **Add custom items** - Add new buttons and controls alongside built-in toolbar items defined by `CustomToolbarItemModel` in [`ToolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html)
* **Show/Hide items** - Show or hide existing toolbar items using [`ToolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html). Pre-defined toolbar items are available with [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems) |
* **Enable/Disable items** - Enable or disable toolbar item using `enableToolbarItem()` method
* **Handle clicks** - Execute custom code when toolbar items are clicked using `toolbarClick` event

**Example: Creating a custom toolbar with additional buttons and inputs**

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
{% highlight html tabtitle="Server-Backed" %}

@page "{handler?}"
@model IndexModel
@using Syncfusion.EJ2.PdfViewer
@using Newtonsoft.Json
@{
    ViewData["Title"] = "Home page";
    CustomToolbarItems customToolbarItems = new CustomToolbarItems();
    var toolItem1 = new { id = "submit_form", text = "Submit Form", tooltipText = "Custom toolbar item", align = "Center", cssClass = "custom_button" };
    customToolbarItems.ToolbarItems = new List<object> { toolItem1, "OpenOption", "PageNavigationTool", "MagnificationTool", "PanTool", "SelectionTool", "SearchOption", "PrintOption", "DownloadOption", "UndoRedoTool", "AnnotationEditTool", "FormDesignerEditTool", "CommentTool" };
    PdfViewerToolbarSettings toolbarSettings = new PdfViewerToolbarSettings()
            {
                ShowTooltip = true,
                ToolbarItems = customToolbarItems.ToolbarItems
            };
}

<div>
    <ejs-pdfviewer id="pdfviewer" style="height:600px"
                   serviceUrl="/Index"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   toolbarClick="toolbarClick"
                   ToolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
</div>

<script>
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

N> Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align Property

The align property is used to specify the alignment of a toolbar item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a toolbar item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a toolbar item. It allows custom styling of the toolbar item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item.
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel`` in the context of Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. When configuring the toolbar using the `ToolbarSettings`` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing toolbar items, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)

## Custom toolbar

The PDF Viewer exposes all necessary APIs for toolbar operations, enabling to create a completely custom toolbar interface by hiding the built-in toolbar. This approach gives  full control over toolbar design, layout, and functionality while leveraging the PDF Viewer's core capabilities.

### Create a custom toolbar

Follow these steps to build a completely custom toolbar:

**Step 1: Set up PDF Viewer project**

Follow the [Getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started/) to create a basic PDF Viewer implementation.

**Step 2: Create a primary toolbar with document operations**

Add an EJ2 toolbar for essential document actions like Open, Navigate, Print and Download using the following code snippet:

```html
@{
    var template = "<div class=''><span class='e-pv-total-page-number' id='totalPage'>of 0</span></div>";
    var inputtemplate = "<div class=''><input type='text' class='e-input-group e-pv-current-page-number' id='currentPage' /></div>";
}

<ejs-toolbar id="topToolbar" height="56px">
    <e-toolbar-items>
        <e-toolbar-item prefixIcon="e-pv-open-document-icon" tooltipText="Open" align="Left" click="openPage" id="Openpage"></e-toolbar-item>
        <e-toolbar-item prefixIcon="e-pv-previous-page-navigation-icon" tooltipText="Previous Page" align="Center" click="previousClicked" id="previousPage"></e-toolbar-item>
        <e-toolbar-item prefixIcon="e-pv-next-page-navigation-icon" tooltipText="Next Page" align="Center" click="nextClicked" id="nextPage"></e-toolbar-item>
        <e-toolbar-item template="@inputtemplate" tooltipText="Page Number" type="Input" align="Center"></e-toolbar-item>
        <e-toolbar-item template="@template" align="Center" tooltipText="Page Number"></e-toolbar-item>
        <e-toolbar-item prefixIcon="e-pv-print-document-icon" tooltipText="Print" align="Right" click="printClicked"></e-toolbar-item>
        <e-toolbar-item prefixIcon="e-pv-download-document-icon" tooltipText="Download" align="Right" click="downloadClicked"></e-toolbar-item>
    </e-toolbar-items>
</ejs-toolbar>
<ejs-pdfviewer id="pdfviewer" style="height:641px" enableToolbar="false" enableNavigationToolbar="false" documentLoad="documentLoaded" pageChange="pageChanged"></ejs-pdfviewer>
<input type="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;">

```

**Step 3: Create a secondary toolbar for magnification controls**

Add another EJ2 toolbar for zoom operations (Fit to page, Zoom in, Zoom out) with rotated positioning:

```html
<div id="magnificationToolbarItems">
    <ejs-toolbar id="magnificationToolbar">
        <e-toolbar-items id="magnificationToolbarItems">
            <e-toolbar-item prefixIcon="e-pv-fit-page" tooltipText="Fit to page" click="pageFitClicked"></e-toolbar-item>
            <e-toolbar-item prefixIcon="e-pv-zoom-in-icon" tooltipText="Zoom in" click="zoomInClicked"></e-toolbar-item>
            <e-toolbar-item prefixIcon="e-pv-zoom-out-icon" tooltipText="Zoom out" click="zoomOutClicked"></e-toolbar-item>
        </e-toolbar-items>
    </ejs-toolbar>
</div>

```

**Step 4: Apply CSS styling for custom toolbar layout**

Add the following CSS to style the custom toolbar with proper positioning and appearance:

```html
<style>
    #magnificationToolbar {
        background: transparent;
        height: auto;
        width: 200px;
        position: absolute;
        z-index: 1001;
        left: calc(100% - 120px);
        top: calc(100% - 110px);
        transform: rotate(90deg);
        border-width: 0px;
    }

    .e-pv-zoom-out-icon {
        transform: rotate(-90deg);
    }

    div#magnificationToolbar.e-toolbar .e-toolbar-items {
        background: transparent;
    }

    #magnificationToolbar.e-toolbar .e-tbar-btn {
        border-radius: 50%;
        min-height: 30px;
        min-width: 30px;
    }

    #topToolbar {
        top: 0px;
        z-index: 1001;
    }

    .material .e-pv-current-page-number {
        border-width: 1px;
    }

    .e-pv-current-page-number {
        width: 46px;
        height: 28px;
        text-align: center;
    }

    .e-icons {
        font-family: "e-icons";
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        line-height: 1;
        text-transform: none;
    }

    .e-pv-icon::before {
        font-family: 'e-icons';
    }

    .e-pv-icon-search::before {
        font-family: 'e-icons';
        font-size: 12px;
    }

    #topToolbar .e-pv-download-document-icon::before {
        padding-left: 4px;
        content: '\e914';
    }

    #topToolbar .e-pv-print-document-icon::before {
        padding-left: 1px;
        content: '\e917';
    }

    .e-pv-previous-page-navigation-icon::before {
        content: '\e910';
    }

    .e-pv-next-page-navigation-icon::before {
        content: '\e911';
    }

    .e-pv-zoom-out-icon::before {
        content: '\e912';
    }

    .e-pv-zoom-in-icon::before {
        content: '\e91d';
    }

    .e-pv-fit-page::before {
        content: '\e91b';
    }

    .e-pv-open-document-icon::before {
        content: '\e91c';
    }

    @font-face {
        font-family: "e-icons";
        font-style: normal;
        font-weight: normal;
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
    }
</style>
```

N> The custom icons are embedded in the font file referenced in the CSS above, providing a consistent icon library for the toolbar.

**Step 5: Implement toolbar interaction handlers**

Add JavaScript functions to handle toolbar button clicks and coordinate with PDF Viewer operations:

{% tabs %}
{% highlight js tabtitle="Standalone" %}

<script type="text/javascript">
    var currentPageBox
    var matchCase = false;
    var filename;
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.load("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf", null);
        currentPageBox = document.getElementById('currentPage');
        currentPageBox.value = '1';
        document.getElementById('fileUpload').addEventListener('change', readFile, false);
        currentPageBox.addEventListener('keypress', () => {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            var currentPage = document.getElementById('currentPage');
            if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
                event.preventDefault();
                return false;
            } else {
                var currentPageNumber = parseInt((currentPage).value);
                if (event.which === 13) {
                    if (currentPageNumber > 0 && currentPageNumber <= pdfViewer.pageCount) {
                        pdfViewer.navigation.goToPage(currentPageNumber);
                    } else {
                        (currentPage).value = pdfViewer.currentPageNumber.toString();
                    }
                }
                return true;
            }
        });
    }
    function openPage() {
        document.getElementById('fileUpload').click();
    }
    function readFile(evt) {
        var upoadedFiles = evt.target.files;
        var uploadedFile = upoadedFiles[0];
        filename = upoadedFiles[0].name;
        var reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        reader.onload = function () {
            var obj = document.getElementById('pdfviewer').ej2_instances[0];
            var uploadedFileUrl = this.result;
            obj.load(uploadedFileUrl, null);
            obj.fileName = filename;
            currentPageBox = document.getElementById('currentPage');
            currentPageBox.value = '1';
            var pageCount = document.getElementById('totalPage');
            pageCount.textContent = 'of ' + obj.pageCount;
        }
    }
    function pageChanged() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        document.getElementById('currentPage').value = pdfViewer.currentPageNumber;
        updatePageNavigation();
    }
    function onCurrentPageBoxKeypress(event) {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var currentPageBox = document.getElementById('currentPage');
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
            event.preventDefault();
            return false;
        }
        else {
            var currentPageNumber = parseInt(currentPageBox.value);
            if (event.which === 13) {
                if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                    pdfViewer.navigation.goToPage(currentPageNumber);
                }
                else {
                    currentPageBox.value = viewer.currentPageNumber.toString();
                }
            }
            return true;
        }
    }

    function currentPageClicked() {
        var currentPage = document.getElementById('currentPage');
        (currentPage).select();
    }
    function documentLoaded() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var pageCount = document.getElementById('totalPage');
        pageCount.textContent = 'of ' + pdfViewer.pageCount;
        updatePageNavigation();
    }
    function updatePageNavigation() {
        var toolbarObj = document.getElementById('topToolbar').ej2_instances[0];
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (pdfViewer.currentPageNumber === 1) {
            toolbarObj.enableItems(document.getElementById('previousPage'), false);
            toolbarObj.enableItems(document.getElementById('nextPage'), true);
        } else if (pdfViewer.currentPageNumber === pdfViewer.pageCount) {
            toolbarObj.enableItems(document.getElementById('previousPage'), true);
            toolbarObj.enableItems(document.getElementById('nextPage'), false);
        } else {
            toolbarObj.enableItems(document.getElementById('previousPage'), true);
            toolbarObj.enableItems(document.getElementById('nextPage'), true);
        }
    }
    function previousClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToPreviousPage();
    }
    function nextClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToNextPage();
    }
    function printClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.print.print();
    }
    function downloadClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.download();
    }
    function pageFitClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.fitToPage();
    }
    function zoomInClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomIn();
    }
    function zoomOutClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomOut();
    }
</script>

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

<script type="text/javascript">
    var currentPageBox
    var matchCase = false;
    var filename;
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.serviceUrl = window.baseurl + 'api/PdfViewer';
        pdfViewer.load("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf", null);
        currentPageBox = document.getElementById('currentPage');
        currentPageBox.value = '1';
        document.getElementById('fileUpload').addEventListener('change', readFile, false);
        currentPageBox.addEventListener('keypress', () => {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            var currentPage = document.getElementById('currentPage');
            if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
                event.preventDefault();
                return false;
            } else {
                var currentPageNumber = parseInt((currentPage).value);
                if (event.which === 13) {
                    if (currentPageNumber > 0 && currentPageNumber <= pdfViewer.pageCount) {
                        pdfViewer.navigation.goToPage(currentPageNumber);
                    } else {
                        (currentPage).value = pdfViewer.currentPageNumber.toString();
                    }
                }
                return true;
            }
        });
    }
    function openPage() {
        document.getElementById('fileUpload').click();
    }
    function readFile(evt) {
        var upoadedFiles = evt.target.files;
        var uploadedFile = upoadedFiles[0];
        filename = upoadedFiles[0].name;
        var reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        reader.onload = function () {
            var obj = document.getElementById('pdfviewer').ej2_instances[0];
            var uploadedFileUrl = this.result;
            obj.load(uploadedFileUrl, null);
            obj.fileName = filename;
            currentPageBox = document.getElementById('currentPage');
            currentPageBox.value = '1';
            var pageCount = document.getElementById('totalPage');
            pageCount.textContent = 'of ' + obj.pageCount;
        }
    }
    function pageChanged() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        document.getElementById('currentPage').value = pdfViewer.currentPageNumber;
        updatePageNavigation();
    }
    function onCurrentPageBoxKeypress(event) {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var currentPageBox = document.getElementById('currentPage');
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
            event.preventDefault();
            return false;
        }
        else {
            var currentPageNumber = parseInt(currentPageBox.value);
            if (event.which === 13) {
                if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                    pdfViewer.navigation.goToPage(currentPageNumber);
                }
                else {
                    currentPageBox.value = viewer.currentPageNumber.toString();
                }
            }
            return true;
        }
    }

    function currentPageClicked() {
        var currentPage = document.getElementById('currentPage');
        (currentPage).select();
    }
    function documentLoaded() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var pageCount = document.getElementById('totalPage');
        pageCount.textContent = 'of ' + pdfViewer.pageCount;
        updatePageNavigation();
    }
    function updatePageNavigation() {
        var toolbarObj = document.getElementById('topToolbar').ej2_instances[0];
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (pdfViewer.currentPageNumber === 1) {
            toolbarObj.enableItems(document.getElementById('previousPage'), false);
            toolbarObj.enableItems(document.getElementById('nextPage'), true);
        } else if (pdfViewer.currentPageNumber === pdfViewer.pageCount) {
            toolbarObj.enableItems(document.getElementById('previousPage'), true);
            toolbarObj.enableItems(document.getElementById('nextPage'), false);
        } else {
            toolbarObj.enableItems(document.getElementById('previousPage'), true);
            toolbarObj.enableItems(document.getElementById('nextPage'), true);
        }
    }
    function previousClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToPreviousPage();
    }
    function nextClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.navigation.goToNextPage();
    }
    function printClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.print.print();
    }
    function downloadClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.download();
    }
    function pageFitClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.fitToPage();
    }
    function zoomInClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomIn();
    }
    function zoomOutClicked() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.magnification.zoomOut();
    }
</script>

{% endhighlight %}
{% endtabs %}

**Live demo:**
View the complete custom toolbar implementation in action: [PDF Viewer Custom Toolbar Demo](https://document.syncfusion.com/demos/pdf-viewer/asp-net-core/pdfviewer/customtoolbar#/tailwind)

## See also

* [Toolbar customization](./how-to/toolbar-customization)
* [Feature Modules](./feature-module)