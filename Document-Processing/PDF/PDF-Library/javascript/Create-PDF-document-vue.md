---
layout: post
title: Create or Generate PDF file in Vue | Syncfusion
description: Learn how to create a PDF file in Vue with easy steps using Syncfusion JavaScript PDF library without depending on Adobe
control: PDF
platform: document-processing
documentation: ug
keywords: pdf, script, vue, javascript
---

# Create or Generate PDF file in Vue application

The Syncfusion<sup>&reg;</sup> JavaScript PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the JavaScript PDF library into an Vue application.

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [Vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
```

When creating a new project, choose the option `Default ([Vue 2] babel, es-lint)` from the menu.

![Vue 2 project](Getting_started_images/vue2-terminal.png)

Once the `quick start` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

* **Add script reference** : Add the required scripts using the CDN inside the `<head>` of `index.html` as follows:

{% tabs %}
{% highlight c# tabtitle="~/index.html" %}

<head>
    ...
    <!-- Syncfusion EJ2 PDF Library (CDN) -->
    <script src="https://cdn.syncfusion.com/ej2/31.2.15/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

* **Create a PDF document** : Add the script in `App.vue` by creating a button and attaching a click event that uses the JavaScript PDF API to generate a PDF document.

{% tabs %}
{% highlight c# tabtitle="~/App.vue" %}

<script>
export default {
  name: 'App',
  methods: {
    createPdf() {
      
  // Create a new PDF document
  const pdf = new window.ej.pdf.PdfDocument();
  // Add a new page
  const page = pdf.addPage() as PdfPage;
  // Get graphics from the page
  const graphics = page.graphics;
  // Set font (Syncfusion EJ2 API)
  const font = new PdfStandardFont(window.ej.pdf.PdfFontFamily.helvetica, 36, window.ej.pdf.PdfFontStyle.regular);
  // Create a new black brush (RGB array)
  const brush = new window.ej.pdf.PdfBrush({r: 0, g: 0, b: 0});
  // Draw text inside a rectangle [x, y, width, height]
  graphics.drawString('Hello World!!!', font, {x: 20, y: 20, width: graphics.clientSize.width - 20, height: 60}, brush);
  // Save and download PDF
  pdf.save('Output.pdf');
  // Destroy the PDF document instance
  pdf.destroy();

    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```
or

```bash
yarn run serve
```

By executing the program, you will generate the following PDF document.

![Vue PDF output](Getting_started_images/Output.png)
