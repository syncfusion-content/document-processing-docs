var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/26.2.8/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer'); 

pdfviewer.formFieldAdd = function (formfieldadded) {
    console.log('form field page number: ' + formfieldadded.pageIndex);
    console.log('form field event name: ' + formfieldadded.name);
    console.log('form field data: ', formfieldadded.field);
}