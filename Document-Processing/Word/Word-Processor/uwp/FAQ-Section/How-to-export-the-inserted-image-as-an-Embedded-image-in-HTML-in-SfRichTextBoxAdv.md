---
title: How to Export Embedded Images in HTML in UWP DOCX Editor | Syncfusion
description: Export inserted images as embedded content in HTML from Syncfusion® UWP DOCX Editor using the ImageNodeVisited event to manage image streams.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: embedded-image-html,image-node-visited,html-import-export-settings,embedded-image,html-export,image-source
---

# How to Export Embedded Images in HTML in UWP DOCX Editor

This page explains how to export the inserted image as an Embedded image in HTML in Syncfusion&reg; UWP SfRichTextBoxAdv.

SfRichTextBoxAdv lets you specify HTML export settings. By using the [`ImageNodeVisited`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.ImageNodeVisitedEventArgs.html) event of the [`HtmlImportExportSettings`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.HtmlImportExportSettings.html) instance, you can retrieve or set the image stream and image source. When you set the image source to an empty string, the inserted picture is exported as an embedded image in the HTML.

The following code example illustrates to export the inserted image as an Embedded image in HTML in the SfRichTextBoxAdv.

{% tabs %}
{% highlight c# %}
// Hooks the event handler for ImageNodeVisited event.
richTextBoxAdv.HtmlImportExportSettings.ImageNodeVisited += HtmlImportExportSettings_ImageNodeVisited;

/// <summary>
/// Handles the ImageNodeVisited event of the richTextBoxAdv control.
/// </summary>
/// <param name="obj">The source of the event.</param>
/// <param name="args">The <see cref="ImageNodeVisitedEventArgs"/> instance containing the event data.</param>
 private void HtmlImportExportSettings_ImageNodeVisited(object obj, Syncfusion.UI.Xaml.RichTextBoxAdv.ImageNodeVisitedEventArgs args)
        {
            if (args.IsSaving)
            {
                args.Source = string.Empty;
            }
        }
		
// Unhooks the event handler for ImageNodeVisited event.
richTextBoxAdv.HtmlImportExportSettings.ImageNodeVisited -= HtmlImportExportSettings_ImageNodeVisited;
{% endhighlight %}
{% endtabs %}

## See also

- [UWP RichTextBox Feature Tour](https://www.syncfusion.com/docx-editor-sdk/uwp-docx-editor)
- [UWP RichTextBox Examples](https://github.com/syncfusion/docx-editor-sdk-uwp-demos)