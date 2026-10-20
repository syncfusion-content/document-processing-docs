---
layout: post
title: Optimize PDF Loading on Android in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to optimize document loading performance in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) by enabling a larger heap size on Android.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, android pdf viewer, maui pdf viewer performance, optimize pdf loading, large pdf documents, android large heap, sfpdfviewer memory optimization
---

# Optimizing document loading on Android in .NET MAUI PDF Viewer Control

When your application handles large images, complex graphics, or memory-intensive operations, the default heap size may not be sufficient, leading to performance issues or crashes. Enabling a larger heap allows the app to allocate more memory, ensuring smooth performance and preventing out-of-memory errors in such scenarios. You can enable this by adding the following highlighted attribute in your AndroidManifest.xml under the <application> tag.

{% tabs %}
{% highlight xml hl_lines="4" %}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
	<application android:allowBackup="true" android:icon="@mipmap/appicon" android:roundIcon="@mipmap/appicon_round" 
        android:largeHeap="true" ></application>
	https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui.
</manifest>
{% endhighlight %}
{% endtabs %}

## See Also

- [Open from Local Storage](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-local-storage)
- [Open a Password-Protected Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document)
- [Document Load Notifications](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/documentloadnotifications)