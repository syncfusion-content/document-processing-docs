---
title: FAQ about using XlsIO on Linux | Syncfusion
description: Common questions and fixes for using Syncfusion XlsIO in Linux environments, including Docker containers, font installation, locale setup, and SkiaSharp native dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Frequently asked questions about using XlsIO on Linux

This page covers common questions and fixes for using Syncfusion XlsIO in Linux environments, including Docker containers, font installation, locale setup, and SkiaSharp native dependencies. The font-related sections are only relevant for Excel-to-PDF or Excel-to-image conversion; reading and writing XLSX does not require fonts.

## Prerequisites

To follow the steps on this page, ensure the following are in place:

- A Linux host or container based on Debian or Ubuntu (the `apt-get` snippets target `apt`). For other distributions, use the equivalent package manager (`dnf` on RHEL/Fedora, `apk` on Alpine).
- A working Dockerfile if you are building a container image.
- The Syncfusion XlsIO NuGet package installed and a valid license registered in your application.

## How to copy necessary fonts to Linux containers?

Excel to PDF conversion on Linux relies on system fonts available inside the container. By default, only a limited set is installed. Copy the required fonts to "/usr/local/share/fonts/" before conversion. Refer to the steps below to copy fonts.

**Steps:**

**Step 1:** Create a `Fonts` folder inside your project (or next to the solution).
**Step 2:** Place the required TrueType or OpenType font files (`.ttf` or `.otf`) in that folder.
**Step 3:** Add the following to your `Dockerfile` to copy the fonts into the container and rebuild the font cache.

{% tabs %}

{% highlight Dockerfile %}

COPY ["ProjectName/Fonts/*.*", "/usr/local/share/fonts/"]

{% endhighlight %}     

{% endtabs %}   

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Linux/Copy%20fonts%20to%20linux%20containers/.NET/Copy_fonts_to_linux_containers">GitHub</a>.

## How to install Microsoft compatible fonts on Linux?

By default, Linux systems include a limited set of fonts located at `/usr/share/fonts/`. For document conversion scenarios that require Microsoft-compatible fonts, you can install them using the following command. The `debconf-set-selections` line accepts the Microsoft EULA so the install runs non-interactively inside a container build.

{% tabs %}

{% highlight Kconfig %}
sudo apt-get install ttf-mscorefonts-installer
{% endhighlight %}

{% endtabs %}

After installation, the fonts will be available at "/usr/share/fonts/truetype/msttcorefonts", and will be used during conversion.

N> Ensure you have obtained the appropriate license clearance from Microsoft before using these fonts in your environment.

## How to install necessary fonts in Linux containers?

In Excel to PDF conversion, Essential<sup>&reg;</sup> XlsIO uses the fonts installed in the production environment to measure and render text. If a required font is missing, an alternate font will be used based on the environment, which may affect layout fidelity.

To ensure proper font preservation, install all fonts used in the Excel document within the container.

Use the following code snippet to install fonts in containers.

{% tabs %}

{% highlight Dockerfile %}
RUN apt-get update -y && \
    apt-get install -y fontconfig debconf && \
    echo "ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true" | debconf-set-selections && \
    apt-get install -y \
        fonts-arphic-ukai \
        fonts-arphic-uming \
        fonts-ipafont-mincho \
        fonts-ipafont-gothic \
        fonts-unfonts-core \
        ttf-wqy-zenhei \
        ttf-mscorefonts-installer && \
    fc-cache -fv && \
    apt-get clean && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*
{% endhighlight %}

{% endtabs %}

If font preservation issues persist after installing the required packages, you can manually copy the necessary font files into the container.

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

This exception occurs when SkiaSharp's native Linux dependencies are missing. Add the following to your `Dockerfile` to install `libfontconfig1` (note the trailing `1` in the package name on Debian/Ubuntu), then rebuild the image:

{% tabs %}

{% highlight Dockerfile %}
RUN apt-get update -y && apt-get install libfontconfig -y
{% endhighlight %}

{% endtabs %}

In production environment (hosted server machine), ensure whether the Visual C++ Redistributable is properly installed.

[Download](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) and install Visual C++, if not installed.