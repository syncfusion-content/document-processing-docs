---
layout: post
title: Lock annotation in React PDF Viewer component | Syncfusion
description: Learn how to lock square or rectangle annotations in the Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Lock annotation in React PDF Viewer component

The PDF Viewer supports locking annotations to prevent users from moving, resizing, or removing them. Locking can be applied via annotation settings or by handling viewer events and updating annotation metadata.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet to lock the rectangle or square annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

     <PdfViewerComponent
      id="container"
       documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
       resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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
       rectangleSettings={{ isLock: true }}
       style={{ height: '640px' }}>
      </PdfViewerComponent>

{% endraw %}
{% endhighlight %}
{% endtabs %}

See the sample: [how to lock square or rectangle annotations](https://stackblitz.com/edit/react-yxp8kz?file=src%2Findex.js)

## See also

- [Getting started with React Standalone PDF Viewer](../getting-started)
- [Getting started with React Server-Backed PDF Viewer](../getting-started-with-server-backed)
- [How to create and run a custom PDF Viewer Web Service](./create-and-run-custom-pdf-viewer-web-service)