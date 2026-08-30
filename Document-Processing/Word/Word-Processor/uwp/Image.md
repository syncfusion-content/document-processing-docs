---
title: Images in UWP DOCX Editor | Syncfusion
description: The image support in UWP DOCX Editor enables inserting, resizing, and managing images in formats such as Bitmap, JPEG, and PNG.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: image,insert-picture,image-resizer,text-wrapping
---
# Images in UWP DOCX Editor

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) allows you to insert images of various formats, including bitmap (`.bmp`), JPEG (`.jpg`, `.jpeg`), and PNG (`.png`). Metafile images (`.wmf`, `.emf`) are not supported.

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

N> At present, the image with text wrapping style `In-Line with Text` can only be dragged and dropped anywhere in the document.

## See also

- [Getting started with UWP DOCX Editor](./Getting-Started)
- [Text wrapping style in UWP DOCX Editor](./Text-Wrapping-Style)
- [Commands in UWP DOCX Editor](./Commands)
