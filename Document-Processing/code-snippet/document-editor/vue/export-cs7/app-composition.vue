<template>
    <div>
        <ejs-documenteditor ref="documenteditor" :height="height" style="width: 100%;display:block" :isReadOnly='false'
            :enableSelection='true' :enableSfdtExport='true' :enableWordExport=true :enableEditor='true'
            v-bind:keyDown='onKeyDown'></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, DocumentEditorKeyDownEventArgs, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
const height = '370px';

provide('DocumentEditor ', [SfdtExport, Selection, Editor, WordExport]);

const onKeyDown = function (args) {
    let keyCode = args.event.which || args.event.keyCode;
    let isCtrlKey = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
    let isAltKey = args.event.altKey ? args.event.altKey : ((keyCode === 18) ? true : false);

    // 83 is the character code for 'S'
    if (isCtrlKey && !isAltKey && keyCode === 83) {
        //To prevent default save operation, set the isHandled property to true
        args.isHandled = true;
        documenteditor.value.save('sample', 'Docx');
        args.event.preventDefault();
    } else if (isCtrlKey && isAltKey && keyCode === 83) {
        documenteditor.value.save('sample', 'Sfdt');
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
