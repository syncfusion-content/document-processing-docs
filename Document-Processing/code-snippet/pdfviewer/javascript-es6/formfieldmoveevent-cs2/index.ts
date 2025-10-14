import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, FormFieldMoveArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer({ 
documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.formFieldMove = function (formFieldMouseMove: FormFieldMoveArgs) {
    console.log('form field page number: ', formFieldMouseMove.pageIndex);
    console.log('form field event name: ' + formFieldMouseMove.name);
    console.log('form field data: ', formFieldMouseMove.field);
    console.log('mouse current position '+ formFieldMouseMove.currentPosition);
    console.log('mouse current position '+ formFieldMouseMove.previousPosition);
}