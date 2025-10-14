import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, FormFieldAddArgs, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer({ 
documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.formFieldAdd = function (formfieldadded: FormFieldAddArgs) {
    console.log('form field page number: ' + formfieldadded.pageIndex);
    console.log('form field event name: ' + formfieldadded.name);
    console.log('form field data: ', formfieldadded.field);
}