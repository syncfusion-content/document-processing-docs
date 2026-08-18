---
layout: post
title: Open a Document From Memory in Flutter PDF Viewer | Syncfusion
description: The PDF loading from memory feature in SfPdfViewer enables users to open and display PDF documents directly from in-memory byte data.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open a Document From Memory in Flutter PDF Viewer

The [SfPdfViewer.memory](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer/SfPdfViewer.memory.html) creates a widget that displays the PDF document obtained from the [Uint8List](https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html). The following code example demonstrates this.

{% tabs %}
{% highlight dart hl_lines="4 5" %}

@override
Widget build(BuildContext context) {
  return Scaffold(
      body: SfPdfViewer.memory(
              bytes));
}

{% endhighlight %}
{% endtabs %}