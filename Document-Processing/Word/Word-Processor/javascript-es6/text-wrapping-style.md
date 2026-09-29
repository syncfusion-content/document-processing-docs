---
layout: post
title: Text Wrapping Style in TypeScript DOCX Editor | Syncfusion
description: Text wrapping styles in TypeScript DOCX Editor preserve inline, square, behind text, and other wrapping modes during document rendering.
platform: document-processing
control: Text wrapping style 
documentation: ug
domainurl: ##DomainURL##
---

# Text Wrapping Style in TypeScript DOCX Editor

Text wrapping refers to how images and shapes are fit with surrounding text in a document. Currently, [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) has only preservation support for image and text box shapes with the following wrapping styles.

## In-Line with text

In this option, the image or shape is placed on the same line surrounded by text like any other word or letter. This image or shape will be automatically moved along with the text while editing, whereas the other options denote that the image or shape stays in a fixed position while the text shifts and wraps around it.

![view of image with inline wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/inline-textwrapping.PNG)

## In front of text

In this option, the image or shape is placed in front of the text. This can be used to place an image around some text or to add a shape to highlight a part in a paragraph.

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

N> Tight and Through styles will be preserved as the square wrapping style in the DOCX Editor, which is supported from v19.2.0.x.

![view of shape with square wrapping style in DocumentEditor](images/Text-Wrapping-Style_images/square-textwrapping.PNG)
