
      import Vue from 'vue'
      import { DocumentEditorPlugin, Selection, Editor,  FontDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

      Vue.use(DocumentEditorPlugin);

      
new Vue({
	el: '#app',
	template: `
        <div id="app">
            <div>
                  <button v-on:click='showFontDialog' >Open dialog</button>
            </div>
            <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' :enableFontDialog='true' :enableSfdtExport='true' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

          data: function() {
              return {
              };
          },
          provide: {
              //Inject require modules.
              DocumentEditor : [Selection, Editor, FontDialog, SfdtExport]
          }
          methods: {
              showFontDialog: function() {
                  //Open the font dialog.
                  this.$refs.documenteditor.showDialog('Font');
              }
          }
      
});