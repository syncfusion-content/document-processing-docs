---
layout: post
title: Load office files in PDF Viewer
description: Learn about how to load office files in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to load the Office products
documentation: ug
domainurl: ##DomainURL##
---

# Load Microsoft Office files

The PDF Viewer can display Microsoft Office documents (Word, Excel, PowerPoint) and common image formats by converting them to PDF on a server and returning the resulting PDF as a Base64 string or a hosted PDF URL. This approach lets the viewer render Office files without requiring client-side Office runtimes.

The following steps demonstrate a server-side conversion workflow and how to send the converted PDF to the client for display.

**Step 1:** Create a basic Angular PDF Viewer sample by following the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide.

**Step 2:** Add the following code to the controller.cs file in the web service project to convert Office files into a PDF and return the PDF as a Base64 string. In this example the `GetImageStream()` method converts a Word document into PDF and returns the PDF as Base64; the same pattern applies to PowerPoint, Excel, and image inputs.

```c#
//Post action for loading the Office products.
public IActionResult GetImageStream([FromBody] Dictionary<string, string> jsonObject)
{
    if (jsonObject.ContainsKey("data"))
    {
        string base64 = jsonObject["data"];
        //string fileName = args.FileData[0].Name;
        string type = jsonObject["type"];
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
                    //Initialization of the DocIORenderer for Word to PDF conversion.
                    DocIORenderer render = new DocIORenderer();
                    //Convert a Word document into a PDF document.
                    pdfDocument = render.ConvertToPDF(doc);
                    doc.Close();
                    break;
                case "pptx":
                case "pptm":
                case "potx":
                case "potm":
                    //Load or open a PowerPoint Presentation.
                    IPresentation pptxDoc = Presentation.Open(stream);
                    pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
                    pptxDoc.Close();
                    break;
                case "xlsx":
                case "xls":
                    ExcelEngine excelEngine = new ExcelEngine();
                    //Load or open an existing workbook through the Open method of IWorkbooks.
                    IWorkbook workbook = excelEngine.Excel.Workbooks.Open(stream);
                    //Initialize XlsIO renderer.
                    XlsIORenderer renderer = new XlsIORenderer();
                    //Convert an Excel document into a PDF document.
                    pdfDocument = renderer.ConvertToPDF(workbook);
                    workbook.Close();
                    break;
                case "jpeg":
                case "jpg":
                case "png":
                case "bmp":
                    //Add a page to the document.
                    PdfPage page = pdfDocument.Pages.Add();
                    //Create PDF graphics for the page.
                    PdfGraphics graphics = page.Graphics;
                    PdfBitmap image = new PdfBitmap(stream);
                    //Draw the image.
                    graphics.DrawImage(image, 0, 0);
                    break;
            }
        }
        pdfDocument.Save(outputStream);
        outputStream.Position = 0;
        byte[] byteArray= outputStream.ToArray();
        pdfDocument.Close();
        outputStream.Close();
        string base64String = Convert.ToBase64String(byteArray);
        return Content("data:application/pdf;base64," + base64String);
    }
    return Content("data:application/pdf;base64," + "");
}

```

**Step 3:** In the following code, an XMLHttpRequest sends the file data to the conversion endpoint and receives a Base64-encoded PDF. The response is set as the viewer's `documentPath` so the PDF renders in the viewer.

```html

function readURL(li, args) {

    var file = args.rawFile;
    var reader = new FileReader();
    var type = args.type;
    reader.addEventListener('load', function () {
        let post = JSON.stringify({
        'data': reader.result,
        'type': type
        })
        const url = "https://localhost:44327/pdfviewer/GetImageStream"
        let xhr = new XMLHttpRequest()
        xhr.open('Post', url, true)
        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
        xhr.send(post);
        xhr.onload = function (args) {
        viewer = document.getElementById('pdfViewer').ej2_instances[0];
        viewer.documentPath = this.responseText;
        }
    },
    false
    );
    if (file) {
    reader.readAsDataURL(file);
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Common/Load%20PDF%2C%20Excel%2C%20PPT%20file%20types).