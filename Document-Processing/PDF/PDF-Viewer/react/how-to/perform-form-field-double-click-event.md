---
layout: post
title: Perform form field double click event in React Pdfviewer component | Syncfusion
description: Learn here all about Perform form field double click event in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Perform form field double click event
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

## Perform form field double-click event in React PDF Viewer

This article demonstrates how to handle a double-click on a PDF form field by using the `formFieldDoubleClick` event. The event provides information about the clicked field and can be used to open custom editors, show dialogs, or trigger other application behaviors.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet in the `index.js` file to add the form field double click event in the PDF Viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
  resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
  formFieldDoubleClick={formFieldDoubleClick}
  style={{ height: '640px' }}>
</PdfViewerComponent>

function formFieldDoubleClick(args) {
    //Prints the argument value in the console window
    console.log(args);
  }

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
  formFieldDoubleClick={formFieldDoubleClick}
  serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
  style={{ height: '640px' }}>
</PdfViewerComponent>

function formFieldDoubleClick(args) {
    //Prints the argument value in the console window
    console.log(args);
  }

{% endraw %}
{% endhighlight %}
{% endtabs %}