<template>
    <div id="app" style="height:400px">
        <div>
            <button v-on:click='showTableDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableTableDialog='true' :enableSfdtExport='true' style="width: 100%;" height="370px"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as Ejs, Selection, Editor, TableDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, TableDialog, SfdtExport]);

const showTableDialog = function () {
    //Open the table dialog.
    documenteditor.value.showDialog('Table');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
