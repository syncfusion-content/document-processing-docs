let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    toolbarSettings: { showTooltip : true, toolbarItems: ['OpenOption']}
});
pdfviewer.appendTo('#PdfViewer');


