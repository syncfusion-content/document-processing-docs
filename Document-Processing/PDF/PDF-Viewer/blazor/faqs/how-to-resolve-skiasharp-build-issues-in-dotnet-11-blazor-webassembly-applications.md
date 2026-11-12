---
layout: post
title: Resolve SkiaSharp Build Issues in .NET 11 WASM | Syncfusion
description: Learn how to build the Blazor PDF Viewer on .NET 11 by upgrading the SkiaSharp packages to 4.156.0 and including the required native static libraries.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Resolve SkiaSharp Build Issues in .NET 11 Blazor WebAssembly

Currently, SkiaSharp does not officially support .NET 11. In addition, Syncfusion<sup style="font-size:70%">&reg;</sup> uses the older SkiaSharp 4.150.1 packages. As a workaround, the Blazor WebAssembly sample can be built and run successfully by manually upgrading the SkiaSharp packages to 4.156.0.

This workaround enables the Blazor WebAssembly sample to work with .NET 11 until official .NET 11 support is provided by the SkiaSharp team.

## Upgrade the SkiaSharp packages

Upgrade the following SkiaSharp packages to version `4.156.0` in your project.

{% tabs %}
{% highlight xml tabtitle=".csproj" %}

<PackageReference Include="SkiaSharp.HarfBuzz" Version="4.156.0" />
<PackageReference Include="SkiaSharp.NativeAssets.Linux" Version="4.156.0" />
<PackageReference Include="SkiaSharp.Views.Blazor" Version="4.156.0" />

{% endhighlight %}
{% endtabs %}

Alternatively, you can use the following package manager commands.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package SkiaSharp.HarfBuzz -Version 4.156.0
Install-Package SkiaSharp.NativeAssets.Linux -Version 4.156.0
Install-Package SkiaSharp.Views.Blazor -Version 4.156.0

{% endhighlight %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet add package SkiaSharp.HarfBuzz -v 4.156.0
dotnet add package SkiaSharp.NativeAssets.Linux -v 4.156.0
dotnet add package SkiaSharp.Views.Blazor -v 4.156.0
dotnet restore

{% endhighlight %}
{% endtabs %}

## See also

* [Getting Started with the Blazor PDF Viewer in a Blazor Web App](../getting-started/web-app)
* [Getting Started with the Blazor PDF Viewer in a Blazor WebAssembly App](../getting-started/web-assembly-application)
* [How to Reduce slowness when running the WASM sample in Visual Studio](./how-to-reduce-slowness-while-running-the-wasm-sample-in-Visual-Studio)
* [.NET 9 Native Linking Issues with SkiaSharp and Emscripten 3.1.56](https://help.syncfusion.com/document-processing/faq/how-to-fix-skiasharp-native-reference-issue-in-blazor-net90-app)
* [SkiaSharp.NativeAssets.WebAssembly no longer compatible with .NET 11 WASM](https://github.com/mono/SkiaSharp/issues/5082)
* [Unable to Build Blazor WASM Application on .NET 11 with SkiaSharp.Views.Blazor](https://github.com/mono/SkiaSharp/issues/5467)
