---
layout: post
title: Toolbar in ASP.NET MVC PDF Viewer component | Syncfusion
description: Learn all about the toolbar in the Syncfusion ASP.NET MVC PDF Viewer component, including showing or hiding items and customizing the built-in toolbar.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Built-in toolbar in ASP.NET MVC PDF Viewer

The PDF Viewer includes a built-in toolbar for common actions such as page navigation, text search, view mode, download, print, bookmarks, and thumbnails.

The following table lists the built-in toolbar items and their actions:

| Option | Description |
|---|---|
| OpenOption | This option provides an action to load the PDF documents to the PDF Viewer.|
| PageNavigationTool | This option provides an action to navigate pages in the PDF Viewer. It contains GoToFirstPage, GoToLastPage, GotoPage, GoToNext, and GoToLast tools.|
| MagnificationTool | This option provides an action to magnify pages with predefined or user-defined zoom factors in the PDF Viewer. Contains ZoomIn, ZoomOut, Zoom, FitPage, and FitWidth tools.|
| PanTool | This option provides an action for panning the pages in the PDF Viewer.|
| SelectionTool | This option provides an action to enable or disable text selection in the PDF Viewer.|
| SearchOption | This option provides an action to search for text in PDF documents.|
| PrintOption | This option provides an action to print the PDF document loaded in the PDF Viewer.|
| DownloadOption | This option provides an action to download the PDF document loaded in the PDF Viewer.|
| UndoRedoTool | This tool provides options to undo and redo the annotation actions performed in the PDF Viewer.|
| AnnotationEditTool | This tool provides options to enable or disable the edit mode of annotation in the PDF Viewer.|

## Show or hide the built-in toolbar

The PDF Viewer provides options to show or hide the complete built-in toolbar. You can do this in two ways:

* Show or hide the toolbar using the enableToolbar API:

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

* Show or hide the toolbar using showToolbar:

{% tabs %}
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

- Add: Define new items using **CustomToolbarItemModel** and include them with existing items via the [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property. Handle clicks in the toolbarClick event.

- Show/Hide: Show or hide existing items using the [**ToolbarSettings**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property. Predefined toolbar items are available via [`ToolbarItem`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems).

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
        }; align: 'left'
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
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-designer.pdf").ToolbarClick("toolbarClick").Created("onLoadedPage").DocumentLoad("documentLoaded").FormFieldAdd("formFieldAdd").ToolbarSettings(toolbarSettings).Render()
    </div>
</div>

<script type="text/javascript">
    function onLoadedPage(args) {
        console.log(args);
    }
    function documentLoaded(args) {
        console.log(args);
    }
    function formFieldAdd(args) {
        console.log(args);
    }
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

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)

## Custom toolbar

The PDF Viewer exposes APIs for the interactions available in the built-in toolbar. Using these, you can build your own UI for toolbar actions at the application level by hiding the built-in toolbar. Follow these steps to create a custom toolbar for the PDF Viewer:

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Add an EJ2 Toolbar to perform primary actions like Open, Previous page, Next page, Go to page, Print, and Download using the following code snippet:

```html
@using Syncfusion.EJ2.Navigations;

@Html.EJS().Toolbar("topToolbar").Height("56px").Items(new List<ToolbarItem> {
new ToolbarItem { Type = ItemType.Button, PrefixIcon = "e-pv-open-document-icon",TooltipText = "Open",Align=ItemAlign.Left,Click="openFile"},
new ToolbarItem { Type = ItemType.Button, PrefixIcon = "e-pv-previous-page-navigation-icon",TooltipText = "Previous Page",Align=ItemAlign.Center,Click="previousClicked",Id="previousPage"},
new ToolbarItem { Type = ItemType.Button, PrefixIcon = "e-pv-next-page-navigation-icon", TooltipText = "Next Page",Align=ItemAlign.Center,Click="nextClicked",Id="nextPage"},
new ToolbarItem {Template="<div class=''><input type='text' class='e-input-group e-pv-current-page-number' id='currentPage'/></div>" ,PrefixIcon = "e-pv-next-page-navigation-icon", TooltipText = "Page Number",Align=ItemAlign.Center},
new ToolbarItem { Type = ItemType.Input, Template="<div class=''><span class='e-pv-total-page-number' id='totalPage'>of 0</span></div>" , PrefixIcon = "e-pv-next-page-navigation-icon", TooltipText = "Page Number",Click="currentPageClicked",Align=ItemAlign.Center},
new ToolbarItem { Type = ItemType.Button,  PrefixIcon = "e-pv-print-document-icon" ,TooltipText = "Print",Align=ItemAlign.Right,Click="printClicked"},
new ToolbarItem { Type = ItemType.Button,  PrefixIcon = "e-pv-download-document-icon" ,TooltipText = "Download",Align=ItemAlign.Right,Click="downloadClicked"},
}).Render()
<input type ="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;">
```

