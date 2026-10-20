---
title: Document Object Model in .NET Excel Library | Syncfusion
description: The document object model page describes the structure used to create and manipulate Excel workbook elements.
platform: document-processing
control: XlsIO
documentation: UG
---
# Document Object Model in .NET Excel Library

When an existing document is opened or a new document is created, the XlsIO library creates a **Document Object Model** (DOM) of the document in main memory. This object model can be used to manipulate the document as needed.

![DocumentObjectModel](DocumentObjectModel_images/DocumentObjectModel.png)

**Object Reference Links**

<table>
<tr>
<th><b>Object</b><br/><br/></th>
<th><b>Reference Link</b><br/><br/></th>
</tr>
<tbody>
<tr>
<td>ExcelEngine<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelEngine.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelEngine.html</a><br/><br/></td>
</tr>
<tr>
<td>IApplication<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IApplication.html</a><br/><br/></td>
</tr>
<tr>
<td>IWorkbooks<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html"  aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html</a><br/><br/></td>
</tr>
<tr>
<td>IWorkbook<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html</a><br/><br/></td>
</tr>
<tr>
<td>IWorksheets<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheets.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheets.html</a><br/><br/></td>
</tr>
<tr>
<td>IWorksheet<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html</a><br/><br/></td>
</tr>
<tr>
<td>IChartShapes (Embedded Chart)<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartShapes.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartShapes.html</a><br/><br/></td>
</tr>
<tr>
<td>IChartShape<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartShape.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartShape.html</a><br/><br/></td>
</tr>
<tr>
<td>IRange<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html</a><br/><br/></td>
</tr>
<tr>
<td>IDataValidation<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataValidation.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataValidation.html</a><br/><br/></td>
</tr>
<tr>
<td>IConditionalFormats<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IConditionalFormats.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IConditionalFormats.html</a><br/><br/></td>
</tr>
<tr>
<td>Formula<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Formula" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Formula</a><br/><br/></td>
</tr>
<tr>
<td>Number<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Number" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Number</a><br/><br/></td>
</tr>
<tr>
<td>Text<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Text" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Text</a><br/><br/></td>
</tr>
<tr>
<td>DateTime<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_DateTime" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_DateTime</a><br/><br/></td>
</tr>
<tr>
<td>ISparklineGroups<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ISparklineGroups.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ISparklineGroups.html</a><br/><br/></td>
</tr>
<tr>
<td>ISparklines<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ISparklines.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ISparklines.html</a><br/><br/></td>
</tr>
<tr>
<td>IListObjects<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObjects.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IListObjects.html</a><br/><br/></td>
</tr>
<tr>
<td>IPivotTables<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTables.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTables.html</a><br/><br/></td>
</tr>
<tr>
<td>IStyle<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IStyle.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IStyle.html</a><br/><br/></td>
</tr>
<tr>
<td>IDataSort<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataSort.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataSort.html</a><br/><br/></td>
</tr>
<tr>
<td>IAutoFilters<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilters.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IAutoFilters.html</a><br/><br/></td>
</tr>
<tr>
<td>IShapes<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShapes.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IShapes.html</a><br/><br/></td>
</tr>
<tr>
<td>IPictures<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictures.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPictures.html</a><br/><br/></td>
</tr>
<tr>
<td>IHyperlinks<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLinks.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IHyperLinks.html</a><br/><br/></td>
</tr>
<tr>
<td>Protect (Worksheet Protection)<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabsheet.html#Syncfusion_XlsIO_ITabSheet_Protect_System_String_" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabsheet.html#Syncfusion_XlsIO_ITabSheet_Protect_System_String_</a><br/><br/></td>
</tr>
<tr>
<td>ICharts (Chart Sheet)<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ICharts.html" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ICharts.html</a><br/><br/></td>
</tr>
<tr>
<td>Protect (Workbook Protection)<br/><br/></td>
<td><a href="https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_Protect_System_Boolean_System_Boolean_" aria-label="Class reference documentation link">https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_Protect_System_Boolean_System_Boolean_</a><br/><br/></td>
</tr>
</tbody>
</table>
