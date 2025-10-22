---
layout: post
title: Custom Toolbar in React PDF Viewer Component | Syncfusion
description: Learn here all about custom toolbar in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar

The PDF Viewer provides APIs for user interaction options available in its built-in toolbar. Using these, you can create your own custom user interface for toolbar actions at the application level by hiding the default toolbar.

Follow these steps to create a custom toolbar for the PDF Viewer:

**Step 1: Create a simple PDF Viewer sample.**

Follow the steps provided in the [getting started](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/) guide to create a basic PDF Viewer sample.

**Step 2: Add HTML elements for the custom toolbar.**

Add HTML `div` elements to act as containers for the custom toolbar actions:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>
<body>
 <div id="topToolbar" style="top:0px"></div>
        <div id="magnificationToolbar" ></div>
        <div id="pdfViewer" style="height:640px; width:100%;"></div>
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
```

**Step 3: Import and inject the necessary modules.**

Import and inject the modules required for the custom toolbar functionality:

```ts
import {
    PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print,
    IPageChangeEventArgs, ILoadEventArgs, TextSearch, TextSelection
} from '@syncfusion/ej2-pdfviewer';
import { Toolbar as Tool, TreeView, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { ClickEventArgs, Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection);

```

**Step 4: Hide the default toolbar of the PDF Viewer.**

Hide the default toolbar using `enableToolbar` and `enableThumbnail` properties:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={viewer}
      enableToolbar={false}
      enableThumbnail={false}
      documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
      style={{ height: '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);
```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  const viewer = React.useRef(null);
  return (
    <PdfViewerComponent
      id="PdfViewer"
      ref={viewer}
      enableToolbar={false}
      enableThumbnail={false}
      serviceUrl={'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'}
      documentPath="https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf"
      style={{ height: '640px' width:'100%' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);
```
{% endhighlight %}
{% endtabs %}

**Step 5: Add EJ2 Toolbar for primary actions.**

Add Syncfusion EJ2 Toolbar components to perform primary actions like Open, Previous page, Next page, Go to page, Print, and Download:

```ts
   let toolbarObj: Tool = new Tool({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openDocument.bind(this) },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');

```

**Step 6: Add EJ2 Toolbar for magnification actions.**

Add Syncfusion EJ2 Toolbar components to perform magnification actions in the PDF Viewer:

```ts

    let magnificationToolbar: Tool = new Tool({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon', id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');

```

**Step 7: Add custom toolbar styling.**

Add the following CSS styles to achieve the desired custom toolbar styling:

```css
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
        src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj8wS0QAAAEoAAAAVmNtYXDSeNLMAAABuAAAAFZnbHlmok0NtwAAAjAAAAPkaGVhZBN3pEcAAADQAAAANmhoZWEHrwNhAAAArAAAACRobXR4NsgAAAAAAYAAAAA4bG9jYQdkBmQAAAIQAAAAHm1heHABHAAwAAABCAAAACBuYW1lD0oZXgAABhQAAALBcG9zdFG4mE4AAAjYAAAAyAABAAADUv9qAFoEAAAA/+gEAAABAAAAAAAAAAAAAAAAAAAADgABAAAAAQAAxsly1F8PPPUACwPoAAAAANgsr7EAAAAA2CyvsQAAAAAEAAQAAAAACAACAAAAAAAAAAEAAAAOACQABAAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPqAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6RDpHQNS/2oAWgQAAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAEIAAAAGAAQAAQAC6RLpHf//AADpEOkU//8AAAAAAAEABgAKAAAAAQACAAMABQAGAAcACAAJAAoACwAMAA0AAAAAAAAAAUACoAZACkAL4A7gEuAVwBcAGEAZ4ByAHyAAAAAQAAAAAD6gMuAAUAAAkBBwkBJwIAAet0/on+iXQDL/4VcwF3/olzAAEAAAAAA+oDLgAFAAATCQEXCQGJAXcBd3T+Ff4VAy/+iQF3c/4VAesAAAAAAwAAAAAEAAQAAAMADwAbAAABITUhBQ4BBy4BJz4BNx4BBRYAFzYANyYAJwYAAQACAP4AAoAE2aOj2QQE2aOj2fyEBgEh2dkBIQYG/t/Z2f7fAcCAQKPZBATZo6PZBATZo9n+3wYGASHZ2QEhBgb+3wAAAAADAAAAAAQABAAACwAXACMAAAEjFTMVMzUzNSM1IwEOAQcuASc+ATceAQUWABc2ADcmACcGAAHAwMCAwMCAAcAE2aOj2QQE2aOj2fyEBgEh2dkBIQYG/t/Z2f7fAkCAwMCAwP8Ao9kEBNmjo9kEBNmj2f7fBgYBIdnZASEGBv7fAAIAAAAAAwAEAAADAAoAADEhNSEBIQkBIREhAwD9AAEA/wABgAGA/wD/AIACAP6AAYABgAACAAAAAANABAAADgAaAAABMh4CFRElBRE0Nz4BMycGFRElBRE0JiMhIgKdCwwHBf7g/uAJBAwKdC8BoAGgX0T+BkQDgAYGCwr9YHZ2AqAOCQQGUS9D/KGrqwNfRlsAAAACAAAAAAP/BAAACwAjAAABDgEHLgEnPgE3HgEFHgEXMjY/ARcVATcBIyc3PgE1LgEnDgECgAOQbW2QAwOQbW2Q/YME2aNGfDIDJAEEYf78MyMCKi4E2aOj2QKAbZADA5BtbZADA5Bto9kELioDJDP+/GEBBCQDMnxGo9kEBNkAAAQAAAAABAAEAAADAAcAFQAZAAABFSE1JRUjNSERMxUhNTMRLgEnIQ4BNyE1IQLA/oACQID9AMACgMABSDf9ADdIvwKA/YABwMDAwICA/sDAwAFAN0gBAUmKwAAAAQAAAAACQAQAAAUAABEBNwkBJwHsU/6HAXpSAmD+YGIBPgE+YgAAAAEAAAAAAkAEAAAFAAARCQEXCQEBev6HUwHs/hMDnv7C/sJiAaABoAABAAAAAAKABAAACwAAERcHFzcXNyc3Jwcn9fVM9PVL9PRL9fQDtfX0TPX1TPT0TPT0AAAABAAAAAAD8APwAAUACwARABcAACEzNTM1IQUzFTMRISUhNSM1IwUjFSERIwJ2fvz+hv2K/H7+hgJ2AXr8fv6G/AF6fvx+fvwBevx+/Px+AXoAAAAAAgAAAAAEAAQAAAMAFgAAAREhEScGFREUFhchPgE1ETQmIyEnIQYDgP0AYh48LQMuLTw8Lf5pa/7ULQMA/gACAN8eLf1YLTwDAzwtAigvPYACAAAAAAASAN4AAQAAAAAAAAABAAAAAQAAAAAAAQAUAAEAAQAAAAAAAgAHABUAAQAAAAAAAwAUABwAAQAAAAAABAAUADAAAQAAAAAABQALAEQAAQAAAAAABgAUAE8AAQAAAAAACgAsAGMAAQAAAAAACwASAI8AAwABBAkAAAACAKEAAwABBAkAAQAoAKMAAwABBAkAAgAOAMsAAwABBAkAAwAoANkAAwABBAkABAAoAQEAAwABBAkABQAWASkAAwABBAkABgAoAT8AAwABBAkACgBYAWcAAwABBAkACwAkAb8gY3VzdG9tLXRvb2xiYXJbMTkwOF1SZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWMMUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
    }
</style>
```

> The icons are embedded in the font file used in the above code snippet.

**Step 8: Add scripts for PDF Viewer user interaction.**

Add the following scripts for handling user interactions with the custom toolbar:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
```ts

import {
    PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print,
    IPageChangeEventArgs, ILoadEventArgs, TextSearch, TextSelection
} from '@syncfusion/ej2-pdfviewer';
import { Toolbar as Tool, TreeView, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { ClickEventArgs, Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection);

/**
 * Default PdfViewer sample
 */

let inputTemplate: string = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
let ele: string = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
let isBookmarkOpen: boolean = false;
let isBookmarkClick: boolean = false;
let isTextSearchBoxOpen: boolean = false;
let bookmarkPopup: Dialog;
let textSearchPopup: Dialog;
let toolbarObj: Tool;
let viewer: PdfViewer;
let currentPageBox: HTMLElement;
let searchInput: HTMLElement;
let searchButton: HTMLElement;
let matchCase: boolean = false;

function previousClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}

function hidePopups(): void {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}

function bookmarkClicked(): void {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        let bookmarkDetails: any = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            let bookmarks: any = bookmarkDetails.bookmarks.bookMark;
            let treeObj: TreeView = new TreeView({
                fields:
                {
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
        } else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    } else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }
    }
}

function nextClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToNextPage();
}

function searchClicked(args: ClickEventArgs): void {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    } else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}

function printClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.print.print();
}

function downloadClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.download();
}

function pageFitClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}

function zoomInClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}

function zoomOutClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function onCurrentPageBoxKeypress(event: KeyboardEvent): boolean {
    if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
        event.preventDefault();
        return false;
    } else {
        // tslint:disable-next-line:radix
        let currentPageNumber: number = parseInt((currentPageBox as HTMLInputElement).value);
        if (event.which === 13) {
            if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                viewer.navigation.goToPage(currentPageNumber);
            } else {
                (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
            }
        }
        return true;
    }
}

function onCurrentPageBoxClicked(): void {
    (currentPageBox as HTMLInputElement).select();
    (currentPageBox).focus();
}

function  readFile(args:  any):  void  {
    // tslint:disable-next-line
    let  upoadedFiles:  any  =  args.target.files;
    if  (args.target.files[0]  !==  null) {
        let  uploadedFile:  File  =  upoadedFiles[0];
        if  (uploadedFile) {
            let  reader:  FileReader  =  new  FileReader();
            let filename: string = upoadedFiles[0].name;
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload  =  (e:  any):  void  =>  {
                let  uploadedFileUrl:  string  =  e.currentTarget.result;
                viewer.load(uploadedFileUrl,  null);
                viewer.fileName = filename;
                (currentPageBox as HTMLInputElement).value = '1';
                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
                document.getElementById('bookmarkview').innerHTML = '';
                isBookmarkOpen = false;
            };
        }
    }
}

