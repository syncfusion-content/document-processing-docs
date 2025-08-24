
        import Vue from 'vue'
        import { DocumentEditorPlugin, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

        Vue.use(DocumentEditorPlugin);

        
new Vue({
	el: '#app',
	template: `
        <div id="app">
            <div>
                  <button v-on:click='saveAsDocx' >Save</button>
            </div>
            <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true' :enableSelection='true' :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

            data: function() {
                return {
                };
            },
            provide: {
                //Inject require modules.
                DocumentEditor : [SfdtExport, WordExport, Selection, Editor]
            }
            methods: {
                saveAsDocx: function() {
                    //Download the document in docx format.
                    this.$refs.documenteditor.save('sample', 'Docx');
                }
            }
        
});