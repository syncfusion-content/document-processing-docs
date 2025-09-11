---
layout: post
title: Customize text search colors in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Customize text search colors in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize text search colors
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Customize text search colors in Javascript Pdfviewer control

To change the text search color in the Syncfusion PDF viewer, you can use the **searchColor** property of the searchModule object. This property accepts a string value that represents the color in hexadecimal format.

```javascript

viewer.textSearchColorSettings.searchColor = "#FF0000";

```

This will set the text search color to red. You can use any valid hexadecimal color code to set the text search color to the desired color.

You can also use the **searchHighlightColor** property of the searchModule object to change the highlight color of the search results. This property also accepts a string value in hexadecimal format.

```javascript

viewer.textSearchColorSettings.searchHighlightColor = "#0000FF";

```

This will set the highlight color of the search results to blue.

* [**searchColor**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchColorSettings/#searchcolor)
* [**searchHighlightColor**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/textSearchColorSettings/#searchhighlightcolor)

Here is an example of how you can use the searchHighlightColor property and searchColor property:

```

<button id="search">SearchText</button>
<button id="searchNext">SearchNext</button>
<button id="searchPervious">searchPervious</button>
<button id="searchCancel">CancelSearch</button>

```

```javascript

viewer.enableTextSearch = true;
// customize the textSeach color
viewer.textSearchColorSettings.searchColor = "#FF0000";
// customize the highlight color of the search results
viewer.textSearchColorSettings.searchHighlightColor = "#0000FF";
document.getElementById("search").addEventListener("click", () => {
  viewer.textSearchModule.searchText("pdf", false);
});
document.getElementById("searchNext").addEventListener("click", () => {
  viewer.textSearchModule.searchNext();
});
document.getElementById("searchPervious").addEventListener("click", () => {
  viewer.textSearchModule.searchPrevious();
});
document.getElementById("searchCancel").addEventListener("click", () => {
  viewer.textSearchModule.cancelTextSearch();
});

```

Find the sample [how to customize the text search color](https://stackblitz.com/edit/js-q6nquw?file=index.js)