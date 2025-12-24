---
layout: post
title: Toolbar in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Toolbar in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Built-In Toolbar in JavaScript Pdfviewer control

The PDF Viewer comes with a powerful built-in toolbar to execute important actions such as page navigation, text search,view mode,download,print,bookmark, and thumbnails.

The following table shows built-in toolbar items and its actions:-

| Option | Description |
|---|---|
| OpenOption | This option provides an action to load the PDF documents to the PDF Viewer.|
| PageNavigationTool | This option provides an action to navigate the pages in the PDF Viewer. It contains GoToFirstPage,GoToLastPage,GotoPage,GoToNext, and GoToLast tools.|
| MagnificationTool | This option provides an action to magnify the pages either with predefined or user defined zoom factors in the PDF Viewer. Contains ZoomIn, ZoomOut, Zoom, FitPage and FitWidth tools|
| PanTool |This option provides an action for panning the pages in the PDF Viewer.|
| SelectionTool |This option provides an action to enable/disable the text selection in the PDF Viewer.|
| SearchOption |This option provides an action to search a word in the PDF documents.|
| PrintOption |This option provides an action to print the PDF document being loaded in the PDF Viewer.|
| DownloadOption |This Download option provides an action to download the PDF document that has been loaded in the PDF Viewer.|
| UndoRedoTool | This tool provides options to undo and redo the annotation actions performed in the PDF Viewer.|
| AnnotationEditTool | This tool provides options to enable or disable the edit mode of annotation in the PDF Viewer.|
| FormDesignerEditTool | This tool provides options to enable or disable the edit mode of form fields in the PDF Viewer.|

## Show/Hide the default toolbar

The PDF Viewer has an option to show or hide the complete default toolbar. You can achieve this by using following two ways.,

```html
{% raw %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Essential JS 2</title>
<!-- Essential JS 2 fabric theme -->
<link href="{{:CDN_LINK}}ej2-pdfviewer/styles/fabric.css" rel="stylesheet" type="text/css"/>
<!-- Essential JS 2 PDF Viewer's global script -->
<script src="{{:CDN_LINK}}dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
<!--element which is going to render-->
<div id='container'>
<div id='PdfViewer' style="height:500px;width:100%;">
</div>
</div>
</body>
</html>
{% endraw %}
```

* **Show/Hide toolbar using enableToolbar API as in the following code snippet**

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer#serviceurl) in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-hide-cs1" %}

* **Show/Hide toolbar using showToolbar as in the following code snippet**

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-method-cs1" %}

## Show/Hide the default toolbaritem

The PDF Viewer has an option to show or hide these grouped items in the default toolbar.

* **Show/Hide toolbaritem using toolbarSettings as in the following code snippet.**

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-items-cs1" %}

* **Show/Hide toolbaritem using showToolbaritem as in the following code snippet**

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-items-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.html` file
`serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'`

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-toolbar/toolbar-items-method-cs1" %}

## Customize Built-In Toolbar

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [**CustomToolbarItemModel**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/customToolbarItem) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/javascript/documentation/api/toolbar/clickEventArgs).

* Show, Hide - Existing items can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarItem).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar#enabletoolbaritem)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
 var toolItem1 = {
    prefixIcon: 'e-icons e-paste',
    id: 'print',
    tooltipText: 'Custom toolbar item',
};
var toolItem2  = {
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
    template: new ej.inputs.TextBox({ width: 125, placeholder: 'Type Here', created: OnCreateSearch })
}
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
                    resourceUrl:'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib',
                    toolbarSettings : { toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm'] }
               });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);

//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
    if (args.item && args.item.id === 'print') {
        pdfviewer.printModule.print();
    } else if (args.item && args.item.id === 'download') {
        pdfviewer.download();
    }
};
function OnCreateSearch() {
    this.addIcon('prepend', 'e-icons e-search');
}

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var toolItem1 = {
    prefixIcon: 'e-icons e-paste',
    id: 'print',
    tooltipText: 'Custom toolbar item',
};
var toolItem2  = {
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
    template: new ej.inputs.TextBox({ width: 125, placeholder: 'Type Here', created: OnCreateSearch })
}
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                    toolbarSettings : { toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm'] }
               });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);

