
      import Vue from 'vue'
      import { DocumentEditorPlugin, Selection, Editor,  ParagraphDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

      Vue.use(DocumentEditorPlugin);

      
new Vue({
	el: '#app',
	template: `
      <div id="app">
          <div>
              <button v-on:click='showParagraphDialog' >Open dialog</button>
          </div>
           <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' :enableParagraphDialog='true' :enableSfdtExport='true' height="370px" style="width: 100%;"></ejs-documenteditor>
      </div>
`,

          data: function() {
              return {
              };
          },
          provide: {
              //Inject require modules.
              DocumentEditor : [Selection, Editor, ParagraphDialog, SfdtExport]
          }
          methods: {
              showParagraphDialog: function() {
                  //Open the paragraph dialog.
                  this.$refs.documenteditor.showDialog('Paragraph');
              }
          }
      
});