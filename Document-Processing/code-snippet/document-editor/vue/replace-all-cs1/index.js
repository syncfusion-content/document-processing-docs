
        import Vue from 'vue'
        import { DocumentEditorPlugin,  Selection, Editor, Search, OptionsPane } from '@syncfusion/ej2-vue-documenteditor';

        Vue.use(DocumentEditorPlugin);

        
new Vue({
	el: '#app',
	template: `
        <div id="app" height="350px">
            <div>
                <table>
                    <tr>
                        <td>
                            <label>Text to find:</label>
                        </td>
                        <td>
                            <input type="text" id="find_text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Text to replace:</label>
                        </td>
                        <td>
                            <input type="text" id="replace_text" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button id="replace_all" v-on:click='onReplaceButtonClick' style="float:right;margin-top: 10px;" class="e-control e-btn">Replace All</button>
                        </td>
                    </tr>
                </table>
            </div>
            <ejs-documenteditor ref="documenteditor" :enableEditor='true' :enableSearch='true' :enableOptionsPane='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
        </div>
`,

            data: function() {
                return {
                };
            },
            provide: {
                //Inject require modules.
                DocumentEditor : [ Selection, Editor, Search, OptionsPane]
            }
            methods: {
                onReplaceButtonClick: function() {
                    let textToFind: string = (document.getElementById('find_text') as HTMLInputElement).value;
                    let textToReplace: string = (document.getElementById('replace_text') as HTMLInputElement).value;
                    if (textToFind !== '') {
                        // Find all the occurences of given text
                        this.$refs.documenteditor.ej2Instances.search.findAll(textToFind);
                        if (this.$refs.documenteditor.ej2Instances.searchModule.searchResults.length > 0) {
                            // Replace all the occurences of given text
                            this.$refs.documenteditor.ej2Instances.search.searchResults.replaceAll(textToReplace);
                        }
                    }
                }
            },
            mounted() {
                let sfdt: string = `{
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
                                            "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }`;
                //Open the default document in Document Editor
                this.$refs.documenteditor.open(sfdt);
            }
        
});