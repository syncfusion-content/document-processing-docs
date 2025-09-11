<template>
    <div id="app">
        <div>
            <button v-on:click='showBookmarkDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableEditorHistory='true' :enableBookmarkDialog='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, EditorHistory, BookmarkDialog } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, BookmarkDialog, EditorHistory, SfdtExport]);
const showBookmarkDialog = function () {
    //Open bookmark dialog.
    documenteditor.value.showDialog('Bookmark');
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
