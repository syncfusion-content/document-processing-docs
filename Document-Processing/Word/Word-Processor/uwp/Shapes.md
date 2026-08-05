---
title: Shapes in UWP RichTextBox control | Syncfusion
description: Learn here all about Shapes support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: shapes,text-box,rectangle,text-wrapping,shape-resizer,line,curve,circle,preservation
---
# Shapes in UWP RichTextBox

Shapes are drawing objects such as text boxes, rectangles, lines, curves, and circles. Shapes follow a preset or custom geometry. [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) does not support inserting shapes. However, if the document contains a shape during import, the shape is preserved.

N> Shape preservation is supported starting from Syncfusion UWP RichTextBox v18.3.0.X.

> **Behavior:** Only text box and rectangle shapes are preserved. Other shape types (lines, curves, circles, custom geometry) are imported as-is into the document, but their visual appearance may not render in the viewer.

## Supported shapes

`SfRichTextBoxAdv` has preservation support for text box and rectangle shapes.

![SfRichTextBoxAdv list of preserved shapes (text box and rectangle)](Shapes_images/Supported_Shapes.PNG)

## Text box shape

A text box is a rectangular area in the document where you can enter text. When you click in a text box, a flashing cursor displays, indicating that you can begin typing. You can enter multiple lines of text with the full range of text formatting.

![Text box shape in SfRichTextBoxAdv, showing the border and cursor inside the text area](Shapes_images/TextBox_Shape.PNG)

## Shape resizer

`SfRichTextBoxAdv` also supports a built-in shape resizer that lets you resize shapes in the document. The shape resizer accepts both touch and mouse interactions.

![SfRichTextBoxAdv shape resizer with selection handles around a text box](Shapes_images/Shape_Resizer.PNG)

## Text wrapping style

Text wrapping refers to how shapes are positioned relative to the surrounding text in a document. Refer to the [Text wrapping style](https://help.syncfusion.com/uwp/richtextbox/text-wrapping-style) page for more information about the text wrapping styles available in `SfRichTextBoxAdv`.

## Positioning the shape

Starting from Syncfusion UWP RichTextBox v19.1.0.X, `SfRichTextBoxAdv` preserves the position properties of the shape and displays the shape based on those properties. It does not support modifying the position properties. A shape positioned relative to the line or paragraph is automatically moved as the surrounding text is edited.

> **Behavior:** At present, a shape with the `Inline` text wrapping style can be dragged and dropped anywhere in the document.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Text wrapping style in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/text-wrapping-style)
- [Importing and exporting documents in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/import-and-export)
- [Image support in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/image)






