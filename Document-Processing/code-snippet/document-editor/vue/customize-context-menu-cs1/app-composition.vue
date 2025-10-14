<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import {  DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

provide('DocumentEditorContainer', [Toolbar]);

const onCreated = function () {
  // creating Custom Options
  let menuItems = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-de-ctnr-find',
    },
  ];
  // adding Custom Options
  container.value.ej2Instances.documentEditor.contextMenu.addCustomMenu(menuItems, false);
  // custom Options Select Event
  container.value.ej2Instances.documentEditor.customContextMenuSelect =
    (args) => {
      // custom Options Functionality
      let id =
        container.value.ej2Instances.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          // To get the selected content as plain text
          let searchContent =
            container.value.ej2Instances.documentEditor.selection
              .text;
          if (
            !container.value.ej2Instances.documentEditor.selection
              .isEmpty &&
            /\S/.test(searchContent)
          ) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
  //  custom options hide/show functionality
  container.value.ej2Instances.documentEditor.customContextMenuBeforeOpen = (args) => {
    let search = document.getElementById(args.ids[0]);
    search.style.display = 'none';
    let searchContent = container.value.ej2Instances.documentEditor.selection.text;
    if (!container.value.ej2Instances.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
      search.style.display = 'block';
    }
  };
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
