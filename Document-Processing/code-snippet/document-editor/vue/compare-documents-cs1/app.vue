<template>
  <div id="app">
    <button id='compare' v-on:click="onCompare">Compare Documents</button>
    <ejs-documenteditor ref='documenteditor' :serviceUrl='serviceUrl' :isReadOnly='false' :enableTrackChanges='true'
      height="590px"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';
import { originalDocument, revisedDocument } from './data';

export default {
  name: "App",
  components: {
    "ejs-documenteditor": DocumentEditorComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    };
  },
  mounted: function () {
    // Load the original document by default.
    this.$refs.documenteditor.open(originalDocument);
  },
  methods: {
    onCompare: function () {
      let http = new XMLHttpRequest();
      http.open('POST', 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/CompareDocuments', true);
      http.responseType = 'text';
      //Form data with the original and revised SFDT documents.
      let formData = new FormData();
      formData.append('originalFile', new File([originalDocument], 'original.sfdt', { type: 'application/json' }));
      formData.append('revisedFile', new File([revisedDocument], 'revised.sfdt', { type: 'application/json' }));
      formData.append('author', 'Author');
      formData.append('dateTime', new Date().toISOString());
      http.onreadystatechange = () => {
        if (http.readyState === 4) {
          if (http.status === 200 || http.status === 304) {
            // Open the resultant SFDT content (with tracked changes) in the Document Editor.
            this.$refs.documenteditor.open(http.responseText);
          } else {
            alert('Failed to compare the documents. Please try again.');
          }
        }
      };
      http.send(formData);
    }
  }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
