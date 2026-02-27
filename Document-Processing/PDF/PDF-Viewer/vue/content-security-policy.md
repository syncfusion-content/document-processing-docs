---
layout: post
title: Content Security Policy with Vue PDF Viewer component | Syncfusion
description: Learn here all about Content Security Policy with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: CSP
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy in Vue PDF Viewer

Content Security Policy (CSP) is a security feature implemented by web browsers that helps protect against attacks such as cross-site scripting (XSS) and data injection. It restricts the sources from which content can be loaded on a web page.

When enabling strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), certain browser features are disabled by default for enhanced security. To use the Syncfusion PDF Viewer control in strict CSP mode, specific directives must be configured in the CSP meta tag to allow the control's necessary resources.

## CSP Directives Reference

The following table describes each CSP directive and its usage with the Syncfusion PDF Viewer:

| Directive                          |  Usage                                                                                                                                                                                                                  |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `default-src 'self';`              | Sets the default policy for loading resources. `'self'` restricts loading to the same origin (same domain).                                                                                                 |
| `script-src 'self' 'wasm-unsafe-eval' blob:;` | Defines where JavaScript and WebAssembly code can be loaded. `'self'` allows scripts from the same origin. `'wasm-unsafe-eval'` permits WebAssembly compilation from JavaScript functions. `blob:` allows loading scripts from Blob URLs. |
| `worker-src 'self' blob:;`         | Controls where web workers can be loaded. `'self'` allows same-origin workers. `blob:` enables blob-based workers, which are common in PDF viewers and compute-intensive applications.                                                     |
| `connect-src 'self' data:;`        | Restricts network requests (fetch, XHR, WebSockets) to specified sources. `'self'` limits requests to the same origin. `data:` allows data URIs.                                                          |
| `style-src 'self' blob:;`          | Defines stylesheet sources. `'self'` restricts to the same origin. `blob:` allows dynamically generated styles necessary for runtime CSS generation.                               |
| `font-src 'self' data:;`           | Controls font loading sources. `'self'` allows local fonts. `data:` permits inline fonts (base64 encoded), and URLs enable loading from external font CDNs.                                                 |
| `img-src 'self' data: blob:;`      | Controls image loading sources. `'self'` restricts to the same origin. `data:` allows inline images (base64 encoded). `blob:` allows Blob URLs for dynamically generated images.                                                                                                 |

## Configuring CSP for PDF Viewer

The following sections describe CSP configurations required for different PDF Viewer features.

### Styles and Fonts

The PDF Viewer is rendered with calculated inline styles and base64-encoded font icons, which are blocked in strict CSP mode. Additionally, the material and tailwind built-in themes reference the external Roboto font from Google Fonts, which must also be allowed.

Include the following directives to permit inline styles and external fonts:

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ blob:;
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />

{% endhighlight %}
{% endtabs %}

The meta tag should be placed within the `<head>` section of the HTML document to resolve CSP violations when using material or tailwind themes:

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ blob:;
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

### Images and Blobs

When images are added as blob or base64 data to the PDF Viewer, they are blocked in strict CSP mode. To permit these resources, include the [`img-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directive in the CSP meta tag:

{% tabs %}
{% highlight razor tabtitle="HTML" %}
<head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    script-src 'self' 'wasm-unsafe-eval' blob:;
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;
    style-src 'self' https://fonts.googleapis.com/ blob:;
    img-src 'self' data:"/>
</head>
{% endhighlight %}
{% endtabs %}

### Scripts, WebAssembly, and Workers

The PDF Viewer uses WebAssembly and web workers for processing and rendering. Both are blocked in strict CSP mode. To enable these features, include the [`script-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src), [`worker-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src), and [`connect-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src) directives:

{% tabs %}
{% highlight razor tabtitle="HTML" %}
<head>
 <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    script-src 'self' 'wasm-unsafe-eval' blob:;
    worker-src 'self' blob:;
    connect-src 'self' data:;
    style-src 'self' https://fonts.googleapis.com/ blob:;
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;
    img-src 'self' data: blob:;" />
</head>
{% endhighlight %}
{% endtabs %}

N> In accordance with the latest security practices, the Syncfusion PDF Viewer control recommends using `wasm-unsafe-eval` in the Content Security Policy (CSP) settings to enable secure WebAssembly compilation. This directive allows WebAssembly to be compiled from JavaScript functions while maintaining a secure execution environment. Update your CSP meta tags to reflect this change for optimal security compliance.

## Security Best Practices

- Test CSP configurations thoroughly in development to identify blocked resources before deployment.
- Monitor browser console for CSP violations that may indicate missing directives.
- Use the most restrictive CSP possible while maintaining required functionality.
- Regularly review CSP settings when upgrading the Syncfusion PDF Viewer to the latest version.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master)