function  openDocument(e:  ClickEventArgs):  void  {
    document.getElementById('fileUpload').click();
}

function updatePageNavigation(): void {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    } else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    } else {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
}

function updateZoomButtons(): void {
    if (viewer.zoomPercentage <= 50) {
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

function nodeClick(args: NodeSelectEventArgs): boolean {
    let bookmarksDetails: any = viewer.bookmark.getBookmarks();
    let bookmarksDestination: any = bookmarksDetails.bookmarksDestination;
    let bookid: number = Number(args.nodeData.id);
    let pageIndex: number = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    let Y: number = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}

function searchInputKeypressed(event: KeyboardEvent): void {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}

function searchClickHandler(): void {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    } else if (searchButton.classList.contains('e-pv-search-close')) {
        (searchInput as HTMLInputElement).value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}

function initiateTextSearch(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    viewer.textSearch.searchText(searchString, matchCase);
}

function previousSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}

function nextSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}

function checkBoxChanged(args: ChangeEventArgs): void {
    if (args.checked) {
        matchCase = true;
    } else {
        matchCase = false;
    }
    initiateTextSearch();
}

function enablePrevButton(isEnable: boolean): void {
    let previousSearchButton: HTMLElement = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    } else {
        (previousSearchButton as HTMLButtonElement).disabled = true;
    }
}

function enableNextButton(isEnable: boolean): void {
    let nextSearchButton: HTMLElement = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    } else {
        (nextSearchButton as HTMLButtonElement).disabled = true;
    }
}

