
    import Vue from 'vue';
    import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorContainerPlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
      <button id='container_ruler_button' v-on:click="onClick">Show/Hide Ruler</button>
      <ejs-documenteditorcontainer ref="container" :serviceUrl='serviceUrl' :height='height' :enableToolbar='true'"> </ejs-documenteditorcontainer>
    </div>
`,

  data(){
    return {
        serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
        height: '590px',
        documentEditorSettings: {showRuler: true}
    }
  },
  provide: {
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onClick:function() {
      this.$refs.container.ej2Instances.documentEditorSettings.showRuler = !this.$refs.container.ej2Instances.documentEditorSettings.showRuler
    }
  },
});