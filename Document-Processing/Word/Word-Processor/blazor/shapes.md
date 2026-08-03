---
layout: post
title: Working with Shapes in Blazor DOCX Editor Component | Syncfusion
description: Learn here all about the Shapes in Syncfusion Blazor Document Editor component and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Working with Shapes in Blazor Document Editor

Shapes are drawing objects that include a text box, rectangles, lines, curves, circles, etc. It can be preset or custom geometry. At present, [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) does not support inserting shapes. However, if the document contains a shape while importing, it will be preserved properly.

## Supported shapes

The Document Editor has preservation support for Lines, Rectangles, Basic Shapes, Block Arrows, Equation Shapes, Flowchart, and Stars and Banners.

![List of supported shapes in Document Editor](images/Shapes_images/supported_shapes.png)

N> When using ASP.NET MVC service, the unsupported shapes will be converted as image and preserved as image.

## Text Box Shape

A text box is a rectangular area on the document where you can enter text. Clicking in a text box displays a flashing cursor, indicating that text can be entered. It allows you to enter multiple lines of text with all text formatting.

![Text box shape view in Document Editor](images/Shapes_images/textbox_shape.png)

## Shape Resizer

The Document Editor also supports a built-in shape resizer to resize the shapes present in the document. The shape resizer accepts both touch and mouse interactions.

![Shape resizer view in Document Editor](images/Shapes_images/shape_resizer.png)

## Text wrapping style

Text wrapping refers to how shapes fit with surrounding text in a document. [Refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the shape

The Document Editor preserves the position properties of the shape and displays the shape based on the position properties. It does not support modifying the position properties. However, the shape will be automatically moved along with the text edited if it is positioned relative to the line or paragraph.

## Online Demo

Explore how to preserve auto shapes in Word documents using the Blazor Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/autoshapes?theme=fluent2).