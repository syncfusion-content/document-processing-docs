---
layout: post
title: How to change font family in Javascript Pdfviewer|Syncfusion.
description: Learn how to change the font family in Form Field's Type Signature in Syncfusion Javascript Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# To Change the Font Family
Change the Font Family in Type Signature of the Syncfusion PDF Viewer by adding a custom css stylesheet to the document , and then apply the desired font family to the type signature element. Include the Google font link in the HTML head section to apply the Google Font.

### Signature Field property

The Syncfusion PDF Viewer provides the ability to change the font family for Signature and Initial Field using `typeSignatureFont` and `typeInitialFonts` property.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in Signature field.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
	                SignatureFieldSettings.typeSignatureFonts : [
					    'Allura',
					    'Tangerine',
					    'Sacramento',
					    'Inspiration',
					];
				});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

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

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    InitialFieldSettings.typeInitialFonts : [
					'Allura',
					'Tangerine',
					'Sacramento',
					'Inspiration',];
				});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

By implementing this , you can use custom fonts in form field's signature in both `signature` and `initial` field
