---
title: FAQ about using DocIO in Linux | DocIO | Syncfusion
description: Learn about the frequently asked questions about using the .NET Word (DocIO) library in Linux environment.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about using DocIO in Linux

The frequently asked questions about using DocIO in Linux environment are listed below.

## How to copy necessary fonts to Linux containers?

The fonts present in the location (in Docker container) "/usr/local/share/fonts/" is used for conversion. By default, there will be limited number of fonts available in the container.

You should copy necessary fonts to this location "/usr/local/share/fonts/" before conversion. Refer to the steps below to copy fonts.

Step 1: Create a “Fonts” folder parallel to the *.sln file.
Step 2: Place the required font files in that folder.
Step 3: Add the following code to the Dockerfile to copy the fonts to the container:.

Use the following code example to copy fonts to containers.

{% tabs %}

{% highlight Dockerfile %}
COPY ["ProjectName/FontsFolder/*.*", "/usr/local/share/fonts/"]
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Copy-fonts-to-linux-containers).

## How to copy necessary Microsoft compatible fonts to Linux?

The fonts present in the location (in Linux) "/usr/share/fonts/" is used for conversion. By default, there will be limited number of fonts available in the Linux.

Use the following code example to install the Microsoft compatible fonts to Linux.

{% tabs %}

{% highlight Kconfig %}
sudo apt-get install ttf-mscorefonts-installer
{% endhighlight %}

{% endtabs %}

After the installation, the necessary Microsoft compatible fonts will be available in this location "/usr/share/fonts/truetype/msttcorefonts", which will be considered for conversion.

N> To use Microsoft fonts in your environment, kindly get the license clearance from Microsoft on your side.

## How to install necessary fonts in Linux containers?

In Word to PDF conversion, Essential<sup>&reg;</sup> DocIO uses the fonts which are installed in the corresponding production machine to measure and draw the text. If the font is not available in the production environment, then the alternate font will be used to measure and draw text based on the environment. And so, it is mandatory to install all the fonts used in the Word document in machine to achieve proper preservation.

Use the following code example to install fonts in containers.

{% tabs %}

{% highlight Dockerfile %}
RUN apt-get update -y && apt-get install libfontconfig -y
RUN echo "deb http://httpredir.debian.org/debian buster main contrib non-free" > /etc/apt/sources.list \ 
    && echo "deb http://httpredir.debian.org/debian buster-updates main contrib non- free" >> /etc/apt/sources.list \
    && echo "deb http://security.debian.org/ buster/updates main contrib non-free" >> /etc/apt/sources.list \
    && echo "ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true" | debconf-set-selections \
    && apt-get update \
    && apt-get install -y \
        fonts-arphic-ukai \
        fonts-arphic-uming \
        fonts-ipafont-mincho \
        fonts-ipafont-gothic \
        fonts-unfonts-core \
        ttf-wqy-zenhei \
        ttf-mscorefonts-installer \
    && apt-get clean \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*
{% endhighlight %}

{% endtabs %}

If you are still facing font preservation issues after trying the above solution, you can try moving the necessary font files to a docker Linux container. Refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/linux-faqs#how-to-copy-necessary-fonts-to-linux-containers) to learn how to do it.

## How to set culture/locale in Docker containers (Windows and Linux containers)?
 
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

* In Docker container, ensure whether the libfontconfig package properly installed by adding the following line in your Docker file.
{% tabs %}

{% highlight Dockerfile %}
RUN apt-get update -y && apt-get install libfontconfig -y
{% endhighlight %}

{% endtabs %}

* In production environment (hosted server machine), ensure whether the Visual C++ Redistributable is properly installed.

[Download](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) and install Visual C++, if not installed.

## How to perform Word to PDF in Linux prior to v18.4 release?

