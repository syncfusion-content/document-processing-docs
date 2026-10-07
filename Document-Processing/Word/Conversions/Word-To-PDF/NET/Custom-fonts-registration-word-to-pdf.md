---
title: Custom font registration for Word-to-PDF in .NET | Syncfusion
description: This section illustrates how to register custom fonts for Word-to-PDF conversion using the Syncfusion .NET Word library
platform: document-processing
control: DocIO
documentation: UG
appliesto: Document SDK
---

# Custom Font Registration for Word to PDF Conversion in .NET Word

The Syncfusion document processing libraries provide support for registering custom font streams through the `FontManager` API. This feature enables applications to use fonts that are not installed on the operating system by maintaining a private font repository during Word to PDF conversion.

This capability is particularly beneficial for cloud-hosted and cross-platform applications where access to system fonts may be limited or unavailable. Once registered the custom fonts, users can perform Word to PDF conversion normally. Registered fonts are automatically used when available.

In many deployment environments, installing fonts on the operating system is either not possible or not desirable. Custom font registration enables applications to:

* Use required fonts without depending on system-installed fonts.
* Ensure consistent document rendering across environments.
* Reduce the need for complex font substitution logic.
* Improve font preservation during document conversion.
* Simplify deployment in cloud and containerized applications.

N> It is recommended to register all required fonts during application startup and clear them when the application shuts down. This ensures that fonts are loaded only once and reused throughout the application's lifetime, improving performance and reducing font lookup overhead.

## Supported Font Formats

The following font formats are supported for registration:

* TrueType Fonts (.ttf)
* OpenType Fonts (.otf)

The code examples in the sections that follow use the following namespace:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.Drawing.Fonts;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Drawing.Fonts;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Drawing.Fonts
{% endhighlight %}

{% endtabs %}

## Register Fonts from a Folder

Users can register all fonts available in a specific folder by specifying the folder path. This approach is useful when multiple font files are managed in a centralized location and need to be registered at once.

N> Supported in .NET 8.0 and later. The specified folder must have access to the file system; otherwise this method throws `DirectoryNotFoundException`.

The following code example shows how to register fonts from a folder.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Specify the path to the folder containing font files.
FontManager.RegisterFonts(@"C:\\CustomFonts");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Specify the path to the folder containing font files.
FontManager.RegisterFonts(@"C:\\CustomFonts");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Specify the path to the folder containing font files.
FontManager.RegisterFonts("C:\\CustomFonts")
{% endhighlight %}

{% endtabs %}

## Register Custom Fonts from Streams

Users can register one or more fonts directly from memory streams. This approach is recommended for cloud-hosted, containerized, and cloud-native applications where access to local font files may be limited.

The following code example shows how to register fonts from memory streams.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
List<Stream> fontStreams = new List<Stream>();
fontStreams.Add(File.OpenRead("Arial.ttf"));
fontStreams.Add(File.OpenRead("Calibri.ttf"));

FontManager.RegisterFonts(fontStreams);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
List<Stream> fontStreams = new List<Stream>();
fontStreams.Add(File.OpenRead("Arial.ttf"));
fontStreams.Add(File.OpenRead("Calibri.ttf"));

FontManager.RegisterFonts(fontStreams);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim fontStreams As New List(Of Stream)()
fontStreams.Add(File.OpenRead("Arial.ttf"))
fontStreams.Add(File.OpenRead("Calibri.ttf"))

FontManager.RegisterFonts(fontStreams)
{% endhighlight %}

{% endtabs %}

## Get Registered Font Names

Users can retrieve the names of all fonts currently registered in the custom font repository. This is useful for validating font registration, auditing available fonts, and troubleshooting font-related issues during Word to PDF conversion. Each entry contains the font family name and style information.

The following code example shows how to retrieve and iterate through the list of registered font names.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
List<string> registeredFontNames = FontManager.RegisteredFontNames;
foreach (string registeredFontName in registeredFontNames)
{
    Console.WriteLine(registeredFontName);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
List<string> registeredFontNames = FontManager.RegisteredFontNames;
foreach (string registeredFontName in registeredFontNames)
{
    Console.WriteLine(registeredFontName);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim registeredFontNames As List(Of String) = FontManager.RegisteredFontNames
For Each registeredFontName As String In registeredFontNames
    Console.WriteLine(registeredFontName)
Next
{% endhighlight %}

{% endtabs %}

## Clear Registered Fonts

Users can remove all registered fonts from the custom font repository and can optionally dispose of the associated font streams when they are no longer required. This helps release resources and prevents unnecessary memory usage in long-running applications.

The following code example shows how to clear the registered fonts and optionally dispose of the associated font resources.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true)
{% endhighlight %}

{% endtabs %}

## Font Embedding Behavior

By default, registered custom fonts are not embedded in generated PDF documents. Customers can configure font embedding behavior according to their requirements. For more details, refer to the [Font embedding settings in Word to PDF conversion](./Word-to-pdf-settings#embedding-fonts) documentation.

## Recommended Usage Pattern

### Application Startup

The following code example shows how to register fonts during application startup.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Register fonts from the specified folder during application startup.
FontManager.RegisterFonts(@"Fonts");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Register fonts from the specified folder during application startup.
FontManager.RegisterFonts(@"Fonts");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Register fonts from the specified folder during application startup.
FontManager.RegisterFonts("Fonts")
{% endhighlight %}

{% endtabs %}

### Application Shutdown

The following code example shows how to clear registered fonts during application shutdown.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Clear all registered fonts and dispose the associated font streams.
FontManager.ClearRegisteredFonts(true)
{% endhighlight %}

{% endtabs %}

During document conversion, fonts are utilized in the following priority order:

1. Embedded Fonts in the input Word document
2. Registered Custom Fonts
3. Installed System Fonts
4. Substituted Fonts

This ensures that registered fonts are preferred over operating system fonts whenever a matching font is available.

## See also

* [Font Substitution in Word to PDF Conversion](Font-substituion-word-to-pdf)
* [Fallback fonts in Word to PDF Conversion](Fallback-fonts-word-to-pdf)
