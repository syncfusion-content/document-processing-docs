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
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [SfdtExport, WordExport, Selection, Editor]);

const saveAsDocx = function () {
    //Download the document in docx format.
    documenteditor.value.save('sample', 'Docx');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
