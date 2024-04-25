---
title: Migrate from .NET Framework to .NET Core | Syncfusion 
description: This section explains the process of migrating from .NET Framework to .NET Core for classes, methods, properties and events. 
platform: file-formats
control: PDF
documentation: UG
---

# Migrate PDF library from .NET Framework to .NET Core 

In this section, we will see about the changes which need to be considered while migrating Syncfusion .NET PDF library from .NET Framework to .NET Core.  

## NuGet packages 

<table>
<tr>
<thead>
<th>Packages targeting .NET Framework</th>	
<th>Packages targeting .NET Standard 2.0/.NET Core</th>
</thead>
</tr>
<tr>
<td>{{'[Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/#"")'| markdownify }}<br/>{{'[Syncfusion.Pdf.Wpf](https://www.nuget.org/packages/Syncfusion.Pdf.Wpf/#"")'| markdownify }}<br/>{{'[Syncfusion.Pdf.AspNet](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet/#"")'| markdownify }}<br/>{{'[Syncfusion.Pdf.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc4/#"")'| markdownify }}<br/>{{'[Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/#"")'| markdownify }}</td>
<td>{{'[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/#"")'| markdownify }}</td>
</tr>
</table>

## Class changes 

<table>
<tr>
<thead>
<th>Missing classes</th>
<th>Alternate classes</th>
</thead>
</tr>
<tr>
<td>
{{'[PdfLoadedDocument(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_String_/)'| markdownify }}
</td>
<td> 
You can open the document as stream from the system file using {{'[PdfLoadedDocument(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_IO_Stream_/)'| markdownify }} API.  
</td>
</tr>
<tr>
<td>
{{'[PdfLoadedDocument(String, String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_String_System_String_/)'| markdownify }}
</td>
<td> 
You can open the encrypted document as stream or byte array with password from system file using {{'[PdfLoadedDocument(Stream, String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_IO_Stream_System_String_/)'| markdownify }} or {{'[PdfLoadedDocument(Byte[], String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_/)'| markdownify }} API. 
</td>
</tr>
<tr>
<td>
{{'[PdfLoadedDocument(String, Boolean)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_String_System_Boolean_/)'| markdownify }}
</td>
<td> 
You can open the corrupted PDF document as stream or byte array with Boolean from system file using {{'[PdfLoadedDocument(Stream, Boolean)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_IO_Stream_System_Boolean_)'| markdownify }} or {{'[PdfLoadedDocument(Byte[], Boolean)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_Boolean_)'| markdownify }} API. 
</td>
</tr>
<tr>
<td>
{{'[PdfBitmap(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap__ctor_System_String_)'| markdownify }}
</td>
<td> 
{{'[PdfBitmap(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap__ctor_System_IO_Stream_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[PdfBitmap(String, Boolean)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap__ctor_System_String_System_Boolean_)'| markdownify }}
</td>
<td> 
{{'[PdfBitmap(Steam, Boolean)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap__ctor_System_IO_Stream_System_Boolean_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[TextLines](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.TextLines.html#constructors)'| markdownify }}
</td>
<td> 
TextLineCollection <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document)'| markdownify }} 
</td>
</tr>
<tr>
<td>
{{'[PdfBitmap](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html)'| markdownify }}
</td>
<td> 
PdfTiffImage <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/TIFF-to-PDF/Converting-multipage-TIFF-to-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/TIFF-to-PDF/Converting-multipage-TIFF-to-PDF-document)'| markdownify }}   
</td>
</tr>
<tr>
<td>
{{'[XPSToPdfConverter](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Base~Syncfusion.XPS.XPSToPdfConverter.html)'| markdownify }}   
</td>
<td> 
XPSToPdfConverter <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/Converting-XPS-to-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/Converting-XPS-to-PDF-document)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[PdfCompressionOptions](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfCompressionOptions.html)'| markdownify }}   
</td>
<td> 
PdfCompressionOptions <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-the-images-in-an-existing-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-the-images-in-an-existing-PDF-document)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[PdfFileLinkAnnotation](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfFileLinkAnnotation.html)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[PdfLaunchAction](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfLaunchAction.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[PdfJavaScriptAction](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html)'| markdownify }} - Add/modify JavaScript actions on existing PDF document 
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[PdfDocumentAnalyzer(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfDocumentAnalyzer.html#Syncfusion_Pdf_Parsing_PdfDocumentAnalyzer__ctor_System_String_)'| markdownify }}
</td>
<td> 
You can check whether the existing PDF document is corrupted or not using {{'[PdfDocumentAnalyzer(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfDocumentAnalyzer.html#Syncfusion_Pdf_Parsing_PdfDocumentAnalyzer__ctor_System_IO_Stream_)'| markdownify }}.  
</td>
</tr>
<tr>
<td>
{{'[PdfUsedFont](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.Fonts.PdfUsedFont.html)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[ImageExportSettings](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.ImageExportSettings.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[PdfBarcodeException](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Barcode.PdfBarcodeException.html)'| markdownify }}
</td>
<td> 
BarcodeException 
</td>
</tr>
<tr>
<td>
{{'[ImageExportSettings](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.ImageExportSettings.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[HtmlToPdfResult](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.HtmlToPdf.HtmlToPdfResult.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[PdfRichMediaContent(String, PdfRichMediaContentType)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfRichMediaContent.html#Syncfusion_Pdf_Interactive_PdfRichMediaContent__ctor_System_String_Syncfusion_Pdf_Interactive_PdfRichMediaContentType_)'| markdownify }}
</td>
<td> 
{{'[PdfRichMediaContent(String, Stream, String, PdfRichMediaContentType)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfRichMediaContent.html#Syncfusion_Pdf_Interactive_PdfRichMediaContent__ctor_System_String_System_IO_Stream_System_String_Syncfusion_Pdf_Interactive_PdfRichMediaContentType_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[PdfAngleMeasurementAnnotation(PointF[])](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfAngleMeasurementAnnotation.html#Syncfusion_Pdf_Interactive_PdfAngleMeasurementAnnotation__ctor_System_Drawing_PointF___)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
<tr>
<td>
{{'[PdfCertificateDistinguishedName](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Security.PdfCertificateDistinguishedName.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[GraphicsStateData](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.GraphicsStateData.html)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[PdfConfig](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfConfig.html)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[TextData](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.TextData.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[TextLines](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.TextLines.html)'| markdownify }}
</td>
<td> 
TextLineCollection <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[PdfMetafile](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfMetafile.html)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
<tr>
<td>
{{'[PdfMetafileLayoutFormat](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfMetafileLayoutFormat.html)'| markdownify }}
</td>
<td> 
PdfLayoutFormat <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text/Adding-HTML-styled-text-to-PDF-document/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text/Adding-HTML-styled-text-to-PDF-document/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[XFdfDocument](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.XFdfDocument.html)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
<tr>
<td>
{{'[HtmlToPdfResult](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.HtmlToPdf.HtmlToPdfResult.html)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[PdfAngleMeasurementAnnotation](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfAngleMeasurementAnnotation.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
</table>

## Method changes 

<table>
<tr>
<thead>
<th>Missing methods</th>
<th>Alternate methods</th>
</thead>
</tr>
<tr>
<td>
{{'[ExtractText(out TextLines textLines)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractText_Syncfusion_Pdf_TextLines__)'| markdownify }}
</td>
<td> 
ExtractText(out TextLineCollection textLineCollection) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ExtractImages()](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractImages().html)'| markdownify }}
</td>
<td> 
ExtractImages <br/> *Sample link:* <br/> {{'[https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractImages().html](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractImages().html)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ExportAsImage()](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_Forms_PdfViewer_PdfViewerControl_ExportAsImage_System_Int32_)'| markdownify }}
</td>
<td> 
ExportAsImage() <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/PDF-to-Image/Convert-PDF-page-into-image](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/PDF-to-Image/Convert-PDF-page-into-image)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Redactions.Add(PdfRedaction)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfLoadedPage.html#Syncfusion_Pdf_PdfLoadedPage_Redactions)'| markdownify }}
</td>
<td> 
AddRedaction(PdfRedaction) - Additionally, call the following method to execute the redaction. <br/>
PdfLoadedDocument.Redact(); <br/> *Sample link:* <br/>
{{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Removing-sensitive-content-from-the-PDF-document/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Removing-sensitive-content-from-the-PDF-document/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ToImage()](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfUnidimensionalBarcode_ToImage)'| markdownify }}
</td>
<td> 
ToImage()  
</td>
</tr>
<tr>
<td>
{{'[Barcode.ToImage(SizeF size)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfUnidimensionalBarcode_ToImage)'| markdownify }}
</td>
<td> 
Barcode.ToImage(SizeF size) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Export-one-dimensional-barcode-as-image/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Export-one-dimensional-barcode-as-image/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Split()](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Split_System_String_)'| markdownify }}
</td>
<td> 
Not supported due to .NET Core framework limitations. Alternatively, this can be achieved by {{'[importing pages from one document to another](https://help.syncfusion.com/file-formats/pdf/working-with-pages#importing-pages-from-an-existing-document)'| markdownify }}.
</td>
</tr>
<tr>
<td>
{{'[FromRtf(String, Single, PdfImageType)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfImage.html#Syncfusion_Pdf_Graphics_PdfImage_FromRtf_System_String_System_Single_Syncfusion_Pdf_Graphics_PdfImageType_)'| markdownify }}
</td>
<td> 
Not supported due to .NET Core framework limitations. Alternatively, this can be achieved by using {{'[.NET Word library](https://help.syncfusion.com/file-formats/docio/overview)'| markdownify }}. 
<br/>
{{'[RTF to PDF](https://www.syncfusion.com/kb/8472/how-to-convert-a-word-document-to-pdf-in-asp-net-core)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Merge(PdfDocumentBase, object[])](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_Syncfusion_Pdf_PdfDocumentBase_System_Object___)'| markdownify }}
</td>
<td> 
Merge(PdfDocumentBase, Stream[])  <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Merge%20PDFs/Merge-multiple-documents-from-stream/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Merge%20PDFs/Merge-multiple-documents-from-stream/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Merge(String[])](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_System_String___)'| markdownify }}
</td>
<td> 
Merge(PdfDocumentBase, Stream[]) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Merge%20PDFs/Merge-multiple-documents-from-stream/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Merge%20PDFs/Merge-multiple-documents-from-stream/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Merge(String[], PdfMergeOptions)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_System_String___Syncfusion_Pdf_PdfMergeOptions_)'| markdownify }}
</td>
<td> 
Merge(PdfDocumentBase, PdfMergeOptions, Object[]) - Object[] in the form of Stream[]. 
</td>
</tr>
<tr>
<td>
{{'[PdfImage.FromFile(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfImage.html#Syncfusion_Pdf_Graphics_PdfImage_FromFile_System_String_)'| markdownify }}
</td>
<td> 
{{'[PdfImage.FromStream(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfImage.html#Syncfusion_Pdf_Graphics_PdfImage_FromStream_System_IO_Stream_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Image.FromFile(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Drawing.Image.html#Syncfusion_Drawing_Image_FromFile_System_String_)'| markdownify }}
</td>
<td> 
{{'[Image.FromStream(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Drawing.Image.html#Syncfusion_Drawing_Image_FromStream_System_IO_Stream_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[PdfSoundAction(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfSoundAction.html#Syncfusion_Pdf_Interactive_PdfSoundAction__ctor_System_String_)'| markdownify }}
</td>
<td> 
PdfSoundAction(Stream) 
</td>
</tr>
<tr>
<td>
{{'[PdfSoundAnnotation(RectangleF, String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfSoundAnnotation.html#Syncfusion_Pdf_Interactive_PdfSoundAnnotation__ctor_System_Drawing_RectangleF_System_String_)'| markdownify }}
</td>
<td> 
PdfSoundAnnotation(RectangleF, Stream)  
</td>
</tr>
<tr>
<td>
{{'[PdfTrueTypeFont(Font)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfTrueTypeFont.html#Syncfusion_Pdf_Graphics_PdfTrueTypeFont__ctor_System_Drawing_Font_)'| markdownify }}
</td>
<td> 
PdfTrueTypeFont(Stream) 
</td>
</tr>
<tr>
<td>
{{'[PdfTrueTypeFont(Font, int)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfTrueTypeFont.html#Syncfusion_Pdf_Graphics_PdfTrueTypeFont__ctor_System_Drawing_Font_)'| markdownify }}
</td>
<td> 
PdfTrueTypeFont(Stream, int)  
</td>
</tr>
<tr>
<td>
{{'[Replace(PdfFont)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.Fonts.PdfUsedFont.html#Syncfusion_Pdf_Graphics_Fonts_PdfUsedFont_Replace_Syncfusion_Pdf_Graphics_PdfFont_)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[EmbedFonts()](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_EmbedFonts)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[ExportAnnotations(String, AnnotationDataFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_String_Syncfusion_Pdf_Parsing_AnnotationDataFormat_)'| markdownify }}
</td>
<td> 
{{'[ExportAnnotations(Stream, AnnotationDataFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ImportAnnotations(String, AnnotationDataFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ImportAnnotations_System_String_Syncfusion_Pdf_Parsing_AnnotationDataFormat_)'| markdownify }}
</td>
<td> 
{{'[ImportAnnotations(Stream, AnnotationDataFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ImportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ExportData(String, DataFormat, String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ExportData_System_String_Syncfusion_Pdf_Parsing_DataFormat_System_String_)'| markdownify }}
</td>
<td> 
{{'[ExportData(Stream, DataFormat, String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ExportData_System_IO_Stream_Syncfusion_Pdf_Parsing_DataFormat_System_String_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ImportData(String, DataFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ImportData_System_String_Syncfusion_Pdf_Parsing_DataFormat_)'| markdownify }}
</td>
<td> 
{{'[ImportData(Byte[], DataFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ImportData_System_Byte___Syncfusion_Pdf_Parsing_DataFormat_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ImportDataJson(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ImportDataJson_System_String_)'| markdownify }}
</td>
<td> 
{{'[ImportDataJson(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ImportDataJson_System_IO_Stream_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ImportDataXFDF(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ImportDataXFDF_System_String_)'| markdownify }}
</td>
<td> 
{{'[ImportDataXFDF(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedForm.html#Syncfusion_Pdf_Parsing_PdfLoadedForm_ImportDataXFDF_System_IO_Stream_)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[GetFontsFromAppearance()](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Interactive.PdfLoadedFreeTextAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedFreeTextAnnotation_GetFontsFromAppearance)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[RemoveImage(PdfImageInfo)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_RemoveImage_Syncfusion_Pdf_Exporting_PdfImageInfo_)'| markdownify }}
</td>
<td> 
RemoveImage(PdfImageInfo[]) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Remove-images-from-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Remove-images-from-PDF-document)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ReplaceImage(Int32, PdfImage)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ReplaceImage_System_Int32_Syncfusion_Pdf_Graphics_PdfImage_)'| markdownify }}
</td>
<td> 
ReplaceImage(Int32, PdfImage) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Replace-image-in-an-existing-PDF-document/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Replace-image-in-an-existing-PDF-document/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[CreateBooklet(String, String, SizeF)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfBookletCreator.html#Syncfusion_Pdf_PdfBookletCreator_CreateBooklet_System_String_System_String_System_Drawing_SizeF_)'| markdownify }}
</td>
<td> 
CreateBooklet(PdfLoadedDocument, SizeF)  
</td>
</tr>
<tr>
<td>
{{'[CreateBooklet(String, String, SizeF, Boolean)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfBookletCreator.html#Syncfusion_Pdf_PdfBookletCreator_CreateBooklet_System_String_System_String_System_Drawing_SizeF_System_Boolean_)'| markdownify }}
</td>
<td> 
CreateBooklet(PdfLoadedDocument, SizeF, Boolean) 
</td>
</tr>
<tr>
<td>
{{'[Save(String)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save)'| markdownify }}
</td>
<td> 
You can save the document as stream to the file system using {{'[Save(Stream)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save_System_IO_Stream_)'| markdownify }} API.  
</td>
</tr>
<tr>
<td>
{{'[Save(String, HttpResponse, HttpReadType)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Save_System_String_System_Web_HttpResponse_Syncfusion_Pdf_HttpReadType_)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
<tr>
<td>
{{'[Save(Stream, HttpContext)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Save_System_IO_Stream_System_Web_HttpContext_)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[Draw(PdfGraphics, PointF, Single, Single)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_Draw_Syncfusion_Pdf_Graphics_PdfGraphics_System_Drawing_PointF_System_Single_System_Single_)'| markdownify }}
</td>
<td> 
Draw(PdfPage, PointF, Single, Single, PdfLayoutFormat)  
</td>
</tr>
<tr>
<td>
{{'[Draw(PdfGraphics, RectangleF)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_Draw_Syncfusion_Pdf_Graphics_PdfGraphics_System_Drawing_RectangleF_)'| markdownify }}
</td>
<td> 
Draw(PdfPage, RectangleF, PdfLayoutFormat)  
</td>
</tr>
<tr>
<td>
{{'[Draw(PdfPage, PointF, Single, PdfMetafileLayoutFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_Draw_Syncfusion_Pdf_PdfPage_System_Drawing_PointF_System_Single_Syncfusion_Pdf_Graphics_PdfMetafileLayoutFormat_)'| markdownify }}
</td>
<td> 
Draw(PdfPage, PointF, Single, PdfLayoutFormat)  
</td>
</tr>
<tr>
<td>
{{'[Draw(PdfPage, PointF, Single, Single, PdfMetafileLayoutFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_Draw_Syncfusion_Pdf_PdfPage_System_Drawing_PointF_System_Single_System_Single_Syncfusion_Pdf_Graphics_PdfMetafileLayoutFormat_)'| markdownify }}
</td>
<td> 
Draw(PdfPage, PointF, Single, Single, PdfLayoutFormat) 
</td>
</tr>
<tr>
<td>
{{'[Draw(PdfPage, RectangleF, PdfMetafileLayoutFormat)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_Draw_Syncfusion_Pdf_PdfPage_System_Drawing_RectangleF_Syncfusion_Pdf_Graphics_PdfMetafileLayoutFormat_)'| markdownify }}
</td>
<td> 
Draw(PdfPage, RectangleF, PdfLayoutFormat) 
</td>
</tr>
<tr>
<td>
{{'[Replace(PdfFont)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.Fonts.PdfUsedFont.html#Syncfusion_Pdf_Graphics_Fonts_PdfUsedFont_Replace_Syncfusion_Pdf_Graphics_PdfFont_)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
</table>

## Property changes 
<table>
<tr>
<thead>
<th>Missing properties</th>
<th>Alternate properties</th>
</thead>
</tr>
<tr>
<td>
{{'[ImagesInfo](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ImagesInfo)'| markdownify }}
</td>
<td> 
GetImagesInfo() <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Conformance](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Conformance)'| markdownify }}
</td>
<td> 
ConvertToPDFA(PdfConformanceLevel.Pdf_A1B) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[XFA Flatten](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Xfa.PdfLoadedXfaDocument.html#Syncfusion_Pdf_Xfa_PdfLoadedXfaDocument_Flatten)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
Pdf_X1A2001 through {{'[PdfConformanceLevel](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfConformanceLevel.html)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[PdfGrid.DataSource (DataTable)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Grid.PdfGrid.html#Syncfusion_Pdf_Grid_PdfGrid_DataSource)'| markdownify }}
</td>
<td> 
{{'[PdfGrid.DataSource (IEnumerable<object>)](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Grid.PdfGrid.html#Syncfusion_Pdf_Grid_PdfGrid_DataSource)'| markdownify }} - In ASP.NET Core, only the strongly typed IEnumerable objects are supported. 
</td>
</tr>
<tr>
<td>
{{'[PdfLoadedDocument.CompressionOptions = PdfCompressionOptions](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfCompressionOptions.html)'| markdownify }}
</td>
<td> 
PdfLoadedDocument.Compress(PdfCompressionOptions) <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-the-images-in-an-existing-PDF-document](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-the-images-in-an-existing-PDF-document)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[EncodingType](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.EncodingType.html)'| markdownify }} - Enum  
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[ImageExportSettings](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ImageExportSettings)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[IsAllFontsEmbedded](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_IsAllFontsEmbedded)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[ColorSpace](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfLoadedPage.html#Syncfusion_Pdf_PdfLoadedPage_ColorSpace)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
<tr>
<td>
{{'[Redactions](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfLoadedPage.html#Syncfusion_Pdf_PdfLoadedPage_Redactions)'| markdownify }}
</td>
<td> 
AddRedaction(PdfRedaction) - Additionally, call the following method to execute the redaction.<br/>
PdfLoadedDocument.Redact(); <br/> *Sample link:* <br/>
{{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Removing-sensitive-content-from-the-PDF-document/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Removing-sensitive-content-from-the-PDF-document/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[ImagesInfo](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ImagesInfo)'| markdownify }}
</td>
<td> 
GetImagesInfo() <br/> *Sample link:* <br/> {{'[https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[IsColored](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_IsColored)'| markdownify }}
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
{{'[ActiveFrame](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_ActiveFrame)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[Encoding](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_Encoding)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[FrameCount](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_FrameCount)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[Mask](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_Mask)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[Quality](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_Quality)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[IsNativeRenderingEnabled](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_IsNativeRenderingEnabled)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[TextAlign](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfHTMLTextElement.html#Syncfusion_Pdf_Graphics_PdfHTMLTextElement_TextAlign)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[RightToLeft](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Graphics.PdfStringFormat.html#Syncfusion_Pdf_Graphics_PdfStringFormat_RightToLeft)'| markdownify }}
</td>
<td> 
Not supported
</td>
</tr>
</table>

## Event changes 

<table>
<tr>
<thead>
<th>Missing events</th>
<th>Alternate events</th>
</thead>
</tr>
<tr>
<td>
FontNotFoundEventArgs
</td>
<td> 
Not supported  
</td>
</tr>
<tr>
<td>
ImagePreRenderEventArgs
</td>
<td> 
Not supported 
</td>
</tr>
<tr>
<td>
{{'[ImagePreRenderEventArgs](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.ImagePreRenderEventArgs.html)'| markdownify }}
</td>
<td> 
Not supported 
</td>
</tr>
</table>

## Advantages 
* *Cross-platform compatibility:* ASP.NET Core can run on Windows, MacOS, and Linux, making it a flexible option for developing web applications. 
* *Integration with cloud services:* ASP.NET Core can be easily integrated with cloud services, such as Microsoft Azure, Amazon Web Services, Docker and Google Cloud Platform.  

## Known limitations 
* EMF and WMF images are not supported on the .NET Core platform.   

## Notable changes
1. For text measuring and graphics operations in the .NET Framework, our library utilizes *System.Drawing*. In contrast, for similar graphics operations in .NET Core, our library employs *Syncfusion.Drawing*. 
2. The following features utilize the NuGet package [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) Which is separate from [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package.   
* [TIFF to PDF](https://help.syncfusion.com/file-formats/pdf/working-with-images#converting-multi-page-tiff-to-pdf)
* [Compress PDF](https://help.syncfusion.com/file-formats/pdf/working-with-compression)
* [Extract images from PDF](https://help.syncfusion.com/file-formats/pdf/working-with-image-extraction) 
* [Get image information from PDF](https://help.syncfusion.com/file-formats/pdf/working-with-image-extraction) 
* [Redact PDF](https://help.syncfusion.com/file-formats/pdf/working-with-redaction) 
* [Export barcode to Image](https://help.syncfusion.com/file-formats/pdf/working-with-barcode#export-barcode-as-image)
* [Convert PDF to PDF/A](https://help.syncfusion.com/file-formats/pdf/working-with-pdf-conformance#pdf-to-pdfa-conversion)
* [Replace images in an existing PDF document](https://help.syncfusion.com/file-formats/pdf/working-with-images#replacing-images-in-an-existing-pdf-document) 
3. For converting XPS to PDF document, kindly utilize the [Syncfusion.XpsToPdfConverter.Net.Core](https://www.nuget.org/packages/Syncfusion.XpsToPdfConverter.Net.Core) NuGet package in your ASP.NET Core application.  
4. To convert PDF to image, please use the [Syncfusion.EJ2.PdfViewer.AspNet.Core.Windows](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Core.Windows/) NuGet package in your ASP.NET Core application.  

N> If you want to migrate without any code changes from [Syncfusion.Pdf.AspNet](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet) NuGet in application targeting .NET Framework, you can consider using anyone of the following packages: 
N> * [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms) 
N> * [Syncfusion.Pdf.Wpf](https://www.nuget.org/packages/Syncfusion.Pdf.Wpf)
N> * [Syncfusion.Pdf.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc4) 
N> * [Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5)
N> * But this is not a recommended approach.  


## Migrate System.Drawing.Common to SkiaSharp package 

Starting from our volume 2, 2023 release, we have removed the System.Drawing.Common package as a dependency from our Syncfusion.Pdf.Imaging.Net.Core package. In its place, we have introduced SkiaSharp as the replacement library. This migration brings some API breaking changes that need to be considered: 

<table>
<tr>
<thead>
<th>API Name</th>
<th>Class</th>
<th>Return Type</th>
<th>Alternative API/Return Type</th>

</thead>
</tr>
<tr>
<td>
ToImage()
</td>
<td> 
Pdf417Barcode
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(System.drawing.SizeF size) 
</td>
<td> 
Pdf417Barcode
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(System.drawing.SizeF size) 
</td>
<td> 
PdfDataMatrixBarcode
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage() 
</td>
<td> 
PdfEan13Barcode 
</td>
<td>
Image
</td>
<td> 
Stream  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(System.drawing.SizeF size) 
</td>
<td> 
PdfEan13Barcode 
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(System.drawing.SizeF size) 
</td>
<td> 
PdfEan8Barcode 
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage() 
</td>
<td> 
PdfEan8Barcode 
</td>
<td>
Image
</td>
<td> 
Stream 

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(System.drawing.SizeF size) 
</td>
<td> 
PdfQRBarcode 
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(this PdfBidimensionalBarcode barcode) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
Stream

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(this PdfBidimensionalBarcode barcode, System.drawing.SizeF size) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
ToImage(this PdfBidimensionalBarcode barcode, Syncfusion.drawing.SizeF size) 

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(this PdfUnidimensionalBarcode barcode) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
Stream

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(this PdfUnidimensionalBarcode barcode, System.drawing.SizeF size) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
ToImage(this PdfUnidimensionalBarcode barcode, Syncfusion.drawing.SizeF size) 

Return Type: Stream 
</td>
</tr>

<tr>
<td>
Image
</td>
<td> 
PdfImageInfo
</td>
<td>
Image
</td>
<td> 
ImageStream 

Return Type: Stream 
</td>
</tr>

<tr>
<td>
PdfTiffImage(Image image) 
</td>
<td> 
PdfTiffImage
</td>
<td>
Image
</td>
<td> 
PdfTiffImage(Stream image) 

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ExtractImages(this PdfPageBase page) 
</td>
<td> 
PdfImageExtractor
</td>
<td>
Image[] 
</td>
<td> 
Stream[] 

Return Type: Stream[]
</td>
</tr>

<tr>
<td>
ToImage() 
</td>
<td> 
PdfUnidimensionalBarcode
</td>
<td>
Image
</td>
<td> 
Stream 

Return Type: Stream 
</td>
</tr>

<tr>
<td>
ToImage(System.drawing.SizeF size) 
</td>
<td> 
PdfUnidimensionalBarcode
</td>
<td>
Image
</td>
<td> 
ToImage(Syncfusion.drawing.SizeF size)  

Return Type: Stream 
</td>
</tr>

<tr>
<td>
RenderToImage(this PdfBidimensionalBarcode barcode) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
ToImage(this PdfBidimensionalBarcode barcode)  
</td>
</tr>

<tr>
<td>
RenderToImage(this PdfBidimensionalBarcode barcode, System.drawing.SizeF size) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
ToImage(this PdfBidimensionalBarcode barcode, Syncfusion.drawing.SizeF size)  
</td>
</tr>

<tr>
<td>
RenderToImage(this PdfUnidimensionalBarcode barcode) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
ToImage(this PdfUnidimensionalBarcode barcode) 
</td>
</tr>

<tr>
<td>
RenderToImage(this PdfUnidimensionalBarcode barcode, System.drawing.SizeF size) 
</td>
<td> 
PdfBarcodeExtension
</td>
<td>
Image
</td>
<td> 
ToImage(this PdfUnidimensionalBarcode barcode, Syncfusion.drawing.SizeF size) 
</td>
</tr>

<tr>
<td>
Bounds 
</td>
<td> 
PdfImageInfo 
</td>
<td>
System.drawing.RectangleF 
</td>
<td> 
Syncfusion.drawing.RectangleF 
</td>
</tr>
</table>