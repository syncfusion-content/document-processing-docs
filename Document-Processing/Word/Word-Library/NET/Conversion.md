---
title: Word document conversion in C# | DocIO | Syncfusion
description: Learn how to convert a Word document into other supported file formats using Syncfusion<sup>&reg;</sup> Word library (Essential<sup>&reg;</sup> DocIO)
platform: document-processing
control: DocIO
documentation: UG
---
# Conversion in Word Library

## Working with Document Conversions

The Essential<sup>&reg;</sup> DocIO converts documents from one format to another format. Each file format document can be categorized as flow layout document or fixed layout document.

**Flow layout document**

* A flow document is designed to "reflow content" depending on the application.
* Does not contain any information about the position of its content.
* Dynamically renders the content by application at run time.
* Example: DOC, DOCX, HTML, EPUB, RTF, and TEXT file formats.

**Fixed layout document**

* This format of fixed document is like "what you see is what you get".
* Maintains the fixed position for each content.
* Statically preserves the content in specified position.
* Example: Image and PDF.


Essential<sup>&reg;</sup> DocIO can convert various flow document as fixed document by using our layout engine. The following conversions are supported by Essential<sup>&reg;</sup> DocIO:

* Word document to PDF
* Word document to Image
* HTML Conversions
* Markdown Conversions
* RTF Conversions
* Text Conversions
* Word document to ODT
* Word document to EPUB
* Microsoft Word file format Conversions

## Converting Word document to PDF

Essential<sup>&reg;</sup> DocIO allows you to convert Word documents into PDF with just a few lines of code. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf).


### Customizing the Word document to PDF conversion

Essential<sup>&reg;</sup> DocIO allows you to customize the Word to PDF conversion with the following options:

* Allows to embed the TrueType fonts used in the converted PDF
* Allows to determine the quality of the charts in the converted PDF 
* Allows to determine the quality of the JPEG images in the converted PDF
* Allows to reduce the Main Memory usage in Word to PDF conversion by reusing the identical images.

For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf#customization-settings).
 
 
### Unsupported elements in Word to PDF conversion

Kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf#unsupported-elements-in-word-to-pdf-conversion) for a list of unsupported elements in Word to PDF conversion.


## Rendering / Converting Word document to Image

Essential<sup>&reg;</sup> DocIO supports converting Word documents to images using the [RenderAsImages](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_RenderAsImages_Syncfusion_DocIO_DLS_ImageType_) method. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image).

## HTML conversion

Essential<sup>&reg;</sup> DocIO supports converting the HTML file into Word document and vice versa. It supports only HTML files that meet the validation against the either XHTML 1.0 strict or XHTML 1.0 Transitional schema. 

For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/html-conversions).


### Customizing the HTML to Word conversion

You can customize the HTML to Word conversion with the following options:

* Validate the HTML string against XHTML 1.0 Strict and Transitional schema
* Insert the HTML string at the specified position of the document body contents
* Append HTML string to the specified paragraph

For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/html-conversions#customizing-the-html-to-word-conversion).

### Customizing the Word to HTML conversion

You can customize the Word to HTML conversion with the following options:

* Extract the images used in the HTML document at the specified file directory 
* Specify to export the header and footer of the Word document in the HTML 
* Specify to consider Text Input field as a editable fields or text 
* Specify the CSS style sheet type and its name

N> 
While exporting the header and footer, DocIO exports the first section's header content at the top of the HTML file and first section's footer content at the end of the HTML file.

For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/html-conversions#customizing-the-word-to-html-conversion).

### Supported Document elements

Kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/html-conversions#supported-and-unsupported-items) for the document elements and attributes are supported by DocIO in Word to HTML and HTML to Word conversions.

## Markdown conversion 

Essential<sup>&reg;</sup> DocIO supports converting Markdown files to Word documents and vice versa.

For further information, kindly refer to the following links:
* [Markdown to Word conversion](https://help.syncfusion.com/document-processing/word/conversions/markdown-to-word-conversion)
* [Word to Markdown conversion](https://help.syncfusion.com/document-processing/word/conversions/word-to-markdown-conversion)

## RTF conversion 

Essential<sup>&reg;</sup> DocIO supports converting RTF documents to Word documents and vice versa. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/rtf-conversions).

## Text conversion

Essential<sup>&reg;</sup> DocIO supports converting Word documents to text files and vice versa. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/text-conversions).

## Word to ODT

Essential<sup>&reg;</sup> DocIO supports converting Word documents to ODT. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-odt-conversion).

## Word to EPUB

Essential<sup>&reg;</sup> DocIO supports converting Word documents to EPUB v2.0. This feature is supported only on Windows Forms, UWP, WPF, ASP.NET Web, and MVC platforms. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-epub-conversion).

## Microsoft Word File Format Conversions

Essential<sup>&reg;</sup> DocIO supports converting Word documents between different Microsoft Word file formats, including DOCX, DOCM, DOTX, DOTM, WordML, DOC, and DOT. You can load a document in one Word format and save it in another supported Word format. For further information, kindly refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-file-formats-conversions).
