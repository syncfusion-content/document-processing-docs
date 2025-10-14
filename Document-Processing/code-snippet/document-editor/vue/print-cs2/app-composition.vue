<template>
    <div id="app">
        <div>
            <button v-on:click='print'>Print</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :isReadOnly='false' :enablePrint='true' :enableEditor='true'
            :enableSelection='true' :enableEditorHistory='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Print, Editor, Selection, EditorHistory } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Print, Editor, Selection, EditorHistory]);

const print = function () {
    //Print the content of the Document Editor.
    documenteditor.value.print();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
