<template>
    <div id="app">
        <div>
            <button v-on:click='saveAsTextDocument'>Save</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableTextExport='true'
            :enableSelection='true' :enableEditor='true' :isReadOnly='false' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport, TextExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
    name: "App",
    components: {
        "ejs-documenteditor": DocumentEditorComponent
    },
    data: function () {
        return {
        };
    },
    provide: {
        //Inject require modules.
        DocumentEditor: [SfdtExport, TextExport, Selection, Editor]
    },
    methods: {
        saveAsTextDocument: function () {
            //Download the current document as txt file.
            this.$refs.documenteditor.save('sample', 'Txt');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
