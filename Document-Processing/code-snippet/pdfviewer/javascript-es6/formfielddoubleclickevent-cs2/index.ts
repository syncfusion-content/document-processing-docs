import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, FormFieldDoubleClickArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer({ 
documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.formFieldDoubleClick = function (formfielddoubleclick: FormFieldDoubleClickArgs) {
    console.log('Form field event name: ' + formfielddoubleclick.name);
    console.log('Is form field cancel: ' + formfielddoubleclick.cancel);
    console.log('Form field data: ',  formfielddoubleclick.field);
}