---
layout: post
title: Document link annotation in Flutter PDF Viewer | Syncfusion
description: Learn here all about document link annotation feature of Syncfusion® Flutter PDF Viewer (SfPdfViewer) widget and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Document Link Annotation in Flutter PDF Viewer (SfPdfViewer)

By default, the [SfPdfViewer](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer-class.html) allows you to navigate to a specific topic or position within a PDF document by tapping a document link annotation.

## Enable or Disable the Document Link Annotation Navigation

You can enable or disable the navigation of document link annotations using the [enableDocumentLinkAnnotation](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer/enableDocumentLinkAnnotation.html) property. The default value of this property is `true`. The following code example explains how to disable the document link annotation navigation.

{% tabs %}
{% highlight dart hl_lines="6" %}

@override
Widget build(BuildContext context) {
  return Scaffold(
      body: SfPdfViewer.network(
              'https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf',
              enableDocumentLinkAnnotation: false));
}

{% endhighlight %}
{% endtabs %}