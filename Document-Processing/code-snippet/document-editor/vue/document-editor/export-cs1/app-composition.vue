<template>
    <div id="app">
        <div>
            <button v-on:click='saveAsSfdt'>Save</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableSelection='true' :enableEditor='true'
            :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [SfdtExport, Selection, Editor]);
const saveAsSfdt = function () {
    //Download the current document in sfdt format.
    documenteditor.save('sample', 'Sfdt');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