function updateSearchInputIcon(isEnable: boolean): void {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    } else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}


    toolbarObj = new Tool({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openDocument.bind(this) },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    let magnificationToolbar: Tool = new Tool({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon', id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new PdfViewer({
        enableToolbar: false,
        enableThumbnail: false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf'
    });
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    (currentPageBox as HTMLInputElement).value = '1';
    searchInput = document.getElementById('searchInput');
    bookmarkPopup = new Dialog({
        showCloseIcon: true, header: 'Bookmarks', closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: (): void => {
            isBookmarkOpen = false;
         }
    });
    bookmarkPopup.appendTo('#popup');

    textSearchPopup = new Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');

    let previousSearch: Button = new Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');

    let nextSearch: Button = new Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');

    let matchCaseCheck: CheckBox = new CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');

    viewer.pageChange = (args: IPageChangeEventArgs): void => {
        (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };

    viewer.documentLoad = (args: ILoadEventArgs): void => {
        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', () => { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', () => { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    searchButton.addEventListener('click', searchClickHandler);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);

```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```ts

import {
    PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print,
    IPageChangeEventArgs, ILoadEventArgs, TextSearch, TextSelection
} from '@syncfusion/ej2-pdfviewer';
import { Toolbar as Tool, TreeView, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { ClickEventArgs, Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection);

/**
 * Default PdfViewer sample
 */

let inputTemplate: string = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
let ele: string = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
let isBookmarkOpen: boolean = false;
let isBookmarkClick: boolean = false;
let isTextSearchBoxOpen: boolean = false;
let bookmarkPopup: Dialog;
let textSearchPopup: Dialog;
let toolbarObj: Tool;
let viewer: PdfViewer;
let currentPageBox: HTMLElement;
let searchInput: HTMLElement;
let searchButton: HTMLElement;
let matchCase: boolean = false;

function previousClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}

function hidePopups(): void {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}

function bookmarkClicked(): void {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        let bookmarkDetails: any = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            let bookmarks: any = bookmarkDetails.bookmarks.bookMark;
            let treeObj: TreeView = new TreeView({
                fields:
                {
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
        } else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    } else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }
    }
}

function nextClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToNextPage();
}

function searchClicked(args: ClickEventArgs): void {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    } else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}

function printClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.print.print();
}

function downloadClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.download();
}

function pageFitClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}

function zoomInClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}

function zoomOutClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function onCurrentPageBoxKeypress(event: KeyboardEvent): boolean {
    if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
        event.preventDefault();
        return false;
    } else {
        // tslint:disable-next-line:radix
        let currentPageNumber: number = parseInt((currentPageBox as HTMLInputElement).value);
        if (event.which === 13) {
            if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                viewer.navigation.goToPage(currentPageNumber);
            } else {
                (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
            }
        }
        return true;
    }
}

function onCurrentPageBoxClicked(): void {
    (currentPageBox as HTMLInputElement).select();
    (currentPageBox).focus();
}

function  readFile(args:  any):  void  {
    // tslint:disable-next-line
    let  upoadedFiles:  any  =  args.target.files;
    if  (args.target.files[0]  !==  null) {
        let  uploadedFile:  File  =  upoadedFiles[0];
        if  (uploadedFile) {
            let  reader:  FileReader  =  new  FileReader();
            let filename: string = upoadedFiles[0].name;
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload  =  (e:  any):  void  =>  {
                let  uploadedFileUrl:  string  =  e.currentTarget.result;
                viewer.load(uploadedFileUrl,  null);
                viewer.fileName = filename;
                (currentPageBox as HTMLInputElement).value = '1';
                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
                document.getElementById('bookmarkview').innerHTML = '';
                isBookmarkOpen = false;
            };
        }
    }
}

function  openDocument(e:  ClickEventArgs):  void  {
    document.getElementById('fileUpload').click();
}

function updatePageNavigation(): void {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    } else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    } else {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
}

function updateZoomButtons(): void {
    if (viewer.zoomPercentage <= 50) {
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

function nodeClick(args: NodeSelectEventArgs): boolean {
    let bookmarksDetails: any = viewer.bookmark.getBookmarks();
    let bookmarksDestination: any = bookmarksDetails.bookmarksDestination;
    let bookid: number = Number(args.nodeData.id);
    let pageIndex: number = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    let Y: number = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}

function searchInputKeypressed(event: KeyboardEvent): void {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}

function searchClickHandler(): void {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    } else if (searchButton.classList.contains('e-pv-search-close')) {
        (searchInput as HTMLInputElement).value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}

function initiateTextSearch(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    viewer.textSearch.searchText(searchString, matchCase);
}

function previousSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}

function nextSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}

