---
title: FAQ about using XlsIO in Linux | Syncfusion
description: This page explains about the frequently asked questions about using the .NET Excel (XlsIO) library in Linux environment.
platform: document-processing
control: XlsIO
documentation: UG
---

# Frequently asked questions about using XlsIO in Linux

The frequently asked questions about using XlsIO in Linux environment are listed below.

## How to set culture/locale in Docker containers (Windows and Linux)?
 
By default, Culture/Locale that is specified in the container image will be used in Docker containers.

If you want to change or set Culture/Locale in the Docker container, set the required Culture/Locale in Docker file.

T> We recommend you check whether the required Culture/Locale is set to the Docker containers since some Docker container may not have Culture/Locale.

The following code example will set en_US locale to the container by setting Language to en_US.

{% tabs %}

{% highlight Dockerfile %}
ENV LANG="en_US.UTF-8"
{% endhighlight %}

{% endtabs %}

## How to resolve LibSkiaSharp not found exception?

This exception occurs when required native dependencies are missing. Ensure **libfontconfig** is installed by adding this to your Dockerfile:

{% tabs %}

{% highlight Dockerfile %}
RUN apt-get update -y && apt-get install libfontconfig -y
{% endhighlight %}

{% endtabs %}

In production environment (hosted server machine), ensure whether the Visual C++ Redistributable is properly installed.

[Download](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) and install Visual C++, if not installed.