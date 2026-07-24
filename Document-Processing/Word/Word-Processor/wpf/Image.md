---
title: Image in WPF RichTextBox control | Syncfusion
description: Learn here all about Image support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: image,insert-picture,image-resizer,text-wrapping,image-position
---
# Image in WPF RichTextBox (SfRichTextBoxAdv)

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) allows you to insert images of various formats, including bitmap (.bmp), JPEG (.jpg, .jpeg), and PNG (.png). Metafile images (.wmf, .emf) are not supported.
The following code example illustrates how to insert a picture into the SfRichTextBoxAdv document through the [InsertPictureCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_InsertPictureCommand) UI command. The `CommandParameter` accepts a `BitmapSource` (or `ImageSource`) of the image to insert.
{% tabs %}
{% highlight xaml %}
<Button Content="Insert Picture" Command="RichTextBoxAdv:SfRichTextBoxAdv.InsertPictureCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />


{% endhighlight %}

{% endtabs %}

## Image Resizer

The SfRichTextBoxAdv also supports a built-in image resizer to resize the images present in the document to a size of your choice. The image resizer accepts both touch and mouse interactions.

When an image is selected, the resizer provides drag handles on each corner and at the midpoint of each side. Dragging a corner handle preserves the image's aspect ratio, while dragging a side handle changes only the corresponding dimension. The resizer can be enabled or disabled through the [EditorSettings](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.EditorSettings.html) class.

The following code example illustrates how to disable the image resizer.

{% tabs %}
{% highlight c# %}
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.EnableImageResizer = false;
{% endhighlight %}
{% highlight VB %}
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.EditorSettings.EnableImageResizer = False
{% endhighlight %}
{% endtabs %}
![WPF RichTextBox showing an image selected with the built-in image resizer handles](Image_images/wpf-richtextbox-image.jpeg)

## Text wrapping style
Text wrapping refers to how images fit with surrounding text in a document. Please [refer to this page](/wpf/richtextbox/text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the image
Starting from v19.1.0.x, the SfRichTextBoxAdv preserves the position properties of images and displays them accordingly. Users cannot modify these position properties from the UI. When the image is positioned relative to the line or paragraph, it will be automatically moved along with text being edited.

### Positioning behavior

- Images that are positioned relative to the line or paragraph move automatically as the surrounding text is edited.
- Floating images (any wrap style other than `InLine`) keep their position but cannot have their position properties modified through the UI.
- Position properties are supported for the following wrap styles: `InFrontOfText`, `BehindText`, `TopAndBottom`, and `Square`.

N> The image with text wrapping style `InLine` can only be dragged and dropped anywhere in the document.
N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk-wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.
## See Also

- [Selection in WPF RichTextBox](Selection)
- [Commands in WPF RichTextBox](Commands)
- [Clipboard in WPF RichTextBox](Clipboard)
- [Document Structure in WPF RichTextBox](Document-Structure)