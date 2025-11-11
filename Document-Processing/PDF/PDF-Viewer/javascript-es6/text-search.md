---
layout: post
title: Text search in TypeScript PDF Viewer control | Syncfusion
description: Learn how to configure text search, handle search events, and run programmatic searches in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---
# Text search in TypeScript PDF Viewer control

The text search feature in the PDF Viewer locates and highlights matching content within a document. Enable or disable this capability with the following configuration.

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
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

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

### Real-time search suggestions while typing
Typing in the search box immediately surfaces suggestions that match the entered text. The list refreshes on every keystroke so users can quickly jump to likely results without completing the entire term.

![Search suggestion popup](./images/SingleSearchPopup.png)

### Select search suggestions from the popup
After typing in the search box, the popup lists relevant matches. Selecting an item jumps directly to the corresponding occurrence in the PDF.

![Search results from popup](./images/SearchResultFromPopup.png)

### Search text with the Match Case option
Enable the Match Case checkbox to limit results to case-sensitive matches. Navigation commands then step through each exact match in sequence.

![Match case navigation](./images/SearchNavigationMatchCase.png)

### Search text without Match Case
Leave the Match Case option cleared to highlight every occurrence of the query, regardless of capitalization, and navigate through each result.

![Search navigation without match case](./images/SearchNavigationNoMatchCase.png)

### Search a list of words with Match Any Word
Enable Match Any Word to split the query into separate words. The popup proposes matches for each word and highlights them throughout the document.

![Match any word search results](./images/MultiSearchPopup.png)

### Programmatic search with settings

While the PDF Viewer toolbar offers an interactive search experience, you can also trigger and customize searches programmatically by calling the `searchText` method with tailored options.

#### Using `searchText`

Use the `searchText` method to start a search with optional filters that control case sensitivity and whole-word behavior.

```typescript
// searchText(text: string, isMatchCase?: boolean, isMatchWholeWord?: boolean)
pdfviewer.textSearch.searchText('search text', false, false);
```

- `isMatchCase` (optional boolean): Determines whether the search should be case-sensitive.
- `isMatchWholeWord` (optional boolean): Ensures the entire string is matched as a standalone word.

#### Match Case

Set the `isMatchCase` parameter to `true` to perform a case-sensitive search that mirrors the Match Case option in the search panel.

```typescript
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.appendTo('#PdfViewer');

// Later, to search programmatically:
// This will only find instances of "PDF" in uppercase.
pdfviewer.textSearch.searchText('PDF', true);
```

#### Match Whole Word

Set the `isMatchWholeWord` parameter to `true` to restrict results to whole-word matches. For example, a search for "view" will not match "viewer".

```typescript
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.appendTo('#PdfViewer');

// Later, to search programmatically:
// This will find "pdf" but not "pdf-succinctly"
pdfviewer.textSearch.searchText('pdf', false, true);
```

**Note on Match Any Word:** The Match Any Word checkbox in the toolbar splits the input into multiple words and searches for each term individually. This differs from the `isMatchWholeWord` parameter, which enforces a whole-word match on the entire query string.

The following text search methods are available in the PDF Viewer,

* [**Search text**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchtext): Searches the target text in the PDF document and highlights each occurrence in the pages.
* [**Search next**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchnext): Searches the next occurrence of the current query from the active match.
* [**Search previous**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#searchprevious): Searches the previous occurrence of the current query from the active match.
* [**Cancel text search**](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearch/#canceltextsearch): Cancels the current text search and removes the highlighted occurrences from the PDF Viewer.

![Alt text](./images/search.png)

## Find text method
Use the `findText` method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

### Find and get the bounds of a text
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for all pages in the document where the text was found. The following code snippet shows how to get the bounds of the specified text:
The following code snippet shows how to get the bounds of the specified text:

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
Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter. It returns the bounding rectangles for that page in the document where the text was found. The following code snippet shows how to retrieve bounds for the specified text on a selected page:
The following code snippet shows how to retrieve bounds for the specified text on a selected page:

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

## Text Search Events

The PDF Viewer triggers events during text search operations, allowing you to customize behavior and respond to different stages of the search process.

### textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textsearchstartevent) event fires as soon as a search begins from the toolbar interface or through the `textSearch.searchText` method. Use it to reset UI state, log analytics, or cancel the default search flow before results are processed.

- Event arguments: [TextSearchStartEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchStartEventArgs/) exposes:
  - `searchText`: the term being searched.
  - `matchCase`: indicates whether case-sensitive search is enabled.
  - `isMatchWholeWord`: indicates whether whole-word matching is enabled.
  - `name`: event name.
  - `cancel`: set to `true` to stop the default search.

```typescript
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSearchStart: function (args: any) {
        // args.searchText contains the term being searched
        // args.cancel can be set to true to stop the default search
        console.log(`Text search started for: "${args.searchText}"`);
    }
});
viewer.appendTo('#pdfViewer');
```

### textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textsearchhighlightevent) event triggers whenever a search result is brought into view, including navigation between matches. Use it to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- Event arguments: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchHighlightEventArgs/) exposes:
  - `bounds`: `RectangleBoundsModel | RectangleBoundsModel[]` representing the highlighted match.
  - `pageNumber`: page index where the match is highlighted.
  - `searchText`: the active search term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

```typescript
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSearchHighlight: function (args: any) {
        // args.bounds provides the rectangle(s) of the current match
        console.log('Highlighted match bounds:', args.bounds);
    }
});
viewer.appendTo('#pdfViewer');
```

### textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textsearchcompleteevent) event runs after the search engine finishes scanning the document for the current query. Use it to update match counts, toggle navigation controls, or notify users when no results were found.

- Typical uses:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators or show a "no results" message if none were found.
  - Record analytics for search effectiveness.
- Event arguments: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchCompleteEventArgs/) exposes:
  - `totalMatches`: total number of occurrences found.
  - `isMatchFound`: indicates whether at least one match was found.
  - `searchText`: the searched term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: event name.

```typescript
const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSearchComplete: (args: any) => {
        // args.totalMatches may indicate how many results were found (when available)
        console.log('Text search completed.', args);
    }
});
viewer.appendTo('#pdfViewer');
```

## See also

* [Toolbar items](./toolbar)
* [Feature modules](./feature-module)
* [Text selection](./textselection)
