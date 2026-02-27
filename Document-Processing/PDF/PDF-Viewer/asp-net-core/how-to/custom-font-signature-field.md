---
layout: post
title: Change font family in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to change the font family for form field type signatures and initials in the ASP.NET Core PDF Viewer using typeSignatureFonts and typeInitialFonts.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Change font family for type signatures in ASP.NET Core

Customize the font options available for Type Signature and Initial fields. By adding custom stylesheets and configuring the PDF Viewer settings, you can provide users with various professional or decorative font choices for their digital signatures.

## Custom font configuration

The PDF Viewer supports changing fonts for Signature and Initial fields using the `typeSignatureFonts` and `typeInitialFonts` properties.

**Step 1:** Follow the [Getting Started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer instance.

**Step 2:** Define the signature and initial field settings in your application:

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

## Applying custom fonts to form fields

By implementing this configuration, users can select from the defined custom fonts when signing or initialing document form fields. Ensure the external font resources are accessible from the client browser.

N> Any number of custom fonts can be added to the array. The fonts will appear in the signature/initial dialog dropdown in the order they are defined.
