---
layout: post
title: Change font family in TypeScript PDF Viewer | Syncfusion
description: Learn how to change the font family for form field type signatures and initials in the TypeScript PDF Viewer using typeSignatureFonts and typeInitialFonts.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change the font family for type signatures in TypeScript

Change the font family for Type Signature and Initial fields by loading the desired fonts and assigning them in the PDF Viewer configuration. Include font stylesheet links (for example, Google Fonts) in the HTML head before initializing the viewer.

### Signature field property

The PDF Viewer supports changing fonts for Signature and Initial fields using the `typeSignatureFonts` and `typeInitialFonts` properties.

**Step 1:** Follow the getting-started guide for the JavaScript PDF Viewer to create a simple sample: [Getting started with JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started).

**Step 2:** Use the following configuration to apply custom fonts to the Signature field.

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

### Initial field property

Use the following configuration to apply custom fonts to the Initial field.

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

After implementing this configuration, the specified custom fonts are available for both Signature and Initial form fields.
