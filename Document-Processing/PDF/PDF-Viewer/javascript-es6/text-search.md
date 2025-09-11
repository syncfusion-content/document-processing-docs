---
layout: post
title: Text search in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Text search in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Text search
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---
# Text search in Typescript Pdfviewer control

The Text Search option in PDF Viewer is used to find and highlight the text content from the document. You can enable/disable the text search using the following code snippet.

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
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>

```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableTextSearch: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}


import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableTextSearch: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Text search features

### Real time search suggestion while typing
Entering text into the search input dynamically displays search suggestions based on the provided input. The suggestions are updated in real-time as text is typed, offering relevant matches from the available content. This feature enhances the search experience by allowing quick access to potential results while typing.

![Alt text](./images/SingleSearchPopup.png)

### Selecting Search Suggestions from the Popup
Entering text into the search input triggers a popup displaying relevant suggestions based on the input. Selecting a suggestion from the popup enables direct navigation to its occurrences in the document.

![Alt text](./images/SearchResultFromPopup.png)

### Search Text with enabling 'Match Case' checkbox
By enabling the 'Match Case' option and entering text into the search input, only the exact case-sensitive matches in the document are highlighted. This feature allows navigation through each occurrence of the exact text match within the document.

![Alt text](./images/SearchNavigationMatchCase.png)

### Search Text without enabling 'Match Case' checkbox
When text is entered into the search input without enabling the 'Match Case' option, all instances of the text, regardless of case, are highlighted in the document. This allows easy navigation through every occurrence of the search term.

![Alt text](./images/SearchNavigationNoMatchCase.png)

### Search list of text by enabling 'Match Any Word' checkbox
When the 'Match Any Word' option is enabled, the entered text in the search input is split into individual words based on spaces. As the text is typed, the popup dynamically displays search suggestions for each word in real time, highlighting potential matches within the document.

![Alt text](./images/MultiSearchPopup.png)

The following text search methods are available in the PDF Viewer,

* [**Search text**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchtext):- Searches the target text in the PDF document and highlights the occurrences in the pages.
* [**Search next**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchnext):- Searches the next occurrence of the searched text from the current occurrence of the PdfViewer.
* [**Search previous**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchprevious):- Searches the previous occurrence of the searched text from the current occurrence of the PdfViewer.
* [**Cancel text search**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#canceltextsearch):- The text search can be canceled and the highlighted occurrences from the PDF Viewer can be removed .

![Alt text](./images/search.png)

## Find text method
Searches for the specified text or an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. If a specific page index is provided, it returns the bounding rectangles for these search strings on that page; otherwise, it returns the bounding rectangles for all pages in the document where the strings were found.

### Find and get the bounds of a text
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for all pages in the document where the text was found. The below code snippet shows how to get the bounds of the given text:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on the desired page
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for that page in the document where the text was found. The below code snippet shows how to get the bounds of the given text from the desired page:

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText('pdf', false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for all pages in the document where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('listTextbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text on desired page
Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

```html
<div id="textbounds"><button>FindTextBounds</button></div>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('textbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% highlight ts tabtitle="Server-backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer} from "../src/index";

    PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
    TextSelection, TextSearch, Print, Annotation,FormFields,FormDesigner, PageOrganizer);

    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    document.getElementById('listTextbounds').addEventListener('click', function() {
        console.log(viewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    });
    viewer.appendTo("#pdfViewer");

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/TextSearch)

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)