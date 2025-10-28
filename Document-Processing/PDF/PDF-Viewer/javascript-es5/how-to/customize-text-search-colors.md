---
layout: post
title: Customize text search color in JavaScript PDF Viewer | Syncfusion
description: Learn how to customize text search and highlight colors in the JavaScript PDF Viewer using textSearchColorSettings.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize text search color in PDF Viewer

Change the text search colors using the `textSearchColorSettings` properties. Set `searchColor` for matched text and `searchHighlightColor` for the active result. Both accept hexadecimal color values.

```javascript

viewer.textSearchColorSettings.searchColor = "#FF0000";

```

The above sets the match color to red. Use any valid hex color.

```javascript

viewer.textSearchColorSettings.searchHighlightColor = "#0000FF";

```

The above sets the active result highlight to blue.

- [searchColor](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearchColorSettings/#searchcolor)
- [searchHighlightColor](https://ej2.syncfusion.com/documentation/api/pdfviewer/textSearchColorSettings/#searchhighlightcolor)

Example: Buttons to control search flow

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

Sample: [How to customize the text search color](https://stackblitz.com/edit/js-q6nquw?file=index.js)