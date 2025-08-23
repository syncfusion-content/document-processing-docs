<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly=false height="370px" :enableEditor='true'
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script setup>
import { provide, onMounted, ref } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor } from '@syncfusion/ej2-vue-documenteditor';

const documenteditor = ref(null);

provide('DocumentEditor ', [Selection, Editor]);

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
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Third page"
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
    //Navigate to specified page.
    documenteditor.value.ej2Instances.selection.goToPage(3);
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
