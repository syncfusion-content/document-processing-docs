<template>
    <div style="height:330px">
        <ejs-documenteditor ref="documenteditor" :height="height" style="width: 100%;display:block" :isReadOnly='false'
            :enableSelection='true' :enableSfdtExport='true' :enableEditor='true'
            v-bind:keyDown='onKeyDown'></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport } from '@syncfusion/ej2-vue-documenteditor';

const height = '370px';

provide('DocumentEditor ', [SfdtExport, Selection, Editor]);

const onKeyDown = function (args) {
    let keyCode = args.event.which || args.event.keyCode;
    let isCtrlKey = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
    //67 is the character code for 'C'
    if (isCtrlKey && keyCode === 67) {
        //To prevent copy operation set isHandled to true
        args.isHandled = true;
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
