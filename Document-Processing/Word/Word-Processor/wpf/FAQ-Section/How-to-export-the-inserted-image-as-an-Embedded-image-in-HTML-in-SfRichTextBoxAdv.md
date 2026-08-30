---
title: How to Export Embedded Images in HTML in WPF DOCX Editor | Syncfusion
description: Export inserted images as embedded content in HTML from Syncfusion® WPF DOCX Editor using the ImageNodeVisited event to manage image streams.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: embedded-image-html
---

# How to Export Embedded Images in HTML in WPF DOCX Editor

This page explains how to export the inserted image as an Embedded image in HTML in [WPF DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv).

In the SfRichTextBoxAdv control, the control provides an option to specify HTML export settings. By utilizing the [ImageNodeVisited](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.ImageNodeVisitedEventArgs.html) event of the [HtmlImportExportSettings](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.HtmlImportExportSettings.html) instance, you can both retrieve and define the image stream and image source. When setting the image source as Empty, the inserted picture can be exported as an embedded image in the HTML.

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
 private void HtmlImportExportSettings_ImageNodeVisited(object obj, ImageNodeVisitedEventArgs args)
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

- [WPF DOCX Editor Feature Tour](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor)
- [WPF DOCX Editor Examples](https://github.com/syncfusion/docx-editor-sdk-wpf-demos)
