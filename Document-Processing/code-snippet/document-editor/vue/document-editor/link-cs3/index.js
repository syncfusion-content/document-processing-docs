
    import Vue from 'vue'
    import { DocumentEditorPlugin, Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport, RequestNavigateEventArgs } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);

    
new Vue({
	el: '#app',
	template: `
        <div id="app" style="height:330px">
            <div>
                  <button v-on:click='showHyperlinkDialog' >Open dialog</button>
            </div>
            <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true' :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableSfdtExport='true' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

        data: function() {
            return {
            };
        },
        provide: {
            DocumentEditor : [Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport]
        }
        methods: {
            showHyperlinkDialog: function() {
                this.$refs.documenteditor.showDialog('Hyperlink');
            }
        }
    
});