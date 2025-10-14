<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

provide('DocumentEditorContainer', [Toolbar]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
