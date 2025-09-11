<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly=false height="370px" :enableEditor='true'
            style="width: 100%;"></ejs-documenteditor>
    </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor } from '@syncfusion/ej2-vue-documenteditor';

export default {
    name: "App",
    components: {
        "ejs-documenteditor": DocumentEditorComponent
    },
    data: function () {
        return {
        };
    },
    provide: {
        DocumentEditor: [Selection, Editor]
    },
    mounted: function () {
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
        this.$refs.documenteditor.open(JSON.stringify(defaultDocument));
        //Navigate to specified page.
        this.$refs.documenteditor.ej2Instances.selection.goToPage(3);
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
