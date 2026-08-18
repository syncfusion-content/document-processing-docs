import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib',
    toolbarSettings: { showTooltip : true, toolbarItems: ['OpenOption']}
});
pdfviewer.appendTo('#PdfViewer');



