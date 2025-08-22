var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/26.2.8/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer'); 

pdfviewer.formFieldResize = function (formFieldResize) {
    console.log('form field page number: ', formFieldResize.pageIndex);
    console.log('form field event name: ' + formFieldResize.name);
    console.log('form field data: ', formFieldResize.field);
    console.log('form field current position: ', formFieldResize.currentPosition);
    console.log('form field previous position: ', formFieldResize.previousPosition);
}