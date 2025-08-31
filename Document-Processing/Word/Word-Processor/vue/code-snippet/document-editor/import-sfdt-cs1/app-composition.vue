<template>
    <div id="app">
        <input type="file" ref="fileUpload" v-on:change="onFileUpload" accept=".sfdt"
            style="position:fixed; left:-100em" />
        <div>
            <button v-on:click='openFileButtonClickHandler'>Import</button>
        </div>
        <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;display:block"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

const fileUpload = ref(null);
const documenteditor = ref(null);

const openFileButtonClickHandler = function () {
    fileUpload.value.click();
}
const onFileUpload = function (e) {
    if (e.target.files[0]) {
        let file = e.target.files[0];
        if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                let contents = e.target.result;
                //Open the default document in Document Editor.
                documenteditor.value.open(contents);
            };
            fileReader.readAsText(file);
        }
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
