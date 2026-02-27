---
layout: post
title: Change font family in Vue PDF Viewer | Syncfusion
description: Learn how to change the font family for form field type signatures and initials in the Vue PDF Viewer using typeSignatureFonts and typeInitialFonts.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Change the font family for type signatures in Vue

Change the font family in the type signature of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer by adding a custom CSS stylesheet to the document and applying the desired font family to the type signature element. Include the Google Fonts link in the HTML head section to apply the font.

### Signature field property

The PDF Viewer supports changing fonts for Signature and Initial fields using the `typeSignatureFonts` and `typeInitialFonts` properties.

**Step 1:** Follow the steps in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) guide to create a simple PDF Viewer sample.

**Step 2:** Use the following code to apply custom fonts to the Signature field.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```
<template>
  <div id="app">
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :signatureFieldSettings="signatureFieldSettings"> </ejs-pdfviewer>
  </div>
</template>

import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, AnnotationResizerLocation, DisplayMode, CursorType } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'app',
  data () {
return {
	documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
	signatureFieldSettings:{
    typeSignatureFonts:['Allura', 'Tangerine', 'Sacramento', 'Inspiration']
  }
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}
</script>
```
{% endhighlight %}
{% endtabs %}

### Initial field property

Use the following code to apply custom fonts to the Initial field.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```
```
<template>
  <div id="app">
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :initialFieldSettings="initialFieldSettings"> </ejs-pdfviewer>
  </div>
</template>

import {
    PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, AnnotationResizerLocation, DisplayMode, CursorType } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'app',
  data () {
return {
	documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
	initialFieldSettings:{
    typeInitialFonts:['Allura', 'Tangerine', 'Sacramento', 'Inspiration']
  }
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}
</script>
```
{% endhighlight %}
{% endtabs %}

Implementing this enables use of custom fonts in form-field signature and initial fields.