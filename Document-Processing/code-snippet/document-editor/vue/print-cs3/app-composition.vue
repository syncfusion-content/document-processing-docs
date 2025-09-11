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
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Print, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
const pagesetup_documenteditor = ref(null);
provide('DocumentEditor ', [Print, Editor, Selection, EditorHistory, SfdtExport]);

const print = function () {
    let sfdtData = documenteditor.value.serialize();
    pagesetup_documenteditor.value.open(sfdtData);
    //Set A5 paper size
    pagesetup_documenteditor.value.ej2Instances.selection.sectionFormat.pageWidth = 419.55;
    pagesetup_documenteditor.value.ej2Instances.selection.sectionFormat.pageHeight = 595.30;
    pagesetup_documenteditor.value.print();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
