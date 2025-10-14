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
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, TextExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [SfdtExport, TextExport, Selection, Editor]);

const saveAsTextDocument = function () {
    //Download the current document as txt file.
    documenteditor.value.save('sample', 'Txt');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
