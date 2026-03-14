---
layout: post
title: Use strict CSP in Blazor SfPdfViewer | Syncfusion
description: Learn how to configure a strict Content Security Policy (CSP) for the Blazor SfPdfViewer, including required directives and their usage.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Use strict CSP in Blazor SfPdfViewer

Content Security Policy (CSP) is a browser security mechanism that mitigates attacks such as cross-site scripting (XSS) and data injection by restricting the allowed sources for loaded content.

When enforcing a strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), some browser features are blocked by default. To use the Blazor `SfPdfViewer` with a strict CSP, add the directives below to your CSP meta tag.

* The SfPdfViewer renders calculated inline styles and Base64 font icons, which are blocked by strict CSP. Allow these by adding the [`style-src 'self' 'unsafe-inline' blob:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives.

* The material and tailwind themes reference the Roboto font from Google Fonts, which is blocked under strict CSP. Allow it by including the Google Fonts endpoints in the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives.

* The SfPdfViewer uses web workers and makes network requests. Allow these by adding [`worker-src 'self' blob:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src) and [`connect-src 'self' https://cdn.syncfusion.com data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src).

* For JavaScript execution and WebAssembly, include [`script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://cdn.syncfusion.com blob:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) to allow inline scripts, eval, and blob-based scripts.

Include the following meta tag inside the `<head>` element to address CSP violations when using the SfPdfViewer with material and tailwind themes.

{% tabs %}
{% highlight razor tabtitle="HTML" %}
<head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    frame-src 'self' blob:;
    script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://cdn.syncfusion.com blob:;
    style-src 'self' 'unsafe-inline' blob: https://cdn.syncfusion.com https://fonts.googleapis.com;
    img-src 'self' blob: data:;
    worker-src 'self' blob:;
    connect-src 'self' https://cdn.syncfusion.com data:;
    font-src 'self' data: https://fonts.googleapis.com/ https://fonts.gstatic.com/;" />
</head>
{% endhighlight %}
{% endtabs %}

N>The `SfPdfViewer` component requires specific Content Security Policy (CSP) directives to function properly in Blazor WebAssembly applications.  
- In **.NET 9.0**, include `'wasm-unsafe-eval'` in the `script-src` directive to support WebAssembly operations.  
- In **.NET 8.0**, you must also include `'unsafe-eval'` in the `script-src` directive to avoid runtime errors caused by restricted dynamic JavaScript execution.  
- Ensure the `worker-src` directive includes `'self'` and `blob:` to enable web worker functionality.  
These directives are essential for correct behavior under strict CSP environments.


### Directive usage

| Directive                          | Usage                                                                                                                                                                                                                  |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `default-src 'self';`              | Sets the default policy for loading resources. `'self'` means only allow resources from the same origin (same domain).                                                                                                 |
| `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://cdn.syncfusion.com blob:;` | Defines where JavaScript code can come from. `'self'` allows scripts from the same origin. `'unsafe-inline'` allows inline scripts. `'wasm-unsafe-eval'` allows eval() operations for WebAssembly in **.NET 9.0**. `'unsafe-eval'` allows eval() operations for WebAssembly in **.NET 8.0**. `blob:` allows loading scripts from Blob URLs. |
| `worker-src 'self' blob:;`         | Controls where workers can be loaded from. `'self'` allows same-origin workers. `blob:` allows blob-based workers, common in PDF viewers and heavy JS applications.                                                     |
| `connect-src 'self' https://cdn.syncfusion.com data:;` | Controls where the application can make network requests, such as `fetch()`, XHR, and WebSockets. `'self'` restricts to the same origin, with additional allowances for Syncfusion CDN and data URLs. |
| `style-src 'self' 'unsafe-inline' blob: https://cdn.syncfusion.com https://fonts.googleapis.com;` | Defines the sources for stylesheets. `'self'` restricts to the same origin. `'unsafe-inline'` allows inline styles. `blob:` allows dynamically generated styles. External font CDNs are also allowed. |
| `font-src 'self' data: https://fonts.googleapis.com/ https://fonts.gstatic.com/;` | Controls where fonts can be loaded from. `'self'` allows local fonts. `data:` allows inline fonts (base64 embedded), and the URLs allow loading from external font CDNs. |
| `img-src 'self' blob: data:;`      | Controls where images can be loaded from. `'self'` restricts to the same origin. `blob:` allows blob-based images. `data:` allows inline images (base64).                                                            |
| `frame-src 'self' blob:;`          | Controls where frames can be loaded from. `'self'` allows same-origin frames. `blob:` allows blob-based frames, which may be used by the PDF Viewer for certain operations.                                          |

[View the strict CSP sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Pdfviewer%20Sample%20With%20CSP).
