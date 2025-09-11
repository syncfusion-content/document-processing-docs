---
layout: post
title: Image in ASP.NET MVC Document Editor Component
description: Learn here all about image in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Image
documentation: ug
---


# Images

Document Editor supports common raster format images like PNG, BMP, JPEG, SVG and GIF. You can insert an image file or online image in the document using the `insertImage()` method.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/image/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Image.cs" %}
{% endhighlight %}{% endtabs %}




Image files will be internally converted to base64 string. Whereas, online images are preserved as URL.

## Image resizing

Document editor provides built-in image resizer that can be injected into your application based on the requirements. This allows to resize the image by dragging the resizing points using mouse or touch interactions. This resizer appears as follows.

![Image](images/image.JPG)

## Changing size

Document editor exposes API to get or set the size of the selected image.

```typescript
documenteditor.selection.imageFormat.width = 800;
documenteditor.selection.imageFormat.height = 800;
```

N> Images are stored and processed (read/write) as base64 string in DocumentEditor. The online image URL is preserved as a URL in DocumentEditor upon saving.

## Text wrapping style

Text wrapping refers to how images fit with surrounding text in a document. [Refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the image

DocumentEditor preserves the position properties of the image and displays the image based on position properties. It does not support modifying the position properties. Whereas the image will be automatically moved along with text edited if it is positioned relative to the line or paragraph.

## See Also

* [Feature modules](./feature-module)
