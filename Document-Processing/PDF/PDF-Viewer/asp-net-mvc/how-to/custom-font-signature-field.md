---
layout: post
title: Change font family in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to change the font family for form field type signatures and initials in the Syncfusion ASP.NET MVC PDF Viewer using typeSignatureFonts and typeInitialFonts.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Change the font family for type signatures in ASP.NET MVC

Change the font family for Type Signature and Initial fields by adding a stylesheet to load fonts and assigning them via the PDF Viewer settings. Include Google Font links in the HTML head to use those fonts.

### Signature field property

The PDF Viewer supports changing fonts for Signature and Initial fields using the `typeSignatureFonts` and `typeInitialFonts` properties.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to apply custom fonts to the Signature field.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ChangeFontFamily("changeFontFamily").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
	function changeFontFamily()
	{
		var pdfviewer=document.getElementById('pdfviewer').ej2_instances[0];
		pdfviewer.SignatureFieldSettings.typeSignatureFonts = [
		'Allura',
		'Tangerine',
		'Sacramento',
		'Inspiration',
		];
	}
</script>

{% endhighlight %}
{% endtabs %}

### Initial field property

Use the following code to apply custom fonts to the Initial field.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ChangeFontFamily("changeFontFamily").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
	function changeFontFamily()
	{
		var pdfviewer=document.getElementById('pdfviewer').ej2_instances[0];
		pdfviewer.InitialFieldSettings.typeInitialFonts = [
		'Allura',
		'Tangerine',
		'Sacramento',
		'Inspiration',
		];
	}
</script>

{% endhighlight %}
{% endtabs %}

By implementing this configuration, custom fonts can be used for both Signature and Initial form fields.
