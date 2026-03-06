---
layout: post
title: Working with the Toolbar in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to use, customize, and extend the built-in toolbar in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Working with the Toolbar in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) includes a built-in toolbar that enhances PDF viewing and editing capabilities, allowing you to perform operations such as adding and modifying annotations, searching for text, and more.

## Toolbars structure 

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) features a built-in toolbar that utilizes multiple or multilevel toolbars. This design ensures that the user interface remains clean and accessible. We have incorporated multiple toolbars, such as top, bottom, and sub-toolbars for editing and choosing types, to ensure comprehensive functionality across various platforms. These toolbars are strategically organized based on the available screen space, adapting to different screen sizes on both mobile and desktop platforms. This approach ensures that tools are easily accessible, preventing the interface from cluttering.

### Need for using multiple toolbars

Depending on the available screen space, the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) organizes its tools into multiple or multilevel toolbars on mobile and desktop platforms. The use of multiple toolbars in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) is essential to maintain a user-friendly interface. By separating tools into different toolbars, users can quickly find and use the tools they need without the interface becoming cluttered.

The names of these toolbars and their description are listed in the following sections. 

### Mobile toolbar names

<table>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td>TopToolbar</td>
<td>The toolbar appears at the top of the mobile PDF viewer.</td>
</tr>
<tr>
<td>BottomToolbar</td>
<td>The annotation toolbar appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>RectangleAnnotationEditToolbar</td>
<td>The toolbar for editing rectangle annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>CircleAnnotationEditToolbar</td>
<td>The toolbar for editing circle annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>LineAnnotationEditToolbar</td>
<td>The toolbar for editing line annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>ArrowAnnotationEditToolbar</td>
<td>The toolbar for editing arrow annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>PolygonAnnotationEditToolbar</td>
<td>The toolbar for editing polygon annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>PolylineAnnotationEditToolbar</td>
<td>The toolbar for editing polyline annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>InkAnnotationEditToolbar</td>
<td>The toolbar for editing ink annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>EraserEditToolbar</td>
<td>The toolbar for editing eraser annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>FreeTextAnnotationEditToolbar</td>
<td>The toolbar for editing free text annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>StickyNoteAnnotationEditToolbar</td>
<td>The toolbar for editing sticky note annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>HighlightAnnotationEditToolbar</td>
<td>The toolbar for editing highlight annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>StrikeOutAnnotationEditToolbar</td>
<td>The toolbar for editing strikeout annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>UnderlineAnnotationEditToolbar</td>
<td>The toolbar for editing underline annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>SquigglyAnnotationEditToolbar</td>
<td>The toolbar for editing squiggly annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>StampAnnotationEditToolbar</td>
<td>The toolbar for editing stamp annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>TextMarkupToolbar</td>
<td>The toolbar for editing text markup annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>ShapeAnnotationsToolbar</td>
<td>The toolbar for editing shape annotations appears at the bottom of the mobile PDF viewer.</td>
</tr>
<tr>
<td>StickyNoteIconsToolbar</td>
<td>The toolbar for editing sticky note icons appears at the bottom of the mobile PDF viewer.</td>
</tr>
</table>

### Desktop toolbar names 