function checkBoxChanged(args: ChangeEventArgs): void {
    if (args.checked) {
        matchCase = true;
    } else {
        matchCase = false;
    }
    initiateTextSearch();
}

function enablePrevButton(isEnable: boolean): void {
    let previousSearchButton: HTMLElement = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    } else {
        (previousSearchButton as HTMLButtonElement).disabled = true;
    }
}

function enableNextButton(isEnable: boolean): void {
    let nextSearchButton: HTMLElement = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    } else {
        (nextSearchButton as HTMLButtonElement).disabled = true;
    }
}

function updateSearchInputIcon(isEnable: boolean): void {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    } else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}


    toolbarObj = new Tool({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openDocument.bind(this) },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    let magnificationToolbar: Tool = new Tool({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon', id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new PdfViewer({
        enableToolbar: false,
        enableThumbnail: false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf'
    });
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    (currentPageBox as HTMLInputElement).value = '1';
    searchInput = document.getElementById('searchInput');
    bookmarkPopup = new Dialog({
        showCloseIcon: true, header: 'Bookmarks', closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: (): void => {
            isBookmarkOpen = false;
         }
    });
    bookmarkPopup.appendTo('#popup');

    textSearchPopup = new Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');

    let previousSearch: Button = new Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');

    let nextSearch: Button = new Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');

    let matchCaseCheck: CheckBox = new CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');

    viewer.pageChange = (args: IPageChangeEventArgs): void => {
        (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };

    viewer.documentLoad = (args: ILoadEventArgs): void => {
        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', () => { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', () => { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    searchButton.addEventListener('click', searchClickHandler);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);

```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```ts

import {
    PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print,
    IPageChangeEventArgs, ILoadEventArgs, TextSearch, TextSelection
} from '@syncfusion/ej2-pdfviewer';
import { Toolbar as Tool, TreeView, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { ClickEventArgs, Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection);

/**
 * Default PdfViewer sample
 */

let inputTemplate: string = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
let ele: string = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
let isBookmarkOpen: boolean = false;
let isBookmarkClick: boolean = false;
let isTextSearchBoxOpen: boolean = false;
let bookmarkPopup: Dialog;
let textSearchPopup: Dialog;
let toolbarObj: Tool;
let viewer: PdfViewer;
let currentPageBox: HTMLElement;
let searchInput: HTMLElement;
let searchButton: HTMLElement;
let matchCase: boolean = false;

function previousClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}

function hidePopups(): void {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}

function bookmarkClicked(): void {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        let bookmarkDetails: any = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            let bookmarks: any = bookmarkDetails.bookmarks.bookMark;
            let treeObj: TreeView = new TreeView({
                fields:
                {
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
        } else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    } else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }
    }
}

function nextClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToNextPage();
}

function searchClicked(args: ClickEventArgs): void {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    } else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}

function printClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.print.print();
}

function downloadClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.download();
}

function pageFitClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}

function zoomInClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}

function zoomOutClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function onCurrentPageBoxKeypress(event: KeyboardEvent): boolean {
    if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
        event.preventDefault();
        return false;
    } else {
        // tslint:disable-next-line:radix
        let currentPageNumber: number = parseInt((currentPageBox as HTMLInputElement).value);
        if (event.which === 13) {
            if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                viewer.navigation.goToPage(currentPageNumber);
            } else {
                (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
            }
        }
        return true;
    }
}

function onCurrentPageBoxClicked(): void {
    (currentPageBox as HTMLInputElement).select();
    (currentPageBox).focus();
}

function  readFile(args:  any):  void  {
    // tslint:disable-next-line
    let  upoadedFiles:  any  =  args.target.files;
    if  (args.target.files[0]  !==  null) {
        let  uploadedFile:  File  =  upoadedFiles[0];
        if  (uploadedFile) {
            let  reader:  FileReader  =  new  FileReader();
            let filename: string = upoadedFiles[0].name;
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload  =  (e:  any):  void  =>  {
                let  uploadedFileUrl:  string  =  e.currentTarget.result;
                viewer.load(uploadedFileUrl,  null);
                viewer.fileName = filename;
                (currentPageBox as HTMLInputElement).value = '1';
                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
                document.getElementById('bookmarkview').innerHTML = '';
                isBookmarkOpen = false;
            };
        }
    }
}

