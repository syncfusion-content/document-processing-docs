---
layout: post
title: Fix ERR_OSSL_EVP_UNSUPPORTED Error in Syncfusion React PDF Viewer
description: Resolve the ERR_OSSL_EVP_UNSUPPORTED error when running React PDF Viewer by setting the Node.js OpenSSL legacy provider option.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Troubleshoot ERR_OSSL_EVP_UNSUPPORTED Error

When running your React application with the PDF Viewer, you may encounter the **ERR_OSSL_EVP_UNSUPPORTED** error. This error is related to OpenSSL, which is a cryptographic library used by Node.js for secure communication and encryption tasks. This specific error typically occurs when Node.js is trying to use cryptographic algorithms or routines that are not supported by the current version of OpenSSL being used.

## Solution

To resolve this issue, run the following command in your terminal before starting your application:

{% tabs %}
{% highlight bash tabtitle="Windows (PowerShell)" %}

$env:NODE_OPTIONS = "--openssl-legacy-provider"

{% endhighlight %}
{% highlight bash tabtitle="Windows (CMD)" %}

set NODE_OPTIONS=--openssl-legacy-provider

{% endhighlight %}
{% highlight bash tabtitle="Mac/Linux" %}

export NODE_OPTIONS=--openssl-legacy-provider

{% endhighlight %}
{% endtabs %}

After setting the environment variable, start your application:

```bash
npm run dev
```

## Permanent Solution

To avoid running this command every time, you can add it to your `package.json` scripts:

```json
{
  "scripts": {
    "dev": "SET NODE_OPTIONS=--openssl-legacy-provider && vite",
    "build": "SET NODE_OPTIONS=--openssl-legacy-provider && vite build"
  }
}
```

N> For Mac/Linux, use `export NODE_OPTIONS=--openssl-legacy-provider &&` instead of `SET NODE_OPTIONS=--openssl-legacy-provider &&` in the scripts.
