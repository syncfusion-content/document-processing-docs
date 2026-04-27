---
layout: post
title: Retry Timeout | Syncfusion
description: Learn here all about Retry Timeout in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Retry Timeout
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retry Timeout

The `retryTimeout` property controls how long the PDF Viewer waits (in seconds) for an AJAX response before considering that request timed out. When a timeout occurs, the viewer will retry the request according to the `retryCount` setting. Properly configuring `retryTimeout` and `retryCount` makes the viewer more resilient to transient network errors while avoiding excessive load on the server.

Defaults and units:

- `retryTimeout` is specified in seconds. A value of `0` disables the timeout and may cause requests to hang indefinitely — avoid this in production.
- `retryCount` sets how many retry attempts the viewer makes after timeouts or transient failures.

Use cases:

- Short `retryTimeout` values (for example, 5–15 seconds) are appropriate for responsive UIs where a quick failover is preferred.
- Increase `retryCount` only when the server or network is expected to recover quickly; otherwise, prefer a lower `retryCount` combined with an appropriate `retryTimeout`.

To set the retry timeout, use the `retryTimeout` property in the PDF Viewer configuration. This property takes a value in seconds.

{% raw %}

```javascript

<PdfViewerComponent
    id="container"
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
    retryTimeout={10}
    retryCount={5}
    style={{ height: '640px' }}>
</PdfViewerComponent>

```
{% endraw %}

In the given example, the `retryTimeout` is set to 10 seconds, and the `retryCount` is set to 5. This means that if a request made by the PDF Viewer takes longer than 10 seconds to receive a response, it will be considered a timeout. In such cases, The PDF Viewer will resend the same request based on the retryCount. Here, this process will repeat up to maximum of 5 retries.

When an AJAX request times out, the viewer decrements `retryCount` and retries the request until the count reaches zero. The viewer stops retrying when the request succeeds or when `retryCount` is exhausted, at which point the viewer surfaces an error to the application.

The `retryCount` property of the PDF Viewer allows you to set the number of retries for a specific request. This feature is particularly useful for handling temporary errors such as network timeouts or server issues. By initiating new requests according to the retry count, ensure a smoother user experience and efficiently handle network or server problems.

If the timeout duration specified by `retryTimeout` is exceeded during the AJAX request, the PDF Viewer will decrement the `retryCount` and initiate a new request. This process will continue until the document is successfully loaded or the retry count limit is reached. This functionality helps improve the handling of temporary errors and ensures a more efficient and user-friendly experience.

Find the sample [Retry Timeout](https://stackblitz.com/edit/react-zhvocw?file=src%2Findex.js)