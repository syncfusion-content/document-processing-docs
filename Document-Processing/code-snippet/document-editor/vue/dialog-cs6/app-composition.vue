<template>
    <div id="app" style="height:400px">
        <div>
            <button v-on:click='showPageSetupDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableSfdtExport='true' :enablePageSetupDialog='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, PageSetupDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, PageSetupDialog, SfdtExport]);

const showPageSetupDialog = function () {
    //Open page setup dialog.
    documenteditor.value.showDialog('PageSetup');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
