---
title: Unsupported elements in Word to PDF Conversion in C# | DocIO | Syncfusion
description: Learn about unsupported elements in Word to PDF conversion using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Unsupported elements in Word to PDF Conversion

The following table shows the unsupported elements of Word to PDF conversion.

<table>
<thead> 
<tr>
<th>Element</th>
<th>Unsupported elements</th>
</tr>
</thead>
<tr>
<td>
Predefined shapes
</td>
<td>
Only DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Chart
</td>
<td>
Only DOCX and WordML format documents are supported from .NET Framework 4.0 onwards.
</td>
</tr>
<tr>
<td>
Table Styles
</td>
<td>
Only DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Pagination
</td>
<td>
The Essential DocIO makes sensible decision when layout the text, and its supported elements while generating the PDF documents. But however, there may not be guaranteed pagination with all the documents.
</td>
</tr>
<tr>
<td>
Grouped Shapes
</td>
<td>
Only DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Custom Shapes 
</td>
<td>
Only DrawingML custom shapes in DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Fit Text – Table cell
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
Vertical Alignment of the section
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
Equation
</td>
<td>
Mathematical equations extending to multiple lines will be rendered in a single line and content exceeding the right margin will clip in the PDF.
</td>
</tr>
<tr>
<td>
SmartArt
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
WordArt
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
Watermark
</td>
<td>
First watermark of the Word document should be applied to the entire converted PDF document when the Word document have multiple watermarks.
</td>
</tr>
<tr>
<td>
Multi-Column Texts
</td>
<td>
Multi-Column text positions are calculated dynamically when layout the text. So, there may be some content position differences occur in the PDF document.
</td>
</tr>
<tr>
<td>
Borders
</td>
<td>
Using of patterns and 3D borders are not retained in the output PDF document.
</td>
</tr>
<tr>
<td>
Break – Page break, column break and Line break
</td>
<td>
Text wrapping break is not supported.
</td>
</tr>
<tr>
<td>
Footnote and endnote
</td>
<td>
Number formats in Roman, Alphabets, and Arabic only supported.
</td>
</tr>
<tr>
<td>
Textbox
</td>
<td>
Linked text boxes are not supported.
</td>
</tr>
<tr>
<td>
Font kerning
</td>
<td>
Partially supported. At present, the text in a line is scaled uniformly to match the width of kerned text, instead of adjusting the space between each pair of characters.
</td>
</tr>
<tr>
<td>
Images
</td>
<td>
In .NET Core and latest target, we have limitation in metafile. Refer {{'[here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#why-images-are-preserved-as-redx-images-in-word-to-pdf-conversion)'| markdownify }}
</td>
</tr>
</table>
