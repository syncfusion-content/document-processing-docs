<template>
    <div id="app">
        <div>
            <button v-on:click='saveAsDocx'>Save</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true'
            :enableSelection='true' :enableEditor='true' :isReadOnly='false' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
    name: "App",
    components: {
        "ejs-documenteditor": DocumentEditorComponent,
    },
    data: function () {
        return {
        };
    },
    provide: {
        //Inject require modules.
        DocumentEditor: [SfdtExport, WordExport, Selection, Editor]
    },
    methods: {
        saveAsDocx: function () {
            //Download the document in docx format.
            this.$refs.documenteditor.save('sample', 'Docx');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
