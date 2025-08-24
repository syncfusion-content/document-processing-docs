
    import Vue from 'vue'
    import { DocumentEditorPlugin, Print, Editor, Selection, EditorHistory } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);

    
new Vue({
	el: '#app',
	template: `
        <div id="app">
            <div>
                  <button v-on:click='print' >Print</button>
            </div>
            <ejs-documenteditor ref="documenteditor" :isReadOnly='false' :enablePrint='true'  :enableEditor='true' :enableSelection='true' :enableEditorHistory='true' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

        data: function() {
            return {
            };
        },
        provide: {
            //Inject require modules.
            DocumentEditor : [Print, Editor, Selection, EditorHistory]
        }
        methods: {
            print: function() {
                //Print the content of the Document Editor.
                this.$refs.documenteditor.print();
            }
        }
    
});