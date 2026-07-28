---
layout: post
title: extractTextCompleted Event in Angular | Syncfusion
description: Learn here all about extractTextCompleted Event in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Extract text using extractTextCompleted event in Angular PDF Viewer

The PDF Viewer can extract page text along with bounding information. Enable text extraction using the `isExtractText` property and handle the `extractTextCompleted` event to receive extracted text and bounds for the document.

The following steps are used to extract text from a page.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to extract text from a page.

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
                             [serviceUrl]='service'
                             [documentPath]='document'
                             (extractTextCompleted)='extractTextCompleted($event)'
                             [isExtractText]=true
                             style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public extractTextCompleted(e: ExtractTextCompletedEventArgs): void {
    // The event argument contains a documentTextCollection structure with extracted text and bounds
    console.log(e);
    // Inspect the documentTextCollection to find page-level and element-level text data
    console.log(e.documentTextCollection[1]);
    // Example: access TextData for an element
    console.log(e.documentTextCollection[1][1].TextData);
    // Example: access the page-level text
    console.log(e.documentTextCollection[1][1].PageText);
    // Example: access bounds for the first extracted text item
    console.log(e.documentTextCollection[1][1].TextData[0].Bounds);
}
```

Find the Sample, [how to Extract Text](https://stackblitz.com/edit/angular-uvgdd7?devtoolsheight=33&file=app.component.html)
