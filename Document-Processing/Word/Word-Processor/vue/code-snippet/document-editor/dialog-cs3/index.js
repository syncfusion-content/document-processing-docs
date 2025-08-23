
      import Vue from 'vue'
      import { DocumentEditorPlugin, Selection, Editor,  TableDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

      Vue.use(DocumentEditorPlugin);

      
new Vue({
	el: '#app',
	template: `
      <div id="app" style="height:400px">
          <div>
              <button v-on:click='showTableDialog' >Open dialog</button>
          </div>
          <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' :enableTableDialog='true' :enableSfdtExport='true' style="width: 100%;" height="370px" ></ejs-documenteditor>
      </div>
`,

          data: function() {
              return {
              };
          },
          provide: {
              //Inject require modules
              DocumentEditor : [Selection, Editor, TableDialog, SfdtExport]
          }
          methods: {
              showTableDialog: function() {
                  //Open the table dialog.
                  this.$refs.documenteditor.showDialog('Table');
              }
          }
      
});