<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { DocumentEditorComponent as EjsDocumenteditor } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);
onMounted(function () {
    let defaultDocument = {
        "sections": [
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "First page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Second page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            }
        ],
        "characterFormat": {},
        "paragraphFormat": {},
        "background": {
            "color": "#FFFFFFFF"
        },
        "styles": [
            {
                "type": "Paragraph",
                "name": "Normal",
                "next": "Normal"
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            }
        ]
    }
    documenteditor.value.open(JSON.stringify(defaultDocument));
    //Scroll to specified page.
    documenteditor.value.scrollToPage(2);
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
