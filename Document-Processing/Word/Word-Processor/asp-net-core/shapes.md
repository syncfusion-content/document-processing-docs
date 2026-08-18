---
layout: post
title: Shapes in ASP.NET Core DOCX Editor | Syncfusion
description: The shapes feature in ASP.NET Core DOCX Editor preserve shape elements, text boxes, resizing, positioning, and text wrapping for accurate document rendering.
platform: document-processing
control: Shapes
documentation: ug
---


# Shapes in ASP.NET Core DOCX Editor

Shapes are drawing objects that include a text box, rectangles, lines, curves, circles, etc. It can be preset or custom geometry. At present, the Document Editor does not support inserting shapes. However, if the document contains a shape while importing, it will be preserved properly.

## Supported shapes

The [ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) has preservation support for Lines, Rectangles, Basic Shapes, Block Arrows, Equation Shapes, Flowchart, and Stars and Banners.

![List of supported shapes in Document Editor](images/Shapes_images/supported_shapes.png)

N> When using ASP.NET MVC service, the unsupported shapes will be converted as image and preserved as image.

## Text box shape

A text box is a rectangular area on the document where you can enter text. When you click in a text box, a flashing cursor will display indicating that you can begin typing. It allows you to enter multiple lines of text with all text formatting.

<img src="images/Shapes_images/textbox_shape.png" alt="Text box shape view in DocumentEditor" style="width:550px">

## Shape resizer

The Document Editor also supports a built-in shape resizer to resize the shapes present in the document. The shape resizer accepts both touch and mouse interactions.

![Shape resizer view in Document Editor](images/Shapes_images/shape_resizer.png)

## Text wrapping style

Text wrapping refers to how shapes fit with surrounding text in a document. [Refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the shape

The Document Editor preserves the position properties of the shape and displays the shape based on the position properties. It does not support modifying the position properties. However, the shape will be automatically moved along with the text edited if it is positioned relative to the line or paragraph.

## Online demo

Explore how to preserve AutoShapes and grouped shapes in Word documents using the ASP.NET Core Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/autoshapes#/tailwind3).