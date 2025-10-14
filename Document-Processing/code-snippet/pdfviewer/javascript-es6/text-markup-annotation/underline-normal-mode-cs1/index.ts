

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Underline');
});

document.getElementById('setNone').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('None');
});


