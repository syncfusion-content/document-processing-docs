
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :serviceUrl="serviceUrl" 
      :documentPath="documentPath"> 
    </ejs-pdfviewer>
  </div>
`,

  name: 'app',
  data () {
    return {
      serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  }

});