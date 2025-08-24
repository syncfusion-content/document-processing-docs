<template>
    <div id="app" style="height:400px">
        <div>
            <button v-on:click='showBookmarkDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableBookmarkDialog='true' :enableSfdtExport='true' height="370px"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, BookmarkDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor', [Selection, Editor, BookmarkDialog, SfdtExport]);
const showBookmarkDialog = function () {
    //Open the bookmark dialog.
    documenteditor.value.showDialog('Bookmark');
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
