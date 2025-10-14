<template>
    <div id="app">
      <div>
        <button v-on:click="saveAsSfdt">Save</button>
      </div>
      <ejs-documenteditorcontainer
        ref="documentEditorContainer"
        height="590px"
        :enableSfdtExport="true"
        :enableSelection="true"
        :enableEditor="true"
        :isReadOnly="false"
        style="width: 100%;"
      ></ejs-documenteditorcontainer>
    </div>
  </template>
  
  <script>
  import { DocumentEditorContainerComponent, Toolbar, SfdtExport, Selection, Editor } from "@syncfusion/ej2-vue-documenteditor";

  
  export default {
    name: "App",
    components: {
      "ejs-documenteditorcontainer": DocumentEditorContainerComponent
    },
    data() {
      return {
        serviceUrl: "https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      };
    },
    provide: {
      // Inject required modules.
      DocumentEditorContainer: [SfdtExport, Selection, Editor, Toolbar]
    },
    methods: {
      saveAsSfdt() {
        // Download the current document in SFDT format.
        this.$refs.documentEditorContainer.ej2Instances.documentEditor.save("sample", "Sfdt");
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
  