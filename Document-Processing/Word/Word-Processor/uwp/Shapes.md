---
title: Shapes in UWP DOCX Editor | Syncfusion
description: The shapes in UWP DOCX Editor offer preservation support for text box and rectangle, enabling existing shapes to be preserved during document import.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: shapes,text-box,rectangle,text-wrapping,shape-resizer
---
# Shapes in UWP DOCX Editor
Shapes are drawing objects such as text boxes, rectangles, lines, curves, and circles. Shapes follow a preset or custom geometry. [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) does not support inserting shapes. However, if the document contains a shape during import, the shape is preserved.

N> Shape preservation is supported starting from Syncfusion UWP RichTextBox v18.3.0.X.

## Supported shapes

`SfRichTextBoxAdv` has preservation support for text box and rectangle shapes.

![List of supported shapes in RichTextBox](Shapes_images/Supported_Shapes.PNG)

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

N> At present, a shape with the `Inline` text wrapping style can be dragged and dropped anywhere in the document.

## See also

- [Text wrapping style in UWP RichTextBox](./Text-Wrapping-Style)
- [Importing and exporting documents in UWP RichTextBox](./Import-and-Export)
- [Image support in UWP RichTextBox](./Image)