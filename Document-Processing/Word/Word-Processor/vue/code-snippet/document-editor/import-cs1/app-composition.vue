<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" id="container_1" height="370px"
            style="width: 100%;display:block"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
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
    //Open the default document in Document Editor.
    documenteditor.value.open(sfdt);
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
