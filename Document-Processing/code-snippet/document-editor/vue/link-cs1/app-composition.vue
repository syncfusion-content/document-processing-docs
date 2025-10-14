<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly='false' :enableEditor='true'
            v-bind:requestNavigate="onRequestNavigate" height="370px" style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor } from '@syncfusion/ej2-vue-documenteditor';

provide('DocumentEditor ', [Selection, Editor]);

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
