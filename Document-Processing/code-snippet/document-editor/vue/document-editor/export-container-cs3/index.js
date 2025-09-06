import Vue from 'vue'
import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar,Editor, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

Vue.use(DocumentEditorContainerPlugin);
        
new Vue({
	el: '#app',
	template: `
        <div id="app">
            <div>
                 <button v-on:click='saveAsSfdt' >Save</button>
            </div>
            <ejs-documenteditorcontainer ref="documentEditorContainer" :enableSfdtExport='true' :enableSelection='true' :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditorcontainer>
        </div>
    `,

    data(){
        return { serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' }
    },
    provide: {
        //Inject require modules.
        DocumentEditor : [SfdtExport, Selection, Editor , Toolbar]
    },
    methods: {
        saveAsSfdt: function() {
            //Download the current document in Txt format.
            this.$refs.documentEditorContainer.ej2Instances.documentEditor.save('sample', 'Txt');
        }
    }
        
});