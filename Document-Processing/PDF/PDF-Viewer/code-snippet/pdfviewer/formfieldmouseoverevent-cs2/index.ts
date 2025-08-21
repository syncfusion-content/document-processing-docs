import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, FormFieldMouseoverArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer({ 
documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.formFieldMouseover = function (formFieldMouseover: FormFieldMouseoverArgs) {
    console.log('form field page number: ', formFieldMouseover.pageIndex);
    console.log('form field event name: ' + formFieldMouseover.name);
    console.log('form field data: ', formFieldMouseover.field);
    console.log(' mouse over x position '+ formFieldMouseover.X + ' mouse over y position '+ formFieldMouseover.Y );
    console.log(' mouse over X position respect to the page '+ formFieldMouseover.pageX + ' mouse over Y position respect to the page '+ formFieldMouseover.pageY);
}