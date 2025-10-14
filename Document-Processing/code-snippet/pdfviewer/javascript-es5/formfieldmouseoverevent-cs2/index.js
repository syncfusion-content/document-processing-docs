var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/26.2.8/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer'); 

pdfviewer.formFieldMouseover = function (formFieldMouseover) {
    console.log('form field page number: ', formFieldMouseover.pageIndex);
    console.log('form field event name: ' + formFieldMouseover.name);
    console.log('form field data: ', formFieldMouseover.field);
    console.log(' mouse over x position '+ formFieldMouseover.X + ' mouse over y position '+ formFieldMouseover.Y );
    console.log(' mouse over X position respect to the page '+ formFieldMouseover.pageX + ' mouse over Y position respect to the page '+ formFieldMouseover.pageY);
}