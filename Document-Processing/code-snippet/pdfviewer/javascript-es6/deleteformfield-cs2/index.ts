

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } } as TextFieldSettings);
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Textfield", bounds: { X: 300, Y: 229, Width: 150, Height: 24 } } as TextFieldSettings);
pdfviewer.formDesignerModule.deleteFormField(pdfviewer.formFieldCollections[0]);
}


