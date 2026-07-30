---
layout: post
title: Text wrapping style in React DOCX Editor component | Syncfusion
description: Learn here all about Text wrapping style in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: Text wrapping style 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Text wrapping style in React Document Editor component

Text wrapping refers to how images and shapes are placed within the surrounding text in a document. Currently, [React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) has only preservation support for images and textbox shapes, with the wrapping styles listed below.

## In-Line with Text

In this option, the image or shape is placed on the same line surrounded by text like any other word or letter. This image or shape will be automatically moved along with the text while editing, whereas the other options denote that the image or shape stays in a fixed position while the text shifts and wraps around it.

![view of image with inline wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/inline-textwrapping.PNG)

## In Front of Text

In this option, the image or shape is placed in front of the text. This can be used to overlay an image over text or to add a shape to highlight a part in a paragraph.

![view of image with in front of text wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/infront-textwrapping.PNG)

N> Starting from v18.2.0.x, the in front of text wrapping style is supported.

## Top and Bottom

In this option, text wraps above and below the image or shape. No text is to the left or right of the image or shape. This can be used for larger images or shapes that occupy most of the width in a document.

N> Starting from v19.1.0.x, the top and bottom wrapping style is supported.

![view of image with top and bottom wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/topandbottom-textwrapping.PNG)

## Behind

In this option, the image or shape is placed behind the text. This can be used when you need to add a watermark or background image to a document.

![view of image with behind wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/behind-textwrapping.PNG)

N> Starting from v19.2.0.x, the behind text wrapping style is supported.

## Square

In this option, text wraps around the image or text box in a square shape.

N> Tight and Through styles will be preserved as the square wrapping style in the Document Editor, which is supported from v19.2.0.x.

![view of shape with square wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/square-textwrapping.PNG)
