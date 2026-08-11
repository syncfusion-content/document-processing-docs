---
layout: post
title: Images in Blazor DOCX Editor Component | Syncfusion
description:  Learn how to work with images in the Syncfusion Blazor Document Editor component, including image insertion, resizing, formatting, and positioning.
platform: document-processing
control: Document Editor
documentation: ug
---

# Images in Blazor Document Editor Component

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component provides robust support for working with images in documents. It supports common raster image formats like PNG, BMP, and JPEG, as well as GIF and SVG images. You can insert an image file or online image in the document using the [`InsertImageAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_InsertImageAsync_System_String_System_Nullable_System_Double__System_Nullable_System_Double__) method.

```csharp
await container.DocumentEditor.Editor.InsertImageAsync("<<base64String>>");
```

Image files are internally converted to a base64 string. However, online images are preserved as a URL.

## Image resizing

The Document Editor provides a built-in image resizer that can be injected into your application based on the requirements. This allows the image to be resized by dragging the resizing points using mouse or touch interactions. This resizer appears as follows.

![Image Resizing in Blazor Document Editor](images/blazor-document-editor-image-resizing.jpeg)

## Changing size

The Document Editor exposes APIs to get or resize the selected image. Width and height values are in points. Refer to the following sample code.

```csharp
int height = await container.DocumentEditor.Selection.ImageFormat.GetHeightAsync();
int width = await container.DocumentEditor.Selection.ImageFormat.GetWidthAsync();
await container.DocumentEditor.Selection.ImageFormat.ResizeAsync(width + 10, height + 10);
```

## Text wrapping style

Text wrapping refers to how images fit with surrounding text in a document. [Refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the image

The Document Editor preserves the position properties of the image and displays the image based on the position properties. It does not support modifying the position properties. However, the image will be automatically moved along with the text edited if it is positioned relative to the line or paragraph.

You can also explore our [`Blazor Word Processor`](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities) example to know how to render and configure the document editor.