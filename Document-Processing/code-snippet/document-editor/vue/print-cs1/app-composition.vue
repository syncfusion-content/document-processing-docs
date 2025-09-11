<template>
    <div id="app">
        <div>
            <button v-on:click='print'>Print</button>
        </div>
        <ejs-documenteditor ref="documenteditor" :enablePrint='true' height="370px" style="width: 100%;">
        </ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, onMounted, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Print } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
provide('DocumentEditor ', [Print]);

const print = function () {
    //Print the content of the Document Editor.
    documenteditor.value.print();
}

onMounted(function () {
    let sfdt = `{
                "sections": [
                    {
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "characterFormat": {
                                            "bold": true,
                                            "italic": true
                                        },
                                        "text": "Hello World"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {
                        }
                    }
                ]
            }`;
    //Open default document in Document Editor.
    documenteditor.value.open(sfdt);
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