function  openDocument(e:  ClickEventArgs):  void  {
    document.getElementById('fileUpload').click();
}

function updatePageNavigation(): void {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    } else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    }
}

function updateZoomButtons(): void {
    if (viewer.zoomPercentage <= 50) {
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

function nodeClick(args: NodeSelectEventArgs): boolean {
    let bookmarksDetails: any = viewer.bookmark.getBookmarks();
    let bookmarksDestination: any = bookmarksDetails.bookmarksDestination;
    let bookid: number = Number(args.nodeData.id);
    let pageIndex: number = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    let Y: number = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}

function searchInputKeypressed(event: KeyboardEvent): void {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}

function searchClickHandler(): void {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    } else if (searchButton.classList.contains('e-pv-search-close')) {
        (searchInput as HTMLInputElement).value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}

function initiateTextSearch(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    viewer.textSearch.searchText(searchString, matchCase);
}

function previousSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}

function nextSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}

function checkBoxChanged(args: ChangeEventArgs): void {
    if (args.checked) {
        matchCase = true;
    } else {
        matchCase = false;
    }
    initiateTextSearch();
}

function enablePrevButton(isEnable: boolean): void {
    let previousSearchButton: HTMLElement = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    } else {
        (previousSearchButton as HTMLButtonElement).disabled = true;
    }
}

function enableNextButton(isEnable: boolean): void {
    let nextSearchButton: HTMLElement = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    } else {
        (nextSearchButton as HTMLButtonElement).disabled = true;
    }
}

function updateSearchInputIcon(isEnable: boolean): void {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    } else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}


    toolbarObj = new Tool({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openDocument.bind(this) },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    let magnificationToolbar: Tool = new Tool({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon', id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new PdfViewer({
        enableToolbar: false,
        enableThumbnail: false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf'
    });
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    (currentPageBox as HTMLInputElement).value = '1';
    searchInput = document.getElementById('searchInput');
    bookmarkPopup = new Dialog({
        showCloseIcon: true, header: 'Bookmarks', closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: (): void => {
            isBookmarkOpen = false;
         }
    });
    bookmarkPopup.appendTo('#popup');

    textSearchPopup = new Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');

    let previousSearch: Button = new Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');

    let nextSearch: Button = new Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');

    let matchCaseCheck: CheckBox = new CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');

    viewer.pageChange = (args: IPageChangeEventArgs): void => {
        (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };

    viewer.documentLoad = (args: ILoadEventArgs): void => {
        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', () => { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', () => { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    searchButton.addEventListener('click', searchClickHandler);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);

```
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
```ts

import {
    PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print,
    IPageChangeEventArgs, ILoadEventArgs, TextSearch, TextSelection
} from '@syncfusion/ej2-pdfviewer';
import { Toolbar as Tool, TreeView, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { ClickEventArgs, Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSearch, TextSelection);

/**
 * Default PdfViewer sample
 */

let inputTemplate: string = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
let ele: string = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
let isBookmarkOpen: boolean = false;
let isBookmarkClick: boolean = false;
let isTextSearchBoxOpen: boolean = false;
let bookmarkPopup: Dialog;
let textSearchPopup: Dialog;
let toolbarObj: Tool;
let viewer: PdfViewer;
let currentPageBox: HTMLElement;
let searchInput: HTMLElement;
let searchButton: HTMLElement;
let matchCase: boolean = false;

function previousClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}

function hidePopups(): void {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}

function bookmarkClicked(): void {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        let bookmarkDetails: any = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            let bookmarks: any = bookmarkDetails.bookmarks.bookMark;
            let treeObj: TreeView = new TreeView({
                fields:
                {
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
        } else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    }
} else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }
    }
}

function nextClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.navigation.goToNextPage();
}

function searchClicked(args: ClickEventArgs): void {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    } else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}

function printClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.print.print();
}

function downloadClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.download();
}

function pageFitClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}

function zoomInClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}

function zoomOutClicked(args: ClickEventArgs): void {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function onCurrentPageBoxKeypress(event: KeyboardEvent): boolean {
    if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
        event.preventDefault();
        return false;
    } else {
        // tslint:disable-next-line:radix
        let currentPageNumber: number = parseInt((currentPageBox as HTMLInputElement).value);
        if (event.which === 13) {
            if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                viewer.navigation.goToPage(currentPageNumber);
            } else {
                (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
            }
        }
        return true;
    }
}

