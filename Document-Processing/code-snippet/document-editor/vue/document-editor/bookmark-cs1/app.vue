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
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport, EditorHistory, BookmarkDialog } from '@syncfusion/ej2-vue-documenteditor';

export default {
    name: "App",
    components: {
        "ejs-documenteditor": DocumentEditorComponent
    },
    data: function () {
        return {
        };
    },
    provide: {
        //Inject require modules.
        DocumentEditor: [Selection, Editor, BookmarkDialog, EditorHistory, SfdtExport]
    },
    methods: {
        showBookmarkDialog: function () {
            //Open bookmark dialog.
            this.$refs.documenteditor.showDialog('Bookmark');
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
