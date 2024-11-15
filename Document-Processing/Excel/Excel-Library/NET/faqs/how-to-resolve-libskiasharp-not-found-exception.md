---
title: How to resolve LibSkiaSharp not found exception | Syncfusion
description: This page explains how to resolve LibSkiaSharp not found exception using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to resolve LibSkiaSharp not found exception?

* In Docker container, ensure whether the libfontconfig package properly installed by adding the following line in your Docker file.

{% tabs %}
{% highlight Dockerfile %}
RUN apt-get update -y && apt-get install libfontconfig -y
{% endhighlight %}
{% endtabs %}

* In production environment (hosted server machine), ensure whether the Visual C++ Redistributable is properly installed.

[Download](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) and install Visual C++, if not installed.