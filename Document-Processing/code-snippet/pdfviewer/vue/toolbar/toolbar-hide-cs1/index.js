
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
         ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pdfviewer
          id="pdfViewer"
          :documentPath="documentPath"
          :enableToolbar="false"
          :resourceUrl="resourceUrl"> 
        </ejs-pdfviewer>
    </div>
`,

  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:"https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]}


});