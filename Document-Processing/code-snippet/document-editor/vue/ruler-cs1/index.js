
import Vue from 'vue';
import { DocumentEditorPlugin, DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

Vue.use(DocumentEditorPlugin);

new Vue({
el: '#app',
template: `
    <div id="app">
      <button id='container_ruler_button' v-on:click="onClick">Show/Hide Ruler</button>
      <ejs-documenteditor ref="documenteditor" :height="height" :serviceUrl='serviceUrl'></ejs-documenteditor>
    </div>
`,
  data(){
    return {
        serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
        height: '370px',
        isReadOnly: false,
        documentEditorSettings: {showRuler: true}
    }
  },
  provide: {
    DocumentEditor: []
  },
  methods: {
    onClick:function() {
      this.$refs.container.ej2Instances.documentEditorSettings.showRuler = !this.$refs.container.ej2Instances.documentEditorSettings.showRuler
    }
  },
  mounted: function() {
    this.$refs.container.ej2Instances.enableAllModules();
  }

});