function onCurrentPageBoxClicked(): void {
    (currentPageBox as HTMLInputElement).select();
    (currentPageBox).focus();
}

function  readFile(args:  any):  void  {
    // tslint:disable-next-line
    let  upoadedFiles:  any  =  args.target.files;
    if  (args.target.files[0]  !==  null) {
        let  uploadedFile:  File  =  upoadedFiles[0];
        if  (uploadedFile) {
            let  reader:  FileReader  =  new  FileReader();
            let filename: string = upoadedFiles[0].name;
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload  =  (e:  any):  void  =>  {
                let  uploadedFileUrl:  string  =  e.currentTarget.result;
                viewer.load(uploadedFileUrl,  null);
                viewer.fileName = filename;
                (currentPageBox as HTMLInputElement).value = '1';
                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
                document.getElementById('bookmarkview').innerHTML = '';
                isBookmarkOpen = false;
            };
        }
    }
}

function  openDocument(e:  ClickEventArgs):  void  {
    document.getElementById('fileUpload').click();
}

function updatePageNavigation(): void {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    } else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    } else {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
}

function updateZoomButtons(): void {
    if (viewer.zoomPercentage <= 50) {
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

function nodeClick(args: NodeSelectEventArgs): boolean {
    let bookmarksDetails: any = viewer.bookmark.getBookmarks();
    let bookmarksDestination: any = bookmarksDetails.bookmarksDestination;
    let bookid: number = Number(args.nodeData.id);
    let pageIndex: number = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    let Y: number = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}

function searchInputKeypressed(event: KeyboardEvent): void {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}

function searchClickHandler(): void {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    } else if (searchButton.classList.contains('e-pv-search-close')) {
        (searchInput as HTMLInputElement).value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}

function initiateTextSearch(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    viewer.textSearch.searchText(searchString, matchCase);
}

function previousSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}

function nextSearchClicked(): void {
    let searchString: string = (searchInput as HTMLInputElement).value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}

function checkBoxChanged(args: ChangeEventArgs): void {
    if (args.checked) {
        matchCase = true;
    } else {
        matchCase = false;
    }
    initiateTextSearch();
}

function enablePrevButton(isEnable: boolean): void {
    let previousSearchButton: HTMLElement = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    } else {
        (previousSearchButton as HTMLButtonElement).disabled = true;
    }
}

function enableNextButton(isEnable: boolean): void {
    let nextSearchButton: HTMLElement = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    } else {
        (nextSearchButton as HTMLButtonElement).disabled = true;
    }
}

function updateSearchInputIcon(isEnable: boolean): void {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    } else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}


    toolbarObj = new Tool({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openDocument.bind(this) },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            // tslint:disable-next-line:max-line-length
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    let magnificationToolbar: Tool = new Tool({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon', id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new PdfViewer({
        enableToolbar: false,
        enableThumbnail: false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf',
        serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
    });
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    (currentPageBox as HTMLInputElement).value = '1';
    searchInput = document.getElementById('searchInput');
    bookmarkPopup = new Dialog({
        showCloseIcon: true, header: 'Bookmarks', closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: (): void => {
            isBookmarkOpen = false;
         }
    });
    bookmarkPopup.appendTo('#popup');

    textSearchPopup = new Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');

    let previousSearch: Button = new Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');

    let nextSearch: Button = new Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');

    let matchCaseCheck: CheckBox = new CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');

    viewer.pageChange = (args: IPageChangeEventArgs): void => {
        (currentPageBox as HTMLInputElement).value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };

    viewer.documentLoad = (args: ILoadEventArgs): void => {
        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', () => { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', () => { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    searchButton.addEventListener('click', searchClickHandler);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);

```
{% endhighlight %}
{% endtabs %}

Sample:
[https://document.syncfusion.com/demos/pdf-viewer/react/#/tailwind3/pdfviewer/custom-toolbar.html](https://document.syncfusion.com/demos/pdf-viewer/react/#/tailwind3/pdfviewer/custom-toolbar.html)


