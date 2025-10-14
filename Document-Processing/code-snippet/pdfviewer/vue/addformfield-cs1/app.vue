<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib",
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer]
  },

  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>
