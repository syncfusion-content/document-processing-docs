## MD Still in process
Sample Code Snippet for Search Text and Redacat
```html
    <button id="searchTextRedact">Search Text and Redact</button>
```
```ts
document.getElementById('searchTextRedact').addEventListener('click', () => {
// Function to handle extractTextCompleted event
    viewer.extractTextCompleted=args=>{
      var searchText ="syncfusion";

      // Perform text search
      var searchResults = viewer.textSearchModule.findText(searchText, false);

      if (!searchResults || searchResults.length === 0) {
        console.warn("No matches found.");
        return;
      }

      // Loop through search results
      for (var i = 0; i < searchResults.length; i++) {
        var pageResult = searchResults[i];
        if (!pageResult.bounds || pageResult.bounds.length === 0) continue;

        // Loop through each bounding box of the found text
        for (var j = 0; j < pageResult.bounds.length; j++) {
          var bound = pageResult.bounds[j];

          // Add a redaction annotation at the found text location
          viewer.annotation.addAnnotation("Redaction", {
            bound: {
              x: (bound.x * 96) / 72,
              y: (bound.y * 96) / 72,
              width: (bound.width * 96) / 72,
              height: (bound.height * 96) / 72
            },
            pageNumber: pageResult.pageIndex + 1,
            overlayText: "Confidential",
            fillColor: "#00FF40FF",
            fontColor: "#333333",
            fontSize: 12,
            fontFamily: "Arial",
            textAlign: "Center",
            markerFillColor: "#FF0000",
            markerBorderColor: "#000000"
          });
        }
      }
    }
});

```