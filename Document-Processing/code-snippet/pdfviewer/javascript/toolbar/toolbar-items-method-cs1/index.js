let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbar.showToolbarItem(new Array("OpenOption"),false);

