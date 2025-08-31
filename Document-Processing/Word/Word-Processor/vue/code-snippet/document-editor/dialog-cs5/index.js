
      import Vue from 'vue'
      import { DocumentEditorPlugin, Selection, Editor, HyperlinkDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

      Vue.use(DocumentEditorPlugin);

      
new Vue({
	el: '#app',
	template: `
      <div id="app" style="height:400px">
          <div>
                <button v-on:click='showHyperlinkDialog' >Open dialog</button>
          </div>
          <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' :enableHyperlinkDialog='true' :enableSfdtExport='true' height="370px" style="width: 100%;"></ejs-documenteditor>
      </div>
`,

          data: function() {
              return {
              };
          },
          provide: {
              //Inject require modules
              DocumentEditor : [Selection, Editor, HyperlinkDialog, SfdtExport]
          }
          methods: {
              showHyperlinkDialog: function() {
                  //Opens hyperlink dialog.
                  this.$refs.documenteditor.showDialog('Hyperlink');
              }
          }
      
});