<template>
    <div id="app" style="height:330px">
        <div>
            <button v-on:click='showHyperlinkDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableSfdtExport='true' height="370px" v-bind:requestNavigate="onRequestNavigate"
            style="width: 100%;"></ejs-documenteditor>
    </div>
  </template>
  <script>
  import { DocumentEditorComponent, Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';
  
  export default {
    name: "App",
    components: {
        "ejs-documenteditor": DocumentEditorComponent
    },
    data: function () {
        return {
        };
    },
    provide: {
        DocumentEditor: [Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport]
    },
    methods: {
        showHyperlinkDialog: function () {
          this.$refs.documenteditor.showDialog('Hyperlink');
        },
        onRequestNavigate: function (args) {
                if (args.linkType !== 'Bookmark') {
                    let link = args.navigationLink;
                    if (args.localReference.length > 0) {
                        link += '#' + args.localReference;
                    }
                    window.open(link);
                    args.isHandled = true;
                }
            }
    }
  }
  </script>
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
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
  