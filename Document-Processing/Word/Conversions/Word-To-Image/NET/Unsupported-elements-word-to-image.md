---
title: Limitations in Word to Image Conversion | DocIO | Syncfusion
description: Learn about the limitations in Word to Image conversion in C# using the .NET Word (DocIO) library for effective application.
platform: document-processing
control: DocIO
documentation: UG
---

# Limitations in Word to Image Conversion

The following tables shows the limitations of Word to Image conversion.

<table>
<thead> 
<tr>
<th>Document Element</th>
<th>Limitation</th>
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
Only DOCX and WordML format documents are supported from .NET Framework 4.0 onwards. The following chart types are not supported: Line-Stacked Line, Line-Stacked line with markers, Pie-Pie of Pie, Pie-Bar of Pie, Map-Filled Map, Stock-Volume high low close, Stock-Volume open high low close, Surface-3D Surface, Surface-Wireframe 3D Surface, Surface-Contour, Surface-Wireframe Contour, Treemap-Treemap, Sunburst-Sunburst, Histogram-Histogram, Histogram-Pareto chart, Box & Whisker, Waterfall and Funnel.
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
Equation
</td>
<td>
Mathematical equations extending to multiple lines will be rendered in a single line and content exceeding the right margin will clip in the image.
</td>
</tr>
<tr>
<td>
SmartArt
</td>
<td>
Supported only in DOCX format document to image.  Additional behavior explained {{ '[here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf#smartart)' | markdownify }}.
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
Multi-Column text positions are calculated dynamically when layout the text. So, there may be some content position differences occur in the image.
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
</table>

<table>
<thead> 
<tr>
<th>Formatting</th>
<th>Limitation</th>
</tr>
</thead>
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
The Essential<sup>&reg;</sup> DocIO makes sensible decision when layout the text, and its supported elements while generating the PDF documents. But however, there may not be guaranteed pagination with all the documents.
</td>
</tr>
<tr>
<td>
Fit Text - Table cell
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
Borders
</td>
<td>
Using of patterns and 3D borders are not retained in the output image.
</td>
</tr>
<tr>
<td>
Break - Page break, column break and Line break
</td>
<td>
Text wrapping break is not supported.
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
Transparency and Pattern fill in shapes
</td>
<td>
Supported only in DOCX format during Word to image conversion.
</td>
</tr>
<tr>
<td>
Recolor picture
</td>
<td>
Supported only in DOCX format during Word to image conversion.
</td>
</tr>
<tr>
<td>
Gradient fill in Shapes
</td>
<td>
Supported only in DOCX format. Rectangular and Path gradient types are not supported in image conversions in ASP.NET Core, Blazor, WinUI, .NET MAUI, and Xamarin platforms. These are currently rendered as Radial gradients.
</td>
</tr>
</table>