//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
    if (args.item && args.item.id === 'print') {
        pdfviewer.printModule.print();
    } else if (args.item && args.item.id === 'download') {
        pdfviewer.download();
    }
};
function OnCreateSearch() {
    this.addIcon('prepend', 'e-icons e-search');
}

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
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel`` in the context of Syncfusion PDF Viewer. When configuring the toolbar using the `ToolbarSettings`` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing toolbar items, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/customize%20existing%20toolbar)

## Custom Toolbar

The PDF Viewer provides API for user interactions options provided in it's built-in toolbar. Using this we can create our own User Interface for toolbar actions in application level by hiding the default toolbar. The following steps are used to create the custom toolbar for PDF Viewer,

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create simple PDF Viewer sample.

**Step 2:** Now, add an HTML div element to render the PDF Viewer with custom toolbar using the following code.

```html
{% raw %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
        <title>Essential JS 2</title>
        <link href="{{:CDN_LINK}}ej2-base/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-pdfviewer/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-buttons/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-popups/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-navigations/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-dropdowns/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-lists/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-inputs/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-splitbuttons/styles/material.css" rel="stylesheet" />
        <link href="{{:CDN_LINK}}ej2-notifications/styles/material.css" rel="stylesheet" />
        <link href="index.css" rel="stylesheet" />
        <script src="index.js" type="text/javascript"></script>
     </head>
<body>
    <div id="container" style="top:0px">...</div>
    <div id="topToolbar" style="top:0px"></div>
    <div id="magnificationToolbar" ></div>
    <div id='viewerParent' style="height:640px; width:100%;">
    <div id="pdfViewer" style="height:640px; width:100%;"></div>
    </div>
    <input type ="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;"/>
    <div id='popup'></div>
    <div id='textSearchBox'>
    <div id='searchContainer'>
    <span class="e-input-group e-custom-search-input">
    <input type="text" id="searchInput" placeholder="Find in document" class="e-input" />
    <span class="e-input-group-icon e-pv-search-icon" id="searchBtn"></span>
    </span>
    <button id="previousSearch" class="search-button" style="margin-left:5px"></button>
    <button id="nextSearch" class="search-button"></button>
    </div>
    <div id="matchCaseContainer" style="margin-top:8px">
    <input id="matchCase" type="checkbox" />
    </div>
    </div>
    </body>
</html>
{% endraw %}
```

**Step 3:** Hide the default toolbar of PDF Viewer using below code snippet,

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
```javascript
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enableToolbar: false,
                    enableThumbnail: false,
                    documentPath: "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');
```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```javascript
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enableToolbar: false,
                    enableThumbnail: false,
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');
```
{% endhighlight %}
{% endtabs %}

**Step 4:** Add EJ2 Toolbar for perform primary actions like Open, Previous page, Next page, Go to page,Print and Download using the following code snippet,

```javascript

  var toolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openClicked },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    var magnificationToolbar = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon' , id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');

