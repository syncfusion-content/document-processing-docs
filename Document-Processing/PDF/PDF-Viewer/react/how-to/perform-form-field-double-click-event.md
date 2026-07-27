---
layout: post
title: Handle form field double-click event in React PDF Viewer | Syncfusion
description: Learn how to handle the form field double-click event in the Syncfusion React PDF Viewer component to customize user interactions.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Form field double-click event in React PDF Viewer

This article demonstrates how to handle a double-click on a PDF form field by using the [`formFieldDoubleClick`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#formfielddoubleclick) event. The event provides information about the clicked field and can be used to open custom editors, show dialogs, or trigger other application behaviors.


**Step 1:** Create a simple PDF Viewer sample in React by following the steps in the appropriate getting-started guide based on your deployment mode.

* [Getting started with the React Standalone PDF Viewer](../getting-started)

**Step 2:** Subscribe to the `formFieldDoubleClick` event in the `index.js` file. The complete code for each deployment mode is shown below.

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