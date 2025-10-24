---
layout: post
title: Content Security Policy in JavaScript PDF Viewer control | Syncfusion
description: Learn how to configure Content Security Policy directives for the Syncfusion JavaScript PDF Viewer control to allow required resources.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Content Security Policy in JavaScript PDF Viewer

Content Security Policy (CSP) is a browser security feature that helps mitigate attacks such as cross-site scripting (XSS) and data injection by restricting the sources from which content can load.

When strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html) is enabled, several browser capabilities are disabled by default. To run the Syncfusion PDF Viewer control under strict CSP, include the following directives in the CSP meta tag.

* The Syncfusion PDF Viewer control renders calculated **inline styles** and **base64** font icons, which strict CSP blocks. Allow these assets by adding the [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives, as shown below.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self'  data:;" />

{% endhighlight %}
{% endtabs %}

* The Syncfusion **material** and **tailwind** built-in themes reference the [`Roboto external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which strict CSP also blocks. Permit these resources by adding the font URLs to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the meta tag.

The resulting meta tag must be placed within the `<head>` element to resolve CSP violations when using the Syncfusion PDF Viewer control with the material and tailwind themes.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

* The Syncfusion PDF Viewer control can render images as **blob** and **base64** sources, which strict CSP blocks. To permit these formats, include the [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`img-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directives in the meta tag, as illustrated below.

{% tabs %}
{% highlight razor tabtitle="HTML" %}
<head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:;
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: 'unsafe-inline';
    style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
    img-src 'self' data:"/>
</head>
{% endhighlight %}
{% endtabs %}

N> Starting with the 2023 Vol 2 (v22.1) release, the Content Security Policy for the Syncfusion PDF Viewer control has been improved by using a [function template](../template#function-template) approach for template properties, eliminating the need for the `unsafe-eval` directive in the CSP meta tag.

[View the sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Troubleshooting/Content%20Security%20Policy)