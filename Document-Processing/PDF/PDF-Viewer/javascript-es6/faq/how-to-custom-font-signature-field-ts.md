---
layout: post
title: How to change font family in Typescript Pdfviewer|Syncfusion.
description: Learn how to change the font family in Form Field's Type Signature in Syncfusion Javascript Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# To Change the Font Family
Change the Font Family in Type Signature of the Syncfusion PDF Viewer by adding a custom css stylesheet to the document , and then apply the desired font family to the type signature element. Include the Google font link in the HTML head section to apply the Google Font.

### Signature Field property
The Syncfusion PDF Viewer provides the ability to change the font family for Signature and Initial Field using `typeSignatureFonts` and `typeInitialFonts` property.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in Signature field.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
let fonts=['Allura','Tangerine','Sacramento','Inspiration'];
pdfviewer.SignatureFieldSettings.typeSignatureFonts = fonts;
pdfviewer.appendTo('#PdfViewer');
```

{% endhighlight %}
{% endtabs %}

### Initial Field property
Insert the following code snippet to implement the functionality for using custom fonts in Initial field.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
let fonts=['Allura','Tangerine','Sacramento','Inspiration'];
pdfviewer.InitialFieldSettings.typeInitialFonts = fonts;
pdfviewer.appendTo('#PdfViewer');
```

{% endhighlight %}
{% endtabs %}
By implementing this , you can use custom fonts in form field's signature in both `signature` and `initial` field.
