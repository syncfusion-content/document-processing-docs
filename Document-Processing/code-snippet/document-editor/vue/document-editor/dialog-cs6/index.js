
      import Vue from 'vue'
      import { DocumentEditorPlugin, Selection, Editor, PageSetupDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

      Vue.use(DocumentEditorPlugin);

      
new Vue({
	el: '#app',
	template: `
        <div id="app" style="height:400px">
            <div>
                 <button v-on:click='showPageSetupDialog' >Open dialog</button>
            </div>
            <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' :enableSfdtExport='true' :enablePageSetupDialog='true' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

          data: function() {
              return {
              };
          },
          provide: {
              //Inject require modules.
              DocumentEditor : [Selection, Editor, PageSetupDialog, SfdtExport]
          }
          methods: {
              showPageSetupDialog: function() {
                  //Open page setup dialog.
                  this.$refs.documenteditor.showDialog('PageSetup');
              }
          }
      
});