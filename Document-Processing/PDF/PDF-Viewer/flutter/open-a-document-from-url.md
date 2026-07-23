---
layout: post
title: Open a Document From URL in Flutter PDF Viewer | Syncfusion
description: Learn here about opening a PDF document from a URL in the Syncfusion® Flutter PDF Viewer widget (SfPdfViewer).
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open a Document From URL in Flutter PDF Viewer (SfPdfViewer)

The [SfPdfViewer.network](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer/SfPdfViewer.network.html) creates a widget that displays the PDF document obtained from a URL. The following code example explains the same.

{% tabs %}
{% highlight dart hl_lines="4 5" %}

@override
Widget build(BuildContext context) {
  return Scaffold(
      body: SfPdfViewer.network(
              'https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf'));
}

{% endhighlight %}
{% endtabs %}

To load a PDF from network using [SfPdfViewer.network](https://pub.dev/documentation/syncfusion_flutter_pdfviewer/latest/pdfviewer/SfPdfViewer/SfPdfViewer.network.html) on macOS, network access must be enabled in your macOS application. In your `macos/Runner/DebugProfile.entitlements` file, add the following lines inside the `<dict>` tag to enable network access in your application:

```html
<key>com.apple.security.network.client</key>
<true/>
```

N> Due to CORS security restrictions in a web application, some PDFs obtained from URLs might not be loaded on the `SfPdfViewer` web platform. Kindly refer to the Flutter [forum](https://github.com/flutter/flutter/issues/51125) for more information on this issue. See the [Resolve CORS issue](#resolve-cors-issue) section below for details on how the issue occurs and how to resolve it.

## Resolve CORS issue

When loading a PDF from a URL in the `SfPdfViewer` web platform, the browser enforces the Cross-Origin Resource Sharing (CORS) policy. The PDF is fetched using an `XMLHttpRequest`, and the browser blocks the response if the server hosting the PDF does not include the appropriate CORS headers (such as `Access-Control-Allow-Origin`) in its response. As a result, the PDF fails to load and you may see a CORS error in the browser console such as **"Access to XMLHttpRequest at 'PDF_URL' from origin 'APP_ORIGIN' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."**

This typically happens when the PDF is hosted on a third-party server, a CDN that does not allow cross-origin access, or a local server without CORS configured.

This issue can be resolved by configuring the CORS settings on the requested server or by disabling the security settings in **chrome.dart** as mentioned in the steps below:

1. Go to **flutter\bin\cache** and remove a file named: **flutter_tools.stamp**.
2. Go to **flutter\packages\flutter_tools\lib\src\web** and open the file **chrome.dart**.
3. Find **'--disable-extensions'**.
4. Add **'--disable-web-security'**.
