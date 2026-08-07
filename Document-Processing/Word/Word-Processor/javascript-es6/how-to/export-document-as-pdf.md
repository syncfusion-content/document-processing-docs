---
layout: post
title: Export Document as PDF in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn here all about exporting the document as PDF in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Export Document as PDF
documentation: ug
domainurl: ##DomainURL##
---

# Export Document as PDF in JavaScript (ES6) Document Editor control

In this article, we are going to see how to export the document in PDF format. You can export the document as PDF in the following ways:

## Export the document as PDF on the client side

Use the [`pdf export component`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export) at the application level to export the document as PDF using the [`exportAsImage`](https://ej2.syncfusion.com/documentation/api/document-editor/#exportasimage) API. Here, all pages will be converted to an image and inserted as PDF pages (works like printing as PDF).

N> 1. The Document Editor exports PDFs by converting pages into images on the client side, which may slightly increase file size compared to text-based PDFs.
N> 2. Text search is not supported in the exported PDF, as the content is stored as images.
N> 3. You can install the PDF export packages from this [`link`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export).

The following example code illustrates how to export the document as PDF on the client side.

 

```ts
import {
    DocumentEditorContainer,
    ImageFormat,
    Toolbar,
} from '@syncfusion/ej2-documenteditor';
import {
    PdfBitmap,
    PdfDocument,
    PdfPageOrientation,
    PdfPageSettings,
    PdfSection,
    SizeF,
} from '@syncfusion/ej2-pdf-export';

let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    height: '590px',
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl =
    'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');

document.getElementById('export').addEventListener('click', function () {
    let pdfdocument: PdfDocument = new PdfDocument();
    let count: number = container.documentEditor.pageCount;
    container.documentEditor.documentEditorSettings.printDevicePixelRatio = 2;
    let loadedPage = 0;
    for (let i = 1; i <= count; i++) {
        setTimeout(() => {
            let format: ImageFormat = 'image/jpeg' as ImageFormat;
            // Getting pages as image
            let image = container.documentEditor.exportAsImage(i, format);
            image.onload = function () {
                let imageHeight = parseInt(
                    image.style.height.toString().replace('px', '')
                );
                let imageWidth = parseInt(
                    image.style.width.toString().replace('px', '')
                );
                let section: PdfSection = pdfdocument.sections.add() as PdfSection;
                let settings: PdfPageSettings = new PdfPageSettings(0);
                if (imageWidth > imageHeight) {
                    settings.orientation = PdfPageOrientation.Landscape;
                }
                settings.size = new SizeF(imageWidth, imageHeight);
                (section as PdfSection).setPageSettings(settings);
                let page = section.pages.add();
                let graphics = page.graphics;
                let imageStr = image.src.replace('data:image/jpeg;base64,', '');
                let pdfImage = new PdfBitmap(imageStr);
                graphics.drawImage(pdfImage, 0, 0, imageWidth, imageHeight);
                loadedPage++;
                if (loadedPage === count) {
                    // Exporting the document as pdf
                    pdfdocument.save(
                        (container.documentEditor.documentName === ''
                            ? 'sample'
                            : container.documentEditor.documentName) + '.pdf'
                    );
                }
            };
        }, 500);
    }
});
```


## Export document as PDF on the server side using Syncfusion<sup style="font-size:70%">&reg;</sup> DocIO

With the help of [`Syncfusion DocIO`](https://help.syncfusion.com/file-formats/docio/word-to-pdf), you can export the document as PDF on the server side. Here, you can search the text.

The following way illustrates how to convert the document to PDF:

* Using the [`serialize`](https://ej2.syncfusion.com/documentation/api/document-editor/#serialize) API, convert the document to SFDT and send it to the server side.

The following example code illustrates how to convert the document to SFDT and pass it to the server side.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true,
    height: '590px',
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl =
    'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');

document.getElementById('export').addEventListener('click', function () {
    let http: XMLHttpRequest = new XMLHttpRequest();
    // Replace your running web service URL here
    http.open('POST', 'http://localhost:62869/api/documenteditor/ExportPdf');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    //Serialize document content as SFDT.
    let sfdt: any = { content: container.documentEditor.serialize() };
    //Send the sfdt content to server side.
    http.send(JSON.stringify(sfdt));
});
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* On the server side, using the Save API, you can convert the SFDT to a stream.
* Finally, convert the stream to PDF using the [`Syncfusion.DocIORenderer.Net.Core`](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) library.

The following example code illustrates how to process the SFDT on the server side.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("ExportPdf")]
public void ExportPdf([FromBody]SaveParameter data)
{
    // Converts the sfdt to stream
    Stream document = WordDocument.Save(data.content, FormatType.Docx);
    Syncfusion.DocIO.DLS.WordDocument doc = new Syncfusion.DocIO.DLS.WordDocument(document, Syncfusion.DocIO.FormatType.Docx);
    //Instantiation of DocIORenderer for Word to PDF conversion
    DocIORenderer render = new DocIORenderer();
    //Converts Word document into PDF document
    PdfDocument pdfDocument = render.ConvertToPDF(doc);
    // Saves the document to server machine file system, you can customize here to save into databases or file servers based on requirement.
    FileStream fileStream = new FileStream("sample.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite);
    //Saves the PDF file
    pdfDocument.Save(fileStream);
    pdfDocument.Close();
    fileStream.Close();
    document.Close();
}
```

Get the complete working sample [`here`](https://github.com/SyncfusionExamples/Export-document-as-PDF-in-Document-Editor/).