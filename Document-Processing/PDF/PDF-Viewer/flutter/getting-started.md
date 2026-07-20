---
layout: post
title: Getting Started with Flutter PDF Viewer Widget | Syncfusion
description: Learn here about getting started with Syncfusion® Flutter PDF Viewer (SfPdfViewer) widget, its elements, and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Getting Started with Flutter PDF Viewer (SfPdfViewer)
This section explains the steps to add the [SfPdfViewer](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer-class.html) widget to your Flutter application and load a PDF document.

To get started quickly, you can also check out our video tutorial below. 

<style>#FlutterSfPdfViewerGettingStartedTutorial{width : 90% !important; height: 400px !important }</style> <iframe id='FlutterSfPdfViewerGettingStartedTutorial' src="https://www.youtube.com/embed/f1zEJZRdo7w?si=KaBtOjAEbrrRBw5y"></iframe>

## Create Flutter Application
Create a simple project using the instructions given in the [Getting Started with your first Flutter app](https://docs.flutter.dev/get-started/test-drive#choose-your-ide) documentation.

## Install the Flutter PDF Viewer package
Install the [Syncfusion<sup>&reg;</sup> Flutter PDF Viewer](https://pub.dev/packages/syncfusion_flutter_pdfviewer/versions) package to your project by running the following command in your project's terminal:

{% tabs %}
{% highlight tabtitle="powershell" %}

flutter pub add syncfusion_flutter_pdfviewer

{% endhighlight %}
{% endtabs %}

## Specify Asset Path
Create an assets folder in the project root, add a sample PDF file (for example, flutter-succinctly.pdf) to it, and specify the asset path in the `pubspec.yaml` file under the flutter section.

{% tabs %}
{% highlight yaml tabtitle="pubspec.yaml" %}

flutter:
  assets:
    - assets/

{% endhighlight %}
{% endtabs %}

## Add Script Tags
For the web platform, we have used [PdfJs](https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js) for rendering the PDF pages, so the script files must be added to your `web/index.html` file.

In your `web/index.html` file, add the following `script` tags, in the `body` of the document:

For PdfJs library version 4.0 and above:
{% tabs %}
{% highlight html tabtitle="index.html" %}

<script type="module" async>
  import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs';
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
</script>

{% endhighlight %}
{% endtabs %}

For PdfJs library versions below 4.0:
{% tabs %}
{% highlight html tabtitle="index.html" %}

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
<script type="text/javascript">
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js";
</script>

{% endhighlight %}
{% endtabs %}

N> A version above **2.11.338** is recommended for using annotation support. Unsupported annotations are preserved rather than flattened during rendering.

## Import the Package

In the `main.dart` file, import the required package.

{% tabs %}
{% highlight dart %}

import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

{% endhighlight %}
{% endtabs %}

## Add the SfPdfViewer Widget and Load Document
In the `main.dart` file, replace the build method with the following code to display the PDF using [SfPdfViewer](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer-class.html).

{% tabs %}
{% highlight dart hl_lines="4" %}

@override
Widget build(BuildContext context) {
  return MaterialApp(
    home: Scaffold(body: SfPdfViewer.asset('assets/flutter-succinctly.pdf')),
  );
}

{% endhighlight %}
{% endtabs %}

N> You can refer to our [Flutter PDF Viewer](https://www.syncfusion.com/flutter-widgets/flutter-pdf-viewer) feature tour page for its groundbreaking features. You can also explore our [Flutter PDF Viewer example](https://flutter.syncfusion.com/#/pdf-viewer/getting-started), which shows you how to render and configure the PDF Viewer.

## See Also
- [Open Document](./open-a-document)
- [Viewing password protected pdf files](./viewing-password-protected-pdf-files)