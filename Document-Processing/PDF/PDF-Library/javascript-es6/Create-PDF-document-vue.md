---
layout: post
title: Getting started with Vue PDF library component | Syncfusion
description: Checkout and learn about Getting started with Vue PDF library component of Syncfusion Essential JS 2 and more details.
control: PDF
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Vue PDF library

The Syncfusion<sup>&reg;</sup> Vue PDF library is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, fill forms, and secure PDF files.

This guide explains how to integrate the EJ2 PDF library control and configure its available functionalities in a Vue 2 application using [Vue-CLI](https://cli.vuejs.org/).

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

* **Create a PDF document** : Add the script in `App.vue` by creating a button and attaching a click event that uses the EJ2 PDF API to generate a PDF document.

{% tabs %}
{% highlight c# tabtitle="~/App.vue" %}

<script>
export default {
  name: 'App',
  methods: {
    createPdf() {
      const pdf = new window.ej.pdf.PdfDocument();
      const page = pdf.addPage();
      const g = page.graphics;
      const font = new window.ej.pdf.PdfStandardFont(window.ej.pdf.PdfFontFamily.helvetica, 12);
      const brush = new window.ej.pdf.PdfBrush([0, 0, 0]);
      const pen = new window.ej.pdf.PdfPen([255, 0, 0], 1);
      g.drawString('Hello World!!!', font, [70, 10, 200, 50], null, brush, pen);
      pdf.save('Output.pdf');
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

![ASP.NET Core MVC PDF output](Getting_started_images/Output.png)
