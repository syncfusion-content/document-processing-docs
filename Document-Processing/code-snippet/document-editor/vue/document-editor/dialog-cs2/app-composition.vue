<template>
    <div id="app">
        <div>
            <button v-on:click='showParagraphDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableParagraphDialog='true' :enableSfdtExport='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, ParagraphDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, ParagraphDialog, SfdtExport]);

const showParagraphDialog = function () {
    //Open the paragraph dialog.
    documenteditor.value.showDialog('Paragraph');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
