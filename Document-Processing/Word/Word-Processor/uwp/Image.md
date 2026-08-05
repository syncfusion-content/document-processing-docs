---
title: Image in UWP RichTextBox control | Syncfusion
description: Learn here all about Image support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: image,insert-picture,image-resizer,text-wrapping,positioning,inline-image,bitmap,jpeg,png
---
# Image support in UWP RichTextBox

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) allows you to insert images of various formats, including bitmap (`.bmp`), JPEG (`.jpg`, `.jpeg`), and PNG (`.png`). Metafile images (`.wmf`, `.emf`) are not supported.

N> The XAML snippets in this document assume the `RichTextBoxAdv` namespace is mapped to `using:Syncfusion.UI.Xaml.RichTextBoxAdv` and that the host `SfRichTextBoxAdv` is declared as `<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" />`.

## Inserting an image

The following code example illustrates how to insert a picture into the SfRichTextBoxAdv document using the `InsertPictureCommand` UI command.

{% tabs %}
{% highlight xaml %}
<Button Content="Insert Picture" Command="{Binding ElementName=richTextBoxAdv, Path=InsertPictureCommand}" />

{% endhighlight %}
{% endtabs %}

## Image resizer

SfRichTextBoxAdv also supports a built-in image resizer that lets you resize images in the document as you wish. The image resizer accepts both touch and mouse interactions.

![SfRichTextBoxAdv image resizer with selection handles around an inserted image](Image_images/Image_img1.jpeg)

## Text wrapping style

Text wrapping refers to how images are positioned relative to the surrounding text in a document. Refer to the [Text wrapping style](https://help.syncfusion.com/uwp/richtextbox/text-wrapping-style) page for more information about the text wrapping styles available in SfRichTextBoxAdv.

## Positioning the image

Starting from v19.1.0.x, SfRichTextBoxAdv preserves the position properties of an image and displays the image based on those properties. It does not support modifying the position properties. An image positioned relative to the line or paragraph is automatically moved as the surrounding text is edited.

> **Behavior:** At present, an image with the `Inline` text wrapping style can be dragged and dropped anywhere in the document.

N> The `InsertPictureCommand` is supported from Syncfusion UWP RichTextBox v17.4.0.X onwards. The image-positioning preservation feature is supported starting from v19.1.0.x.

## See Also

- [Text wrapping style in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/text-wrapping-style)
- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)