```

**Step 5:** Add the following style to achieve the custom toolbar styling,

```
<style>
        #magnificationToolbar {
        background: transparent;
        height: auto;
        min-height: 56px;
        width: 200px;
        border: none;
        position: absolute;
        z-index: 1001;
        top: calc(100% - 110px);
        left: calc(100% - 120px);
        transform: rotate(90deg);
    }

    div#magnificationToolbar.e-toolbar .e-toolbar-items {
        background: transparent;
    }

    #magnificationToolbar.e-toolbar .e-tbar-btn {
        border-radius: 50%;
        min-height: 30px;
        min-width: 30px;
        border: 1px solid #c8c8c8;
        transform: rotate(90deg);
    }

    #topToolbar {
        top: 0px;
        z-index: 1001;
    }

    .e-bookmark-popup {
        height: 300px;
        max-width: 300px;
    }

    .e-text-search-popup {
        height: 104px;
        max-width: 367px;
    }

    .e-text-search-popup .e-footer-content button.e-btn, .e-bookmark-popup .e-footer-content button.e-btn {
        padding: 0;
        border: 0;
    }

    .e-custom-search-input {
        width: 234px;
    }

    .e-text-search-popup .e-footer-content, .e-bookmark-popup .e-footer-content {
        padding: 0;
        height: 0;
    }

    .search-button, .search-button:disabled, .search-button:focus, .search-button:hover  {
        background: transparent;
        box-shadow: none;
        border: 0px;
    }

    #popup .e-dlg-content {
        padding-left: 0;
        padding-bottom: 0;
    }

    .e-pv-bookmarks {
        min-width: 234px;
    }

    .e-pv-current-page-number {
        width: 46px;
        height: 28px;
        text-align: center;
    }

    .material .e-pv-current-page-number {
        border-width: 1px;
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
    .e-pv-fit-page-icon::before {
        content: '\e91b';
    }
    .e-pv-bookmark-icon::before {
        content: '\e915';
    }

    .e-pv-text-search-icon::before {
        content: '\e916';
    }

    .e-pv-search-icon::before {
        content: '\e916';
        font-family: 'e-icons';
    }

    .e-pv-previous-search::before {
        content: '\e918';
        font-family: 'e-icons';
    }

    .e-pv-next-search-btn::before {
        content: '\e919';
        font-family: 'e-icons';
    }

    .e-pv-open-document::before {
        content: '\e91c';
        font-family: 'e-icons';
    }

    .e-pv-search-close {
        content: '\e91a';
        font-family: 'e-icons';
    }

    @font-face {
        font-family: "e-icons";
        font-style: normal;
        font-weight: normal;
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
    }
</style>
```

>The icons are embedded in the font file used in above code snippet.

**Step 6:** Add the following scripts for performing user interaction in PDF Viewer in code behind

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```javascript

var inputTemplate = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
var totalPageNum = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
var isBookmarkOpen = false;
var isBookmarkClick = false;
var isTextSearchBoxOpen = false;
var bookmarkPopup;
var textSearchPopup;
var toolbarObj;
var viewer;
var currentPageBox;
var searchInput;
var searchButton;
var openDocument;
var matchCase = false;
var fileInputElement;
var filename;

function previousClicked(args) {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}
function hidePopups() {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}
function bookmarkClicked() {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        var bookmarkDetails = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            var bookmarks = bookmarkDetails.bookmarks.bookMark;
            var treeObj = new ej.navigations.TreeView({
                fields: {
                    dataSource: bookmarks,
                    id: 'Id',
                    parentID: 'Pid',
                    text: 'Title',
                    hasChildren: 'HasChild',
                }, nodeSelected: nodeClick
            });
            treeObj.appendTo('#bookmarkview');
            bookmarkPopup.show();
            isBookmarkOpen = true;
            isBookmarkClick = true;
        }
        else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    }
    else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }
    }
}
function nextClicked(args) {
    hidePopups();
    viewer.navigation.goToNextPage();
}
function searchClicked(args) {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    }
    else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}
