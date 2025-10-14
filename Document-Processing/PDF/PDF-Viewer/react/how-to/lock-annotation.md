---
layout: post
title: Lock annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Lock annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Lock annotation
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Lock annotation in React Pdfviewer component

The PDF Viewer library allows you to lock the rectangle or square annotations using the **isLock** property in the **rectangleSettings**.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet to lock the rectangle or square annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

     <PdfViewerComponent
      id="container"
       documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
       resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
      // lock annotation
      rectangleSettings={{ isLock: true }}
      style={{ height: '640px' }}>
      </PdfViewerComponent>

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

     <PdfViewerComponent
      id="container"
       documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
       serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
      // lock annotation
      rectangleSettings={{ isLock: true }}
      style={{ height: '640px' }}>
      </PdfViewerComponent>

{% endraw %}
{% endhighlight %}
{% endtabs %}

Find the Sample [how to lock square or rectangle annotations](https://stackblitz.com/edit/react-yxp8kz?file=src%2Findex.js)