**Step 3:** Add an EJ2 Toolbar to perform magnification actions in the PDF Viewer using the following code snippet:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html
@Html.EJS().PdfViewer("pdfviewer")
.EnableToolbar(false).EnableThumbnail(false)
.DocumentLoad("documentLoaded").PageChange("pageChanged")
.DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```html
@Html.EJS().PdfViewer("pdfviewer")
.ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/"))
.EnableToolbar(false).EnableThumbnail(false)
.DocumentLoad("documentLoaded").PageChange("pageChanged")
.DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
```
{% endhighlight %}
{% endtabs %}

**Step 4:** Add the following styles to achieve the custom toolbar styling:

```html

@Html.EJS().Toolbar("magnificationToolbar").Items(new List<ToolbarItem> {
new ToolbarItem { Type = ItemType.Button, PrefixIcon = "e-pv-fit-page", TooltipText = "Fit to page",Click="pageFitClicked"},
new ToolbarItem { Type = ItemType.Button, PrefixIcon = "e-pv-zoom-in-icon",TooltipText = "Zoom in",Click="zoomInClicked" },
new ToolbarItem { Type = ItemType.Button, PrefixIcon = "e-pv-zoom-out-icon", TooltipText = "Zoom out",Click="zoomOutClicked"},
}).Render()

```

**Step 5:** Add the following style to achieve the custom toolbar styling,

```html
<style>
    #pdfviewer {
        display: block;
        height: 641px;
    }
    #magnificationToolbar {
        background: transparent;
        height: auto;
        width: 200px;
        position: absolute;
        z-index: 1001;
        top: calc(100% - 110px);
        left: calc(100% - 120px);
        transform: rotate(90deg);
        border-width: 0px;
    }
    .e-pv-zoom-out-icon {
        transform: rotate(-90deg);
    }
    .material .e-pv-current-page-number {
        border-width: 1px;
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
    .e-pv-download-document-icon::before {
        content: '\e914';
    }

    .e-pv-print-document-icon::before {
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
    @@font-face {
        font-family: "e-icons";
        font-style: normal;
        font-weight: normal;
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
    }
</style>
```

N> The icons are embedded in the font file used in the previous code snippet.

**Step 5:** Add the following scripts to perform user interactions in the PDF Viewer:

```html
<script type="text/javascript">
    var currentPageBox;
    var matchCase = false;
    var filename;
    window.onload = function () {
        currentPageBox = document.getElementById('currentPage');
        currentPageBox.value = '1';
        document.getElementById('fileUpload').addEventListener('change', readFile, false);
        currentPageBox.addEventListener('keypress', () => {
            var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
            var currentPage = document.getElementById('currentPage');
            if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
                event.preventDefault();
                return false;
            }
            else {
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
    function openFile() {
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
            var currentPageBox = document.getElementById('currentPage');
            currentPageBox.value = '1';
            var pageCount = document.getElementById('totalPage');
            pageCount.textContent = 'of ' + obj.pageCount;
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
    function pageChanged() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var currentPage = document.getElementById('currentPage');
        (currentPage).value = pdfViewer.currentPageNumber;
        updatePageNavigation();
    }
    function onCurrentPageBoxKeypress(event) {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var currentPageBox = document.getElementById('currentPage');
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
            event.preventDefault();
            return false;
        }
        else {
            var currentPageNumber = parseInt(currentPageBox.value);
            if (event.which === 13) {
                if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                    viewer.navigation.goToPage(currentPageNumber);
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
    function updateZoomButtons() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        var toolbarObj = document.getElementById('topToolbar').ej2_instances[0];
        if (pdfViewer.zoomPercentage <= 50) {
            toolbarObj.enableItems(document.getElementById('zoomIn'), true);
            toolbarObj.enableItems(document.getElementById('zoomOut'), false);
            toolbarObj.enableItems(document.getElementById('fitPage'), true);
        } else if (viewer.zoomPercentage >= 400) {
            toolbarObj.enableItems(document.getElementById('zoomIn'), false);
            toolbarObj.enableItems(document.getElementById('zoomOut'), true);
            toolbarObj.enableItems(document.getElementById('fitPage'), true);
        } else {
            toolbarObj.enableItems(document.getElementById('zoomIn'), true);
            toolbarObj.enableItems(document.getElementById('zoomOut'), true);
            toolbarObj.enableItems(document.getElementById('fitPage'), true);
        }
    }
</script>

```

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Create%20Custom%20Toolbar)

## See also

* [Toolbar customization](./how-to/toolbar-customization)
* [Feature Modules](./feature-module)