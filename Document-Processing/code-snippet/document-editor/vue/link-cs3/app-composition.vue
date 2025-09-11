<template>
    <div id="app" style="height:330px">
        <div>
            <button v-on:click='showHyperlinkDialog'>Open dialog</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableSfdtExport='true' height="370px" v-bind:requestNavigate="onRequestNavigate"
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor ', [Selection, Editor, EditorHistory, HyperlinkDialog, SfdtExport]);

const showHyperlinkDialog = function () {
    documenteditor.value.showDialog('Hyperlink');
}
const onRequestNavigate = function (args) {
    if (args.linkType !== 'Bookmark') {
        let link = args.navigationLink;
        if (args.localReference.length > 0) {
            link += '#' + args.localReference;
        }
        window.open(link);
        args.isHandled = true;
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