function printClicked(args) {
    hidePopups();
    viewer.print.print();
}
function downloadClicked(args) {
    hidePopups();
    viewer.download();
}
function pageFitClicked(args) {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}
function zoomInClicked(args) {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}
function zoomOutClicked(args) {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function readFile(args) {
    // tslint:disable-next-line
    var upoadedFiles = args.target.files;
    if (args.target.files[0] !== null) {
        var uploadedFile = upoadedFiles[0];
        filename = upoadedFiles[0].name;
        if (uploadedFile) {
            var reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload = function (e) {
                var uploadedFileUrl = e.currentTarget.result;
                viewer.load(uploadedFileUrl, null);
                currentPageBox.value = '1';
                document.getElementById("bookmarkview").innerHTML = "";
                isBookmarkOpen = false;
                viewer.fileName = filename;
            };
        }
    }
}

function openClicked() {
    document.getElementById('fileUpload').click();
}
function onCurrentPageBoxKeypress(event) {
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
function onCurrentPageBoxClicked() {
    currentPageBox.select();
    currentPageBox.focus();
}
function updatePageNavigation() {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
    else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    }
    else {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
}
function updateZoomButtons() {
    if (viewer.zoomPercentage <= 50) {
        toolbarObj.enableItems(document.getElementById('zoomIn'), true);
        toolbarObj.enableItems(document.getElementById('zoomOut'), false);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
    else if (viewer.zoomPercentage >= 400) {
        toolbarObj.enableItems(document.getElementById('zoomIn'), false);
        toolbarObj.enableItems(document.getElementById('zoomOut'), true);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
    else {
        toolbarObj.enableItems(document.getElementById('zoomIn'), true);
        toolbarObj.enableItems(document.getElementById('zoomOut'), true);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
}
function nodeClick(args) {
    var bookmarksDetails = viewer.bookmark.getBookmarks();
    var bookmarksDestination = bookmarksDetails.bookmarksDestination;
    var bookid = Number(args.nodeData.id);
    var pageIndex = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    var Y = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}
function searchInputKeypressed(event) {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}
function searchClickHandler() {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    }
    else if (searchButton.classList.contains('e-pv-search-close')) {
        searchInput.value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}
function initiateTextSearch() {
    var searchString = searchInput.value;
    viewer.textSearch.searchText(searchString, matchCase);
}
function previousSearchClicked() {
    var searchString = searchInput.value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}
function nextSearchClicked() {
    var searchString = searchInput.value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}
function checkBoxChanged(args) {
    if (args.checked) {
        matchCase = true;
    }
    else {
        matchCase = false;
    }
    initiateTextSearch();
}
function enablePrevButton(isEnable) {
    var previousSearchButton = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    }
    else {
        previousSearchButton.disabled = true;
    }
}
function enableNextButton(isEnable) {
    var nextSearchButton = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    }
    else {
        nextSearchButton.disabled = true;
    }
}
function updateSearchInputIcon(isEnable) {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    }
    else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}
this.default = function () {
    toolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openClicked },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: totalPageNum, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    var magnificationToolbar = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon' , id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new ej.pdfviewer.PdfViewer({
        enableToolbar: true,
        enableThumbnail: true,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf'
    });
   ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    currentPageBox.value = '1';
    searchInput = document.getElementById('searchInput');
    openDocument = document.getElementById('fileupload');
    bookmarkPopup = new ej.popups.Dialog({
        showCloseIcon: true, header: "Bookmarks", closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: function () {
           isBookmarkOpen = false;
        }
    });
    bookmarkPopup.appendTo('#popup');
    textSearchPopup = new ej.popups.Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');
    var previousSearch = new ej.buttons.Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');
    var nextSearch = new ej.buttons.Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');
    var matchCaseCheck = new ej.buttons.CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');
    viewer.pageChange = function (args) {
        currentPageBox.value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };
    viewer.documentLoad = function (args) {

        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', function () { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', function () { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    searchButton.addEventListener('click', searchClickHandler);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);
};

```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

```javascript

var inputTemplate = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
var totalPageNum = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
var isBookmarkOpen = false;
var isBookmarkClick = false;
var isTextSearchBoxOpen = false;
var bookmarkPopup;
var textSearchPopup;
var toolbarObj;
var viewer;
var currentPageBox;
var searchInput;
var searchButton;
var openDocument;
var matchCase = false;
var fileInputElement;
var filename;

function previousClicked(args) {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}
function hidePopups() {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}
function bookmarkClicked() {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        var bookmarkDetails = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            var bookmarks = bookmarkDetails.bookmarks.bookMark;
            var treeObj = new ej.navigations.TreeView({
                fields: {
                    dataSource: bookmarks,
                    id: 'Id',
                    parentID: 'Pid',
                    text: 'Title',
                    hasChildren: 'HasChild',
                }, nodeSelected: nodeClick
            });
            treeObj.appendTo('#bookmarkview');
            bookmarkPopup.show();
            isBookmarkOpen = true;
            isBookmarkClick = true;
        }
        else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    }
    else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }
    }
}
function nextClicked(args) {
    hidePopups();
    viewer.navigation.goToNextPage();
}
function searchClicked(args) {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    }
    else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}
