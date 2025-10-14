
    import Vue from 'vue'
    import { DocumentEditorPlugin, Selection } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorPlugin);

    
new Vue({
	el: '#app',
	template: `
      <div id="app">
          <ejs-documenteditor ref="documenteditor" :enableSelection='true' :isReadOnly=false height="370px" style="width: 100%;"></ejs-documenteditor>
      </div>
`,

        data: function() {
            return {
            };
        },
        provide: {
            DocumentEditor : [Selection]
        },
        mounted: function() {
            let defaultDocument: object = {
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
    
});