---
title: Export image as Embedded in HTML in UWP SfRichTextBoxAdv | Syncfusion
description: Learn here all about how to export the inserted image as an Embedded image in HTML in Syncfusion UWP SfRichTextBoxAdv and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: embedded-image-html,image-node-visited,html-import-export-settings,embedded-image,html-export,image-source
---

# How to export the inserted image as an embedded image in HTML in UWP SfRichTextBoxAdv

This page explains how to export the inserted image as an embedded image in HTML in the UWP [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control.

SfRichTextBoxAdv lets you specify HTML export settings. By using the [`ImageNodeVisited`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.HtmlImportExportSettings.html#imagenodevisited) event of the [`HtmlImportExportSettings`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.HtmlImportExportSettings.html) instance, you can retrieve or set the image stream and image source. When you set the image source to an empty string, the inserted picture is exported as an embedded image in the HTML.

N> The `IsSaving` property of `ImageNodeVisitedEventArgs` is `true` when the image is being exported to HTML and `false` when it is being imported from HTML. The `Source` property accepts a URL, a base64 data URI, or an empty string to embed the image inline.

N> The XAML snippet in this FAQ assumes the `RichTextBoxAdv` namespace is mapped to `clr-namespace:Syncfusion.UI.Xaml.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.UWP` and that the host `SfRichTextBoxAdv` is declared as `<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" />`.

The following code example illustrates how to export the inserted image as an embedded image in HTML in `SfRichTextBoxAdv`.

{% tabs %}
{% highlight c# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;

// Hooks the event handler for the ImageNodeVisited event.
richTextBoxAdv.HtmlImportExportSettings.ImageNodeVisited += HtmlImportExportSettings_ImageNodeVisited;

/// <summary>
/// Handles the ImageNodeVisited event of the richTextBoxAdv control.
/// </summary>
/// <param name="sender">The source of the event (the HtmlImportExportSettings instance).</param>
/// <param name="e">The <see cref="ImageNodeVisitedEventArgs"/> instance containing the event data.</param>
private void HtmlImportExportSettings_ImageNodeVisited(object sender, ImageNodeVisitedEventArgs e)
{
    if (e.IsSaving)
    {
        // Sets the image source to an empty string so that the image is exported as an embedded image.
        e.Source = string.Empty;
    }
}

// Unhooks the event handler for the ImageNodeVisited event.
richTextBoxAdv.HtmlImportExportSettings.ImageNodeVisited -= HtmlImportExportSettings_ImageNodeVisited;
{% endhighlight %}
{% endtabs %}

N> The `ImageNodeVisited` event and `HtmlImportExportSettings` class are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [HtmlImportExportSettings](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.HtmlImportExportSettings.html)
- [Importing and exporting documents in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/import-and-export)