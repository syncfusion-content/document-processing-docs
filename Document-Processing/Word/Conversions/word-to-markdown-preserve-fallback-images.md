---
title: Preserve Charts, Shapes as Images in Word to Markdown | Syncfusion
description: Learn how to preserve Word elements as fallback images during Word-to-Markdown conversion with DocIO.
platform: document-processing
control: DocIO
documentation: UG
---

# Preserve Charts, Shapes as Fallback Images in Word to Markdown

The .NET Word (DocIO) library preserves Word elements as fallback images when converting a Word document to a Markdown file. This ensures that content which does not have a direct Markdown equivalent is still retained in the output as an image.

The following elements are preserved as fallback images during Word-to-Markdown conversion:

* Chart
* Text Box
* Shape
* Ink
* MathML
* SmartArt

N> On Windows, Text Box, Shape, Ink, MathML, and SmartArt are preserved automatically as images without any additional code. To preserve charts on Windows, use the `ChartToImageConverter`. On cross-platform (ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI), use the `DocIORenderer` to preserve all the Word elements (Chart, Text Box, Shape, Ink, MathML, and SmartArt) as images.

## Preserve Charts, Shapes as Fallback Images

By default, Text Box, Shape, Ink, MathML, and SmartArt are preserved automatically as fallback images during Word-to-Markdown conversion. For charts (and to preserve all elements on cross-platform), additional initialization is required based on the target platform.

The following tabs explain how to preserve charts and other Word elements as fallback images on each platform.


### Cross-platform

On cross-platform, install the **Syncfusion.DocIORenderer** NuGet package and initialize the `DocIORenderer` to preserve all Word elements (Chart, Text Box, Shape, Ink, MathML, and SmartArt) as fallback images. The `DocIORenderer` itself preserves charts as well, so no additional `ChartToImageConverter` initialization is required.

#### NuGet package required

* [Syncfusion.DocIORenderer](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)

#### Initialize DocIORenderer

```csharp
DocIORenderer renderer = new DocIORenderer();
```

### Windows-specific

On Windows, Text Box, Shape, Ink, MathML, and SmartArt are preserved automatically without any additional code. For charts, install the **Syncfusion.OfficeChartToImageConverter** NuGet package and initialize the `ChartToImageConverter`.

#### NuGet package required

* [Syncfusion.OfficeChartToImageConverter](https://www.nuget.org/packages/Syncfusion.OfficeChartToImageConverter.WPF)

#### Initialize ChartToImageConverter

```csharp
wordDocument.ChartToImageConverter = new ChartToImageConverter();
```

## Example

The following code example shows how to preserve charts and other Word elements as fallback images while converting a Word document to a Markdown file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Open an existing Word document.
using (WordDocument wordDocument = new WordDocument(Path.GetFullPath(@"Data/Input.docx")))
{
    // Initialize the DocIORenderer to preserve Word elements (including charts) as images.
    DocIORenderer renderer = new DocIORenderer();

    // Save the document as a Markdown file.
    wordDocument.Save(Path.GetFullPath(@"Output/Output.md"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Open an existing Word document.
using (WordDocument wordDocument = new WordDocument("Input.docx", FormatType.Docx))
{
    // Initialize the chart-to-image converter to preserve charts as images.
    wordDocument.ChartToImageConverter = new ChartToImageConverter();

    // Text Box, Shape, Ink, MathML, and SmartArt are preserved automatically on Windows.

    // Save the document as a Markdown file.
    wordDocument.Save("WordtoMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## See also

* [Convert Word to Markdown](./word-to-markdown-conversion)
* [Convert Markdown to Word](./markdown-to-word-conversion)