<table>
<tr>
<td>Keys</td>
<td>Description</td>
</tr>
<tr>
<td>PrimaryToolbar</td>
<td>The toolbar, appears at the top of the desktop PDF viewer.</td>
</tr>
<tr>
<td>AnnotationsToolbar</td>
<td>The annotation toolbar, appears below the PrimaryToolbar of the desktop PDF viewer.</td>
</tr>
<tr>
<td>RectangleAnnotationEditToolbar</td>
<td>The toolbar for editing rectangle annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>CircleAnnotationEditToolbar</td>
<td>The toolbar for editing circle annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>LineAnnotationEditToolbar</td>
<td>The toolbar for editing line annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>ArrowAnnotationEditToolbar</td>
<td>The toolbar for editing arrow annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>PolygonAnnotationEditToolbar</td>
<td>The toolbar for editing polygon annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>PolylineAnnotationEditToolbar</td>
<td>The toolbar for editing polyline annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>InkAnnotationEditToolbar</td>
<td>The toolbar for editing ink annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>EraserEditToolbar</td>
<td>The toolbar for editing eraser annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>FreeTextAnnotationEditToolbar</td>
<td>The toolbar for editing free text annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>StickyNoteAnnotationEditToolbar</td>
<td>The toolbar for editing sticky note annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>HighlightAnnotationEditToolbar</td>
<td>The toolbar for editing highlight annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>StrikeOutAnnotationEditToolbar</td>
<td>The toolbar for editing strikeout annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>UnderlineAnnotationEditToolbar</td>
<td>The toolbar for editing underline annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>SquigglyAnnotationEditToolbar</td>
<td>The toolbar for editing squiggly annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
<tr>
<td>StampAnnotationEditToolbar</td>
<td>The toolbar for editing stamp annotations appears at the bottom of the desktop PDF viewer.</td>
</tr>
</table>

### Toolbar customization

