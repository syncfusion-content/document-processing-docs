<template>
    <div id="app">
        <div>
            <button v-on:click='print'>Print</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :isReadOnly='false' :enablePrint='true' :enableEditor='true'
            :enableSelection='true' :enableEditorHistory='true' :enableSfdtExport='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>

            <ejs-documenteditor ref="pagesetup_documenteditor" :isReadOnly='false' :enablePrint='true'
            :enableEditor='true' :enableSelection='true' :enableEditorHistory='true' :enableSfdtExport='true'
            height="370px" style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Print, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

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
        DocumentEditor: [Print, Editor, Selection, EditorHistory, SfdtExport]
    },
    methods: {
        print: function () {
            let sfdtData = this.$refs.documenteditor.serialize();
            this.$refs.pagesetup_documenteditor.open(sfdtData);
            //Set A5 paper size
            this.$refs.pagesetup_documenteditor.ej2Instances.selection.sectionFormat.pageWidth = 419.55;
            this.$refs.pagesetup_documenteditor.ej2Instances.selection.sectionFormat.pageHeight = 595.30;
            this.$refs.pagesetup_documenteditor.print();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
