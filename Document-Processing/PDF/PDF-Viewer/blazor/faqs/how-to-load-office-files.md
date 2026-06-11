---
layout: post
title: Load Office files in Blazor SfPdfViewer | Syncfusion
description: Learn how to load Microsoft Word, Excel, PowerPoint, and image files by converting into PDF and load into Syncfusion Blazor SfPdfViewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Load Microsoft Office files in Blazor SfPdfViewer Component

The SfPdfViewer component displays PDF documents. To load Microsoft Office or image files (Word, Excel, PowerPoint, and common image formats), upload the file, convert it to a PDF, and then load the resulting PDF in the viewer using the uploader success event.

In the following example, a Word document is converted to a PDF and then loaded into the SfPdfViewer as a Base64 data URL. The same approach is applied for PowerPoint, Excel, and image files.

## Prerequisites:
- Include the required Syncfusion file-format libraries for conversion: DocIO and DocIORenderer, Presentation and PresentationRenderer, XlsIO and XlsIORenderer, and Syncfusion.Pdf.

```cshtml

@page "/"
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Buttons;
@using Syncfusion.Pdf;
@using Syncfusion.Pdf.Graphics;
@using Syncfusion.Pdf.Interactive;
@using Syncfusion.Pdf.Parsing;
@using Syncfusion.Pdf.Security;
@using Syncfusion.Blazor.Inputs;
@using Syncfusion.DocIO;
@using WFormatType = Syncfusion.DocIO.FormatType;
@using Syncfusion.Presentation;
@using Syncfusion.PresentationRenderer;
@using Syncfusion.XlsIO;
@using Syncfusion.XlsIORenderer;
@using Syncfusion.DocIORenderer;
@using System.IO;

<SfUploader AllowedExtensions=".doc, .docx, .rtf, .docm, .dotm, .dotx, .dot, .xls, .xlsx, .pptx, .pptm, .potx, .potm .jpeg, .png, .bmp">
    <UploaderEvents OnUploadStart="OnSuccess"></UploaderEvents>
    <UploaderAsyncSettings SaveUrl="https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save"
        RemoveUrl="https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove"></UploaderAsyncSettings>
</SfUploader>
<SfPdfViewer2 @ref="viewerInstance" 
              Height="100%" 
              Width="100%" 
              ToolbarSettings="@ToolbarSettings">
</SfPdfViewer2>

@code {
    SfPdfViewer2 viewerInstance;

    public PdfViewerToolbarSettings ToolbarSettings = new PdfViewerToolbarSettings()
        {
            ToolbarItems = new List<ToolbarItem>()
            {
                ToolbarItem.PageNavigationTool,
                ToolbarItem.MagnificationTool,
                ToolbarItem.CommentTool,
                ToolbarItem.SelectionTool,
                ToolbarItem.PanTool,
                ToolbarItem.UndoRedoTool,
                ToolbarItem.CommentTool,
                ToolbarItem.AnnotationEditTool,
                ToolbarItem.SearchOption,
                ToolbarItem.PrintOption,
                ToolbarItem.DownloadOption,
                ToolbarItem.SubmitForm,
            }
        };

    private void OnSuccess(UploadingEventArgs action)
    {
        string base64 = action.FileData.RawFile.ToString();
        //string fileName = args.FileData[0].Name;
        string type = action.FileData.Type.ToLower();
        string data = base64.Split(',')[1];
        byte[] bytes = Convert.FromBase64String(data);
        var outputStream = new MemoryStream();
        Syncfusion.Pdf.PdfDocument pdfDocument = new Syncfusion.Pdf.PdfDocument();
        using (Stream stream = new MemoryStream(bytes))
        {
            switch (type)
            {
                case "docx":
                case "dot":
                case "doc":
                case "dotx":
                case "docm":
                case "dotm":
                case "rtf":
                    Syncfusion.DocIO.DLS.WordDocument doc = new Syncfusion.DocIO.DLS.WordDocument(stream, GetWFormatType(type));
                    //Initialization of DocIORenderer for Word to PDF conversion
                    DocIORenderer render = new DocIORenderer();
                    //Converts Word document into PDF document
                    pdfDocument = render.ConvertToPDF(doc);
                    doc.Close();
                    break;
                case "pptx":
                case "pptm":
                case "potx":
                case "potm":
                    //Loads or open an PowerPoint Presentation
                    IPresentation pptxDoc = Presentation.Open(stream);
                    pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
                    pptxDoc.Close();
                    break;
                case "xlsx":
                case "xls":
                    ExcelEngine excelEngine = new ExcelEngine();
                    //Loads or open an existing workbook through Open method of IWorkbooks
                    IWorkbook workbook = excelEngine.Excel.Workbooks.Open(stream);
                    //Initialize XlsIO renderer.
                    XlsIORenderer renderer = new XlsIORenderer();
                    //Convert Excel document into PDF document
                    pdfDocument = renderer.ConvertToPDF(workbook);
                    workbook.Close();
                    break;
                case "jpeg":
                case "jpg":
                case "png":
                case "bmp":
                    //Add a page to the document
                    PdfPage page = pdfDocument.Pages.Add();
                    //Create PDF graphics for the page
                    PdfGraphics graphics = page.Graphics;
                    PdfBitmap image = new PdfBitmap(stream);
                    //Draw the image
                    graphics.DrawImage(image, 0, 0);
                    break;
            }
            pdfDocument.Save(outputStream);
            outputStream.Position = 0;
            loadPDFdocument(outputStream.ToArray());
            pdfDocument.Close();
            outputStream.Close();
        }
    }

    public async void loadPDFdocument(byte[] bytes)
    {
        // Convert a PDF document into a base64 string.
        string base64String = Convert.ToBase64String(bytes);
        // Load the base64 string in the SfPdfViewer.
        await viewerInstance.LoadAsync("data:application/pdf;base64," + base64String, null);
    }

    public static WFormatType GetWFormatType(string format)
    {
        if (string.IsNullOrEmpty(format))
            throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
        switch (format.ToLower())
        {
            case "dotx":
                return WFormatType.Dotx;
            case "docx":
                return WFormatType.Docx;
            case "docm":
                return WFormatType.Docm;
            case "dotm":
                return WFormatType.Dotm;
            case "dot":
                return WFormatType.Dot;
            case "doc":
                return WFormatType.Doc;
            case "rtf":
                return WFormatType.Rtf;
            default:
                throw new NotSupportedException("EJ2 DocumentEditor does not support this file format.");
        }
    }

}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Load%20PDF%2C%20Excel%2C%20PPT%20file%20types).

## See also

* [How to load PDF documents dynamically in Blazor SfPdfViewer Component](./how-to-load-pdf-document-dynamically)

* [How to unload the PDF document from Viewer](./how-to-unload-the-pdf-document-from-viewer)