function printClicked(args) {
    hidePopups();
    viewer.print.print();
}
function downloadClicked(args) {
    hidePopups();
    viewer.download();
}
function pageFitClicked(args) {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}
function zoomInClicked(args) {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}
function zoomOutClicked(args) {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function readFile(args) {
    // tslint:disable-next-line
    var upoadedFiles = args.target.files;
    if (args.target.files[0] !== null) {
        var uploadedFile = upoadedFiles[0];
        filename = upoadedFiles[0].name;
        if (uploadedFile) {
            var reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload = function (e) {
                var uploadedFileUrl = e.currentTarget.result;
                viewer.load(uploadedFileUrl, null);
                currentPageBox.value = '1';
                document.getElementById("bookmarkview").innerHTML = "";
                isBookmarkOpen = false;
                viewer.fileName = filename;
            };
        }
    }
}

function openClicked() {
    document.getElementById('fileUpload').click();
}
function onCurrentPageBoxKeypress(event) {
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
function onCurrentPageBoxClicked() {
    currentPageBox.select();
    currentPageBox.focus();
}
function updatePageNavigation() {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
    else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    }
    else {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
}
function updateZoomButtons() {
    if (viewer.zoomPercentage <= 50) {
        toolbarObj.enableItems(document.getElementById('zoomIn'), true);
        toolbarObj.enableItems(document.getElementById('zoomOut'), false);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
    else if (viewer.zoomPercentage >= 400) {
        toolbarObj.enableItems(document.getElementById('zoomIn'), false);
        toolbarObj.enableItems(document.getElementById('zoomOut'), true);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
    else {
        toolbarObj.enableItems(document.getElementById('zoomIn'), true);
        toolbarObj.enableItems(document.getElementById('zoomOut'), true);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
}
function nodeClick(args) {
    var bookmarksDetails = viewer.bookmark.getBookmarks();
    var bookmarksDestination = bookmarksDetails.bookmarksDestination;
    var bookid = Number(args.nodeData.id);
    var pageIndex = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    var Y = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}
function searchInputKeypressed(event) {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}
function searchClickHandler() {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    }
    else if (searchButton.classList.contains('e-pv-search-close')) {
        searchInput.value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}
function initiateTextSearch() {
    var searchString = searchInput.value;
    viewer.textSearch.searchText(searchString, matchCase);
}
function previousSearchClicked() {
    var searchString = searchInput.value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}
function nextSearchClicked() {
    var searchString = searchInput.value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}
function checkBoxChanged(args) {
    if (args.checked) {
        matchCase = true;
    }
    else {
        matchCase = false;
    }
    initiateTextSearch();
}
function enablePrevButton(isEnable) {
    var previousSearchButton = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    }
    else {
        previousSearchButton.disabled = true;
    }
}
function enableNextButton(isEnable) {
    var nextSearchButton = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    }
    else {
        nextSearchButton.disabled = true;
    }
}
function updateSearchInputIcon(isEnable) {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    }
    else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}
this.default = function () {
    toolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openClicked },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: totalPageNum, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    var magnificationToolbar = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon' , id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new ej.pdfviewer.PdfViewer({
        enableToolbar: true,
        enableThumbnail: true,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf',
        serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
    });
   ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    currentPageBox.value = '1';
    searchInput = document.getElementById('searchInput');
    openDocument = document.getElementById('fileupload');
    bookmarkPopup = new ej.popups.Dialog({
        showCloseIcon: true, header: "Bookmarks", closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: function () {
           isBookmarkOpen = false;
        }
    });
    bookmarkPopup.appendTo('#popup');
    textSearchPopup = new ej.popups.Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');
    var previousSearch = new ej.buttons.Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');
    var nextSearch = new ej.buttons.Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');
    var matchCaseCheck = new ej.buttons.CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');
    viewer.pageChange = function (args) {
        currentPageBox.value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };
    viewer.documentLoad = function (args) {

        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', function () { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', function () { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    searchButton.addEventListener('click', searchClickHandler);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);
};

```
{% endhighlight %}
{% endtabs %}

Sample :
[https://document.syncfusion.com/demos/pdf-viewer/javascript-es5/#/tailwind3/pdfviewer/custom-toolbar.html](https://document.syncfusion.com/demos/pdf-viewer/javascript-es5/#/tailwind3/pdfviewer/custom-toolbar.html)

## See also

* [Toolbar customization](./how-to/customization)
* [Feature Modules](./feature-module)