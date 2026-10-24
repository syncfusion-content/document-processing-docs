---
layout: post
title: Shapes in JavaScript DOCX Editor | Syncfusion
description: The shapes feature in JavaScript DOCX Editor preserve shape elements, text boxes, resizing, positioning, and text wrapping for accurate document rendering.
platform: document-processing
control: Shapes
documentation: ug
domainurl: ##DomainURL##
appliesto: DOCX Editor SDK, UI Component Suite
---

# Shapes in JavaScript DOCX Editor

Shapes are drawing objects that include a text box, rectangles, lines, curves, circles, etc. They can be preset or custom geometry. At present, [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) does not have support to insert shapes. However, if the imported document contains shapes, they are preserved within the editor.

## Supported shapes

The DOCX Editor has preservation support for Lines, Rectangle, Basic Shapes, Block Arrows, Equation Shapes, Flowchart, and Stars and Banners.

![List of supported shapes in DOCX Editor](images/Shapes_images/supported_shapes.png)

N> When using ASP.NET MVC service, the unsupported shapes are converted to images and preserved as images.

## Text Box Shape

A text box is a rectangular area on the document where you can enter text. When you click in a text box, a flashing cursor appears, indicating that you can begin typing. It allows you to enter multiple lines of text with all text formatting.

![Text box shape view in DOCX Editor](images/Shapes_images/textbox_shape.png)

## Insert Text Box

The **Text Box** option is available in the **Insert** tab of the ribbon. It allows users to insert a text box into the document by configuring the required properties through a dedicated dialog.

### Insert Text Box Using the UI

You can insert a text box from either the Ribbon or Toolbar:

1. Click **Text Box** from the **Insert** tab in the **Ribbon** or from the **Toolbar**.
2. The **Insert Text Box** dialog opens.
3. Configure the required text box properties.
4. Click **Insert** to add the text box to the document.

After insertion, the text box is added to the document with the configured settings.

![Insert Text Box Dialog in DOCX Editor](images/insert-text-box-dialog.png)

### Insert Text Box Using API

The **DOCX Editor** also provides an API to open the **Insert Text Box** dialog programmatically. This is useful when integrating custom toolbar items, buttons, or application workflows.

Use the following code snippet to open the **Insert Text Box** dialog:

```javascript
container.documentEditor.showDialog('TextBox');
```

When invoked, the same **Insert Text Box** dialog available from the ribbon interface is displayed, allowing users to configure and insert a text box into the document.

## Shape Resizer

The DOCX Editor also supports a built-in shape resizer to resize the shapes present in the document. The shape resizer accepts both touch and mouse interactions.

![Shape resizer view in DOCX Editor](images/Shapes_images/shape_resizer.png)

## Text wrapping style

Text wrapping refers to how shapes fit with surrounding text in a document. Please [refer to this page](./text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the shape

DOCX Editor preserves the position properties of the shape and displays the shape based on position properties. It does not support modifying the position properties. However, the shape moves automatically with the surrounding text if it is positioned relative to the line or paragraph.

## Online Demo

Explore how to preserve autoshapes and grouped shapes in Word documents using the JavaScript (ES5) DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/autoshapes.html).
