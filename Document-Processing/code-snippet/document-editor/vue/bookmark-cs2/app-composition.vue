<template>
    <div id="app">
        <input id="insertImageButton" ref="insertImageButton" style="position:fixed; left:-100em" type="file"
            v-on:change="onInsertImage" accept=".jpeg,.jpg,.png,.gif,.bmp">
        <div>
            <button v-on:click='insertImageButtonClick'>Insert Image</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true'
            :enableSelection='true' :enableEditor='true' :isReadOnly='false' height="370px"
            style="width: 100%;display:block"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
const insertImageButton = ref(null);

provide('DocumentEditor', [SfdtExport, WordExport, Selection, Editor]);

const onInsertImage = function (args) {
    if (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge') || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET')) {
        if (args.target.files[0]) {
            let path = args.target.files[0];
            let reader = new FileReader();
            reader.onload = function (frEvent) {
                let base64String = frEvent.target.result;
                let image = document.createElement('img');
                image.addEventListener('load', function () {
                    //Insert image in Document Editor.
                    documenteditor.value.ej2Instances.editor.insertImage(base64String, width, height);
                })
                image.src = base64String;
            };
            reader.readAsDataURL(path);
        }
        //Safari does not Support FileReader Class
    } else {
        let image = document.createElement('img');
        image.addEventListener('load', function () {
            //Insert image in Document Editor.
            documenteditor.value.ej2Instances.editor.insertImage(args.target.value);
        })
        image.src = args.target.value;
    }
}
const insertImageButtonClick = function () {
    insertImageButton.value.value = '';
    insertImageButton.value.click();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
