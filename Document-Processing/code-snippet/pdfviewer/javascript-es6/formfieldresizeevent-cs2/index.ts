import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, FormFieldResizeArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer({ 
documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.formFieldResize = function (formFieldResize: FormFieldResizeArgs) {
    console.log('form field page number: ', formFieldResize.pageIndex);
    console.log('form field event name: ' + formFieldResize.name);
    console.log('form field data: ', formFieldResize.field);
    console.log('form field current position: ', formFieldResize.currentPosition);
    console.log('form field previous position: ', formFieldResize.previousPosition);
}