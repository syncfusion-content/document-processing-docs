---
layout: post
title: Retry Timeout in Angular PDF Viewer | Syncfusion
description: Learn how retryTimeout and retryCount improve request resiliency in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Retry Timeout
documentation: ug
domainurl: ##DomainURL##
---

# Retry Timeout

The **Retry Timeout** feature specifies a duration for the PDF Viewer to retry failed AJAX requests before considering them permanent failures. This helps handle temporary failures due to network issues or server unavailability.

The `retryTimeout` property defines a duration after which failed AJAX requests are retried automatically. Configuring an appropriate value helps ensure a more resilient and fault-tolerant viewing experience.

By default, when an AJAX request fails, the Retry Timeout property is set to `0`, indicating that no timeout is set. In this case, the PDF Viewer waits indefinitely for a response, which can lead to a hanging request. The Retry Timeout property can be set to a positive number specifying the maximum number of seconds the PDF Viewer should wait for a response. If the response is not received within the specified time, the request is aborted, triggering an appropriate error or timeout state.

To set the retry timeout, use the `retryTimeout` property in the PDF Viewer configuration. This property takes a value in seconds.

```html

<ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      [retryTimeout]="10"
      [retryCount]="5"
      style="height:640px;display:block">
</ejs-pdfviewer>

```

In the given example, the `retryTimeout` is set to 10 seconds, and the `retryCount` is set to 5. This means that if a request made by the PDF Viewer takes longer than 10 seconds to receive a response, it will be considered a timeout. In such cases, The PDF Viewer will resend the same request based on the retryCount. Here, this process will repeat up to maximum of 5 retries.

When an exception occurs during the AJAX request in the context of the PDF Viewer, the request will wait for the specified `retryTimeout` duration. If the timeout duration is exceeded, the PDF Viewer will decrement the [retryCount](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#retrycount) and attempt to load the document again. This retry process continues until the document is successfully loaded or the retryCount limit is reached.

The `retryCount` property of the PDF Viewer specifies the number of retries for a request. This is useful for handling temporary errors such as network timeouts or server issues. Initiating new requests according to the retry count helps provide a smoother experience and handle transient problems efficiently.

If the timeout duration specified by `retryTimeout` is exceeded during an AJAX request, the PDF Viewer decrements `retryCount` and initiates a new request. This continues until the document loads successfully or the retry count limit is reached, improving handling of temporary errors and overall efficiency.

For a complete example, see the sample: [Retry Timeout](https://stackblitz.com/edit/angular-yzgy7n-8mycf4?file=app.component.html)