In Linux OS, you can perform the Word to PDF conversion using .NET Core (Targeting .netcoreapp) application. You can refer [Word to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#converting-word-document-to-pdf) to know about the packages required to deploy .NET Core (Targeting .netcoreapp) application with Word to PDF conversion capabilities.

In addition to the previous NuGet packages, SkiaSharp.Linux helper NuGet package is required that can be generated by the following steps: 

1. Download libSkiaSharp.so [here](https://github.com/mono/SkiaSharp/releases/download/v1.59.3/libSkiaSharp.so).
2. Create a folder and name it as SkiaSharp.Linux and place the downloaded file in the folder structure "SkiaSharp.Linux\runtimes\linux-x64\native"
3. Create a nuspec file with name SkiaSharp.Linux.nuspec using the following metadata information and place it inside SkiaSharp.Linux folder. The nuspec file can be customized.

{% tabs %}
{% highlight XML %}
<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2012/06/nuspec.xsd">
    <metadata>
        <id>SkiaSharp.Linux</id>
        <version>1.59.3</version>
        <title>SkiaSharp for Linux</title>
        <authors>Syncfusion Inc.</authors>
        <owners>Syncfusion Inc.</owners>
        <requireLicenseAcceptance>false</requireLicenseAcceptance>
        <description>SkiaSharp for Linux is a supporting package for Linux platforms.</description>
        <tags>linux,cross-platform,skiasharp,net-standard,net-core,word-to-pdf</tags>
        <dependencies>
            <group targetFramework=".NETStandard1.4">
                <dependency id="SkiaSharp" version="1.59.3" />
            </group>
        </dependencies>
    </metadata>
</package>
{% endhighlight %}
{% endtabs %}

4. Make sure that the nuget.exe file is present along with SkiaSharp.Linux folder (in the parent folder of SkiaSharp.Linux folder). If not, download it from [here](https://www.nuget.org/downloads#).
5. Open a command prompt and navigate to SkiaSharp.Linux folder.
6. Execute the following command.

~~~
nuget pack SkiaSharp.Linux\SkiaSharp.Linux.nuspec -outputdirectory "C:\NuGet" 
~~~

The output directory can be customized as per your need.

Now, SkiaSharp.Linux NuGet will be generated in the mentioned output directory and add the generated NuGet as additional reference. You can also find the SkiaSharp.Linux NuGet package created by us from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/SkiaSharp.Linux.1.59.3-2103435070#).

## What are the NuGet packages to be installed to perform Word to PDF conversion in Linux OS?

In Linux OS, you can perform Word to PDF conversion using .NET Core (Targeting .netcoreapp) application. You can refer [Word to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#converting-word-document-to-pdf) to know about the packages required to deploy .NET Core (Targeting .netcoreapp) applications with Word to PDF conversion capabilities.

In addition to the previous NuGet packages, the following NuGet packages need to be installed in your application.

<table>
<thead>
<tr>
<th width="20%">
Version
</th>
<th width="40%">
NuGet packages to install
</th>
</tr>
</thead>
<tr>
<td>
From v32.1.10
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v28.2.3
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.0.1](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.0.1)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v27.2.2
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.8](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.8)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v7.3.0.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v23.1.40
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.6](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.6)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v7.3.0](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v20.3.0.56 
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.2](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.2)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.8.2.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.8.2.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v20.1.0.x 
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.0-preview.209](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.0-preview.209)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.8.2-preview.209](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.8.2-preview.209)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v19.4.0.x
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.80.2 NuGet](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.80.2)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.6.1.7 NuGet](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.6.1.7)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v18.4.0.x to 19.4.0.x
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.80.2 NuGet](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.80.2)'| markdownify }}<br/>
</td>
</tr>
<tr>
<td>
Before v18.4.0.x
</td>
<td>
Install SkiaSharp.Linux NuGet package for .Net Core application in Linux OS. you can find the SkiaSharp.Linux NuGet package created by us from {{'[here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/SkiaSharp.Linux.1.59.3-2103435070)'| markdownify }}.<br/>
For more information, Please refer {{'[here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-perform-word-to-pdf-in-linux-prior-to-v184-release)'| markdownify }}.
</td>
</tr>
</table>

## What are the NuGet packages to be installed to perform Word to Image conversion in Linux OS?

In Linux OS, you can perform Word to Image conversion using .NET Core (Targeting .netcoreapp) application. You can refer [Word to Image conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#converting-word-document-to-image) to know about the packages required to deploy .NET Core (Targeting .netcoreapp) applications with Word to Image conversion capabilities.

In addition to the previous NuGet packages, the following NuGet package need to be installed in your application.

<table>
<thead>
<tr>
<th width="20%">
Version
</th>
<th width="40%">
NuGet packages to install
</th>
</tr>
</thead>
<tr>
<td>
From v32.1.10
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v28.2.3
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.0.1](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.0.1)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v27.2.2
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.8](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.8)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v7.3.0.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v23.1.40
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.6](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.6)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v7.3.0](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v20.3.0.56
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.2](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.2)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.8.2.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.8.2.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v20.2 
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.0-preview.209](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.0-preview.209)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.8.2-preview.209](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.8.2-preview.209)'| markdownify }}
</td>
</tr>
</table>

## Why does SkiaSharp throw a type initializer exception in Azure Function on macOS?

This error occurs due to missing native libraries (libSkiaSharp.dylib, libHarfBuzzSharp.dylib) when running an Azure Function locally on macOS. The required libraries are not copied to the output folder during build.

**To resolve:**

- Build the project.
- Copy *libSkiaSharp.dylib* and *libHarfBuzzSharp.dylib* from:

```
bin/Debug/net6.0/runtimes/osx/native/
```

- Paste them into:

```
bin/Debug/net6.0/
```

- Run the function again.

> This issue affects only local macOS development. It does not occur after deploying to Azure App Service.
