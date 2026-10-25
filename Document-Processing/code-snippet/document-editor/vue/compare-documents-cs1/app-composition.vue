<template>
  <div id="app">
    <button id="compare" v-on:click="onCompare">Compare Documents</button>
    <ejs-documenteditorcontainer
      id="editor"
      ref="editor"
      :serviceUrl="serviceUrl"
      height="590px"
      width="100%"
      :enableToolbar="false"
      :enableTrackChanges="true"
      :showPropertiesPane="false">
    </ejs-documenteditorcontainer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer } from '@syncfusion/ej2-vue-documenteditor';
import { originalDocument, revisedDocument } from './data';

const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
const editor = ref(null);

function onCompare() {
  let http = new XMLHttpRequest();
  http.open('POST', serviceUrl+'CompareDocuments', true);
  http.responseType = 'text';

  let formData = new FormData();
  formData.append('originalFile', new File([originalDocument], 'original.sfdt', { type: 'application/json' }));
  formData.append('revisedFile', new File([revisedDocument], 'revised.sfdt', { type: 'application/json' }));
  formData.append('author', 'Author');
  formData.append('dateTime', new Date().toISOString());

  http.onreadystatechange = () => {
    if (http.readyState === 4) {
      if (http.status === 200 || http.status === 304) {
        editor.value.ej2Instances.documentEditor.showTrackChanges = true;
        editor.value.ej2Instances.documentEditor.open(http.responseText);
      } else {
        alert('Failed to compare the documents. Please try again.');
      }
    }
  };

  http.send(formData);
}
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
@import '../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css';
</style>