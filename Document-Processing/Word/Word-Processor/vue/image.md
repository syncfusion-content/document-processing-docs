---
layout: post
title: Image in Vue Document editor component | Syncfusion
description: Learn here all about Image in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Image 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Image in Vue Document editor component

Document Editor supports common raster format images like PNG, BMP, JPEG, SVG and GIF. You can insert an image file or online image in the document using the [`insertImage()`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor#insertimage) method. Refer to the following sample code.

The following example shows how to open bookmark dialog in Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/bookmark-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/bookmark-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/bookmark-cs2" %}

Image files will be internally converted to base64 string. Whereas, online images are preserved as URL.

>Note: EMF and WMF images can't be inserted, but these types of images will be preserved in Document Editor when using ASP.NET MVC Web API.

## Image resizing

Document Editor provides built-in image resizer that can be injected into your application based on the requirements. This allows you to resize the image by dragging the resizing points using mouse or touch interactions. This resizer appears as follows.

![Image](images/image.png)

## Changing size

Document Editor expose API to get or set the size of the selected image. Refer to the following sample code.

```ts
this.$refs.documenteditor.ej2Instances.selection.imageFormat.width = 800;
this.$refs.documenteditor.ej2Instances.selection.imageFormat.height = 800;
```

>Note: Images are stored and processed(read/write) as base64 string in Document Editor. The online image URL is preserved as a URL in Document Editor upon saving.

## Text wrapping style

Text wrapping refers to how images fit with surrounding text in a document. Please [refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the image

Document Editor preserves the position properties of the image and displays the image based on position properties. It does not support modifying the position properties. Whereas the image will be automatically moved along with text edited if it is positioned relative to the line or paragraph.

## See Also

* [Feature modules](./feature-module)