For details on showing, hiding, adding, removing, and reordering toolbars and toolbar items, see [Toolbar Customization](https://help.syncfusion.com/maui/pdf-viewer/toolbar-customization).

## Toolbar items

In [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html), the user  can also manage the items within each toolbar of the PDF Viewer. This allows you to control which tools are available and how they are arranged, providing a tailored user experience that aligns with your application’s requirements.

The names of these toolbar items, along with their descriptions and availability in the toolbars, are listed in the following sections.

### Mobile toolbar item names

<table>
<tr>
<td>Keys</td>
<td>Description</td>
<td>Item available in toolbars</td>
</tr>
<tr>
<td>Undo</td>
<td>The button that appears in the top toolbar allows you to undo an action.</td>
<td>TopToolbar</td>
</tr>
<tr>
<td>Redo</td>
<td>The button that appears in the top toolbar allows you to redo an action.</td>
<td>TopToolbar</td>
</tr>
<tr>
<td>ZoomMode</td>
<td>The button that appears in the top toolbar allows you to adjust the magnification level of the PDF viewer content. </td>
<td>TopToolbar</td>
</tr>
<tr>
<td>PageSettings</td>
<td>The button that appears in the top toolbar allows you to customize the page display and layout of the PDF viewer content. </td>
<td>TopToolbar</td>
</tr>
<tr>
<td>Search</td>
<td>The button that appears in the top toolbar allows you to locate specific text or content in the document quickly. </td>
<td>TopToolbar</td>
</tr>
<tr>
<td>MoreItem</td>
<td>The button that appears in the top toolbar allows you to expand the options available in the PDF Viewer.</td>
<td>TopToolbar</td>
</tr>
<tr>
<td>TextMarkup</td>
<td>The button that appears in the bottom toolbar allows you to annotate text in the PDF Viewer.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>FreeText</td>
<td>The button that appears in the bottom toolbar allows you to add text annotations directly to the document in the PDF Viewer.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>Ink</td>
<td>The button that appears in the bottom toolbar allows you to draw freehand annotations.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>Eraser</td>
<td>The button that appears in the bottom toolbar allows you to erase the ink annotations in the PDF Viewer.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>Shape</td>
<td>The button that appears in the bottom toolbar allows you to add shapes to the document.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>Stamp</td>
<td>The button that appears in the bottom toolbar allows you to add the in-built and custom stamps.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>Signature</td>
<td>The button that appears in the bottom toolbar allows you to create and add the signature and indicate the signature annotation type.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>StickyNote</td>
<td>The button that appears in the bottom toolbar allows you to add a sticky note to the document.</td>
<td>BottomToolbar</td>
</tr>
<tr>
<td>TextMarkupToolbarBackIcon</td>
<td>The button that appears in the text markup toolbar allows you to navigate back from the text markup toolbar.</td>
<td>TextMarkupToolbar</td>
</tr>
<tr>
<td>Highlight</td>
<td>The button that appears in the text markup toolbar allows you to highlight the text in the document.</td>
<td>TextMarkupToolbar</td>
</tr>
<tr>
<td>Underline</td>
<td>The button that appears in the text markup toolbar allows you to underline the text in the document.</td>
<td>TextMarkupToolbar</td>
</tr>
<tr>
<td>StrikeOut</td>
<td>The button that appears in the text markup toolbar allows you to strike out the text in the document.</td>
<td>TextMarkupToolbar</td>
</tr>
<tr>
<td>Squiggly</td>
<td>The button that appears in the text markup toolbar allows you to add squiggly lines to the text in the document.</td>
<td>TextMarkupToolbar</td>
</tr>
<tr>
<td>ShapeToolbarBackIcon</td>
<td>The button that appears in the shape toolbar allows you to navigate back from the shape toolbar.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Line</td>
<td>The button that appears in the shape toolbar allows you to draw a line in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Arrow</td>
<td>The button that appears in the shape toolbar allows you to draw an arrow in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Rectangle</td>
<td>The button that appears in the shape toolbar allows you to draw a rectangle in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Circle</td>
<td>The button that appears in the shape toolbar allows you to draw a circle in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Polygon</td>
<td>The button that appears in the shape toolbar allows you to draw polygons in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Polyline</td>
<td>The button that appears in the shape toolbar allows you to draw polylines in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>Cloud</td>
<td>The button that appears in the shape toolbar allows you to draw a cloud in the document.</td>
<td>ShapeAnnotationsToolbar</td>
</tr>
<tr>
<td>SecondaryAnnotationBackIcon</td>
<td>The button that appears in the annotation edit toolbars allows you to navigate back from the annotation edit toolbar.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar</td>
</tr>
<tr>
<td>BackIconSeparator</td>
<td>The separator that appears in the annotation edit toolbar is positioned after the back button.</td>
<td> HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar</td>
</tr>
<tr>
<td>AnnotationType</td>
<td>The button that appears in the annotation edit toolbar allows you to indicate the annotation type.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar</td>
</tr>
<tr>
<td>BorderStyle</td>
<td>The button that appears in the cloud annotation edit toolbar allows you to indicate the cloud annotation.</td>
<td>PolygonAnnotationEditToolbar</td>
</tr>
<tr>
<td>TextColor</td>
<td>The button that appears in the free text annotation edit toolbar allows you to change the free text color.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>TextSize</td>
<td>The button that appears in the free text annotation edit toolbar allows you to change the text size.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>TextPropertySeparator</td>
<td>The separator that appears in the free text annotation edit toolbar is positioned after the text size button.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Edit</td>
<td>The button that appears in the sticky note annotation edit toolbar allows you to edit text in the sticky note.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>TextFillColor</td>
<td>The button that appears in the free text annotation edit toolbar allows you to set the fill color of the text box.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Thickness</td>
<td>The button that appears in the annotation edit toolbar allows you to set the thickness of the annotations.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar</td>
</tr>
<tr>
<td>StokeColor</td>
<td>The button that appears in the annotation edit toolbar allows you to set the stroke color of the annotations.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar</td>
</tr>
<tr>
<td>Notes</td>
<td>The button that appears in the top toolbar allows you to show the sticky note icons.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar</td>
</tr>
<tr>
<td>FillColor</td>
<td>The button that appears in the annotation edit toolbar allows you to set the fill color of the annotations.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Opacity</td>
<td>The button that appears in the annotation edit toolbar allows you to set the opacity of the annotations.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>DeleteSeparator</td>
<td>The separator that appears in the annotation edit toolbar positioned before the delete button.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Delete</td>
<td>The button that appears in the annotation edit toolbar allows you to delete the selected annotations.</td>
<td>HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, SquigglyAnnotationEditToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, and StampAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Note</td>
<td>The button that appears in the sticky note icons toolbar allows you to add a note type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>Insert</td>
<td>The button that appears in the sticky note icons toolbar allows you to add an insert type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>Comment</td>
<td>The button that appears in the sticky note icons toolbar allows you to add a comment type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>Key</td>
<td>The button that appears in the sticky note icons toolbar allows you to add the key type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>Help</td>
<td>The button that appears in the sticky note icons toolbar allows you to add a help type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>Paragraph</td>
<td>The button that appears in the sticky note icons toolbar allows you to add a paragraph type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>New Paragraph</td>
<td>The button that appears in the sticky note icons toolbar allows you to add a new paragraph type of the sticky note.</td>
<td>StickyNoteIconsToolbarView</td>
</tr>
<tr>
<td>Outline</td>
<td>The button that appears in the more option toolbar allows you to see the outline view of the document.</td>
<td>MoreOptionToolbar</td>
</tr>
<tr>
<td>Print</td>
<td>The button that appears in the more option toolbar allows you to print the document from the PDF Viewer.</td>
<td>MoreOptionToolbar</td>
</tr>
<tr>
<td>SearchBackIcon</td>
<td>The button that appears in the search toolbar allows you to navigate back from the search toolbar. </td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>SearchEntry</td>
<td>The entry that appears in the search toolbar allows you to enter the text you want to search.</td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>SearchBusyIndicator</td>
<td>The button that appears in the search toolbar indicates an ongoing search.</td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>ClearSearch</td>
<td>The button that appears in the search toolbar allows you to clear the current search text.</td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>ClearSeparator</td>
<td>The separator that appears in the search toolbar is positioned after the clear button.</td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>PreviousSearch</td>
<td>The button that appears in the search toolbar allows you to navigate to the previous search result.</td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>NextSearch</td>
<td>The button that appears in the search toolbar allows you to navigate to the next search result.</td>
<td>SearchToolbar</td>
</tr>
<tr>
<td>MoreOption</td>
<td>The button that appears in the search toolbar allows you to search with case sensitivity.</td>
<td>SearchToolbar</td>
</tr>
</table>

### Desktop toolbar item names

<table>
<tr>
<td>Keys</td>
<td>Description</td>
<td>Item available in toolbars</td>
</tr>
<tr>
<td>Undo</td>
<td>The button that appears in the primary toolbar allows you to undo an action.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Redo</td>
<td>The button that appears in the primary toolbar allows you to redo an action.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Previous page</td>
<td>The button that appears in the primary toolbar allows you to navigate to the page before the current one in the PDF Viewer.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Next page</td>
<td>The button that appears in the primary toolbar allows you to navigate to the page next to the current one in the PDF Viewer.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Page number entry</td>
<td>The entry that appears in the primary toolbar allows you to navigate to the entered page number.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Page count</td>
<td>The button that appears in the primary toolbar represents the total number of pages in the document.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Zoom mode</td>
<td>The button that appears in the primary toolbar allows you to adjust the magnification level of the PDF viewer content. </td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Annotations</td>
<td>The button that appears in the primary toolbar allows you to access the annotation toolbar.</td>
<td></td>
</tr>
<tr>
<td>Print</td>
<td>The button that appears in the primary toolbar allows you to print the document from the PDF Viewer.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Outline</td>
<td>The button that appears in the primary toolbar allows you to see the outline view of the document.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Search</td>
<td>The button that appears in the primary toolbar allows you to locate specific text or content in the document quickly.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Page layout mode</td>
<td>The button that appears in the primary toolbar allows you to customize page display and layout in the PDF Viewer.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>Text markups</td>
<td>The button that appears in the annotation toolbar allows you to annotate text in the PDF Viewer.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Highlight</td>
<td>The button that appears in the annotation toolbar allows you to highlight the text in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Underline</td>
<td>The button that appears in the annotation toolbar allows you to underline the text in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Strikeout</td>
<td>The button that appears in the annotation toolbar allows you to strike out the text in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Squiggly</td>
<td>The button that appears in the annotation toolbar allows you to add squiggly lines to the text in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Ink</td>
<td>The button that appears in the annotation toolbar allows you to draw freehand annotations.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Ink eraser</td>
<td>The button that appears in the annotation toolbar allows you to erase the ink annotations drawn in the document</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Free text</td>
<td>The button that appears in the annotation toolbar allows you to add text annotations directly to the document in the PDF Viewer.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Shapes</td>
<td>The button that appears in the annotation toolbar allows you to add different shapes to the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Square</td>
<td>The button that appears in the annotation toolbar allows you to draw a square in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Circle</td>
<td>The button that appears in the annotation toolbar allows you to draw a circle in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Line</td>
<td>The button that appears in the annotation toolbar allows you to draw a line in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Arrow</td>
<td>The button that appears in the annotation toolbar allows you to draw an arrow in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Polyline</td>
<td>The button that appears in the annotation toolbar allows you to draw polylines in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Polygon</td>
<td>The button that appears in the annotation toolbar allows you to draw polygons in the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Cloud</td>
<td>The button that appears in the annotation toolbar allows you to draw a cloud on the document.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Stamps</td>
<td>The button that appears in the annotation toolbar allows you to add the inbuilt stamps and custom stamps.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Sticky note</td>
<td>The button that appears in the annotation toolbar allows you to add a sticky note to the document in the PDF Viewer.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Signature</td>
<td>The button that appears in the annotation toolbar allows you to create and add a signature.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Color picker</td>
<td>The button that appears in the annotation toolbar allows you to select and apply colors to the annotations.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Thickness</td>
<td>The button that appears in the annotation toolbar allows you to set the thickness of the annotations.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Delete</td>
<td>The button that appears in the annotation toolbar allows you to delete the selected annotation.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Sticky note icons</td>
<td>The button that appears in the annotation toolbar allows you to select the types of sticky notes.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar.</td>
</tr>
<tr>
<td>Font size</td>
<td>The button that appears in the annotation toolbar allows you to change the size of the text.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar</td>
</tr>
<tr>
<td>ColorPickerSeparator</td>
<td>The separator that appears in the annotation toolbar is positioned before the color picker button.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar</td>
</tr>
<tr>
<td>Close</td>
<td>The button that appears in the annotation toolbar allows you to close the annotation toolbar.</td>
<td>AnnotationsToolbar, LineAnnotationEditToolbar, ArrowAnnotationEditToolbar, RectangleAnnotationEditToolbar, CircleAnnotationEditToolbar, PolygonAnnotationEditToolbar, PolylineAnnotationEditToolbar, FreeTextAnnotationEditToolbar, InkAnnotationEditToolbar, EraserEditToolbar, StickyNoteAnnotationEditToolbar, StampAnnotationEditToolbar, HighlightAnnotationEditToolbar, UnderlineAnnotationEditToolbar, StrikeOutAnnotationEditToolbar, and SquigglyAnnotationEditToolbar</td>
</tr>
<tr>
<td>PageCountSeparator</td>
<td>The separator that appears in the primary toolbar allows you to separate the page number entry and page count buttons.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>ZoomIconSeparator</td>
<td>The separator that appears in the primary toolbar is positioned before the Zoom mode button.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>AnnotationSeparator</td>
<td>The separator that appears in the primary toolbar is positioned before the annotations button.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>PrintSeparator</td>
<td>The separator that appears in the primary toolbar is positioned after the print button.</td>
<td>PrimaryToolbar</td>
</tr>
<tr>
<td>MoreOptionSeparator</td>
<td>The separator that appears in the primary toolbar is positioned before the page layout mode.</td>
<td>PrimaryToolbar</td>
</tr>
</table>


## See Also

* [Toolbar Customization — show, hide, add, remove, reorder toolbar items](https://help.syncfusion.com/maui/pdf-viewer/toolbar-customization)
* [UI Customization](https://help.syncfusion.com/maui/pdf-viewer/ui-customization)
* [Annotations Overview](https://help.syncfusion.com/maui/pdf-viewer/annotations-overview)
