---
layout: post
title: How to change the font family in Syncfusion Vue Pdfviewer component
description: Learn how to change the font family in Form Field's Type Signature in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# To Change the Font Family
Change the Font Family in Type Signature of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer by adding a custom css stylesheet to the document , and then apply the desired font family to the type signature element. Include the Google font link in the HTML head section to apply the Google Font.

### Signature Field property
The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer provides the ability to change the font family for Signature and Initial Field using `typeSignatureFonts` and `typeInitialFonts` property.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in Signature field.

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

### Initial Field property
Insert the following code snippet to implement the functionality for using custom fonts in Initial field.

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

By implementing this , you can use custom fonts in form field's signature in both `signature` and `initial` field