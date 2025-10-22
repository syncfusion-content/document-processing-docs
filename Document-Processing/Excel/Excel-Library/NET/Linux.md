---
title: FAQ about using XlsIO in Linux | Syncfusion
description: This page explains about the frequently asked questions about using the .NET Excel (XlsIO) library in Linux environment.
platform: document-processing
control: XlsIO
documentation: UG
---

# Frequently asked questions about using XlsIO in Linux

The frequently asked questions about using XlsIO in Linux environment are listed below.

## How to copy necessary fonts to Linux containers?

Excel to PDF conversion on Linux relies on system fonts available inside the container. By default, only a limited set is installed. Copy the required fonts to "/usr/local/share/fonts/" and refresh the font cache so they are used during conversion. Refer to the steps below to copy fonts.

**Steps:**

Step 1: Create a **Fonts** folder inside your project (or next to the solution).
Step 2: Place the required TrueType/OpenType font files (.ttf/.otf) in that folder.
Step 3: Add the following to your Dockerfile to install font support, copy fonts, and refresh the cache.

{% tabs %}

{% highlight Dockerfile %}

# Install native font support 
RUN apt-get update && apt-get install -y --no-install-recommends \
    fontconfig \
    libfreetype6 \
    libpng16-16 \
    libexpat1 \
    libuuid1 \
    && rm -rf /var/lib/apt/lists/*

# Copy fonts from your project into the container
COPY ["ProjectName/Fonts/*.*", "/usr/local/share/fonts/"]

# Refresh the font cache so the new fonts are recognized
RUN fc-cache -f -v 

{% endhighlight %}     

{% endtabs %}   

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Linux/Copy%20fonts%20to%20linux%20containers/.NET/Copy_fonts_to_linux_containers).

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

This exception occurs when required native dependencies are missing. Ensure the necessary packages are installed by adding this to your Docker file:

{% tabs %}

{% highlight Dockerfile %}
RUN apt-get update -y && apt-get install libfontconfig -y
{% endhighlight %}

{% endtabs %}

In production environment (hosted server machine), ensure whether the Visual C++ Redistributable is properly installed.

[Download](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) and install Visual C++, if not installed.