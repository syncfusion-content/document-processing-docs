<template>
  <div id="app">
    <button id='container_ruler_button' v-on:click="onClick">Show/Hide Ruler</button>
    <ejs-documenteditorcontainer ref="container" :serviceUrl='serviceUrl' :height='height' :enableToolbar='true' :document-editor-settings="documentEditorSettings">
    </ejs-documenteditorcontainer>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
const height = '590px';
const documentEditorSettings = { showRuler: true };

provide('DocumentEditorContainer', [Toolbar]);

const onClick = function () {
  container.value.ej2Instances.documentEditorSettings.showRuler = !container.value.ej2Instances.documentEditorSettings.showRuler;
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
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
